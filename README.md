# 🚀 Next.js Landing Page with Tailwind CSS

Uma landing page moderna, responsiva e otimizada construída com Next.js 14 e Tailwind CSS.

## ✨ Características

- ⚡ **Performance**: Otimizado com Next.js 14
- 📱 **Responsivo**: Mobile-first, funciona em todos os dispositivos
- 🎨 **Design Moderno**: Tailwind CSS com componentes reutilizáveis
- ♿ **Acessível**: Segue padrões WCAG
- 🔍 **SEO**: Otimizado para mecanismos de busca
- 🚀 **Deploy Ready**: Pronto para Vercel ou qualquer hosting

## 📋 Seções

- **Header** - Navegação com logo e menu responsivo
- **Hero** - Seção principal com CTA
- **Features** - Cards com benefícios/recursos
- **CTA** - Chamada para ação
- **Footer** - Links e informações

## 🛠️ Tecnologias

- [Next.js 14](https://nextjs.org/) - React framework
- [React 18](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety (opcional)

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Setup

```bash
# Clone o repositório
git clone https://github.com/leandrosouzario/nextjs-landing.git
cd nextjs-landing

# Instale as dependências
npm install
# ou
yarn install
```

## 🚀 Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🔨 Build

```bash
# Build para produção
npm run build

# Inicie o servidor de produção
npm start
```

## 📁 Estrutura do Projeto

```
nextjs-landing/
├── app/
│   ├── layout.jsx          # Layout raiz
│   ├── page.jsx            # Página principal
│   ├── globals.css         # Estilos globais
│   └── favicon.ico
├── components/
│   ├── Header.jsx          # Header component
│   ├── Hero.jsx            # Hero section
│   ├── Features.jsx        # Features grid
│   ├── CTA.jsx             # Call-to-action section
│   └── Footer.jsx          # Footer component
├── public/                 # Static assets
├── .gitignore
├── next.config.js          # Next.js config
├── tailwind.config.js      # Tailwind config
├── postcss.config.js       # PostCSS config
├── package.json
└── README.md
```

## 🎨 Personalização

### Cores
Edite `tailwind.config.js` para customizar a paleta de cores:

```js
theme: {
  colors: {
    primary: '#0066cc',
    secondary: '#6366f1',
  }
}
```

### Conteúdo
- **Header**: `components/Header.jsx`
- **Hero**: `components/Hero.jsx`
- **Features**: `components/Features.jsx`
- **CTA**: `components/CTA.jsx`
- **Footer**: `components/Footer.jsx`

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Outras Plataformas
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Heroku](https://heroku.com)

## 📊 Performance

- Lighthouse: > 90
- SEO: Otimizado
- Acessibilidade: WCAG 2.1

## 📝 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

[leandrosouzario](https://github.com/leandrosouzario)

## 🤝 Contribuições

Contribuições são bem-vindas! Abra uma issue ou pull request.

---

**Desenvolvido com ❤️ usando Next.js + Tailwind CSS**
