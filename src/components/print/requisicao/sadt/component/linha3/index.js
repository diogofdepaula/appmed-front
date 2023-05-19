import Fence from '../../../../fence'
import Field from '../../../../field'

const Linha3Sadt = () => {

    //  const { clienteContext } = useContext(clienteContext)

    const dados = [
        {
            titulo: "8 - Número da Carteira",
            texto: "88888888888888888888",
            largura: "13rem",
            alinhamento: "center",
        },
        {
            titulo: "9 - Validade da Carteira",
            texto: "22/22/2222",
            largura: "10rem",
            alinhamento: "center",
        },
        {
            titulo: "89 - Nome Social",
            texto: "Joaquim José da Silva Xavier",
            alinhamento: "left",
            largura: "10rem",
            grow: "1",
        },
        {
            titulo: "12 - Atendimento a RN",
            largura: "10rem",
        },
        {
            titulo: "10 - Nome",
            texto: "Joaquim José da Silva Xavier",
            alinhamento: "left",
            negrito: "bold",
            largura: "30rem",
            grow: "1",
        },
    ]

    return (
        <>
            <Fence titulo="Dados do beneficiário">
                {dados.map(c =>
                    <Field key={c.titulo} dados={c} />
                )}
            </Fence>
        </>
    )
}

export default Linha3Sadt