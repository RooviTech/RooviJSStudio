@echo off
java -Dfile.encoding=utf8 -cp .;libs/* jdk.nashorn.tools.Shell -scripting system/launcher.js
pause