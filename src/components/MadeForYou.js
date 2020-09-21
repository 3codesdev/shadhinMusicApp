import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card from './Card';
import Data from './Data';

let tracks = Data.data.Album.data,
	albums = [];
for(let i=12; i<18; i++){
	if((i+1) > tracks.length) break;
	albums.push(tracks[i]);
}

const MadeForYou = () => {
	return (
		<>
			<div className="made-for-you">
				<h3 className="heading">Made for you</h3>
				<OwlCarousel
					className="owl-carousel"
				    margin={30}
				    items={3}
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
							title={val.title}
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

export default MadeForYou;