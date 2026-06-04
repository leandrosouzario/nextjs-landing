# 📚 SETUP - Instruções de Configuração

## 🚀 Quickstart

### 1. Clone o repositório
```bash
git clone https://github.com/leandrosouzario/nextjs-landing.git
cd nextjs-landing
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação rodando.

---

## 🔧 Configuração

### Variáveis de Ambiente
Copie o arquivo `.env.example` para `.env.local`:
```bash
cp .env.example .env.local
```

Configure suas variáveis conforme necessário.

---

## 📦 Scripts Disponíveis

- **`npm run dev`** - Inicia o servidor de desenvolvimento
- **`npm run build`** - Cria um build otimizado para produção
- **`npm start`** - Inicia o servidor de produção
- **`npm run lint`** - Executa o ESLint para verificar o código

---

## 📂 Estrutura do Projeto

```
nextjs-landing/
├── app/                    # App Router (Next.js 14)
│   ├── layout.jsx         # Layout raiz com metadados
│   ├── page.jsx           # Página principal
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── Header.jsx         # Navegação e header
│   ├── Hero.jsx           # Seção hero principal
│   ├── Features.jsx       # Grid de recursos
│   ├── CTA.jsx            # Call-to-action
│   └── Footer.jsx         # Rodapé
├── public/                # Arquivos estáticos
├── .env.example           # Template de variáveis
├── .gitignore             # Arquivos ignorados pelo git
├── next.config.js         # Configuração Next.js
├── tailwind.config.js     # Configuração Tailwind CSS
├── postcss.config.js      # Configuração PostCSS
├── tsconfig.json          # Configuração TypeScript
├── package.json           # Dependências do projeto
└── README.md              # Documentação principal
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

### Conteúdo
- **Header**: `components/Header.jsx`
- **Hero**: `components/Hero.jsx`
- **Features**: `components/Features.jsx`
- **CTA**: `components/CTA.jsx`
- **Footer**: `components/Footer.jsx`

---

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
- [Railway](https://railway.app)

---

## 📊 Performance

- ⚡ Next.js 14 com App Router
- 🎨 Tailwind CSS para estilos
- ♿ Acessibilidade WCAG 2.1
- 📱 Mobile-first responsive design
- 🔍 SEO otimizado

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT.

---

## 👤 Autor

[leandrosouzario](https://github.com/leandrosouzario)

---

## 🆘 Suporte

Se tiver dúvidas ou problemas:
1. Abra uma [Issue](https://github.com/leandrosouzario/nextjs-landing/issues)
2. Envie um email para: info@example.com

---

**Desenvolvido com ❤️ usando Next.js + Tailwind CSS**
