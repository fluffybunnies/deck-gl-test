import React from 'react'
import DeckGL, {LineLayer} from 'deck.gl';

export default React.createClass({

	getDefaultProps: function(){
		return {
		}
	}

	,getDefaultState: function(){
		return {
		}
	}

	,render: function(){
		// sample init data from https://uber.github.io/deck.gl/#/documentation/getting-started/using-with-react
		var viewport = {
			width: 500,
			height: 500,
			longitude: -100,
			latitude: 40.7,
			zoom: 3,
			pitch: 0,
			bearing: 0
		}
		var data = [
			{sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
		]
		//return <div>Hi! Im a map</div>
		return (<div className="replace-me-with-static-mapgl" style={{width:viewport.width+'px',height:viewport.height+'px',background:'#333'}}>
			<DeckGL {...viewport} layers={[
				new LineLayer({id: 'line-layer', data})
			]} />
		</div>)
	}
})

