/**
 * Extends element prototype with a function to make an element hidden
 * @returns {Element} - Returns the element, allowing for chaining of other utils.
 */
Element.prototype.hide = function() {
    this.style.visibility = "hidden";
    return this
};

/**
 * Extends element prototype with a function to make an element visible
 * @returns {Element} - Returns the element, allowing for chaining of other utils.
 */
Element.prototype.show = function() {
    this.style.visibility = "visible";
    return this
};

/**
 * Extends element prototype with a function to toggle an elements visiblity style.
 * @returns {Element} - Returns the element, allowing for chaining of other utils.
 */
Element.prototype.toggle = function() {
    this.style.visibility = this.style.visibility=="visible"?"hidden":"visible"
    return this
};
