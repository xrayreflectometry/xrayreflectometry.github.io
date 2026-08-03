@echo off
cd /d "%~dp0"
echo ================================================
echo   ReflexAuto - building the site (~20 seconds)
echo ================================================
call npm run build
echo.
echo Starting server - your browser will open automatically
echo   English : http://localhost:4321
echo   Korean  : http://localhost:4321/ko
echo   (To stop: just close this window)
echo.
call npm run preview -- --open
pause
