import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { ClienteContext } from '../../../App';
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
                    fontSize: 38,
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

    return "Venho por meio deste documento, para os devidos fins, " +
        "conforme normatiza a Resolução do CFM nº 1.851/2008, " +
        "atestar que" + pronome + " " + clienteContext.nome +
        idade + cpf

}

export const Diagnostico = (atestado) => {

    return " possui " + atestado?.diagnostico + ". "
}

export const Tratamento = (atestado) => {

    return "No que tange a conduta terapêutica atual " +
        atestado?.tratamento.trim() + " "
}

export const Estado = (atestado) => {

    return "Na última consulta paciente se apresentava " +
        atestado?.estado.trim() + " "
}

export const Prognostico = (atestado) => {

    return "Em relação ao prognóstico " +
        atestado?.prognostico.trim() + " "
}

export const Consequencia = (atestado) => {

    return "As consequências à saúde, apesar de considerar que tal " +
        "informação seria de competência ao médico do trabalho " +
        "ou perito, pelo meu desconhecimento da real condições " +
        "de trabalho do paciente, são " +
        atestado?.consequencia.trim() + " "
}

export const Prazo = (atestado) => {

    // Determinado
    if (atestado.padrao === PadraoAtestado()[0]) return "" +
        "Por fim, o tempo estimado de repouso necessário, levando " +
        "em consideração as afirmativas anteriores para a sua recuperação, " +
        "é de " + atestado?.prazo + " meses. Salienta-se " +
        "que esse prazo trata-se de uma estimativa, uma " +
        "vez que variáveis como responsabilidade, aderência e " +
        "disponibilidade ao tratamento, assim como outros fatores " +
        "ambientais e sociais podem influenciar na resposta ao tratamento, " +
        "o que por vezes necessite ser revisto. "

    // Indeterminado
    if (atestado.padrao === PadraoAtestado()[1]) return "" +
        "Por fim, em relação ao tempo estimado de repouso necessário, " +
        "levando em consideração as variáveis das afirmativas " +
        "anteriores as quais influenciam na reabilitação, não é possível " +
        "estabelecer com precisão o tempos estimado para melhora clínica, " +
        "definindo-se como indeterminado. Salienta-se que mesmo assim " +
        "que outras variáveis como responsabilidade, aderência e " +
        "disponibilidade ao tratamento, assim como outros fatores ambientais " +
        "e sociais podem influenciar na resposta ao tratamento, o que por " +
        "vezes necessite ser revisto. "

    // Definitivo
    if (atestado.padrao === PadraoAtestado()[2]) return "" +
        "Por fim, em relação ao tempo estimado de repouso necessário, levando " +
        "em consideração as afirmativas anteriores para a sua recuperação, " +
        "não há nenhum expectativa, mesmo a longo prazo, da reversão do " +
        "estado atual de saúde. Salienta-se que esse prazo trata-se " +
        "de uma estimativa, uma vez que variáveis como responsabilidade, " +
        "aderência e disponibilidade ao tratamento, assim como outros fatores " +
        "ambientais e sociais podem influenciar na resposta ao tratamento, " +
        "o que por vezes necessite ser revisto. "

    // Mudança
    if (atestado.padrao === PadraoAtestado()[3]) return "" +
        "Assim sendo, solicito encarecidamente, dentro das possibilidades legais e " +
        "administrativas, a avaliação da viabilidade, conforme análise " +
        "de nexo causal e interpretação do avaliado, de recolocação em " +
        "outra função ou em condições mais favoráveis para situação de saúde, " +
        "uma vez que observa-se repetidas referências de piora dos sintomas com as " +
        "atividades laborais atuais. "

    // Indeter -> Determ
    if (atestado.padrao === PadraoAtestado()[4]) return "" +
        "Por fim, em relação ao tempo estimado de repouso necessário, " +
        "levando em consideração as variáveis das afirmativas " +
        "anteriores as quais influenciam na reabilitação, não é possível " +
        "estabelecer com precisão o tempos estimado para melhora clínica, " +
        "definindo-se como indeterminado. Caso seja imprescindível aos " +
        "ritos processuais o estabelecimento desse prazo, considerando " +
        "somente as variáveis ponderáveis, não se vislumbra melhora " +
        "antes de seis meses. Salienta-se que mesmo assim " +
        "que outras variáveis como responsabilidade, aderência e " +
        "disponibilidade ao tratamento, assim como outros fatores ambientais " +
        "e sociais podem influenciar na resposta ao tratamento, o que por " +
        "vezes necessite ser revisto. "

    // Nada
    if (atestado.padrao === PadraoAtestado()[5])
        return ""

    return ""
}

export const Comentario = (atestado) => {

    return atestado?.comentario + "\nRessalto que " +
        "deve-se respeitar, contudo, a competência do médico " +
        "perito, a quem, conforme a supracitada resolução, compete " +
        "determinar capacidade do paciente e legalmente a decisão do " +
        "benefício previstos em lei.\nS.m.j."
}