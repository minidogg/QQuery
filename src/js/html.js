/**
 * Allows easy getting and setting of an elements innerHTML
 * @returns {InnerHTML} - Returns an elements innerHTML
 */
Element.prototype.html = function(html=undefined) {
    if(html!=undefined)this.innerHTML = html
    return this.innerHTML
};