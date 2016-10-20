'use strict';

angular.module('cart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'public/cart/cart.html',
    controller: 'CartCtrl'
  });
}])

.controller('CartCtrl', ['$scope',function($scope) {
    $scope.shopData = [
		{'item':'Hard Disk','id':'HD','selected':0,'prices':[{'size':'200GB','price':'200'},{'size':'400GB','price':'400'}]},
		{'item':'CPU','id':'CPU','selected':0,'prices':[{'size':'i3','price':'2000'},{'size':'i5','price':'2500'}]},
		{'item':'Monitor','id':'MON','selected':0,'prices':[{'size':'16\'','price':'300'},{'size':'19\'','price':'500'}]},
		{'item':'Optical Mouse','id':'MOU','selected':0,'prices':[{'size':'Optical','price':'35'},{'size':'Advanced','price':'55'}]},
		{'item':'RAM','id':'RM','selected':0,'prices':[{'size':'4GB','price':'400'},{'size':'8GB','price':'800'}]},
		{'item':'USB Keyboard','id':'KEY','selected':0,'prices':[{'size':'Standard','price':'250'},{'size':'Advanced','price':'450'}]}
	];

$scope.total = function(){
      var t = 0;

      for(var k in $scope.shopData){
        t += parseInt($scope.shopData[k].selected);
      }
      
      return t;

    }
}])
.directive('checkList', function() {
    return {
        restrict: 'E',
	scope: {
            option: '=',
	    name: '=',
	    selected: '=selected'
        },
        template: function(elem, attrs) {
            return '<div class="panel-body">\
                    <div class="radio" ng-repeat="i in option">\
                        <label><input type="radio" ng-model="$parent.selected" ng-value="{{i.price}}"  name="{{name}}">{{i.size}} {{i.price | currency}}</label>\
                    </div>\
                </div>'
        }
    };
})
