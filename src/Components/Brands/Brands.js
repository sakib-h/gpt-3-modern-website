import React from "react";
import google from "../../Assets/google.png";
import slack from "../../Assets/slack.png";
import atlassian from "../../Assets/atlassian.png";
import dropbox from "../../Assets/dropbox.png";
import shopify from "../../Assets/shopify.png";

import { motion } from "framer-motion";

const brands = [
	{ img: google, id: "google", title: "Google" },
	{ img: slack, id: "slack", title: "Slack" },
	{ img: atlassian, id: "atlassian", title: "Atlassian" },
	{ img: dropbox, id: "dropbox", title: "Dropbox" },
	{ img: shopify, id: "shopify", title: "Shopify" },
];
const Brands = () => {
	return (
		<motion.section
			whileInView={{ scale: [0, 1], opacity: [0, 1] }}
			transition={{ duration: 0.5, type: "tween" }}
			className="mx-5 my-10  lg:my-32 md:mx-10 xl:mx-20 2xl:mx-32 flex flex-wrap justify-evenly items-center">
			{brands.map((brand, index) => (
				<div key={index}>
					<img
						src={brand.img}
						alt={brand.id}
						title={brand.title}
						className="py-5 w-ful cursor-pointer hover:brightness-150"
					/>
				</div>
			))}
		</motion.section>
	);
};

export default Brands;
