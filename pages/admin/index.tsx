import type { NextPage } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: "sk-cb7c980a8635419abd5bb7853294e110",
  dangerouslyAllowBrowser: true,
});

async function fetchNewsData(url: string) {
  const response = await fetch("https://crawl4ai.b.app.web.id/md", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
      f: "raw",
      q: null,
      c: "0",
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.markdown;
}

const AdminIndex: NextPage<{ someProps: string }> = (props) => {
  const handlePost = async () => {
    const url = (document.getElementById("url") as HTMLInputElement).value;
    const content = await fetchNewsData(url);
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `
          The user will provide text news. Your task is to convert the main news to markdown format.
          
          Output the response in json. The output should be in the following format:
          {
            "title": "Title of the news",
            "content": "Content of the news in markdown format",
            "tags": ["tag1", "tag2", ...],
            "category": "Category of the news",
            "date": "Date of the news",
            "featured_image": "https://example.com/featured_image.jpg",
          }
      `,
        },
        {
          role: "user",
          content,
        },
      ],
      model: "deepseek-chat",
      response_format: {
        type: "json_object",
      },
    });

    console.log(completion.choices[0].message.content);
  };

  const test = async () => {
    const r = await (
      await fetch("/api/post/test", {
        method: "PSOT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: (document.getElementById("url") as HTMLInputElement).value,
        }),
      })
    ).json();

    console.log(r);
  };

  return (
    <div className="container pt-3">
      <h1 className="text-center text-blue-800 font-bold uppercase text-3xl mb-3">
        LLM AutoPost
      </h1>
      <input
        type="text"
        className="w-full p-2 border-2 border-gray-300 rounded-md active:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        placeholder="Put URL Here"
        id="url"
      ></input>
      <button
        onClick={test}
        type="button"
        className="w-full bg-blue-500 text-white p-2 rounded-md font-semibold hover:bg-blue-600 transition duration-200 ease-in-out shadow-blue-600"
      >
        POST
      </button>
    </div>
  );
};

export default AdminIndex;
