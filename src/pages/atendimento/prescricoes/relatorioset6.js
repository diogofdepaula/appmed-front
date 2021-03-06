import { Box, Divider, TextField } from '@mui/material';
import React, { useContext } from 'react';
import ReactInputMask from 'react-input-mask';
import { AtendimentoContext } from '..';
import { AtendimentoLeft, AtendimentoOutside, AtendimentoRight } from '../../../components/atendimento/layout';
import ICAD from '../../../utils/tips/Icad';

const RelatorioSet6 = () => {

    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
    }

    const indices = [
        ['das28', lmeEdit.relatorio.das28, "9,9"],
        ['cdai', lmeEdit.relatorio.cdai, "99"],
        ['sdai', lmeEdit.relatorio.sdai, "99"],
        ['basdai', lmeEdit.relatorio.basdai, "99,9"],
        ['asdascrp', lmeEdit.relatorio.asdascrp, "9.9"],
        ['asdasesr', lmeEdit.relatorio.asdasesr, "9.9"],
        ['dapsa', lmeEdit.relatorio.dapsa, "999"],
        ['lei', lmeEdit.relatorio.lei, "99"],
        ['sjadas', lmeEdit.relatorio.sjadas, "999"],
    ]

    return (
        <>
            <AtendimentoOutside>
                <AtendimentoLeft>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 1,
                        }}
                    >
                        {indices?.map(w =>
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
                </AtendimentoLeft>
                <Divider orientation='vertical' flexItem />
                <AtendimentoRight>
                    <ICAD />
                </AtendimentoRight>
            </AtendimentoOutside>
        </>
    )
}

export default RelatorioSet6
