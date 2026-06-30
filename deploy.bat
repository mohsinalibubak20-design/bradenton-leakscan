@echo off
REM ===========================================================
REM  Simple one-command deploy script (Windows)
REM  Usage:  deploy.bat   (or just "deploy" from this folder)
REM
REM  It stages all changes, commits them, and pushes to the
REM  current branch's remote. If there is nothing to commit it
REM  prints "Nothing to deploy" and exits without touching git.
REM ===========================================================

setlocal

echo === Checking repository status ===
git status

REM --- Detect whether there is anything to commit -------------
REM git status --porcelain prints one line per change; no output
REM means the working tree is clean.
set "CHANGES="
for /f "delims=" %%i in ('git status --porcelain') do set "CHANGES=1"

if not defined CHANGES (
    echo.
    echo Nothing to deploy
    endlocal
    exit /b 0
)

echo.
echo === Staging changes ===
git add .

echo.
echo === Committing ===
git commit -m "auto deploy update"
if errorlevel 1 (
    echo Commit failed - aborting deploy. Repo left unchanged.
    endlocal
    exit /b 1
)

echo.
echo === Pushing ===
git push
if errorlevel 1 (
    echo Push failed. Your commit is saved locally; run "deploy" again once the issue is fixed.
    endlocal
    exit /b 1
)

echo.
echo === Deploy complete ===
endlocal
exit /b 0
