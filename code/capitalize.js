const capitalize = (string) => {
    if (!string.length) return;
    
    return string[0].toUpperCase() + string.slice(1);
};

module.exports = capitalize