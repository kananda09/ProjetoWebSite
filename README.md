# ⚖️ Projeto Web — Luide Lima Advogado

<p align="center">
  <strong>Site institucional desenvolvido para apresentação profissional e contato jurídico.</strong>
</p>

<p align="center">
  🌐 <a href="https://kananda09.github.io/ProjetoWebSite/">Acessar o projeto</a>
</p>

---

## 📌 Sobre o Projeto

O **Projeto Web — Luide Lima Advogado** é um site institucional desenvolvido para apresentar informações profissionais, áreas de atuação jurídica, trajetória, formas de contato e perguntas frequentes.

O projeto foi desenvolvido como atividade acadêmica, com foco na aplicação prática de conceitos de desenvolvimento Front-end, responsividade, interatividade, acessibilidade e publicação de aplicações web.

---

## 🚀 Tecnologias Utilizadas

### 💻 Front-end

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### ✨ Bibliotecas e Recursos

![AOS](https://img.shields.io/badge/AOS-Animate_On_Scroll-222222?style=for-the-badge)

- AOS (Animate On Scroll)
- Google Fonts / fontes externas
- WhatsApp para contato

### 🔧 Versionamento e Deploy

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

---

## ✨ Funcionalidades

- 📱 Layout responsivo para diferentes tamanhos de tela
- ☰ Menu hambúrguer para dispositivos móveis
- 🌙 Alternância entre modo claro e escuro
- 💾 Persistência da preferência de tema utilizando `localStorage`
- ⚖️ Cards para apresentação das áreas de atuação
- 🔎 Pop-ups com informações adicionais sobre as áreas jurídicas
- ❓ FAQ interativo com perguntas expansíveis
- 📋 Formulário de contato
- 📱 Link direto para contato via WhatsApp
- 🎬 Animações utilizando AOS
- ♿ Recursos de acessibilidade, como `aria-label`, `aria-expanded` e indicadores de foco
- 🔄 Rolagem suave entre as seções da página

---

## 📄 Seções do Site

### 🏠 Início

Apresentação inicial do profissional, com destaque para a atuação jurídica e botão de contato.

### ⚖️ Áreas de Atuação

Apresentação das áreas jurídicas atendidas, incluindo:

- Direito Cível
- Direito Digital
- Direito Trabalhista
- Direito Previdenciário
- Direito do Consumidor
- Direito Empresarial
- Propriedade Intelectual

Cada área possui uma opção **"Saiba mais"**, exibindo informações adicionais através de um pop-up.

### 👤 Sobre Mim

Apresenta informações sobre a formação, experiência profissional e especializações do advogado.

### 🎓 A Trajetória

Apresenta informações sobre a trajetória acadêmica e profissional.

### 💬 Deixe sua Dúvida

Formulário para coleta de informações do visitante e envio da solicitação de contato.

### ❓ FAQ

Seção de perguntas frequentes com respostas que podem ser expandidas e recolhidas.

### 📞 Contato

Apresenta telefone e e-mail para contato.

---

## 📂 Estrutura do Projeto

```text
ProjetoWebSite/
│
├── Frontend/
│   ├── img/
│   │   ├── Acordo.png
│   │   ├── Balança.png
│   │   ├── Livro.png
│   │   ├── LogoLuideLima.jpg
│   │   ├── Lua.PNG
│   │   ├── LuideLima.jpg
│   │   ├── Malhete.png
│   │   └── Sol.PNG
│   │
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── .gitignore
└── README.md
```

---

## 🧩 Organização do Front-end

O projeto possui uma estrutura simples e organizada, separando os principais arquivos:

- `index.html` → estrutura e conteúdo da página
- `style.css` → estilos, responsividade, temas e animações
- `script.js` → funcionalidades e interações
- `img/` → imagens utilizadas no site
- `.gitignore` → arquivos e pastas que não devem ser versionados
- `README.md` → documentação do projeto

---

## 🎨 Responsividade

O site possui regras específicas de CSS para adaptação a diferentes tamanhos de tela.

Foram implementados ajustes para:

- Smartphones
- Tablets
- Desktops

O menu de navegação também possui comportamento específico para dispositivos móveis através do menu hambúrguer.

---

## 🌙 Modo Claro e Escuro

O projeto possui um sistema de alternância entre **modo claro e modo escuro**.

A preferência do usuário é armazenada utilizando:

```javascript
localStorage
```

Dessa forma, a preferência de tema pode ser recuperada quando a página é carregada novamente.

---

## ❓ FAQ Interativo

A seção de perguntas frequentes utiliza JavaScript para controlar a abertura e o fechamento das respostas.

Também são utilizados atributos de acessibilidade, como:

```html
aria-expanded
```

para indicar o estado de cada pergunta.

---

## 📋 Formulário de Contato

O site possui um formulário para coleta de informações do visitante.

O formulário utiliza o serviço **Sheet Monkey** para envio dos dados e possui campos como:

- Nome completo
- E-mail
- Telefone / WhatsApp
- Cidade / UF
- Área de atuação
- Situação processual
- Descrição do problema
- Aceite para utilização dos dados

---

## 🌐 Deploy

O projeto está publicado utilizando o **GitHub Pages**.

### 🔗 Projeto online

https://kananda09.github.io/ProjetoWebSite/

---

## ▶️ Como Executar o Projeto Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/kananda09/ProjetoWebSite.git
```

### 2. Entre na pasta do projeto

```bash
cd ProjetoWebSite
```

### 3. Abra o projeto

Abra a pasta no **Visual Studio Code** e acesse:

```text
Frontend/index.html
```

Você pode abrir o arquivo diretamente no navegador ou utilizar uma extensão como **Live Server** para executar o projeto localmente.

---

## 🔄 Versionamento

O projeto utiliza **Git** e **GitHub** para controle de versão.

As alterações são organizadas através de commits e enviadas para o repositório remoto na branch `main`.

---

## 📚 Objetivo Acadêmico

Projeto desenvolvido como atividade acadêmica da área de desenvolvimento Front-end, com o objetivo de colocar em prática conhecimentos de:

- Estruturação de páginas HTML
- Estilização com CSS
- Programação com JavaScript
- Responsividade
- Interatividade
- Acessibilidade
- Organização de projetos
- Controle de versão com Git
- Publicação utilizando GitHub Pages

---

## 👩‍💻 Desenvolvedora

**Ivanahi Kananda**

Estudante de **Sistemas de Informação**.

---

<p align="center">
  ⭐ Projeto desenvolvido para fins acadêmicos e de portfólio.
</p>