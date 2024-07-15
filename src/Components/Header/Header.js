import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox/SearchBox";
import Navigation from "./Navigation/Navigation";
import { useContext } from "react";
import { MyContext } from "../../App";
import LocationDropdown from "../LocationDropdown/LocationDropdown";

const Header = () => {
	const context = useContext(MyContext);

	return (
		<>
			<div className="headerWrapper">
				<header className="header">
					<div className="container">
						<div className="row">
							<div className="logoWrapper d-flex align-items-center col-sm-2">
								<Link to="/">
									<img src={logo} alt="Logo" />
								</Link>
							</div>
							<div className="col-sm-10 d-flex align-items-center part2">
								{context.locationList.length !== 0 && <LocationDropdown />}

								{/* Search Start */}
								<SearchBox />
								{/* Search End */}

								<div className="part3 d-flex align-items-center ml-auto">
									<Button className="circle mr-3">
										<FiUser />
									</Button>
									<div className="ml-auto cartTab d-flex align-items-center">
										<div className="position-relative ml-2">
											<Button className="circle">
												<IoBagOutline />
											</Button>
											<span className="count d-flex align-items-center justify-content-center ">
												1
											</span>
										</div>
										<span className="price ml-2	">510.000 VND</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

				<Navigation />
			</div>
		</>
	);
};

export default Header;
