# UniHub Edu

![UniHub Edu](https://img.shields.io/badge/UniHub-Edu-6c63ff)

## Sobre o Projeto
8
UniHub Edu é uma plataforma educacional inovadora projetada para conectar estudantes a um universo de possibilidades educacionais. O projeto visa facilitar o acesso a recursos educacionais, conectar comunidades de aprendizado e transformar a experiência acadêmica.

## Demonstração Visual

Este projeto consiste em uma landing page com design moderno e minimalista, inspirado no estilo do site [SuperHi](https://www.superhi.com). 

## Características

- **Design Responsivo**: Layout adaptável para diversos tamanhos de tela (mobile, tablet, desktop)
- **Interface Moderna**: Utilização de cores suaves e tipografia contemporânea
- **Animações Sutis**: Elementos visuais que respondem ao movimento do cursor
- **Login Simulado**: Demonstração de funcionalidade de autenticação com feedback visual

## Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS para personalização de tema)
- JavaScript (Vanilla JS)
- Google Fonts (Inter)

## Estrutura de Arquivos

```
unihub-edu/
│
├── assets/                  # Pasta para recursos estáticos
│   ├── css/                 # Estilos CSS
│   │   ├── style.css        # Estilos principais
│   │   └── pages.css        # Estilos específicos para páginas internas
│   │
│   ├── js/                  # Scripts JavaScript
│   │   ├── script.js        # Script principal
│   │   └── contact.js       # Script para página de contato
│   │
│   └── images/              # Imagens do projeto
│       ├── backgrounds/     # Imagens de fundo
│       └── icons/           # Ícones
│
├── pages/                   # Páginas adicionais
│   ├── sobre.html           # Página Sobre
│   └── contato.html         # Página Contato
│
├── index.html               # Página principal
└── README.md                # Documentação do projeto
```

## Como Executar

1. Clone este repositório ou baixe os arquivos
2. Abra o arquivo `index.html` em qualquer navegador web moderno
3. Navegue pelo site utilizando o menu de navegação
4. Para testar o login, clique no botão "Entrar na Plataforma" e preencha o formulário
5. Explore as páginas "Sobre" e "Contato" para ver mais conteúdo
6. Na página de contato, teste o formulário para ver a mensagem de confirmação

## Funcionalidades

- **Navegação**: Menu de navegação com links para diferentes páginas
- **Login Modal**: Modal interativo que aparece ao clicar no botão de login
- **Mensagem de Boas-vindas**: Após o login, exibe uma mensagem personalizada de boas-vindas
- **Elementos Decorativos**: Formas geométricas que se movem sutilmente com o cursor
- **Página Sobre**: Informações detalhadas sobre a missão e valores do projeto
- **Página de Contato**: Formulário de contato funcional com validação e feedback
- **Layout Responsivo**: Design adaptável a diferentes tamanhos de tela

## Personalização

O projeto utiliza variáveis CSS que podem ser facilmente modificadas no arquivo `assets/css/style.css`:

```css
:root {
    --primary-color: #6c63ff;
    --secondary-color: #f5f5f5;
    --accent-color: #ff9a8b;
    --text-color: #333;
    --light-text: #777;
    --background-color: #fff;
    --shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    --transition: all 0.3s ease;
}
```

## Próximos Passos

- Implementação de backend real para autenticação
- Adição de mais páginas internas (dashboard, perfil, etc.)
- Integração com APIs educacionais
- Sistema de notificações e mensagens

## Autor

Este projeto foi desenvolvido como uma demonstração de design e desenvolvimento frontend para o projeto UniHub Edu.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE.md para detalhes.
