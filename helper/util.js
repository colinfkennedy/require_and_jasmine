define(["print"], function (print) {
    return {
        getHello: function () {
            return 'Hello World';
        },

        printHelloWorldToConsole: function() {
            print(this.getHello());
        }
    };
});