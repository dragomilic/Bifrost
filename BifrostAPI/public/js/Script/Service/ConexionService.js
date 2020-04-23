(function(){
    bifrost.service('ConexionService', ConexionService);
    ConexionService.$inject = ['HttpFactory'];
    function ConexionService(HttpFactory) {
        var vm = this;
        
        function GetRuta(Controller, Accion) {
            return '../'+Controller+'/'+Accion;
        }

        vm.Get = function (Controller, Accion, Param, Config) {
            let ruta = GetRuta(Controller, Accion);
          return HttpFactory.Get(ruta, Param, Config);
        }
        vm.Head = function (Controller, Accion, Param, Config) {
            let ruta = GetRuta(Controller, Accion);
          return HttpFactory.Head(ruta, Param, Config);
        }
        vm.Post = function (Controller, Accion, Param, Config) {
            let ruta = GetRuta(Controller, Accion);
          return HttpFactory.Post(ruta, Param, Config);
        }
        vm.Put = function (Controller, Accion, Param, Config) {
            let ruta = GetRuta(Controller, Accion);
          return HttpFactory.Put(ruta, Param, Config);
        }
        vm.Delete = function (Controller, Accion, Param, Config) {
            let ruta = GetRuta(Controller, Accion);
          return HttpFactory.Delete(ruta, Param, Config);
        }
        vm.JsonP = function (Controller, Accion, Param, Config) {
            let ruta = GetRuta(Controller, Accion);
          return HttpFactory.Jsonp(ruta, Param, Config);
        }
        vm.Patch = function (Controller, Accion, Param, Config) {
            let ruta = GetRuta(Controller, Accion);
          return HttpFactory.Patch(ruta, Param, Config);
        }

    };
})()