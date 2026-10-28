@echo off
setlocal

call pnpm install --frozen-lockfile
if errorlevel 1 exit /b %errorlevel%
call pnpm run check
if errorlevel 1 exit /b %errorlevel%
call pnpm run build
if errorlevel 1 exit /b %errorlevel%
call pnpm run test
if errorlevel 1 exit /b %errorlevel%
call pnpm run start
if errorlevel 1 exit /b %errorlevel%
