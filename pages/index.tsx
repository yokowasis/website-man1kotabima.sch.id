import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";
import EduIndex from "../components/edu";
import Head from "next/head";
import { Settings, settings } from "../settings";

type Props = {
  allPosts: Post[];
  s: Settings;
};

export default function Index({ allPosts, s }: Props) {
  return (
    <>
      {/* <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout> */}
      <Head>
        <title>Official Website {s.InfoSekolah.Nama}</title>
      </Head>
      <EduIndex posts={allPosts} settings={s} />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts, s: settings },
  };
};
