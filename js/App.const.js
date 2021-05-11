const app = angular.module("todoListApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/browse-todos", {
        template: "<browse-todos></browse-todos>"
    })
    .when("/add-todos", {
        template: "<add-todos></add-todos>"
    })
    .when("/completed-todos", {
        template: "<completed-todos></completed-todos>"
    })
    .otherwise({
        redirectTo: "/browse-todos"
    })
}]);

export { app };
