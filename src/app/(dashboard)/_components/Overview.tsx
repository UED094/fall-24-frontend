import StatsCards from './StatsCards';

function Overview() {
	return (
		<>
			<div className="container flex flex-wrap items-end justify-between gap-2 py-6">
				<h2 className="text-3xl font-bold">Overview</h2>
			</div>
			<div className="container flex w-full flex-col gap-2">
				<StatsCards />
			</div>
		</>
	);
}
export default Overview;
