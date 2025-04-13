import Footer from "@/components/footer/Footer";
import type { NextPage } from "next";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import React from "react";
import Link from "next/link";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import ServiceCard from "@/components/ServiceCard/ServiceCard";

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
    <section className="min-h-screen pt-[100px]   flex flex-col items-center  bg-gradient-to-r from-colorOne to-colorSeven md:px-[10%]">
      <div className="container mb-24   w-full px-4">
        <h1 className="text-5xl font-bold text-center text-colorSix my-12 font-orbitron_variable">
          Sevices
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {response.map((post: any) => (
            <ServiceCard post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Docs;
