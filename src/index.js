import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Register from './views/Register';
import AjoutArticle from './views/AjoutArticle';
import EtatStock from './views/EtatStock';
import ListeArticle from './views/ListeArticle';
import Commande from './views/Commande';
import AjoutClient from './views/AjoutClient';
import ListeClient from './views/ListeClient';
import ListeFournisseur from './views/ListeFournisseur';
import AjoutFournisseur from './views/AjoutFournisseur';








import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/ajoutArticle' element={<AjoutArticle/>}/>
        <Route path='/etatStock' element={<EtatStock/>}/>
        <Route path='/listeArticle' element={<ListeArticle/>}/>
        <Route path='/commande' element={<Commande/>}/>
        <Route path='/ajoutClient' element={<AjoutClient/>}/>
        <Route path='/listeClient' element={<ListeClient/>}/>
        <Route path='/ajoutFournisseur' element={<AjoutFournisseur/>}/>
        <Route path='/listeFournisseur' element={<ListeFournisseur/>}/>

      </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
