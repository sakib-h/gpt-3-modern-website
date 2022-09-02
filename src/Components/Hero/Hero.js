import React from "react";
import ai from "../../Assets/ai.png";
import people from "../../Assets/people.png";
import { motion } from "framer-motion";
const Hero = () => {
	return (
		<section
			className="mx-5 my-10 lg:my-20 md:mx-10 xl:mx-20 2xl:mx-32 relative z-[10]"
			id="home">
			<div className="flex flex-col md:flex-row items-center justify-between">
				<motion.div
					whileInView={{ x: [-100, 0], opacity: [0, 1] }}
					transition={{
						duration: 0.4,
						type: "spring",
					}}
					className="basis-[55%] md:mr-10">
					<h1 className="text-[3rem] md:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] font-[800] gradient tracking-[-0.04em] mb-[2rem]">
						Let’s Build Something <br className="hidden lg:block" />{" "}
						amazing with GPT-3 <br className="hidden lg:block" />
						OpenAI
					</h1>
					<p className="text-primary mb-[2rem] text-[1.1rem] md:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.5rem]">
						Yet bed any for traveling assistance indulgence
						unpleasing. Not thoughts all exercise blessing.
						Indulgence way everything joy alteration boisterous the
						attachment. Party we years to order allow asked of.
					</p>
					<div className="relative mb-[2rem]">
						<input
							type="search"
							name=""
							id=""
							className="w-full h-[50px] 2xl:h-[70px]  bg-secondary-bg px-5 placeholder:text-secondary-text outline-none rounded-l-[5px] text-[1rem] 2xl:text-[1.5rem]"
							placeholder="Your Email Address"
						/>
						<button className="absolute top-0 right-0 bg-secondary  h-[100%] px-6 cursor-pointer font-[700] text-[1rem] 2xl:text-[1.5rem]  rounded-r-[5px]">
							Get Started
						</button>
					</div>
					<div className="flex flex-row items-center justify-start mb-[2rem]">
						<img src={people} alt="people" className="w-[30%]" />
						<p className="ml-3 font-[500] text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[18px]">
							1,600 people requested access a visit in last 24
							hours
						</p>
					</div>
				</motion.div>
				<motion.div
					whileInView={{ x: [100, 0], opacity: [0, 1] }}
					transition={{ duration: 0.4, type: "spring" }}
					className="basis-[45%] md:pl-5">
					<img src={ai} alt="ai" className=" w-full" />
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
