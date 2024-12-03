import Overview from './(dashboard)/_components/Overview';

export default function Home() {
	// Add actual user here to replace the hardcoded user
	return (
		<div className="h-full bg-background mb-20">
			<div className="flex flex-col min-h-screen bg-gray-400 dark:bg-zinc-700">
				<main className="flex-grow container mx-auto px-4 py-8">
					<div className="rounded-xl border bg-card text-card-foreground shodow px-5">
						<div className="container flex flex-wrap items-center justify-between gap-6 py-8">
							<p className="text-3xl font-bold"> Hello user</p>
						</div>
					</div>
					<div>
						<Overview />
					</div>
				</main>
			</div>
		</div>
	);
}
