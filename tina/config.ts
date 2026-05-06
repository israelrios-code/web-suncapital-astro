import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "src/content",
        format: "json",
        fields: [
          section("nav", "Navigation", [
            text("logo"), listText("links"), text("cta")
          ]),
          mediaSection("hero", "Hero"),
          listCards("services", "Services", ["tag", "title", "body", "button", "image"]),
          section("logos", "Logos", [text("title"), text("highlight"), area("body"), listImage("items")]),
          section("audience", "Audience", [image("image"), text("title"), area("body"), text("button")]),
          mediaSection("onboard", "Onboard"),
          simpleSection("benefits", "Benefits"),
          simpleSection("stats", "Stats"),
          section("industries", "Industries", [text("title"), text("highlight"), text("suffix"), area("body"), text("button")]),
          section("caseStudy", "Case study", [text("kicker"), text("title"), area("body"), text("tag")]),
          section("certifications", "Certifications", [
            text("title"),
            area("body"),
            objectList("items", "Certificates", [text("status"), text("title"), image("image")])
          ]),
          section("awards", "Awards", [text("title"), area("body"), listImage("images")]),
          section("team", "Team", [
            text("title"),
            text("highlight"),
            text("suffix"),
            area("body"),
            objectList("items", "People", [text("name"), text("role"), image("image")])
          ]),
          section("mission", "Mission", [
            text("title"),
            area("body"),
            image("image"),
            objectList("items", "Mission cards", [text("title"), area("body")])
          ]),
          section("history", "History", [
            text("title"),
            image("image"),
            objectList("items", "Timeline", [text("year"), text("title"), area("body")])
          ]),
          section("recognitions", "Recognitions", [text("title"), area("body"), listImage("images")]),
          mediaSection("finalCta", "Final CTA"),
          mediaSection("cta", "Final CTA"),
          section("faq", "FAQ", [area("title"), listText("items")]),
          section("news", "News", [text("title"), area("body")]),
          section("articles", "Articles", [
            text("title"),
            objectList("items", "Articles", [text("date"), text("title"), area("body"), text("button"), image("image")])
          ]),
          section("form", "Contact form", [
            objectList("fields", "Fields", [text("label"), text("placeholder"), text("type")]),
            text("button"),
            area("note")
          ]),
          section("locations", "Locations", [
            text("title"),
            text("phone"),
            objectList("items", "Offices", [text("city"), area("address")])
          ]),
          section("cities", "Cities", [text("title"), area("body")]),
          mediaSection("problem", "Onboard problem"),
          section("capabilities", "Onboard capabilities", [text("title")]),
          section("process", "Onboard process", [text("chip"), text("title"), text("button")]),
          section("footer", "Footer", [area("body"), text("office"), text("address"), text("coverage"), text("email"), text("phone")])
        ],
      },
    ],
  },
});

function text(name: string, label = name) {
  return { type: "string" as const, name, label };
}

function area(name: string, label = name) {
  return { type: "string" as const, name, label, ui: { component: "textarea" } };
}

function image(name: string, label = name) {
  return { type: "image" as const, name, label };
}

function listText(name: string, label = name) {
  return { type: "string" as const, name, label, list: true };
}

function listImage(name: string, label = name) {
  return { type: "image" as const, name, label, list: true };
}

function section(name: string, label: string, fields: any[]) {
  return { type: "object" as const, name, label, fields };
}

function mediaSection(name: string, label: string) {
  return section(name, label, [text("title"), text("highlight"), area("body"), text("button"), image("image")]);
}

function simpleSection(name: string, label: string) {
  return section(name, label, [text("title"), text("highlight"), area("body"), text("button")]);
}

function listCards(name: string, label: string, fieldNames: string[]) {
  return section(name, label, [
    text("title"),
    area("body"),
    {
      type: "object" as const,
      name: "items",
      label: "Items",
      list: true,
      fields: fieldNames.map((field) => field === "image" ? image(field) : field === "body" ? area(field) : text(field)),
    },
  ]);
}

function objectList(name: string, label: string, fields: any[]) {
  return { type: "object" as const, name, label, list: true, fields };
}
