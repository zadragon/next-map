import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1 className="font-bold">Map Index Page</h1>
			<ul className="px-4 py-2">
				<li>
					<Link href="/stores">맛집 목록</Link>
				</li>
				<li>
					<Link href="/users/likes">찜한 맛집</Link>
				</li>
			</ul>
		</>
	);
}
