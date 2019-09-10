import React from 'react';
import Page from './Page';
import { ReactBingmaps } from 'react-bingmaps';
import bing_map_api from '../../config/bing_map_api';

console.log("Bing map: ", ReactBingmaps);

const boundary = {
	"location":['chennai'],
	"option":{
	  entityType: 'PopulatedPlace'
	},
	"polygonStyle" :{
	  fillColor: 'rgba(161,224,255,0.4)',
	  strokeColor: '#a495b2',
	  strokeThickness: 2
	}
  };

export default () => (
	<Page background="#e5b24b">
		<div>chat list page</div>
		<div className="bingmap">
			<ReactBingmaps
				bingmapKey={bing_map_api}
				center={[13.0827, 80.2707]}
				mapTypeId = {"road"}
				navigationBarMode = {"compact"}
				boundary={boundary}
				style={{height: '100%'}}
			/>
		</div>
	</Page>
);
