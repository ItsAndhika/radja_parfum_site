const Links = () => {
	return (
		<nav className="max-w-5xl w-full h-1/3 mx-auto px-10 z-10 flex flex-col gap-5">
			<a
				href="https://instagram.com/mostoelegantofficial"
				rel="noreferrer"
				target="_blank"
				className="w-full bg-white flex items-center p-2 rounded-lg cursor-pointer shadow-lg transition-primary hover:scale-105"
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
				className="w-full bg-white flex items-center p-2 rounded-lg cursor-pointer shadow-lg transition-primary hover:scale-105"
			>
				<img src="/images/tiktok.webp" alt="Tiktok" className="w-10" />
				<p className="w-full h-full font-semibold text-center text-primary">
					Tiktok
				</p>
			</a>
			<a
				href="https://shopee.co.id/shop/1105339415"
				rel="noreferrer"
				target="_blank"
				className="w-full bg-white flex items-center p-2 rounded-lg cursor-pointer shadow-lg transition-primary hover:scale-105"
			>
				<img src="/images/shopee.png" alt="Shopee" className="w-10" />
				<p className="w-full h-full font-semibold text-center text-primary">
					Shopee
				</p>
			</a>
		</nav>
	);
};

export default Links;
