'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { CiBookmarkCheck } from "react-icons/ci"

interface Props {
    icon: React.ReactNode;
    path: string;
    title: string;
}
 
export const SidebarItem = (
    { icon , path , title }: Props
) => {

    const pathName = usePathname();

    return (
        <>
            {/* TODO: src/components <SidebarItem /> */}
            {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
            {/* <li>
                <a href="#" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-[rgb(114,47,55)] to-[rgb(114,47,55)]">
                    <CiBookmarkCheck size={30} />
                    <span className="-mr-1 font-medium">Dashboard</span>
                </a>
            </li> */}
            <li>
                <Link href={ path } className={`
                    px-4 py-3 flex items-center space-x-4 rounded-md group border border-black text-black
                    hover: bg-gradient-to-r hover:bg-[rgb(114,47,55)] hover:text-white
                    ${ pathName === path ? 'text-white bg-gradient-to-r from-[rgb(114,47,55)] to-[rgb(114,47,55)]' : '' }
                    `}>
                    { icon }
                    <span className="group-hover:text-white-600" >{title}</span>
                </Link>
            </li>
        </>
    )
}
//className="group-hover:text-gray-600"