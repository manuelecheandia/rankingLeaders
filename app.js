let app = angular.module("RankingLeadersApp",[]);

app.controller("RankingLeaderApp", function($scope){
    
    //VARIABLES
    $scope.showGold = true;
    $scope.showSilver = true;
    $scope.showBronze = true;

    //FUNCTIONS
    $scope.toggleGold = function(){
        $scope.showGold = !$scope.showGold
    }

    $scope.toggleSilver = function(){
        $scope.showSilver = !$scope.showSilver
    }

    $scope.toggleBronze = function(){
        $scope.showBronze = !$scope.showBronze
    }








    //DATA
    $scope.Leaders =[
        {"pic" : "img/1.png" , "rank" : 1},
        {"pic" : "img/2.png" , "rank" : 1},
        {"pic" : "img/3.png" , "rank" : 1},
        {"pic" : "img/4.png" , "rank" : 2},
        {"pic" : "img/5.png" , "rank" : 2},
        {"pic" : "img/6.png" , "rank" : 2},
        {"pic" : "img/7.png" , "rank" : 3},
        {"pic" : "img/8.png" , "rank" : 3},
        {"pic" : "img/9.png" , "rank" : 3},
    ]

});