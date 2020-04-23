(function () { 
    bifrost.Controller('ProyectoController', ProyectoController);
    ProyectoController.$inject = ['$scope'];
    function ProyectoController($scope){

        var vm = $scope;
        vm.nombre = 'eliud';

    };
})()