define(["helper/print"], function (PrintHelper) {
    return {
        getHelloWorld: function () {
            return 'Hello World';
        },

        printHelloWorldToConsole: function() {
            PrintHelper.print(this.getHelloWorld());
        }
    };
});