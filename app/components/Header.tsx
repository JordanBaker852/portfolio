'use client'

import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import navigationTabs from "../data/navigationTabs.json";
import HeaderNavItems from "./HeaderNavItems";
import { JSX, useState } from "react";

const Header = () => {
    const [toggleMobileHeader, setToggleMobileHeader] = useState<boolean>(false);
    const mobileHeaderVisibilityClass: string = toggleMobileHeader ? "block lg:hidden" : "hidden";
    const menuToggleIcon: JSX.Element = toggleMobileHeader ? <RiCloseLine /> : <RiMenuLine />;

    return (
        <header className="w-full relative border-b border-b-[#314147]">
            <nav className="flex">
                <HeaderNavItems viewport="desktop" items={navigationTabs}>
                    <li className="p-4 inline-block lg:w-[17.47%] lg:border-r lg:border-r-[#314147]">
                        jordan-baker
                    </li>
                </HeaderNavItems>
                <button className="lg:hidden inline-flex text-[#90A1B9] p-4" onClick={() => setToggleMobileHeader(prev => !prev)}>
                    {menuToggleIcon}
                </button>
            </nav>
            <nav className={`absolute ${mobileHeaderVisibilityClass} z-1 top-14.25 w-full h-[calc(100dvh-112px)] bg-[#0F172B]`}>
                <HeaderNavItems viewport="mobile" items={navigationTabs}>
                    <li className="px-6 py-3 border-b border-b-[#314147]">
                        # navigate:
                    </li>
                </HeaderNavItems>
            </nav>
        </header>
    );
};

export default Header;