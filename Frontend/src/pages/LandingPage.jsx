import flowchart from "../assets/flowchart.png"
import github from "../assets/github.png"
import user from "../assets/user.png"
import chat from "../assets/chat.png"
import file from "../assets/file.png"
import test from "../assets/test.png"
import verified from "../assets/verified.png"
import thunder from "../assets/thunder.png"
import workflow from "../assets/workflow.png"
import program from "../assets/program.png"
import app_logo from "../assets/app_logo.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import Carousel from "../components/Carousel"
import { useEffect } from "react"
import {useNavigate} from "react-router-dom"


export default function LandingPage() {
  const navigate = useNavigate();

  const loginHandler = ()=>{
    window.location.href = "http://localhost:3000/github/login";
  }
  return (
    <div className="bg-linear-to-br from-[#030712] via-[#0B1026] to-[#020617] text-white">
        <nav className="border-b border-slate-800" id="home">
            <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
                <div className="flex gap-2">
                    <img src={app_logo} alt="app_logo" className="w-10 h-10 rounded-[100%]"/>
                    <h1 className="font-bold text-xl">Repo Copilot</h1>
                </div>

                <div className="flex gap-8">
                    <a href="#features">Features</a>
                    <a href="#how-it-works">How it works</a>
                    <a href="#docs">Docs</a>
                </div>

                <button onClick={loginHandler} className="flex gap-2 items-center bg-linear-to-r from-violet-500 to-cyan-500 px-4 py-2 rounded-lg hover:scale-105 duration-700 cursor-pointer">
                    <img src={github} alt="github_icon" className="w-6 h-6"/>
                    Continue with Github
                </button>
            </div>
        </nav>

        <section className="py-32 text-center">
            <h1 className="text-7xl font-bold max-w-5xl mx-auto">
                Understand Any
                <span className="text-blue-500"> GitHub Repository </span>
                in Minutes
            </h1>

            <p className="text-slate-400 mt-8 max-w-3xl mx-auto text-xl">
                Chat with codebases,generate documentation,
                review code and visualize architecture.
            </p>

            <button onClick={loginHandler} className="px-8 py-4 gap-4 mt-10 rounded-xl bg-linear-to-r from-violet-500 to-cyan-500 hover:scale-105 duration-600 cursor-pointer">
                Continue with GitHub
            </button>
        </section>

        <section className="overflow-hidden bg-linear-to-r from-[#030712] via-[#0B1026] to-[#020617] py-15 px-6">
                    <div className="relative mx-auto w-[95%]">
                        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#12141D] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                            <div className="flex items-center gap-4 border-b border-white/5 bg-[#171923] px-6 py-4">
                                <div className="flex gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-500"></span>
                                    <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                                </div>

                                <p className="text-sm text-gray-400">repo/react.js</p>
                            </div>

                            <div className="grid lg:grid-cols-[260px_1fr_360px] min-h-155">
                                <aside className="hidden border-r border-white/5 p-8 lg:block">
                                    <ul className="space-y-5 text-[17px] text-gray-300">
                                        <li>📁 src</li>
                                        <li className="ml-5">📁 components</li>
                                        <li className="ml-5">📁 pages</li>
                                        <li className="ml-5">📄 App.tsx</li>
                                        <li className="ml-5">📄 main.tsx</li>
                                        <li>📁 public</li>
                                        <li className="ml-5">📄 package.json</li>
                                        <li className="ml-5">📄 README.md</li>
                                    </ul>
                                </aside>

                                <div className="p-12">
                                    <h2 className="mb-8 text-2xl font-semibold text-white flex gap-4">
                                        <img src={user} className="w-10 h-10 rounded-[100%]"/>Explain how routing works in this repo.
                                    </h2>

                                    <div className="flex flex-col gap-6 md:flex-row">
                                        <img src={app_logo} alt="app_logo" className="w-10 h-10 rounded-[100%]"/>

                                        <div className="flex-1">
                                            <p className="leading-8 text-gray-300">
                                                Next.js uses a file-based App Router under
                                                <span className="font-semibold text-white">app/</span>.
                                                Each folder becomes a route segment, and
                                                <span className="font-semibold text-white">page.tsx</span>
                                                renders the segment UI.

                                            </p>
                                            <div className="mt-6 rounded-xl bg-[#0B1020] p-5 overflow-x-auto">
                                                <pre className="font-mono text-sm text-sky-400 whitespace-pre-wrap">
                                                    {`export default function Page() {
                                                        return <h1>Hi</h1>;
                                                    }`}
                                                </pre>
                                            </div>

                                            <div className="mt-6 flex flex-wrap gap-3">
                                                <span className="rounded-full bg-[#232736] px-4 py-2 text-sm text-gray-200">app/layout.tsx</span>
                                                <span className="rounded-full bg-[#232736] px-4 py-2 text-sm text-gray-200">app/page.tsx</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <aside className="hidden lg:flex flex-col border-l border-white/5 p-8">
                                    <h3 className="mb-10 self-start text-xs uppercase tracking-[0.25em] text-gray-400">ARCHITECTURE</h3>
                                    <img
                                            src={flowchart}
                                            alt="Architecture Flow"
                                            className="w-full max-w-60 h-auto object-contain"
                                        />
                                </aside>
                            </div>
                        </div>
                    </div>
            </section>

            <section className="p-15 bg-gray-950 flex flex-col justify-center items-center" id="how-it-works">
                <h2 className="text-3xl text-cyan-200">HOW IT WORKS</h2>
                <div className="border-t-2 border-slate-700 w-[90%]  my-10 flex flex-col justify-center items-center">
                    <h1 className="text-5xl mt-10 font-normal text-center">From repo to insight in 4 steps</h1>

                <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] gap-4 md:grid-cols-[1fr_1fr] sm:w-[90%] my-20 gap-y-8">
                    
                    <div className="flex flex-col flex-wrap p-5 border border-slate-600 bg-black rounded-2xl">
                        <p className="text-purple-500 m-1">∅1</p>
                        <h1 className="text-xl my-3">CONNECT REPOSITORY</h1>
                        <p className="text-slate-400 mb-10">OAuth with GitHub. Public or private.</p>
                    </div>
                    <div className="flex flex-col flex-wrap p-5 border border-slate-600 bg-black rounded-2xl">
                        <p className="text-purple-500 m-1">∅2</p>
                        <h1 className="text-xl my-3">Index Codebase</h1>
                        <p className="text-slate-400">We parse, embed and graph your code..</p>
                    </div>
                    <div className="flex flex-col flex-wrap p-5 border border-slate-600 bg-black rounded-2xl">
                        <p className="text-purple-500 m-1">∅3</p>
                        <h1 className="text-xl my-3">Ask Questions</h1>
                        <p className="text-slate-400">Chat naturally with grounded sources.</p>
                    </div>
                    <div className="flex flex-col flex-wrap p-5 border border-slate-600 bg-black rounded-2xl">
                        <p className="text-purple-500 m-1">∅4</p>
                        <h1 className="text-xl my-3">Get AI Insights</h1>
                        <p className="text-slate-400">Docs, reviews, tests and visualizations.</p>
                    </div>
                </div>
                </div>
            </section>

            <section className="p-15 bg-gray-950 flex flex-col justify-center items-center" id="features">
                <h2 className="text-3xl text-cyan-200">FEATURES</h2>
                <div className="border-t-2 border-slate-700 w-[90%]  my-10 flex flex-col justify-center items-center">
                    <h1 className="text-5xl mt-10 font-normal text-center">Everything you need to ship faster</h1>
                    <p className="text-slate-400 my-8 text-center">A complete AI toolkit for understanding, documenting and improving your codebase.</p>

                <div className="grid lg:grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr] md:grid-cols-[1fr_1fr] gap-x-6 sm:grid-cols-[1fr] gap-y-6 my-20">
                    
                    <div className="flex flex-col flex-wrap p-5 py-10 border border-slate-600 bg-black rounded-2xl hover:shadow-sm hover:shadow-purple-700 hover:transition hover:scale-105 duration-700">
                        <img src={chat} alt="" className="w-10 h-10 mb-2 rounded-lg p-1 bg-linear-to-r from-violet-500 to-cyan-500"/>
                        <h1 className="text-xl my-3">Test Generation</h1>
                        <p className="text-slate-400">Ask questions and get cited answers grounded in your code.</p>
                    </div>
                    <div className="flex flex-col flex-wrap p-5 py-10 border border-slate-600 bg-black rounded-2xl hover:shadow-sm hover:shadow-purple-700 hover:transition hover:scale-105 duration-700">
                        <img src={file} alt="" className="w-10 h-10 mb-2 rounded-lg p-1 bg-linear-to-r from-violet-500 to-cyan-500"/>
                        <h1 className="text-xl my-3">Documentation Generation</h1>
                        <p className="text-slate-400">Auto-generate READMEs, API references and architecture docs.</p>
                    </div>
                    <div className="flex flex-col flex-wrap p-5 py-10 border border-slate-600 bg-black rounded-2xl hover:shadow-sm hover:shadow-purple-700 hover:transition hover:scale-105 duration-700">
                        <img src={verified} alt="" className="w-10 h-10 mb-2 rounded-lg p-1 bg-linear-to-r from-violet-500 to-cyan-500"/>
                        <h1 className="text-xl my-3">AI Code Review</h1>
                        <p className="text-slate-400">Catch security issues, smells and performance regressions.</p>
                    </div>
                    <div className="flex flex-col flex-wrap p-5 py-10 border border-slate-600 bg-black rounded-2xl hover:shadow-sm hover:shadow-purple-700 hover:transition hover:scale-105 duration-700">
                        <img src={workflow} alt="" className="w-10 h-10 mb-2 rounded-lg p-1 bg-linear-to-r from-violet-500 to-cyan-500"/>
                        <h1 className="text-xl my-3">Architecture Visualization</h1>
                        <p className="text-slate-400">See modules, services and dependencies as a live graph.</p>
                    </div>
                    <div className="flex flex-col flex-wrap p-5 py-10 border border-slate-600 bg-black rounded-2xl hover:shadow-sm hover:shadow-purple-700 hover:transition hover:scale-105 duration-700">
                        <img src={test} alt="" className="w-10 h-10 mb-2 rounded-lg p-1 bg-linear-to-r from-violet-500 to-cyan-500"/>
                        <h1 className="text-xl my-3">Test Generation</h1>
                        <p className="text-slate-400">Generate unit and integration tests with high coverage.</p>
                    </div>
                    <div className="flex flex-col flex-wrap p-5 py-10 border border-slate-600 bg-black rounded-2xl hover:shadow-sm hover:shadow-purple-700 hover:transition hover:scale-105 duration-700">
                        <img src={thunder} alt="" className="w-10 h-10 mb-2 rounded-lg p-1 bg-linear-to-r from-violet-500 to-cyan-500"/>
                        <h1 className="text-xl my-3">Instant Onboarding</h1>
                        <p className="text-slate-400">Ramp engineers up on unfamiliar repos in minutes.</p>
                    </div>
                    
                </div>
                </div>
            </section>
            
            <div className="mt-0 p-0 min-h-screen flex flex-col items-center justify-center bg-linear-to-br bg-gray-950">
                <h2 className="text-3xl text-cyan-200">Loved by Engineers</h2>
                <div className="border-t-2 border-slate-700 w-[90%] my-10 p-20 flex flex-col justify-center items-center">
                    <h1 className="text-5xl mb-10 font-normal text-center">Everything you need to ship faster</h1>
                    <Carousel />
                </div>
            </div>

            <footer className="bg-gray-950">
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr] border-y-2 border-slate-700 p-5 lg:flex justify-evenly">
                    <div>
                        <div className="flex gap-2 mb-1">
                            <img src={app_logo} alt="app_logo" className="w-10 h-10 rounded-[100%]"/>
                            <span className="mt-1 font-bold">Repo Copilot</span>
                        </div>
                        <p className="font-light text-gray-400">AI copilot for engineering teams.</p>
                        <div className="flex gap-2 mt-2">
                            <img src={github} className="w-6 h-6 rounded-full bg-linear-to-r from-violet-500 to-cyan-500"/>
                            <img src={twitter} className="w-6 h-6 rounded-full bg-linear-to-r from-violet-500 to-cyan-500"/>
                            <img src={linkedin} className="w-6 h-6 rounded-full bg-linear-to-r from-violet-500 to-cyan-500"/>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold mb-2">Product</h1>
                        <ul className="text-gray-500">
                            <li><a href="#features">Features</a></li>
                            <li><a href="#how-it-works">Work</a></li>
                            <li><a href="#docs">Docs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold mb-2">Company</h1>
                        <ul className="text-gray-500">
                            <li><a href="#home">About</a></li>
                            <li><a href="#home">Blog</a></li>
                            <li><a href="#home">Contacts</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold mb-2">Legal</h1>
                        <ul className="text-gray-500">
                            <li><a href="#home">Privacy</a></li>
                            <li><a href="#home">Terms</a></li>
                            <li><a href="#home">Security</a></li>
                        </ul>
                    </div>
                </div>
                <nav className="flex justify-center items-center">
                    <p className="font-light py-3">© 2026 Repo Copilot.All rights reserved</p>                                   
                </nav>                                 
            </footer>
 
    </div>   

  );
}