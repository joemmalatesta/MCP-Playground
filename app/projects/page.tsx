"use client";

import React from "react";
import { motion } from "framer-motion";
import NotionProjects from "@/app/components/NotionProjects";
import { Grid } from "@/app/components/ui/grid";

const ProjectsPage = () => {
	return (
		<div className="min-h-screen w-full bg-black text-white">
			<GradientHeader />
			<div className="container mx-auto px-4 relative z-10">
				<NotionProjects />
			</div>
			<BackgroundEffect />
		</div>
	);
};

const GradientHeader = () => {
	return (
		<div className="relative w-full py-20 overflow-hidden">
			<div className="container mx-auto px-4 relative z-10">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-5xl md:text-7xl font-bold text-center"
				>
					Projects
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-xl text-center mt-4 text-zinc-300 max-w-2xl mx-auto"
				>
					A collection of things I'm building, exploring, and thinking about
				</motion.p>
			</div>
			<div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-violet-400 to-indigo-600 opacity-20"></div>
			<div className="absolute inset-0 bg-black/70"></div>
			<Grid />
		</div>
	);
};

const BackgroundEffect = () => {
	return (
		<div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
			<div className="absolute inset-0">
				<div className="h-full w-full bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
			</div>
		</div>
	);
};

export default ProjectsPage;
