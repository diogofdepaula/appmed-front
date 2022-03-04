import { useContext } from 'react'
import { ClienteCadastroContext } from '.'

const Content = () => {

    const { page } = useContext(ClienteCadastroContext)

    return page
}

export default Content