import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { ClienteContext, PrintContext } from '../../../App';
import PageA5 from '../pagea5';
import Data from '../receita/component/data';


// Parágrafo   único.Quando   o   atestado   for   solicitado   pelo   paciente
//    ou seu representante legal para fins de perícia médica deverá observar:
// I -o diagnóstico;
// II -os resultados dos exames complementares;
// III -a conduta terapêutica;
// IV -o prognóstico;
// V -as conseqüências à saúde do paciente;
// VI -o provável tempo de repouso estimado necessário para a sua recuperação, 
// que complementará o parecer fundamentado do médico perito, a quem cabe legalmente 
// a decisão do benefício previdenciário, tais como: aposentadoria, 
// invalidez definitiva, readaptação


const Titulo = () => {

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

const Inicio = () => {

    const { clienteContext } = useContext(ClienteContext)

    const pronome = clienteContext.sexo === 'feminino' ? ' a sra.' : ' o sr.'

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
                    {clienteContext.nome}
                    <>{' '}</>
                </Box>
            </Box>
        </>
    )
}

const Conteudo = () => {

    const { atestadosSelecionados } = useContext(PrintContext)

    return (
        <>
            <>
                possui: <>{' '}</>
                {atestadosSelecionados[0].diagnostico}
                . <>{' '}</>
            </>
            <>
                No que se refere a conduta terapêutica atual tem-se<>{' '}</>
                {atestadosSelecionados[0].tratamento}
                <>{' '}</>
            </>
            <>
                Na última consulta paciente se apresentava<>{' '}</>
                {atestadosSelecionados[0].estado}
                <>{' '}</>
            </>
            <>
                Em relação ao prognóstico <>{' '}</>
                {atestadosSelecionados[0].prognostico}
                <>{' '}</>
            </>
            <>
                As consequências à saúde, apesar de considerar que tal 
                informação seria de competência ao médico do trabalho
                ou perico, pelo meu desconhecimento da real condições 
                de trabalho do paciente, são <>{' '}</>
                {atestadosSelecionados[0].consequencia}
                <>{' '}</>
            </>
            <>
                Por fim, o tempo estimado de repouso necessário, levando 
                em consideraçãos as afirmativas anteriores para a sua recuperação,
                é de {atestadosSelecionados[0].prazo} meses. Deve-se ter 
                em mente que esse prazo trata-se de uma estimativa, uma 
                vez que variáveis como responsibilidade, aderência e 
                disponibilidade ao tratamento, assim como outros fatores
                ambientais podem influenciar na resposta ao tratamento, 
                o que por vezes necessite ser estendido ou revisto. 
                <>{' '}</>
            </>
        </>
    )
}



const Comentario = () => {

    const { atestadosSelecionados } = useContext(PrintContext)

    return (
        <>
            <Box>
                {atestadosSelecionados[0].comentario}
            </Box>
            <Box>
                Ressalto que deve-se respeitar, contudo, a competência do médico
                perito e levando em consideração a supracitada resolução, a qual
                adicionou que o médico assistente não pode ser perito do próprio paciente,
                além do disposto no Código de Ética Médica. Compete ao médico assistente
                responder pelo diagnóstico, tratamento e acompanhamento do paciente e ao
                perito médico analisar o impacto que a doença alegada para o afastamento
                do paciente tem sobre a sua capacidade de desempenhar suas atividades
                laborativas. Assim sendo, cabe deste paciente somente ao médico perito
                determinar capacidade laborativa do paciente e a responsabilidade de
                determinar a necessidade de afastamento das atividades laborais.
            </Box>
        </>
    )
}

const AtestadoA5 = ({ tipo }) => {

    return (
        <>
            <PageA5>
                <Box
                    sx={{
                        width: 1,
                        height: 1,
                        display: 'block',
                    }}
                >
                    <Box
                        sx={{
                            height: 1,
                            display: 'block',
                        }}
                    >
                        <Titulo />
                        <Box
                            sx={{
                                justifyContent: 'space-around',
                                display: 'block',
                                textAlign: 'justify',
                                typography: 'body1',
                            }}
                        >
                            <Inicio />
                            <Conteudo />
                            <Comentario />
                        </Box>
                    </Box>
                    <Data tipo={tipo} />
                </Box>
            </PageA5>
        </>
    )
}

export default AtestadoA5