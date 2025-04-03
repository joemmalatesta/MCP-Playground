"use client";

import React, { useId, useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Github, Mail, MapPin, Music, Code, BookOpen, Camera, Send, Gamepad2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const AboutMe = () => {
	return (
		<div className="min-h-screen w-full bg-black text-white">
			<GradientHeader />
			<div className="container mx-auto px-4 py-12 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2">
						<ProfileSection />
						<HobbiesSection />
					</div>
					<div className="lg:col-span-1">
						<ContactForm />
					</div>
				</div>
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
					About Me
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-xl text-center mt-4 text-zinc-300 max-w-2xl mx-auto"
				>
					Developer, designer, and creative thinker passionate about building meaningful experiences
				</motion.p>
			</div>
			<div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-violet-400 to-indigo-600 opacity-20"></div>
			<div className="absolute inset-0 bg-black/70"></div>
			<Grid />
		</div>
	);
};

const ProfileSection = () => {
	return (
		<Card className="p-6 bg-zinc-900 border-zinc-800">
			<div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
				<div className="w-32 h-32 rounded-full overflow-hidden border-2 border-indigo-500">
					<img
						src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
						alt="Profile"
						className="w-full h-full object-cover"
					/>
				</div>
				<div>
					<h2 className="text-2xl font-bold mb-2">Your Name</h2>
					<p className="text-zinc-400 mb-4">
						A passionate developer with a keen interest in creating beautiful and functional web applications. I specialize in modern web technologies
						and love bringing creative ideas to life through code.
					</p>
					<div className="flex items-center text-zinc-400 mb-2">
						<MapPin size={16} className="mr-2" />
						<span>Your Location</span>
					</div>
					<div className="flex items-center text-zinc-400">
						<Mail size={16} className="mr-2" />
						<span>your.email@example.com</span>
					</div>
				</div>
			</div>
		</Card>
	);
};

const HobbiesSection = () => {
	const hobbies = [
		{ icon: <Code size={24} />, name: "Programming", description: "Building side projects and learning new technologies" },
		{ icon: <Music size={24} />, name: "Music", description: "Playing guitar and producing electronic music" },
		{ icon: <BookOpen size={24} />, name: "Reading", description: "Science fiction and technical books" },
		{ icon: <Camera size={24} />, name: "Photography", description: "Street and landscape photography" },
		{ icon: <Gamepad2 size={24} />, name: "Gaming", description: "Strategy and indie games" },
	];

	return (
		<div className="mt-8">
			<h2 className="text-2xl font-bold mb-6">Hobbies & Interests</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{hobbies.map((hobby, index) => (
					<Card key={index} className="p-4 bg-zinc-900 border-zinc-800 hover:border-indigo-500 transition-colors">
						<div className="flex items-start">
							<div className="p-2 bg-zinc-800 rounded-md mr-4">{hobby.icon}</div>
							<div>
								<h3 className="font-semibold text-lg">{hobby.name}</h3>
								<p className="text-zinc-400 text-sm">{hobby.description}</p>
							</div>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
};

const ContactForm = () => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
	};

	return (
		<Card className="p-6 bg-zinc-900 border-zinc-800">
			<h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
			<p className="text-zinc-400 mb-6">Have a question or want to work together? Send me a message!</p>
			<form onSubmit={handleSubmit}>
				<div className="space-y-4">
					<div>
						<Input placeholder="Your Name" className="bg-zinc-800 border-zinc-700 focus:border-indigo-500" />
					</div>
					<div>
						<Input type="email" placeholder="Your Email" className="bg-zinc-800 border-zinc-700 focus:border-indigo-500" />
					</div>
					<div>
						<Textarea placeholder="Your Message" rows={5} className="bg-zinc-800 border-zinc-700 focus:border-indigo-500" />
					</div>
					<Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
						<Send size={16} className="mr-2" />
						Send Message
					</Button>
				</div>
			</form>
			<Separator className="my-6 bg-zinc-800" />
			<div className="flex justify-center space-x-4">
				<Button variant="outline" size="icon" className="rounded-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
					<Github size={18} />
				</Button>
				<Button variant="outline" size="icon" className="rounded-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
					<Mail size={18} />
				</Button>
			</div>
		</Card>
	);
};

const BackgroundEffect = () => {
	return (
		<div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
			<div className="absolute inset-0">
				<Illustration />
			</div>
		</div>
	);
};

const Illustration = () => {
	const stars = 108;
	const columns = 18;

	const [glowingStars, setGlowingStars] = useState<number[]>([]);
	const highlightedStars = useRef<number[]>([]);

	useEffect(() => {
		const interval = setInterval(() => {
			highlightedStars.current = Array.from({ length: 5 }, () => Math.floor(Math.random() * stars));
			setGlowingStars([...highlightedStars.current]);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className="h-full w-full"
			style={{
				display: "grid",
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gap: `1px`,
			}}
		>
			{[...Array(stars)].map((_, starIdx) => {
				const isGlowing = glowingStars.includes(starIdx);
				const delay = (starIdx % 10) * 0.1;
				return (
					<div key={`matrix-col-${starIdx}}`} className="relative flex items-center justify-center">
						<Star isGlowing={isGlowing} delay={delay} />
						<AnimatePresence mode="wait">{isGlowing && <Glow delay={delay} />}</AnimatePresence>
					</div>
				);
			})}
		</div>
	);
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
	return (
		<motion.div
			key={delay}
			initial={{
				scale: 1,
			}}
			animate={{
				scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
				background: isGlowing ? "#fff" : "#666",
			}}
			transition={{
				duration: 2,
				ease: "easeInOut",
				delay: delay,
			}}
			className={cn("bg-[#666] h-[1px] w-[1px] rounded-full relative z-20")}
		></motion.div>
	);
};

const Glow = ({ delay }: { delay: number }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				duration: 2,
				ease: "easeInOut",
				delay: delay,
			}}
			exit={{
				opacity: 0,
			}}
			className="absolute left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-blue-500 blur-[1px] shadow-2xl shadow-blue-400"
		/>
	);
};

const Grid = () => {
	// Use fixed values instead of random ones to avoid hydration mismatch
	const p = [
		[8, 3],
		[9, 2],
		[7, 4],
		[8, 5],
		[9, 3],
	];

	return (
		<div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
			<div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
				<GridPattern
					width={20}
					height={20}
					x="-12"
					y="4"
					squares={p}
					className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
				/>
			</div>
		</div>
	);
};

function GridPattern({ width, height, x, y, squares, ...props }: any) {
	const patternId = useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y]: any) => (
						<rect strokeWidth="0" key={`${x}-${y}`} width={width + 1} height={height + 1} x={x * width} y={y * height} />
					))}
				</svg>
			)}
		</svg>
	);
}

export default AboutMe;
