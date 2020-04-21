import React from "react";

function SecondDashBoard() {
	//   Likes 52 2% Likes 5462 2257% Profile Views
	// 	52k 1375% Retweets 117 303% Likes 507 553% Likes 107 19% Total Views 1407
	// 	12%
	return (
		<div>
			<p className="m-4 font-semibold text-2xl">Overview - Today </p>
			<div className="flex flex-col lg:grid grid-cols-4">
				{/* one */}
				<div className="p-4 m-2 rounded card">
					{/* fist display */}
					<div className="flex justify-between">
						<p className="ind">Page Views</p>
						<p>
							<img src="../images/icon-facebook.svg" alt="social icon" />
						</p>
					</div>

					{/* second display */}
					<div className="flex justify-between">
						<div className="mt-6">
							<p className="text-2xl font-bold"> 87</p>
						</div>

						<div className="text-green-600 font-medium mt-8">
							<span className="text-center">
								<img
									src="../images/icon-up.svg"
									alt="up-icon"
									className="inline-block m-auto"
								/>{" "}
								3%
							</span>
						</div>
					</div>
				</div>

				{/* two */}

				<div className="p-4 m-2 rounded card">
					{/* fist display */}
					<div className="flex justify-between">
						<p className="ind">Likes</p>
						<p>
							<img src="../images/icon-facebook.svg" alt="social icon" />
						</p>
					</div>

					{/* second display */}
					<div className="flex justify-between">
						<div className="mt-6">
							<p className="text-2xl font-bold"> 52</p>
						</div>

						<div className="text-red-600 font-medium mt-8">
							<span className="text-center">
								<img
									src="../images/icon-down.svg"
									alt="up-icon"
									className="inline-block m-auto"
								/>{" "}
								2%
							</span>
						</div>
					</div>
				</div>
				{/* three */}

				<div className="p-4 m-2 rounded card">
					{/* fist display */}
					<div className="flex justify-between">
						<p className="ind">Likes</p>
						<p>
							<img src="../images/icon-instagram.svg" alt="social icon" />
						</p>
					</div>

					{/* second display */}
					<div className="flex justify-between">
						<div className="mt-6">
							<p className="text-2xl font-bold"> 5262</p>
						</div>

						<div className="text-green-600 font-medium mt-8">
							<span className="text-center">
								<img
									src="../images/icon-up.svg"
									alt="up-icon"
									className="inline-block m-auto"
								/>{" "}
								2275%
							</span>
						</div>
					</div>
				</div>

				{/* four */}

				<div className="p-4 m-2 rounded card">
					{/* fist display */}
					<div className="flex justify-between">
						<p className="ind">Profile Views</p>
						<p>
							<img src="../images/icon-instagram.svg" alt="social icon" />
						</p>
					</div>

					{/* second display */}
					<div className="flex justify-between">
						<div className="mt-6">
							<p className="text-2xl font-bold"> 52k</p>
						</div>

						<div className="text-green-600 font-medium mt-8">
							<span className="text-center">
								<img
									src="../images/icon-up.svg"
									alt="up-icon"
									className="inline-block m-auto"
								/>{" "}
								1375%
							</span>
						</div>
					</div>
				</div>

				{/* five */}

				<div className="p-4 m-2 rounded card">
					{/* fist display */}
					<div className="flex justify-between">
						<p className="ind">Retweets</p>
						<p>
							<img src="../images/icon-twitter.svg" alt="social icon" />
						</p>
					</div>

					{/* second display */}
					<div className="flex justify-between">
						<div className="mt-6">
							<p className="text-2xl font-bold"> 177</p>
						</div>

						<div className="text-green-600 font-medium mt-8">
							<span className="text-center">
								<img
									src="../images/icon-up.svg"
									alt="up-icon"
									className="inline-block m-auto"
								/>{" "}
								303%
							</span>
						</div>
					</div>
				</div>

				{/* six */}

				<div className="p-4 m-2 rounded card">
					{/* fist display */}
					<div className="flex justify-between">
						<p className="ind">Likes</p>
						<p>
							<img src="../images/icon-twitter.svg" alt="social icon" />
						</p>
					</div>

					{/* second display */}
					<div className="flex justify-between">
						<div className="mt-6">
							<p className="text-2xl font-bold"> 507</p>
						</div>

						<div className="text-green-600 font-medium mt-8">
							<span className="text-center">
								<img
									src="../images/icon-up.svg"
									alt="up-icon"
									className="inline-block m-auto"
								/>{" "}
								553%
							</span>
						</div>
					</div>
				</div>

				{/* seven */}

				<div className="p-4 m-2 rounded card">
					{/* fist display */}
					<div className="flex justify-between">
						<p className="ind">Likes</p>
						<p>
							<img src="../images/icon-youtube.svg" alt="social icon" />
						</p>
					</div>

					{/* second display */}
					<div className="flex justify-between">
						<div className="mt-6">
							<p className="text-2xl font-bold"> 107</p>
						</div>

						<div className="text-red-600 font-medium mt-8">
							<span className="text-center">
								<img
									src="../images/icon-down.svg"
									alt="up-icon"
									className="inline-block m-auto"
								/>{" "}
								19%
							</span>
						</div>
					</div>
				</div>

				{/* eight */}

				<div className="p-4 m-2 rounded card">
					{/* fist display */}
					<div className="flex justify-between">
						<p className="ind">Total views</p>
						<p>
							<img src="../images/icon-youtube.svg" alt="social icon" />
						</p>
					</div>

					{/* second display */}
					<div className="flex justify-between">
						<div className="mt-6">
							<p className="text-2xl font-bold"> 1407</p>
						</div>

						<div className="text-red-600 font-medium mt-8">
							<span className="text-center">
								<img
									src="../images/icon-down.svg"
									alt="up-icon"
									className="inline-block m-auto"
								/>{" "}
								12%
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="attribution">
				Challenge by
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by <a href="#">Jerry Aaron</a>.
			</div>
		</div>
	);
}

export default SecondDashBoard;
