// since we excluded app.js we have to explicitly get app (for now just use global in app.js)


app.factory('variants', ['$resource', function($resource){
    return $resource('/api/variants');
}])