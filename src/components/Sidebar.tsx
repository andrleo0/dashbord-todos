import Image from "next/image"
import Link from "next/link"
import { CiLogout } from "react-icons/ci"
import { SidebarItem } from "./SidebarItem"
import { IoCalendarOutline, IoCheckboxOutline, IoListOutline } from "react-icons/io5"

const menuItems =[
    {
        icon: <IoCalendarOutline />,
        title: 'Dashboard',
        path: '/dashboard'
    },
    {
        icon: <IoCheckboxOutline />,
        title: 'Rest TODOS',
        path: '/dashboard/rest-todos'
    },
    {
        icon: <IoListOutline />,
        title: 'Server Actions',
        path: '/dashboard/sever-todos'
    },

]

export const Sidebar = () => {
    return (
        <>
            {/* TODO: src/components <Sidebar /> */}
            <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r border-[rgb(114,47,55)] bg-[#EFDFBB] transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div className="-mx-6 px-6 py-4">
                        {/* TODO: Next/Link hacia dashboard */}
                        <Link href="#" title="home">
                            {/* Next/Image */}
                            <Image 
                                src="https://raw.githubusercontent.com/Meschacirung/Tailus-website/f59a4b3ecc1ad9f6a2b0ad9e3fca6f957140cc4d/public/images/logo.svg" 
                                width={ 150 } 
                                height={ 150 } 
                                className="w-32" 
                                alt="tailus logo" 
                            />
                        </Link>
                    </div>

                    <div className="mt-8 text-center">
                        {/* Next/Image */}
                        <Image 
                            src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            width={ 150 } 
                            height={ 150 } 
                            alt="" 
                            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" 
                        />
                        <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Maria A. Montes De Oca</h5>
                        <span className="hidden text-gray-400 lg:block">Admin</span>
                    </div>

                    <ul className="space-y-2 tracking-wide mt-8">
                        {
                            menuItems.map((item, index) => (
                                <SidebarItem
                                    key={index}
                                    {...item}
                                />
                            ))
                        }
                    </ul>
                </div>

                <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t border-[rgb(114,47,55)]">
                    <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                        <CiLogout />
                        <span className="group-hover:text-gray-700">Logout</span>
                    </button>
                </div>
            </aside>

            {/*TODO: Fin del <Sidebar /> */}/
        </>
    )
}
