type Props = {
    content: string
};

const Editor = ({content}: Props) => {

    return (
        <div className="h-fit overflow-auto px-10 pt-3">
            <pre className="leading-tight text-justify md:text-lg whitespace-pre-wrap -tracking-wider animated-gradient-text">
                {content}
            </pre>
        </div>
    );
};

export default Editor;