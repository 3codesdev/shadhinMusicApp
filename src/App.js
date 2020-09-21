import React from 'react';
import "./assets/css/font-awesome.min.css";
import "./assets/css/feather.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/mdb.min.css";
import "./assets/css/normalize.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/style.css";
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import TopPicks from './components/TopPicks';
import Artists from './components/Artists';
import RecentlyPlayed from './components/RecentlyPlayed';
import Albums from './components/Albums';
import PopularPlaylist from './components/PopularPlaylist';
import MadeForYou from './components/MadeForYou';
import Tranding from './components/Tranding';
import PopularVideos from './components/PopularVideos';
import Radio from './components/Radio';
import TrandingVideos from './components/TrandingVideos';
import Footer from './components/Footer';

const App = () => {
	return (

	    <div className="container-fluid">
	      <section className="main-body">
			<SideBar/>
			<div className="sidebar right-sidebar">
				<Navbar />
				<div className="body-content">
					<TopPicks />
					<Artists />
					<RecentlyPlayed />
					<Albums />
					<PopularPlaylist />
					<MadeForYou />
					<Tranding />
					<PopularVideos />
					<Radio />
					<TrandingVideos />
					<Footer />
				</div>
			</div>
			</section>
		</div>
	)
}

export default App;