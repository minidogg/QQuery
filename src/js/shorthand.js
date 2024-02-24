/**
 * Allows easy getting and setting of an elements innerHTML
 * @returns {InnerHTML} - Returns an elements innerHTML
 */
Element.prototype.html = function(html=undefined) {
    if(html!=undefined)this.innerHTML = html
    return this.innerHTML
};

/**
 * Allows easy looping over a list of elements
 * @param {Function} - Function to be called for each iteration. This function is provided 2 params, element, iteration. It can be stopped by returning true.
 * @returns {NodeList} - Returns the resulting NodeList
 */
NodeList.prototype.each = function(func) {
    let i = 0;
    Array.from(this).forEach((el)=>{
        if(func(el,i)==true)throw BreakException
        i++
    })
};