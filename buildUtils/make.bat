@echo off
title Roovi JS Studio build master

echo Build started.

IF EXIST ..\build rmmod ..\build

mkdir ..\build

mkdir ..\build\\system
mkdir ..\build\\libs

xcopy /s ..\system ..\build\\system
xcopy /s ..\libs ..\build\\libs
xcopy ..\RooviJSStudio.exe ..\build
xcopy ..\settings.json ..\build

cls

echo Build well done.

pause > nul