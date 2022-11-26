const dot = function(v1, v2) {
    return v1.reduce((accumulator, currentValue, currentIndex) => {
	    return currentValue * v2[currentIndex] + accumulator;
	}, 0);
};

exports.dot = dot;
