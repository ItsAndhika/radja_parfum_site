const About = () => {
	return (
		<section className="pt-28 sm:pt-36 2xl:pt-72">
			<div className="container flex flex-col justify-center items-center px-10 mx-auto gap-10">
				<h1 className="text-2xl text-primary font-bold md:text-3xl lg:text-4xl 2xl:text-5xl">
					About Us
				</h1>
				<img
					src="/images/radjaparfum-transparent.png"
					alt="Radja Parfum"
					className="pointer-events-none w-40 2xl:w-52"
				/>
				<p className="max-w-4xl text-lg font-semibold text-white text-center md:text-left 2xl:text-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
					itaque ipsam mollitia necessitatibus. Eligendi accusantium itaque
					doloribus eius commodi voluptatum laboriosam omnis cupiditate quis.
					Voluptates cum praesentium placeat animi quisquam est, illo cupiditate
					laudantium maxime soluta. Velit rem perferendis cumque possimus dolore
					consectetur omnis laudantium ab deleniti corporis, tenetur iusto?
				</p>
			</div>
		</section>
	);
};

export default About;
