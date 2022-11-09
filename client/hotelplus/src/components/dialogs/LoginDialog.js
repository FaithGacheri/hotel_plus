import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import LogIn from "../LogIn";

export default function AlertDialog() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
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
					<LogIn />
				</DialogContent>
			</Dialog>
		</div>
	);
}
