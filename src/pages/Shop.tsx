import { Box, Tab, Tabs } from "@mui/material";
import { SetStateAction, useState } from "react";
import Category from "../components/Category";

export default function Shop() {
	type TabPanelProps = {
		children?: React.ReactNode;
		index: number;
		value: number;
	};

	function CustomTabPanel(props: TabPanelProps) {
		const { children, value, index, ...other } = props;

		return (
			<div
				role='tabpanel'
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
			</div>
		);
	}

	function a11yProps(index: number) {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`
		};
	}

	const [value, setValue] = useState(0);

	const handleChange = (_: React.SyntheticEvent, newValue: SetStateAction<number>) => {
		setValue(newValue);
	};

	return (
		<div className='px-4'>
			{/* Category Selection Bar */}
			<Box sx={{ width: "100%", position: "relative" }}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						borderBottom: 1,
						borderColor: "divider",
						position: "sticky",
						top: 60,
						backgroundColor: "rgb(241 245 249)",
						zIndex: 2
					}}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						variant='scrollable'
						scrollButtons='auto'
						allowScrollButtonsMobile
						aria-label='basic tabs example'
					>
						<Tab sx={{ fontWeight: "bold" }} label='All' {...a11yProps(0)} />
						<Tab
							sx={{ fontWeight: "bold" }}
							label="Men's clothing"
							{...a11yProps(1)}
						/>
						<Tab
							sx={{ fontWeight: "bold" }}
							label="Women's clothing"
							{...a11yProps(2)}
						/>
						<Tab
							sx={{ fontWeight: "bold" }}
							label='Jewelery'
							{...a11yProps(3)}
						/>
						<Tab
							sx={{ fontWeight: "bold" }}
							label='Electronics'
							{...a11yProps(4)}
						/>
					</Tabs>
				</Box>
				<CustomTabPanel value={value} index={0}>
					<Category category='all' />
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					<Category category="men's clothing" />
				</CustomTabPanel>
				<CustomTabPanel value={value} index={2}>
					<Category category="women's clothing" />
				</CustomTabPanel>
				<CustomTabPanel value={value} index={3}>
					<Category category='jewelery' />
				</CustomTabPanel>
				<CustomTabPanel value={value} index={4}>
					<Category category='electronics' />
				</CustomTabPanel>
			</Box>
		</div>
	);
}
