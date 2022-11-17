import {React} from 'react'
import { useState } from 'react';

import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Grid, Select,FormControl,MenuItem, TextField, TextareaAutosize, InputLabel} from '@mui/material'

import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';



function createData(ref, nom, image, prix) {
    return {ref, nom, image, prix };
  }
  
 
  
export default function ListeArticle() {
    const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const navigate = useNavigate();
  const rows = [
    createData('REF-001','Produit1', 'image', 1000),
    createData('REF-002','Produit1', 'image', 1000),
    createData('REF-003','Produit1', 'image', 1000),
    createData('REF-004','Produit1', 'image', 1000),
    createData('REF-005','Produit1', 'image', 1000)
  ];
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
        
      <Grid container spacing={0}>
        <Grid item md={8}>
            <Paper style={{width: '100%' , height:'100vh',padding: '5%'}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        
                    <TableCell align="center" style={{fontWeight:'600'}}>Référence</TableCell>
                    <TableCell align="center" style={{fontWeight:'600'}}>Nom</TableCell>
                    <TableCell align="center" style={{fontWeight:'600'}}>Image</TableCell>
                    <TableCell align="center" style={{fontWeight:'600'}}>Prix</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                
                    {rows.map((row) => (
                    <TableRow
                        key={row.ref}
                        md={{ '&:last-child td, &:last-child th': { border: 1 } }}
                        onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        
                        <TableCell align="center">{row.ref}</TableCell>
                        <TableCell align="center">{row.nom}</TableCell>
                        <TableCell align="center">{row.image}</TableCell>
                        <TableCell align="center">{row.prix}</TableCell>
                        <TableCell align="center"> <a href="#"><i class="fa-solid fa-pen-to-square"></i></a></TableCell>
                        <TableCell align="center"><a href="#"><i class="fa-solid fa-trash"></i></a></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            </Paper>
        </Grid>
        <Grid item md={4}>
            <Paper style={{width: '100%' , height:'100vh', padding: '10%'}}>
                {isHovering &&  
                            <div className='hovering-box' style={{width:'250px', height: '250px'}}>
                                <h4>REFERENCE XXX</h4> <br />
                                <TableContainer component={Paper}>
                <Table md={{ width: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        
                    <TableCell align="center" style={{fontWeight:'600'}}>Pointure</TableCell>
                    <TableCell align="center" style={{fontWeight:'600'}}>Stock disponible</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                
                   
                    <TableRow
                        md={{ '&:last-child td, &:last-child th': { border: 1 } }}
                        >
                        <TableCell align="center">38</TableCell>
                        <TableCell align="center">1</TableCell>
                      
                    </TableRow>
                    <TableRow
                        md={{ '&:last-child td, &:last-child th': { border: 1 } }}
                      > 
                        
                        <TableCell align="center">39</TableCell>
                        <TableCell align="center">12</TableCell>
                      
                    </TableRow>
                    <TableRow
                        md={{ '&:last-child td, &:last-child th': { border: 1 } }}
                      > 
                        
                        <TableCell align="center">40</TableCell>
                        <TableCell align="center">5</TableCell>
                      
                    </TableRow>
                
                </TableBody>
                </Table>
            </TableContainer>

                            </div>
                }
            </Paper>
        </Grid>
      </Grid>
      </div>
    </div>
    
  )
}
