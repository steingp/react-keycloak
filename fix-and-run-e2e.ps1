# Fjerner æøå fra meldinger for å unngå encoding-kaos i PowerShell

# Sjekk at path starter med D:/ (ikke D:\ eller annen casing)
if (-not ($PWD.Path -like "D:\*")) {
    Write-Host ""
    Write-Host "WARNING: You must run this script from D:/ (not d:\ or C:\ via symlink)." -ForegroundColor Red
    Write-Host "Tip: Open PowerShell and go to: D:/src/client/react/auth-ws"
    Write-Host ""
    exit 1
}

Write-Host ""
Write-Host "Cleaning .nx and node_modules..." -ForegroundColor Cyan
Remove-Item -Recurse -Force ".nx", "node_modules" -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "Running pnpm install..." -ForegroundColor Cyan
pnpm install

Write-Host ""
Write-Host "Running nx reset..." -ForegroundColor Cyan
pnpm exec nx reset

Write-Host ""
Write-Host "Starting test:e2e..." -ForegroundColor Green
pnpm run test:e2e
