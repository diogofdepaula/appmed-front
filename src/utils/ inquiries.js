export const MedicamentoRelatorio = (medicamento) => {
    // função que define se um medicamento necessida de relatório na LME
    if (!medicamento) return false
    if (medicamento.classe === 'MMCDB' || medicamento.classe === 'MMCDPM') return true
    return false
}

export const DoençaCID = (param) => {
    if (['M050', 'M051', 'M052', 'M053', 'M058', 'M060', 'M068'].includes(param)) return "ar"
    if (['M080', 'M051', 'M081', 'M082', 'M083', 'M084', 'M088', 'M089'].includes(param)) return "aij"
    if (['M070', 'M072', 'M073'].includes(param)) return "ap"
    if (['M45', 'M0468'].includes(param)) return "ea"
    return 'outro'
}
