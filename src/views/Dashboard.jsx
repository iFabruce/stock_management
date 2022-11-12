import React from 'react'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';



function createData(client, ref, status, date) {
    return { client, ref, status, date };
  }
  
 
  
export default function Dashboard() {
  const navigate = useNavigate();
  const rows = [
    createData('Client 1', 'REF-001', 'En cours', '12/11/2022'),
    createData('Client 1','REF-002', 'En cours','12/11/2022'),
    createData('Client 1','REF-003', 'En cours', '12/11/2022'),
    createData('Client 1','REF-004', 'En cours', '12/11/2022'),
    createData('Client 1','REF-005', 'En cours', '12/11/2022')
  ];
  return (
    <div>
       {/* <!-- Left Panel --> */}
    <aside id="left-panel" class="left-panel" style={{height: '100%'}}>
        <nav class="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav" style={{paddingTop: '10%'}}>
                    <li>
                        <a href="index.html"><i class="menu-icon fa fa-home"></i>General </a>
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
        <div className="row">
        <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="stat-widget-five">
                                    <div class="stat-icon dib flat-color-1">
                                        <i class="pe-7s-cash">R</i>
                                    </div>
                                    <div class="stat-content">
                                        <div class="text-left dib">
                                            <div class="stat-text">$<span class="count">23569</span></div>
                                            <div class="stat-heading">Revenue</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="stat-widget-five">
                                    <div class="stat-icon dib flat-color-2">
                                        <i class="pe-7s-cart">S</i>
                                    </div>
                                    <div class="stat-content">
                                        <div class="text-left dib">
                                            <div class="stat-text"><span class="count">3435</span></div>
                                            <div class="stat-heading">Sales</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="stat-widget-five">
                                    <div class="stat-icon dib flat-color-3">
                                        <i class="pe-7s-browser">T</i>
                                    </div>
                                    <div class="stat-content">
                                        <div class="text-left dib">
                                            <div class="stat-text"><span class="count">349</span></div>
                                            <div class="stat-heading">Templates</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="stat-widget-five">
                                    <div class="stat-icon dib flat-color-4">
                                        <i class="pe-7s-users">C</i>
                                    </div>
                                    <div class="stat-content">
                                        <div class="text-left dib">
                                            <div class="stat-text"><span class="count">2986</span></div>
                                            <div class="stat-heading">Clients</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{fontWeight:'600'}}>Client</TableCell>
              <TableCell align="center" style={{fontWeight:'600'}}>Référence</TableCell>
              <TableCell align="center" style={{fontWeight:'600'}}>Status</TableCell>
              <TableCell align="center" style={{fontWeight:'600'}}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.ref}
                md={{ '&:last-child td, &:last-child th': { border: 1 } }}
              >
                <TableCell align="center">{row.client}</TableCell>
                <TableCell align="center">{row.ref}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  )
}
