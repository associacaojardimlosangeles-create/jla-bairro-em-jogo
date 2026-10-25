@echo off
chcp 65001 >nul
title Publicar o jogo em bairroemjogo.web.app
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Falta instalar o Node.js. Baixe o botao verde LTS, instale e clique de novo neste arquivo.
  start https://nodejs.org/pt
  pause
  exit /b
)
echo.
echo PASSO 1 de 2: conferir a conta Google do Firebase
call npx -y firebase-tools@13 login
echo.
echo PASSO 2 de 2: publicar
call npx -y firebase-tools@13 deploy --only hosting --project jla-bairro-em-jogo
echo.
echo PRONTO! Abra https://bairroemjogo.web.app
pause
