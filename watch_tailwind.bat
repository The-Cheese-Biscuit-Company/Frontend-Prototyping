@echo off
REM Batch script for watching CSS changes with Tailwind CLI
echo ========================================================
echo  👀 Starting Tailwind CSS Watch Mode
echo ========================================================
echo.
echo 📌 Input File:  ./src/main.css
echo 📌 Output File: ./style.css
echo.

npx @tailwindcss/cli -i ./src/main.css -o ./style.css --watch
