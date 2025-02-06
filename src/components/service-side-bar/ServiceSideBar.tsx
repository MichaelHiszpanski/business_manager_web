"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import useOutsideClick from "@/utils/helpers/useOutsideClick";

interface SidebarProps {
  posts: { title: string; slug: string }[];
}

const ServicesSideBar: React.FC<SidebarProps> = ({ posts }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  useOutsideClick(navRef, () => setIsExpanded(false));
  const handleDropdownClick = (slug: string) => {
    setOpenDropdown(openDropdown === slug ? null : slug);
  };

  const handleHeadingClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = () => {
    setIsExpanded(false);
  };

  return (
    <aside className=" w-max   md:w-1/5 bg-transparent md:p-6 p-2 sticky left-0 top-[150px] cursor-pointer z-10">
      <nav ref={navRef}>
        <h2
          className="text-2xl md:text-3xl font-bold mb-4 text-colorFour cursor-pointer select-none "
          onClick={handleHeadingClick}
        >
          Content
        </h2>
        {isExpanded && (
          <ul className=" bg-colorOne md:p-3 p-1 rounded-lg absolute w-max px-2 border-2 border-colorTwo">
            {posts.map((post) => (
              <li key={post.title} className="mb-2">
                <div
                  onClick={() => handleDropdownClick(post.slug)}
                  className="cursor-pointer"
                >
                  <p className="mt-4 text-[16px] md:text-sm  text-colorFour hover:text-white">
                    {post.title}
                  </p>
                </div>
                {openDropdown === post.slug && (
                  <div className="mt-2 ml-4">
                    <Link href={`/docs/${post.slug}`}>
                      <p
                        className="mt-4 text-[14px] md:text-sm text-colorTwo hover:font-semibold hover:text-colorSix"
                        onClick={handleLinkClick}
                      >
                        Read more
                      </p>
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </aside>
  );
};

export default ServicesSideBar;
