/**
 * 
 */
(function(document, window, $) {
    'use strict';
    //  2,725,444.47 

    (function() {
	var chart = c3.generate({
	    bindto : '#companies-bar',
	    data: {
	        x: 'x',
	        columns: [
	            ['x', '2015.001', '2015.002', '2015.003', '2015.004'],
	            ['2320', 546709, 257793, 515705, 0],
	            ['2320-p', 0.6844, 0.6583, 0.6953, 0]
	        ],
	        axes: {
	            '2320-p': 'y2',
	            '2010-p': 'y2'
	        },
	        types: {
	            '2320-p': 'spline',
	            '2010-p': 'spline',
	        },
	        type: 'bar',
	        colors: {
	            '2320-p': '#f44336',
	            '2010-p': '#ff9800',
	            '2320': '#4caf50',
	            '2010': '#00bcd4'
	        }
	    },
	    axis: {
	        y: { tick: { format: function(d) { return (d/1000).toString() + 'k'; } } },
	        x: { tick: { values: ['2015.001', '2015.002', '2015.003', '2015.004'] } },
	        y2 : {
    		    show : true,
    		    label : {
        			text : '毛利率',
        			position : 'outer-middle'
    		    },
    		    tick: {
        			format: function(d) {
        			    return (d * 100).toString().substring(0, 2) + "%";
        			}
    		    }
    		}
	    }
	});

	setTimeout(function () {
	    chart.load({
	        columns: [
	            ['2010', 27444.47, 11587.04, 24222.32, 0],
	            ['2010-p', 0.5724, 0.5616, 0.5957, 0]
	        ]
	    });
	}, 1000);
	
	$(".btn-group #cost").on('click', function() {
	    chart.load({
	        columns: [
		    ['2320', 93456.51, 42502.44, 84557.70, 0],
	            ['2010', 152143.91, 69258.49, 135891.13, 0]
	        ],
	        colors: {
	            '2320': '#FF4081',
	            '2010': '#E040FB'
	        }	    
	    });
	    $(".chart-panel-header h4").html("销售成本");
	});
	
	$(".btn-group #quantity").on('click', function() {
	    chart.load({
	        columns: [
	            ['2320', 535709, 256793, 515705, 0],
	            ['2010', 27244.47, 11587.04, 24222.32, 0]
	        ],
	        colors: {
	            '2320': '#4caf50',
	            '2010': '#00bcd4'
	        }
	    });
	    $(".chart-panel-header h4").html("销售数量");
	});
	
	$(".btn-group #income").on('click', function() {
	    chart.load({
	        columns: [
		    ['2320', 296245.92, 124563.38, 277572.14, 0],
	            ['2010', 355531.26, 157909.32, 336036.35, 0]
	        ],
	        colors: {
	            '2320': '#FF6D00',
	            '2010': '#64DD17'
	        }
	    });
	    $(".chart-panel-header h4").html("销售收入");
	});
    })();
})(document, window, $);