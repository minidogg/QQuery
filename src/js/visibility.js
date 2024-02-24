/**
 * Extends element prototype with a function to make an element hidden
 */
Element.prototype.hide = function() {
    this.style.visibility = "hidden";
};

/**
 * Extends element prototype with a function to make an element visible
 */
Element.prototype.show = function() {
    this.style.visibility = "visible";
};

/**
 * Extends element prototype with a function to toggle an elements visiblity style.
 */
Element.prototype.toggle = function() {
    this.style.visibility = this.style.visibility=="visible"?"hidden":"visible"
};
