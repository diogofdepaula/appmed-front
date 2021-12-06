import { Box, Chip } from "@material-ui/core"

const UnitaryTips = ({ handleAddUnitaryTips, procedimentos, convenio }) => {

    const exames = [
        ["HMG", ["40304361", "202020380"],],
        ["VHS", ["40304370", "202020150"],],
        ["PCR", ["40308391", "202030083"],],
        ["TGO", ["40302504", "202010643"],],
        ["TGP", ["40302512", "202010651"],],
        ["Cr", ["40301630", "202010317"],],
    ]

    const sendParam = (param) => {
        let proc = procedimentos.filter(z => param.includes(z[0]))[0]
        handleAddUnitaryTips(proc)
    }

    return (
        <>
            {exames.map((e, i) =>
                <Box ml={1} key={i}>
                    <Chip
                        label={e[0]}
                        variant="outlined"
                        onClick={() => sendParam(e[1])}
                    />
                </Box>
            )}
        </>
    )
}

export default UnitaryTips