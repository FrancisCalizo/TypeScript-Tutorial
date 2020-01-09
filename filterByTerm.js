"use strict";
function filterByTerm(input, searchTerm, lookupKey) {
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    if (!input.length)
        throw Error("input cannot be empty");
    if (!lookupKey)
        throw Error("lookupkey cannot be empty");
    var regex = new RegExp(searchTerm, "i");
    return input.filter(function (arrayElement) {
        return arrayElement[lookupKey].match(regex);
    });
}
// Typing Variables
var obj1 = { url: "String1" };
var obj2 = { url: "String2" };
var obj3 = { url: "String3" };
var arrOfLinks = [obj1, obj2, obj3];
var term = "java";
console.log(filterByTerm(arrOfLinks, term, "url"));
var link1 = {
    description: "TypeScript tutorial for beginners is a tutorial for all the JavaScript developers ...",
    id: 1,
    url: "www.valentinog.com/typescript/",
    language: "en"
};
