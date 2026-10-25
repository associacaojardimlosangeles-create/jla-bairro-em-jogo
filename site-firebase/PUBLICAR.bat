@echo off
chcp 65001 >nul
title Publicar o jogo em bairroemjogo.web.app
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo Falta instalar o Node.js. Vai abrir o site: baixe o botao verde "LTS", instale e depois clique de novo neste arquivo.
  start https://nodejs.org/pt
  pause
  exit /b
)
echo.
echo PASSO 1 de 3: entrar na sua conta Google do Firebase (vai abrir o navegador, clique em Permitir)
call npx -y firebase-tools@13 login
echo.
echo PASSO 2 de 3: reservar o nome bairroemjogo
call npx -y firebase-tools@13 hosting:sites:create bairroemjogo --project jla-bairro-em-jogo
echo.
echo PASSO 3 de 3: publicar
call npx -y firebase-tools@13 deploy --only hosting --project jla-bairro-em-jogo
echo.
echo PRONTO! Abra https://bairroemjogo.web.app
pause
