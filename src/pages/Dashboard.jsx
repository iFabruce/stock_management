import React from 'react'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'
// import '../assets/css/cs-skin-elastic.css'

import { useNavigate } from 'react-router-dom';



export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
       {/* <!-- Left Panel --> */}
    <aside id="left-panel" class="left-panel" style={{height: '100%'}}>
        <nav class="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active">
                        <a href="index.html"><i class="menu-icon fa fa-laptop"></i>Dashboard </a>
                    </li>
                    <li class="menu-title">UI elements</li>{/* <!-- /.menu-title --> */}
                    <li class="menu-item-has-children dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-cogs"></i>Components</a>
                        <ul class="sub-menu children dropdown-menu">                            <li><i class="fa fa-puzzle-piece"></i><a href="ui-buttons.html">Buttons</a></li>
                            <li><i class="fa fa-id-badge"></i><a href="ui-badges.html">Badges</a></li>
                            <li><i class="fa fa-bars"></i><a href="ui-tabs.html">Tabs</a></li>

                            <li><i class="fa fa-id-card-o"></i><a href="ui-cards.html">Cards</a></li>
                            <li><i class="fa fa-exclamation-triangle"></i><a href="ui-alerts.html">Alerts</a></li>
                            <li><i class="fa fa-spinner"></i><a href="ui-progressbar.html">Progress Bars</a></li>
                            <li><i class="fa fa-fire"></i><a href="ui-modals.html">Modals</a></li>
                            <li><i class="fa fa-book"></i><a href="ui-switches.html">Switches</a></li>
                            <li><i class="fa fa-th"></i><a href="ui-grids.html">Grids</a></li>
                            <li><i class="fa fa-file-word-o"></i><a href="ui-typgraphy.html">Typography</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-table"></i>Tables</a>
                        <ul class="sub-menu children dropdown-menu">
                            <li><i class="fa fa-table"></i><a href="tables-basic.html">Basic Table</a></li>
                            <li><i class="fa fa-table"></i><a href="tables-data.html">Data Table</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-th"></i>Forms</a>
                        <ul class="sub-menu children dropdown-menu">
                            <li><i class="menu-icon fa fa-th"></i><a href="forms-basic.html">Basic Form</a></li>
                            <li><i class="menu-icon fa fa-th"></i><a href="forms-advanced.html">Advanced Form</a></li>
                        </ul>
                    </li>

                    <li class="menu-title">Icons</li>{/* <!-- /.menu-title --> */}

                    <li class="menu-item-has-children dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-tasks"></i>Icons</a>
                        <ul class="sub-menu children dropdown-menu">
                            <li><i class="menu-icon fa fa-fort-awesome"></i><a href="font-fontawesome.html">Font Awesome</a></li>
                            <li><i class="menu-icon ti-themify-logo"></i><a href="font-themify.html">Themefy Icons</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="widgets.html"> <i class="menu-icon ti-email"></i>Widgets </a>
                    </li>
                    <li class="menu-item-has-children dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-bar-chart"></i>Charts</a>
                        <ul class="sub-menu children dropdown-menu">
                            <li><i class="menu-icon fa fa-line-chart"></i><a href="charts-chartjs.html">Chart JS</a></li>
                            <li><i class="menu-icon fa fa-area-chart"></i><a href="charts-flot.html">Flot Chart</a></li>
                            <li><i class="menu-icon fa fa-pie-chart"></i><a href="charts-peity.html">Peity Chart</a></li>
                        </ul>
                    </li>

                    <li class="menu-item-has-children dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-area-chart"></i>Maps</a>
                        <ul class="sub-menu children dropdown-menu">
                            <li><i class="menu-icon fa fa-map-o"></i><a href="maps-gmap.html">Google Maps</a></li>
                            <li><i class="menu-icon fa fa-street-view"></i><a href="maps-vector.html">Vector Maps</a></li>
                        </ul>
                    </li>
                    <li class="menu-title">Extras</li>{/* <!-- /.menu-title --> */}
                    <li class="menu-item-has-children dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-glass"></i>Pages</a>
                        <ul class="sub-menu children dropdown-menu">
                            <li><i class="menu-icon fa fa-sign-in"></i><a href="page-login.html">Login</a></li>
                            <li><i class="menu-icon fa fa-sign-in"></i><a href="page-register.html">Register</a></li>
                            <li><i class="menu-icon fa fa-paper-plane"></i><a href="pages-forget.html">Forget Pass</a></li>
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
      <div class="orders">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card " >
                                <div class="card-body">
                                    <h4 class="box-title">Orders </h4>
                                </div>
                                <div class="card-body--">
                                    <div class="table-stats order-table ov-h">
                                        <table class="table ">
                                            <thead>
                                                <tr>
                                                    <th class="serial">REF</th>
                                                    <th class="avatar">Image</th>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Product</th>
                                                    <th>Quantity</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="serial">1.</td>
                                                    <td class="avatar">
                                                        <div class="round-img">
                                                            <a href="#"><img class="rounded-circle" src="images/avatar/1.jpg" alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td> #5469 </td>
                                                    <td>  <span class="name">Louis Stanley</span> </td>
                                                    <td> <span class="product">iMax</span> </td>
                                                    <td><span class="count">231</span></td>
                                                    <td>
                                                        <span class="badge badge-complete">Complete</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="serial">2.</td>
                                                    <td class="avatar">
                                                        <div class="round-img">
                                                            <a href="#"><img class="rounded-circle" src="images/avatar/2.jpg" alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td> #5468 </td>
                                                    <td>  <span class="name">Gregory Dixon</span> </td>
                                                    <td> <span class="product">iPad</span> </td>
                                                    <td><span class="count">250</span></td>
                                                    <td>
                                                        <span class="badge badge-complete">Complete</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="serial">3.</td>
                                                    <td class="avatar">
                                                        <div class="round-img">
                                                            <a href="#"><img class="rounded-circle" src="images/avatar/3.jpg" alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td> #5467 </td>
                                                    <td>  <span class="name">Catherine Dixon</span> </td>
                                                    <td> <span class="product">SSD</span> </td>
                                                    <td><span class="count">250</span></td>
                                                    <td>
                                                        <span class="badge badge-complete">Complete</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="serial">4.</td>
                                                    <td class="avatar">
                                                        <div class="round-img">
                                                            <a href="#"><img class="rounded-circle" src="images/avatar/4.jpg" alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td> #5466 </td>
                                                    <td>  <span class="name">Mary Silva</span> </td>
                                                    <td> <span class="product">Magic Mouse</span> </td>
                                                    <td><span class="count">250</span></td>
                                                    <td>
                                                        <span class="badge badge-pending">Pending</span>
                                                    </td>
                                                </tr>
                                                <tr class=" pb-0">
                                                    <td class="serial">5.</td>
                                                    <td class="avatar pb-0">
                                                        <div class="round-img">
                                                            <a href="#"><img class="rounded-circle" src="images/avatar/6.jpg" alt=""/></a>
                                                        </div>
                                                    </td>
                                                    <td> #5465 </td>
                                                    <td>  <span class="name">Johnny Stephens</span> </td>
                                                    <td> <span class="product">Monitor</span> </td>
                                                    <td><span class="count">250</span></td>
                                                    <td>
                                                        <span class="badge badge-complete">Complete</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div> 
                        </div>  

                       
                    </div>
                </div>
      </div>
    </div>
  )
}
