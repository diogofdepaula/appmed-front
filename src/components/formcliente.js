import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, FormControlLabel, Radio, RadioGroup, TextField, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import { useState } from "react";
import ReactInputMask from "react-input-mask";

const FormCliente = ({ clienteEdit, handleChange, setClienteEdit }) => {

    const handleChangeNascimento = event => {

        if (event.target.value.length === 10) {
            let dia = event.target.value.slice(0, 2)
            let mes = event.target.value.slice(3, 5)
            let ano = event.target.value.slice(6, 10)
            let data = format(new Date(ano, mes - 1, dia), 'yyyy-MM-dd')
            setClienteEdit({ ...clienteEdit, nascimento: data })
        }
    }

    const handleNome = event => {

        const str = event.target.value
            .toLowerCase()
            .split(" ")
            .map(m => m.length > 2 ? m.charAt(0).toUpperCase() + m.slice(1) : m)
            .join(" ")
        setClienteEdit({ ...clienteEdit, [event.target.name]: str })
    }

    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <TextField
                autoFocus
                fullWidth
                name="nome"
                label="Nome completo"
                value={clienteEdit?.nome}
                onChange={handleChange}
            />
            <Box
                sx={{
                    my: 1,
                    display: 'grid',
                    gap: 1,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}
            >
                <RadioGroup
                    name='sexo'
                    onChange={handleChange}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexGrow: 1,
                            m: 1,
                            pl: 1,
                            justifyContent: 'center',
                        }}

                    >
                        <FormControlLabel
                            value="feminino"
                            control={<Radio />}
                            checked={clienteEdit?.sexo === "feminino"}
                            label="Feminino"
                        />
                        <FormControlLabel
                            value="masculino"
                            control={<Radio />}
                            checked={clienteEdit?.sexo === "masculino"}
                            label="Masculino"
                        />
                    </Box>
                </RadioGroup>
                <TextField
                    name="nascimento"
                    label="Data de Nascimento"
                    type="date"
                    //  variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={clienteEdit?.nascimento}
                    onChange={handleChange}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 1,
                    }}
                >
                    <ReactInputMask
                        mask="999"
                        value={clienteEdit?.peso}
                        maskChar=" "
                        onChange={handleChange}
                    >
                        {() => <TextField
                            name="peso"
                            label="Peso (Kg)"
                        />}
                    </ReactInputMask>
                    <ReactInputMask
                        mask="999"
                        value={clienteEdit?.altura}
                        maskChar=" "
                        onChange={handleChange}
                    >
                        {() => <TextField
                            name="altura"
                            label="Altura (cm)"
                        />}
                    </ReactInputMask>
                </Box>
                <ReactInputMask
                    mask="999.999.999-99"
                    value={clienteEdit?.cpf}
                    maskChar="_"
                    onChange={handleChange}
                >
                    {() => <TextField
                        name="cpf"
                        label="CPF"
                    />}
                </ReactInputMask>
                <ReactInputMask
                    mask="999.9999.9999.9999"
                    value={clienteEdit?.cns}
                    maskChar="_"
                    onChange={handleChange}
                >
                    {() => <TextField
                        name="cns"
                        label="CNS"
                    />}
                </ReactInputMask>
                <Accordion
                    expanded={expanded}
                    onChange={() => setExpanded(expanded ? false : true)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >Mais informações</AccordionSummary>
                    <Box
                        sx={{
                            display: 'flex',
                            flexGrow: 1,
                            flexWrap: 'wrap',
                            gap: 1,
                        }}
                    >

                        <ReactInputMask
                            mask="(99)99999-9999"
                            value={clienteEdit?.telefone}
                            maskChar="_"
                            onChange={handleChange}
                        >
                            {() => <TextField
                                name="telefone"
                                label="Telefone"
                            />}
                        </ReactInputMask>
                        <ReactInputMask
                            mask="(99)99999-9999"
                            value={clienteEdit?.celular}
                            maskChar="_"
                            onChange={handleChange}
                        >
                            {() => <TextField
                                name="celular"
                                label="Celular"
                            />}
                        </ReactInputMask>
                        <TextField
                            type="email"
                            name="email"
                            label="Email"
                            value={clienteEdit?.email}
                            onChange={handleChange}
                        />
                        <TextField
                            name="mae"
                            label="Nome da Mãe"
                            value={clienteEdit?.mae}
                            onChange={handleChange}
                        />
                        <TextField
                            name="endereco"
                            label="Endereço"
                            value={clienteEdit?.endereco}
                            onChange={handleChange}
                        />
                    </Box>
                </Accordion>
            </Box>
            <Divider variant="middle" />
            <Box
                sx={{
                    mt: 1,
                    display: 'flex',
                    flexGrow: 1,
                    gap: 1,
                }}
            >
                <TextField
                    label="Cole Nascimento"
                    onChange={(e) => handleChangeNascimento(e)}
                />
                <TextField
                    fullWidth
                    name="nome"
                    label="Cole nome em caixa alta"
                    onChange={(e) => handleNome(e)}
                />
            </Box>
        </>
    )
}

export default FormCliente