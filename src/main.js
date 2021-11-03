import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/home"
import Courses from "./components/courses/courses"
import PageNotFound from "./components/pageNotFound/pageNotFound";
import FormCourse from "./components/courses/form_course";

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/create/course" component={FormCourse} />
        <Route path="*" component={PageNotFound} />
    </Switch>
)

export default Main;