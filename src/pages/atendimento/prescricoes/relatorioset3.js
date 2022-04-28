import { Box, Button, TextField } from '@mui/material'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import React, { useContext } from 'react'
import { AtendimentoContext } from '..'
import { ClienteContext } from '../../../App'

const RelatorioSet3 = () => {

    const { clienteContext } = useContext(ClienteContext)
    const { lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    const handleChange = event => {
        setLmeEdit({ ...lmeEdit, relatorio: { ...lmeEdit.relatorio, [event.target.name]: event.target.value } })
    }

    const indices = [
        [

            ['medicamento1', lmeEdit.relatorio.medicamento1],
            ['dose1', lmeEdit.relatorio.dose1],
            ['inicio1', lmeEdit.relatorio.inicio1],
            ['fim1', lmeEdit.relatorio.fim1],
            ['motivo1', lmeEdit.relatorio.motivo1],
        ],
        [

            ['medicamento2', lmeEdit.relatorio.medicamento2],
            ['dose2', lmeEdit.relatorio.dose2],
            ['inicio2', lmeEdit.relatorio.inicio2],
            ['fim2', lmeEdit.relatorio.fim2],
            ['motivo2', lmeEdit.relatorio.motivo2],
        ],
        [

            ['medicamento3', lmeEdit.relatorio.medicamento3],
            ['dose3', lmeEdit.relatorio.dose3],
            ['inicio3', lmeEdit.relatorio.inicio3],
            ['fim3', lmeEdit.relatorio.fim3],
            ['motivo3', lmeEdit.relatorio.motivo3],
        ],
        [

            ['medicamento4', lmeEdit.relatorio.medicamento4],
            ['dose4', lmeEdit.relatorio.dose4],
            ['inicio4', lmeEdit.relatorio.inicio4],
            ['fim4', lmeEdit.relatorio.fim4],
            ['motivo4', lmeEdit.relatorio.motivo4],
        ],
        [

            ['medicamento5', lmeEdit.relatorio.medicamento5],
            ['dose5', lmeEdit.relatorio.dose5],
            ['inicio5', lmeEdit.relatorio.inicio5],
            ['fim5', lmeEdit.relatorio.fim5],
            ['motivo5', lmeEdit.relatorio.motivo5],
        ],
        [

            ['medicamento6', lmeEdit.relatorio.medicamento6],
            ['dose6', lmeEdit.relatorio.dose6],
            ['inicio6', lmeEdit.relatorio.inicio6],
            ['fim6', lmeEdit.relatorio.fim6],
            ['motivo6', lmeEdit.relatorio.motivo6],
        ],
        [

            ['medicamento7', lmeEdit.relatorio.medicamento7],
            ['dose7', lmeEdit.relatorio.dose7],
            ['inicio7', lmeEdit.relatorio.inicio7],
            ['fim7', lmeEdit.relatorio.fim7],
            ['motivo7', lmeEdit.relatorio.motivo7],
        ],
    ]

    const handleClick = param => () => {

        const dateinicio = format(parseISO(param.inicio), "dd'/'MM'/'yyyy", { locale: ptBR })
        const datetermino = format(parseISO(param.termino), "dd'/'MM'/'yyyy", { locale: ptBR })

        let num = [
            lmeEdit.relatorio.medicamento1,
            lmeEdit.relatorio.medicamento2,
            lmeEdit.relatorio.medicamento3,
            lmeEdit.relatorio.medicamento4,
            lmeEdit.relatorio.medicamento5,
            lmeEdit.relatorio.medicamento6,
            lmeEdit.relatorio.medicamento7
        ].findIndex(x => x === '');

        setLmeEdit({
            ...lmeEdit, relatorio: {
                ...lmeEdit.relatorio,
                [indices[num][0][0]]: param.medicamento.farmaco,
                [indices[num][1][0]]: 'padrão',
                [indices[num][2][0]]: dateinicio,
                [indices[num][3][0]]: datetermino,
                [indices[num][4][0]]: param.motivotermico,
            }
        })
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',
                    flexGrow: 1,
                    gap: 0.5,
                }}
            >
                {clienteContext.prescricoes?.filter(p => !p.emuso).map(x =>
                    <Button
                        variant="outlined"
                        size="small"
                        key={x.id}
                        onClick={handleClick(x)}
                    >
                        {x.medicamento.farmaco}
                    </Button>
                )}
            </Box>
            <Box
                sx={{
                    mt: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                }}
            >
                {indices.map(z =>
                    <React.Fragment
                        key={z[0][0]}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 1,
                            }}
                        >
                            <TextField
                                fullWidth
                                variant='outlined'
                                name={z[0][0]}
                                label='Medicamento'
                                value={z[0][1]}
                                onChange={handleChange}
                            />
                            <TextField
                                variant='outlined'
                                name={z[1][0]}
                                label='Dose'
                                value={z[1][1]}
                                onChange={handleChange}
                            />
                            <TextField
                                variant='outlined'
                                name={z[2][0]}
                                label='Início'
                                value={z[2][1]}
                                onChange={handleChange}
                            />
                            <TextField
                                variant='outlined'
                                name={z[3][0]}
                                label='Fim'
                                value={z[3][1]}
                                onChange={handleChange}
                            />
                        </Box>
                        <TextField
                            fullWidth
                            variant='outlined'
                            name={z[4][0]}
                            label='Motivo'
                            value={z[4][1]}
                            onChange={handleChange}
                        />
                    </React.Fragment>
                )}
            </Box>
        </>
    )
}

export default RelatorioSet3

