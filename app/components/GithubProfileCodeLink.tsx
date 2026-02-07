const GithubProfileCodeLink = () => {
    return(
        <div>
            <p className="text-sm/[19.6px] text-wrap text-left mb-2">// find my profile on Github:</p>
            <p className="text-sm/[19.6px] text-wrap text-left">
                <span className="text-indigo-500 mr-1">string</span>
                <span className="text-teal-400 mr-1">githubLink</span>
                <span className="mr-1">=</span>
                <a href="https://github.com/JordanBaker852" className="underline text-bold text-[#FFA1AD] break-all">&quot;https://github.com/JordanBaker852&quot;</a>
            </p>
        </div>
    );
};

export default GithubProfileCodeLink;