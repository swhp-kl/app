var kineApp = angular.module('kineliveApp');

/**
 *  0 : 150
 *  1335 : 1790
 */

kineApp.controller('OutilsController', function ($scope) {

    $scope.imageDescriptor = [
        {
            name: "Muscles",
            isActive: true,
            images: [
                "img/muscles/image1.png",
                "img/muscles/image2.png",
                "img/muscles/image3.png",
                "img/muscles/image2.png"
            ],
            zoom: [
                "img/muscles/image1_zoom.png",
                "img/muscles/image2_zoom.png",
                "img/muscles/image1_zoom.png",
                "img/muscles/image2_zoom.png"
            ]

        },{
            name: "Articulations",
            images: [
                "img/muscles/image1.png",
                "img/muscles/image2.png",
                "img/muscles/image3.png"
            ]
        }
    ];

    $scope.state = {
        desc: $scope.imageDescriptor[0],
        imageIndex: 0,
        zoomed: false
    };

    $scope.pathologies = [
        "pathologie 1",
        "pathologie 2",
        "pathologie 3"
    ];
    $scope.traitements = [
        "traitement 1",
        "traitement 2",
        "traitement 3"
    ];

    $scope.nextImage = function() {
        var arr = $scope.state.zoomed ? $scope.state.desc.zoom : $scope.state.desc.images;
        $scope.state.imageIndex++;

        if ($scope.state.imageIndex >= arr.length) {
            $scope.state.imageIndex = 0;
        }

        // $scope.state.image = arr[$scope.state.imageIndex];
        setImage();

    };
    function setImage() {
        var arr = $scope.state.zoomed ? $scope.state.desc.zoom : $scope.state.desc.images;
        $scope.state.image = arr[$scope.state.imageIndex];
    };

    $scope.state.image = $scope.state.desc.images[$scope.state.imageIndex];
    $scope.toggleZoom = function() {
        $scope.state.zoomed = !$scope.state.zoomed;
        setImage();
    }

    $scope.symptomes = [
        {
            name: "Spasticité"
        }, {
            name: "Raideur"
        }, {
            name: "Fonte musculaire"
        }

    ];

    $scope.gotoSymptomes = function() {
        $scope.setPage('symptomes')
    };

});
