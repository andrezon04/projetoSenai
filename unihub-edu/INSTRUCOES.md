# Instruções para executar o projeto localmente

Para visualizar o site UniHub Edu em seu computador, siga as instruções abaixo:

## Método 1: Abrir diretamente o arquivo HTML

1. Navegue até a pasta do projeto: `c:\Users\2DM\Documents\andre-dias\project\unihub-edu`
2. Dê um duplo clique no arquivo `index.html` para abri-lo em seu navegador padrão

## Método 2: Usando Live Server no VS Code

Se você estiver usando o Visual Studio Code, pode utilizar a extensão Live Server para uma melhor experiência de desenvolvimento:

1. Instale a extensão Live Server se ainda não a tiver
2. Clique com o botão direito no arquivo `index.html` no VS Code
3. Selecione "Open with Live Server"
4. O site será aberto automaticamente em seu navegador

## Método 3: Usando Python para criar um servidor local

Se você tiver Python instalado:

1. Abra um terminal no diretório do projeto
2. Execute um dos seguintes comandos:
   - Python 3: `python -m http.server 8000`
   - Python 2: `python -m SimpleHTTPServer 8000`
3. Abra seu navegador e acesse `http://localhost:8000`

## Navegando pelo site

- A página inicial contém uma breve apresentação do projeto e um botão de login simulado
- O menu de navegação permite acessar as páginas "Sobre" e "Contato"
- Teste o formulário de login na página inicial
- Explore o formulário de contato na página "Contato"

## Estrutura do projeto

O projeto está organizado da seguinte forma:

- `index.html`: Página inicial
- `pages/`: Pasta com páginas adicionais
- `assets/css/`: Estilos CSS
- `assets/js/`: Scripts JavaScript
- `assets/images/`: Pasta para imagens (pronta para uso futuro)
