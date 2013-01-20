var CodeBreakerGame = require("../src/CodeBreakerGame");

describe("Code Breaker", function () {

    var game;

    beforeEach(function () {
        game = new CodeBreakerGame("RAMV");
    });

    it("should throw exception if invalid secret code", function () {
        expect(function () {
            game = new CodeBreakerGame("YNYI");
        }).toThrow(new Error("Invalid input"));
    });

    it("should create a game", function () {
        expect(game).not.toBeNull();
    });

    it("should throw exception if invalid input", function () {
        expect(function () {
            game.check("ABCD");
        }).toThrow(new Error("Invalid input"));
    });

    it("should returns * when colors one color is correct", function () {
        expect(game.check("IIIR")).toEqual("*");
    });

    it("should returns ** when two colors are correct", function () {
        expect(game.check("MIIR")).toEqual("**");
    });

    it("should not count repeated colors", function () {
        expect(game.check("IRIR")).toEqual("*");
    });

    it("should return x when a color is correct and is in correct position", function () {
        expect(game.check("RIII")).toEqual("x");
    });

    it("should return first the correct position and then the correct colors", function () {
        expect(game.check("RMAV")).toEqual("xx**");
    });

});