import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, List, ListItem, ListItemText, ListSubheader, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import React, { useCallback, useContext, useEffect } from 'react';
import { MedicamentosContext } from '..';

const MedicamentoData = () => {

    const { medicamentoOnDuty, medicamentoEdit, setMedicamentoEdit } = useContext(MedicamentosContext)

    const fetchData = useCallback(async () => {
        const res = await fetch(process.env.REACT_APP_API_URL + `/medicamentos/${medicamentoOnDuty.id}`)
        const json = await res.json();
        // tive que colocar no medicamentoEdit, mesmo que não Edit para
        // não ter que fazer uma nova busca caso venha a edita o medicamento
        setMedicamentoEdit(json);
    }, [medicamentoOnDuty, setMedicamentoEdit])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div>
            {medicamentoEdit &&
                <Card>
                    <CardActionArea>
                        <CardMedia
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {medicamentoEdit.farmaco}
                            </Typography>
                            {medicamentoEdit.abreviatura}
                            {medicamentoEdit.favorito && <p>Favorito</p>}
                            {medicamentoEdit.lme && <p>LME</p>}
                            {medicamentoEdit.controlado && <p>Controlado</p>}
                            <Card>
                                <CardContent>
                                    <List
                                        dense
                                        subheader={
                                            <ListSubheader component="div">
                                                Apresentações
                                            </ListSubheader>
                                        }
                                    >
                                        {medicamentoEdit.apresentacoes.map(ap =>
                                            <ListItem key={ap.id}>
                                                <ListItemText primary={ap.descricao + "  " + ap.uso} />
                                            </ListItem>
                                        )}
                                    </List>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <List
                                        dense
                                        subheader={
                                            <ListSubheader component="div">
                                                Nomes comerciais
                                            </ListSubheader>
                                        }
                                    >
                                        {medicamentoEdit.nomescomerciais.map(nc =>
                                            <ListItem key={nc.id}>
                                                <ListItemText primary={nc.nomefantasia} />
                                            </ListItem>
                                        )}
                                    </List>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <List
                                        dense
                                        subheader={
                                            <ListSubheader component="div">
                                                Posologias
                                            </ListSubheader>
                                        }
                                    >
                                        {medicamentoEdit.posologias.map(pp =>
                                            <ListItem key={pp.id}>
                                                <ListItemText
                                                    primary={pp.posologia}
                                                    secondary={pp.quantidade + " " + pp.forma}
                                                />
                                            </ListItem>
                                        )}
                                    </List>
                                </CardContent>
                            </Card>
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
            }
        </div>
    );
}

export default MedicamentoData