import React, { Component } from "react";
import { DISHES } from "./shared/dishes";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomePage";
import { Route, Switch, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    const HomePage = () => {
      return <Home></Home>;
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home"></Redirect>
        </Switch>

        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
