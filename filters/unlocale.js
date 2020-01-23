/*
  Remove locale from Slug
*/
module.exports = function unlocale(value) {
    return value
        .replace(/\.[^/.]+$/, "")
};