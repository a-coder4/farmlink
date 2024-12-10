"use client";

import solutions from "@/app/solutions";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import LoopContext from "@/components/LoopContext";
import Icon from "@/components/Icon";
import classNames from "@/hooks/classnames";
import Button from "@/components/Button";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import Rebate from "@/components/Rebates";
import { usePathname } from "next/navigation";
import LoginContext from "@/components/LoginContext";
import useRedirectFunction from "@/hooks/useRedirectFunction";
import CountUp from "@/components/CountUp";
import LineGraph from "@/components/LineGraph";

const filterData = {
	water: {
		bg: "bg-blue-500",
		activeBg: "bg-blue-700",
		iconColor: "text-blue-700",
		activeIcon: "text-blue-500",
		icon: "water",
	},
	electricity: {
		bg: "bg-yellow-500",
		iconColor: "text-yellow-700",
		activeBg: "bg-yellow-700",
		activeIcon: "text-yellow-500",
		icon: "electricity",
	},
	transportation: {
		bg: "bg-purple-500",
		activeBg: "bg-purple-700",
		activeIcon: "text-purple-500",
		iconColor: "text-purple-700",
		icon: "car",
	},
	heating: {
		bg: "bg-green-500",
		activeBg: "bg-green-700",
		activeIcon: "text-green-500",
		iconColor: "text-green-700",
		icon: "fire",
	},
	waste: {
		bg: "bg-white-300",
		activeBg: "bg-white-500",
		activeIcon: "text-white-300",
		iconColor: "text-white-500",
		icon: "trash",
	},
};

let defaultSteps = [
	{
		header: "Find a Provider",
		description: "Important factors when choosing an provider include: warranties, installation costs, and disposal of the old system.",
	},
	{
		header: "Get a Quote",
		description: "See how much the provider is charging and make an educated choice about what provider you want to go with. Then, proceed with the installation",
	},
	{
		header: "Estimate Output",
		description: "Estimate how much of an impact this solution will have as you observe its performance.",
	},
];

//TODO: acc build the last section

const cleanString = (str = "") => {
	while (str.indexOf("%20") != -1) str = str.replace("%20", " ");
	return str;
};

export default function Solution({ params }) {
	const solutionName = cleanString(params.solution);
	const [solution, setSolution] = useState(null);
	const { userData, addWatchlist, inWatchlist, addItem, removeWatchlist } = useContext(LoopContext);
	const pathname = usePathname();
	const { loggedIn, setRedirect } = useContext(LoginContext);
	const [isIn, toggleIn] = useState(false);

	const login = useRedirectFunction("/login");
	useEffect(() => {
		solutions[userData.state].forEach((value) => {
			if (value.title == solutionName) {
				setSolution(value);
				toggleIn(inWatchlist(value));
			}
		});
	}, [setSolution, solutionName, inWatchlist, userData]);

	const getButton = () => {
		if (loggedIn) {
			if (isIn)
				return (
					<Button prefix={<Icon name="remove" size={20} />} onClick={(e) => removeWatchlist(solution)}>
						Remove from Watchlist
					</Button>
				);
			else
				return (
					<Button prefix={<Icon name="add" size={20} />} onClick={(e) => addWatchlist(solution)}>
						Add to Watchlist
					</Button>
				);
		} else {
			return (
				<Button
					prefix={<Icon name="account" size={20} />}
					onClick={(e) => {
						setRedirect(pathname);
						login();
					}}
				>
					Login to Add
				</Button>
			);
		}
	};

	if (solution != null) {
		return (
			<main>
				<section className="layout box-border md:h-[100vh] items-center !pt-[100px] md:!mt-0 w-full">
					<div className="flex flex-col-reverse gap-[20px] md:flex-row items-center justify-center w-full md:h-[100vh]">
						<div className="flex-1 w-full text-left flex flex-col items-stretch md:items-start gap-[20px]">
							<div
								className={classNames(
									"*:transition-all *:duration-200 transition-all duration-200 inline-flex gap-[10px] items-center px-[20px] py-[10px] rounded-full w-fit",
									filterData[solution.type].bg
								)}
							>
								<Icon name={filterData[solution.type].icon} size={20} className={filterData[solution.type].iconColor} />
								<h6 className={"text-white-600"}>{solution.type}</h6>
							</div>
							<div>
								<h2 className="break-words">{solution.title}</h2>
								<div className="flex flex-row items-baseline">
									<h4>${solution.price.toLocaleString()}</h4>
									<h6>/Unit</h6>
								</div>
							</div>
							<p>{solution.description}</p>
							<div className="flex flex-row gap-[20px] flex-wrap">
								{solution.stats.map((val, ind) => (
									<div key={ind} className="flex-1 min-w-[150px] py-[20px] px-[20px] rounded-[10px] border border-white-300 flex flex-col gap-[5px]">
										<CountUp number={val.data}>
											<div className="caption">{val.units}</div>
										</CountUp>
										<p className="leading-none">{val.description}</p>
									</div>
								))}
							</div>
							{getButton()}
						</div>
						<div className={classNames("flex-1 w-full px-[20px] md:h-[80vh]  min-h-[300px] rounded-[20px] flex items-center justify-center relative", filterData[solution.type].bg)}>
							<Image src={solution.imageNoBg} alt={solution.alt ?? ""} fill className="object-contain" />
						</div>
					</div>
				</section>
				<section className="layout box-border items-center !mt-[50px] w-full">
					<div className="flex flex-col gap-[20px] md:flex-row justify-center w-full">
						<div className="flex-1 w-full text-left flex flex-col md:items-start gap-[20px]">
							<h3>Installation Steps</h3>
							{(solution.steps ?? defaultSteps).map((item, ind) => (
								<Accordion number={ind + 1} key={ind} question={item.header}>
									<p>{item.description}</p>
								</Accordion>
							))}
						</div>
						<div className="flex-1 text-left">
							{solution.price != 0 && <LineGraph.CostGraph datapoints={solution.costGraph} />}
							<div className="h-[20px] w-full" />
							{solution.roiGraph[solution.roiGraph.length - 1][1] != 0 && <LineGraph.ROIGraph datapoints={solution.roiGraph} cost={solution.price} />}
						</div>
					</div>
				</section>
				<section className="layout box-border !mt-[30px] w-full">
					<h3>Rebates</h3>
					<div className="flex flex-col gap-[20px] md:flex-row justify-center w-full mt-[30px]">
						<div className="flex-1 w-full text-left flex flex-col md:items-start gap-[20px]">
							<div className="caption text-white-400">Utility</div>
							{(solution.utilityRebates ?? []).map((item, ind) => (
								<Rebate dollars={item.price} label={item.label} key={ind} />
							))}
						</div>
						<div className="flex-1 w-full text-left flex flex-col md:items-start gap-[20px]">
							<div className="caption text-white-400">Government</div>
							{(solution.govtRebates ?? []).map((item, ind) => (
								<Rebate dollars={item.price} label={item.label} key={ind} />
							))}
						</div>
					</div>
				</section>
			</main>
		);
	} else {
		return (
			<div className="my-[100px] flex flex-col items-center justify-center">
				<p>Can&apos;t find this solution... go back instead?</p>
				<Link href="/solutions">Back</Link>
			</div>
		);
	}
}
