## Framework selection
* Plain html + js + css file (Easy to setup but hard to extend)
* Vue.js (Good for small projects, handy to use and can be extend to larger scale)
* React.js (Larger community support, manageable by large projects, but has steep learning curve) - choose this one since I would like to pick up react

## Styling framework
* Bootstrap 5 - large community support, easy to use grid/component system, handy to customise 
* Fonts - based on the page, I decided to choose RFS font resizing engine (handy to handle responsive page automatically) and assign a font size hierarchy to titles and paragraphs.
* Global bootstrap settings - setup page theme and text weight.

## Image resizing
* In order to keep the image survive from random input, I decide to use "calc" to set a gradient height value based on screen sizes to the images.
* The image will zoom in automatically based on the width and height of the container, this is the major drawback of such design.
* When clicking the image, we will launch a larger image modal to view the full image, which will be centered in the screen.

## Copy length cut-off
* Based on different screen sizes, we'll cut the text into half if it exceeds some certain length and collapses that when clicking the "+" or "-" icon.

## Steps to run the project
```
npm install
npm start
```

## Steps to build the project
```
npm run build
```

## Future improvements
* For copy length cut-off we can use pure css to avoid javascript complexity.
* There are some warnings during the build and we can optimise webpack to avoid that.
* For images we can use lazy loading to improve performance.


