### Issues list (*Vlad*) / 23.10.2014

#### New

* Finished the Manage Class pages
* Got rid of all junk in the repo
* Added some borders on active and focus states for inputs
* Added box-shadow for active state on buttons
* Changed top & bottom paddings on inputs and buttons to match the sizes on the PSD

###Bootstrap Guide

*New to bootstrap? This guide explains how to work on the bootstrap code?*

via npm manager

somekind like npm -g install grunt or something

after that head over to the folder with the files

then you will have to install the plugins used in grunt

so, do npm install -g grunt-cli

then head over to the folder and remove the node_modules folder

then run npm install

it will install all the plugins (~20MB)

then run "grunt"

in the command line

after that, create a new .html file in the root folder

touch test.html

it will be empty, and as soon as you save it, the same file will appear in the /build folder

always work ONLY in the root folder, any changes you make in the build folder will be overriden

so basically when you are in the root folder, open your test.html and compare it with what you see, for example, in the "student-page.html"

the student-page.html file will have this in the beginning:

@@include('includes/head.html')
@@include('includes/header.html')

it is basically including the contents of the files that are in the /includes folder

instead of copypasting, I use this

so if you do not need header, do not include it

and in the end all files got @@include('includes/footer.html'), it closes the <body> tag and includes scripts

what come to the stylesheets

all the less files are in the /sources/less

each time you change and save ANY of them they get compiled to 2 CSS files that are in the /build/css folder

bootstrap's default LESS files are named without "custom-" prefix

my styles begin with "custom-" prefix


are you familiar with LESS ?

if no, than editing LESS files make no sense. Just include one more stylesheet to the include/head.html and go write your styles there
