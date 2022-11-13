import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ image, name, description }) {
	return (
		<Card
			sx={{
				maxWidth: 345,
				marginTop: 5,
				margin: 2,
				height: 400,
				cursor: "pointer",
			}}
		>
			<CardMedia
				component="img"
				style={{ height: 200 }}
				height="140"
				image={image}
				alt="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button style={{ background: "#fccebc", padding: "5px" }} size="small">
					Pending
				</Button>
				<Button
					size="small"
					style={{ background: "#1c2534", padding: "5px", color: "#fff" }}
				>
					Cancel Reservation
				</Button>
			</CardActions>
		</Card>
	);
}
