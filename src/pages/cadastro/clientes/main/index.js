import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, IconButton, List, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { ClienteCadastroContext, ClienteNavigateContext } from '..';
import DataCharging from '../../../../components/datacharging';
import ListItemsClientes from '../../../../components/listitemsclientes';

const ClienteMain = () => {

	const { setClienteOnDuty } = useContext(ClienteCadastroContext)
	const { setPageForm } = useContext(ClienteNavigateContext)
	const [clientes, setClientes] = useState([])
	const [clientesfiltrados, setClientesFiltrados] = useState([])
	const [dataCharging, setDataCharging] = useState(false)

	const fetchData = async () => {
		const res = await fetch(process.env.REACT_APP_API_URL + `/clientes/allfit`)
		const json = await res.json()
		json.sort((a, b) => a.nome.localeCompare(b.nome))
		if (res.ok) {
			setDataCharging(false)
		}
		setClientes(json);
		setClientesFiltrados(json)
	}

	const filterClientes = event => {

		let filtro = [...clientes].filter(w =>
			w.nome.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ||
			w.nascimento.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
		)

		if (filtro.length === 0) {
			filtro.push({
				id: 0,
				nome: "nenhum cliente encontrado"
			})
		}
		setClientesFiltrados(filtro)
	}

	const handleListItem = (param) => {
		setClienteOnDuty(param)
		setPageForm()
	}

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					bgcolor: 'background.paper',
					borderRadius: 1,
					flexGrow: 1,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'flex-start',
						flexDirection: 'column',
						p: 1,
						m: 1,
						bgcolor: 'background.paper',
						borderRadius: 1,
						flexGrow: 1,
					}}
				>
					<Box
						sx={{
							display: 'flex',
							width: 1,
							gap: 1,
						}}
					>
						<IconButton
							color="inherit"
							onClick={() => {
								setDataCharging(true)
								fetchData()}
							}
						>
							<RefreshIcon />
						</IconButton>
						<TextField
							fullWidth
							label={dataCharging ? "Carregando dados" : "Procurar cliente teste"}
							variant="outlined"
							onChange={filterClientes}
						/>
					</Box>
					<DataCharging charge={dataCharging} />
					<List
						component="nav"
						sx={{
							width: '100%',
							backgroundColor: "#fff",
							borderRadius: 4,
						}}
					>
						<ListItemsClientes
							clientesfiltrados={clientesfiltrados}
							handleListItem={handleListItem}
						/>
					</List>
				</Box>
			</Box>
		</>
	)
}

export default ClienteMain