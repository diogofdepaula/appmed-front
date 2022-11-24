import { useState } from 'react';

export const GetClienteComIncludes = async (clienteid) => {

    const [cliente, setCliente] = useState();

    await fetch(process.env.REACT_APP_API_URL + '/clientes/' + clienteid)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(data => {
            // isso inclui os includes Prescricao nas LMES sem precisar
            // fazer uma pesquisa duplicada no bando de dados
            const lmes = data.lmes.map(l => {
                let n = data.prescricoes.filter(p => p.lmeId === l.id)
                return { ...l, prescricoes: n }
            })
            return { ...data, lmes: lmes }
        }).then(cliente => {
            console.log('teste b');
            setCliente(cliente)
        })
        console.log('teste a');
    return cliente
}