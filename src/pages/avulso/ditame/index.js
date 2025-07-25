import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useContext, useRef } from 'react';
import { ClienteContext, PrintContext } from '../../../App';


const BoxExterna = ({ children }) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "column",
                    gap: 1,
                    p: 1,
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
                    {children}
                </Box>
            </Box>
        </>
    )
}

const PrescricaoBox = ({ prescricao, handlePrescricaoDelete }) => {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "row",
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            flexGrow: 1,
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                flexGrow: 1,
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
            <BoxExterna>
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
            </BoxExterna >
        </>
    )
}

const VacinacaoBox = ({ vacinacao }) => {

    return (
        <>
            <BoxExterna>
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
                        }}
                    >
                        {vacinacao.indicacao}
                    </Box>
                    <Tooltip title="Editar" >
                        <IconButton
                            //onClick={() => handleRequisicaoEdit(requisicao)}
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
                    {vacinacao.selecionadas.map((s, i) =>
                        <Box key={i}>
                            {s.mod}
                        </Box>
                    )}
                </Box>
            </BoxExterna>
        </>
    )
}

const EmBranco = ({ embranco, handleEmBrancoEdit }) => {

    return (
        <>
            <BoxExterna>
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
                        }}
                    >
                        {embranco.titulo}
                    </Box>
                    <Box>
                        <Tooltip title="Editar" >
                            <IconButton
                                onClick={() => handleEmBrancoEdit(embranco)}
                                size="small"
                            >
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </BoxExterna>
        </>
    )
}



const Ditame = ({ handleRequisicaoEdit, handlePrescricaoDelete, handleEmBrancoEdit }) => {

    const { clienteContext } = useContext(ClienteContext)
    const { prescricoesSelecionadas, requisicoes, comentario, vacinacao, emBranco } = useContext(PrintContext)

    const contentToCopyRef = useRef(null);

    const copyRichTextFromDOM = () => {

        const elementToCopy = contentToCopyRef.current;

        if (elementToCopy) {
            const tempElement = document.createElement('div');
            tempElement.appendChild(elementToCopy.cloneNode(true));
            tempElement.innerHTML +=
                `<p><span style="font-family: Tahoma; font-size: 10pt">+++++
            ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            </span></p>`;
            document.body.appendChild(tempElement);
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(tempElement);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();
            document.body.removeChild(tempElement);
        }
    }

    return (
        <>
            <Box
                sx={{
                    border: 1,
                    borderColor: 'black',
                    width: '35rem',
                    height: '45rem',
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
                    {clienteContext?.nome}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: "column",
                        gap: 0.5,
                        p: 0.5,
                        m: 0.5,
                        border: 0.5,
                        borderRadius: 1,
                        borderColor: "#42a5f5"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Tooltip title="Copiar" >
                            <IconButton
                                onClick={() => copyRichTextFromDOM()}
                                size="small"
                            >
                                <ContentCopyIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box
                        ref={contentToCopyRef}
                        sx={{
                            display: 'flex',
                            flexDirection: "column",
                            gap: 0.5
                        }}
                    >
                        {prescricoesSelecionadas.length > 0 && (
                            <BoxExterna>
                                {prescricoesSelecionadas?.map(p =>
                                    <PrescricaoBox
                                        key={p.indice}
                                        prescricao={p}
                                        handlePrescricaoDelete={handlePrescricaoDelete}
                                    />
                                )}
                            </BoxExterna>
                        )}
                        {comentario && (
                            <BoxExterna>
                                {comentario}
                            </BoxExterna>
                        )}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: "column",
                                gap: 0.5
                            }}
                        >
                            {requisicoes?.map(r =>
                                <RequisicaoBox
                                    requisicao={r}
                                    handleRequisicaoEdit={handleRequisicaoEdit}
                                    key={r.indice}
                                />
                            )}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: "column",
                                gap: 0.5
                            }}
                        >
                            {vacinacao?.map(r =>
                                <VacinacaoBox
                                    vacinacao={r}
                                    key={r.indice}
                                />
                            )}
                        </Box>
                        <Box>
                            {emBranco?.map(r =>
                                <EmBranco
                                    embranco={r}
                                    handleEmBrancoEdit={handleEmBrancoEdit}
                                    key={r.indice}
                                />
                            )}
                        </Box>
                        <Box
                            sx={{
                                fontSize: 14,
                                height: '0rem',
                                fontFamily: "Tahoma",
                                visibility: 'hidden',
                            }}
                        >
                            Esse é um texto padrão
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Ditame