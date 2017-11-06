@echo off
title "Maze Game Server"

:RUNSERVER
title "Compiling Server"
bash -c "webpack --display-error-details"
title "Maze Game Server"
bash -c "node app.js"
pause

goto RUNSERVER