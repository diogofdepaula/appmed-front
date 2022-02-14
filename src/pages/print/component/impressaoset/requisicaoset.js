import { Checkbox, Divider, FormControlLabel, List, ListItem, ListItemText } from "@mui/material"
import { useContext } from "react"
import { PrintContext } from "../../../atendimento"

const RequisicaoSet = () => {

    const { requisicao, setRequisicao, requisicoes } = useContext(PrintContext)

    const handleChangeCheckBox = (event) => {
        setRequisicao(event.target.checked)
    }

    return (
        <>
            <FormControlLabel
                control={
                    <Checkbox
                        color='primary'
                        name="requisicao"
                        checked={requisicao}
                        onChange={handleChangeCheckBox}
                    />}
                label='Todas'
            />
            {requisicoes?.map((r, n) =>
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