"use client";

import Temp from "@/components/Temp";
import { Button } from "@/components/ui/button";
import React from "react";

export default function SupportPage() {
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		console.log("useEffect");
	}, [count]);

	return (
		<div>
			<Temp />
			<p className="bg-orange-400"> Count = {count}</p>
			<Button
				variant={"outline"}
				onClick={() => {
					setCount(count + 1);
					console.log(count);
				}}
			>
				Increment
			</Button>
		</div>
	);
}
