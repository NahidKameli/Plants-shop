import { IoCartOutline } from "react-icons/io5";
import Badge from '@mui/material/Badge';
import { IoMdHeartEmpty } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText, useMediaQuery } from "@mui/material";


function Header({ like, shop, search, searchHandler }) {

    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width:768px)");
    const toggleDrawer = (isOpen) => () => {
        setOpen(isOpen);
    };

    return (
        <>
            <nav className='navbar'>
                <IconButton className="icon" style={{ display: isMobile ? "block" : "none" }} onClick={toggleDrawer(true)} sx={{ color: "white" }}>
                    <MenuIcon />
                </IconButton>
                <input type="text" placeholder="search" value={search} onChange={searchHandler} />
                <ul className="menu">
                    <li>Home</li>
                    <li><NavLink to="/Plants">Plants</NavLink></li>
                    <li>Garden Plants</li>
                    <li>House Plants</li>
                </ul>
                <div className='badge' style={{ display: "flex", gap: "15px" }}>
                    <Link to="/Favorites">
                        <Badge color="error" badgeContent={like} showZero>
                            <IoMdHeartEmpty color="white" size={30} style={{ cursor: "pointer" }} />
                        </Badge>
                    </Link>
                    <Badge color="error" badgeContent={shop} showZero>
                        <IoCartOutline color="white" size={30} style={{ cursor: "pointer" }} />
                    </Badge>
                </div>
                <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                    <List sx={{ width: 250, bgcolor: "rgba(14, 130, 15, 0.93)", color: "white" }}>
                        {["Home", "Plants", "Garden Plants", "House Plants"].map((text) => (
                            <ListItem button key={text} onClick={toggleDrawer(false)}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </nav>
        </>
    )
}

export default Header