export default function Home() {
  return (
    <>
      <h1 className="sr-only">Jordan Baker</h1>
      <div className="flex-col">
        <div className="w-full m-auto">
          <h4 className="text-lg">Hello world! I am</h4>
          <h2 className="text-5xl lg:text-6xl text-[#F8FAFC]">Jordan Baker</h2>
          <h3 className="text-xl lg:text-3xl text-indigo-500">Fullstack .NET Developer</h3>
          
          <div className="text-lg flex gap-2">
            <span className="text-indigo-500">string</span>
            <span className="text-teal-400">githubLink</span>
            <span className="text-[#F8FAFC]">=</span>
            <a href="https://github.com/JordanBaker852" className="underline text-bold text-[#FFA1A8]">`https://github.com/JordanBaker852`</a>
          </div>
        </div>
        <div className="w-full m-auto relative">
            <div className="bg-teal-400 opacity-40 blur-sm w-2xl h-28 absolute top-52"></div>
            <div className="bg-indigo-400 opacity-40 blur-sm w-2xl h-28 absolute top-52"></div>
          </div>
      </div>
    </>
  );
}
