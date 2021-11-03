import axios from "axios";
import { useState } from "react";
import { Button, Icon, Switch, Textarea, TextInput } from "react-materialize"
import { useHistory } from "react-router"


const FormCourse = () =>{
    const history = useHistory();
    const [dadosColecao, setDadosColecao] = useState({
        colecaoId: 0,
        nome: '',
        descricao: '',
        publico: false
    });

    const handlerChange = ( e ) => {
        const valor = e.target.id === "publico" ? e.target.checked : e.target.value;
        setDadosColecao({ ... dadosColecao, [e.target.id]: valor  });
    };

    const goBack = () =>{
        history.push("/courses");
    }

    const handlerSubmit = (e) => {
        console.log(dadosColecao);
        axios.post("https://flashcard-api-mayck.herokuapp.com/api/colecoes", dadosColecao)
        .catch( error => console.log(error) )
        .finally(goBack)
        ;

        e.preventDefault();
    }

    return (
    <form onSubmit={handlerSubmit}>
        <h1>Cursos</h1>
        <TextInput
            id="nome"
            value={dadosColecao.nome}
            onChange={ function(e){ handlerChange(e) } }
            placeholder="Nome do Curso"
            />
        <Textarea
            id="descricao"
            value={dadosColecao.descricao}
            onChange={ function(e){ handlerChange(e) } }
            placeholder="Descrição do Curso"
            />
        <Switch
            id="publico"
            offLabel="Privado"
            checked={dadosColecao.publico}
            onChange={ function(e){ handlerChange(e) } }
            onLabel="Publico"
            />
            <br />
        <Button
            node="button"
            waves="light"
            onClick={goBack}
            >
            Cancelar
        </Button>
        &nbsp;
        <Button
            node="button"
            type="submit"
            waves="light"
            >
            Salvar
            <Icon right>
                send
            </Icon>
        </Button>
    </form>
    )
}

export default FormCourse