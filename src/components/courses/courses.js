import React, {useEffect, useState} from "react";
import { Row } from "react-materialize";
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
        <Row>
            { listaCourses.map( (course)  => <Course titulo={course.nome} descricao={course.descricao} />) }
        </Row>
    )
};
export default Courses