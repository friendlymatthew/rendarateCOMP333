import { Link } from "react-router-dom";

export default function Landing() {
	return (
		<div className="min-h-screen bg-slate-800 grid place-items-center">
			<div className="bg-slate-200 w-5/12 lg:w-8/12 rounded-lg py-8 px-8">
				<div className="text-center font-semibold text-2xl lg:text-4xl pb-8 opacity-80">
					Renda Music and Rate
				</div>

				<section className="grid grid-cols-1 lg:grid-cols-2">
					<div className="cursor-normal text-center lg:pb-0 pb-2">
						<button className="cursor-pointer group bg-yellow-300 hover:bg-cyan-300 transition ease-in duration-150 px-3 py-2">
							<Link to="/login" className="font-semibold text-xl">LOG IN </Link>
						</button>
					</div>
					<div className="cursor-normal text-center lg:pt-0 pt-2">
						<button className="cursor-pointer group hover:bg-purple-300 bg-green-300 transition ease-in duration-150 px-3 py-2">
							<Link to="/signup" className="font-semibold text-xl">CREATE ACCOUNT</Link>
						</button>
					</div>
				</section>
			</div>

			<div className="grid grid-cols-2 w-10/12 text-white font-semibold text-3xl"></div>
		</div>
	);
}
