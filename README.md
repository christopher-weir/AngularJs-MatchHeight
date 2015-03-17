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
 - Add the `iln-match-height` attribute to the container of the elements you want to match
 - All elements within the `iln-match-height` parent will resize to match height
```html
<div iln-match-height>
    <div>these</div>
    <div>will<br/>be<br/>the<br/>same<br/>height</div>
</div>
```
