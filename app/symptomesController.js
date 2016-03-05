var kineApp = angular.module('kineliveApp');

kineApp.controller('SymptomesController', function ($scope) {
    $scope.patient = $scope.currentPatient;

    $scope.gotoTraitement = function() {
        $scope.setPage("traitements");
    }
});
