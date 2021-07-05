import { Box, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../../../..'

const Linha5Termo = () => {

    const { impressao } = useContext(ImpressaoContext)

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
                        <Box p={1}>
                            <Typography component={'span'} variant={'h6'} align={'justify'}>
                                <Box>
                                    Declaro ter sido informado(a) claramente sobre benefícios, riscos, contraindicações e principais efeitos
                                    adversos relacionados ao uso de <strong><Texto /></strong>,
                                    {impressao.termosSelecionados.length > 1 ? " indicados " : " indicado "}
                                    para o tratamento da doenças reumatológicas.
                                </Box>
                                <Box>
                                    Os termos médicos foram explicados e todas as dúvidas foram esclarecidas pelo
                                    Dr. Diogo F de Paula. Expresso também minha concordância e espontânea vontade
                                    em submeter-me ao referido tratamento, assumindo a responsabilidade e
                                    os riscos pelos eventuais efeitos indesejáveis.
                                </Box>
                                <Box>
                                    Assim, declaro que fui claramente informado(a) de que o(s) medicamento(s) que passo a receber pode(m) trazer benefícios com controle da doença e suas complicações.Fui também claramente informado(a) a respeito das seguintes contra-indicações, potenciais efeitos colaterais e riscos. Fui informado de que o risco de infecção de várias etiologias e alguns tipos de neoplasias (câncer) é aumentado, principalmente com o uso destes fármacos em associação. O risco da ocorrência de efeitos adversos aumenta com a superdosagem. E que estes medicamentos são contra-indicados em casos de hipersensibilidade (alergia).
                                    Os medicamentos são classificados na gestação como categoria B Estudos em animais não revelaram teratogénicos, efeitos embriotóxicos ou fetotóxico. Não existem dados controlados na gravidez humana. Adalimumab só é recomendado para uso durante a gravidez, quando benefício supera o risco. Não existem dados sobre a excreção de adalimumab no leite humano.
                                </Box>
                                <Box>
                                    "Declaro que fui claramente informado(a) de que o(s) medicamento(s) que passo a receber pode(m) " +
                                    "trazer os seguintes benefícios: \n" +
                                    "- prevenção das complicações da doença;\n" +
                                    "- controle da atividade da doença;\n" +
                                    "- melhora da capacidade de realizar atividades funcionais;\n" +
                                    "- melhora da qualidade de vida."
                                </Box>
                                <Box>
                                    Fui também claramente informado(a) a respeito das seguintes contraindicações, potenciais efeitos
                                    colaterais e riscos:
                                    - os riscos na gestação e na amamentação já são conhecidos; portanto, caso engravide, devo avisar
                                    imediatamente o médico;
                                    - medicamentos classificados na gestação como categoria B(estudos em animais não mostraram
                                    anormalidades nos descendentes, porém não há estudos em humanos; risco para o bebê muito improvável):
                                    infliximabe, etanercepte, adalimumabe, golimumabe, certolizumabe pegol e sulfassalazina(no primeiro
                                    trimestre);
                                    - medicamentos classificados na gestação como categoria C(estudos em animais mostraram anormalidades
                                    nos descendentes, porém não há estudos em humanos; o risco para o bebê não pode ser descartado, mas um
                                    benefício potencial pode ser maior do que os riscos): baricitinibe, cloroquina, hidroxicloroquina,
                                    ciclosporina, metilprednisolona, abatacepte, rituximabe, tocilizumabe, tofacitinibe e naproxeno(este
                                    último, nos primeiro e segundo trimestres de gestação);
                                    - medicamentos classificados na gestação como categoria D(há evidências de riscos ao feto, mas um
                                    benefício potencial pode ser maior do que os riscos) sulfassalazina(no terceiro trimestre de gestação),
                                    ciclofosfamida e azatioprina.Naproxeno e demais antiinflamatórios não esteroidais também se apresentam
                                    nesta categoria quando utilizados no terceiro trimestre de gestação ou próximo ao parto.
                                    - medicamentos classificados na gestação como categoria X(estudos em animais ou em humanos
                                    claramente mostraram risco para o bebê que suplantam quaisquer potenciais benefícios, sendo
                                    contraindicados na gestação): leflunomida, e metotrexato;

                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Linha5Termo


