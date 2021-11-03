import { Button, Container, Icon, Switch, Textarea, TextInput } from "react-materialize"


const FormCourse = () =>(
    <Container>
        <h1>Cursos</h1>
        <TextInput
            id="nome"
            placeholder="Nome do Curso"
            />
        <Textarea
            id="descricao"
            placeholder="Descrição do Curso"
            />
        <Switch
            id="publico"
            offLabel="Privado"
            onChange={function noRefCheck(){}}
            onLabel="Publico"
            />
            <br />
        <Button
            node="button"
            waves="light"
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
    </Container>
)

export default FormCourse