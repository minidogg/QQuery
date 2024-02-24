
//index.js
var qquery = {
    "config":{
        
    }
}

//query.js
/**
 * Short hand query selector
 * @param {string} query - The query selector
 * @param {bool} multiple - Whether it should use querySelector or querySelectorAll. Default value is true.
 * @param {Element} el - The element to run the query selector on. Default value is the document
 */
function q(query,multiple=false,el=document){
    return multiple?el.querySelectorAll(query):el.querySelector(query);
};
/**
 * Short hand query selector from an element
 * @param {string} query - The query selector
 * @param {bool} multiple - Whether it should use querySelector or querySelectorAll. Default value is true.
 */
Element.prototype.q = function(query, multiple = false) {
    return q(query, multiple, this);
};


//rand.js
qquery.random = {}
qquery.random.hex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
qquery.random.int = (max,min)=>{return Math.floor(Math.random() * (max - min) ) + min;}
qquery.random.float = (max,min)=>{return Math.random() * (max - min)  + min;}

