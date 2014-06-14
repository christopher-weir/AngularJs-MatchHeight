AngularJs-MatchHeight
=====================

An Angular JS directive I created for a work project to match div heights.

## Usage:

 - Add `angular-matchheight.js` to your code:
```html
<script src="angular-matchheight.js"></script>
```
 - Add a dependency to the `angular-matchheight` module in your application.
```js
angular.module('MyApp', ['angular-matchheight']);
```
 - Add the `iln-countup` attribute to the divs you want to match
 - All divs with the `iln-countup` attribute will resize to the biggest on the page
```html
<div iln-match-height>some content here</div>
```
