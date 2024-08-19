import web3EduLogo from "../images/Web3EduBrasil_logo.png";
import Image from "next/image";

export default function NavBar() {
    return (
        <div data-theme="mytheme" className="navbar bg-base justify-between px-5">
            <div className="navbar-start gap-3">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#15457b]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base rounded-box z-[1] mt-3 w-52 p-2 shadow py-2 text-base   ">
                        <li><a>Home</a></li>
                        <li><a>Fórum</a></li>
                        <li><a>Artigos</a></li>
                        <li><a>Trilhas</a></li>
                    </ul>
                </div>
                <Image src={web3EduLogo} alt="" className="w-10" />
                <a className="text-2xl text-secondary font-bold">Web3EduBrasil</a>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-secondary text-base font-medium">
                        <li><a>Home</a></li>
                        <li><a>Fórum</a></li>
                        <li><a>Artigos</a></li>
                        <li><a>Trilhas</a></li>
                    </ul>
                </div>
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full ">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-md dropdown-content bg-base text-secondary rounded-box z-[1] mt-1 w-52 p-2 shadow py-2 text-base">
                    <li>    <a>Profile</a></li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    )
}