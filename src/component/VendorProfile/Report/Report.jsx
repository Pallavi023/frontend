import React, { useState, useEffect } from 'react';
import {
	LineChart,
	ResponsiveContainer,
	Legend,
	Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
} from 'recharts';

import {
	BarChart,
	Bar,

} from 'recharts';

import {
	RadialBarChart,
	RadialBar,

} from 'recharts';

const customerActivityData = [
	{ dayOfWeek: 'Sunday', customerVisits: 10 },
	{ dayOfWeek: 'Monday', customerVisits: 20 },
	{ dayOfWeek: 'Tuesday', customerVisits: 30 },
	{ dayOfWeek: 'Wednesday', customerVisits: 25 },
	{ dayOfWeek: 'Thursday', customerVisits: 40 },
	{ dayOfWeek: 'Friday', customerVisits: 35 },
	{ dayOfWeek: 'Saturday', customerVisits: 15 },
];


const pdata = [
	{
		month: 'Jan',
		forecast: 15000,
		sales: 12000,
		production: 13000,
	},
	{
		month: 'Feb',
		forecast: 17000,
		sales: 14500,
		production: 14000,
	},
	{
		month: 'Mar',
		forecast: 16000,
		sales: 13500,
		production: 15000,
	},
	{
		month: 'Apr',
		forecast: 18000,
		sales: 15200,
		production: 15500,
	},
	{
		month: 'May',
		forecast: 19000,
		sales: 16500,
		production: 16000,
	},
	{
		month: 'Jun',
		forecast: 20000,
		sales: 17500,
		production: 16500,
	},
	{
		month: 'Jul',
		forecast: 22000,
		sales: 18500,
		production: 17000,
	},
	{
		month: 'Aug',
		forecast: 21000,
		sales: 19500,
		production: 17500,
	},
	{
		month: 'Sep',
		forecast: 19000,
		sales: 18000,
		production: 17000,
	},
	{
		month: 'Oct',
		forecast: 20000,
		sales: 19000,
		production: 18000,
	},
	{
		month: 'Nov',
		forecast: 22000,
		sales: 20500,
		production: 19000,
	},
	{
		month: 'Dec',
		forecast: 23000,
		sales: 21000,
		production: 20000,
	},
];





