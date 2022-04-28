export const CriteriosLme = (lme) => {

    const ar1987 = [
        ['ara', 'Rigidez articular', lme.relatorio.ara],
        ['arb', 'Artrite em três ou mais áreas', lme.relatorio.arb],
        ['arc', 'Artrite em articulações das mãos', lme.relatorio.arc],
        ['ard', 'Artrite simétrica', lme.relatorio.ard],
        ['are', 'Nódulos reumatóides', lme.relatorio.are],
        ['arf', 'Fator reumatóide sérico', lme.relatorio.arf],
        ['arg', 'Alterações radiológicas', lme.relatorio.arg],
    ]

    const ar2010 = [
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

    const eap = [
        ['eapa', 'Psoríase', lme.relatorio.eapa],
        ['eapb', 'Artrite', lme.relatorio.eapb],
        ['eapc', 'Entesite', lme.relatorio.eapc],
        ['eapd', 'Dactilite', lme.relatorio.eapd],
        ['eape', 'Alterações extrarticulares', lme.relatorio.eape],
        ['eapf', 'Distrofia ungueal', lme.relatorio.eapf],
        ['eapg', 'Proliferação óssea na radiografia', lme.relatorio.eapg],
    ]

    const eaa = [
        ['eaaa', 'Dor lombar inflamatória', lme.relatorio.eaaa],
        ['eaab', 'HLA-B27 detectado', lme.relatorio.eaab],
        ['eaac', 'Sacroileíte / Lesões Axiais', lme.relatorio.eaac],
        ['eaad', 'RM típica', lme.relatorio.eaad],
        ['eaae', 'Alterações Extrarticulares', lme.relatorio.eaae],
    ]

    const arcid = ['M050', 'M051', 'M052', 'M053', 'M058', 'M060', 'M068']
    const aijcid = ['M080']
    const eaicid = ['M460', 'M461', 'M468']
    const eapcid = ['M070', 'M073']
    const eaacid = ['M45']

    let list

    if (arcid.includes(lme.cid10)) {
        list = [ar1987, ar2010]
    } else if (aijcid.includes(lme.cid10)) {
        list = [ar1987]
    } else if (eaicid.includes(lme.cid10)) {
        list = [eap]
    } else if (eapcid.includes(lme.cid10)) {
        list = [eap]
    } else if (eaacid.includes(lme.cid10)) {
        list = [eaa]
    }

    return list
}

