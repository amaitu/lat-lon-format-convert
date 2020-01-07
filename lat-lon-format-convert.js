function convert(polygon) {
    var replaced = polygon.replace('POLYGON((', '').replace('))', '');
    var arr = replaced.split(',');
    
    var cleanArr = arr.map(function(str) {
        return str.trim();
    });
    
    var arrArr = cleanArr.map(function(params) {
        return params.split(' ').reverse();
    });
    
    var polyString = arrArr
        .map(function(params) {
            return params.join(' ');
        }).join(',');
    var latLon = 'POLYGON((' + polyString + '))';

    return latLon;
};

var first =
    'POLYGON((-0.18402099609375 51.56271868908708,-0.25543212890625 51.428487548466144,0.08514404296875 51.47812216586771,-0.01922607421875 51.59514835541299,-0.18402099609375 51.56271868908708))';

convert(first);
