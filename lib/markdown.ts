import { marked } from "marked";
import hljs from "highlight.js";

marked.setOptions({
  highlight: (code, lang) => {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
});

export default async function (project: string) {
  const URL = `https://raw.githubusercontent.com/KaikSelhorst/${project}/main/README.md`;

  const { data: markdown } = await useFetch(URL);
  if (typeof markdown.value !== "string") return "";
  return marked.parse(markdown.value);
}
