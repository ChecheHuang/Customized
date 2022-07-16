import React,{useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import TopNav from "./component/TopNav/TopNav";
import Footer from "./component/Footer/Footer";
import Customized from "./pages/Customized/Customized";
import Cart from "./pages/Cart/Cart"
import ScrollToTop from "./component/ScrollToTop";

function App() {
	const[cartUpdate,setCartUpdate]=useState(false)
  return (
		<Router>
			<>
				<ScrollToTop>
					<TopNav
						cartUpdate={cartUpdate}
						setCartUpdate={setCartUpdate}
					/>
					<Switch>
						<Route path="/cart">
							<Cart setCartUpdate={setCartUpdate} />
						</Route>
						<Route path="/customized">
							<Customized setCartUpdate={setCartUpdate} />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</>
		</Router>
	);
}

export default App;