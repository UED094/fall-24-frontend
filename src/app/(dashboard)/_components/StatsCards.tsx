'use client';

import { API_HOST_BASE_URL } from '@/lib/constants';
import StatCard from './StatCard';
import { TrendingDown, TrendingUp, Wallet } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Result } from 'postcss';
import { Skeleton } from '@/components/ui/skeleton';
import SkeletonWrapper from '@/components/SkeletonWrapper';

interface GetBalanceStatsResponseType {
	total_income: number | null;
	total_expenses: number | null;
	total_balance: number | null;
}

function StatsCards() {
	const statsQuery = useQuery<GetBalanceStatsResponseType>({
		queryKey: ['overview', 'stats'],
		queryFn: async () => {
			await new Promise((resolve) => setTimeout(resolve, 3000));
			const token = localStorage.getItem('accessToken');

			const res = await fetch(`${API_HOST_BASE_URL}/transactions/metrics`, {
				headers: {
					mediaType: 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});

			if (res.status !== 200) {
				if (res.status === 401) {
					localStorage.removeItem('accessToken');
					window.location.href = '/sign-in';
				}
				throw new Error('Failed to fetch transaction metrics');
			} else {
				return await res.json();
			}
		},
	});

	if (statsQuery.isError) return <div>Error...</div>;

	const total_income = statsQuery.data?.total_income || 0;
	const total_expense = statsQuery.data?.total_expenses || 0;
	const total_balance = statsQuery.data?.total_balance || 0;

	return (
		<div className="relative flex w-full flex-wrap gap-2 md:flex-nowrap">
			<SkeletonWrapper isLoading={statsQuery.isLoading}>
				<StatCard
					value={total_income}
					title="Income"
					icon={
						<TrendingUp className="h-12 w-12 items-center rounded-lg p-2 text-emerald-500 bg-emerald-400/10" />
					}
				/>
			</SkeletonWrapper>

			<SkeletonWrapper isLoading={statsQuery.isLoading}>
				<StatCard
					value={total_expense}
					title="Expense"
					icon={
						<TrendingDown className="h-12 w-12 items-center rounded-lg p-2 text-red-500 bg-red-400/10" />
					}
				/>
			</SkeletonWrapper>

			<SkeletonWrapper isLoading={statsQuery.isLoading}>
				<StatCard
					value={total_balance}
					title="Balance"
					icon={
						<Wallet className="h-12 w-12 items-center rounded-lg p-2 text-violet-500 bg-violet-400/10" />
					}
				/>
			</SkeletonWrapper>
		</div>
	);
}
export default StatsCards;
