export default function Reorder(param) {

    let classes = [
        ['ANALGESICO', 10],
        ['ANTICONVULSIVANTE', 7],
        ['ANTIDEPRESSIVO', 8],
        ['ANTIMICROBIANO', 13],
        ['CONVENCIONAL', 14],
        ['CORTICOIDE', 4],
        ['MMCDB', 1],
        ['MMCDS', 3],
        ['MMCDAE', 2],
        ['OPIOIDE', 11],
        ['OSTEOMETABOLICO', 5],
        ['SUPLEMENTO', 12],
        ['VASOATIVO', 6],
        ['ANTIINFLAMATORIO', 9]
    ]

    let sort = param
        .map(sa => {
            let c = classes.find(e => e[0] === sa.medicamento.classe) // TEM QUE MELHORAR AQUI
            return [sa, c[1]]
        })
        .sort((a, b) => a[1] - b[1])
        .map(sb => sb[0])

    return sort
}