import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const LocationDropdown = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [selectedTab, setSelectedTab] = useState(null);
	const [locationList, setLocationList] = useState([]);

	const context = useContext(MyContext);

	const selectLocation = (index, provinceNames) => {
		setSelectedTab(index);
		setIsOpenModal(false);
		context.setSelectedLocation(provinceNames);
	};

	useEffect(() => {
		setLocationList(context.locationList);
	}, [context.locationList]);

	const filterList = (e) => {
		const keyword = e.target.value.toLowerCase();

		if (keyword !== "") {
			const list = locationList.filter((item) => {
				return item.toLowerCase().includes(keyword);
			});
			setLocationList(list);
		} else {
			setLocationList(context.locationList);
		}
	};

	return (
		<>
			<Button className="locationDrop" onClick={() => setIsOpenModal(true)}>
				<div className="info d-flex flex-column">
					<span className="label">Vị trí của bạn</span>
					<span className="name">
						{context.selectedLocation !== ""
							? context.selectedLocation.length > 20
								? context.selectedLocation?.substr(0, 10) + "..."
								: context.selectedLocation
							: "Chọn vị trí"}
					</span>
				</div>
				<span className="ml-auto">
					<FaAngleDown />
				</span>
			</Button>

			<Dialog
				open={isOpenModal}
				onClose={() => setIsOpenModal(false)}
				className="locationModal"
				TransitionComponent={Transition}
			>
				<h5 className="mb-0">Chọn vị trí Giao Hàng của bạn</h5>
				<p>
					Nhập địa chỉ của bạn và chúng tôi sẽ tìm ưu đãi cho khu vực của bạn.
				</p>
				<Button className="close_" onClick={() => setIsOpenModal(false)}>
					<MdClose />
				</Button>

				<div className="headerSearch w-100">
					<input
						type="text"
						placeholder="Tìm vị trí của bạn..."
						onChange={filterList}
					/>
					<Button>
						<IoIosSearch />
					</Button>
				</div>

				<ul className="locationList mt-3">
					{locationList?.length !== 0 &&
						locationList?.map((item, index) => {
							return (
								<li key={index}>
									<Button
										onClick={() => selectLocation(index, item)}
										className={`${selectedTab === index ? "active" : ""}`}
									>
										{item}
									</Button>
								</li>
							);
						})}
				</ul>
			</Dialog>
		</>
	);
};

export default LocationDropdown;
