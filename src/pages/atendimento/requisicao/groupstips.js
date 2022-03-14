import { Box, Chip } from "@mui/material"
import FormatText from "./formattext"

const GroupsTips = ({ handleAddGroupsTips, procedimentos, convenio }) => {

    const exames = [
        [
            "HOPCT",
            "Exames de controle",
            [
                // lista do TUSS
                "40304361", "40302504", "40302512", "40301630", "40304370", "40308391", "40316521",
                // lista do SIGTAP
                "202020380", "202010643", "202010651", "202010317", "202020150", "202030083", "202060250"
            ],  
        ],
        [
            "HOPCTEFPPU",
            "Exames de controle",
            [
                // lista do TUSS
                "40304361", "40302504", "40302512", "40301630", "40304370", "40308391", "40316521", "40311210", "40301761",
                // lista do SIGTAP
                "202020380", "202010643", "202010651", "202010317", "202020150", "202030083", "202060250", "202010724", "202050017"
            ],  
        ],
        [
            "LES",
            "Exames de controle",
            [
                // lista do TUSS
                "40304361", "40302504", "40302512", "40301630", "40304370", "40308391", "40316521", "40311210", "40301761", "40306062", "40306704", "40306712",
                // lista do SIGTAP
                "202020380", "202010643", "202010651", "202010317", "202020150", "202030083", "202060250", "202010724", "202050017", "202030121", "202030130", "202030270"  
            ],  
        ],
        [
            "LES24h",
            "Exames de controle",
            [
                // lista do TUSS
                "40304361", "40302504", "40302512", "40301630", "40304370", "40308391", "40316521", "40311210", "40301761", "40306062", "40306704", "40306712", "40311180",
                // lista do SIGTAP
                "202020380", "202010643", "202010651", "202010317", "202020150", "202030083", "202060250", "202010724", "202050017", "202030121", "202030130", "202030270", "202050114",
            ],  
        ],
    ]

    const sendParam = (paramA, paramB) => {
        let list = procedimentos.filter(z => paramB.includes(z[0])).map(y => FormatText(convenio[2], y))
        handleAddGroupsTips(paramA, list)
    }

    return (
        <>
            {exames.map((e, i) =>
                <Box ml={1} key={i}>
                    <Chip
                        label={e[0]}
                        variant="outlined"
                        onClick={() => sendParam(e[1], e[2])}
                    />
                </Box>
            )}
        </>
    )
}

export default GroupsTips