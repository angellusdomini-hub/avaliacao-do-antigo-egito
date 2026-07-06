# Avaliacao do Antigo Egito

Formulario de avaliacao de Historia sobre Egito Antigo para o 6o ano.

## Arquivos

- `index.html`: formulario pronto para publicar no GitHub Pages.
- `google-apps-script.gs`: script que grava as respostas em uma planilha do Google.

## Como ligar a planilha

1. Crie uma planilha no Google Sheets.
2. Copie o ID da planilha, que fica na URL entre `/d/` e `/edit`.
3. Abra `Extensoes > Apps Script`.
4. Cole o conteudo de `google-apps-script.gs`.
5. Troque `COLE_AQUI_O_ID_DA_PLANILHA` pelo ID da sua planilha.
6. Clique em `Implantar > Nova implantacao`.
7. Escolha `Aplicativo da Web`.
8. Em `Executar como`, selecione voce.
9. Em `Quem pode acessar`, selecione qualquer pessoa.
10. Copie a URL gerada.
11. No `index.html`, cole essa URL em `GOOGLE_SCRIPT_URL`.

## Como publicar no GitHub Pages

1. Crie um repositorio chamado `avaliacao-do-antigo-egito`.
2. Envie estes arquivos para o repositorio.
3. No GitHub, abra `Settings > Pages`.
4. Em `Build and deployment`, selecione `Deploy from a branch`.
5. Escolha a branch `main` e a pasta `/root`.

Depois disso, o GitHub mostrara o link publico do formulario.
