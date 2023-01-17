import React, { useState } from "react";

export default function Hero() {
  const [state, setstate] = useState(() => "");

  function submit() {
    window.open(
      `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register?email=${state}`
    );
  }
  return (
    <div className="flex justify-between items-center">
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <h1 className="text-5xl text-white mb-5 font-semibold">
          <span className="text-teal-400">Build Skills</span> With
          <br className="hidden md:block" /> Flexibel{" "}
          <span className="text-teal-400">Online Course</span>
        </h1>
        <p className="text-white font-light text-lg mb-8">
        Join millions of learners from around the world!{" "}
          <br className="hidden md:block" /> Find the
        right instructor for you. Any topic, skill level and language
        </p>

        <form onSubmit={submit} className="flex">
          <button className="bg-orange-500 rounded-lg hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 md:px-6 py-3 whitespace-no-wrap">
            Daftar Sekarang
          </button>
        </form>
      </div>
      <div className="hidden w-1/2 md:flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 500, height: 500 }}>
          <div className="absolute w-full h-full -mb-8 -ml-0">
            <img
              src="/images/img-hero.png"
              alt="Testimonial"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