const Report = () => {
	const [selectedMonthRange, setSelectedMonthRange] = useState('thisMonth');

	const [selectedMonthRangeBar, setSelectedMonthRangeBar] = useState('thisWeek');

	const currentDate = new Date();

	useEffect(() => {
		calculateCustomerActivity();
	}, [selectedMonthRangeBar]);

	const calculateCustomerActivity = () => {
		// Get the current date



		// Create an array to represent the days of the week
		const daysOfWeek = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];

		// Calculate the start date based on the selected time range
		let startDate;
		switch (selectedMonthRange) {
			case 'thisWeek':
				startDate = new Date(currentDate);
				startDate.setDate(currentDate.getDate() - currentDate.getDay()); // Start of the week
				break;
			case 'thisMonth':
				startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
				break;
			case 'last3Months':
				startDate = new Date(currentDate);
				startDate.setMonth(currentDate.getMonth() - 2);
				startDate.setDate(1);
				break;
			case 'last6Months':
				startDate = new Date(currentDate);
				startDate.setMonth(currentDate.getMonth() - 5);
				startDate.setDate(1);
				break;
			default:
				startDate = new Date(currentDate);
				startDate.setDate(currentDate.getDate() - currentDate.getDay()); // Start of the week by default
		}

		// Reset customerActivityData
		customerActivityData.length = 0;

		// Generate data for each day
		for (let i = 0; i < 7; i++) {
			const date = new Date(startDate);
			date.setDate(startDate.getDate() + i);
			const dayOfWeek = daysOfWeek[i];

			// Replace this with logic to fetch customer visit data for the selected date
			const customerVisits = /* Fetch customer visit data for the date */ 0;

			customerActivityData.push({ dayOfWeek, customerVisits });
		}
	};


	const calculateProductSoldPercentage = () => {
		const currentDate = new Date();
		const lastMonthDate = new Date();
		lastMonthDate.setMonth(currentDate.getMonth() - 1);
		const last3MonthsDate = new Date();
		last3MonthsDate.setMonth(currentDate.getMonth() - 3);
		const last6MonthsDate = new Date();
		last6MonthsDate.setMonth(currentDate.getMonth() - 6);
		const lastYearDate = new Date();
		lastYearDate.setFullYear(currentDate.getFullYear() - 1);

		const filteredData = pdata.filter((dataPoint) => {
			const dataDate = new Date(dataPoint.month + ' 1, 2023'); // Assuming a common year (e.g., 2023)
			switch (selectedMonthRange) {
				case 'thisMonth':
					return dataDate.getMonth() === currentDate.getMonth();
				case 'last3Months':
					return dataDate >= last3MonthsDate && dataDate <= currentDate;
				case 'last6Months':
					return dataDate >= last6MonthsDate && dataDate <= currentDate;
				case 'lastYear':
					return dataDate >= lastYearDate && dataDate <= currentDate;
				default:
					return true; // Default to all data
			}
		});

		const totalSold = filteredData.reduce((acc, curr) => acc + curr.sales, 0);
		const totalForecast = filteredData.reduce((acc, curr) => acc + curr.forecast, 0);

		return (totalSold / totalForecast) * 50; // Half-filled circle
	};

	const calculateProductProducedPercentage = () => {
		const currentDate = new Date();
		const lastMonthDate = new Date();
		lastMonthDate.setMonth(currentDate.getMonth() - 1);
		const last3MonthsDate = new Date();
		last3MonthsDate.setMonth(currentDate.getMonth() - 3);
		const last6MonthsDate = new Date();
		last6MonthsDate.setMonth(currentDate.getMonth() - 6);
		const lastYearDate = new Date();
		lastYearDate.setFullYear(currentDate.getFullYear() - 1);

		const filteredData = pdata.filter((dataPoint) => {
			const dataDate = new Date(dataPoint.month + ' 1, 2023'); // Assuming a common year (e.g., 2023)
			switch (selectedMonthRange) {
				case 'thisMonth':
					return dataDate.getMonth() === currentDate.getMonth();
				case 'last3Months':
					return dataDate >= last3MonthsDate && dataDate <= currentDate;
				case 'last6Months':
					return dataDate >= last6MonthsDate && dataDate <= currentDate;
				case 'lastYear':
					return dataDate >= lastYearDate && dataDate <= currentDate;
				default:
					return true; // Default to all data
			}
		});

		const totalProduced = filteredData.reduce((acc, curr) => acc + curr.production, 0);
		const totalForecast = filteredData.reduce((acc, curr) => acc + curr.forecast, 0);

		return (totalProduced / totalForecast) * 50; // Half-filled circle
	};

	const outerPercentage = 100; // Set the outer percentage here
	const innerPercentage = calculateProductSoldPercentage(selectedMonthRange) * (outerPercentage / 100);

	const innerStartAngle = 90;
	const innerEndAngle = innerStartAngle - (innerPercentage * 3.6); // Convert percentage to angle

	return (
		<div className="container mx-auto p-4 flex flex-col">
			<h1 className="text-3xl font-bold mb-4">Line Chart Using Recharts</h1>

			{/* Line Chart */}
			<div className="mb-8">
				<ResponsiveContainer width="100%" height={400}>
					<LineChart data={pdata}>
						<CartesianGrid />
						<XAxis dataKey="month" interval={'preserveStartEnd'} />
						<YAxis />
						<Legend />
						<Tooltip />
						<Line dataKey="forecast" stroke="black" activeDot={{ r: 8 }} />
						<Line dataKey="sales" stroke="red" activeDot={{ r: 8 }} />
					</LineChart>
				</ResponsiveContainer>
			</div>

			{/* Circular Progress Graphs */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{/* Outer Circular Progress Graph */}
				<div className="circular-progress-container">
					<RadialBarChart width={300} height={300} innerRadius="50%" outerRadius="80%" data={[{ name: 'Outer Circle', value: outerPercentage }]}>
						<RadialBar dataKey="value" background clockWise fill="transparent" />
						<RadialBar dataKey="value" background clockWise fill="#00cc00" startAngle={innerStartAngle} endAngle={innerEndAngle} />
					</RadialBarChart>
				</div>
			</div>

			{/* Customer Activity Bar Chart */}
			<div className="mt-8">
				<h1 className="text-3xl font-bold mb-4">Customer Activity Bar Chart</h1>
				<ResponsiveContainer width="100%" height={400}>
					<BarChart data={customerActivityData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="dayOfWeek" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="customerVisits" fill="#8884d8" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>


	);
}

export default Report;