const app = angular.module("todoListApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/browse-todos", {
        template: "<browse-todos></browse-todos>"
    })
    .otherwise({
        redirectTo: "/browse-todos"
    })
}]);

export { app };
