define(["helper/util"], function(Util){
    describe("The getHelloWorld function", function() {
        it("returns the string Hello World", function() {
            expect(Util.getHelloWorld()).toBe("Hello World");
        });
    });
});