// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import Products from "./pages/Products";
// import About from "./pages/About";
// import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
			<div className="bg-[url(/images/elegant_background.jpg)] w-full h-full absolute top-0 bottom-0 bg-cover bg-center"></div>
			<main className="w-full h-full flex flex-col justify-center items-center mt-20 gap-10">
				<div className="w-full h-1/3 flex flex-col justify-center items-center gap-5 z-10">
					<img
						src="/images/mosto_elegant.webp"
						alt="Mosto Elegant"
						className="w-24 rounded-full"
					/>
					<p className="font-semibold text-slate-600">@radjaparfumasli</p>
				</div>
				<nav className="max-w-5xl w-full h-1/3 mx-auto px-10 z-10 flex flex-col gap-5">
					<a
						href="https://instagram.com/radjaparfumasli?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
						rel="noreferrer"
						target="_blank"
						className="w-full bg-white flex items-center p-2 rounded-lg cursor-pointer shadow-lg"
					>
						<img src="/images/instagram.webp" alt="Intagram" className="w-10" />
						<p className="w-full h-full font-semibold text-center text-primary">
							Instagram
						</p>
					</a>
					<a
						href="http://tiktok.com/@radjaparfumasli"
						rel="noreferrer"
						target="_blank"
						className="w-full bg-white flex items-center p-2 rounded-lg cursor-pointer shadow-lg"
					>
						<img src="/images/tiktok.webp" alt="Tiktok" className="w-10" />
						<p className="w-full h-full font-semibold text-center text-primary">
							Tiktok
						</p>
					</a>
					<a
						href="https://shope.ee/1VW790waNH"
						rel="noreferrer"
						target="_blank"
						className="w-full bg-white flex items-center p-2 rounded-lg cursor-pointer shadow-lg"
					>
						<img src="/images/shopee.png" alt="Shopee" className="w-10" />
						<p className="w-full h-full font-semibold text-center text-primary">
							Shopee
						</p>
					</a>
				</nav>
			</main>
			<footer className="absolute bottom-0 flex justify-center items-center w-full h-10 bg-transparent z-10">
				<p className="text-sm font-semibold text-black text-center sm:text-base md:text-lg lg:text-lg 2xl:text-xl">
					© Copyright 2023 Mosto Elegant. All Rights Reserved
				</p>
			</footer>
		</>
		// <Router>
		// 	<Header />
		// 	<main className="flex justify-center items-center">
		// 		<Routes>
		// 			<Route path="/" element={<Hero />} />
		// 			<Route path="/products" element={<Products />} />
		// 			<Route path="/about" element={<About />} />
		// 		</Routes>
		// 	</main>
		// 	<Footer />
		// </Router>
	);
};

export default App;
