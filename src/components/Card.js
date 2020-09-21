import React from 'react';

const Card = (props) => {
	return (
		<>
            <div>
              <a href={props.link}>
                <img src={props.image} alt={props.title} />
                <div className="carousel-desc">
                  <h4>{props.title}</h4>
                  <p>{props.smallTitle}</p>
                </div>
              </a>
            </div>
		</>
	)
}

export default Card;