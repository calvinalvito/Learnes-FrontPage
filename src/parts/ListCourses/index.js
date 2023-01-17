import React from "react";

import Link from "next/link";

import RenderItem from "./RenderItem";

export default function ListCourses({ data }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-teal-400">Our Recomended</h2>
          <h3 className="text-xl font-bold text-gray-800">
          Learn New Skills <br/>According to Your Interests
          </h3>
        </div>
        <div className="w-auto">
          <Link href="/courses">
            <a className="text-gray-600 hover:underline text-sm">
              View All Course
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-start items-center -mx-4 mt-6">
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className="w-full text-center-py-12">No Item Found</div>
        )}
      </div>
    </>
  );
}
