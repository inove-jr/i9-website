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

- [Ícones](https://lucide.dev/)

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

#### Assinar uma Issue

![assinar](https://github.com/inove-jr/i9-website/assets/112443051/e9e5a56e-5feb-416e-ba3f-802c0448dc7f)

#### Criar Branch

1. Cria uma Branch para a Issue

![cria branch](https://github.com/inove-jr/i9-website/assets/112443051/e4512ae0-57aa-46d9-8347-6f0ab436114b)

2. Escolhe a Branch "develop" para ser a ramificação de origem

![escolher branch develop](https://github.com/inove-jr/i9-website/assets/112443051/6918b1e7-e84a-4ae5-b8e8-af143da0ea45)

3. Cria a Branch

![criar branch](https://github.com/inove-jr/i9-website/assets/112443051/4b42e70d-5dde-49c2-b311-34ff945f5094)

4. Cole o Comando no Terminal para começar a Tarefa

![colar no terminal](https://github.com/inove-jr/i9-website/assets/112443051/691e7d53-b819-4f9a-b64c-e4e45e053fb9)

#### Realizar a tarefa

- Realize os commits necessários na branch da tarefa

```bash
git commit
```

- Envie as modificações para o GitHub

```bash
git push
```

#### Criar um Pull Request

1. Selecione a branch da tarefa

![mudar de branch](https://github.com/inove-jr/i9-website/assets/112443051/e785d3a7-5ad5-4f28-8e7d-249d2384f282)

2. Abra um Pull Request

![realizar PR](https://github.com/inove-jr/i9-website/assets/112443051/0682cf4c-174c-4153-9c71-d699c9d4f48c)

3. Coloque a branch "develop" como destino

![mudar branch de destino](https://github.com/inove-jr/i9-website/assets/112443051/46bff549-7ea4-44e9-8254-32bfeb1ee911)

4. Finalize o Pull Request

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
```
