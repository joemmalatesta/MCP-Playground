import React from "react";

// Technology Icons
const SvelteIcon: React.FC = () => (
	<svg className="w-full h-full" viewBox="0 0 256 308" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244"
			fill="#FF3E00"
		/>
		<path
			d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
			fill="#FFF"
		/>
	</svg>
);

const VercelIcon: React.FC = () => (
	<svg className="w-full h-full" viewBox="0 0 256 222" xmlns="http://www.w3.org/2000/svg">
		<path fill="#000" d="m128 0 128 221.705H0z" />
	</svg>
);

const MongoDBIcon: React.FC = () => (
	<svg className="w-full h-full" viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg">
		<path
			fill="#01EC64"
			d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"
		/>
	</svg>
);

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="p-4 bg-white shadow-sm">
				<h1 className="text-2xl font-bold">My Project</h1>
			</header>

			<nav className="bg-gray-100 p-4">
				<ul className="flex space-x-6">
					<li>
						<a href="/" className="hover:text-blue-600">
							Home
						</a>
					</li>
					<li>
						<a href="/about" className="hover:text-blue-600">
							About
						</a>
					</li>
					<li>
						<a href="/projects" className="hover:text-blue-600">
							Projects
						</a>
					</li>
					<li>
						<a href="/contact" className="hover:text-blue-600">
							Contact
						</a>
					</li>
				</ul>
			</nav>

			<main className="flex-1 p-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold mb-2">Getting Started</h2>
						<p className="text-gray-600">Begin your journey with our comprehensive onboarding process.</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold mb-2">Features</h2>
						<p className="text-gray-600">Explore our powerful features designed to enhance your experience.</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold mb-2">Resources</h2>
						<p className="text-gray-600">Access documentation, tutorials, and helpful guides.</p>
					</div>
				</div>

				{/* Technologies Section */}
				<div className="mt-12">
					<h2 className="text-2xl font-bold mb-6">Technologies I Work With</h2>
					<div className="flex flex-wrap gap-8 justify-center items-center">
						<div className="flex flex-col items-center">
							<div className="w-12 h-12 hover:scale-110 transition-transform">
								<SvelteIcon />
							</div>
							<span className="mt-2 text-sm font-medium">Svelte</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-12 h-12 hover:scale-110 transition-transform">
								<VercelIcon />
							</div>
							<span className="mt-2 text-sm font-medium">Vercel</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-12 h-12 hover:scale-110 transition-transform">
								<MongoDBIcon />
							</div>
							<span className="mt-2 text-sm font-medium">MongoDB</span>
						</div>
					</div>
				</div>
			</main>

			<footer className="p-4 text-center text-sm text-gray-600">© {new Date().getFullYear()} My Project</footer>
		</div>
	);
}
