"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Code, Github, ExternalLink, Sparkles, Coffee, Rocket, Terminal, Clock, CheckCircle2, Lightbulb, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
	title: string;
	description?: string;
	link?: string;
	githubLink?: string;
	icon?: React.ReactNode;
}

interface ProjectSection {
	title: string;
	icon: React.ReactNode;
	projects: Project[];
}

const projectSections: ProjectSection[] = [
	{
		title: "Currently Cooking",
		icon: <Coffee className="size-5 text-orange-400" />,
		projects: [
			{
				title: "HackerSight.io",
				description: "A modern interface for viewing and interacting with tech news",
			},
			{
				title: "Ifnotnow.tw",
				description: "Time management and productivity platform",
			},
			{
				title: "Reba Quotables",
				description: "Collection of memorable quotes and insights",
			},
			{
				title: "Fine tune CNN in REALTIME",
				description: "Real-time neural network fine-tuning system",
			},
			{
				title: "Github Readme",
				description: "Enhanced GitHub profile with interactive elements",
			},
		],
	},
	{
		title: "Weekend Projects",
		icon: <Rocket className="size-5 text-purple-400" />,
		projects: [
			{
				title: "AI Voice Clone",
				description: "Create an AI agent that can engage in conversations using a cloned voice",
			},
			{
				title: "NFC Gym Ring",
				description: "Custom metal NFC ring for gym access",
			},
			{
				title: "Thermal Notification Printer",
				description: "Physical notification system using thermal printing",
			},
			{
				title: "Raycast RLCS Extension",
				description: "Rocket League Championship Series extension for Raycast",
			},
			{
				title: "Groople Updates",
				description: "UI and functionality improvements for Groople",
			},
			{
				title: "Changelog Maker",
				description: "Rework UI for the changelog creation tool",
			},
		],
	},
	{
		title: "Startup Potential",
		icon: <Lightbulb className="size-5 text-yellow-400" />,
		projects: [
			{
				title: "Promise Ring",
				description: "AI assistant that tracks and follows up on promises and commitments",
			},
			{
				title: "GroundTruth",
				description: "Innovative platform for verified information",
			},
			{
				title: "Skedge",
				description: "Advanced scheduling and time management solution",
			},
		],
	},
	{
		title: "Open Source",
		icon: <Terminal className="size-5 text-green-400" />,
		projects: [
			{
				title: "Astro",
				description: "Contributions to the Astro web framework",
			},
			{
				title: "Sentry",
				description: "Contributions to error tracking and monitoring platform",
			},
			{
				title: "Excalidraw",
				description: "Contributions to the virtual whiteboard tool",
			},
		],
	},
	{
		title: "Completed",
		icon: <CheckCircle2 className="size-5 text-blue-400" />,
		projects: [
			{
				title: "CheddarBoxd",
				description: "Movie tracking and rating platform",
			},
			{
				title: "GROOPLE",
				description: "Group coordination and planning tool",
			},
			{
				title: "joemmalatesta.com",
				description: "Personal portfolio website",
			},
		],
	},
	{
		title: "Hackathon Ideas",
		icon: <Trophy className="size-5 text-amber-400" />,
		projects: [
			{
				title: "ifnotnow iOS app",
				description: "Mobile version of the time management platform",
			},
			{
				title: "Skedge iOS app",
				description: "Mobile scheduling solution",
			},
			{
				title: "ActuallyDoTheThing.com",
				description: "Financial and productivity tracking system",
			},
			{
				title: "Garbage Sorter",
				description: "Sustainable waste sorting solution",
			},
			{
				title: "Automatic Slide Deck",
				description: "AI-powered presentation generator",
			},
		],
	},
];

function ProjectCard({ title, description, link, githubLink, icon = <Code className="size-4 text-blue-300" /> }: Project) {
	return (
		<Card
			className={cn(
				"group relative overflow-hidden border border-border/50 bg-background/80 p-6 transition-all duration-300 hover:border-border/80 dark:bg-zinc-900/80 text-white"
			)}
		>
			<div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-800 to-indigo-900 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

			<div className="relative z-10 flex flex-col gap-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 p-1.5 text-blue-300">{icon}</span>
						<h3 className="text-lg font-bold text-foreground">{title}</h3>
					</div>
					<div className="flex items-center gap-2">
						{githubLink && (
							<a
								href={githubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-zinc-800 hover:text-blue-300"
							>
								<Github className="size-4" />
							</a>
						)}
						{link && (
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-zinc-800 hover:text-blue-300"
							>
								<ExternalLink className="size-4" />
							</a>
						)}
					</div>
				</div>

				{description && <p className="text-sm text-muted-foreground">{description}</p>}
			</div>

			<div className="absolute -bottom-1 -right-1 h-16 w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
				<div className="absolute bottom-0 right-0 h-8 w-8 rounded-tl-md border-l border-t border-border/80 dark:border-zinc-700" />
			</div>

			<div className="absolute -top-1 -left-1 h-16 w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
				<div className="absolute top-0 left-0 h-8 w-8 rounded-br-md border-b border-r border-border/80 dark:border-zinc-700" />
			</div>
		</Card>
	);
}

interface ProjectSectionProps {
	section: ProjectSection;
}

function ProjectSectionGrid({ section }: ProjectSectionProps) {
	return (
		<div className="mb-12 text-white">
			<div className="mb-6 flex items-center gap-2">
				{section.icon}
				<h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
			</div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{section.projects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</div>
	);
}

export default function NotionProjects() {
	return (
		<div className="container mx-auto py-12 text-white">
			{projectSections.map((section, index) => (
				<ProjectSectionGrid key={index} section={section} />
			))}
		</div>
	);
}
