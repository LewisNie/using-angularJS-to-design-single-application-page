app.factory('myService',['$http',function($http,$timeout){
    return $http.get('').success(function(data){
        return data;
    }).error(function(err){
        return err;
    });
}]);
