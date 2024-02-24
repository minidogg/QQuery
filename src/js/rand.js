/**
 * Random object, contains a bunch of functions related to Math.random() Accessible by qquery.random
 */
qquery.random = {}
/**
 * Creates a random hex value string
 * @param {number} size - How many characters long the string should be. 
 */
qquery.random.hex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

/**
 * Returns a random integer based on the min and max params.
 * @param {number} min - Smallest number the result can be
 * @param {number} max - Biggest number the result can be
 */
qquery.random.int = (min,max)=>{return Math.floor(Math.random() * (max - min) ) + min;}

/**
 * Returns a random float based on the min and max params.
 * @param {number} min - Smallest number the result can be
 * @param {number} max - Biggest number the result can be
 */
qquery.random.float = (min,max)=>{return Math.random() * (max - min)  + min;}

/**
 * Returns a random float/int based on the min and max params.
 * @param {number} min - Smallest number the result can be
 * @param {number} max - Biggest number the result can be
 */
qquery.rand = (min,max)=>{
    Number.isInteger(min)&&Number.isInteger(max)?qquery.random.int(min,max):qquery.random.float(min,max)
}