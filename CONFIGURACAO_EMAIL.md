# ⚙️ Configuração do Formulário de Contato

## 📧 Como Configurar o Email para Receber Mensagens

O formulário de contato do seu portfólio está configurado para enviar mensagens para: **eldofarias81@outlook.com**

Existem duas opções de configuração:

---

## Opção 1: Formspree (GRATUITO - Recomendado)

O Formspree é um serviço gratuito que permite receber emails de formulários web sem precisar de backend.

### Como Configurar:

1. **Acesse:** https://formspree.io/
2. **Crie uma conta** gratuita
3. **Crie um novo formulário:**
   - Clique em "+ New Form"
   - Nome: "Contato Site Portfólio"
   - Email: `eldofarias81@outlook.com`

4. **Copie o código do formulário:**
   - Você receberá um código como: `https://formspree.io/f/XXXXXXX`

5. **Atualize no arquivo `js/script.js` (linha 516):**
   ```javascript
   const response = await fetch('https://formspree.io/f/XXXXXXX', {
   ```
   Substitua `XXXXXXX` pelo código que você recebeu

6. **Pronto!** As mensagens serão enviadas para seu email automaticamente

### Plano Gratuito:
- ✅ 50 envios por mês
- ✅ Sem propagandas
- ✅ Proteção contra spam
- ✅ Notificações por email

---

## Opção 2: Mailto (Alternativa Simples)

Esta opção abre o cliente de email do visitante.

### Como Ativar:

No arquivo `js/script.js` (linha 510), **descomente** esta linha:

```javascript
window.location.href = `mailto:eldofarias81@outlook.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;
```

E **comente** todo o bloco do Formspree (linhas 516-539).

### Vantagens:
- ✅ Sem configuração
- ✅ Funciona offline

### Desvantagens:
- ❌ Requer que o visitante tenha email configurado
- ❌ Menos profissional

---

## Opção 3: Backend Próprio (Avançado)

Se você quiser ter controle total, pode criar seu próprio backend.

### Exemplo com Node.js + Nodemailer:

```javascript
const response = await fetch('https://seu-backend.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

Você precisará:
- Servidor Node.js
- Biblioteca Nodemailer configurada
- Servidor SMTP (Outlook, Gmail, etc.)

---

## 🔧 Testando o Formulário

1. Abra o site no navegador
2. Vá até a seção "Contato"
3. Preencha o formulário
4. Clique em "Enviar Mensagem"
5. Verifique seu email: `eldofarias81@outlook.com`

---

## ⚠️ IMPORTANTE - Formspree Atual

O código atual está usando um endpoint de teste do Formspree:
```
https://formspree.io/f/xanyqpjb
```

**VOCÊ PRECISA SUBSTITUIR ESTE CÓDIGO** pelo seu próprio código do Formspree seguindo os passos da "Opção 1" acima.

Sem esta configuração, os emails podem não chegar ou ir para o proprietário do código de teste.

---

## 📱 Fallback Automático

Se o Formspree falhar por algum motivo, o sistema automaticamente oferece um link para abrir o cliente de email do visitante com os dados preenchidos.

---

## 🆘 Problemas Comuns

**Não estou recebendo emails:**
- Verifique se configurou o Formspree com SEU código
- Confira a pasta de SPAM do Outlook
- Teste com outro email para confirmar

**Erro "Failed to fetch":**
- Verifique sua conexão com internet
- Confirme que o código do Formspree está correto
- Tente usar o fallback mailto

**Formulário não envia:**
- Abra o console do navegador (F12)
- Veja se há erros de JavaScript
- Verifique se todos os campos estão preenchidos

---

## 💡 Dica Extra

Para evitar spam, considere adicionar:
- reCAPTCHA do Google
- Limitação de envios por IP
- Validação honeypot

O Formspree já inclui proteção básica contra spam.

---

**Última atualização:** 2024
**Email configurado:** eldofarias81@outlook.com