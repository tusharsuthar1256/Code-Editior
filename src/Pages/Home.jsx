import React, { useEffect } from 'react'
import Footer from '../Components/Footer'   
function Home() {
    // ExecuteGeminiAPI("Write a story about a magic backpack.");
    

    
     return (
         <>
 <div className="container px-6 py-16 mx-auto text-center ">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                        Transform Your Coding Experience with Our Advanced Code Editor
                    </h1>
                    <p className="mt-6 text-gray-500 dark:text-gray-300">
                        Effortlessly write and execute code with features like speech-to-text transcription and image-to-text conversion. 
                    </p>
                    <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                        Start Your Free Trial
                    </button>
                    <p className="mt-3 text-sm text-gray-400">No credit card required</p>
                </div>

                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Voice-to-Code Functionality</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Speak your code aloud, and watch as it seamlessly transforms into executable code with our AI-powered speech recognition.
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                    <img className="size-full object-cover object-top" src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png" alt="Voice to Code"/>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Image-to-Code Conversion</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Upload handwritten code or any text image, and our advanced algorithms will convert it into editable code instantly.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                <img className="w-full max-lg:max-w-xs" src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png" alt="Image to Code"/>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Fully Responsive Design</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Our editor is designed to work seamlessly on all devices, ensuring you can code anywhere, anytime.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                                <img className="h-[min(152px,40cqw)] object-cover object-center" src="https://tailwindui.com/plus/img/component-images/bento-03-security.png" alt="Responsive Design"/>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Robust Security</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Your code and data are safe with us. We implement top-notch security measures to protect your work.
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow">
                                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                            <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">Editor.jsx</div>
                                            <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-14 pt-6">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
            <section className="bg-white dark:bg-gray-900 pt-6 pb-16">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                        Explore Our <br /> Awesome <span className="text-blue-500">Features</span>
                    </h1>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5v14m0 0H7a2 2 0 00-2-2m4 2h8m-8-2h8" />
                                </svg>
                            </span>
                            <h2 className="text-lg font-medium text-gray-700 capitalize dark:text-white">Advanced Code Suggestions</h2>
                            <p className="text-gray-500 dark:text-gray-300">
                                Leverage our intelligent code suggestions and completions for faster coding.
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v2a2 2 0 01-2 2h-2m-3-4h-4m0 0V8m0 4h4m-4 0V8" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8h4a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                </svg>
                            </span>
                            <h2 className="text-lg font-medium text-gray-700 capitalize dark:text-white">Multi-Language Support</h2>
                            <p className="text-gray-500 dark:text-gray-300">
                                Write code in multiple languages with our built-in syntax highlighting.
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4-2H7m2 2a1 1 0 11-2 0m0 8h6m-2 0a1 1 0 01-1 1H7a1 1 0 01-1-1v-1h6v1z" />
                                </svg>
                            </span>
                            <h2 className="text-lg font-medium text-gray-700 capitalize dark:text-white">Code Execution</h2>
                            <p className="text-gray-500 dark:text-gray-300">
                                Execute your code and see results instantly without switching tools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    <div className="flex items-center justify-center w-full h-screen bg-[#111827] p-4">
      <div className="w-full max-w-lg md:max-w-3xl p-6 bg-[#1F2937] rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-8">Feedback Form</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 bg-[#111827] border border-[#333] text-white rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 outline-none transition duration-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 bg-[#111827] border border-[#333] text-white rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 outline-none transition duration-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-lg font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="6"
              className="w-full px-4 py-3 bg-[#111827] border border-[#333] text-white rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 outline-none transition duration-300"
              placeholder="Enter your feedback"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    

          </>
     )
}

export default Home
