import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card from './Card';
import Data from './Data';

let tracks = Data.data.Track.data,
	picks = [];
for(let i=0; i<6; i++){
	if((i+1) > tracks.length) break;
	picks.push(tracks[i]);
}

const TopPicks = () => {
	return (
		<>
			<div className="top-picks">
				<h3 className="heading">Top Picks</h3>
				<OwlCarousel
					className="owl-carousel"
				    margin={30}
				    items={3}
				    autoplay={true}
				    dots={false}
				    nav={true}
				    loop
				>
				{picks.map((val,index)=>{
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

export default TopPicks;