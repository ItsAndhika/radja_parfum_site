import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./pages/Products";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<Router>
			<Header />
			<main className="flex justify-center items-center">
				<Routes>
					<Route path="/" element={<Hero />} />
					<Route path="/products" element={<Products />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
