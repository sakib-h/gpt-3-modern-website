import React from "react";
import possibilityImg from "../../Assets/possibility.png";
import { motion } from "framer-motion";
const CaseStudies = () => {
	return (
		<section
			className="my-10 py-10 mx-5 md:mx-10 xl:mx-20 2xl:mx-30 overflow-hidden"
			id="case-studies">
			<div className="flex flex-col md:flex-row items-center justify-between ">
				<motion.div
					whileInView={{ x: [-300, 0] }}
					transition={{ duration: 0.5 }}
					className="flex-1">
					<img
						src={possibilityImg}
						alt="possibility"
						className="w-[80%] mx-auto mb-5 md:mb-0"
					/>
				</motion.div>
				<motion.div
					className="flex-1"
					whileInView={{ x: [300, 0] }}
					transition={{ duration: 0.5 }}>
					<p className="text-[#71E5FF] font-[500] text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.5rem] leading-[30px] mb-5">
						Request Early Access to Get Started
					</p>
					<h3 className="gradient text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] font-[800] mb-5">
						The possibilities are <br className="hidden md:block" />{" "}
						beyond your imagination
					</h3>
					<p className="max-w-[335px] xl:max-w-[450px]  2xl:max-w-[550px] text-primary  text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem] font-[500] leading-[1.5rem] mb-5">
						Yet bed any for traveling assistance indulgence
						unpleasing. Not thoughts all exercise blessing.
						Indulgence way everything joy alteration boisterous the
						attachment. Party we years to order allow asked of.
					</p>

					<p className="text-[#FF8A71] font-[500]  text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.5rem] leading-[30px] cursor-pointer mb-10">
						Request Early Access to Get Started
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default CaseStudies;
