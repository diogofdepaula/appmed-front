import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ClienteContext } from '../../../../../App'
import { PrintContext } from '../../../../../pages/atendimento'
import FitText from '../../../../../pages/print/component/fittext'
import Adverso from './adversos'
import Gravidez from './gravidez'

const Linha5Termo = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { termosSelecionados } = useContext(PrintContext)

    const Meds = () => {

        let texto = ""

        termosSelecionados?.map((n, i) => {
            if (n === termosSelecionados[0]) {
                return texto = texto.concat(n)
            } else if (i === termosSelecionados.length - 1) {
                return texto = texto.concat(' e ', n)
            } else {
                return texto = texto.concat(', ', n)
            }
        })
        return texto
    }

    const informar = clienteContext.sexo === 1 ? " informado " : " informada "
    const declaro =
        "Declaro que fui claramente".concat(
            informar, "de que",
            termosSelecionados.length > 1 ? " os medicamentos " : " o medicamento ",
            "que passo a receber",
            termosSelecionados.length > 1 ? " podem " : " pode ",
            "trazer "
        )

    const conteudo =
        <>
            <>
                Declaro ter sido {informar} claramente
                sobre benefícios, riscos, contraindicações e principais efeitos
                adversos relacionados ao uso de <strong><Meds /></strong>,
                {termosSelecionados.length > 1 ? " indicados " : " indicado "}
                para o tratamento da doenças reumatológicas.
                <br />
            </>
            <>
                Os termos médicos foram explicados e todas as dúvidas foram esclarecidas pelo
                Dr. Diogo F de Paula. Expresso também minha concordância e espontânea vontade
                em submeter-me ao referido tratamento, assumindo a responsabilidade e
                os riscos pelos eventuais efeitos indesejáveis.
                <br />
            </>
            <>
                {declaro} trazer benefícios com controle da doença, prevenção das
                complicações da doença, controle da atividade da doença, melhora da
                capacidade de realizar  atividades funcionais, melhora da qualidade
                de vida. e suas complicações.
                Fui também claramente {clienteContext.sexo === 1 ? " informado " : " informada "}
                a respeito das seguintes contra-indicações, potenciais efeitos colaterais e riscos.
                Fui {informar} de que o risco de infecção de várias etiologias e alguns tipos
                de neoplasias (câncer) é aumentado, principalmente com o uso destes
                fármacos em associação.
                <br />
            </>
            <>
                O risco da ocorrência de efeitos adversos aumenta com a superdosagem.
                E que {termosSelecionados.length > 1 ? " estes medicamentos são " : " este medicamento é "}
                contra-indicados em casos de hipersensibilidade (alergia).
                <br />
            </>
            {/* colocar um if depois */}
            <Gravidez medicamentos={termosSelecionados} />
            <Adverso medicamentos={termosSelecionados} />
        </>

    return (
        <>
            <Box mt={2} flexGrow={1} width={1} border={1} borderColor="black" component="span" display="block" >
                <Box mt={-1} ml={2} display="flex">
                    <Typography component={'span'} variant="caption" noWrap={true} >
                        <Box bgcolor="white" px={1}>4 - Informações pertinentes das medicações solicitadas </Box>
                    </Typography>
                </Box>
                <FitText
                    texto={conteudo}
                    inicial={4}
                    maxfont={24}
                    erro={190}
                    padding={2}
                    align='justify'
                />
            </Box>
        </>
    )
}

export default Linha5Termo


