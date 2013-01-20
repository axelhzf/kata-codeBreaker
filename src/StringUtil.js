var StringUtil = function () {

};

StringUtil.repeat = function (str, n) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result = result + str;
    }
    return result;
};

module.exports = StringUtil;