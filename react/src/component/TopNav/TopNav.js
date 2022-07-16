import { useState, useEffect } from "react";
import "./topnav.css";
import {
  Container,
  Navbar,
  Nav,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import logoImg from "./logo.png";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router";
function TopNav(props) {
  const { cartUpdate, setCartUpdate } = props;
  const [cartLength, setCartLength] = useState();
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const cart = localStorage.getItem("cart") || "[]";
    setCartLength(JSON.parse(cart).length);
    setCartUpdate(false);
    setCartData(JSON.parse(cart));
  }, [cartLength, cartUpdate]);
  return (
		<>
			<Navbar className="myNavbar"></Navbar>
			<Navbar fixed="top" className="myNavbar shadow-sm">
				<Container expand="lg">
					<LinkContainer to="/">
						<Navbar.Brand>
							<img src={logoImg} alt="" width="190" height="80" />
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						id="basic-navbar-nav"
						className="justify-content-end"
					>
						<Nav className="justify-content-end lgnav">
						
							<LinkContainer to="/customized">
								<Nav.Link>客製水果盒</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/customized">
								<Nav.Link><i class="fas fa-user fa-lg nav-icon" /></Nav.Link>
							</LinkContainer>
							
							<LinkContainer to="/cart">
								<OverlayTrigger
									key="bottom"
									placement="bottom"
									overlay={
										<Tooltip id="tooltip-bottom">
											{cartData.map((item, index) => {
												const { productName, imageUrl, count } = item;
												return (
													<div className="row p-1">
														<div className="col-5">
															<img className="imageFit" src={imageUrl} alt="" />
														</div>
														<div className="col-4 d-flex justify-content-center align-items-center">
															{productName}
														</div>
														<div className="col-3 d-flex justify-content-center align-items-center">
															{count}
														</div>
													</div>
												);
											})}
										</Tooltip>
									}
								>
									<Nav.Link>
										<div
											onClick={() => {
												props.history.push("/cart");
											}}
											className="position-relative"
										>
											{cartLength > 0 && (
												<div className="text-warning d-flex align-items-center justify-content-center position-absolute">
													{cartLength}
												</div>
											)}
											<i class="fas fa-shopping-cart fa-lg nav-icon" />
										</div>
									</Nav.Link>
								</OverlayTrigger>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				

					
				</Container>
			</Navbar>
		</>
	);
}
export default withRouter(TopNav);
