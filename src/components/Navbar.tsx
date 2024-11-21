import Link from "next/link";
import NavbarItem from "./NavbarItem";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
	const navLinks = [
		{ label: "Home", link: "/" },
		{ label: "About", link: "/about" },
		{ label: "Support", link: "/support" },
	];
	return (
		<nav>
			{navLinks.map((navLink) => (
				<NavbarItem
					key={navLink.label}
					navLink={navLink}
				/>
			))}
			<ModeToggle />
		</nav>
	);
}
