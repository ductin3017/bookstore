import Button from "@mui/material/Button";
import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Navigation = () => {
	const [isOpenSideBar, setIsOpenSideBar] = useState(false);

	return (
		<nav>
			<div className="container">
				<div className="row">
					<div className="col-sm-2 navPart1">
						<div className="categoryWrapper">
							<Button
								className="allCategoryTab align-items-center"
								onClick={() => setIsOpenSideBar(!isOpenSideBar)}
							>
								<span className="icon1 mr-2">
									<IoIosMenu />
								</span>
								<span className="text">DANH MỤC SÁCH</span>
								<span className="icon2 ml-2">
									<FaAngleDown />
								</span>
							</Button>
							<div
								className={`sideBarNav ${isOpenSideBar === true ? "open" : ""}`}
							>
								<ul>
									<li>
										<Link to="/">
											<Button>
												Lịch sử <FaAngleRight className="ml-auto" />
											</Button>
										</Link>
										<div className="submenu">
											<Link to="/history/ancient">
												<Button>Lịch Sử Cổ Đại</Button>
											</Link>
											<Link to="/history/medieval">
												<Button>Lịch Sử Trung Cổ</Button>
											</Link>
											<Link to="/history/modern">
												<Button>Lịch Sử Hiện Đại</Button>
											</Link>
											<Link to="/history/vietnamese">
												<Button>Lịch Sử Việt Nam</Button>
											</Link>
											<Link to="/history/world">
												<Button>Lịch Sử Thế Giới</Button>
											</Link>
										</div>
									</li>
									<li>
										<Link to="/">
											<Button>
												Văn học <FaAngleRight className="ml-auto" />
											</Button>
										</Link>
										<div className="submenu">
											<Link to="/">
												<Button>Văn học</Button>
											</Link>
											<Link to="/literature/classic">
												<Button>Văn học Cổ điển</Button>
											</Link>
											<Link to="/literature/modern">
												<Button>Văn học Hiện Đại</Button>
											</Link>
											<Link to="/literature/poetry">
												<Button>Thơ Ca</Button>
											</Link>
										</div>
									</li>
									<li>
										<Link to="/">
											<Button>
												Kinh tế <FaAngleRight className="ml-auto" />
											</Button>
										</Link>
										<div className="submenu">
											<Link to="/economics/micro">
												<Button>Kinh tế Vi mô</Button>
											</Link>
											<Link to="/economics/macro">
												<Button>Kinh tế Vĩ mô</Button>
											</Link>
											<Link to="/economics/finance">
												<Button>Tài Chính</Button>
											</Link>
										</div>
									</li>
									<li>
										<Link to="/">
											<Button>
												Pháp luật <FaAngleRight className="ml-auto" />
											</Button>
										</Link>
										<div className="submenu">
											<Link to="/law/criminal">
												<Button>Luật Hình Sự</Button>
											</Link>
											<Link to="/law/civil">
												<Button>Luật Dân Sự</Button>
											</Link>
											<Link to="/law/international">
												<Button>Luật Quốc Tế</Button>
											</Link>
										</div>
									</li>
									<li>
										<Link to="/">
											<Button>
												Hóa học <FaAngleRight className="ml-auto" />
											</Button>
										</Link>
										<div className="submenu">
											<Link to="/chemistry/organic">
												<Button>Hóa học Hữu Cơ</Button>
											</Link>
											<Link to="/chemistry/inorganic">
												<Button>Hóa học Vô Cơ</Button>
											</Link>
											<Link to="/chemistry/physical">
												<Button>Hóa học Lý Thuyết</Button>
											</Link>
										</div>
									</li>
									<li>
										<Link to="/">
											<Button>
												Toán học <FaAngleRight className="ml-auto" />
											</Button>
										</Link>
										<div className="submenu">
											<Link to="/math/algebra">
												<Button>Đại Số</Button>
											</Link>
											<Link to="/math/geometry">
												<Button>Hình Học</Button>
											</Link>
											<Link to="/math/calculus">
												<Button>Giải Tích</Button>
											</Link>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-sm-10 navPart2 d-flex align-items-center">
						<ul className="list list-inline ml-auto">
							<li className="list-inline-item">
								<Link to="/">
									<Button>Trang chủ</Button>
								</Link>
							</li>
							<li className="list-inline-item">
								<Link to="/">
									<Button>Lịch sử</Button>
								</Link>
								<div className="submenu shadow">
									<Link to="/history/ancient">
										<Button>Lịch Sử Cổ Đại</Button>
									</Link>
									<Link to="/history/medieval">
										<Button>Lịch Sử Trung Cổ</Button>
									</Link>
									<Link to="/history/modern">
										<Button>Lịch Sử Hiện Đại</Button>
									</Link>
									<Link to="/history/vietnamese">
										<Button>Lịch Sử Việt Nam</Button>
									</Link>
									<Link to="/history/world">
										<Button>Lịch Sử Thế Giới</Button>
									</Link>
								</div>
							</li>
							<li className="list-inline-item">
								<Link to="/">
									<Button>Văn học</Button>
								</Link>
								<div className="submenu shadow">
									<Link to="/literature/classic">
										<Button>Văn học Cổ điển</Button>
									</Link>
									<Link to="/literature/modern">
										<Button>Văn học Hiện Đại</Button>
									</Link>
									<Link to="/literature/poetry">
										<Button>Thơ Ca</Button>
									</Link>
								</div>
							</li>
							<li className="list-inline-item">
								<Link to="/">
									<Button>Hóa học</Button>
								</Link>
								<div className="submenu shadow">
									<Link to="/chemistry/organic">
										<Button>Hóa học Hữu Cơ</Button>
									</Link>
									<Link to="/chemistry/inorganic">
										<Button>Hóa học Vô Cơ</Button>
									</Link>
									<Link to="/chemistry/physical">
										<Button>Hóa học Lý Thuyết</Button>
									</Link>
								</div>
							</li>
							<li className="list-inline-item">
								<Link to="/">
									<Button>Pháp luật</Button>
								</Link>
								<div className="submenu shadow">
									<Link to="/law/criminal">
										<Button>Luật Hình Sự</Button>
									</Link>
									<Link to="/law/civil">
										<Button>Luật Dân Sự</Button>
									</Link>
									<Link to="/law/international">
										<Button>Luật Quốc Tế</Button>
									</Link>
								</div>
							</li>
							<li className="list-inline-item">
								<Link to="/">
									<Button>Kinh tế</Button>
								</Link>
								<div className="submenu shadow">
									<Link to="/economics/micro">
										<Button>Kinh tế Vi mô</Button>
									</Link>
									<Link to="/economics/macro">
										<Button>Kinh tế Vĩ mô</Button>
									</Link>
									<Link to="/economics/finance">
										<Button>Tài Chính</Button>
									</Link>
								</div>
							</li>
							<li className="list-inline-item">
								<Link to="/">
									<Button>Toán học</Button>
								</Link>
								<div className="submenu shadow">
									<Link to="/math/algebra">
										<Button>Đại Số</Button>
									</Link>
									<Link to="/math/geometry">
										<Button>Hình Học</Button>
									</Link>
									<Link to="/math/calculus">
										<Button>Giải Tích</Button>
									</Link>
								</div>
							</li>
							<li className="list-inline-item">
								<Link to="/">
									<Button>Diễn đàn</Button>
								</Link>
							</li>
							<li className="list-inline-item">
								<Link to="/">
									<Button>Liên hệ</Button>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
