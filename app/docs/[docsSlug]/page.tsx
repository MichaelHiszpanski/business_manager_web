import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";

interface Frontmatter {
  title: string;
  meta: string;
  slug: string;
}

interface VisaPageProps {
  params: {
    docsSlug: string;
  };
}

export default async function VisaPage({
  params,
}: {
  params: { docsSlug: string };
}) {
  const { docsSlug } = params;

  const filePath = path.join(
    process.cwd(),
    "documents/docs_md",
    `${docsSlug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const frontmatter = data as Frontmatter;

  return (
    <div className="flex mt-[100px] flex-col w-full items-center bg-gradient-to-r from-gray-400 to-slate-200 justify-center pb-24">
      <div className="prose w-full bg-white p-5">
        <h1 className="font-semibold text-2xl py-5">{frontmatter.title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}
