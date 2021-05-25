import { Box, Checkbox, FormControlLabel } from '@material-ui/core'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AtendimentoContext } from '../../../..'

const RelatorioSet2 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.checked } })
    }

    const [list, setList] = useState([])

    const getList = useCallback(() => {
        const ar = [
            ['ara', 'Rigidez articular', lmeEdit.relatorio?.ara],
            ['arb', 'Artrite em três ou mais áreas', lmeEdit.relatorio.arb],
            ['arc', 'Artrite em articulações das mãos', lmeEdit.relatorio.arc],
            ['ard', 'Artrite simétrica', lmeEdit.relatorio.ard],
            ['are', 'Nódulos reumatóides', lmeEdit.relatorio.are],
            ['arf', 'Fator reumatóide sérico', lmeEdit.relatorio.arf],
            ['arg', 'Alterações radiológicas', lmeEdit.relatorio.arg],
        ]

        const eap = [
            ['eapa', 'Psoríase', lmeEdit.relatorio.eapa],
            ['eapb', 'Artrite', lmeEdit.relatorio.eapb],
            ['eapc', 'Entesite', lmeEdit.relatorio.eapc],
            ['eapd', 'Dactilite', lmeEdit.relatorio.eapd],
            ['eape', 'Alterações extrarticulares', lmeEdit.relatorio.eape],
            ['eapf', 'Distrofia ungueal', lmeEdit.relatorio.eapf],
            ['eapg', 'Proliferação óssea na radiografia', lmeEdit.relatorio.eapg],
        ]

        const eaa = [
            ['eaaa', 'Dor lombar inflamatória', lmeEdit.relatorio.eaaa],
            ['eaab', 'HLA-B27 detectado', lmeEdit.relatorio.eaab],
            ['eaac', 'Sacroileíte / Lesões Axiais', lmeEdit.relatorio.eaac],
            ['eaad', 'RM típica', lmeEdit.relatorio.eaad],
            ['eaae', 'Alterações Extrarticulares', lmeEdit.relatorio.eaae],
        ]

        const arcid = ['M050', 'M051', 'M052', 'M053', 'M058', 'M060', 'M068']
        const aijcid = ['M080']
        const eaicid = ['M460', 'M461', 'M468']
        const eapcid = ['M070', 'M073']
        const eaacid = ['M45']

        if (arcid.includes(lmeEdit.cid10)) {
            setList(ar)
        } else if (aijcid.includes(lmeEdit.cid10)) {
            setList(ar)
        } else if (eaicid.includes(lmeEdit.cid10)) {
            setList(eap)
        } else if (eapcid.includes(lmeEdit.cid10)) {
            setList(eap)
        } else if (eaacid.includes(lmeEdit.cid10)) {
            setList(eaa)
        }
        // não sei como tirar toda essa lógica aqui de dentro.
        // as const quando estão lá fora e são postas na lista de dependências dá loop infinito

    }, [lmeEdit])

    useEffect(() => {
        getList()
    }, [getList])


    return (
        <div>
            <Box m={2}>
                {list?.map((w) =>
                    <Box key={w[0]}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color='primary'
                                    name={w[0]}
                                    checked={w[2] === true ? true : false}
                                    onChange={handleChange}
                                />}
                            label={w[1]}
                        />
                    </Box>
                )}
            </Box>
        </div>
    )
}

export default RelatorioSet2