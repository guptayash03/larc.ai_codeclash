"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import useAccordion from "@/components/hooks/useAccordion";
import useTabs from "@/components/hooks/useTabs";
import Image from "next/image";
import Link from "next/link";

function Pricing() {
	const [activeTab, handleTab] = useTabs();

	const [activeIndex, handleAccordion] = useAccordion();
	return (
		<div className="bg-white">
			<Header_01 />
			<main className="main-wrapper relative overflow-hidden">
				{/*...::: Breadcrumb Section Start :::... */}
				<section id="section-breadcrumb">
					{/* Section Spacer */}
					<div className="breadcrumb-wrapper">
						{/* Section Container */}
						<div className="global-container">
							<div className="breadcrumb-block">
								<h1 className="breadcrumb-title">Pricing Plans</h1>
								<ul className="breadcrumb-nav">
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>Pricing Plans</li>
								</ul>
							</div>
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: Breadcrumb Section End :::... */}
				{/*...::: Pricing Section Start :::... */}
				<section className="pricing-section">
					{/* Section Spacer */}
					<div className="pb-20 xl:pb-[150px]">
						{/* Section Container */}
						<div className="global-container">
							{/* Section Content Block */}
							<div className="jos mb-10 text-center lg:mb-12">
								<div className="mx-auto max-w-md lg:max-w-3xl xl:max-w-[950px]">
									<h2>Find a flexible plan that fits your business</h2>
								</div>
							</div>
							{/* Section Content Block */}
							{/* Pricing Block */}
							<div className="container mx-auto">
								{/* Tab buttons */}
								<div className="jos flex justify-center" data-jos_delay="0.3">
									<div className="inline-flex space-x-4 rounded-[50px] border-2 border-black font-semibold">
										<button
											className={`tab-button price-button ${
												activeTab === 0 ? "active" : ""
											}`}
											onClick={() => handleTab(0)}
											data-tab="monthly"
										>
											Monthly
										</button>
										<button
											className={`tab-button price-button ${
												activeTab === 1 ? "active" : ""
											}`}
											onClick={() => handleTab(1)}
											data-tab="annually"
										>
											Annually
										</button>
									</div>
								</div>
								{/* Pricing Block */}
								<div className="mt-12 lg:mt-16 xl:mt-20">
									{/* Price List */}
									{activeTab === 0 && (
										<ul
											id="monthly"
											className="tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-4"
										>
											{/* Price Item */}
											<li
												className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black"
												data-jos_animation="flip"
												data-jos_delay={0}
											>
												<h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
													Free
												</h3>
												<span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													1 member
												</span>
												<div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
												<h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
													$0
													<span className="text-lg font-semibold">
														/Per month
													</span>
												</h4>
												<p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													Ideal for individuals person and small businesses just
													getting started.
												</p>
												{/* Price Info List */}
												<ul className="mb-10 flex flex-col gap-y-3">
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														AI-Ready Data Prep
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Feature Engineering
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Classification Models
													</li>
												</ul>
												{/* Price Info List */}
												<Link
													href="/pricing"
													className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
												>
													Choose the plan
												</Link>
											</li>
											{/* Price Item */}
											{/* Price Item */}
											<li
												className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black"
												data-jos_animation="flip"
												data-jos_delay={0}
											>
												<h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
													Beginner
												</h3>
												<span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													Up to 10 members
												</span>
												<div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
												<h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
													$25
													<span className="text-lg font-semibold">
														/Per month
													</span>
												</h4>
												<p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													This is an excellent option for people &amp; small
													businesses who are starting out.
												</p>
												{/* Price Info List */}
												<ul className="mb-10 flex flex-col gap-y-3">
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														AI-Ready Data Prep
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Feature Engineering
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Classification Models
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Regression Models
													</li>
												</ul>
												{/* Price Info List */}
												<Link
													href="/pricing"
													className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
												>
													Choose the plan
												</Link>
											</li>
											{/* Price Item */}
											{/* Price Item */}
											<li
												className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black"
												data-jos_animation="flip"
												data-jos_delay={0}
											>
												<h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
													Starter
												</h3>
												<span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													Up to 50 members
												</span>
												<div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
												<h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
													$89
													<span className="text-lg font-semibold">
														/Per month
													</span>
												</h4>
												<p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													This plan is suitable for e-commerce stores as well as
													professional blogs.
												</p>
												{/* Price Info List */}
												<ul className="mb-10 flex flex-col gap-y-3">
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														AI-Ready Data Prep
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Feature Engineering
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Classification Models
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Regression Models
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Time Series Models
													</li>
												</ul>
												{/* Price Info List */}
												<Link
													href="/pricing"
													className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
												>
													Choose the plan
												</Link>
											</li>
											{/* Price Item */}
											{/* Price Item */}
											<li
												className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black"
												data-jos_animation="flip"
												data-jos_delay={0}
											>
												<h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
													Pro
												</h3>
												<span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													Up to 100 members
												</span>
												<div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
												<h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
													$199
													<span className="text-lg font-semibold">
														/Per month
													</span>
												</h4>
												<p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													Ideal for handling complicated projects
													enterprise-level projects, and websites.
												</p>
												{/* Price Info List */}
												<ul className="mb-10 flex flex-col gap-y-3">
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														AI-Ready Data Prep
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Feature Engineering
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Classification Models
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Regression Models
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Time Series Models
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Clustering models
													</li>
												</ul>
												{/* Price Info List */}
												<Link
													href="/pricing"
													className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
												>
													Choose the plan
												</Link>
											</li>
											{/* Price Item */}
										</ul>
									)}
									{/* Price List */}

									{/* Price List */}
									{activeTab === 1 && (
										<ul
											id="annually"
											className="tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-4"
										>
											{/* Price Item */}
											<li
												className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black"
												data-jos_animation="flip"
												data-jos_delay={0}
											>
												<h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
													Free
												</h3>
												<span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													1 member
												</span>
												<div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
												<h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
													$0
													<span className="text-lg font-semibold">/Annual</span>
												</h4>
												<p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													Ideal for individuals person and small businesses just
													getting started.
												</p>
												{/* Price Info List */}
												<ul className="mb-10 flex flex-col gap-y-3">
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														AI-Ready Data Prep
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Feature Engineering
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Classification Models
													</li>
												</ul>
												{/* Price Info List */}
												<Link
													href="/pricing"
													className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
												>
													Choose the plan
												</Link>
											</li>
											{/* Price Item */}
											{/* Price Item */}
											<li
												className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black"
												data-jos_animation="flip"
												data-jos_delay={0}
											>
												<h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
													Beginner
												</h3>
												<span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													Up to 10 members
												</span>
												<div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
												<h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
													$240
													<span className="text-lg font-semibold">/Annual</span>
												</h4>
												<p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													This is an excellent option for people &amp; small
													businesses who are starting out.
												</p>
												{/* Price Info List */}
												<ul className="mb-10 flex flex-col gap-y-3">
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														AI-Ready Data Prep
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Feature Engineering
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Classification Models
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Regression Models
													</li>
												</ul>
												{/* Price Info List */}
												<Link
													href="/pricing"
													className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
												>
													Choose the plan
												</Link>
											</li>
											{/* Price Item */}
											{/* Price Item */}
											<li
												className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black"
												data-jos_animation="flip"
												data-jos_delay={0}
											>
												<h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
													Starter
												</h3>
												<span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													Up to 50 members
												</span>
												<div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
												<h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
													$960
													<span className="text-lg font-semibold">/Annual</span>
												</h4>
												<p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													This plan is suitable for e-commerce stores as well as
													professional blogs.
												</p>
												{/* Price Info List */}
												<ul className="mb-10 flex flex-col gap-y-3">
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														AI-Ready Data Prep
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Feature Engineering
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Classification Models
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Regression Models
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Time Series Models
													</li>
												</ul>
												{/* Price Info List */}
												<Link
													href="/pricing"
													className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
												>
													Choose the plan
												</Link>
											</li>
											{/* Price Item */}
											{/* Price Item */}
											<li
												className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black"
												data-jos_animation="flip"
												data-jos_delay={0}
											>
												<h3 className="flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
													Pro
												</h3>
												<span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													Up to 100 members
												</span>
												<div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
												<h4 className="mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
													$1800
													<span className="text-lg font-semibold">/Annual</span>
												</h4>
												<p className="mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
													Ideal for handling complicated projects
													enterprise-level projects, and websites.
												</p>
												{/* Price Info List */}
												<ul className="mb-10 flex flex-col gap-y-3">
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														AI-Ready Data Prep
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Feature Engineering
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Classification Models
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Regression Models
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Time Series Models
													</li>
													<li className="flex items-center gap-x-3 font-bold group-hover:text-white">
														<div className="relative h-[24px] w-[24px]">
															<Image
																src="/assets/img_placeholder/th-1/icon-black-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="h-full w-full object-cover"
															/>
															<Image
																src="/assets/img_placeholder/th-1/icon-orange-badge-check.svg"
																alt="icon-black-badge-check"
																width={24}
																height={24}
																className="absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
															/>
														</div>
														Clustering models
													</li>
												</ul>
												{/* Price Info List */}
												<Link
													href="/pricing"
													className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white"
												>
													Choose the plan
												</Link>
											</li>
											{/* Price Item */}
										</ul>
									)}
									{/* Price List */}
								</div>
								{/* Pricing Block */}
							</div>
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: Pricing Section End :::... */}
				{/*...::: FAQ Section Start :::... */}
				<section className="faq-section">
					{/* Section Spacer */}
					<div className="pb-40 xl:pb-[200px]">
						{/* Section Container */}
						<div className="global-container">
							<div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">
								{/* FAQ Left Block */}
								<div
									className="jos flex flex-col"
									data-jos_animation="fade-right"
								>
									{/* Section Content Block */}
									<div className="mb-8 text-left lg:mb-16 xl:mb-6">
										<div className="mx-auto md:mx-0 md:max-w-none">
											<h2>Freely ask us for more information</h2>
										</div>
									</div>
									{/* Section Content Block */}
									<div className="text-lg leading-[1.4] lg:text-[21px]">
										<p className="mb-7 last:mb-0">
											Our AI SaaS solutions can be quickly deployed, enabling
											users to start benefiting from AI capabilities without
											lengthy setup and development times in fast-paced
											industries.
										</p>
										<Link
											href="/faq-1"
											className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
										>
											Ask you questions
										</Link>
									</div>
								</div>
								{/* FAQ Left Block */}
								{/* FAQ Right Block */}
								<div
									className="jos md:ml-10 lg:ml-20 xl:ml-32"
									data-jos_animation="fade-left"
								>
									{/* Accordion*/}
									<ul className="accordion">
										{/* Accordion items */}
										<li
											onClick={() => handleAccordion(0)}
											className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
												activeIndex === 0 ? "active" : ""
											}`}
										>
											<div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]">
												<p>How do I start AI SaaS?</p>
												<div className="accordion-icon">
													<Image
														src="/assets/img_placeholder/plus.svg"
														width={24}
														height={24}
														alt="plus"
													/>
												</div>
											</div>
											<div className="accordion-content disappear translate-y-3 text-lg leading-[1.66] text-[#2C2C2C]">
												<p>
													Go to the our official website and require users to
													create an account. You ll need to provide some basic
													information and agree to our terms and conditions.
												</p>
											</div>
										</li>
										{/* Accordion items */}
										{/* Accordion items */}
										<li
											onClick={() => handleAccordion(1)}
											className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
												activeIndex === 1 ? "active" : ""
											}`}
										>
											<div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]">
												<p>Can I customize AI SaaS solutions?</p>
												<div className="accordion-icon">
													<Image
														src="/assets/img_placeholder/plus.svg"
														width={24}
														height={24}
														alt="plus"
													/>
												</div>
											</div>
											<div className="accordion-content disappear translate-y-3 text-lg leading-[1.66] text-[#2C2C2C]">
												<p>
													Go to the our official website and require users to
													create an account. You ll need to provide some basic
													information and agree to our terms and conditions.
												</p>
											</div>
										</li>
										{/* Accordion items */}
										{/* Accordion items */}
										<li
											onClick={() => handleAccordion(2)}
											className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
												activeIndex === 2 ? "active" : ""
											}`}
										>
											<div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]">
												<p>How can AI benefit my business?</p>
												<div className="accordion-icon">
													<Image
														src="/assets/img_placeholder/plus.svg"
														width={24}
														height={24}
														alt="plus"
													/>
												</div>
											</div>
											<div className="accordion-content disappear translate-y-3 text-lg leading-[1.66] text-[#2C2C2C]">
												<p>
													Go to the our official website and require users to
													create an account. You ll need to provide some basic
													information and agree to our terms and conditions.
												</p>
											</div>
										</li>
									</ul>
								</div>
								{/* FAQ Right Block */}
							</div>
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: FAQ Section End :::... */}
			</main>
			<Footer_01 />
		</div>
	);
}

export default Pricing;
