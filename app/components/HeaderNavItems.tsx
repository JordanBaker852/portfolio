'use client'

import Link from "next/link";
import { NavItem } from "../utils/customTypes";
import { usePathname } from "next/navigation";
import { JSX, PropsWithChildren } from "react";

type Props = {
    items: Array<NavItem>,
    viewport: "desktop" | "mobile"
};

const buildDesktopNavItems = (currentPath: string, navItems: Array<NavItem>): JSX.Element[] => {

    const listItems: JSX.Element[] =  navItems.map(x => {
        const isCurrentTab: boolean = currentPath == x.redirect;
        const selectedTabClass: string = isCurrentTab 
        ?
        `
            relative after:content-[''] after:w-full after:h-0.75 
            after:absolute after:bottom-0 after:left-0 after:bg-[#FFB86A]
        `
        : ""

        return(
            <li key={x.title} className={`hidden lg:inline-block border-r border-r-[#314147] 
            last:float-right last:border-l last:border-l-[#314147] last:border-r-0 ${selectedTabClass}`}>
                <Link className="p-4 inline-block" href={x.redirect}>
                    {x.title}
                </Link>
            </li>
        );
    });

    return listItems;
};

const buildMobileNavItems = (navItems: Array<NavItem>): JSX.Element[] => {

    const listItems: JSX.Element[] = navItems.map(x => {
        return (
            <li key={x.title} className="border-b border-b-[#314147]">
                <Link className="px-6 py-3 inline-block w-full" href={x.redirect}>
                    {x.title}
                </Link>
            </li>
        );
    });

    return listItems;
};

const HeaderNavItems = ({items, viewport, children}: PropsWithChildren<Props>) => {
    const currentPath: string = usePathname();

    const listItems = viewport == "mobile" 
    ? buildMobileNavItems(items) 
    : buildDesktopNavItems(currentPath, items);

    return(
        <ul className="list-none w-full">
            {children}
            {listItems}
        </ul>
    );
};

export default HeaderNavItems;