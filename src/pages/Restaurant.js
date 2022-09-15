import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
function Restaraunts({google,locations=[]}) {
    return <Map google={google} zoom={14}>
        {locations.map(
            coordinates=> <Marker position = {coordinates}/>
        )}
  </Map> 
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyA9L4nnJgTCXKWRCMoxBOzSqTBVNOE3Vu8')
  })(Restaraunts)