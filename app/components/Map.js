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
		var viewport = {
			width: 500,
			height: 500,
			latitude: 37.785164,
			longitude: -122.41669,
			zoom: 16.140440,
			bearing: -20.55991,
			pitch: 0
		}
		var data = [
			{sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
		]
		//return <div>Hi! Im a map</div>
		return (<div className="replace-me-with-static-mapgl" style={{width:viewport.width+'px',height:viewport.height+'px',background:'#333'}}>
			<DeckGL debug {...viewport} layers={[
				new LineLayer({ id:'line-layer', data:data })
			]} />
		</div>)
	}
})

