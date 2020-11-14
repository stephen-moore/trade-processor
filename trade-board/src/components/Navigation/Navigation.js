import React from 'react';
import AddTrade from '../AddTrade';
import ViewTrades from '../ViewTrades';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

import {Nav, Navbar, NavItem} from "react-bootstrap";

const navigation = (props) => {
    return(
        <Router>
            <div>
                <Navbar>
                    <Navbar.Brand as={Link} to="/">{props.title}</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <NavItem eventkey={1} href="/">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={2} href="/">
                                <Nav.Link as={Link} to="/add">Add Trade</Nav.Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Switch>
                    <Route exact path='/' component={ ViewTrades }></Route>
                    <Route path='/add' component={ AddTrade }></Route>
                </Switch>
            </div>
        </Router>


    )
}

export default navigation;
