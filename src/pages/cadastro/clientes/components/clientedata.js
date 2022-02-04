import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { format, parseISO } from 'date-fns';
import { ptBR } from "date-fns/locale";
import React, { useContext } from 'react';
import { ClientesContext } from '..';

const ClienteData = () => {

    const { clienteOnDuty } = useContext(ClientesContext)

    const date = clienteOnDuty.nascimento ? format(parseISO(clienteOnDuty.nascimento), "dd '/' MM '/' yyyy", { locale: ptBR }) : ''

    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {clienteOnDuty.nome}
                        </Typography>
                        {clienteOnDuty.nascimento && <p>Data de Nascimento: {date}</p>}
                        {clienteOnDuty.sexo
                            ? <p>Sexo: Masculino</p>
                            : <p>Sexo: Feminino</p>
                        }
                        <p>Peso: {clienteOnDuty.peso} Kg</p>
                        <p>Altura: {clienteOnDuty.altura}cm</p>
                        <p>Endereço: {clienteOnDuty.endereco}</p>
                        <p>Tefelone: {clienteOnDuty.telefone}</p>
                        <p>Celular: {clienteOnDuty.celular}</p>
                        <p>E-mail: {clienteOnDuty.email}</p>
                        <p>CNS: {clienteOnDuty.cns}</p>
                        <p>CPF: {clienteOnDuty.cpf}</p>
                        <p>Nome da mãe: {clienteOnDuty.mae}</p>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton size="large">
                        <EditIcon />
                    </IconButton>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default ClienteData