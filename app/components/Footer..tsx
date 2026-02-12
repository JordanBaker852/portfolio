import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";

const Footer = () => {
    return (
        <footer className="w-full flex border-t border-t-[#314147]">
            <h4 className="inline-block px-6 py-4 border-r border-r-[#314147]">find me in:</h4>
            <ul className="flex">
                <li className="last:justify-end">
                    <a className="p-4 inline-flex border-r border-r-[#314147] last:border-l last:border-l-[#314147] last:border-r-0" href="https://www.linkedin.com/in/jordan-baker-b0b871205/">
                        <RiLinkedinFill />
                    </a>
                </li>
                <li className="last:justify-end">
                    <a className="p-4 lg:py-4 lg:px-8 inline-flex gap-2.5 border-r border-r-[#314147] last:border-l last:border-l-[#314147] last:border-r-0" href="https://www.linkedin.com/in/jordan-baker-b0b871205/">
                        <span className="hidden lg:block">@JordanBaker852</span>
                        <RiGithubFill />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;