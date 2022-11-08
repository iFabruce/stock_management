import React from 'react'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'



export default function Dashboard() {
  return (
    <div>
      	<div class="wrapper d-flex align-items-stretch">
			<nav id="sidebar">
		
				<div class="p-4 pt-5">
		  		<h1><a href="index.html" class="logo">USER</a></h1>
	        <ul class="navbar-nav" >
	          <li class="nav-item active">
                <input id="check01" type="checkbox" name="menu" />
                <label for="check01">Menu</label>
                <ul class="submenu">
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                </ul>
	          </li>
	          <li class="nav-item">
	              <a href="#">About</a>
	          </li>
	     
	          <li class="nav-item">
              <a href="#">Portfolio</a>
	          </li>
	          <li class="nav-item">
              <a href="#">Contact</a>
	          </li>
	        </ul>


	     
	      </div>
    	</nav>

      <div id="content" class="p-4 p-md-5 pt-5">
            <h1>CONTENU</h1>
      </div>
		</div>

    <script src="../assets/js/jquery.min.js"></script>
    <script src="../assets/js/popper.js"></script>
    <script src="../assets/js/bootstrap.min.js"></script>
    <script src="../assets/js/main.js"></script>
    <script>
      
    </script>
    </div>
  )
}
