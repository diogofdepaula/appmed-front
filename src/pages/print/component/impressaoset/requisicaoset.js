import { Checkbox, Divider, FormControlLabel, List, ListItem, ListItemText } from "@mui/material"
import { useContext } from "react"
import { ImpressaoContext } from "../../../atendimento"

const RequisicaoSet = () => {

    const { impressao, setImpressao } = useContext(ImpressaoContext)

    const handleChangeCheckBox = (event) => {
        setImpressao({ ...impressao, [event.target.name]: event.target.checked })
    }

    return (
        <>
            <FormControlLabel
                control={
                    <Checkbox
                        color='primary'
                        name="requisicao"
                        checked={impressao?.requisicao}
                        onChange={handleChangeCheckBox}
                    />}
                label='Todas'
            />
            {impressao.requisicoes?.map((r, n) =>
                <div key={n}>
                    <List dense >
                        {r.selecionados.map((s, x) =>
                            <ListItem key={x}>
                                <ListItemText primary={s} />
                            </ListItem>
                        )}
                    </List>
                    <Divider />
                </div>
            )}
        </>
    )
}

export default RequisicaoSet