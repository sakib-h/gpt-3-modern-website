import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";
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

	console.log(window.innerWidth);

	return (
		<nav className="my-10 mx-10 xl:mx-20 flex flex-row items-center">
			<div className="logo mr-3">
				<img
					src={logo}
					alt="GPT-3"
					title="GPT-3"
					className="w-[62px] h-[auto] xl:w-[80px] 2xl:w-[100px]"
				/>
			</div>
			<div className="nav-links text-white hidden lg:flex flex-1 flex-row justify-between items-center text-[1rem] 2xl:text-[1.5rem]">
				<div className="flex-1 flex justify-start ">
					{navLinks.map((navLink, index) => (
						<Link
							to={`/${navLink.link}`}
							key={index}
							className=" mx-3 px-3 py-2">
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
							}`}>
							{navLink.name}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
