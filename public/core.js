let calendarApp = angular.module('calendarGen', ['720kb.datepicker', 'angularMoment', 'ui.calendar']);

calendarApp.controller('mainController', ['$scope', '$q', '$http', 'moment', function($scope, $q, $http, moment) {

	//initial input variables
	$scope.startDate = moment(new Date()).format("DD-MM-YYYY");
	$scope.totalDays = "";
	$scope.countryCode = "";

}]);

$scope.generateCalendarList = function(startFrom, totalDays, countryCode) {
		const startDate = moment(startFrom, "DD-MM-YYYY");
					
		//Calculating end date for the calendars
		const endDate = startDate.clone().add(totalDays+1, "day");
		const diffStart = moment([startDate.year(), startDate.month(), startDate.date()+1]);
		const diffEnd = moment([endDate.year(), endDate.month(), endDate.date()+1]);
		const monthsQty = diffEnd.diff(diffStart, 'months', true) // calculates how many months are going to be rendered

		console.log(monthsQty);

		$scope.calendarList = [];
			
		
};

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
		      calendar:{
		        height: 350,
		        editable: true,
		        header:{
		          left: '',
		          center: 'title',
		          right: ''
		        },
		        validRange: {
		        	start: startDate,
		        	end: endDate
		    	}
		      }
    		};
        } 
    }
});