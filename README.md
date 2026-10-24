# JLA: Bairro em Jogo

<img src="logo.png" alt="Logo da Associação de Moradores Jardim Los Angeles" width="160">

Jogo do bairro da **Associação de Moradores do Jardim Los Angeles** (Ponta Grossa/PR).
O morador anda em 3D pelas ruas de verdade do Jardim Los Angeles, Califórnia I e II e Hortência,
cumpre missões, trabalha nas empresas do bairro, compra veículos elétricos, adota bichinhos
e disputa o ranking do mês.

- **Jogar:** abra o `index.html` no navegador (ou o link do GitHub Pages, quando estiver ligado).
- **Versão leve em pixel art:** `versao-2d.html`.

## Guia para quem vai mexer no jogo

Tudo fica em um arquivo só: `index.html`. Use **Ctrl+F** para achar cada parte pelo título entre `/* ============ ... ============ */`.

| O que você quer mudar | Procure por |
| --- | --- |
| Ruas, áreas e rios do mapa | `const ROADS`, `const AREAS`, `const WATER` |
| Lugares (sede, escolas, comércios, lojas) | `const POIS` |
| Missões e quanto cada uma vale | `const MISSIONS` |
| Trabalhos nas empresas | `const JOBS` |
| Perguntas do quiz | `const QUIZ` |
| Códigos do comércio (moedas no balcão) | `const COMERCIO` |
| Veículos e preços | `const VEH` |
| Cachorros e gatos para adotar | `const PETV` |
| Personagens (cores) | `const AVATARS` |
| Falas do Everton (Family Burguer) | `function talkEverton` |
| Construções em 3D | funções `mkAssoc`, `mkShop`, `mkFactory`, `mkGarage`... |
| Viaduto de entrada (posição e altura) | `const VIA` e `function buildViaduct` |
| Reforma da casa (cores e preços) | `WALLC`, `ROOFC`, `MUROC` e `function openReform` |
| Visual de desenho animado | `TOONG` e `function lam` |
| Rosto e corpo dos personagens | `function makeChar` |
| Desenhos para colorir no mural do viaduto | `const MURAL_T` |
| Palavras proibidas nos recados e ideias | `BAD_EXACT`, `BAD_STEM`, `BAD_PHRASE` |
| Mural de ideias da sede | `SUG_CATS`, `function openSuggest` |
| Logo da Associação | `const LOGO_URI` |
| Perfil (apelido, casa, pele, cabelo, roupas) | `const LOOKS`, `HAIRS`, `function openProfile` |
| Mochilas e acessórios (boné, óculos, fone) | `BAGS`, `ACCS`, `function charBag`, `function charAcc` |
| Roupinhas dos bichinhos | `PET_OUTFITS`, `function petOutfit` |
| Botão "Casa" | `function goHome` |
| Desenho do carro e das bikes | `function makeVehicle` |
| Veículos só andam na rua | `function offRoad`, `function roadConstrain` |
| Bateria e tomada de casa (tempo de carga, alcance) | `CHARGE_MIN`, `range` em `const VEH`, `function openCharge` |

### Como colocar um comércio novo

1. Em `const POIS`, copie uma linha de loja (`type:"shop"`) e troque `id`, `name`, `addr`, `sign`, a cor `roof` e a posição `x`, `y`.
   A posição está em metros: `x` cresce para o leste e `y` para o sul, a partir da latitude -25.052 e longitude -50.200.
2. Se ele tiver um trabalho, acrescente uma entrada com o mesmo `id` em `const JOBS`.
3. Se ele for parceiro, crie um código em `const COMERCIO`.

### Regras da equipe

- Teste no celular antes de salvar.
- Uma mudança por vez, com uma descrição clara do que mudou.
- Nada de nomes completos, endereços ou fotos de moradores no jogo, principalmente de crianças.
- Comércios e pessoas reais só entram com autorização.
- Antes de lançar para o bairro, apague os códigos de teste `TESTE-JLA`, `MOEDAS900` e `MOEDAS5000`.

## Créditos

- Mapa: dados © colaboradores do [OpenStreetMap](https://www.openstreetmap.org/copyright) (licença ODbL).
- Motor 3D: [three.js](https://threejs.org) (licença MIT).
- Associação de Moradores do Jardim Los Angeles · Rua Prefeito José Hoffmann, 37.
