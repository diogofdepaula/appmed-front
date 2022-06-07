import { format } from 'date-fns';
import { ptBR } from "date-fns/locale";
import React, { useContext } from 'react';
import { PrintContext } from '../../../../../App';
import Fence from '../../../fence';
import Field from '../../../field';

const Linha11Relatorio = () => {

    const { database } = useContext(PrintContext)
    const date = format(database, "dd '/' MM '/' yyyy", { locale: ptBR })

    return (
        <>
            <Fence titulo={'Dados do solicitante'}>
                <Field
                    dados={{
                        titulo: 'Médico solicitante',
                        texto: 'Dr. Diogo F. de Paula',
                        largura: '20rem',
                    }}
                />
                <Field
                    dados={{
                        titulo: 'CRM',
                        texto: '23.838',
                      
                    }}
                />
                <Field
                    dados={{
                        titulo: 'UF',
                        texto: 'PR',
                        largura: '3.5rem',
                        alinhamento: 'center',
                    }}
                />
                 <Field
                    dados={{
                        titulo: 'Assinatura e carimbo',
                        texto: '',
                        grow: '1',
                    }}
                />
                <Field
                    dados={{
                        titulo: 'Data',
                        texto: date ? date : '',
                    }}
                />
            </Fence>
        </>
    )
}

export default Linha11Relatorio