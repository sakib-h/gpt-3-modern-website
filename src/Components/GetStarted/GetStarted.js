import React from "react";
import { motion } from "framer-motion";
const GetStarted = () => {
	return (
		<section className="my-10 py-10 mx-5 md:mx-10 xl:mx-20 2xl:mx-30">
			<div className="gradient-two px-10 py-10 rounded-[10px]">
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between">
					<div>
						<small className="text-[#0E0E0E] text-[12px] md:text-[16px] leading-[30px] mb-5">
							Request Early Access to Get Started
						</small>
						<h5 className="text-[#000000] font-[800] text-[18px] md:text-[22px] xl:text-[24px] mb-5 md:mb-0">
							Register today & start exploring the endless
							possibilities.
						</h5>
					</div>
					<div>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 150 }}
							type="button"
							className="rounded-[40px] bg-black px-10 py-3 font-[700] text-[0.8rem] md:text-[1rem] leading-[30px]">
							Get Started
						</motion.button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GetStarted;
