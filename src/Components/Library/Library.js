import React from "react";
import blog01 from "../../Assets/blog01.png";
import blog02 from "../../Assets/blog02.png";
import blog03 from "../../Assets/blog03.png";
import blog04 from "../../Assets/blog04.png";
import blog05 from "../../Assets/blog05.png";
import { motion } from "framer-motion";
const Library = () => {
	return (
		<section className="my-10 py-10 mx-5 md:mx-10 xl:mx-20 2xl:mx-30 flex flex-col">
			<div className="w-full text-left">
				<h1 className="text-[3rem]  2xl:text-[5rem] font-[800] gradient tracking-[-0.04em] mb-[2rem]">
					A lot is happening, <br className="hidden md:block mb-10" />
					We are blogging about it.
				</h1>
			</div>
			<div className="flex flex-col-reverse  lg:flex-row">
				<div className="flex-[0.75] mb-10 lg:mb-0 lg:my-0  lg:mr-[2rem]">
					<motion.div
						whileHover={{ scale: 1.01 }}
						transition={{ type: "spring", stiffness: 150 }}
						className="w-full h-full flex flex-col bg-[#042C54]">
						<div className="w-full h-full">
							<img
								src={blog01}
								alt="blog-img"
								className="w-full h-auto"
							/>
						</div>
						<div className="flex flex-col justify-between px-[1.5rem] py-[1rem] h-full">
							<div>
								<p className="text-[12px] font-[700] leading-[35px]">
									Sep 26, 2021
								</p>
								<h3 className=" text-[18px] md:text-[26px] font-[800] leading-[25px] md:leading-[30px] mb-5rem cursor-pointer">
									GPT-3 and Open AI is the future. Let us
									explore how it is?
								</h3>
							</div>
							<p className="text-[12px] font-[700] leading-[35px] cursor-pointer">
								Read Full Article
							</p>
						</div>
					</motion.div>
				</div>
				<div className="flex-1 md:grid gap-[2rem] grid-cols-2	md:mb-[2rem] lg:mb-0">
					<motion.div
						whileHover={{ scale: 1.01 }}
						transition={{ type: "spring", stiffness: 150 }}
						className="w-full h-full flex flex-col bg-[#042C54] mb-10 lg:mb-0">
						<div className="w-full h-full">
							<img
								src={blog02}
								alt="blog-img"
								className="w-full h-auto"
							/>
						</div>
						<div className="flex flex-col justify-between px-[1.5rem] py-[1rem] h-full">
							<div>
								<p className="text-[12px] font-[700] leading-[35px]">
									Sep 26, 2021
								</p>
								<h3 className=" text-[18px] md:text-[26px] font-[800] leading-[25px] md:leading-[30px] mb-5rem cursor-pointer">
									GPT-3 and Open AI is the future. Let us
									explore how it is?
								</h3>
							</div>
							<p className="text-[12px] font-[700] leading-[35px] cursor-pointer">
								Read Full Article
							</p>
						</div>
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.01 }}
						transition={{ type: "spring", stiffness: 150 }}
						className="w-full h-full flex flex-col bg-[#042C54] mb-10 lg:mb-0">
						<div className="w-full h-full">
							<img
								src={blog03}
								alt="blog-img"
								className="w-full h-auto"
							/>
						</div>
						<div className="flex flex-col justify-between px-[1.5rem] py-[1rem] h-full">
							<div>
								<p className="text-[12px] font-[700] leading-[35px]">
									Sep 26, 2021
								</p>
								<h3 className=" text-[18px] md:text-[26px] font-[800] leading-[25px] md:leading-[30px] mb-5rem cursor-pointer">
									GPT-3 and Open AI is the future. Let us
									explore how it is?
								</h3>
							</div>
							<p className="text-[12px] font-[700] leading-[35px] cursor-pointer">
								Read Full Article
							</p>
						</div>
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.01 }}
						transition={{ type: "spring", stiffness: 150 }}
						className="w-full h-full flex flex-col bg-[#042C54] mb-10 lg:mb-0">
						<div className="w-full h-full">
							<img
								src={blog04}
								alt="blog-img"
								className="w-full h-auto"
							/>
						</div>
						<div className="flex flex-col justify-between px-[1.5rem] py-[1rem] h-full">
							<div>
								<p className="text-[12px] font-[700] leading-[35px]">
									Sep 26, 2021
								</p>
								<h3 className=" text-[18px] md:text-[26px] font-[800] leading-[25px] md:leading-[30px] mb-5rem cursor-pointer">
									GPT-3 and Open AI is the future. Let us
									explore how it is?
								</h3>
							</div>
							<p className="text-[12px] font-[700] leading-[35px] cursor-pointer">
								Read Full Article
							</p>
						</div>
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.01 }}
						transition={{ type: "spring", stiffness: 150 }}
						className="w-full h-full flex flex-col bg-[#042C54] mb-10 lg:mb-0">
						<div className="w-full h-full">
							<img
								src={blog05}
								alt="blog-img"
								className="w-full h-auto"
							/>
						</div>
						<div className="flex flex-col justify-between px-[1.5rem] py-[1rem] h-full">
							<div>
								<p className="text-[12px] font-[700] leading-[35px]">
									Sep 26, 2021
								</p>
								<h3 className=" text-[18px] md:text-[26px] font-[800] leading-[25px] md:leading-[30px] mb-5rem cursor-pointer">
									GPT-3 and Open AI is the future. Let us
									explore how it is?
								</h3>
							</div>
							<p className="text-[12px] font-[700] leading-[35px] cursor-pointer">
								Read Full Article
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Library;
