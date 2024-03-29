import React from "react";
import logo from "../../Assets/logo.svg";
import { motion } from "framer-motion";
const Footer = () => {
	const navLinks = [
		{
			title: "Links",
			links: [
				{ name: "Overons", url: "/" },
				{ name: "Social Media", url: "/" },
				{ name: "Counters", url: "/" },
				{ name: "Contact ", url: "/" },
			],
		},

		{
			title: "Company",
			links: [
				{ name: "Terms & Conditions", url: "/" },
				{ name: "Privacy Policy", url: "/" },
				{ name: "Contact ", url: "/" },
			],
		},

		{
			title: "Get in Touch",
			links: [
				{
					name: "Crechterwoord K12 182 DK",
					url: "/",
				},
				{ name: "+8801303-909469", url: "/" },
				{
					name: "github.com/sakib-h",
					url: "https://github.com/sakib-h/",
				},
			],
		},
	];

	return (
		<footer className="mt-10  bg-[#031B34] ">
			<div className="py-10 mx-5 md:mx-10 xl:mx-20 2xl:mx-30  flex flex-col items-center">
				<div className="mt-[5rem] mb-[2rem]">
					<h1 className="text-[2rem] md:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] font-[800] gradient tracking-[-0.04em]  text-center">
						Do you want to step in to the{" "}
						<br className="hidden lg:block" /> future before others
					</h1>
				</div>

				<div className="mb-[5rem]">
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: "spring", stiffness: 150 }}
						type="button"
						className="px-8 py-5 border-2 text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] leading-[21px]">
						Request Early Access
					</motion.button>
				</div>

				<div className="w-full  flex flex-col lg:flex-row justify-between items-center  lg:items-start">
					<div className="basis-[30%] flex flex-col items-center lg:items-start  lg:mr-20">
						<img
							src={logo}
							alt="GPT-3"
							className="mb-10  lg:mb-8 w-[120px] md:w-[150px] xl-[w-165px] 2xl:w-[180px]"
						/>
						<p className=" pb-10 text-[0.9rem] md:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] mb-10 lg:mb-5">
							Crechterwoord K12 182 DK{" "}
							<br className="hidden lg:block" /> Alknjkcb, All
							Rights Reserved
						</p>
					</div>

					<div className="basis-[30%]  w-full flex flex-1 flex-row flex-wrap justify-between">
						{navLinks.map((navLink, index) => (
							<div className="flex flex-col pb-5" key={index}>
								<h6 className="text-[16px] md:text-[20px] xl:-[text-24px] font-[800] mb-8">
									{navLink.title}
								</h6>
								{navLink.links.map((link, index) => (
									<a
										href={link.url}
										className="text-[12px] md:text-[16px] xl:-[text-20px] font-[400] mb-5 cursor-pointer"
										key={index}>
										{link.name}
									</a>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
			<p className="text-center pb-10 text-[1rem] md:-[1.2rem] xl:-[1.5rem]">
				© 2021 GPT-3. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
