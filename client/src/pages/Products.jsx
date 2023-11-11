import { products } from "../data/dummy";

const Products = () => {
	return (
		<section className="w-screen pt-28 mb-20 mx-auto sm:pt-36 2xl:pt-72">
			<div className="flex flex-col justify-center items-center px-auto gap-10">
				<h1 className="text-2xl text-primary text-center font-bold md:text-3xl lg:text-4xl 2xl:text-5xl">
					Our Products
				</h1>
				<div className="grid justify-center items-center grid-cols-1 mx-5 gap-10 md:grid-cols-2 lg:grid-cols-4 2xl:gap-16">
					{products.map((product, index) => (
						<div
							className="w-60 h-auto border-2 border-primary rounded-md cursor-pointer transition-primary hover:shadow-md hover:shadow-primary hover:-translate-y-1 2xl:w-72"
							key={index}
						>
							<img
								src={`${product.url}`}
								alt={`${product.url.split("/")[2].split(".")[0]}`}
								className="pointer-events-none"
							/>
							<a
								href=""
								target="_blank"
								className="text-white p-2 flex justify-center items-center transition-primary hover:text-primary 2xl:text-lg"
							>
								Lihat Produk
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Products;
