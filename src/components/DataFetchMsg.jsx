import { Alert, Card, Grid, Skeleton, Stack } from "@mui/material";

export const ErrorMsg = () => {
	return (
		<Alert severity="error" sx={{ my: 3 }}>
			Datas couldn't fetched!
		</Alert>
	);
};
export const NoDataMsg = () => {
	return (
		<Alert severity="warning" sx={{ my: 3 }}>
			There is no data to show!
		</Alert>
	);
};

export const CardSkeleton = ({ children }) => {
	return (
		<Grid
			container
			justifyContent={"center"}
			alignItems={"center"}
			my={3}
			gap={3}
		>
			{[1, 2, 3, 4, 5, 6].map((_, index) => (
				<Grid item>
					<Skeleton variant="rectangular" key={index}>
						{children}
					</Skeleton>
				</Grid>
			))}
		</Grid>
	);
};

export const BrandSkeleton = () => {
	return (
		<Grid
			container
			justifyContent={"center"}
			alignItems={"center"}
			my={3}
			gap={3}
		>
			{[1, 2, 3].map((_, index) => (
				<Grid
					item
					sx={{
						maxWidth: 345,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-between",
						width: "300px",
						height: "400px",
						p: 2,
						gap: 2,
					}}
				>
					<Skeleton variant="rectangular" width="50%" height={100} />
					<Skeleton variant="rectangular" width="100%" height={300} />
					<Skeleton variant="rectangular" width="40%" height={100} />
				</Grid>
			))}
		</Grid>
	);
};

const TableSkeleton = () => {
	return (
		<Stack spacing={1}>
			<Skeleton variant="rectangular" width="100%" height={80} />
			<Skeleton variant="rectangular" width="100%" height={40} />
			<Skeleton variant="rectangular" width="100%" height={60} />
			<Skeleton variant="rectangular" width="100%" height={60} />
		</Stack>
	);
};

export default TableSkeleton;
