type Props = {
    content: string,
    langauge: string
};

const Editor = ({content}: Props) => {

    const lines: string[] = content.split('\n');

    return (
        <div className="mx-auto bg-[#0f172a]">
            <div className="grid grid-cols-[auto_1fr] text-[clamp(0.75rem,1.2vw,1.1rem)] leading-relaxed">
                <div className="bg-[#0b1220] text-slate-500 px-3 sm:px-4 py-4 text-right select-none">
                    {lines.map((_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>
                <pre className="px-3 sm:px-6 py-4 whitespace-pre-wrap wrap-break-words text-slate-300">
                    <code>
                        {lines.map((text, i) => (
                            <div key={i} className="pl-6 -indent-6">
                                {text}
                            </div>
                        ))}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default Editor;