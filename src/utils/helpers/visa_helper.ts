import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { PostApiResponse, PostInfo } from "@/consts/types/post";
export const readVisaInfo = (): PostApiResponse => {
  const dirPathToRead = path.join(process.cwd(), "documents/docs_md");
  const dirs = fs.readdirSync(dirPathToRead);
  const data = dirs.map((filename) => {
    const filePathToRead = path.join(
      process.cwd(),
      "documents/docs_md/" + filename
    );
    const fileContect = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
    const matterData = matter(fileContect).data;

    const postInfo: PostInfo = {
      title: matterData.title || "",
      slug: matterData.slug || "",
      meta: matterData.meta || "",
    };

    return postInfo;
  });

  const postApiResponse: PostApiResponse = {
    postInfo: data,
  };

  return postApiResponse;
};
