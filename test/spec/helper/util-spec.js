define(["helper/util", "helper/print"], function(Util, Print){
    describe("The getHelloWorld function", function() {
        it("returns the string Hello World", function() {
            expect(Util.getHelloWorld()).toBe("Hello World");
        });
    });

    describe("The printHelloWorldToConsole function", function(){
        it("sends the string Hello World to the print helper", function() {
            spyOn(Print, 'print');
            Util.printHelloWorldToConsole();
            expect(Print.print).toHaveBeenCalledWith("Hello World");
        });
    })
});