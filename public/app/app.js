angular.module('app', []);

angular.module('app').controller('testCtrl', function($scope) {
    $scope.variants = [{
        name: 'c.450G>A',
        description: 'Variant 1'
    }, {
        name: 'c.512delAT',
        description: 'Variant 2'
    }];
})