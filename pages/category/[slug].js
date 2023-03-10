import React from "react";
import { useRouter } from "next/router";
import { Categories, PostWidget, PostCard, Loader } from "../../components";
import { getCategories, getCategoryPost } from "../../services";

const categoriesPost = ({ posts }) => {
  console.log(posts);
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default categoriesPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getCategoryPost(params.slug);
  return {
    props: {
      posts: data,
    },
    // Revalidate the page every 10 seconds to update the data
    revalidate: 10,
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getCategories();
  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
