import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { ExpandMore, PowerSettingsNew } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		display: "flex",
		alignItems: "center"
	}
}));

export default function MenuAppBar({ history }) {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	let googleId = localStorage.getItem("googleId");

	// useEffect(() => {
	//   if (!googleId) {
	//     history.push('/')
	//   } else {
	//     getUser()
	//   }
	//   // eslint-disable-next-line
	// }, [])

	// const getUser = async () => {
	//   const { data } = await get(`/api/users/${googleId}`)
	//   if (data) {
	//     dispatch({
	//       type: 'set-user-profile',
	//       payload: { userProfile: data }
	//     })
	//     if (data.status === 'active') {
	//       dispatch({ type: 'set-auth', payload: { auth: true } })
	//     } else {
	//       localStorage.clear()
	//       window.location.href = '/'
	//     }
	//   } else {
	//     localStorage.clear()
	//     window.location.href = '/'
	//   }
	// }

	return (
		<div className={classes.root}>
			<AppBar position="static" style={{ backgroundColor: "#444851" }}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						<span style={{ paddingLeft: 15, paddingRight: 15 }}>|</span>
						<span>ECS</span>
					</Typography>
					<div style={{ display: "flex", alignItems: "center" }}>
						{false ? (
							<img
								style={{ height: 36, borderRadius: "50%" }}
								// src={state.userProfile.imageUrl}
								alt=" "
							/>
						) : (
							<AccountCircle />
						)}
						&nbsp;
						{false ? "FIRSTNAME LASTNAME" : ""}
						<IconButton
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit"
						>
							<ExpandMore />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							getContentAnchorEl={null}
							anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
							transformOrigin={{ vertical: "top", horizontal: "center" }}
							keepMounted
							open={open}
							onClose={handleClose}
						>
							{/* <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem> */}
							<MenuItem
								onClick={() => {
									localStorage.clear();
									window.location.href = "/";
								}}
							>
								<PowerSettingsNew />
								&nbsp;Logout
							</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
