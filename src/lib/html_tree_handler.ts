import { visit } from "unist-util-visit";
import { h } from "hastscript";

function handle_css_classes() {
  return (tree: unknown): void => {
    visit(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      tree,
      (node: { data: any; name: string; attributes: any; type: string }) => {
        if (
          node.type === "textDirective" ||
          node.type === "leafDirective" ||
          node.type === "containerDirective"
        ) {
          const data = node.data || (node.data = {});
          const hast = h(node.name, node.attributes);

          data.hName = hast.tagName;
          data.hProperties = hast.properties;
        }
      }
    );
  };
}

export default handle_css_classes;
