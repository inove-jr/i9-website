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

- [Identidade Visual](https://drive.google.com/file/d/1yOQcqmh1tpRxPFTZ8AC989uqr5o6NlEZ/view?usp=sharing)

- [Logo](https://drive.google.com/drive/folders/1hycFttjppTd9jJmM9ChGrYdXCd-CasqE?usp=sharing)

- [Fonte](https://drive.google.com/drive/folders/1ncFGqkyWxCgErlYHHWXWFFbvX1WBxrDI?usp=sharing)

- [Figma](https://www.figma.com/file/EDiZutXRORcMXrVqgm40Vv/i9-Website)

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

### :twisted_rightwards_arrows: Fluxo de Desenvolvimento

#### Criar Branch

#### Realizar a tarefa

#### Criar um Pull Request

## :globe_with_meridians: Arquitetura

![Arquitetura](https://github.com/inove-jr/i9-website/assets/112443051/ce3c3884-5652-4812-95b8-68a2486c02df)

### :oil_drum: Google Sheets

```mermaid
erDiagram
    Membros {
        int cpf PK
        string nome
        string diretoria
        string cargo
        string foto_base64
        string linkedin
        string github
        string instagram
        string site_pessoal
        string email
        date data_entrada
        date data_saida
    }
    Projetos {
        int id PK
        string nome 
        string empresa
        string descricao
        string tipo_servico
        string link_deploy
        string repositorio_git
        date data_contrato
    }
    Participacao {
        int cpf_membro PK,FK
        int id_projeto PK,FK
        string funcao "Front,Back, Design ou Gestão"
    }

    Membros only one to zero or many Participacao : ""
    Projetos only one to one or many Participacao : ""
```
