@echo off
REM Batch script for installing Tailwind CSS dependencies and starting watch mode
echo ========================================================
echo  🚀 Setting Up Tailwind CSS v4 & Starting Watcher Mode
echo ========================================================

echo.
echo 📦 Step 1: Installing dependencies (tailwindcss and @tailwindcss/cli)...
call npm install tailwindcss @tailwindcss/cli

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Installation failed! Check your npm setup.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo ✅ Dependencies installed successfully!
echo ⚡ Step 2: Launching Tailwind CSS build process in watch mode...
echo 📌 Input:  ./src/main.css
echo 📌 Output: ./style.css
echo.

npx @tailwindcss/cli -i ./src/main.css -o ./style.css --watch
