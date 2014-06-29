define(["helper/print"], function (print) {
    return {
        getHelloWorld: function () {
            return 'Hello World';
        },

        printHelloWorldToConsole: function() {
            print(this.getHelloWorld());
        }
    };
});