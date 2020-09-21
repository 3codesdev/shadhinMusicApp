import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card from './Card';
import Data from './Data';

let tracks = Data.data.Album.data,
	tranding = [];
for(let i=18; i<24; i++){
	if((i+1) > tracks.length) break;
	tranding.push(tracks[i]);
}

const Tranding = () => {
	return (
		<>
			<div className="trending-now">
				<h3 className="heading">Trending Now</h3>
				<OwlCarousel
					className="owl-carousel"
				    margin={30}
				    items={4}
				    autoplay={true}
				    dots={false}
				    nav={true}
				    loop
				>
				{tranding.map((val,index)=>{
					return (
						<Card 
							key={index}
							image={val.image.replace("<$size$>", "300")}
							title={val.title}
							link={val.PlayUrl}
							smallTitle={val.Artist}
						/>
					)
				})}
				</OwlCarousel>
			</div>
		</>
	)
}

export default Tranding;