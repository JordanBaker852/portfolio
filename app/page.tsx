export default function Home() {
  return (
    <>
      <div className="min-h-screen font-sans p-4 md:p-12 max-w-455 m-auto">
        <main className="flex justify-between min-h-screen w-full flex-col bg-[#314158] py-32 sm:items-start rounded-lg">
          <h1 className="sr-only">Jordan Baker</h1>
          <div className="w-full px-6">
            <h4 className="text-lg">Hello world! I am</h4>
            <h2 className="text-5xl lg:text-6xl text-[#F8FAFC] my-2">Jordan Baker</h2>
            <h3 className="text-xl lg:text-3xl text-indigo-500">Fullstack .NET Developer</h3>
          </div>
          <div className="w-full px-6">
            <p className="text-sm text-wrap text-left mb-2">// find my profile on Github:</p>
            <p className="text-sm text-wrap text-left">
              <span className="text-indigo-500">string</span>
              <span className="text-teal-400">githubLink</span>
              <span>=</span>
              <a href="https://github.com/JordanBaker852" className="underline text-bold text-[#FFA1AD] break-all">`https://github.com/JordanBaker852`</a>
            </p>
          </div>
          <div className="bg-teal-400 opacity-40 blur-sm max-w-2xl h-28 absolute top-52"></div>
          <div className="bg-indigo-400 opacity-40 blur-sm max-w-2xl h-28 absolute top-52"></div>
        </main>
      </div>
    </>
  );
}
