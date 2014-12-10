'use strict';

/* Controllers */

angular.module('easycode-app.controllers', [])
    .controller('CodeCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.code = {
            source:'',
            submit: function() {
                var sourceString = $scope.code.source;
                var source = { sourcecode: sourceString};
                console.log(source);
                $http.post('/submit', source)
                .success(function(data) {
                    var res = data;
                    console.log(res);
                    console.log(res['result']);
                    $scope.code.result = res['result'];
                });
            },
            result:'0'
        };
        
    }]);