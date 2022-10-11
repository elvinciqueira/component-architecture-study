import { withTemplateConfig } from "@src/services/template/withTemplateConfig";
export { default } from "@src/modules/home/Home";

export async function getStaticProps() {
    const props = await withTemplateConfig();
    return { props }
}