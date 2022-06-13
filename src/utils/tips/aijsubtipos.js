export const AijSubTipos = () => {
    return [

        
        'Oligoarticular',
        'Poliarticular',
        'Artrite com entesite',
        'Artrite psoríaca',
        'Artrite indiferenciada',
    ]
}

export const AijMedicamentos = () => {

    list = [
        [
            // Subtipos
            [
                'Sistêmica sem manifestação ativa e com poliartrite',
            ],
            // Primeira opção
            [
                'Prednisona',
                'Tocilizumabe',
            ],
            // Segunda opção
            [
                'Metotrexate',
                'Etanercepte',
                'Adalimumabe',
                'Abatacepte',
            ],
            // Terceira opção
            [
                '',
            ],
            // Quarta opção
            [
                '',
            ],
        ],
        [
            // Subtipos
            [
                'Sistêmica com manifestação ativa com ou sem artrite',
            ],
            // Primeira opção
            [
                'Prednisona',
            ],
            // Segunda opção
            [
                'Tocilizumabe',
            ],
            // Terceira opção
            [
                'Etanercepte',
                'Adalimumabe',
                'Abatacepte',
                'Infliximabe',
            ],
            // Quarta opção
            [
                '',
            ],
        ],
    ]

    return list
}