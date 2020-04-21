import React from "react";
import "../scss/app.scss";

function FirstDashboard() {
	return (
		<div className="flex flex-col justify-between lg:flex-row ">
			<div className="px-12 py-2 m-2 text-center rounded border-t-4 border-blue-700 card">
				<div className="flex justify-center">
					<span className="m-1">
						<img src="../images/icon-facebook.svg" alt="icon" />
					</span>
					<span className="m-1 ind2">@nathanf</span>
				</div>
				<p className=" text-6xl font-bold">1987</p>
				<p className=" text-2xl -mt-4 tracking-widest ind ">Followers</p>
				<div className="text-green-600 font-medium mt-4">
					<span className="text-center">
						<img
							src="../images/icon-up.svg"
							alt="up-icon"
							className="inline-block m-auto"
						/>{" "}
						12
					</span>
					<span className="inline-block m-1">Today</span>
				</div>
			</div>

			{/* secound */}

			<div className="px-12 py-2 m-2 text-center rounded border-t-4 border-blue-700 card">
				<div className="flex justify-center">
					<span className="m-1">
						<img src="../images/icon-twitter.svg" alt="icon" />
					</span>
					<span className="m-1 ind2">@nathanf</span>
				</div>
				<p className=" text-6xl font-bold">1004</p>
				<p className=" text-2xl -mt-4 tracking-widest ind ">Followers</p>
				<div className="text-green-600 font-medium mt-4">
					<span className="text-center">
						<img
							src="../images/icon-up.svg"
							alt="up-icon"
							className="inline-block m-auto"
						/>{" "}
						99
					</span>
					<span className="inline-block m-1">Today</span>
				</div>
			</div>

			{/* third */}

			<div className="px-12 py-2  m-2 text-center rounded border-t-4 border-red-400 card">
				<div className="flex justify-center">
					<span className="m-1 lg:mt-3">
						<img src="../images/icon-instagram.svg" alt="icon" />
					</span>
					<span className="m-1 ind2">@realnathanf</span>
				</div>
				<p className=" text-6xl font-bold">11k</p>
				<p className=" text-2xl -mt-4 tracking-widest ind">Followers</p>
				<div className="text-green-600 font-medium mt-4">
					<span className="text-center">
						<img
							src="../images/icon-up.svg"
							alt="up-icon"
							className="inline-block m-auto"
						/>{" "}
						1099
					</span>
					<span className="inline-block m-1">Today</span>
				</div>
			</div>

			{/* fourth */}

			<div className="px-12 py-2   m-2 text-center rounded border-t-4 border-red-700 card">
				<div className="flex justify-center">
					<span className="m-1">
						<img src="../images/icon-youtube.svg" alt="icon" />
					</span>
					<span className="m-1 ind2">nathanf</span>
				</div>
				<p className=" text-6xl font-bold">8239</p>
				<p className=" text-2xl -mt-4 tracking-widest ind">Subscribers</p>
				<div className="text-red-600 font-medium mt-4">
					<span className="text-center">
						<img
							src="../images/icon-down.svg"
							alt="up-icon"
							className="inline-block m-auto"
						/>{" "}
						144
					</span>
					<span className="inline-block m-1">Today</span>
				</div>
			</div>
		</div>
	);
}

export default FirstDashboard;
