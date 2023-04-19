export const MedicamentoRelatorio = (medicamento) => {
    // função que define se um medicamento necessida de relatório na LME
    if (!medicamento) return false
    // DEPOIS QUE ATUALIZAR O BANCO DE DADOS DE PRODUÇÃO, RETIRAR O "MMCDAE" DA LISTAGEM
    // SO NÃO FIZ AGORA, POIS VAI DAR ERRO QUANDO CARREGAR OS DADOS.
    // TEM QUE MODIFICAR O BANDO DE DADOS E DEPOIS MUDAR NO FRONT
    if (medicamento.classe === 'MMCDB' || medicamento.classe === 'MMCDAE') return true
    return false
}

export const DoençaCID = (param) => {
    if (['M050', 'M051', 'M052', 'M053', 'M058', 'M060', 'M068'].includes(param)) return "ar"
    if (['M800', 'M801', 'M802', 'M803', 'M804', 'M805', 'M810', 'M811', 'M812', 'M813', 'M814', 'M815', 'M816', 'M818', 'M820', 'M821', 'M828' ].includes(param)) return "op"
    if (['R521', 'R522'].includes(param)) return "dor"
    if (['M45', 'M468'].includes(param)) return "ea"
    if (['M321', 'M328'].includes(param)) return "les"
    if (['M070', 'M072', 'M073'].includes(param)) return "ap"
    if (['M340', 'M341', 'M348'].includes(param)) return "es"
    if (['M080', 'M051', 'M081', 'M082', 'M083', 'M084', 'M088', 'M089'].includes(param)) return "aij"
    return 'outro'
}


export const LmeComRelatorio = (lme) => {
    const doenca = DoençaCID(lme?.cid10)
    return (doenca === 'ar' || doenca === 'ea' || doenca === 'ap' || doenca === 'aij')
}

export const NumeroAleatorio = (tamanho) => {
    const tam = tamanho ? tamanho : 0
    return Math.floor(Math.random() * tam)
}

export const MedicacaoInterropida = 'Medicação interrompida. Deve-se parar o uso e fornecimento.'