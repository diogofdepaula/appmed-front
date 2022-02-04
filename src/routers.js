import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Clientes from './pages/cadastro/clientes'
//import MainClientes from './pages/cadastro/clientes/main';
import DetailsClientes from './pages/cadastro/clientes/details';
import InsertClientes from './pages/cadastro/clientes/insert';
import UpdateClientes from './pages/cadastro/clientes/update';

import MainMedicamentos from './pages/cadastro/medicamentos/main';
import DetailsMedicamentos from './pages/cadastro/medicamentos/details';
import InsertMedicamentos from './pages/cadastro/medicamentos/insert';
import UpdateMedicamentos from './pages/cadastro/medicamentos/update';

import Atendimento from './pages/atendimento'

// first commit
//import MainLMEs from './pages/atendimento/pages/lmes/main';
import InsertLMEs from './pages/atendimento/pages/lmes/insert'
import UpdateLMEs from './pages/atendimento/pages/lmes/update'

import MainPrescricoes from './pages/atendimento/pages/prescricoes/main';
import InsertPrescricoes from './pages/atendimento/pages/prescricoes/insert'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/clientes" component={Clientes} />
                <Route exact path="/insertcliente" component={InsertClientes} />
                <Route exact path="/clientes/:id" component={DetailsClientes} />
                <Route exact path="/updatecliente/:id" component={UpdateClientes} />

                <Route exact path="/medicamentos" component={MainMedicamentos} />
                <Route exact path="/insertmedicamento" component={InsertMedicamentos} />
                <Route exact path="/medicamentos/:id" component={DetailsMedicamentos} />
                <Route exact path="/updatemedicamento/:id" component={UpdateMedicamentos} />

                <Route exact path="/atendimento" component={Atendimento} />

                {/* id nesse caso é do id do cliente escolhido para atendimento */}
                {/* <Route exact path="/lmes/:idcliente" component={MainLMEs} /> */}
                <Route exact path="/lmes/:idcliente/insert" component={InsertLMEs} />
                <Route exact path="/lmes/:idcliente/:idlme" component={UpdateLMEs} />
                {/* quando for fazer o details fazer sejaoquefor/idcliente/idprescricao */}

                {/* id nesse caso é do id do cliente escolhido para atendimento */}
                <Route exact path="/prescricoes/:idcliente" component={MainPrescricoes} />
                <Route exact path="/prescricoes/:idcliente/insert" component={InsertPrescricoes} />
                {/* quando for fazer o details fazer sejaoquefor/idcliente/idprescricao */}


            </Switch>
        </BrowserRouter>
    );
}

