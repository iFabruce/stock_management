import React from 'react'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'
import '../assets/css/ajoutArticle.css'
import FormDialog from  '../components/FormDialog'


// import '../assets/css/cs-skin-elastic.css'

import { useNavigate } from 'react-router-dom';
import {Grid, Paper, Select,FormControl,MenuItem, TextField, TextareaAutosize, InputLabel, Button} from '@mui/material'
import { useState } from 'react';




export default function AjoutArticle() {
  const navigate = useNavigate();
  const [nom, setNom] = useState() 

  return (
    <div>
       {/* <!-- Left Panel --> */}
     <aside id="left-panel" class="left-panel" style={{height: '100%'}}>
        <nav class="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav" style={{paddingTop: '10%'}}>
                    <div class="dropdown">
                        <li class="dropbtn" onClick={ () => navigate('/dashboard')}> Général </li>
                    </div>
                    <div class="dropdown">
                        <li class="dropbtn" onClick={ () => navigate('/commande')}> Commandes </li>
                    </div>
                    <div class="dropdown">
                        <li class="dropbtn" onClick={ () => navigate('/etatStock')}> Etat stock </li>
                    </div>
                    <div class="dropdown">
                        <li class="dropbtn">Articles</li>
                        <div class="dropdown-content">
                            <li  onClick={ () => navigate('/ajoutArticle')}>Ajout article</li>
                            <li onClick={ () => navigate('/listeArticle')}>Liste article</li>
                        </div>
                    </div>
                    <div class="dropdown">
                        <li class="dropbtn">Clients</li>
                        <div class="dropdown-content">
                            <li  onClick={ () => navigate('/ajoutClient')}>Ajout client</li>
                            <li onClick={ () => navigate('/listeClient')}>Liste client</li>
                        </div>
                    </div>
                    <div class="dropdown">
                        <li class="dropbtn">Fournisseurs</li>
                        <div class="dropdown-content">
                            <li  onClick={ () => navigate('/ajoutFournisseur')}>Ajout fourniseur</li>
                            <li onClick={ () => navigate('/listeFournisseur')}>Liste fourniseur</li>
                        </div>
                    </div>

                </ul>
            </div>{/* <!-- /.navbar-collapse --> */}
        </nav>
    </aside>


    <div id="right-panel" className="right-panel">
    <header id="header" class="header">
            <div class="top-left">
                <div class="navbar-header">
                    <a class="navbar-brand" href="./"><img src="images/logo.png" alt="Logo"/></a>
                    <a class="navbar-brand hidden" href="./"><img src="images/logo2.png" alt="Logo"/></a>
                </div>
            </div>
            <div class="top-right">
                <div class="header-menu">
                    <div class="header-left">
                        <button class="search-trigger"><i class="fa fa-search"></i></button>
                        <div class="form-inline">
                            <form class="search-form">
                                <input class="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search"/>
                                <button class="search-close" type="submit"><i class="fa fa-close"></i></button>
                            </form>
                        </div>
                    </div>

                    <div class="user-area dropdown float-right">
                        <a href="#" class="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img class="user-avatar rounded-circle" src="images/admin.jpg" alt="User Avatar" />
                        </a>

                       
                    </div>

                </div>
            </div>
        </header>
        
      <div className="content">
        <Grid  container spacing={1}>
            <Grid item md={6} >
                <Paper className="item item-left">
                    <h4>Ajout Article</h4> <br />
                    <InputLabel>Nom</InputLabel>
                    <TextField
                        onChange={ e => setNom(e.target.value)}
                    /> <br/><br/>

                     <InputLabel>Description</InputLabel>
                    <TextareaAutosize
                        
                        onChange={e => {setNom(e.target.value)}}
                        minRows={3}
                        defaultValue=""
                        style={{ width: 250, opacity: '.8' }}
                    /><br/><br/>

                     <InputLabel>Prix</InputLabel>
                     <TextField
                       
                        onChange={ e => setNom(e.target.value)}
                    /><br/><br/>

                     <InputLabel>StockMin</InputLabel>
                     <TextField
                      
                        onChange={ e => setNom(e.target.value)}
                    /> <br />
                    <Button variant="contained" className="mui-button">
                      Enregistrer
                    </Button>
                </Paper>

            </Grid>
            <Grid item md={6}>
                <Paper className="item item-right">
                    <FormControl style={{marginTop: '2%', width:'230px'}}>
                        <InputLabel>Catégorie</InputLabel>
                        <Select
                            value={nom}
                            onChange={e => {setNom(e.target.value)}}
                        >
                            <MenuItem value={'A'}>A</MenuItem>
                            <MenuItem value={'B'}>B</MenuItem>
                        </Select>
                        <FormDialog title="Ajouter une nouvelle catégorie" label="Catégorie" text="nouvelle catégorie"/>
                    </FormControl> <br /> <br />

                    <FormControl style={{marginTop: '2%', width:'230px'}}>
                        <InputLabel>Marque</InputLabel>
                        <Select
                            value={nom}
                            onChange={e => {setNom(e.target.value)}}
                        >
                            <MenuItem value={'A'}>A</MenuItem>
                            <MenuItem value={'B'}>B</MenuItem>
                        </Select>
                        <FormDialog title="Ajouter une nouvelle marque" label="Marque" text="nouvelle marque"/>

                    </FormControl> <br /> <br />

                    <FormControl style={{marginTop: '2%', width:'230px'}}>
                        <InputLabel>Couleur</InputLabel>
                        <Select
                            value={nom}
                            onChange={e => {setNom(e.target.value)}}
                        >
                            <MenuItem value={'A'}>A</MenuItem>
                            <MenuItem value={'B'}>B</MenuItem>
                        </Select>
                        <FormDialog title="Ajouter une nouvelle couleur" label="Couleur" text="nouvelle couleur"/>

                    </FormControl> <br /> <br />
                </Paper>
            </Grid>
        </Grid>
      </div>
      
      </div>
    </div>
  )
}
