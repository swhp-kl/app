var kineApp = angular.module('kineliveApp', ['ngTouch', 'ngRoute']);

var patients = [
    {
        firstName: "Jean",
        lastName: "Dupond",
        nextMeeting: new Date(),
        age: 43,
        pathology: "Parkinson",
        profilImage: "img/profils/generic-h.png"
    },
    {
        firstName: "Irène",
        lastName: "Larrivé",
        nextMeeting: new Date(),
        age: 88,
        pathology: "Parkinson",
        profilImage: "img/profils/generic-f.png"
    }

];

kineApp.controller('KineliveController', function ($scope) {
    $scope.page = "home";
    $scope.currentPatient = patients[0];

    $scope.setPage = function(pageName) {
        $scope.page = pageName;
    }

    $scope.setPatient = function(patient) {
        $scope.currentPatient = patient;
    }

    $scope.patientService = new PatientService();
});


function PatientService() {
}

PatientService.prototype.getPatients = function() {
    return patients;
};
