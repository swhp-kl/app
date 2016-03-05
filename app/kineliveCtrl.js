var kineApp = angular.module('kineliveApp', ['ngTouch', 'ngSanitize']);

var patients = [
    {
        firstName: "Jean",
        lastName: "Dupond",
        nextMeeting: new Date(2016, 3, 1, 10, 00),
        age: 43,
        address: "8 rue Daguerre, 75014 Paris",
        pathology: "Parkinson",
        profilImage: "img/profils/generic-h.png"
    },
    {
        firstName: "Irène",
        lastName: "Larrivé",
        nextMeeting: new Date(2016, 3, 1, 10, 30),
        age: 88,
        pathology: "Parkinson",
        address: "342 av du Maine, 75014 Paris",
        profilImage: "img/profils/generic-f.png"
    }

];

kineApp.controller('KineliveController', function ($scope) {
    $scope.page = "home";
    $scope.currentPatient = patients[0];
    $scope.pageTitle = "";

    $scope.setPage = function(pageName) {
        $scope.page = pageName;
        console.log("set page:", pageName);
        switch (pageName) {
            case "patients":
                $scope.setPageTitle("Vos patients");
                break;
            case "profil":
                $scope.setPageTitle("Dossier patient");
                break;
            case "outils":
                $scope.setPageTitle("Vos outils");
                break;
            case "symptomes":
                $scope.setPageTitle("Symptômes");
                break;
            case "traitements":
                $scope.setPageTitle("Exercices");
                break;

            default:
                $scope.setPageTitle("");
        }
    };

    $scope.swipeBack= function() {
        console.log("swipe back");
        switch ($scope.page) {
            case "patients":
                $scope.setPage("home");
                break;
            case "profil":
                $scope.setPage("patients");
                break;
            case "outils":
                $scope.setPage("home");
                break;
            case "symptomes":
                $scope.setPage("outils");
                break;
            case "traitements":
                $scope.setPage("symptomes");
                break;

            default:
                $scope.setPage("home");
                break;
        }
    };


    $scope.setPatient = function(patient) {
        $scope.currentPatient = patient;
    }

    $scope.setPageTitle = function(title) {
        $scope.pageTitle = title;
    }

    $scope.patientService = new PatientService();
});


function PatientService() {
}

PatientService.prototype.getPatients = function() {
    return patients;
};
