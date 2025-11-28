# 🚀 GUIA RÁPIDO - Primeiros Passos

## ⚡ Como Visualizar o Site

### Método 1: Duplo Clique (Mais Simples)
1. Navegue até a pasta do projeto
2. Dê duplo clique no arquivo `index.html`
3. O site abrirá no seu navegador padrão

### Método 2: VS Code Live Server (Recomendado)
1. Abra a pasta no VS Code
2. Instale a extensão "Live Server"
3. Clique com botão direito em `index.html`
4. Selecione "Open with Live Server"
5. O site abrirá em `http://localhost:5500`

## 🎯 Primeiras Personalizações (5 minutos)

### 1. SEU NOME E CONTATOS
Abra `index.html` e procure por:

**Linha ~73** - Seu nome:
```html
<h1 class="hero-name">SEU NOME AQUI</h1>
```

**Linha ~101** - Suas redes sociais:
```html
<a href="https://github.com/SEU-USUARIO">
<a href="https://linkedin.com/in/SEU-USUARIO">
<a href="https://wa.me/55SEUNUMERO">
<a href="mailto:SEU-EMAIL@exemplo.com">
```

### 2. SEÇÃO SOBRE MIM
**Linha ~125** - Sua apresentação:
```html
<p class="about-intro">
    ESCREVA SOBRE VOCÊ AQUI...
</p>
```

### 3. SUAS INFORMAÇÕES DE CONTATO
**Linha ~643** - Dados de contato reais:
```html
<a href="mailto:SEU-EMAIL">SEU-EMAIL</a>
<a href="https://wa.me/55SEUNUMERO">(XX) XXXXX-XXXX</a>
```

## 🎨 Mudar Cores do Site

Abra `css/style.css` e na **linha 14** altere:

```css
--primary-color: #667eea;     /* Sua cor principal */
--secondary-color: #764ba2;   /* Sua cor secundária */
```

**Sugestões de cores:**
- Azul Tech: `#3b82f6` e `#1e40af`
- Verde: `#10b981` e `#059669`
- Roxo: `#8b5cf6` e `#6d28d9`
- Laranja: `#f97316` e `#ea580c`

## 📸 Adicionar Imagens dos Seus Projetos

### Passo 1: Organize as imagens
1. Crie uma pasta chamada `assets` na raiz do projeto
2. Dentro dela, crie uma pasta `projects`
3. Adicione suas imagens lá (ex: `projeto1.jpg`, `projeto2.jpg`)

### Passo 2: Atualize o HTML
No arquivo `index.html`, procure por `<img src="https://via.placeholder.com..."` e substitua por:
```html
<img src="assets/projects/projeto1.jpg" alt="Nome do Projeto">
```

### Passo 3: Atualize o JavaScript
No arquivo `js/script.js`, procure por `projectsData` e atualize as URLs das imagens:
```javascript
image: 'assets/projects/projeto1.jpg'
```

## 📱 Adicionar Seus Projetos

### No HTML (index.html)
Copie este bloco e personalize:

```html
<div class="portfolio-item" data-category="mobile" data-aos="zoom-in">
    <div class="portfolio-image">
        <img src="assets/projects/SEU_PROJETO.jpg" alt="Seu Projeto">
        <div class="portfolio-overlay">
            <div class="portfolio-content">
                <h3>Nome do Seu Projeto</h3>
                <p>Breve descrição do projeto</p>
                <div class="portfolio-tags">
                    <span>Tecnologia 1</span>
                    <span>Tecnologia 2</span>
                </div>
                <div class="portfolio-links">
                    <a href="URL_DO_SEU_PROJETO" target="_blank" class="portfolio-link">
                        <i class="fab fa-google-play"></i> Ver Projeto
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

**Categorias disponíveis:**
- `data-category="mobile"` - Aplicativos mobile
- `data-category="web"` - Sites e sistemas web
- `data-category="dashboard"` - Dashboards e BI

### No JavaScript (js/script.js)
Adicione os detalhes do projeto no objeto `projectsData`:

```javascript
10: {
    title: 'Nome do Projeto',
    description: 'Descrição completa do projeto aqui...',
    image: 'assets/projects/projeto.jpg',
    tags: ['Flutter', 'Firebase', 'API'],
    features: [
        'Funcionalidade principal 1',
        'Funcionalidade principal 2',
        'Funcionalidade principal 3'
    ],
    technologies: ['Flutter 3.0', 'Firebase', 'REST API'],
    links: [
        {
            text: 'Ver na Google Play',
            url: 'https://play.google.com/store/apps/...',
            icon: 'fab fa-google-play'
        }
    ]
}
```

## 🔗 Links Úteis para Ícones

- **Font Awesome:** https://fontawesome.com/icons
- **Placeholders para Imagens:** https://placeholder.com/

## 📤 Como Publicar Online

### GitHub Pages (GRATUITO)
1. Crie uma conta no GitHub
2. Crie um novo repositório
3. Faça upload de todos os arquivos
4. Vá em Settings > Pages
5. Selecione a branch `main`
6. Salve e aguarde alguns minutos
7. Seu site estará online!

### Netlify (GRATUITO - Mais Fácil)
1. Acesse https://www.netlify.com/
2. Faça login com GitHub
3. Arraste a pasta do projeto para a página
4. Pronto! URL gerada instantaneamente

## ✅ Checklist de Personalização

- [ ] Alterei meu nome no Hero
- [ ] Atualizei todos os links de redes sociais
- [ ] Modifiquei o texto "Sobre Mim"
- [ ] Adicionei meus contatos reais
- [ ] Substitui as imagens placeholder pelos meus projetos
- [ ] Atualizei as informações dos projetos
- [ ] Testei todos os links
- [ ] Verifiquei o site no celular
- [ ] Configurei as cores do tema (opcional)
- [ ] Adicionei minha foto (opcional)

## 🆘 Problemas Comuns

**Site não abre ou aparece quebrado:**
- Verifique se todos os arquivos estão na estrutura correta
- Certifique-se de que os arquivos CSS e JS estão nas pastas corretas

**Imagens não aparecem:**
- Verifique o caminho das imagens
- Use caminhos relativos: `assets/projects/imagem.jpg`

**Menu não funciona no mobile:**
- Abra o console (F12) e veja se há erros
- Verifique se o arquivo `js/script.js` está carregando

**Animações não funcionam:**
- Verifique sua conexão com a internet (CDNs precisam carregar)
- Tente abrir em outro navegador

## 📞 Precisa de Ajuda?

- Consulte o arquivo `README.md` completo
- Verifique a documentação das bibliotecas usadas
- Teste em diferentes navegadores

---

**🎉 Pronto! Seu portfólio está pronto para ser personalizado e publicado!**

💡 **Dica:** Comece pelas personalizações básicas (nome, contatos, sobre) e depois vá adicionando seus projetos reais gradualmente.