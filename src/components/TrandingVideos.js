import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card from './Card';
import Data from './Data';

let tracks = Data.data.Video.data,
	videos = [];
for(let i=6; i<10; i++){
	if((i+1) > tracks.length) break;
	videos.push(tracks[i]);
}

const TrandingVideos = () => {
	return (
		<>
			<div className="trending-videos">
				<h3 className="heading">Tranding Videos</h3>
				<OwlCarousel
					className="owl-carousel"
				    margin={30}
				    items={2}
				    autoplay={true}
				    dots={false}
				    nav={true}
				    loop
				>
				{videos.map((val,index)=>{
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

export default TrandingVideos;