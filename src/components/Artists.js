import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card from './Card';
import Data from './Data';

let tracks = Data.data.Artist.data,
	artists = [];
for(let i=0; i<6; i++){
	if((i+1) > tracks.length) break;
	artists.push(tracks[i]);
}

const Artists = () => {
	return (
		<>
			<div className="popular-artist">
				<h3 className="heading">Popular Artist</h3>
				<OwlCarousel
					className="owl-carousel"
				    margin={30}
				    items={4}
				    autoplay={true}
				    dots={false}
				    nav={true}
				    loop
				>
				{artists.map((val,index)=>{
					return (
						<Card 
							key={index}
							image={val.image.replace("<$size$>", "300")}
							title={val.title}
							link={val.PlayUrl}
							smallTitle={val.PlayCount + " fans"}
						/>
					)
				})}
				</OwlCarousel>
			</div>
		</>
	)
}

export default Artists;