/*
 * Angular Match Height
 * An angular directive to match heights of divs
 *
 */

angular.module('angular-matchheight', [])
    .directive('ilnMatchHeight', [
        function () {
        return {
            restrict: 'A',
            link:   function ( scope, elm, attrs ) {
                if( scope.ilnMatchHeightArr === undefined ){
                    scope.ilnMatchHeightArr = [elm[0].offsetHeight];
                }else{
                    scope.ilnMatchHeightArr.push(elm[0].offsetHeight);
                }

                var largetsNo = function( array ){
                    return Math.max.apply( Math, array );
                };

                scope.$watch(scope.ilnMatchHeightArr, function(){
                    elm.css('height', largetsNo(scope.ilnMatchHeightArr)+'px');
                });

                scope.$on(
                    '$destroy',
                    function() {
                        scope.ilnMatchHeightArr = [];
                    }
                );
            }
        };
    }]);
