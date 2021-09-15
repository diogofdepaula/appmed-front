export default function Criterios(lme) {

    const ar = [
        ['ara', 'Rigidez articular', lme.relatorio.ara],
        ['arb', 'Artrite em três ou mais áreas', lme.relatorio.arb],
        ['arc', 'Artrite em articulações das mãos', lme.relatorio.arc],
        ['ard', 'Artrite simétrica', lme.relatorio.ard],
        ['are', 'Nódulos reumatóides', lme.relatorio.are],
        ['arf', 'Fator reumatóide sérico', lme.relatorio.arf],
        ['arg', 'Alterações radiológicas', lme.relatorio.arg],
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
        list = ar
    } else if (aijcid.includes(lme.cid10)) {
        list = ar
    } else if (eaicid.includes(lme.cid10)) {
        list = eap
    } else if (eapcid.includes(lme.cid10)) {
        list = eap
    } else if (eaacid.includes(lme.cid10)) {
        list = eaa
    }

    return list
}

