export const CriteriosAR1987 = (lme) => {
    return [
        ['ara', 'Rigidez articular', lme.relatorio.ara],
        ['arb', 'Artrite em três ou mais áreas', lme.relatorio.arb],
        ['arc', 'Artrite em articulações das mãos', lme.relatorio.arc],
        ['ard', 'Artrite simétrica', lme.relatorio.ard],
        ['are', 'Nódulos reumatóides', lme.relatorio.are],
        ['arf', 'Fator reumatóide sérico', lme.relatorio.arf],
        ['arg', 'Alterações radiológicas', lme.relatorio.arg],
    ]
}

export const CriteriosAR2010 = (lme) => {
    return [
        [[lme.relatorio.ar2010a, 'ar2010a'], [
            ['1 grande articulação', 0],
            ['2 - 10 grandes articulações', 1],
            ['1 - 3 pequenas articulações', 2],
            ['4 - 10 pequenas articulações', 3],
            ['Mais que 10 articulações', 5]
        ]],
        [[lme.relatorio.ar2010b, 'ar2010b'], [
            ['Fator reumatoide e anticorpos antipeptídeos citrulinados cíclicos (anti-CCP) não reagentes', 0],
            ['Fator reumatoide ou anticorpos antipeptídeos citrulinados cíclicos (anti-CCP) em baixos títulos', 2],
            ['Fator reumatoide em altos títulos ou anticorpos antipeptídeos citrulinados cíclicos (anti-CCP) em altos títulos', 3]
        ]],
        [[lme.relatorio.ar2010c, 'ar2010c'], [
            ['VHS ou PCR normais', 0],
            ['VHS ou PCR alterado', 1]
        ]],
        [[lme.relatorio.ar2010d, 'ar2010d'], [
            ['Duração dos sintomas menor que 6 semanas', 0],
            ['Duração dos sintomas maior que 6 semanas', 1],
        ]],
    ]
}

export const CriteriosAP = (lme) => {
    return [
        ['apa', 'Psoríase atual', lme.relatorio.apa],
        ['apb', 'História pessoal de psoríase', lme.relatorio.apb],
        ['apc', 'História familiar de psoríase (familiar de 1º ou 2º grau)', lme.relatorio.apc],
        ['apd', 'Distrofia ungueal psoriásica típica', lme.relatorio.apd],
        ['ape', 'Fator reumatóide negativo', lme.relatorio.ape],
        ['apf', 'História de dactilite ou dactilite atual', lme.relatorio.apf],
        ['apg', 'Formação óssea justa-articular à radiografia simples de mãos ou pés', lme.relatorio.apg],
    ]
}

export const CriteriosEA = (lme) => {
    return [
        ['eaaa', 'Dor lombar inflamatória por, no mímino, 3 meses e idade de início da doença até 45 anos', lme.relatorio.eaaa],
        ['eaab', 'HLA-B27 e dois ou mais características de Espondiloartrite', lme.relatorio.eaab],
        ['eaac', 'Sacroileíte em exames de imagem e pelo mesnos uma característica de Espondiloartrite', lme.relatorio.eaac],
        ['eanya', 'Lombalgia inflamatoria por três meses ou mais de duração', lme.relatorio.eanya],
        ['eanyb', 'Limitação dos movimentos da coluna lombar nos planos sagital e frontal', lme.relatorio.eanyb],
        ['eanyc', 'Expansão torácica diminuida', lme.relatorio.eanyc],
        ['eanyd', 'Radiografia com detecção de sacroileite bilateral grau 2 a 4', lme.relatorio.eanyd],
        ['eanye', 'Radiografia com detecção de sacroileite unilateral grau 3 ou 4', lme.relatorio.eanye],
    ]
}