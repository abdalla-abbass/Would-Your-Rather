import React from "react";
import Login from "./Login";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Poll from "./Poll";
import Result from "./Result";
import "./App.scss";
import Navbar from "./Navbar";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import LoadingBar from "react-redux-loading";
import LeaderBored from "./LeaderBored";
function App() {
    return (
        <div className="container">
            <LoadingBar style={{ backgroundColor: "blue", height: "10px" }} />
            <Routes>
                <Route path="/" component={Navbar} />

                <Route exact path="/" component={Login} />
                <Route exact path="/add" component={NewQuestion} />
                <Route exact path="/leaderbored" component={LeaderBored} />

                <Route exact path="/questions" component={Home} />
                <Route
                    exact
                    path="/questions/showResult/:resultQuestion"
                    component={Result}
                />
                <Route
                    exact
                    path="/questions/showAnswer/:pollQuestion"
                    component={Poll}
                />
            </Routes>
        </div>
    );
}

export default App;
