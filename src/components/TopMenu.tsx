import { CiBellOn, CiChat1, CiMenuBurger, CiSearch } from "react-icons/ci"


export const TopMenu = () => {
    return (
        <>
            {/* TODO: src/components <TopMenu /> */}
            <div className="sticky z-10 top-0 h-16 border-b bg-[#EFDFBB] lg:py-2.5">

                <div className="px-6 flex items-center justify-between space-x-4">
                    <h5 className="text-2xl text-black font-medium lg:block">Dashboard</h5>
                    <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                        <CiMenuBurger size={30} />
                    </button>
                    <div className="flex space-x-2">

                        <div className="md:block">
                            <div className="relative flex items-center text-[rgb(114,47,55)] focus-within:text-[rgb(114,47,55)]">
                                <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-[rgb(114,47,55)]">
                                    <CiSearch />
                                </span>
                                <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-[rgb(114,47,55)] outline-none border border-black focus:border-[rgb(114,47,55)] transition" />
                            </div>
                        </div>

                        <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                            <CiSearch />
                        </button>
                        <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-[rgb(175,112,120)] focus:bg-gray-100 active:bg-gray-200">
                            <CiChat1 size={25} />
                        </button>
                        <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-[rgb(175,112,120)] focus:bg-gray-100 active:bg-gray-200">
                            <CiBellOn size={25} />
                        </button>
                    </div>
                </div>
            </div>
            {/* TODO: Fin del <TopMenu /> */}
        </>
    )
}
