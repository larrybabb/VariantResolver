angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope, $resource) {
    $scope.variants = $resource('/api/variants').query();
})