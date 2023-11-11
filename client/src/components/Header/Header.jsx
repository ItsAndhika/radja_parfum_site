import { useState } from "react";
import { Link } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineHome, AiOutlineShopping } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Header = () => {
	const [isNavActive, setIsNavActive] = useState(false);

	const handleClick = () => {
		setIsNavActive((prev) => !prev);
	};

	return (
		<>
			<header className="w-screen fixed bg-zinc-600/10 backdrop-blur-md py-3 px-6 flex justify-between items-center shadow-md z-40 2xl:px-40">
				<Link to="/">
					<img
						src="/images/radjaparfum-transparent.png"
						alt="Radja Parfum"
						className="w-16 2xl:w-28"
					/>
				</Link>
				<nav className="hidden w-1/3 justify-around items-center text-white sm:flex sm:w-1/2 lg:w-1/3 2xl:text-2xl">
					<Link
						to={"/"}
						className="transition-primary border-b-primary hover:text-primary hover:border-b"
					>
						Home
					</Link>
					<Link
						to={"/products"}
						className="transition-primary border-b-primary hover:text-primary hover:border-b"
					>
						Products
					</Link>
					<Link
						to={"/about"}
						className="transition-primary border-b-primary hover:text-primary hover:border-b"
					>
						About
					</Link>
				</nav>
				<button
					className="group flex w-6 h-5 flex-col justify-between items-center mr-7 sm:hidden"
					onClick={handleClick}
				>
					<span className="w-full h-[2px] transition-primary bg-white group-hover:bg-primary"></span>
					<span className="w-2/3 h-[2px] transition-primary bg-white group-hover:bg-primary"></span>
					<span className="w-full h-[2px] transition-primary bg-white group-hover:bg-primary"></span>
				</button>
			</header>
			<div
				className={`${
					isNavActive ? `translatex-0` : `translate-x-[500px]`
				} transition-primary flex flex-col items-center w-3/5 h-screen bg-zinc-900/90 backdrop-blur-md fixed right-0 bottom-0 top-0 z-50 p-7 sm:hidden`}
			>
				<LiaTimesSolid
					size={30}
					className="text-white cursor-pointer self-end transition-primary hover:text-primary"
					onClick={handleClick}
				/>
				<ul className="text-white self-start mt-10 w-full">
					<li className="flex flex-col gap-5">
						<Link
							to={"/"}
							className="flex items-center bg-zinc-900/0 backdrop-blur-sm w-full p-1 group"
							onClick={handleClick}
						>
							<AiOutlineHome
								size={20}
								className="transition-primary group-hover:text-primary"
							/>
							<span className="text-lg font-semibold ml-2 transition-primary group-hover:text-primary">
								Home
							</span>
						</Link>
						<Link
							to={"/products"}
							className="flex items-center bg-zinc-900/0 backdrop-blur-sm w-full p-1 group"
							onClick={handleClick}
						>
							<AiOutlineShopping
								size={20}
								className="transition-primary group-hover:text-primary"
							/>
							<span className="text-lg font-semibold ml-2 transition-primary group-hover:text-primary">
								Products
							</span>
						</Link>
						<Link
							to={"/about"}
							className="flex items-center bg-zinc-900/0 backdrop-blur-sm w-full p-1 group"
							onClick={handleClick}
						>
							<CgProfile
								size={20}
								className="transition-primary group-hover:text-primary"
							/>
							<span className="text-lg font-semibold ml-2 transition-primary group-hover:text-primary">
								About Us
							</span>
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Header;
