let calendarApp = angular.module('calendarGen', ['720kb.datepicker', 'angularMoment', 'ui.calendar']);

calendarApp.controller('mainController', ['$scope', '$q', '$http', 'moment', function($scope, $q, $http, moment) {

	//initial input variables
	$scope.startDate = moment(new Date()).format("DD-MM-YYYY");
	$scope.totalDays = "";
	$scope.countryCode = "";

}]);

//calendar directive for the rendered widget
calendarApp.directive('calendarWidget', function () {
    return {
        restrict: 'E', 
        scope: {
            calendarParams: '=',
            holidays: '='
        },
        template: '<div class = "container"><div ui-calendar="uiConfig.calendar" class="span8 calendar" ng-model="eventSources" ng-if="eventSources.length > 0"></div></div>',
        link: function ($scope, element, attrs) {
        	const dateConfig = $scope.calendarParams;
        	const startDate = dateConfig.fromDate.format("YYYY-MM-DD");
        	const endDate = dateConfig.toDate.add(1, "day").format("YYYY-MM-DD");
        	$scope.eventSources = [$scope.holidays];

        	//full calendar config object
			$scope.uiConfig = {
    		};
        } 
    }
});