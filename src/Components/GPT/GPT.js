import React from "react";
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
		<section
			className="my-10 lg:my-32 mx-5 md:mx-10 xl:mx-20 2xl:mx-32"
			id="what-is-gpt">
			<div className=" bg-[#042c54]   px-[2rem] py-[3rem] relative overflow-hidden">
				<div className="blur-two " />
				<div className="pt-5 mb-20 flex w-full flex-col md:flex-row justify-between">
					<div className="relative">
						<div className="gradient-border absolute top-[-10px] " />
						<h6 className="text-[1.8rem] md:text-[2rem] xl:text-[2.2rem]  2xl:text-[2.5rem] font-[800] mb-5 md:mb-0">
							What is GPT-3
						</h6>
					</div>
					<div>
						<p className="md:max-w-[500px] 2xl:max-w-[850px] text-[0.9rem] md:text-[1.2rem] xl:text-[1.3rem]  2xl:text-[1.4rem]">
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
					<h3 className="gradient text-[2rem]  xl:text-[2.5rem] 2xl:text-[3rem]  font-[800] pb-3 mb-5 md:mb-0">
						The possibilities are beyond{" "}
						<br className="hidden md:block" /> your imagination
					</h3>
					<p className="text-[#FF8A71] text-[1.1rem] md:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] cursor-pointer">
						Explore The Library
					</p>
				</div>

				<div className="my-10 flex flex-1 flex-col md:flex-row justify-evenly items-center md:items-start">
					{features.map((feature, index) => (
						<div className="relative md:px-5 py-5" key={index}>
							<div className="gradient-border md:absolute top-[-10px] mb-2 md:mb-0" />
							<h6 className="text-[1.5rem] lg:text-[2rem] 2xl:text-[2.5rem] font-[800] mb-5 ">
								{feature.name}
							</h6>
							<p className=" text-primary text-[0.9rem] md:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem] leading-[2rem] font-[500] ">
								{feature.message}
							</p>
						</div>
					))}
				</div>
				<div className="blur-three" />
			</div>
		</section>
	);
};

export default GPT;
