import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import { RiMenuFoldLine } from "react-icons/ri";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
	const navLinks = [
		{
			name: "Home",
			link: "home",
		},
		{
			name: "What is GPT?",
			link: "what-is-gpt",
		},
		{
			name: "Open Ai",
			link: "open-ai",
		},
		{
			name: "Case Studies",
			link: "case-studies",
		},
		{
			name: "Library",
			link: "library",
		},
	];
	const socialLinks = [
		{
			name: "Sign In",
			link: "sign-in",
		},
		{
			name: "Sign Up",
			link: "sign-up",
		},
	];

	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.nav
			className="relative w-full z-20"
			initial={{ y: "-100vh", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.3, type: "spring", duration: 0.5 }}>
			<div className="my-10 mx-5 md:mx-10 xl:mx-20 2xl:mx-30 flex flex-row justify-between items-center">
				<div className="logo mr-3">
					<img
						src={logo}
						alt="GPT-3"
						title="GPT-3"
						className="w-[62px] h-[auto] md:w-[70px] xl:w-[80px] 2xl:w-[100px]"
					/>
				</div>
				<div className="nav-links  hidden lg:flex flex-1 flex-row justify-between items-center">
					<div className="flex-1 flex justify-start ">
						{navLinks.map((navLink, index) => (
							<Link
								to={`/${navLink.link}`}
								key={index}
								className=" mx-3 px-3 py-2 font-[500] text-[0.8rem]  xl:text-[1rem] 2xl:text-[1.5rem]">
								{navLink.name}
							</Link>
						))}
					</div>
					<div className=" flex justify-end ">
						{socialLinks.map((navLink, index) => (
							<Link
								to={`/${navLink.link}`}
								key={index}
								className={`mx-3 px-3 py-2 ${
									index === socialLinks.length - 1
										? "bg-secondary rounded-[5px]"
										: " "
								} font-[500] text-[0.8rem]  xl:text-[1rem] 2xl:text-[1.5rem]`}>
								{navLink.name}
							</Link>
						))}
					</div>
				</div>
				<div className="lg:hidden relative z-[100]">
					{isOpen ? (
						<RiMenuUnfoldLine
							className="text-[1.5rem] md:text-[2rem] cursor-pointer"
							onClick={() => {
								setIsOpen(false);
							}}
						/>
					) : (
						<RiMenuFoldLine
							className="text-[1.5rem] md:text-[2rem]  cursor-pointer"
							onClick={() => {
								setIsOpen(true);
							}}
						/>
					)}
				</div>

				<AnimatePresence>
					{isOpen && (
						<motion.div
							className="absolute z-[50] top-10  right-10 bg-secondary-bg text-primary rounded-[5px] shadow-lg"
							initial={{ x: "100vh", opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: "100vh", opacity: 0 }}
							transition={{ duration: 0.5, type: "spring" }}>
							<div className="nav-links lg:hidden flex flex-col justify-between items-center text-[1rem] 2xl:text-[1.5rem]">
								<div className="flex flex-col justify-start ">
									{navLinks.map((navLink, index) => (
										<Link
											to={`/${navLink.link}`}
											key={index}
											className=" ml-2 mr-10 my-3 px-5 py-2 hover:brightness-150"
											onClick={() => {
												setIsOpen(false);
											}}>
											{navLink.name}
										</Link>
									))}
									<div className="border-b-2 border-primary opacity-30" />

									{socialLinks.map((navLink, index) => (
										<Link
											to={`/${navLink.link}`}
											key={index}
											className="ml-2 mr-10 my-3 px-5 py-2 hover:brightness-150"
											onClick={() => {
												setIsOpen(false);
											}}>
											{navLink.name}
										</Link>
									))}
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
};

export default Navbar;
