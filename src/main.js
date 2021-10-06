import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/home"
import Courses from "./components/courses/courses"
import GaleryPhotos from "./components/galery/galery_photos";
import PageNotFound from "./components/pageNotFound/pageNotFound";

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/galery" component={GaleryPhotos} />
        <Route path="*" component={PageNotFound} />
    </Switch>
)

export default Main;