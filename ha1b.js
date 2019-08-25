var ha1b = {
    svgNS: 'http://www.w3.org/2000/svg',
};

window.addEventListener('load', function () {

    d0 = createBarChart('barchart', grade_percents);
    d0.render();
    d1 = createScatter('scatter0', drinks, 'Sugars (g)', 
	'Total Fat (g)', 'Calories', 'Protein (g)')
    d1.render();
    d2 = createScatter('scatter1', drinks, 'Caffeine (mg)', 
	'Calories', 'Sugars (g)', 'Sugars (g)')
    d2.render();
    d3 = createScatter('scatter2', drinks, 'Sodium (mg)', 
	'Caffeine (mg)', 'Calcium (fDV)', 'Vitamin C (fDV)')
    d3.render();

});


var createBarChart = function(elm, data) {
    // YOUR CODE HERE

    

    return {
	render: function() {
	    // YOUR CODE HERE
	}
    };
};


var createScatter = function(elm, data, rowx, rowy, clr, sze) {
    // YOUR CODE HERE
    

    return {
	render: function() {
	    // YOUR CODE HERE
	}
    };
};

