var _ = require("underscore");
var StringUtil = require("./StringUtil.js");

var CodeBreakerGame = function (secretCode) {
    this.secretCode = secretCode;
    this._validateFormatCode(secretCode);
};

var validColors = ['R', 'A', 'M', 'V', 'N', 'I'];

CodeBreakerGame.prototype = {

    _isValidColor : function (color) {
        return !_.contains(validColors, color);
    },

    _throwInvalidInput : function () {
        throw new Error("Invalid input");
    },

    _validateCodeLength : function (code) {
        if (code.length !== 4) {
            this._throwInvalidInput();
        }
    },

    _validateAllColorsAreValid : function (code) {
        var invalidIndex = _.find(code.split(''), this._isValidColor);
        if (!_.isUndefined(invalidIndex)) {
            this._throwInvalidInput();
        }
    },

    _validateFormatCode : function (code) {
        this._validateCodeLength(code);
        this._validateAllColorsAreValid(code);
    },

    _countCorrectPositions : function (checkCode, secretCode) {
        var totalCorrectPositions = 0;
        for (var i = 0; i < checkCode.length; i++) {
            if (secretCode[i] === checkCode[i]) {
                secretCode[i] = undefined;
                totalCorrectPositions++;
            }
        }
        return totalCorrectPositions;
    },

    _countCorrectColors : function (checkCode, secretCode) {
        var total = 0;
        for (var i = 0; i < checkCode.length; i++) {
            var index = _.indexOf(secretCode, checkCode[i]);
            if (index != -1) {
                secretCode[index] = undefined;
                total++;
            }
        }
        return total;
    },

    check : function (code) {
        this._validateFormatCode(code);

        var secretCode = this.secretCode.split("");
        var checkCode = code.split("");

        return StringUtil.repeat("x", this._countCorrectPositions(checkCode, secretCode)) +
            StringUtil.repeat("*", this._countCorrectColors(checkCode, secretCode));
    }

};

module.exports = CodeBreakerGame;