import { getPostBySlug, getAllPosts } from "../../lib/apiPages";

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
  slugPath: string;
};

export default function Page({ slugPath }: Props) {
  const router = useRouter();
  const [s, setS] = useState<Settings | null>(null);
  const [post, setPost] = useState<any>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    
    Promise.all([
      DataSettings.loadAll(),
      import("../../lib/tables/pages").then(m => m.DataPages.bySlug(slugPath)),
    ]).then(async ([settings, record]) => {
      if (cancelled) return;
      setS(settings);
      const content = await markdownToHtml(record.content || "");
      setPost({
        slug: record.slug,
        title: record.title || slugPath,
        date: record.created || "",
        author: { name: "Admin", picture: "" },
        content: content.replace("---SEPARATOR---", ""),
        ogImage: { url: "" },
        coverImage: "",
      });
    }).catch(err => {
      if (!cancelled) {
        console.error(err);
        setLoadError(true);
      }
    });
    
    return () => { cancelled = true; };
  }, [slugPath]);

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

  if (!post?.slug) {
    return <ErrorPage statusCode={404} />;
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
        <div className="row">
          <div className="col mb-3">
            Penulis : {post.author?.name || "Admin"}, {post.date}
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

export async function getStaticProps({ params }: any) {
  const slugPath = params.slug.join("/");
  return {
    props: { slugPath },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post: any) => {
      const slugPath = post.slug.replace(/\.md$/, "");
      const slugArray = slugPath.split("/");
      return {
        params: { slug: slugArray },
      };
    }),
    fallback: false,
  };
}
