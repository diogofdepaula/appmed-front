import { DoençaCID } from "./inquiries"

export const CriteriosAR1987 = (lme) => {
    return [
        ['Rigidez articular', 'ara', lme.relatorio?.ara],
        ['Artrite em três ou mais áreas', 'arb', lme.relatorio?.arb],
        ['Artrite em articulações das mãos', 'arc', lme.relatorio?.arc],
        ['Artrite simétrica', 'ard', lme.relatorio?.ard],
        ['Nódulos reumatóides', 'are', lme.relatorio?.are],
        ['Fator reumatóide sérico', 'arf', lme.relatorio?.arf],
        ['Alterações radiológicas', 'arg', lme.relatorio?.arg],
    ]
}

export const CriteriosAR2010 = (lme) => {
    return [
        [[lme.relatorio?.ar2010a, 'ar2010a'], [
            ['1 grande articulação', 0],
            ['2 - 10 grandes articulações', 1],
            ['1 - 3 pequenas articulações', 2],
            ['4 - 10 pequenas articulações', 3],
            ['Mais que 10 articulações', 5]
        ]],
        [[lme.relatorio?.ar2010b, 'ar2010b'], [
            ['Fator reumatoide e anticorpos antipeptídeos citrulinados cíclicos (anti-CCP) não reagentes', 0],
            ['Fator reumatoide ou anticorpos antipeptídeos citrulinados cíclicos (anti-CCP) em baixos títulos', 2],
            ['Fator reumatoide em altos títulos ou anticorpos antipeptídeos citrulinados cíclicos (anti-CCP) em altos títulos', 3]
        ]],
        [[lme.relatorio?.ar2010c, 'ar2010c'], [
            ['VHS ou PCR normais', 0],
            ['VHS ou PCR alterado', 1]
        ]],
        [[lme.relatorio?.ar2010d, 'ar2010d'], [
            ['Duração dos sintomas menor que 6 semanas', 0],
            ['Duração dos sintomas maior que 6 semanas', 1],
        ]],
    ]
}

export const CriteriosAP = (lme) => {
    return [
        ['Psoríase atual', 'apa', lme.relatorio?.apa],
        ['História pessoal de psoríase', 'apb', lme.relatorio?.apb],
        ['História familiar de psoríase (familiar de 1º ou 2º grau)', 'apc', lme.relatorio?.apc],
        ['Distrofia ungueal psoriásica típica', 'apd', lme.relatorio?.apd],
        ['Fator reumatóide negativo', 'ape', lme.relatorio?.ape],
        ['História de dactilite ou dactilite atual', 'apf', lme.relatorio?.apf],
        ['Formação óssea justa-articular à radiografia simples de mãos ou pés', 'apg', lme.relatorio?.apg],
    ]
}

export const CriteriosEA = (lme) => {
    return [
        ['Dor lombar inflamatória por, no mínimo, 3 meses e idade de início da doença até 45 anos', 'eaaa', lme.relatorio?.eaaa],
        ['HLA-B27 e dois ou mais características de Espondiloartrite', 'eaab', lme.relatorio?.eaab],
        ['Sacroileíte em exames de imagem e pelo menos uma característica de Espondiloartrite', 'eaac', lme.relatorio?.eaac],
        ['Lombalgia inflamatória por três meses ou mais de duração', 'eanya', lme.relatorio?.eanya],
        ['Limitação dos movimentos da coluna lombar nos planos sagital e frontal', 'eanyb', lme.relatorio?.eanyb],
        ['Expansão torácica diminuída', 'eanyc', lme.relatorio?.eanyc],
        ['Radiografia com detecção de sacroileíte bilateral grau 2 a 4', 'eanyd', lme.relatorio?.eanyd],
        ['Radiografia com detecção de sacroileíte unilateral grau 3 ou 4', 'eanye', lme.relatorio?.eanye],
    ]
}

export const CriteriosLES = () => {
    return [
        ['artrite não erosiva',],
        ['eritema malar',],
        ['convulsão',],
        ['psicose',],
        ['fotossensibilidade',],
        ['úlcera mucosa',],
        ['pleurite',],
        ['pericardite',],
        ['anemia hemolítica com reticulocitose',],
        ['leucopenia',],
        ['linfopenia',],
        ['trombocitopenia',],
        ['nefrite lúpica com proteinúria persistente de mais de 0,5g/dia',],
        ['cilindros celulares',],
        ['lesão discoide',],
        ['fator antinuclear (FAN) reagente',],
        ['presença de anti-DNA nativo reagente',],
        ['presença de anti-Sm reagente',],
        ['presença de anticorpos antifosfolipídios presentes',],
        ['paciente com lúpus eritematoso sistêmico, com outra manifestação em órgão ou sistema afetado pela doença',],
        ['gestante com lúpus eritematoso atendida em serviço especializado',],
    ]
}

