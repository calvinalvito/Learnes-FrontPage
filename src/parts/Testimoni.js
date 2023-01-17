import React from "react";
import Star from "src/components/Star";

export default function Testimoni(){
    return(
        <>
        <div class="mb-8 text-center">
            <h2 class="text-xl font-bold text-teal-500">Testimonials</h2>
            <p class="text-2xl text-gray-800 font-bold">What Students Say</p>
        </div>
        <div class="lg:grid lg:grid-cols-3 lg:gap-x-2">
            <div class="p-4 text-gray-800 rounded-lg shadow-md">
                <div class="mb-2">
                    <div className="mb-2 text-center justify-center">
                    <Star value={5} width={26} height={26}></Star>
                    </div>
                    <p class="mb-2 text-center text-gray-600 ">
                        " I was not really into code but after they teach me how to train my logic then I was really fall in love with code "
                    </p>
                    <div class="flex flex-col items-center justify-center">
                        <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                            <img src="" alt="img"
                                class="object-cover object-center w-full h-full" />
                        </div>
                        <h5 class="font-bold text-indigo-600">Budi</h5>
                        <p class="text-sm text-gray-600">UI/UX Student</p>
                    </div>
                </div>
            </div>
            <div class="p-4 text-gray-800 rounded-lg shadow-md">
                <div class="mb-2">
                    <div className="mb-2 text-center justify-center">
                    <Star value={5} width={26} height={26}></Star>
                    </div>
                    <p class="mb-2 text-center text-gray-600 ">
                        " Code is really important if we want to build a company and strike to the win "
                    </p>
                    <div class="flex flex-col items-center justify-center">
                        <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                            <img src="" alt="img"
                                class="object-cover object-center w-full h-full" />
                        </div>
                        <h5 class="font-bold text-indigo-600">Michel Charic</h5>
                        <p class="text-sm text-gray-600">Full Stack Dev Student</p>
                    </div>
                </div>
            </div>
            <div class="p-4 text-gray-800 rounded-lg shadow-md">
                <div class="mb-2">
                    <div className="mb-2 text-center justify-center">
                    <Star value={5} width={26} height={26} ></Star>
                    </div>
                    <p class="mb-2 text-center text-gray-600 ">
                        " My background is design and art but I do really love how to make my design working in the development phase "
                    </p>
                    <div class="flex flex-col items-center justify-center">
                        <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                            <img src="" alt="img"
                                class="object-cover object-center w-full h-full" />
                        </div>
                        <h5 class="font-bold text-indigo-600">James K</h5>
                        <p class="text-sm text-gray-600">Front-End Student</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}