# install.ps1
$ErrorActionPreference = "Stop"

$installDir = "$env:LOCALAPPDATA\ReflexAuto"
$exeUrl = "https://github.com/xrayreflectometry/xrayreflectometry.github.io/releases/download/v1.0.0/ReflexAuto.exe"
$exePath = "$installDir\ReflexAuto.exe"
$expectedHash = "sha256:8dac511761cee4a95a7a5554667abf60f510a311dee8acb02cce31074392b060"

Write-Host "Installing ReflexAuto..." -ForegroundColor Cyan
New-Item -ItemType Directory -Force -Path $installDir | Out-Null
Invoke-WebRequest -Uri $exeUrl -OutFile $exePath

# 무결성 검증 (선택이지만 권장)
$actualHash = (Get-FileHash -Path $exePath -Algorithm SHA256).Hash
if ($actualHash -ne $expectedHash) {
    Write-Warning "체크섬 불일치! 다운로드가 손상되었거나 파일이 변경되었을 수 있습니다."
    Write-Warning "Expected: $expectedHash"
    Write-Warning "Actual:   $actualHash"
    exit 1
}

Write-Host "Installed: $exePath" -ForegroundColor Green
Start-Process $exePath