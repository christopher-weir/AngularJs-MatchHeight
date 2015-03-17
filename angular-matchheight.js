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
            scope: {},
            link:   function ( scope, elm, attrs ) {

                var i;
                var heightsArray = [];
                var largest = 0;

                /**
                 * Return the largest number in the array
                 * @name largetsNo
                 * @param  {Array} array - The array of heights
                 * @return {Number} the largest number
                 */
                var largetsNo = function( array ){
                    return Math.max.apply( Math, array );
                };

                // when the element has finished loading
                elm.ready(function(){

                    // loop through all the children and get their heights
                    for ( i = 0; i < elm[0].childNodes.length; i++) {

                        // add the heights to the array if not undefined
                        // e.g a comment will be picked up
                        if( elm[0].childNodes[i].offsetHeight ){
                            heightsArray.push( elm[0].childNodes[i].offsetHeight );
                        }
                    }

                    // get the largest height
                    largest = largetsNo( heightsArray );

                    // add the height to the children
                    for ( i = 0; i < elm[0].childNodes.length; i++) {
                        elm.children().eq( i ).css( 'height', largest + 'px' );
                    }
                });
            }
        };
    }]);