export const CriteriosOP = () => {
    return [
        ['plano de início e manutenção de tratamento com glicocorticóide em dose superior a 5mg de prednisona/dia ou equivalente por período igual ou superior a 3 meses',],
        ['na pós-menopausa',],
        ['fratura de baixo impacto (decorrente de queda da própria altura) de fêmur',],
        ['fratura de baixo impacto (decorrente de queda da própria altura) de quadril',],
        ['fratura de baixo impacto (decorrente de queda da própria altura) de coluna',],
        ['exame densitométrico com escore T igual ou inferior a -2,5 no fêmur proximal ou coluna',],
        ['baixa massa óssea (escore T entre -1,5 e -2,5 no fêmur proximal ou coluna) em paciente com idade superior a 70 anos e "caidor" (2 quedas nos últimos 6 meses)',],
    ]
}

export const CriteriosDor = () => {
    return [
        ['intensidade da dor (escala EVA) de 4',],
        ['intensidade da dor (escala EVA) de 6',],
        ['intensidade da dor (escala EVA) de 8',],
        ['intensidade da dor (escala EVA) de 10',],
        ['refratários de outros fármacos: ',],
        ['CID principal R52.2',],
        ['CID secundário (patologia que desencadeou a dor): ',],
        ['dor crônica (superior a 30 dias)',],
    ]
}

export const CriteriosES = () => {
    return [
        ['espessamento cutâneo',],
        ['puffy fingers',],
        ['esclerodactilia',],
        ['úlceras digitais',],
        ['pitting scar',],
        ['telangiectasia',],
        ['capilaroscopia anormal',],
        ['hipertensão arterial pulmonar',],
        ['doença intersticial pulmonar',],
        ['fenômeno de Raynaud',],
        ['anticentrômero presente',],
        ['antitopoisomerase I (Scl70) presente',],
        ['anti-RNP presente',],
        ['anti-RNA polimerase III',],
    ]
}

export const CriteriosAIJ = () => {
    return [
        [
            [
                'Sistêmico',
                [
                    'Artrite',
                    'Febre (> 15 dias, documentada por 3 dias)',
                    'Mais outra manifestação extra-articular: rash, serosite, hepatomegalia, esplenomegalia, linfonodomegalia generalizada'
                ],
            ],
            [
                'Oligoarticular',
                [
                    'Uma a 4 articulações com artrite nos 6 primeiros meses de doença',
                ]
            ],
            [
                'Poliarticular FR positivo',
                [
                    'Mais de 4 articulações acometidas nos primeiros 6 meses de doença',
                    'Fator reumatoide positivo em 2 testes com intervalo de 2 ou mais meses',
                ]
            ],
            [
                'Poliarticular FR negativo',
                [
                    'Mais de 4 articulações nos primeiros 6 meses(grandes e pequenas articulações)',
                    'Fator reumatoide negativo',
                ]
            ],
            [
                'Artrite psoriásica',
                [
                    'Artrite e Psoríase',
                    'Artrite e 2 dos seguintes: dactilite, alteração ungueal(pequenas depressões puntiformes nas unhas ou onicólise), parente do primeiro grau com psoríase'
                ]
            ]
        ]
    ]
}

export const CriteriosLme = (lme) => {
    const doencapelocid = DoençaCID(lme.cid10)
    if (doencapelocid === 'ar') return [CriteriosAR1987(lme), CriteriosAR2010(lme)]
    if (doencapelocid === 'ap') return [CriteriosAP(lme)]
    if (doencapelocid === 'ea') return [CriteriosEA(lme)]
    if (doencapelocid === 'les') return [CriteriosLES()]
    if (doencapelocid === 'op') return [CriteriosOP()]
    if (doencapelocid === 'dor') return [CriteriosDor()]
    if (doencapelocid === 'es') return [CriteriosES()]
    if (doencapelocid === 'aij') return [CriteriosAIJ()]
    return "outro"
}
