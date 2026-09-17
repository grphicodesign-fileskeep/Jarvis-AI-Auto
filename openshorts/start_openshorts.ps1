# OpenShorts 1-Click PowerShell Launcher
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "   🚀 Starting OpenShorts AI Studio (Free BYOK)    " -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Cyan

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptDir

$PythonExe = Join-Path $ScriptDir ".venv\Scripts\python.exe"
$DashboardDir = Join-Path $ScriptDir "dashboard"

Write-Host "[1/2] Starting FastAPI Backend on http://localhost:8000..." -ForegroundColor Yellow
$BackendProc = Start-Process -FilePath $PythonExe -ArgumentList "-m", "uvicorn", "app:app", "--host", "127.0.0.1", "--port", "8000" -WorkingDirectory $ScriptDir -PassThru

Start-Sleep -Seconds 3

Write-Host "[2/2] Starting Web Dashboard on http://localhost:5173..." -ForegroundColor Yellow
$FrontendProc = Start-Process -FilePath "npm.cmd" -ArgumentList "run", "dev", "--", "--open" -WorkingDirectory $DashboardDir -PassThru

Write-Host "===================================================" -ForegroundColor Green
Write-Host "   ✨ OpenShorts is Running!" -ForegroundColor Green
Write-Host "   🌐 Web UI:  http://localhost:5173" -ForegroundColor Cyan
Write-Host "   ⚡ Backend: http://localhost:8000" -ForegroundColor Cyan
Write-Host "   Press Ctrl+C in this window or close it to stop." -ForegroundColor Gray
Write-Host "===================================================" -ForegroundColor Green

try {
    Wait-Process -Id $FrontendProc.Id
} finally {
    if ($BackendProc -and -not $BackendProc.HasExited) {
        Stop-Process -Id $BackendProc.Id -Force -ErrorAction SilentlyContinue
    }
}
