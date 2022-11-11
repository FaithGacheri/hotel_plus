import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import LogIn from "../LogIn";

export default function AlertDialog() {
	const [open, setOpen] = React.useState(false);
	const [users, setUsers] = React.useState([]);
	React.useEffect(() => {
		getAllRooms();
	}, []);

	const getAllRooms = async () => {
		try {
			const res = await fetch("http://localhost:7000/users#");
			const data = await res.json();
			setUsers(data);
		} catch (err) {
			console.log(err);
		}
	};
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// console.log(users);
	const filterUser = (data) => {
		console.log("This is our data after filtering", data);
	};

	return (
		<div>
			<div className="btn-icon" onClick={handleClickOpen}>
				<button className="login-btn">Sign in</button>
			</div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogContent>
					<LogIn onsaveLoginUser={filterUser} />
				</DialogContent>
			</Dialog>
		</div>
	);
}
