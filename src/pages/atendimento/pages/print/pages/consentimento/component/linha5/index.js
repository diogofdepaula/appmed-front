import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../../../..'
import { ClienteContext } from '../../../../../../../../App'
import Adverso from './adversos'
import Gravidez from './gravidez'

const Linha5Termo = () => {

    const { impressao } = useContext(ImpressaoContext)
    const { clienteContext } = useContext(ClienteContext)


    const Texto = () => {

        let texto = ""

        impressao.termosSelecionados?.map((n, i) => {
            if (n === impressao.termosSelecionados[0]) {
                return texto = texto.concat(n)
            } else if (i === impressao.termosSelecionados.length - 1) {
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
            impressao.termosSelecionados.length > 1 ? " os medicamentos " : " o medicamento ",
            "que passo a receber",
            impressao.termosSelecionados.length > 1 ? " podem " : " pode ",
            "trazer "
        )

    const size = impressao.termosSelecionados.length > 1 ? 'body2' : 'subtitle1'

    // const componentRef = useRef();
    // useEffect(() => {
    //     itemsRef.current = itemsRef.current.slice(0, listPresc.length);
    // }, [listPresc]);
    // <div key={i} ref={el => itemsRef.current[i] = el} >
    //     </div>

    return (
        <>
            <Box mt={2} width={1} height={1} border={1} borderColor="black">
                <Grid container direction="column" justify="flex-end" alignItems="stretch">
                    <Grid item>
                        <Box mt={-1} ml={2} display="flex">
                            <Typography component={'span'} variant="caption" noWrap={true} >
                                <Box bgcolor="white" px={1}>15 - Avaliação farmacoterapêutica (histórico de uso anterior de medicamentos)</Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box p={2}>
                            <Typography component={'span'} variant={size} align={'justify'}>
                                <Box>
                                    Declaro ter sido {informar} claramente
                                    sobre benefícios, riscos, contraindicações e principais efeitos
                                    adversos relacionados ao uso de <strong><Texto /></strong>,
                                    {impressao.termosSelecionados.length > 1 ? " indicados " : " indicado "}
                                    para o tratamento da doenças reumatológicas.
                                </Box>
                                <Box mt={1}>
                                    Os termos médicos foram explicados e todas as dúvidas foram esclarecidas pelo
                                    Dr. Diogo F de Paula. Expresso também minha concordância e espontânea vontade
                                    em submeter-me ao referido tratamento, assumindo a responsabilidade e
                                    os riscos pelos eventuais efeitos indesejáveis.
                                </Box>
                                <Box mt={1}>
                                    {declaro} trazer benefícios com controle da doença, prevenção das
                                    complicações da doença, controle da atividade da doença, melhora da
                                    capacidade de realizar  atividades funcionais, melhora da qualidade
                                    de vida. e suas complicações.
                                    Fui também claramente {clienteContext.sexo === 1 ? " informado " : " informada "}
                                    a respeito das seguintes contra-indicações, potenciais efeitos colaterais e riscos.
                                    Fui {informar} de que o risco de infecção de várias etiologias e alguns tipos
                                    de neoplasias (câncer) é aumentado, principalmente com o uso destes
                                    fármacos em associação.
                                    <div>
                                        O risco da ocorrência de efeitos adversos aumenta com a superdosagem.
                                        E que {impressao.termosSelecionados.length > 1 ? " estes medicamentos são " : " este medicamento é "}
                                        contra-indicados em casos de hipersensibilidade (alergia).
                                    </div>
                                </Box>
                                {/* colocar um if depois */}
                                <Gravidez medicamentos={impressao.termosSelecionados} />
                                <Adverso medicamentos={impressao.termosSelecionados} />

                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha5Termo


