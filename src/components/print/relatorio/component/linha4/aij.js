// import { Box } from '@mui/material';
// import React, { useContext } from 'react';
// import { LMEPrintContext } from '../..';
// import { CriteriosLme } from '../../../../../utils/criteriosdoencas';
// import { BoxCheckBox, BoxTitulo, Caixa } from '../../../components';

// const CriteriosAR = () => {

//     const lme = useContext(LMEPrintContext)

//     const SubTipos = () => {
        
//         return (
//             <>
//                 <BoxTitulo titulo={'Subtipos'} />
//                 <Box
//                     sx={{
//                         height: '100%',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'center',
//                         alignItems: 'left',
//                         pl: 1,
//                     }}
//                 >
//                     {AijSubTipos().map((w, i) =>
//                         <Box
//                             key={i}
//                         >
//                             {w[1]}
//                         </Box>
//                     )}
//                 </Box>
//             </>
//         )
//     }

//     const PrimeiraOpcao = () => {

//         const criterios = CriteriosLme(lme)[1]

//         return (
//             <>
//                 <BoxTitulo titulo={'Critérios ACR-EULAR'} />
//                 <Box
//                     sx={{
//                         ml: 1,
//                         display: 'flex',
//                         flexDirection: 'column',
//                     }}
//                 >
//                     <Box>
//                         Acometimento articular: {criterios[0][0][0]} pontos
//                     </Box>
//                     <Box>
//                         Sorologia: {criterios[1][0][0]} pontos
//                     </Box>
//                     <Box>
//                         Provas de atividade inflamatória
//                         <Box
//                             sx={{
//                                 pl: 1,
//                             }}
//                         >
//                             <BoxCheckBox
//                                 item={criterios[2][0][0]}
//                             >
//                                 VHS e PCR normais (0 ponto)
//                             </BoxCheckBox>
//                             <BoxCheckBox
//                                 item={!criterios[2][0][0]}
//                             >
//                                 VHS e PCR alterados (1 ponto)
//                             </BoxCheckBox>
//                         </Box>
//                     </Box>
//                     <Box>
//                         Duração dos sintomas
//                         <Box
//                             sx={{
//                                 pl: 1,
//                             }}
//                         >
//                             <BoxCheckBox
//                                 item={criterios[3][0][0]}
//                             >
//                                 {'>'} 6 semanas (0 ponto)
//                             </BoxCheckBox>
//                             <BoxCheckBox
//                                 item={!criterios[3][0][0]}
//                             >
//                                 {'≥'} 6 semanas (1 ponto)
//                             </BoxCheckBox>
//                         </Box>
//                     </Box>
//                     <Box
//                         sx={{
//                             fontWeight: 'bold',
//                         }}
//                     >
//                         Pontuação {criterios[0][0][0] + criterios[1][0][0] + criterios[2][0][0] + criterios[3][0][0]}
//                     </Box>
//                 </Box>
//             </>
//         )
//     }

//     const SegundaOpcao = () => {
//         return (
//             <>
//                 <BoxTitulo titulo={'Provas de Atividade Inflamatória'} />
//                 <Box
//                     sx={{
//                         height: '100%',
//                         display: 'flex',
//                         justifyContent: 'space-evenly',
//                         alignItems: 'center',
//                         flexDirection: 'column',
//                     }}
//                 >
//                     <Box>
//                         VHS: {lme.relatorio.vhs}
//                     </Box>
//                     <Box>
//                         PCR: {lme.relatorio.pcr}
//                     </Box>
//                 </Box>
//             </>
//         )
//     }

//     return (
//         <>
//             <Caixa>
//                 <SubTipos />
//             </Caixa>
//             <Caixa>
//                 <PrimeiraOpcao />
//             </Caixa>
//             <Caixa>
//                 <SegundaOpcao />
//             </Caixa>
//             <Caixa>
//                 <SegundaOpcao />
//             </Caixa>
//             <Caixa>
//                 <SubTipos />
//             </Caixa>
//         </>
//     )
// }

// export default CriteriosAR