import { Link } from "react-router-dom";
import HeroImage from "./HeroImage";

const Hero = () => {
	return (
		<section className="pt-28 text-xl font-bold text-white sm:pt-36 2xl:pt-72">
			<div className="container flex flex-col justify-center items-center mx-auto px-10 md:px-5 md:justify-between lg:px-10">
				<h1 className="text-2xl text-primary font-bold md:text-3xl lg:text-4xl 2xl:text-5xl">
					Radja Parfum
				</h1>
				<div className="container mx-auto flex flex-col justify-center items-center overflow-x-hidden md:flex-row-reverse md:gap-10 lg:gap-32">
					<HeroImage />
					<div className="flex flex-col justify-start items-center md:items-start">
						<p className="text-lg font-normal py-7 max-w-xl lg:text-xl 2xl:text-2xl">
							Buat diri lo jadi lebih wangi dan lebih berwibawa dengan parfum
							premium yang harganya nggak membuat dompet lo tipis. Lorem ipsum
							dolor sit amet consectetur adipisicing elit. In ipsam maxime rerum
							nobis deleniti excepturi voluptates cum soluta inventore id!
						</p>
						<Link
							to="/products"
							className="text-black mb-20 text-base font-normal bg-primary px-4 py-2 rounded-full transition-primary shadow-md shadow-secondary hover:translate-y-1 hover:shadow-none 2xl:px-6 2xl:py-4 2xl:text-lg"
						>
							Cobain Sekarang
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
