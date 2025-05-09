import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";
import { createFile, processAndUploadImage, slugify } from "./newpost.mjs";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const newpostAI = async (req, res) => {
  const data = req.body;
  if (!data?.url) {
    res.status(400).json({ message: "Data tidak valid" });
    return;
  }

  const url = data.url;

  try {
    const response = await fetch("https://crawl4ai.b.app.web.id/md", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        f: "raw",
        q: null,
        c: "0",
      }),
    });

    if (!response.ok) {
      res.status(response.status).json({ message: "Failed to fetch data" });
      return;
    }

    const result = await response.json();

    /** @type {string} */
    const md = result.markdown;


    const openai = new OpenAI({
      apiKey: "sk-cb7c980a8635419abd5bb7853294e110",
      baseURL: "https://api.deepseek.com",
    });

    const systemPrompt = `
      The user will provide some exam unstructured markdown text. Extract main article text, the title, and the featured image link. For the main article text, also paraphrase it to make it more readable. Generate an excerpt for the article in 1 sentence. The output should be in JSON format with the following structure:
      
      {
          "title": "string",
          "featuredImage": "string",
          "excerpt" : "string",
          "content": "string in markdown format"
      }
    `

    const user_prompt = md;

    const aiResponse = await openai.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: user_prompt,
        }
      ],
      response_format: {
        'type': 'json_object'
      }
    })

    /** @type {{title:string, excerpt:string, content:string, featuredImage:string}} */
    const jsonResult = JSON.parse(aiResponse.choices[0].message.content || "{}");

    const author = {
      name: "",
      picture: "",
    }
    const ogImage = {
      url: "",
    }

    const TITLE = jsonResult.title.replace(/'/g, "&#39;");
    const excerpt = jsonResult.excerpt.replace(/'/g, "&#39;");
    const coverImage = jsonResult.featuredImage;
    const date = new Date().toISOString();
    const FILE_PATH = `_posts/${slugify(date)}-${slugify(TITLE)}.md`;
    author.name = data?.author?.name?.replace(/'/g, "&#39;") || "Admin";
    author.picture =
      data?.author?.picture ||
      "https://api.dicebear.com/9.x/icons/svg?seed=Maria";
    ogImage.url = await processAndUploadImage(
      coverImage,
      `ogimage-${date}-${slugify(TITLE)}.jpg`,
    );

    const metadata = `---
title: '${TITLE}'
excerpt: '${excerpt}'
coverImage: '${ogImage.url}'
date: '${date}'
author:
  name: ${author.name}
  picture: '${author.picture}'
ogImage:
  url: '${ogImage?.url}'
---

`;

    const postContent = jsonResult.content;

    const content = metadata + postContent;
    await createFile(content, FILE_PATH);

    res.json({ message: "Post berhasil dibuat" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }


};
