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
			className="my-10 mx-5 md:mx-10 xl:mx-20 2xl:mx-30"
			id="what-is-gpt">
			<div className="bg-[#042c54]   px-[2rem] py-[3rem] relative overflow-hidden">
				<div className="blur-two" />
				<div className="mb-20 flex flex-1 flex-col md:flex-row justify-between">
					<div className="relative">
						<div className="gradient-border absolute top-[-10px]" />
						<h6 className="text-[2rem] font-[800]">
							What is GPT-3
						</h6>
					</div>
					<div>
						<p className="max-w-[550px]">
							We so opinion friends me message as delight. Whole
							front do of plate heard oh ought. His defective nor
							convinced residence own. Connection has put
							impossible own apartments boisterous. At jointure
							ladyship an insisted so humanity he. Friendly
							bachelor entrance to on by.
						</p>
					</div>
				</div>
				<div className="my-10 flex flex-1 flex-col md:flex-row justify-between items-start">
					<h3 className="gradient text-[2.5rem] font-[800] mb-[5rem]">
						The possibilities are beyond{" "}
						<br className="hidden md:block" /> your imagination
					</h3>
					<p className="text-[#FF8A71] text-[1.5rem]">
						Explore The Library
					</p>
				</div>

				<div className="my-10 flex flex-1 flex-col md:flex-row justify-between items-center">
					{features.map((feature, index) => (
						<div className="relative px-3 py-5" key={index}>
							<div className="gradient-border md:absolute top-[-10px] mb-2 md:mb-0" />
							<h6 className="text-[2rem] font-[800] mb-10">
								{feature.name}
							</h6>
							<p className="max-w-[650px] text-primary text-[1rem] leading-[2rem]font-[500] ">
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
