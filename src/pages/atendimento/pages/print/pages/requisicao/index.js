import { Box, Grid } from "@material-ui/core"
import PageA4 from "../component/pagea4"

const Requisicao = () => {

    return (
        <>
            <PageA4>
                <Box height={1} width={1} p={1} border={5} borderColor={"black"}>
                    <Grid container direction="column" justify="space-between" style={{ height: "100%" }}>
                        <Grid container item>
                            fsdfds
                        </Grid>
                        <Grid container item xs>
                            fdsfds
                        </Grid>
                        <Grid container item >
                            sdfdsf
                        </Grid>
                    </Grid>
                </Box>
            </PageA4>
        </>
    )
}

export default Requisicao