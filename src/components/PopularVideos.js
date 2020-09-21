import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card from './Card';
import Data from './Data';

let tracks = Data.data.Video.data,
	videos = [];
for(let i=1; i<6; i++){
	if((i+1) > tracks.length) break;
	videos.push(tracks[i]);
}

const PopularVideos = () => {
	return (
		<>
			<div className="popupar-videos">
				<h3 className="heading">Popular Videos</h3>
				<OwlCarousel
					className="owl-carousel"
				    margin={30}
				    items={4}
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

export default PopularVideos;