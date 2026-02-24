import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";

const Footer = () => {
    return (
        <footer className="w-full bg-[#0F172B] flex border-t border-t-[#314147]">
            <h4 className="inline-block px-6 py-4 border-r border-r-[#314147] min-w-40">find me in:</h4>
            <ul className="list-none w-full">
                <li className="inline-flex last:float-right border-r border-r-[#314147] last:border-l last:border-l-[#314147] last:border-r-0">
                    <a className="p-4 inline-flex" href="https://www.linkedin.com/in/jordan-baker-b0b871205/">
                        <RiLinkedinFill className="transition" color="#62748E" />
                    </a>
                </li>
                <li className="inline-flex last:float-right border-r border-r-[#314147] last:border-l last:border-l-[#314147] last:border-r-0">
                    <a className="p-4 lg:py-4 lg:px-8 inline-flex gap-2.5 hover:text-[#CAD5E2]" href="https://github.com/JordanBaker852">
                        <span className="hidden lg:block">@JordanBaker852</span>
                        <RiGithubFill className="transition" color="#62748E" />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;