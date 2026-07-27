@echo off
REM Batch script for installing Tailwind CSS dependencies
echo ========================================================
echo  📦 Installing Tailwind CSS v4 & CLI
echo ========================================================
echo.

call npm install tailwindcss @tailwindcss/cli

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Tailwind CSS installation complete!
) else (
    echo.
    echo ❌ Installation failed!
)
pause
