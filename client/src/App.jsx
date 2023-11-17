import Background from "./components/Background/Background";
import Title from "./components/Title/Title";
import Links from "./components/Links/Links";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
			<Background />
			<main className="w-full h-full flex flex-col justify-center items-center mt-20 gap-10">
				<Title />
				<Links />
			</main>
			<Footer />
		</>
	);
};

export default App;
