/**
 * Extends element prototype with a function to make an element hidden
 * @returns {Element} - Returns the element, allowing for chaining of other utils.
 * @param {ms} - The amount of time before it goes back to the previous state, if this value is 0 the state won't revert.
 */
Element.prototype.hide = function(ms=0) {
    let state = this.style.visibility
    this.style.visibility = "hidden";
    try{
        return this
    }finally{
        if(ms>0)setTimeout(()=>{this.style.visibility=state},ms)
    }
};

/**
 * Extends element prototype with a function to make an element visible
 * @returns {Element} - Returns the element, allowing for chaining of other utils.
 */
Element.prototype.show = function(ms=0) {
    let state = this.style.visibility
    this.style.visibility = "visible";
    try{
        return this
    }finally{
        if(ms>0)setTimeout(()=>{this.style.visibility=state},ms)
    }
};

/**
 * Extends element prototype with a function to toggle an elements visiblity style.
 * @returns {Element} - Returns the element, allowing for chaining of other utils.
 */
Element.prototype.toggle = function(ms=0) {
    let state = this.style.visibility
    this.style.visibility = this.style.visibility=="visible"?"hidden":"visible"
    try{
        return this
    }finally{
        if(ms>0)setTimeout(()=>{this.style.visibility=state},ms)
    }
};
