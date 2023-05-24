import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
		<div className="home">
			<div className="nav bg-gray-400 text-red-600">
				I am Navbar
			</div>
			<span>I am homepage</span>
		</div>
    );
}
