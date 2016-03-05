var kineApp = angular.module('kineliveApp');

kineApp.controller('PatientsController', function ($scope) {

    $scope.test = "PATIENTS";
    $scope.patients = $scope.patientService.getPatients()

    $scope.gotoPatient = function(patient) {
        console.log("Patient:", patient);
        $scope.setPatient(patient);
        $scope.setPage("profil");
    }

});
