import React from 'react';
import { GoogleMapLoader, GoogleMap } from "react-google-maps";

export default (props) => {
	return (
		<GoogleMapLoader
			containerElement={ <div style={{height: '100%'}} />}
			googleMapElement={
				<GoogleMap defaultZoom={10} defaultCenter={{lat: props.lat, lng: props.lon}} />
				// dafault Center = two sets of curly braces bc first one indicates it's a js variable and the seoconf that it is a js object
			}	
		/>			
	);
}