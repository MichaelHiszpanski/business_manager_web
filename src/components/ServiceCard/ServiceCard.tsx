import Link from "next/link";
import React, { FC } from "react";
interface Props {
  post: any;
}
const ServiceCard: FC<Props> = ({ post }) => {
  return (
    <Link
      href={`docs/${post.slug}`}
      key={post?.title}
      className=" p-8 rounded-xl  hover:scale-105 transition-transform duration-150 ease-in-out
               shadow-lg shadow-white bg-colorFive relative border border-colorSix "
    >
      <h3 className=" text-xl font-semibold text-colorSix font-orbitron_variable select-none">
        {post.title}
      </h3>
      <p className=" mt-4 text-sm text-colorSeven font-mono mb-2 select-none">
        {post.meta}
      </p>
      <p className=" absolute bottom-3 right-8 font-orbitron_variable text-sm text-white select-none">
        Read more...
      </p>
    </Link>
  );
};

export default ServiceCard;
