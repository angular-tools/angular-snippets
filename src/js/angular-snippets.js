(function () {
    angular.module('angularSnippets', [])
        .directive('snippet', ['$compile', function ($compile) {
            return {
                restrict: 'A',
                scope: {snippet: '='},
                link: function ($scope, element, attrs) {
                    element.html($scope.snippet);
                    $compile(element.contents())($scope);
                }
            };
        }]);
})();