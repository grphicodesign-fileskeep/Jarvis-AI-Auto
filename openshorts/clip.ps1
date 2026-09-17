# Quick CLI tool for generating clips
param (
    [string]$Url,
    [string]$InputFile,
    [string]$Output = "output"
)

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$PythonExe = Join-Path $ScriptDir ".venv\Scripts\python.exe"
$MainPy = Join-Path $ScriptDir "main.py"

if ($Url) {
    & $PythonExe $MainPy -u $Url -o $Output
} elseif ($InputFile) {
    & $PythonExe $MainPy -i $InputFile -o $Output
} else {
    Write-Host "Usage:" -ForegroundColor Yellow
    Write-Host '  .\clip.ps1 -Url "https://www.youtube.com/watch?v=VIDEO_ID"' -ForegroundColor Cyan
    Write-Host '  .\clip.ps1 -InputFile "path\to\video.mp4"' -ForegroundColor Cyan
}
