import React from "react";
import { motion } from "framer-motion";
const features = [
	{
		name: "Chatbots",
		message:
			"We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
	},
	{
		name: "Knowledgebase",
		message:
			"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
	},
	{
		name: "Education",
		message:
			"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
	},
];

const GPT = () => {
	return (
		<motion.section
			whileInView={{ x: [300, 0], opacity: [0, 1] }}
			transition={{ duration: 0.5, delay: 0.5 }}
			className="my-20 mx-5 md:mx-10 xl:mx-20 2xl:mx-30"
			id="what-is-gpt">
			<div className=" bg-[#042c54]   px-[2rem] py-[3rem] relative overflow-hidden">
				<div className="blur-two " />
				<div className="pt-5 mb-20 flex w-full flex-col md:flex-row justify-between">
					<div className="relative">
						<div className="gradient-border absolute top-[-10px] " />
						<h6 className="text-[2rem] font-[800] 2xl:text-[3.5rem]">
							What is GPT-3
						</h6>
					</div>
					<div>
						<p className="max-w-[550px] 2xl:max-w-[800px]  2xl:text-[1.3rem]">
							We so opinion friends me message as delight. Whole
							front do of plate heard oh ought. His defective nor
							convinced residence own. Connection has put
							impossible own apartments boisterous. At jointure
							ladyship an insisted so humanity he. Friendly
							bachelor entrance to on by.
						</p>
					</div>
				</div>
				<div className="my-10 mb-20 2xl:my-[8rem] flex flex-1 flex-col md:flex-row justify-between items-start">
					<h3 className="gradient text-[2.5rem] 2xl:text-[3.5rem]  font-[800] pb-3">
						The possibilities are beyond{" "}
						<br className="hidden md:block" /> your imagination
					</h3>
					<p className="text-[#FF8A71] text-[1.5rem] 2xl:text-[2rem]">
						Explore The Library
					</p>
				</div>

				<div className="my-10 flex flex-1 flex-col md:flex-row justify-between items-center md:items-start">
					{features.map((feature, index) => (
						<div className="relative md:px-5 py-5" key={index}>
							<div className="gradient-border md:absolute top-[-10px] mb-2 md:mb-0" />
							<h6 className="text-[2rem] font-[800] mb-8 2xl:text-[3rem]">
								{feature.name}
							</h6>
							<p className=" text-primary text-[1rem] 2xl:text-[1.5rem] leading-[2rem] font-[500] ">
								{feature.message}
							</p>
						</div>
					))}
				</div>
				<div className="blur-three" />
			</div>
		</motion.section>
	);
};

export default GPT;
