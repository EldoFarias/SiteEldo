# 🚀 Portfólio Profissional - Eldo da Silva Farias

Portfólio profissional moderno e responsivo desenvolvido para showcasing de projetos e serviços de desenvolvimento Full-Stack.

## ✨ Características

- ⚡ Design moderno e profissional
- 📱 100% Responsivo (Mobile-First)
- 🎨 Animações suaves e interativas
- 🌟 Efeitos visuais impressionantes
- 🎯 SEO otimizado
- ⚡ Performance otimizada
- 🎭 Particles.js para fundo interativo
- 📊 Seção de portfólio com filtros
- 💼 9 projetos de exemplo
- 📝 Formulário de contato funcional
- 🎨 Dark mode tech theme

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com animações
- **JavaScript ES6** - Interatividade e efeitos
- **Particles.js** - Fundo animado interativo
- **AOS (Animate On Scroll)** - Animações na rolagem
- **Font Awesome** - Ícones
- **Google Fonts (Poppins)** - Tipografia moderna

## 📁 Estrutura do Projeto

```
SITE_ELDO/
│
├── index.html              # Página principal
├── README.md              # Documentação
│
├── css/
│   └── style.css          # Estilos globais e responsivos
│
├── js/
│   └── script.js          # Scripts e interatividade
│
└── assets/               # Imagens e recursos (criar conforme necessário)
    ├── favicon.ico
    └── projects/         # Imagens dos projetos
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` diretamente no navegador
3. Pronto! O site está funcionando

### Opção 2: Servidor Local (Recomendado)

Se você tiver Python instalado:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Ou use a extensão Live Server do VS Code.

Depois acesse: `http://localhost:8000`

## 🎨 Personalização

### 1️⃣ Informações Pessoais

Edite o arquivo `index.html` e altere:

**Informações de Contato:**
```html
<!-- Linha ~27 - Meta tags -->
<meta name="description" content="Sua descrição aqui">
<meta name="author" content="Seu Nome">

<!-- Linha ~73 - Hero Section -->
<h1 class="hero-name">Seu Nome Completo</h1>

<!-- Linha ~101 - Social Links -->
<a href="https://github.com/seu-usuario" target="_blank">
<a href="https://linkedin.com/in/seu-usuario" target="_blank">
<a href="https://wa.me/5511999999999" target="_blank">
<a href="mailto:seu-email@exemplo.com">

<!-- Linha ~643 - Informações de Contato -->
<a href="mailto:seu-email@exemplo.com">seu-email@exemplo.com</a>
<a href="https://wa.me/5511999999999">(11) 99999-9999</a>
```

### 2️⃣ Cores do Tema

Edite o arquivo `css/style.css` nas variáveis CSS (linhas 14-31):

```css
:root {
    --primary-color: #667eea;        /* Cor primária */
    --secondary-color: #764ba2;      /* Cor secundária */
    --accent-color: #f093fb;         /* Cor de destaque */
    /* ... outras cores ... */
}
```

**Sugestões de Paletas:**

```css
/* Paleta Azul/Roxo (Atual) */
--primary-color: #667eea;
--secondary-color: #764ba2;

/* Paleta Verde Tech */
--primary-color: #10b981;
--secondary-color: #059669;

/* Paleta Laranja/Rosa */
--primary-color: #f97316;
--secondary-color: #ec4899;

/* Paleta Azul Escuro */
--primary-color: #3b82f6;
--secondary-color: #1e40af;
```

### 3️⃣ Adicionar Novos Projetos

**No HTML (index.html - linha ~353):**

```html
<div class="portfolio-item" data-category="mobile" data-aos="zoom-in">
    <div class="portfolio-image">
        <img src="URL_DA_IMAGEM" alt="Nome do Projeto">
        <div class="portfolio-overlay">
            <div class="portfolio-content">
                <h3>Nome do Projeto</h3>
                <p>Descrição breve do projeto</p>
                <div class="portfolio-tags">
                    <span>Tecnologia 1</span>
                    <span>Tecnologia 2</span>
                </div>
                <div class="portfolio-links">
                    <a href="URL_EXTERNA" target="_blank" class="portfolio-link">
                        <i class="fas fa-external-link-alt"></i> Ver Projeto
                    </a>
                    <button class="portfolio-link view-details" data-project="10">
                        <i class="fas fa-info-circle"></i> Detalhes
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
```

**No JavaScript (js/script.js - adicione no objeto projectsData):**

```javascript
10: {
    title: 'Nome do Projeto',
    description: 'Descrição detalhada do projeto...',
    image: 'URL_DA_IMAGEM',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    features: [
        'Funcionalidade 1',
        'Funcionalidade 2',
        'Funcionalidade 3'
    ],
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    links: [
        { text: 'Ver Projeto', url: 'URL', icon: 'fas fa-external-link-alt' }
    ]
}
```

### 4️⃣ Substituir Imagens dos Projetos

As imagens atuais são placeholders. Para substituir:

1. Crie uma pasta `assets/projects/` na raiz
2. Adicione suas imagens dos projetos (recomendado: 800x500px)
3. No HTML, substitua as URLs:

```html
<!-- De: -->
<img src="https://via.placeholder.com/600x400/..." alt="Projeto">

<!-- Para: -->
<img src="assets/projects/meu-projeto.jpg" alt="Meu Projeto">
```

