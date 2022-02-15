import React, { useContext } from 'react';
import { LoginContext, NavigateContext } from '../App';
import Atendimento from '../pages/atendimento';
import Clientes from '../pages/cadastro/clientes';
import Medicamentos from '../pages/cadastro/medicamentos';

const MainContent = () => {

    const { pageContentContext } = useContext(NavigateContext)

    const { local } = useContext(LoginContext)

    console.log(local);

    const GetContent = () => {

        switch (pageContentContext) {
            case 'atendimento':
                return <Atendimento />
            case 'clientes':
                return <Clientes />
            case 'medicamentos':
                return <Medicamentos />
            case 'refresh':
                return <div />
            default:
                // FAZER UMA PÁGINA INICIAL DEPOIS
                return <div>Futuramente página inicial</div>
        }
    }

    return <GetContent />
}

export default MainContent