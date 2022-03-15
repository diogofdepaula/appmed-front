import { Box, Divider, List, ListItem, ListItemText } from '@mui/material';
import React, { memo, useContext } from 'react';
import { AtendimentoContext } from '../pages/atendimento';
import Reorder from '../pages/atendimento/component/reorder';

const ListItemsPrescricoes = memo(({ prescricoes }) => {

    const { setPrescricaoOnDuty } = useContext(AtendimentoContext)

    const handleSetRef = (param) => {
        setPrescricaoOnDuty(prev => param)
    }

    return (
        <>
            <List
                dense
            >
                {Reorder(prescricoes).filter(x => x.emuso).map(prescricao =>
                    <React.Fragment
                        key={prescricao.id}
                    >
                        <ListItem
                            onClick={() => handleSetRef(prescricao)}
                        >
                            <ListItemText
                                primary={
                                    <Box
                                        sx={{
                                            typography: 'body1',
                                            color: 'black',
                                        }}
                                    >
                                        {prescricao.medicamento.farmaco} - {prescricao.apresentaco.descricao}
                                    </Box>
                                }
                            />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                )
                }
            </List>
        </>
    )
})

export default ListItemsPrescricoes


