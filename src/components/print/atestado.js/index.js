

// const ReceitaPorTipo = ({ prescricoes, via, mes, tipo, dupla }) => {

//     // variações conforme o local
//     let receita = <ReceitaA4 prescricoes={prescricoes} via={via} mes={mes} tipo={tipo} />

//     if (tipo === "consultorio") {
//         receita = <ReceitaA5 prescricoes={prescricoes} via={via} mes={mes} tipo={tipo} />
//     } else if (dupla) {
//         let a = prescricoes.filter(p => p.medicamento.farmaco === "Leflunomida")
//         receita = <ReceitaDupla prescricoes={a.length > 0 ? a : prescricoes} via={via} mes={mes} tipo={tipo} dupla={dupla} />
//     }

//     return receita
// }