4. Atualize também no JavaScript (arquivo `script.js`) no objeto `projectsData`

### 5️⃣ Modificar o Texto "Sobre Mim"

Edite `index.html` na seção About (linha ~125):

```html
<p class="about-intro">
    Seu texto sobre você aqui...
</p>
<p>
    Mais informações sobre sua carreira...
</p>
```

### 6️⃣ Adicionar/Remover Habilidades

Edite `index.html` na seção Skills (linha ~185):

```html
<div class="skill-card" data-aos="flip-left" data-aos-delay="100">
    <div class="skill-icon">
        <i class="fab fa-nome-do-icone"></i>
    </div>
    <h3>Nome da Tecnologia</h3>
    <p>Breve descrição</p>
</div>
```

**Ícones disponíveis:** Consulte [Font Awesome](https://fontawesome.com/icons)

### 7️⃣ Personalizar Serviços

Edite `index.html` na seção Services (linha ~480):

```html
<div class="service-card" data-aos="fade-up">
    <div class="service-icon">
        <i class="fas fa-icone"></i>
    </div>
    <h3>Nome do Serviço</h3>
    <p>Descrição do serviço...</p>
    <ul class="service-features">
        <li><i class="fas fa-check"></i> Item 1</li>
        <li><i class="fas fa-check"></i> Item 2</li>
    </ul>
</div>
```

### 8️⃣ Modificar Depoimentos

Edite `index.html` na seção Testimonials (linha ~606):

```html
<div class="testimonial-card">
    <div class="testimonial-content">
        <i class="fas fa-quote-left quote-icon"></i>
        <p>Texto do depoimento aqui...</p>
    </div>
    <div class="testimonial-author">
        <div class="author-info">
            <h4>Nome do Cliente</h4>
            <p>Cargo - Empresa</p>
        </div>
        <div class="testimonial-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
    </div>
</div>
```

### 9️⃣ Configurar Formulário de Contato

O formulário atualmente simula o envio. Para integrar com backend real:

Edite `js/script.js` na função `initContactForm()` (linha ~423):

**Opção 1: Integração com EmailJS (Gratuito)**

```javascript
// Substitua o bloco try/catch por:
try {
    await emailjs.send(
        'seu_service_id',
        'seu_template_id',
        formData,
        'sua_public_key'
    );
    // Success message...
}
```

**Opção 2: Integração com Backend Próprio**

```javascript
const response = await fetch('https://seu-backend.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});

if (response.ok) {
    // Success
} else {
    // Error
}
```

## 🎯 Efeitos e Animações

O site inclui várias animações e efeitos:

- ✅ Particles.js no fundo (interativo com mouse)
- ✅ Efeito de digitação no hero
- ✅ Animações AOS ao rolar a página
- ✅ Hover effects nos cards e botões
- ✅ Transições suaves entre seções
- ✅ Filtro animado de portfólio
- ✅ Slider de depoimentos
- ✅ Modal de detalhes dos projetos
- ✅ Botão "voltar ao topo"
- ✅ Navbar com efeito ao rolar

## 📱 Responsividade

O site é 100% responsivo e foi testado em:

- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1440px+)

## 🌐 Deploy

### GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione a branch `main` e pasta `root`
5. Clique em Save
6. Seu site estará em: `https://seu-usuario.github.io/nome-repo`

### Netlify

1. Acesse [Netlify](https://www.netlify.com/)
2. Arraste a pasta do projeto para o deploy
3. Pronto! URL gerada automaticamente

### Vercel

1. Instale Vercel CLI: `npm i -g vercel`
2. Na pasta do projeto: `vercel`
3. Siga as instruções
4. Deploy concluído!

## 🔧 Troubleshooting

**Animações não funcionam:**
- Verifique se os scripts AOS e Particles.js estão carregando
- Abra o console do navegador (F12) e veja se há erros

**Imagens não aparecem:**
- Verifique os caminhos das imagens
- Use caminhos relativos ou absolutos corretos

**Formulário não envia:**
- Configure a integração com EmailJS ou seu backend
- Verifique a conexão de rede no console

**Menu mobile não abre:**
- Verifique se o JavaScript está carregando
- Confirme que os IDs dos elementos estão corretos

## 📊 Analytics (Opcional)

Para adicionar Google Analytics, insira antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎨 Inspirações e Créditos

- Design inspirado em portfólios modernos do Awwwards
- Particles.js por Vincent Garreau
- AOS (Animate On Scroll) por Michał Sajnóg
- Font Awesome para ícones
- Google Fonts (Poppins)

## 📄 Licença

Este projeto é de uso livre. Sinta-se à vontade para modificar e usar como desejar.

## 📞 Suporte

Se tiver dúvidas ou precisar de ajuda:

- 📧 Email: contato@eldofarias.com
- 💼 LinkedIn: [linkedin.com/in/eldofarias](https://linkedin.com)
- 📱 WhatsApp: (11) 99999-9999

---

**Desenvolvido com ❤️ por Eldo da Silva Farias**

🚀 **Dica:** Para melhores resultados, adicione imagens reais dos seus projetos e personalize todo o conteúdo com suas informações reais!
