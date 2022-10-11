import { getAllPosts } from "@src/modules/posts/posts.client";
import { withTemplateConfig } from "@src/modules/template/withTemplateConfig";
export { default } from "@src/modules/home/Home";

export async function getStaticProps() {
  return {
    props: await withTemplateConfig({
      posts: await getAllPosts(),
    }),
  };
}
