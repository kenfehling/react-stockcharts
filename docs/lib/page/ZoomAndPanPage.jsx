'use strict';

var React = require('react');
var ContentSection = require('lib/content-section');
var Row = require('lib/row');
var Section = require('lib/section');

var CandleStickChartWithZoomPan = require('lib/charts/CandleStickChartWithZoomPan');

var ZoomAndPanPage = React.createClass({
	statics: {
		title: 'Zoom and Pan'
	},
	render() {
		return (
			<ContentSection title={ZoomAndPanPage.title}>
				<Row>
					<Section colSpan={2}>
						<CandleStickChartWithZoomPan data={this.props.someData} type="svg" />
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<aside dangerouslySetInnerHTML={{__html: require('md/ZOOM-AND-PAN')}}></aside>
					</Section>
				</Row>
			</ContentSection>
		);
	}
});

module.exports = ZoomAndPanPage;
