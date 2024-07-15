import React from "react";
import Slider from "react-slick";
import banner1 from "./banner1.jpg";
import banner2 from "./banner2.jpg";
import banner3 from "./banner3.jpg";

const HomeBanner = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
	};

	return (
		<div className="homeBannerSection">
			<Slider {...settings}>
				<div className="item">
					<img src={banner1} className="w-100" alt="Banner1" />
				</div>
				<div className="item">
					<img src={banner2} className="w-100" alt="Banner2" />
				</div>
				<div className="item">
					<img src={banner3} className="w-100" alt="Banner3" />
				</div>
			</Slider>
		</div>
	);
};

export default HomeBanner;
