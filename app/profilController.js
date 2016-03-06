var kineApp = angular.module('kineliveApp');

kineApp.controller('ProfilController', function ($scope) {
    $scope.patient = $scope.currentPatient;
    $scope.$watch("currentPatient", function(val) {
        $scope.patient = val;
    });

    var timelines = [
        "img/Timeline 1.png",
        "img/Timeline 2.png",
        "img/Timeline 3.png"
    ];
    var timelinesIndex = 0;

    $scope.data = {
        timelineImg: timelines[0],
        isMax: false
    };

    $scope.nextTimeLine = function() {
        $scope.data.timelineImg = timelines[Math.min(++timelinesIndex, 2)];
        if (timelinesIndex == 2) {
            $scope.data.isMax = true;
        }
    }
});
