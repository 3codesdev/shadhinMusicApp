import React from 'react';
import logo from '../assets/img/logo.png';
import googlePlay from '../assets/img/gp.png';
import appStore from '../assets/img/as.png';

const SideBar = () => {
	return (
		<>
			    <div className="sidebar left-sidebar d-md-block">
		          <div className="logo">
		            <a href="/"><img src={logo} /></a>
		          </div>
		          <ul className="main-menu">
		            <li><a href="/" className="active"><i className="fa fa-home"></i> Home</a></li>
		            <li><a href="#!"><i className="fa fa-music"></i> My Music</a></li>
		            <li><a href="#!"><i className="fa fa-bullseye"></i> Podcast</a></li>
		            <li><a href="#!"><i className="fa fa-play-circle-o"></i> Video</a></li>
		          </ul>
		          <div className="upgrade">
		            <h3>Upgrade to Pro</h3>
		            <p>Ad-free, unlimited offline downloads and create playlist</p>
		            <a href="#!" className="waves-effect waves-light">Get Pro</a>
		          </div>
		          <div className="download">
		            <h3>Download the App</h3>
		            <a href="#!"><img src={googlePlay} /></a>
		            <a href="#!"><img src={appStore} /></a>
		          </div>
		          <div style={{"paddingBottom": "220px"}}></div>
		        </div>
		        <div className="mobile-menu d-block d-md-none">
		          <ul className="mobile-main-menu">
		            <li><a href="index.html" className="active"><i className="fa fa-home"></i>Home</a></li>
		            <li><a href="#!"><i className="fa fa-play-circle-o"></i>Video</a></li>
		            <li><a href="#!"><i className="fa fa-bullseye"></i>Podcast</a></li>
		            <li><a href="#!"><i className="fa fa-music"></i>My Music</a></li>
		            <li><a href="#!"><i className="fa fa-search"></i>Search</a></li>
		          </ul>
		        </div>
		</>
	)
}

export default SideBar;