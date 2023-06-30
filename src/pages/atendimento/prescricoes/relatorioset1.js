import { Box, Divider, TextField } from '@mui/material';
import { React, useContext } from 'react';
import ReactInputMask from 'react-input-mask';
import { AtendimentoContext } from '..';
import { AtendimentoLeft, AtendimentoOutside, AtendimentoRight } from '../../../components/atendimento/layout';
import { DoençaCID } from '../../../utils/inquiries';
import ICAD from '../../../utils/tips/Icad';

const IndicesAtividade = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
    }

    const indices = () => {
        if (DoençaCID(lmeEdit.cid10) === 'ar') return [
            ['das28', lmeEdit.relatorio.das28, "9,9"],
            ['cdai', lmeEdit.relatorio.cdai, "99"],
            ['sdai', lmeEdit.relatorio.sdai, "999"],
        ]
        if (DoençaCID(lmeEdit.cid10) === 'ap') return [
            ['asdascrp', lmeEdit.relatorio.asdascrp, "9.9"],
            ['asdasesr', lmeEdit.relatorio.asdasesr, "9.9"],
            ['dapsa', lmeEdit.relatorio.dapsa, "999"],
            ['lei', lmeEdit.relatorio.lei, "99"],
        ]
        if (DoençaCID(lmeEdit.cid10) === 'ea') return [
            ['basdai', lmeEdit.relatorio.basdai, "9.9"],
            ['asdascrp', lmeEdit.relatorio.asdascrp, "9.9"],
            ['asdasesr', lmeEdit.relatorio.asdasesr, "9.9"],
        ]
        if (DoençaCID(lmeEdit.cid10) === 'aij') return [
            ['das28', lmeEdit.relatorio.das28, "9,9"],
            ['sjadas', lmeEdit.relatorio.sjadas, "999"],
        ]
        return
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 1,
                }}
            >
                {indices().map(w =>
                    <ReactInputMask
                        key={w[0]}
                        mask={w[2]}
                        maskChar=" "
                        value={w[1]}
                        onChange={handleChange}
                    >
                        {() => <TextField
                            fullWidth
                            variant='outlined'
                            name={w[0]}
                            label={w[0].toLocaleUpperCase()}
                        />}
                    </ReactInputMask>
                )}
            </Box>
        </>
    )
}

const RelatorioSet1 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
    }

    return (
        <>
            <AtendimentoOutside>
                <AtendimentoLeft>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignContent: 'flex-start',
                                gap: 1,
                            }}
                        >
                            <ReactInputMask
                                mask="99"
                                maskChar=" "
                                value={lmeEdit.relatorio?.idadeinicio}
                                onChange={handleChange}
                            >
                                {() => <TextField
                                    fullWidth
                                    variant='outlined'
                                    name="idadeinicio"
                                    label="Idade de início"
                                />}
                            </ReactInputMask>
                            <ReactInputMask
                                mask="999"
                                maskChar=" "
                                value={lmeEdit.relatorio?.vhs}
                                onChange={handleChange}
                            >
                                {() => <TextField
                                    fullWidth
                                    variant='outlined'
                                    name="vhs"
                                    label="VHS"
                                />}
                            </ReactInputMask>
                            <ReactInputMask
                                mask="***"
                                maskChar=" "
                                value={lmeEdit.relatorio?.pcr}
                                onChange={handleChange}
                            >
                                {() => <TextField
                                    fullWidth
                                    variant='outlined'
                                    name="pcr"
                                    label="PCR"
                                />}
                            </ReactInputMask>
                        </Box>
                        <IndicesAtividade />
                    </Box>
                </AtendimentoLeft>
                <Divider orientation='vertical' flexItem />
                <AtendimentoRight>
                    <ICAD />
                </AtendimentoRight>
            </AtendimentoOutside >
        </>
    )
}

export default RelatorioSet1