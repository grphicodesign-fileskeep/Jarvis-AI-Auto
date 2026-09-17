@echo off
title OpenShorts AI Studio
echo ===================================================
echo    Starting OpenShorts AI Studio (Free BYOK)
echo ===================================================
cd /d "%~dp0"

start "OpenShorts Backend" cmd /k ".venv\Scripts\python.exe -m uvicorn app:app --host 127.0.0.1 --port 8000"

timeout /t 3 /nobreak > nul

cd dashboard
start "OpenShorts Web Dashboard" cmd /k "npm.cmd run dev -- --open"

echo.
echo ===================================================
echo    OpenShorts is starting!
echo    Web UI:  http://localhost:5173
echo    Backend: http://localhost:8000
echo ===================================================
