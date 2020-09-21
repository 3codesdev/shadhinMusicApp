import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card from './Card';
import Data from './Data';

let tracks = Data.data.PodcastEpisode.data,
	radioTrakcs = [];
for(let i=1; i<6; i++){
	if((i+1) > tracks.length) break;
	radioTrakcs.push(tracks[i]);
}

const Radio = () => {
	return (
		<>
			<div className="radios">
				<h3 className="heading">Radio</h3>
				<OwlCarousel
					className="owl-carousel"
				    margin={30}
				    items={4}
				    autoplay={true}
				    dots={false}
				    nav={true}
				    loop
				>
				{radioTrakcs.map((val,index)=>{
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

export default Radio;