import process from "node:process";
import tailwindcss from "@tailwindcss/vite";

const siteUrl = (
  process.env.NUXT_PUBLIC_SITE_URL || "https://www.minato-dental.jp"
).replace(/\/$/, "");
const title = "みなと歯科クリニック | 笑顔の芽を、育てよう。";
const description =
  "東京都港区高輪のみなと歯科クリニック。お子さまから大人まで、一人ひとりに寄り添う歯科診療を。";

export default defineNuxtConfig({
  compatibilityDate: "2026-10-03",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      htmlAttrs: { lang: "ja" },
      title,
      meta: [
        { name: "description", content: description },
        { name: "theme-color", content: "#c0b9dd" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ja_JP" },
        { property: "og:site_name", content: "みなと歯科クリニック" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `${siteUrl}/` },
        { property: "og:image", content: `${siteUrl}/seo_image.png` },
        { property: "og:image:type", content: "image/png" },
        { property: "og:image:width", content: "1735" },
        { property: "og:image:height", content: "906" },
        {
          property: "og:image:alt",
          content: "みなと歯科クリニックの明るい待合室",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: `${siteUrl}/seo_image.png` },
        {
          name: "twitter:image:alt",
          content: "みなと歯科クリニックの明るい待合室",
        },
      ],
      link: [
        { rel: "canonical", href: `${siteUrl}/` },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&display=swap",
        },
      ],
    },
  },
});
