# Inove Jr - Site Institucional

[![Git](https://img.shields.io/badge/Git-%23000?style=for-the-badge&logo=git)](https://git-scm.com/)
[![Node](https://img.shields.io/badge/Node.js-%23000?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![Next](https://img.shields.io/badge/Next.js-%23000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React.js-%23000?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-%23000?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-%23000?style=for-the-badge&logo=shadcnui)](https://ui.shadcn.com/)

![Figma](https://img.shields.io/badge/Figma-%23000?style=for-the-badge&logo=figma)
[![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-%23000?style=for-the-badge&logo=googleappsscript)](https://developers.google.com/apps-script?hl=pt-br)
[![Google Sheets](https://img.shields.io/badge/Google%20Sheets-%23000?style=for-the-badge&logo=googlesheets)](https://developers.google.com/sheets?hl=pt-br)

## :bookmark_tabs: Manual

[Git Cheatsheet](https://github.com/d3vlopes/git-ultimate-cheatsheet) - Comandos Git

[Commits semânticos](https://github.com/AdrianaSaty/colinha-commit-semantico) - Padrões de Commits

 [Configurar SSH](https://www.freecodecamp.org/portuguese/news/como-obter-e-configurar-suas-chaves-ssh-do-git-e-do-github/) - Conectar com Github via SSH

## :link: Links

[Figma](https://www.figma.com/file/EDiZutXRORcMXrVqgm40Vv/i9-Website)

## :hammer_and_wrench: Pré Requisitos

- [ ] [Git](https://git-scm.com/downloads)
- [ ] [Node.js](https://nodejs.org/en/download)

## :technologist: Guia de Desenvolvimento

### :sparkles: Iniciar Projeto

#### Clonar Repositório

```bash
git clone git@github.com:inove-jr/i9-website.git
```

#### Instalar Dependências

```bash
npm install
```

#### Executar em desenvolvimento

```bash
npm run dev
```

### :twisted_rightwards_arrows: Fluxo de Desenvolvimento (GitFlow)

#### Iniciar Gitflow

```bash
git flow init # Depois só pressionar ENTER até finalizar
```

#### Começar uma tarefa

```bash
git flow feature start [nome para a tarefa]
```

#### Terminar uma tarefa

```bash
git flow feature finish [nome para a tarefa]
```

## :globe_with_meridians: Arquitetura

![Arquitetura](https://github.com/inove-jr/i9-website/assets/112443051/305d1f9e-786d-44b3-a4bc-6de7b62875e7)

### :oil_drum: Google Sheets

```mermaid
erDiagram
    Membros {
        string nome
        string diretoria
        string cargo
        string foto_base64
        string linkedin
        string github
        string instagram
        date data_entrada
        date data_saida
    }
    Projetos {
        string nome 
        string empresa
        string descricao
        string tipo_servico
        string link
        date data_contrato
    }
```
