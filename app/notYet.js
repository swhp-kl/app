var kineApp = angular.module('kineliveApp');

kineApp.directive('notYet', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controllers) {
            var defaultText = "Cette fonctionnalité n'est pas encore disponible";
            element.click(function(e){
                $(element).popover('show');
                e.preventDefault();
                e.stopPropagation();
            });
            console.log("found", attrs);
            element.popover({
                container: "body",
                content: attrs.notYet || defaultText,
                placement: "top"
            });
        }
    };
});