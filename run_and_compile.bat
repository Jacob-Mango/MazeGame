@echo off
title "Maze Game Server"

:RUNSERVER
cls
title "Building Webpack"
bash -c "webpack --display-error-details"
title "Maze Game Server"
bash -c "node app.js"
pause

goto RUNSERVER