// import React, { useState } from "react";
// import Logo from "../Assets/Logo.png";
// import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import {Link} from 'react-router-dom';

// const Navigation = () => {
//     const [openMenu, setOpenMenu] = useState(false);
//     const menuOptions = [
//         {
//         text: "Home",
//         icon: <HomeIcon />,
//         },
//         {
//         text: "About",
//         icon: <InfoIcon />,
//         },
//         {
//         text: "Testimonials",
//         icon: <CommentRoundedIcon />,
//         },
//         {
//         text: "Contact",
//         icon: <PhoneRoundedIcon />,
//         },
//         {
//         text: "Cart",
//         icon: <ShoppingCartRoundedIcon />,
//         },
//     ];
//     return (
//         <nav>
//         <div className="nav-logo-container">
//             <img src={Logo} alt="" style={{width:'150px;'}}/>
//         </div>
//         <div className="navbar-links-container">
//             <a href="/">Home</a>
//             <a href="/">About</a>
//             <a href="/">Testimonials</a>
//             <a href="/">Contact</a>
//             <Link className="orange-outline-button" to="/SignIn">Sign In</Link>
//             <Link className="secondary-button" to="/SignUp">Sign Up</Link>
//         </div>
//         <div className="navbar-menu-container">
//             <MenuOpenOutlinedIcon onClick={() => setOpenMenu(true)} />
//         </div>
//         {/* Mobile nav */}
//         <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//             <Box
//             sx={{ width: 250 }}
//             role="presentation"
//             onClick={() => setOpenMenu(false)}
//             onKeyDown={() => setOpenMenu(false)}
//             >
//             <List>
//                 {menuOptions.map((item) => (
//                 <ListItem key={item.text} disablePadding>
//                     <ListItemButton>
//                     <ListItemIcon>{item.icon}</ListItemIcon>
//                     <ListItemText primary={item.text} />
//                     </ListItemButton>
//                 </ListItem>
//                 ))}
//             </List>
//             <Divider />
//             </Box>
//         </Drawer>
//         </nav>
//     );
// };

// export default Navigation

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary p-0" bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/">
                    <img src={Logo} alt="" style={{ width: '150px;' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#">About Us</Nav.Link>
                        <Nav.Link href="#">Services</Nav.Link>
                        <Nav.Link href="#">Testimonials</Nav.Link>
                        <Nav.Link href="#">Contact Us</Nav.Link>
                        <Link className="orange-outline-button" to="/SignIn">Sign In</Link>
                        <Link className="secondary-button" to="/SignUp">Sign Up</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ColorSchemesExample;