### Issues list for Josh / 29.10.2014

#### New

* The file is named ```activity-planner-step-2.html```. I wanted to make it tabbed first, but then decided not to, since you had similar behaviour on other pages and may have already handeled it.

* Checkboxes are not currently checkable. A checkbox requires a unique ID, and the label for it requires the same. Take a look at the Activity Planner page step 1 for reference. They are all clickable there. So I left it for you, maybe you have a quick way to assign unique IDs for ```input``` and ```label```

* I will add the caret manipulation on click tomorrow alongside with the datepicker and green button.


### A quick how to on how to work with this repo

#### GruntJS

First, you need to install the <a href="http://gruntjs.com">Grunt JS</a>, run:

```
npm install -g grunt-cli

```

After that:

* Head over to the repo's root directory.
* Install the GruntJS's dependencies with ```npm install```
* Run Grunt with ```grunt```

That is basically all. You are ready to work with the current setup.

#### Explanation of folder and project structure


#### Working with HTML

The HTML compile from root and ````/includes``` folders automatically each time you change and save something in any .html file that lies either in root or in ```/includes``` folder. You may want to test it, type something in any root .html file, save it, and in the command line you'll see the information on that change.

**NOTE**

Any changes you make in the build folder will always be overriden each time you save any .HTML file outside the /build folder.

File in the ```/build``` folder takes a name of the corresponding HTML file from the root folder.



##### Purpose of /includes folder.

In any HTML file that lies in the root folder, you will find something like that: ```@@include('includes/foo.html')```. Basically what it does is inserting the contents of the ```includes/foo.html``` file in the corresponding place in the file you've used it with.

That is very useful for items that repeat for all the pages, for example ```<head>``` for styles, ```<footer>``` (for footer ? :-D), and stuff like ```navbars```.

**Example**:

There's a ```foo.html``` file in the root folder, you make 2 includes there: ```bar.html``` and ```bar2.html```. 

* Contents of the ```bar.html``` will be "My"
* Contents of ```bar2.html``` will be "Name"
* And in the root file itself you write "is Username"

and the output content of the ```build/foo.html``` will be *"My Name is Username"*.




#### Working with LESS, CSS

Same saving and compiling rules applied to LESS compilation. Each time you change and save any file that lies in the sources```/less``` folder, all the files compile in one CSS file that is in the ```build/css/*.css``` folder.

From the ```Gruntfile.js``` you will see, that the default Bootstrap's styles are compiled to ```build/css/bootstrap.css```, and the custom project styles are compiled to the ```custom.css``` file respectively.

*Believe that's all. Have a nice day*


