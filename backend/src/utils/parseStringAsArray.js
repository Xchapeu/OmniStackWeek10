module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim());
    //split corta string em cada virgula, trim retira os espaçamentos.
};