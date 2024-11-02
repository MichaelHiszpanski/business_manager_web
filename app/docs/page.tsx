import Footer from "@/components/footer2/Footer";
import type { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";
import NavigationBar from "@/components/navigation_bar/NavigationBar";
import React, { FC } from "react";
import { PostApiResponse } from "@/consts/types/post";
import { readVisaInfo } from "@/utils/helpers/visa_helper";
import Link from "next/link";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

const Docs: NextPage = ({}) => {
  const dirPathToRead = path.join(process.cwd(), "documents/docs_md");
  const files = fs.readdirSync(dirPathToRead);

  const response = files.map((filename) => {
    const filePath = path.join(dirPathToRead, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      title: data.title,
      slug: data.slug,
      meta: data.meta,
    };
  });

  return (
    <section className="min-h-screen  flex flex-col items-center   bg-gradient-to-r from-colorThree to-white ">
      <NavigationBar />
      <div className="container mb-24 z-30 w-full px-4">
        <h1 className="text-5xl font-bold text-center text-colorFive my-12 font-orbitron_variable">
          Sevices
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {response.map((post: any) => (
            <Link
              href={`docs/${post.slug}`}
              key={post?.title}
              className=" p-8 rounded-md shadow-md bg-neutral-200 relative"
            >
              <h3 className=" text-xl font-semibold text-black font-orbitron_variable">
                {post.title}
              </h3>
              {/* <p className=" mt-4 text-sm text-gray-700">{post.slug}</p> */}
              <p className=" mt-4 text-sm text-gray-500 font-mono mb-2">
                {post.meta}
              </p>
              <p className=" absolute bottom-2 right-8 font-orbitron_variable text-sm">
                Read more...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Docs;
