
//index.js
var qquery = {
    "config":{
        
    }
}

//query.js
function q(query,multiple=false,el=document){
    return multiple?el.querySelectorAll(query):el.querySelector(query);
};
Element.prototype.q = function(query, multiple = false) {
    return q(query, multiple, this);
};


//genRanHex.js
qquery.genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

