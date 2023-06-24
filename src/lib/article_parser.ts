import path from "path";
import matter from "gray-matter";
import fs from "fs";
import { remark } from "remark";
import html from "remark-html";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype/lib";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkDirective from "remark-directive";

import { article } from "@/types/article_type";
import handle_css_classes from "@/lib/html_tree_handler";

function getAllArticles() {
  const articlesDirectory = path.join(process.cwd(), "articles");
  const fileNames = fs.readdirSync(articlesDirectory);

  const articlesData: article[] = fileNames.map((fileName) => {
    const name = fileName.replace(".md", "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContent);

    const md_to_html = remark()
      .use(html, { sanitize: true })
      .use(remarkDirective)
      .use(handle_css_classes)
      .use(remarkMath)
      .use(remarkRehype)
      .use(rehypeKatex)
      .use(rehypeStringify)
      .processSync(matterResult.content)
      .toString();

    const result: article = {
      name: name,
      content: md_to_html,
      text_content: matterResult.content,
    };

    return result;
  });

  return articlesData;
}

export { getAllArticles };
