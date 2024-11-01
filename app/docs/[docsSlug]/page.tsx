import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import NavigationBar from "@/components/navigation_bar/NavigationBar";
import ServicesSideBar from "@/components/service-side-bar/ServiceSideBar";
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

export default async function VisaPage({
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

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className=" w-full items-center bg-gradient-to-r from-gray-400 to-slate-200 justify-center pb-24">
      <NavigationBar />
      <ServicesSideBar posts={posts} />
      <div className="w-full flex flex-col md:px-80 px-4">
        <div className="prose w-full md:max-w-none bg-white p-5 z-30 mt-[100px]  rounded-xl shadow-xl">
          <h1 className="font-semibold text-2xl py-5">{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </div>
    </div>
  );
}
