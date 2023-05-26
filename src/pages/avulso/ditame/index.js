import { Box } from '@mui/material';

const PrescricaoBox = ({ prescricao }) => {

    return (
        <>
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
        </>
    )
}

const RequisicaoBox = ({ requisicao }) => {

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
                        {requisicao.justificativa}
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

const Ditame = ({ receita }) => {

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
                        <PrescricaoBox prescricao={p} key={i} />
                    )}
                </Box>
                <Box>
                    {receita.comentarios}
                </Box>
                <Box>
                    {receita.requisicoes.map((r, i) =>
                        <RequisicaoBox requisicao={r} key={i} />
                    )}
                </Box>
                <Box>
                    {receita.vacinacao.map((r, i) =>
                        <VacinacaoBox vacinacao={r} key={i} />
                    )}
                </Box>

            </Box>
        </>
    )
}

export default Ditame