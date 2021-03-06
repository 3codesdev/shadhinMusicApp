import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card from './Card';
import Data from './Data';

let tracks = Data.data.Album.data,
	albums = [];
for(let i=0; i<6; i++){
	if((i+1) > tracks.length) break;
	albums.push(tracks[i]);
}

const Albums = () => {
	return (
		<>
			<div className="featured-playlist">
				<h3 className="heading">Featured Playlist</h3>
				<OwlCarousel
					className="owl-carousel"
				    margin={30}
				    items={4}
				    autoplay={true}
				    dots={false}
				    nav={true}
				    loop
				>
				{albums.map((val,index)=>{
					return (
						<Card 
							key={index}
							image={val.image.replace("<$size$>", "300")}
							title=""
							link={val.PlayUrl}
							smallTitle=""
						/>
					)
				})}
				</OwlCarousel>
			</div>
		</>
	)
}

export default Albums;