import React, {useEffect, useState} from "react";
import { Button, Container, Icon, Row } from "react-materialize";
import { NavLink } from "react-router-dom";
import Course from "./course";

const Courses = () =>{
    const pagina = 1;
    const [listaCourses, setListaCourses] = useState([{
        colecaoId: 0,
        nome:  '',
        descricao: "Inicial"
    }]);

    useEffect(() => {
        fetch("https://flashcard-api-mayck.herokuapp.com/api/colecoes")
            .then( res => res.json() )
            .then( res => setListaCourses(res) )
            .catch( error => console.log(error) )
    }, pagina)

    return (
        <Container>
            <Row>
                { listaCourses.map( (course)  => <Course titulo={course.nome} descricao={course.descricao} />) }
            </Row>
            <NavLink to="/create/course">
            <Button
                className="red"
                floating
                icon={<Icon>add</Icon>}
                large
                node="button"
                waves="light"
                />
            </NavLink>
        </Container>
    )
};
export default Courses