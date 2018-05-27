// Defines client-side routing
(function () {
    angular
        .module("ROUTE")
        .config(routeConfig)
    routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('route1', {
                url: '/route1'
                , templateUrl: './app/route1/route1.html'
                , controller: 'Route1Ctrl'
                , controllerAs: 'route1Ctrl'
            })
            .state('route2', {
                url: '/route2'
                , templateUrl: './app/route2/route2.html'
                , controller: 'Route2Ctrl'
                , controllerAs: 'route2Ctrl'
            })
            .state('route3', {
                url: '/route3'
                , templateUrl: './app/route3/route3.html'
                , controller: 'Route3Ctrl'
                , controllerAs: 'route3Ctrl'
            })
            .state('route4', {
                url: '/route4'
                , templateUrl: './app/route4/route4.html'
                , controller: 'Route4Ctrl'
                , controllerAs: 'route4Ctrl'
            })
            .state('route5', {
                url: '/route5'
                , templateUrl: './app/route5/route5.html'
                , controller: 'Route5Ctrl'
                , controllerAs: 'route5Ctrl'
            })
        $urlRouterProvider.otherwise("/route1");
    };

})();