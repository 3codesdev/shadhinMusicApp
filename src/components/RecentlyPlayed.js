import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card from './Card';
import Data from './Data';

let tracks = Data.data.Track.data,
	recently = [];
for(let i=6; i<12; i++){
	if((i+1) > tracks.length) break;
	recently.push(tracks[i]);
}

const RecentlyPlayed = () => {
	return (
		<>
			<div className="recently-played">
				<h3 className="heading">Recently Played</h3>
				<OwlCarousel
					className="owl-carousel"
				    margin={30}
				    items={4}
				    autoplay={true}
				    dots={false}
				    nav={true}
				    loop
				>
				{recently.map((val,index)=>{
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

export default RecentlyPlayed;