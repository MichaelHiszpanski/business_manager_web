import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import ServicesSideBar from "@/components/ServicesSideBar/ServiceSideBar";
import remarkStringify from "remark-stringify";
interface Frontmatter {
  title: string;
  meta: string;
  slug: string;
}

function getAllPosts() {
  const dirPath = path.join(process.cwd(), "documents/docs_md");
  const filenames = fs.readdirSync(dirPath);

  return filenames.map((filename) => {
    const filePath = path.join(dirPath, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    const frontmatter = data as Frontmatter;

    return {
      title: frontmatter.title,
      slug: frontmatter.slug,
    };
  });
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ docsSlug: string }>;
}) {
  const { docsSlug } = await params;

  const filePath = path.join(
    process.cwd(),
    "documents/docs_md",
    `${docsSlug}.md`
  );
  if (!fs.existsSync(filePath)) {
    return notFound();
  }
  const posts = getAllPosts();
  if (!posts) {
    return <div>Error: Post not found</div>;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const frontmatter = data as Frontmatter;

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);

  const contentHtml = processedContent.toString();

  return (
    <div className=" w-full items-start bg-gradient-to-r from-colorSix to-colorSeven justify-start  pb-24 pt-[100px] flex flex-col  ">
      <ServicesSideBar posts={posts} />

      <div className="flex flex-col w-full  items-center">
        <div className="  max-w-[1000px] flex flex-col items-center justify-center px-4">
          <div className="prose w-full md:max-w-none bg-white p-5 mt-[100px]  rounded-xl shadow-xl">
            <h1 className="font-semibold text-3xl py-5 select-none text-colorFive">
              {frontmatter.title}
            </h1>
            <div
              dangerouslySetInnerHTML={{ __html: contentHtml }}
              className=" select-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
