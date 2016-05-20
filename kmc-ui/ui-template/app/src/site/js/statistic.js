(function(document, window, $) {
	'use strict';

	$(document).ready(function() {
		Site.run();
	});
	// Example C3 Donut
	// ----------------
	(function() {
		var options = {
			data : {
				type : 'gauge'
			},
			size : {
				height : 80
			},
			color : {
				pattern : [ '#f44336', '#ff9800', '#00bcd4', '#4caf50' ], // the three color levels for the percentage values.
				threshold : {
					values : [ 55, 60, 65, 70 ]
				}
			},
			tooltip: {
				show: false
			}
		};
		var chart1 = c3.generate($.extend(true, {
			bindto : '#profit01',
			data : {
				columns : [ [ 'data', 57.22 ] ]
			}
		}, options));
		var chart2 = c3.generate($.extend(true, {
			bindto : '#profit02',
			data : {
				columns : [ [ 'data', 54.17 ] ]
			}
		}, options));
		var chart3 = c3.generate($.extend(true, {
			bindto : '#profit03',
			data : {
				columns : [ [ 'data', 59.57 ] ]
			}
		}, options));
		var chart4 = c3.generate($.extend(true, {
			bindto : '#profit04',
			data : {
				columns : [ [ 'data', 62.32 ] ]
			}
		}, options));
		var chart5 = c3.generate($.extend(true, {
			bindto : '#profit05',
			data : {
				columns : [ [ 'data', 60.43 ] ]
			}
		}, options));
		var chart6 = c3.generate($.extend(true, {
			bindto : '#profit06',
			data : {
				columns : [ [ 'data', 66.07 ] ]
			}
		}, options));
	})();
	
	(function() {
		var chart = c3.generate({
			bindto: '#chart',
		    data: {
		    	x: 'x',
		        columns: [
		            ['x', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
		            ['2010', 300, 350, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		            ['2110', 200, 245, 350, 150, 400, 250, 278, 345, 355, 277, 399, 421],
		            ['2320', 130, 100, 140, 200, 150, 50, 0, 0, 0, 0, 0, 0]
		        ],
		        types: {
		            '2010': 'area',
		            '2110': 'area',
		            '2320': 'area-spline'
		        }
		    },
		    axis: {
		    	x: { 
		    		tick: { values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'] }
		    	}
		    }
		});
	})();
	
	(function() {
		var chart = c3.generate({
			bindto: '#donut01',
		    data: {
		        columns: [
		            ['2010', 56272153.47],
		            ['2110', 26843680.04],
		            ['2320', 54227327.32]
		        ],
		        type : 'donut',
		        onclick: function (d, i) { console.log("onclick", d, i); },
		        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
		        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
		    },
		    donut: {
		        title: "Income"
		    }
		});
		var chart = c3.generate({
			bindto: '#donut02',
		    data: {
		        columns: [
		            ['2010', 572153.47],
		            ['2110', 243680.04],
		            ['2320', 427327.32]
		        ],
		        type : 'donut',
		        onclick: function (d, i) { console.log("onclick", d, i); },
		        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
		        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
		    },
		    donut: {
		        title: "Cost"
		    }
		});
		var chart = c3.generate({
			bindto: '#donut03',
		    data: {
		        columns: [
		            ['2010', 57],
		            ['2110', 66],
		            ['2320', 70]
		        ],
		        type : 'donut',
		        onclick: function (d, i) { console.log("onclick", d, i); },
		        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
		        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
		    },
		    donut: {
		        title: "Profit"
		    }
		});
	})();
})(document, window, $);
