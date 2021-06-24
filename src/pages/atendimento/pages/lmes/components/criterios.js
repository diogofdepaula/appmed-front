const Criterios = () => {

    const ArtriteReumatoide = [
        'artrite em mãos (punhos, articulações MCF ou IFT proximais)',
        'artrite simétrica (mesma área em ambos os lados do corpo)',
        'rigidez matinal (nas articulações, com pelo menos 1 hora de duração)',
        'fator reumatoide reagente',
        'Autoanticorpos contra peptídeo citrulinado cíclico (CCP) reagente',
        'alterações radiográficas (erosões ou descalcificações periarticulares em radiografias póstero anteriores de mãos e punhos)',
        'nódulo reumatóide (presença de 1 ou mais nódulos subcutâneo sobre proeminência ósseas ou superfícies extensoras ou regiões periarticulares)',
        'artrite de causa desconhecida iniciado antes dos 16 anos de idade e duração deve ser igual ou superior a 6 semanas',
        'doença reumatóide do pulmão',
        'vasculite reumatoide',
    ]

    const Lupus = [
        'artrite não erosiva envolvendo mais de 2 articulações periféricas',
        'presença de anti-DNA nativo',
        'presença de anti-Sm',
        'presença de anticorpos antifosfolipídios',
        'convulsão',
        'psicose',
        'fotossensibilidade',
        'gestante com lúpus eritematoso atendida em serviço especializado',
        'úlcera mucosa',
        'eritema malar',
        'anemia hemolítica com reticulocitose',
        'leucopenia de menos de 4000/mm³ em duas ou mais ocasiões',
        'linfopenia de menos de 1500/mm³ em duas ou mais ocasiões',
        'trombocitopenia de menos de 100000mm³',
        'nefrite lúpica com proteinúria persistente de mais de 0,5g/dia',
        'cilindros celulares',
        'lesão discoide',
        'paciente com lúpus eritematoso sistêmico, com outra manifestação em órgão ou sistema afetado pela doença',
        'pleurite',
        'pericardite'
    ]

    const Osteoporose = [
        'plano de início e manutenção de tratamento com glicocorticóide em dose superior a 5mg de prednisona/dia ou equivalente por período igual ou superior a 3 meses',
        'na pós-menopausa',
        'fratura de baixo impacto (decorrente de queda da própria altura) de fêmur',
        'fratura de baixo impacto (decorrente de queda da própria altura) de quadril',
        'fratura de baixo impacto (decorrente de queda da própria altura) de coluna',
        'exame densitométrico com escore T igual ou inferior a -2,5 no fêmur proximal ou coluna',
        'baixa massa óssea (escore T entre -1,5 e -2,5 no fêmur proximal ou coluna) em paciente com idade superior a 70 anos e "caidor" (2 quedas nos últimos 6 meses)',
    ]

    const DorCronica = [
        'intensidade da dor (escala EVA) de 4',
        'intensidade da dor (escala EVA) de 6',
        'intensidade da dor (escala EVA) de 8',
        'intensidade da dor (escala EVA) de 10',
        'refratários de outros fármacos: ',
        'CID principal R52.1 ou R52.2',
        'CID secundário (patologia que desencadeou a dor): ',
        'dor crônica (superior a 30 dias)',
    ]

    const doencas = [
        ['AR', ArtriteReumatoide, 'Paciente com Artrite reumatoide com os seguintes critério:'],
        ['LES', Lupus, 'Paciente com Lúpus Eritematoso Sistêmico com os seguintes critério:'],
        ['OP', Osteoporose, 'Paciente com Osteoporose com os seguintes critério:'],
        ['Dor', DorCronica, 'Paciente com Dor crônica com os seguintes critério:'],
    ]

    return doencas

}

export default Criterios