// Always use an IIFE, i.e., (function() {})();
(function(){
    angular
        .module("ROUTE")                         // Call angular module
        .controller("Route4Ctrl", Route4Ctrl);  // angular.controller()
    Route4Ctrl.$inject = ["$state"];            // Dependecy injection

    function Route4Ctrl($state) {
        var vm = this;
    };

})();