export const FetchClienteOne = async (param) => {
    let cliente
    await fetch(process.env.REACT_APP_API_URL + '/clientes/' + param)
    .then((res) => {
        return res.data
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() =>{
        console.log("ação final qualquer");
    })

    return cliente
}