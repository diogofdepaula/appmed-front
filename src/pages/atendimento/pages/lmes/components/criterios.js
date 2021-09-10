
const Criterios = () => {

    const ArtriteReumatoide1987 = [
        ['artrite em mãos', 'ara', true],
        ['artrite simétrica', 'ard', true],
        ['rigidez matinal', 'ara', true],
        ['fator reumatoide reagente', 'arf', true],
        ['alterações radiográficas (erosões)', 'arg', true],
        ['nódulo reumatóide', 'are', true],
        ['doença reumatóide do pulmão', 'arg', true],
        ['vasculite reumatoide', 'arg', true],
    ]

    const ArtriteReumatoide2010 = [
        ['1 grande articulação', 'ar2020a', 0,],
        ['2 - 10 grandes articulações', 'ar2020a', 1,],
        ['1 - 3 pequenas articulações', 'ar2020a', 2,],
        ['4 - 10 pequenas articulações', 'ar2020a', 3,],
        ['mais que 10 articulações', 'ar2020a', 5,],
        ['fator reumatoide não reagente', 'ar2020b', 0],
        ['anticorpos antipeptídeos citrulinados cíclicos (anti-CCP) não reagente', 'ar2020b', 0],
        ['fator reumatoide em baixos títulos', 'ar2020b', 2],
        ['anticorpos antipeptídeos citrulinados cíclicos (anti-CCP) em baixos títulos', 'ar2020b', 2],
        ['fator reumatoide em altos títulos', 'ar2020b', 3],
        ['anticorpos antipeptídeos citrulinados cíclicos (anti-CCP) em baixos títulos', 'ar2020b', 3],
        ['VHS normal', 'ar2020c', 0,],
        ['PCR normal', 'ar2020c', 0,],
        ['VHS alterado', 'ar2020c', 1,],
        ['PCR alterado', 'ar2020c', 1,],
        ['duração dos sintomas menor que 6 semanas', 'ar2020d', 0,],
        ['duração dos sintomas maior que 6 semanas', 'ar2020d', 1,],
    ]

    const Lupus = [
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

    const Osteoporose = [
        ['plano de início e manutenção de tratamento com glicocorticóide em dose superior a 5mg de prednisona/dia ou equivalente por período igual ou superior a 3 meses',],
        ['na pós-menopausa',],
        ['fratura de baixo impacto (decorrente de queda da própria altura) de fêmur',],
        ['fratura de baixo impacto (decorrente de queda da própria altura) de quadril',],
        ['fratura de baixo impacto (decorrente de queda da própria altura) de coluna',],
        ['exame densitométrico com escore T igual ou inferior a -2,5 no fêmur proximal ou coluna',],
        ['baixa massa óssea (escore T entre -1,5 e -2,5 no fêmur proximal ou coluna) em paciente com idade superior a 70 anos e "caidor" (2 quedas nos últimos 6 meses)',],
    ]

    const DorCronica = [
        ['intensidade da dor (escala EVA) de 4',],
        ['intensidade da dor (escala EVA) de 6',],
        ['intensidade da dor (escala EVA) de 8',],
        ['intensidade da dor (escala EVA) de 10',],
        ['refratários de outros fármacos: ',],
        ['CID principal R52.1 ou R52.2',],
        ['CID secundário (patologia que desencadeou a dor): ',],
        ['dor crônica (superior a 30 dias)',],
    ]

    const EscleroSistemica = [
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

    const Espondiloartrite = [
        ['lombalgia inflamatória crônica (há mais de 3 meses)', 'eaaa', true],
        ['início antes dos 45 anos', 'eaaa', true],
        ['HLA-B27 detectado', 'eaab', true],
        ['sacroileite documentado nos exames de imagem', 'eaac', true],
        ['artrite', 'eaae', true],
        ['entesite (fasceite plantar)', 'eaae', true],
        ['entesite na inserção do tendão de Aquiles', 'eaae', true],
        ['uveíte anteior unilateral', 'eaae', true],
        ['dactilite', 'eaae', true],
        ['psoríase', 'eaae', true],
        ['doença inflamatória intestinal', 'eaae', true],
        ['boa resposta a anti-inflamatórios não esteroidais', 'eaae', true],
        ['história familiar de espondiloartrite', 'eaae', true],
        ['proteína C reativa elevada', 'eaae', true],
        ['RM típica', 'eaad', true]
    ]

    const ArtritePsoriaca = [
        ['psoríase presente no momento', 'eapa', true],
        ['história pessoal de psoríase', 'eapa', true],
        ['história familiar de psoríase', 'eapa', true],
        ['oligoartrite', 'eapb', true],
        ['poliartrite', 'eapb', true],
        ['artrite em interfalangeanas distais', 'eapb', true],
        ['entesite (fasceite plantar)', 'eapc', true],
        ['entesite na inserção do tendão de Aquiles', 'eapc', true],
        ['distrofia ungueal', 'eapf', true],
        ['fator reumatoide negativo', 'eape', true],
        ['formação óssea justa-articular', 'eapg', true],
    ]

    const doencas = [
        ['AR1987', ArtriteReumatoide1987, 'Paciente com Artrite reumatoide com os seguintes critérios (de 1987): ', true], // true pois tem lmeEdit
        ['AR2010', ArtriteReumatoide2010, 'Paciente com Artrite reumatoide com os seguintes critérios (de 2010): ', true],
        ['LES', Lupus, 'Paciente com Lúpus Eritematoso Sistêmico com os seguintes critérios: ', false],
        ['OP', Osteoporose, 'Paciente com Osteoporose com os seguintes critérios: ', false],
        ['Dor', DorCronica, 'Paciente com Dor crônica com os seguintes critérios: ', false],
        ['ES', EscleroSistemica, 'Paciente com Esclerose Sistêmica com os seguintes critérios: ', false],
        ['EA', Espondiloartrite, 'Paciente com Espondiloartrite com os seguintes critérios: ', true],
        ['AP', ArtritePsoriaca, 'Paciente com Artrite psoriásica com os seguintes critérios: ', true],
    ]

    return doencas

}

export default Criterios