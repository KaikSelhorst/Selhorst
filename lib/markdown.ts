import { marked } from "marked";
import hljs from "highlight.js";

marked.setOptions({
  highlight: (code, lang) => {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
});

export default async function (url: string) {
  const { data: markdown } = await useFetch(url);
  if (typeof markdown.value !== "string") return "";
  return marked.parse(markdown.value);
}
