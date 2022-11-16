import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { ClienteContext, PrintContext } from '../../../App';
import { PadraoAtestado } from '../../../utils/listas';
import { CalcIdade } from '../../../utils/tempo';

export const Titulo = () => {

    return (
        <>
            <Box
                sx={{
                    width: 1,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 32,
                    mb: 2,
                }}
            >
                Laudo / Atestado médico
            </Box>
        </>
    )
}

export const Inicio = () => {

    const { clienteContext } = useContext(ClienteContext)

    const pronome = clienteContext.sexo === 'feminino' ? ' a sra.' : ' o sr.'

    const idade = (clienteContext.nascimento && CalcIdade(clienteContext.nascimento) > 5) ? (", " + CalcIdade(clienteContext.nascimento) + " anos, ") : ""

    const cpf = clienteContext.cpf === "" ? "" : (idade === "" ? (", CPF " + clienteContext.cpf + ", ") : (" CPF " + clienteContext.cpf + ", "))

    return (
        <>
            <Box
                component="span"
                sx={{
                    textAlign: 'justify',
                }}
            >
                Venho por meio deste documento, para fins de perícia médica,
                conforme normatiza a Resolução do CFM nº 1.851/2008,
                atestar que {pronome}
                <Box
                    component="span"
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    <>{' '}</>
                    {clienteContext.nome}{idade}{cpf}
                    <>{' '}</>
                </Box>
            </Box>
        </>
    )
}

export const Diagnostico = () => {

    const { atestadosSelecionados } = useContext(PrintContext)

    return (
        <>
            possui: <>{' '}</>
            {atestadosSelecionados[0]?.diagnostico}
            . <>{' '}</>
        </>
    )
}

export const Tratamento = () => {

    const { atestadosSelecionados } = useContext(PrintContext)

    return (
        <>
            No que tage a conduta terapêutica atual<>{' '}</>
            {atestadosSelecionados[0]?.tratamento}
            <>{' '}</>
        </>
    )
}

export const Estado = () => {

    const { atestadosSelecionados } = useContext(PrintContext)

    return (
        <>
            Na última consulta paciente se apresentava<>{' '}</>
            {atestadosSelecionados[0]?.estado}
            <>{' '}</>
        </>
    )
}

export const Prognostico = () => {

    const { atestadosSelecionados } = useContext(PrintContext)

    return (
        <>
            Em relação ao prognóstico <>{' '}</>
            {atestadosSelecionados[0]?.prognostico}
            <>{' '}</>
        </>
    )
}

export const Consequencia = () => {

    const { atestadosSelecionados } = useContext(PrintContext)

    return (
        <>
            As consequências à saúde, apesar de considerar que tal
            informação seria de competência ao médico do trabalho
            ou perito, pelo meu desconhecimento da real condições
            de trabalho do paciente, são <>{' '}</>
            {atestadosSelecionados[0]?.consequencia}
            <>{' '}</>
        </>
    )
}

export const Prazo = () => {

    const { atestadosSelecionados } = useContext(PrintContext)

    // Determinado
    if (atestadosSelecionados[0].padrao === PadraoAtestado()[0]) return (
        <>
            Por fim, o tempo estimado de repouso necessário, levando
            em consideraçãos as afirmativas anteriores para a sua recuperação,
            é de {atestadosSelecionados[0]?.prazo} meses. Salienta-se
            que esse prazo trata-se de uma estimativa, uma
            vez que variáveis como responsibilidade, aderência e
            disponibilidade ao tratamento, assim como outros fatores
            ambientais e sociais podem influenciar na resposta ao tratamento,
            o que por vezes necessite ser revisto.
            <>{' '}</>
        </>
    )

    // Indeterminado
    if (atestadosSelecionados[0].padrao === PadraoAtestado()[1]) return (
        <>
            Por fim, em relação ao tempo estimado de repouso necessário,
            levando em consideraçãos as variáveis das afirmativas
            anteriores as quais influenciam na reabilitação, não é possível
            estabelecer com precisão o tempos estimado para melhora clínica. 
            Salienta-se que mesmo assim que outras variáveis como 
            responsibilidade, aderência e disponibilidade ao tratamento, 
            assim como outros fatores ambientais e sociais podem influenciar 
            na resposta ao tratamento, o que por vezes necessite ser revisto.
            <>{' '}</>
        </>
    )

    // Definitivo
    if (atestadosSelecionados[0].padrao === PadraoAtestado()[2]) return (
        <>
            Por fim, em relãção ao tempo estimado de repouso necessário, levando
            em consideraçãos as afirmativas anteriores para a sua recuperação,
            não há nenhum espectativa, mesmo a longo prazo, da reversão do
            estado atual de saúde. Salienta-se que esse prazo trata-se
            de uma estimativa, uma vez que variáveis como responsibilidade,
            aderência e disponibilidade ao tratamento, assim como outros fatores
            ambientais e sociais podem influenciar na resposta ao tratamento,
            o que por vezes necessite ser revisto.
            <>{' '}</>
        </>
    )

    // Mudança
    if (atestadosSelecionados[0].padrao === PadraoAtestado()[3]) return (
        <>
            Assim sendo, solicito encarecidamente, dentro das possibilidades legais e
            administrativas, a avaliação da viabilidade, conforme análise
            de nexo causal e interpretação do avaliado, de recolocação em
            outra função ou em condições mais favoráveis para situação de saúde,
            uma vez que observa-se repetidas referia de piora dos sintomas com as
            atividades laborais atuais.
            <>{' '}</>
        </>
    )

    return <></>
}

export const Comentario = () => {

    const { atestadosSelecionados } = useContext(PrintContext)

    return (
        <>
            <Box>
                {atestadosSelecionados[0]?.comentario}
            </Box>
            <Box>
                Ressalto que deve-se respeitar, contudo, a competência do médico
                perito, a quem, conforme a supracitada resolução, compete
                determinar capacidade laborativa do paciente e legalmente
                a decisão do benefício previdenciário.

            </Box>
            <Box>
                S.m.j.
            </Box>
        </>
    )
}