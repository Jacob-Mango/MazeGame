@echo off
title "Maze Game Server"

:RUNSERVER
bash -c "node app.js"
pause

goto RUNSERVER