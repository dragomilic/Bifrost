(function(){
    bifrost.factory('HttpFactory', HttpFactory);
    HttpFactory.$inject = ['$http'];
    function HttpFactory($http) {
        return {
            Get:function(Ruta, Param, Config) {
              return $http.get(Ruta, Param, Config);
            },
            Head:function(Ruta, Param, Config) {
                return $http.head(Ruta, Param, Config);
            },
            Post:function(Ruta, Param, Config) {
                return $http.post(Ruta, Param, Config);
            },
            Put:function(Ruta, Param, Config) {
                return $http.put(Ruta, Param, Config);
            },
            Delete:function(Ruta, Param, Config) {
                return $http.delete(Ruta, Param, Config);
            },
            Jsonp:function(Ruta, Param, Config) {
                return $http.jsonp(Ruta, Param, Config);
            },
            Patch:function(Ruta, Param, Config) {
                return $http.patch(Ruta, Param, Config);
            }
        }
    };
})()