import { Box, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const PrescricaoBox = ({ prescricao, handlePrescricaoDelete }) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "row",
                }}
            >
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: 12,
                                fontWeight: 'bold',
                            }}
                        >
                            {prescricao.medicamento.farmaco + ' (' + prescricao.apresentaco.descricao + ')'}
                        </Box>
                        <Box
                            sx={{
                                fontSize: 10,
                            }}
                        >
                            {prescricao.posologia.quantidade + ' ' + prescricao.posologia.forma}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            fontSize: 12,
                        }}
                    >
                        {prescricao.posologia.posologia}
                    </Box>
                    <Box
                        sx={{
                            fontSize: 8,
                        }}
                    >
                        {prescricao.imprimirorientacoes ? "com orientações" : ''}
                    </Box>
                </Box>
                <Box>
                    <Tooltip title="Editar" >
                        <IconButton
                            onClick={() => handlePrescricaoDelete(prescricao)}
                            size="small"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </>
    )
}

const RequisicaoBox = ({ requisicao, handleRequisicaoEdit }) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "column",
                    gap: 1,
                    p: 1,
                    m: 1,
                    border: 0.5,
                    borderRadius: 1,
                    borderColor: "#42a5f5"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: 10,
                                flexGrow: 1,
                            }}
                        >
                            {requisicao.justificativa}
                        </Box>
                        <Tooltip title="Editar" >
                            <IconButton
                                onClick={() => handleRequisicaoEdit(requisicao)}
                                size="small"
                            >
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: 12,
                            fontWeight: 'bold',
                        }}
                    >
                        {requisicao.selecionados.map((s, i) =>
                            <Box key={i}>
                                {s.mod}
                            </Box>
                        )}
                    </Box>

                </Box>
            </Box>
        </>
    )
}

const VacinacaoBox = ({ vacinacao }) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "column",
                    gap: 1,
                    p: 1,
                    m: 1,
                    border: 0.5,
                    borderRadius: 1,
                    borderColor: "#42a5f5"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            fontSize: 10,
                        }}
                    >
                        {vacinacao.indicacao}
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: 12,
                            fontWeight: 'bold',
                        }}
                    >
                        {vacinacao.selecionadas.map((s, i) =>
                            <Box key={i}>
                                {s.mod}
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

const EmBranco = ({ embranco }) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "column",
                    gap: 1,
                    p: 1,
                    m: 1,
                    border: 0.5,
                    borderRadius: 1,
                    borderColor: "#42a5f5"
                }}
            >
                <Box
                    sx={{
                        fontSize: 10,
                    }}
                >
                    {embranco.titulo}
                </Box>
            </Box>
        </>
    )
}

const Ditame = ({ receita, handleRequisicaoEdit, handlePrescricaoDelete }) => {

    return (
        <>
            <Box
                sx={{
                    border: 1,
                    borderColor: 'black',
                    width: '20rem',
                    height: '40rem',
                }}
            >
                <Box
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 24,
                        m: 1
                    }}
                >
                    {receita.clienteContext.nome}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: "column",
                        gap: 1,
                        p: 1,
                        m: 1,
                        border: 0.5,
                        borderRadius: 1,
                        borderColor: "#42a5f5"
                    }}
                >
                    {receita.prescricoes.map((p, i) =>
                        <PrescricaoBox
                            key={i}
                            prescricao={p}
                            handlePrescricaoDelete={handlePrescricaoDelete}
                        />
                    )}
                </Box>
                <Box>
                    {receita.comentarios}
                </Box>
                <Box>
                    {receita.requisicoes.map((r, i) =>
                        <RequisicaoBox
                            requisicao={r}
                            key={i}
                            handleRequisicaoEdit={handleRequisicaoEdit}
                        />
                    )}
                </Box>
                <Box>
                    {receita.vacinacao.map((r, i) =>
                        <VacinacaoBox vacinacao={r} key={i} />
                    )}
                </Box>
                <Box>
                    {receita.embranco.map((r, i) =>
                        <EmBranco embranco={r} key={i} />
                    )}
                </Box>

            </Box>
        </>
    )
}

export default Ditame