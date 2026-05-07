import { getPostBySlug, getAllPosts } from "../../lib/api";

import { useRouter } from "next/router";
import ErrorPage from "next/error";
import markdownToHtml from "../../lib/markdownToHtml";
import type { Settings } from "../../settings";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DataSettings } from "../../lib/tables/settings";

type Props = {
  slug: string;
};

export default function Post({ slug }: Props) {
  const router = useRouter();
  const [s, setS] = useState<Settings | null>(null);
  const [post, setPost] = useState<any>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    
    Promise.all([
      DataSettings.loadAll(),
      import("../../lib/tables/posts").then(m => m.DataPosts.bySlug(slug)),
    ]).then(async ([settings, record]) => {
      if (cancelled) return;
      setS(settings);
      const content = await markdownToHtml(record.content || "");
      setPost({
        slug: record.slug,
        title: record.title,
        date: record.date || record.created,
        author: { name: record.author_name || "Admin", picture: record.author_picture || "" },
        coverImage: record.cover_image || "",
        ogImage: { url: record.cover_image || "" },
        content: content.replace("---SEPARATOR---", ""),
      });
    }).catch(err => {
      if (!cancelled) {
        console.error(err);
        setLoadError(true);
      }
    });
    
    return () => { cancelled = true; };
  }, [slug]);

  if (loadError) {
    return <ErrorPage statusCode={404} />;
  }

  if (!s || !post) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const title = `${post.title} | Official Website ${s.InfoSekolah.Nama}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={post?.ogImage?.url || ""} />
      </Head>
      <Header s={s} />

      <div
        className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn mb-0"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn",
          background: `linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)), url(${
            post.coverImage || "/img/banner.jpg"
          }) center center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 text-white slideInDown mb-4">
            {post.title}
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item text-white">Home</li>
              <li className="breadcrumb-item text-white">Pages</li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                {post.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container pt-5" id="post">
        <div className="row mb-3" style={{ borderBottom: "solid 1px #ccc" }}>
          <div className="col mb-3 d-flex gap-3">
            <img
              src={post.author.picture}
              style={{ width: 45, height: 45 }}
              alt={post.author.name}
            />
            <div>
              <p style={{ fontWeight: "bold" }} className="m-0 text-success">
                {post.author.name}
              </p>
              <p className="m-0 text-danger">{post.date}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </div>

      <Footer s={s} />
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  return {
    props: { slug: params.slug },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}
