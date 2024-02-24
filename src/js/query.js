function q(query,multiple=false,el=document){
    return multiple?el.querySelectorAll(query):el.querySelector(query);
};
Element.prototype.q = function(query, multiple = false) {
    return q(query, multiple, this);
};
