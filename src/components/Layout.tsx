import { ReactNode } from "react";
import Navbar from "./NavBar";

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="layout">
			<Navbar />
			{children}
		</div>
	);
}
