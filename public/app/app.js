app = angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope, $resource, variants) {
    $scope.variants = $resource('/api/variants').query();
  
    $scope.submit = function() {
        var variant = {name: $scope.name, description: $scope.description}
        variants.save(variant);
        $scope.variants.push(variant);
   }
})