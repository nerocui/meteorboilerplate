import React from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import bing_map_api from '../../config/bing_map_api';
import PaypalBtn from 'react-paypal-checkout';
import KEYS from '../../config/keys';


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

const client = {
	sandbox:    KEYS.PAYPAL_API.client_id,
	production: KEYS.PAYPAL_API.client_id,
};

export default () => (
	<div>
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
		<PaypalBtn client={client} currency={'USD'} total={1.00} />
	</div>
);
