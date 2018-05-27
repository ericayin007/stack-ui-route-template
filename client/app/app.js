// Always use an IIFE, i.e., (function() {})();
(function () {
    // Creates a new angular module
    angular
        .module("ROUTE", [
            "ngMessages"    // The ngMessages module provides a simple way to show/hide error messages within your form
            , "ngAnimate"   // ngAnimate module supports both CSS-based and JS-based animations via callback hooks
            , "ui.router"   // ui-router is a client-side Single Page Application routing framework for AngularJS
        ]);
})();