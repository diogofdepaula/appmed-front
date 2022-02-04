import { Box, Typography } from '@mui/material';
import { format } from 'date-fns';
import addMonths from 'date-fns/addMonths';
import { ptBR } from "date-fns/locale";
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../../..';
import PageSize from '../../../component/pagesize';

const Data = ({ mes, tipo }) => {

    const { impressao } = useContext(ImpressaoContext)

    const date = format(addMonths(impressao.database, mes ? mes : 0), "dd ' de ' MMMM ' de ' yyyy", { locale: ptBR })

    const Typo = (prop) => {

        if (PageSize(tipo)) {
            // A5
            return (
                <Typography variant="h6"
                    sx={{
                        fontSize: 16
                    }}
                >
                    {prop.children}
                </Typography>
            )
        } else {
            //A4
            return (
                <Typography variant="h5">
                    {prop.children}
                </Typography>
            )
        }
    }

    return (
        <>
            <Box>
                <Typo>
                    Guarapuava, {date}.
                </Typo>
            </Box>
        </>
    )
}

export default Data