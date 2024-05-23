import { Box } from '@mui/material';
import { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';


const Questionary = [ // interface no TS
    {
        nome: "sledai01",
        titulo: "Convulsão",
        explicacao: "Início recente Excluir outras causas, " +
            "tais como distúrbios metabólicos, infecções ou medicamentos.",
        valor: 8,
    },
    {
        nome: "sledai02",
        titulo: "Psicose",
        explicacao: "Distúrbio na percepção da realidade, incluindo " +
            "alucinações, delírios, incoerências, perda de associações, " +
            "pensamento não lógico, comportamento bizarro, desorganizado " +
            "ou catatônico. Excluir outras causas, tais como uremia ou medicações.",
        valor: 8,
    },
    {
        nome: "sledai03",
        titulo: "Síndrome cerebral orgânica",
        explicacao: "Alteração da função mental, com prejuízo na " +
            "orientação, memória ou outras funções intelectuais, com " +
            "rápido surgimento e flutuações, incapacidade de sustentar a " +
            "atenção, somado a pelo menos dois dos seguintes achados: " +
            "distúrbio da percepção, diálogo incoerente, insônia, " +
            "sonolência e aumento ou diminuição da atividade psicomotora. " +
            "Excluir outras causas, tais como distúrbios metabólicos, " +
            "infecções ou medicamentos.",
        valor: 8,
    },
    {
        nome: "sledai04",
        titulo: "Visual",
        explicacao: "Alterações no fundo do olho, como corpos citoides, " +
            "hemorragias retinianas, exsudatos ou hemorragias na coroide ou " +
            "nervo óptico.Excluir outras causas, tais como hipertensão, " +
            "infecções ou medicamentos.",
        valor: 8,
    },
    {
        nome: "sledai05",
        titulo: "Nervos cranianos",
        explicacao: "Surgimento de neuropatia sensitiva ou motora " +
            "dos nervos cranianos.",
        valor: 8,
    },
    {
        nome: "sledai06",
        titulo: "Cefaleia lúpica",
        explicacao: "Persistente e grave, enxaquecosa, com pouca " +
            "resposta a analgésicos opioides.",
        valor: 8,
    },
    {
        nome: "sledai07",
        titulo: "AVC",
        explicacao: "Evento de início recente e não relacionado " +
            "com aterosclerose ou hipertensão.",
        valor: 8,
    },
    {
        nome: "sledai08",
        titulo: "Vasculite",
        explicacao: "Ulceração, gangrena, nódulo, infarto periungueal, " +
            "hemorragias puntiformes, biópsia ou arteriografia compatíveis " +
            "com vasculite.",
        valor: 8,
    },
    {
        nome: "sledai09",
        titulo: "Artrite",
        explicacao: " duas articulações ou mais com sinais flogísticos.",
        valor: 4,
    },
    {
        nome: "sledai10",
        titulo: "Miosite",
        explicacao: "Fraqueza ou dor muscular proximal com elevação de " +
            "creatinofosfoquinase ou aldolase, ou eletroneuromiografia " +
            "compatível com miosite ou biópsia com infiltrado inflamatório " +
            "em fibra muscular.",
        valor: 4,
    },
    {
        nome: "sledai11",
        titulo: "Cilindros",
        explicacao: "Hemáticos ou granulosos.",
        valor: 4,
    },
    {
        nome: "sledai12",
        titulo: "Hematúria",
        explicacao: "Mais de 5 hemácias/campo de grande aumento. " +
            "Excluir cálculos, infecções ou outras causas.",
        valor: 4,
    },
    {
        nome: "sledai13",
        titulo: "Proteinúria",
        explicacao: "acima de 0,5 g/24h",
        valor: 4,
    },
    {
        nome: "sledai14",
        titulo: "Piúria",
        explicacao: "Mais de 5 leucócitos/campo de grande aumento. " +
            "Excluir infecção.",
        valor: 4,
    },
    {
        nome: "sledai15",
        titulo: "Rash malar",
        explicacao: "Novo episódio.",
        valor: 2,
    },
    {
        nome: "sledai16",
        titulo: "Alopecia",
        explicacao: "Perda de cabelo anormal, difusa ou localizada.",
        valor: 2,
    },
    {
        nome: "sledai17",
        titulo: "Ulcerações mucosas",
        explicacao: "Ulcerações nasais ou orais",
        valor: 2,
    },
    {
        nome: "sledai17",
        titulo: "Pleurite",
        explicacao: "Dor pleurítica com atrito pleural, ou derrame " +
            "pleural ou espessamento pleura.",
        valor: 2,
    },
    {
        nome: "sledai17",
        titulo: "Pericardite",
        explicacao: "Dor compatível com pericardite somada a pelo " +
            "um dos seguintes achados: atrito pericárdico, derrame " +
            "pericárdico, eletrocardiograma ou ecocardiograma " +
            "compatíveis com pericardite.",
        valor: 2,
    },
    {
        nome: "sledai18",
        titulo: "Complementos baixos",
        explicacao: "Diminuição do CH50, C3 ou C4 abaixo do limite " +
            "da normalidade, de acordo com os valores de referência.",
        valor: 2,
    },
    {
        nome: "sledai19",
        titulo: "Anti-DNA nativo",
        explicacao: "Aumento acima do valor considerado normal para este exame.",
        valor: 2,
    },
    {
        nome: "sledai20",
        titulo: "Febre",
        explicacao: "Temperatura axilar acima de 38º C. Excluir infecções.",
        valor: 1,
    },
    {
        nome: "sledai21",
        titulo: "Trombocitopenia",
        explicacao: "Menos de 100.000 plaquetas/mm³. Excluir outras " +
            "causa, tais como medicamentos.",
        valor: 1,
    },
    {
        nome: "sledai22",
        titulo: "Leucopenia",
        explicacao: "Menos de 3.000 leucócitos/mm³. Excluir outras " +
            "causas, tais como medicamentos.",
        valor: 1,
    },
]

export const CalcLes = () => {

    const [sledai, setSledai] = useState(0)

    const handleChange = (event, param) => {
        if (event.target.checked){
            setSledai(prev => prev + parseInt(param.valor))
        } else {
            setSledai(prev => prev - parseInt(param.valor))
        }
    }

    return (
        <>
            <Box
                sx={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    // bgcolor: "red",
                    gap: 3,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        typography: 'body1'
                    }}
                >
                    <Box>SLEDAI {"de " + sledai}</Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: 1,
                    }}
                >
                    {Questionary.map(p =>
                        <FormControlLabel
                            key={p.titulo}
                            control={
                                <Checkbox
                                    color='primary'
                                    name={p.titulo}
                                    //  checked={prescricaoEdit.continuo}
                                    onChange={(e) => handleChange(e, p)}
                                />}
                            label={p.titulo}
                        />
                    )}
                </Box>
            </Box>
        </>
    )
}