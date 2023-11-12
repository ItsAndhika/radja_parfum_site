import { useState } from "react";
import { heroSlides } from "../../data/dummy";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const HeroImage = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const previousSlide = (e) => {
		e.preventDefault();
		currentIndex === 0
			? heroSlides.length - setCurrentIndex(heroSlides.length - 1)
			: setCurrentIndex((prev) => prev - 1);
	};

	const nextSlide = (e) => {
		e.preventDefault();
		currentIndex === heroSlides.length - 1
			? heroSlides.length + setCurrentIndex(0)
			: setCurrentIndex((prev) => prev + 1);
	};

	return (
		<div className="relative transition-primary group my-10">
			<img
				src={`${heroSlides[currentIndex].url}`}
				alt="Slide"
				className="h-auto pointer-events-none rounded-full duration-500 md:max-w-md 2xl:max-w-lg"
			/>
			<button
				className="absolute top-[50%] translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-zinc-900 cursor-pointer transition-primary hover:text-primary"
				onClick={previousSlide}
			>
				<BsChevronCompactLeft size={30} />
			</button>
			<button
				className="absolute top-[50%] translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-zinc-900 cursor-pointer transition-primary hover:text-primary"
				onClick={nextSlide}
			>
				<BsChevronCompactRight size={30} />
			</button>
		</div>
	);
};

export default HeroImage;
