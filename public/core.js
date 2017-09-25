let calendarApp = angular.module('calendarGen', ['720kb.datepicker', 'angularMoment', 'ui.calendar']);

calendarApp.controller('mainController', ['$scope', '$q', '$http', 'moment', function($scope, $q, $http, moment) {

	//initial input variables
	$scope.startDate = moment(new Date()).format("DD-MM-YYYY");
	$scope.totalDays = "";
	$scope.countryCode = "";

}]);