var coloursize = function() {
    var coloursArray = [];
    for (i = 0; i < 24; i++) {
        var colour = '#' + Math.random().toString(16).substr(-6);
        var size = Math.floor(Math.random()*51);
        coloursizeobj = {"colour": colour, "size": size }
        coloursArray.push(coloursizeobj);
    }
    return coloursArray;
}();

module.exports = coloursize;
