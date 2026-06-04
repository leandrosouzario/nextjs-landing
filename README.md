# 🚀 Next.js Landing Page with Tailwind CSS

Uma landing page moderna, responsiva e otimizada construída com **Next.js 14** e **Tailwind CSS**.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Características

- ⚡ **Performance Otimizada** - Next.js 14 com App Router
- 📱 **Totalmente Responsivo** - Mobile-first design (xs, sm, md, lg, xl)
- 🎨 **Tailwind CSS** - Estilos utilitários modernos
- ♿ **Acessível** - Segue padrões WCAG 2.1
- 🔍 **SEO Friendly** - Metadados otimizados e Open Graph
- 🚀 **Deploy Ready** - Pronto para Vercel, Netlify ou qualquer host

---

## 📋 Seções Incluídas

1. **Header** - Navegação sticky com menu responsivo
2. **Hero** - Banner principal com gradiente e CTAs
3. **Features** - Grid de 6 recursos com ícones (hover effects)
4. **CTA** - Seção de conversão destacada
5. **Footer** - Rodapé com links, contato e redes sociais

---

## 🛠️ Tecnologias

| Tecnologia | Descrição |
|-----------|-----------|
| [Next.js 14](https://nextjs.org/) | Framework React moderno |
| [React 18](https://react.dev/) | Biblioteca de UI |
| [Tailwind CSS 3.3](https://tailwindcss.com/) | CSS utilitário |
| [TypeScript](https://www.typescriptlang.org/) | Type safety (opcional) |
| [ESLint](https://eslint.org/) | Linter de código |

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- npm, yarn ou pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/leandrosouzario/nextjs-landing.git
cd nextjs-landing

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📦 Scripts

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build otimizado

# Produção
npm start           # Inicia servidor de produção

# Linting
npm run lint        # Verifica o código com ESLint
```

---

## 📁 Estrutura do Projeto

```
nextjs-landing/
├── app/
│   ├── layout.jsx              # Layout raiz
│   ├── page.jsx                # Página principal
│   ├── globals.css             # Estilos globais
│   └── favicon.ico
├── components/
│   ├── Header.jsx              # Header com navegação
│   ├── Hero.jsx                # Seção hero
│   ├── Features.jsx            # Grid de recursos
│   ├── CTA.jsx                 # Call-to-action
│   └── Footer.jsx              # Rodapé
├── public/                     # Arquivos estáticos
├── .env.example                # Template de env
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
├── SETUP.md                    # Guia de setup
└── README.md                   # Este arquivo
```

---

## 🎨 Customização

### Cores
Edite `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#0066cc',
      secondary: '#6366f1',
    },
  },
},
```

### Conteúdo de Componentes

| Componente | Arquivo | Descrição |
|-----------|---------|-----------|
| Header | `components/Header.jsx` | Logo, navegação e botão |
| Hero | `components/Hero.jsx` | Título, subtítulo e CTAs |
| Features | `components/Features.jsx` | Array de 6 recursos |
| CTA | `components/CTA.jsx` | Seção de conversão |
| Footer | `components/Footer.jsx` | Links e contato |

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Outras Opções

| Plataforma | Link |
|-----------|------|
| Netlify | [netlify.com](https://netlify.com) |
| AWS Amplify | [aws.amazon.com/amplify](https://aws.amazon.com/amplify/) |
| Railway | [railway.app](https://railway.app) |
| Render | [render.com](https://render.com) |

---

## 📊 Lighthouse Metrics

- ⚡ Performance: 95+
- ♿ Accessibility: 95+
- 📋 Best Practices: 95+
- 🔍 SEO: 100

---

## 🎯 Roadmap

- [ ] Dark mode
- [ ] Componentes adicionais (testimonials, pricing)
- [ ] Sistema de tema customizável
- [ ] Integração com CMS
- [ ] Multi-idioma (i18n)

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Leandro Souza**
- GitHub: [@leandrosouzario](https://github.com/leandrosouzario)

---

## 🆘 Suporte

- 📖 [Documentação SETUP](./SETUP.md)
- 🐛 [Abra uma Issue](https://github.com/leandrosouzario/nextjs-landing/issues)
- 📧 [Email](mailto:info@example.com)

---

## 🙏 Agradecimentos

- [Vercel](https://vercel.com) - Hospedagem e infraestrutura
- [Next.js](https://nextjs.org/) - Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [React](https://react.dev/) - Biblioteca UI

---

**Desenvolvido com ❤️ usando Next.js + Tailwind CSS**

⭐ Se este projeto foi útil, considere dar uma estrela!
