import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import LogIn from "../LogIn";
import { useNavigate } from "react-router-dom";

export default function AlertDialog() {
	const [open, setOpen] = React.useState(false);
	const [users, setUsers] = React.useState([]);
	const history = useNavigate();
	const [user, setUser] = React.useState({});
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
		const userLogedIn = users.filter((user) => {
			if (user.user_name === data.email && user.password === data.password) {
				alert("Login Successfull");
				setUser(user);
				handleClose();
				handleLogin();
			} else {
				// alert("Login Failed, Please try again or check your email or Password");
			}
		});
		console.log(userLogedIn);
	};
	const handleLogin = () => {
		history("/about");
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
