import React from 'react'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import '../assets/css/Commande.css'
import '../assets/css/Commande.css'
import Button from '../components/Button'
import { Input } from '@mui/material'
import { useNavigate } from 'react-router-dom';


const Commande = () => {
  const navigate = useNavigate();

  return (
    <div>
<aside id="left-panel" class="left-panel" style={{height: '100%'}}>
        <nav class="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" class="main-menu collapse navbar-collapse">
            <ul class="nav navbar-nav" style={{paddingTop: '10%'}}>
                    <li>
                        <a href="#" onClick={ () => navigate('/dashboard')}><i class="menu-icon fa fa-home"></i>General </a>
                    </li> <br />
                    <li >
                        <a href="#" onClick={ () => navigate('/ajoutArticle')}><i class="menu-icon fa fa-laptop"></i>Ajout Article </a>
                    </li><br />
                    <li >
                        <a href="#" onClick={ () => navigate('/etatStock')}><i class="menu-icon fa fa-bar-chart"></i>Etat stock</a>
                    </li><br />
                     <li >
                        <a href="#" onClick={ () => navigate('/listeArticle')}><i class="menu-icon fa fa-table"></i>Liste Article</a>
                    </li><br />

                    <li >
                        <a href="#" onClick={ () => navigate('/commande')}><i class="menu-icon fa fa-table"></i>Commande</a>
                    </li><br />
                   
                   
                    <li class="menu-item-has-children dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-th"></i>Forms</a>
                        <ul class="sub-menu children dropdown-menu">
                            <li><i class="menu-icon fa fa-th"></i><a href="forms-basic.html">Basic Form</a></li>
                            <li><i class="menu-icon fa fa-th"></i><a href="forms-advanced.html">Advanced Form</a></li>
                        </ul>
                    </li>
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
      <Grid container spacing={0}>
        <Grid item  md={6} >
          <div className='autocompletion'>
          <h2 id="title">Commander un ou des article(s):</h2> <br />
          <div id="search"><InputLabel >Recherchez ici vos articles:</InputLabel><br /> <TextField className="text-field"
              placeholder='ex: t-shirt...'
            //   value={text} 
            //   onChange={ e => onChangeHandler(e.target.value)}
            />
          {/* {suggests && suggests.map( (suggest,i) => 
            <div className="suggest-list" key={i} onClick={ () => onSuggestHandler(suggest.id,suggest.nom)}>{suggest.nom}</div>
          )}
       */}
           
            <p className='rounded' >Vetement noir</p> <br />
            <TextField
              label="Quantité"
              type="number"
            //   onChange={}
            /> 
            <Button text="Ajouter"
                //   onClick={submit}
            style={{width: '25%'}}/> 
            </div>
          </div>
        </Grid>
        <Grid item  md={6} >
          <div className='panier'>
            <h4>Panier</h4>
          <ul >
        {/* {panier && panier.map( pp =>  */}
          
          <li  style={{borderRadius: '5px'}}>  <div id="item-name"><p> Article 1</p><p> Prix:  2000 Ar</p></div> <div id="item-quantity"><p>Quantite</p>  <Input style={{background:'white',width:'70px', padding:'3%', height: '25px', marginTop:'5%'}} type="number" min="1"  
        //   value={pp.quantite} onChange={(e) => {dispatch(changeItemValue({id: pp.id, value: e.target.value}))} }
         />
          <a href="#" 
        //   onClick={ () => dispatch(deleteItem(pp.id))}
           style={{color: 'white'}}>Supprimer</a>
           
           
          </div>

          </li>  
        {/* )} */}
      </ul>
        <h5 style={{margin: '5%'}}>Total: 1000 Ar</h5>
          </div>
      <div className="button"><Button text="Valider"
    //   onClick={submit}
       style={{width: '25%'}}>  </Button></div>

        </Grid>
      </Grid>
      </div>
      
      </div>


        
         
    </div>
  )
}

export default Commande
