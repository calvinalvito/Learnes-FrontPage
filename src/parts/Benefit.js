import React from "react";

export default function Benefit(){
    return (
        <>
            <div class="flex items-center justify-center mt-8">
                <h1 className="text-xl text-teal-500 font-medium">
                    Our Super Benefit
                </h1>
            </div>
                <h1 className="flex items-center justify-center text-2xl text-gray-800 font-bold">
                    Learn Faster & Learn Better
                </h1>
            <div className="flex justify-between items-center">
                <div className="w-full md:w-1/2 mt-8 md:mt-0 ml-32">
                    <h2 className="text-xl text-teal-400">Flexible Learning</h2>
                    <h3 className="text-2xl text-gray-700 font-bold mt-2">
                        Study Anywhere Anytime
                    </h3>
                    <p className="text-gray-500 mt-5">
                    Learn from anyone around the <br/> world and get a new skills
                    </p>
                    <button className="bg-orange-200 rounded-lg hover:bg-orange-300 transition-all duration-200 focus:outline-none shadow-inner text-orange-500 font-medium px-4 md:px-4 py-3 whitespace-no-wrap mt-8">
                     Study Now
                    </button>
                </div>
                <div className="hidden w-1/2 md:flex justify-start pt-24">
                    <div className="relative" style={{ width: 500, height: 500 }}>
                        <div className="absolute w-full h-full -mb-8">
                            <img
                            src="/images/benefit1.png"
                            alt="Testimonial"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-0">
                <div className="hidden w-1/2 md:flex ml-32 pt-24">
                    <div className="relative" style={{ width: 500, height: 500 }}>
                        <div className="absolute w-full h-full -mb-8">
                            <img
                            src="/images/benefit2.png"
                            alt="Testimonial"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0 ">
                    <h2 className="text-xl text-teal-400">Up to date</h2>
                    <h3 className="text-2xl text-gray-700 font-bold mt-2">
                    Always updating material
                    </h3>
                    <p className="text-gray-500 mt-4">
                    Material in accordance with technological <br/> developments
                    </p>
                    <button className="bg-orange-200 rounded-lg hover:bg-orange-300 transition-all duration-200 focus:outline-none shadow-inner text-orange-500 font-medium px-4 md:px-4 py-3 whitespace-no-wrap mt-8">
                     Show Material
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="w-full md:w-1/2 mt-8 md:mt-0 ml-32">
                    <h2 className="text-xl text-teal-400">Discussion</h2>
                    <h3 className="text-2xl text-gray-700 font-bold mt-2">
                    Private Group Study
                    </h3>
                    <p className="text-gray-500 mt-5">
                    Join a private group to consult with a class mentor,<br/>Always helpful to understand the material
                    </p>
                    <button className="bg-orange-200 rounded-lg hover:bg-orange-300 transition-all duration-200 focus:outline-none shadow-inner text-orange-500 font-medium px-4 md:px-4 py-3 whitespace-no-wrap mt-8">
                     Join Now
                    </button>
                </div>
                <div className="hidden w-1/2 md:flex justify-start pt-24">
                    <div className="relative" style={{ width: 500, height: 500 }}>
                        <div className="absolute w-full h-full -mb-8">
                            <img
                            src="/images/benefit3.png"
                            alt="Testimonial"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    }