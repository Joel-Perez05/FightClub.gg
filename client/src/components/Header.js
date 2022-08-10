import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"
import axios from "axios";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';


const Header = (props) => {
    const {isLoggedin, setIsLoggedin} = props;
    const [collapsed, setCollapsed] = useState(true);
    const {user, setUser} = props;

    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/current-user", {withCredentials: true})
    //         .then((res) => {
    //             setUser(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         });
    // }, [isLoggedin]);

    const handleLogout = () => {
        axios.post("http://localhost:8000/logout",{}, {withCredentials: true})
            .then((res) => {
                console.log(res.data);
                setUser(null);
            })
            .catch((err) => {
                console.log(err)
            });
    };

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="info" >
                <NavbarBrand className="me-auto fs-1">FightClub.gg</NavbarBrand>
                {
                    user? 
                    <NavbarBrand className="me-auto fs-1">Welcome {user.username}</NavbarBrand>:null
                }
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link fs-5" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link fs-5" to="/events/new">Create Event</NavLink>
                        </NavItem>
                        {
                            user ? (
                                <NavItem>
                                    <Button color="dark" onClick={handleLogout}>Logout</Button>
                                </NavItem>
                            ): (
                                <div>
                                    <NavItem>
                                        <NavLink className="nav-link fs-5" to="/login">Login</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link fs-5" to="/register">Register</NavLink>
                                    </NavItem>
                                </div>
                            )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;