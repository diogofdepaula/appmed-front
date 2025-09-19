import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { Box } from '@mui/material';
import { format } from "date-fns";
import { useContext, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { LoginContext, PrintContext } from '../../../App';
import { DefaultButton } from '../../../components/appbar/atendimento/buttons';
import PrintJob from '../printjob';

export const ExecPrint = () => {

    // const { print } = useContext(AtendimentoNavigateContext)
    const { local } = useContext(LoginContext)
    const { prescricoesSelecionadas, lmesSelecionadas, atestadosSelecionados, operadora } = useContext(PrintContext)

    const componentRef = useRef()

    const SaveLastPrint = async () => {

        if (lmesSelecionadas.length > 0) {
            await lmesSelecionadas
                .map(novalme => ({ ...novalme, ultimaimpressao: format(new Date(), "yyyy-MM-dd") }))
                .forEach(lme =>
                    fetch(process.env.REACT_APP_API_URL + `/lmes/${lme.id}`, {
                        method: 'put',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(lme)
                    })
                )
        }

        if (prescricoesSelecionadas.length > 0 && prescricoesSelecionadas[0].id !== undefined) {
            await prescricoesSelecionadas
                .map(novapresc => ({ ...novapresc, ultimaimpressao: format(new Date(), "yyyy-MM-dd") }))
                .forEach(presc =>
                    fetch(process.env.REACT_APP_API_URL + `/prescricoes/${presc.id}`, {
                        method: 'put',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(presc)
                    })
                )
        }

        if (atestadosSelecionados.length > 0) {
            await atestadosSelecionados
                .map(novaatestado => ({ ...novaatestado, ultimaimpressao: format(new Date(), "yyyy-MM-dd") }))
                .forEach(atestado =>
                    fetch(process.env.REACT_APP_API_URL + `/atestados/${atestado.id}`, {
                        method: 'put',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(atestado)
                    })
                )
        }
    }

    const page = () => {
        if (lmesSelecionadas.length > 0) return '@page { size: A4 }'
        // Achei que dá menos trabalho virar a pagina e usar A4 em retrato
        // Se não teria que mudar para paisagem e para A4 toda hora
        if (operadora.razao !== '') return '@page { size: A4 }'  //'@page { size: A4 landscape }'
        if (local.cod === 'consultorio') return '@page { size: A5 }'
        return '@page { size: A4 }'
    }

    const handleClick = useReactToPrint({
        content: () => componentRef.current,
        pageStyle: page(),
        onAfterPrint: () => {
            SaveLastPrint()
        },
        removeAfterPrint: true,
        // If you are getting a blank page while setting removeAfterPrint to true, try setting it to false. This will tell the browser not to remove the iframe that we use to print, which it may be doing by mistake, especially on mobile browsers.
    })

    //  if (!print) return <></>

    return (
        <>
            <DefaultButton
                title={'Imprimir'}
                click={handleClick}
                icon={<ElectricBoltIcon />}
            />
            <Box
                sx={{
                    // display: 'none', 
                    // displayPrint: 'block',
                    position: "absolute",
                    top: "-1000000000px",
                }}
            >
                <div ref={componentRef}>
                    <Box
                        sx={{
                            display: 'block',
                            displayPrint: 'block',
                            color: "black",
                        }}
                    >
                        <PrintJob />
                    </Box>
                </div>
            </Box>
        </>
    )
}