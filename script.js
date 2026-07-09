/* ===== LEO ELETRO — script.js ===== */
(function () {
  'use strict';

  /* ---------- Data ---------- */
  var servicos = [
    { num: '01', title: 'Troca de Tela', desc: 'Display trincado ou sem toque? Substituímos com peça de qualidade e garantia.' },
    { num: '02', title: 'Troca de Bateria', desc: 'Bateria viciada ou descarregando rápido? Deixamos seu aparelho com fôlego novo.' },
    { num: '03', title: 'Troca de Câmera', desc: 'Fotos borradas ou câmera sem funcionar? Reparo preciso, frontal e traseira.' },
    { num: '04', title: 'Troca de Conector', desc: 'Não carrega ou o cabo não firma? Trocamos o conector de carga do seu celular.' },
    { num: '05', title: 'Conserto iPhone', desc: 'Técnicos especializados em Apple. Diagnóstico honesto e conserto de todos os modelos.' },
    { num: '06', title: 'Conserto Smartphone', desc: 'Android de qualquer marca. Placa, software, botões — a gente resolve.' }
  ];

  var produtos = [
    { name: 'Power Bank Magnético', tag: 'Carregadores', img: 'Assets/leo-eletro-power-bank-magnetico-agold.webp' },
    { name: 'AirPods Pro', tag: 'Fones', img: 'Assets/leo-eletro-fone-airpods-pro.webp' },
    { name: 'Carregador Turbo', tag: 'Cabos & fontes', img: 'Assets/leo-eletro-carregador-turbo-usbc-20w.webp' },
    { name: 'Headphone P9 Pro', tag: 'Headphones', img: 'Assets/leo-eletro-headphone-p9-pro.webp' },
    { name: 'iPhones', tag: 'Smartphones', img: 'Assets/leo-eletro-iphones-vitrine.webp' },
    { name: 'Capas & películas', tag: 'Proteção', img: 'Assets/leo-eletro-capas-peliculas-vitrine.webp' },
    { name: 'Smartwatch', tag: 'Wearables', img: 'Assets/smartwatch-blulory-glifo7-pro.webp' },
    { name: 'Caixas de som', tag: 'Áudio', img: 'Assets/caixa-som-altomex-al8901-portatil.webp' }
  ];

  var reviews = [
    { name: 'Roberto Lehmam de Paiva', meta: 'há 2 meses · Google', text: 'Sou sempre bem atendido e tem minha total credibilidade. Neles eu confio 100%.' },
    { name: 'FABIO De Souza Messias', meta: 'Local Guide · há 3 anos', text: 'Excelentes profissionais. Sempre que preciso de algo para meu smartphone ou para o iPhone da minha esposa, vou à Leo Eletro. Desde acessórios até troca de tela e bateria, sempre realizam um ótimo serviço. Grande variedade, preços competitivos e ótima localização. Recomendo.' },
    { name: 'João Marcos Bandeira', meta: 'Local Guide · há 2 anos', text: 'Conserto com técnico capacitado e qualificado, diplomas à mostra para o cliente, assento para espera, atendimento personalizado e aparelhos para venda com garantia e preço acessível.' },
    { name: 'Raissa Barbosa', meta: 'há 1 ano · Google', text: 'Fui super bem acolhida por todos. Me venderam uma peça de qualidade e preço justo. Também ganhei um cafezinho enquanto esperava!' },
    { name: 'Priscilla Preciosa', meta: 'há 1 ano · Google', text: 'Excelente atendimento. Sempre conserto aparelhos com eles. São super honestos e entregam o serviço rapidamente. Super indico.' },
    { name: 'Jhonny Almeida', meta: 'há 3 anos · Google', text: 'Ótima atenção por parte dos funcionários, produtos de boa qualidade e excelente serviço técnico especializado em iPhone e todas as marcas.' },
    { name: 'Ingrid Freitas', meta: 'há 1 ano · Google', text: 'Excelente atendimento! Leo é gente fina demais e os atendentes são super atenciosos também. Com toda certeza virei cliente. Sucesso!' },
    { name: 'Alexandre Ramos', meta: 'há 3 anos · Google', text: 'Só tenho a agradecer todo o atendimento, desde os funcionários até o proprietário, que busca sempre a melhor solução. Equipe honesta, ágil e com preço justo.' },
    { name: 'Marcelo Moretti', meta: 'há 1 ano · Google', text: 'Os caras são feras no conserto de celular. Sempre faço serviços com eles. Atendimento nota 10.' },
    { name: 'Yuri Martins', meta: 'Local Guide · há 6 meses', text: 'Serviço e atendimento de excelência. Ótimos preços e variedade de produtos.' }
  ];

  var faqs = [
    { q: 'Os serviços têm garantia?', a: 'Sim. Todo conserto realizado na Leo Eletro tem garantia. Você recebe as condições no momento do orçamento, antes de aprovar o serviço.' },
    { q: 'Qual o prazo do conserto?', a: 'A maioria dos reparos, como troca de tela e bateria, é feita no mesmo dia. Casos mais complexos passam por diagnóstico e informamos o prazo antes de começar.' },
    { q: 'Vocês atendem Apple e Android?', a: 'Sim. Nossa equipe é especializada em iPhone (Apple) e em smartphones Android de todas as marcas.' },
    { q: 'Quais as formas de pagamento?', a: 'Aceitamos dinheiro, PIX, cartões de débito e crédito. Fale com a gente no WhatsApp para condições e parcelamento.' },
    { q: 'Vendem aparelhos e acessórios?', a: 'Sim. Além da assistência técnica, somos loja completa de acessórios: capas, películas, carregadores, fones, caixas de som, smartwatches e muito mais.' }
  ];

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }

  var WA_NUMBER = '5521970108814';
  function waSobre(nome) {
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent('Olá, vim através do site e gostaria de saber sobre ' + nome);
  }

  /* ---------- Render services ---------- */
  (function () {
    var grid = $('#services-grid');
    if (!grid) return;
    grid.innerHTML = servicos.map(function (s, i) {
      return '<a class="svc reveal" data-delay="' + (i % 3) + '" href="' + waSobre(s.title) + '" target="_blank" rel="noopener" aria-label="Falar no WhatsApp sobre ' + esc(s.title) + '">' +
        '<div class="svc__num">' + s.num + '</div>' +
        '<h3>' + esc(s.title) + '</h3>' +
        '<p>' + esc(s.desc) + '</p></a>';
    }).join('');
  })();

  /* ---------- Render products ---------- */
  (function () {
    var grid = $('#products-grid');
    if (!grid) return;
    grid.innerHTML = produtos.map(function (p, i) {
      var media = p.img
        ? '<div class="prod__media"><img src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy"></div>'
        : '<div class="prod__media"><div class="prod__ph"><span>' + esc(p.name) + '</span></div></div>';
      return '<a class="prod reveal" data-delay="' + (i % 4) + '" href="' + waSobre(p.name) + '" target="_blank" rel="noopener" aria-label="Falar no WhatsApp sobre ' + esc(p.name) + '">' + media +
        '<div class="prod__body"><div class="prod__tag">' + esc(p.tag) + '</div>' +
        '<div class="prod__name">' + esc(p.name) + '</div></div></a>';
    }).join('');
  })();

  /* ---------- Render FAQ ---------- */
  (function () {
    var list = $('#faq-list');
    if (!list) return;
    list.innerHTML = faqs.map(function (f, i) {
      var n = (i + 1 < 10 ? '0' : '') + (i + 1);
      return '<div class="faq-item' + (i === 0 ? ' open' : '') + ' reveal" data-delay="' + (i % 3) + '">' +
        '<button class="faq-item__q" type="button" aria-expanded="' + (i === 0 ? 'true' : 'false') + '">' +
        '<span class="faq-item__num">' + n + '</span>' +
        '<span class="faq-item__label">' + esc(f.q) + '</span>' +
        '<span class="faq-item__sign" aria-hidden="true"></span></button>' +
        '<div class="faq-item__a"><div><p>' + esc(f.a) + '</p></div></div></div>';
    }).join('');
    list.addEventListener('click', function (e) {
      var btn = e.target.closest('.faq-item__q');
      if (!btn) return;
      var item = btn.parentElement;
      var wasOpen = item.classList.contains('open');
      Array.prototype.forEach.call(list.children, function (el) {
        el.classList.remove('open');
        var q = $('.faq-item__q', el);
        if (q) q.setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  })();

  /* ---------- Reviews (featured + marquee wall) ---------- */
  (function () {
    var wall = $('#reviews-wall');
    var featEl = $('#reviews-featured');
    if (!wall) return;

    function initials(name) {
      var parts = String(name).trim().split(/\s+/);
      var a = parts[0] ? parts[0].charAt(0) : '';
      var b = parts.length > 1 ? parts[parts.length - 1].charAt(0) : '';
      return (a + b).toUpperCase();
    }

    var G = '<svg class="rev-g" viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-.97 2.6-2.06 3.4l3.33 2.6c1.94-1.8 3.06-4.44 3.06-7.6 0-.74-.07-1.45-.2-2.13H12z"/><path fill="#34A853" d="M6.5 14.29l-.75.57-2.66 2.07C4.79 20.02 8.13 22.2 12 22.2c2.7 0 4.96-.89 6.62-2.42l-3.33-2.6c-.9.6-2.05.96-3.29.96-2.53 0-4.68-1.71-5.45-4.01l-.05-.84z"/><path fill="#FBBC05" d="M3.09 6.97A9.96 9.96 0 0 0 2 11.9c0 1.57.37 3.05 1.09 4.36 0 .01 3.41-2.65 3.41-2.65a5.98 5.98 0 0 1-.31-1.87c0-.65.11-1.28.31-1.87L3.09 6.97z"/><path fill="#4285F4" d="M12 5.98c1.47 0 2.78.51 3.82 1.5l2.85-2.85C16.95 2.99 14.7 2 12 2 8.13 2 4.79 4.18 3.09 6.97l3.41 2.65C7.32 7.69 9.47 5.98 12 5.98z"/></svg>';
    var STAR = '<svg class="rev-star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2l2.86 6.02 6.64.86-4.9 4.55 1.25 6.57L12 17.9l-5.91 3.3 1.26-6.57-4.9-4.55 6.63-.86z"/></svg>';
    var CHECK = '<svg class="rev-check" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 12.5l3.2 3.2L17 8.5"/></svg>';

    function stars() {
      var s = '';
      for (var i = 0; i < 5; i++) s += STAR;
      return '<span class="rev-stars" role="img" aria-label="5 de 5 estrelas">' + s + '</span>';
    }
    function avatar(name) {
      return '<span class="rev-av" aria-hidden="true">' + esc(initials(name)) +
        '<span class="rev-av__badge">' + CHECK + '</span></span>';
    }

    function card(r) {
      return '<article class="tcard">' +
        '<div class="tcard__top">' + stars() + G + '</div>' +
        '<p class="tcard__text">' + esc(r.text) + '</p>' +
        '<div class="tcard__foot">' + avatar(r.name) +
        '<span class="rev-who"><span class="rev-name">' + esc(r.name) + '</span>' +
        '<span class="rev-meta">' + esc(r.meta) + '</span></span></div></article>';
    }

    /* Featured = strongest review, shown large */
    var start = 0;
    if (featEl && reviews.length) {
      var f = reviews[0];
      start = 1;
      featEl.innerHTML =
        '<article class="fcard">' +
        '<span class="fcard__glow" aria-hidden="true"></span>' +
        '<div class="fcard__body">' + stars() +
        '<p class="fcard__text">' + esc(f.text) + '</p>' +
        '<div class="fcard__foot">' + avatar(f.name) +
        '<span class="rev-who"><span class="rev-name">' + esc(f.name) + '</span>' +
        '<span class="rev-meta">' + esc(f.meta) + '</span></span>' +
        '<span class="fcard__badge">' + G + '<span>Avaliação verificada</span></span>' +
        '</div></div></article>';

      var fc = featEl.querySelector('.fcard');
      if (fc && window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        fc.addEventListener('pointermove', function (e) {
          var b = fc.getBoundingClientRect();
          var px = (e.clientX - b.left) / b.width;
          var py = (e.clientY - b.top) / b.height;
          fc.style.setProperty('--mx', (px * 100) + '%');
          fc.style.setProperty('--my', (py * 100) + '%');
          fc.style.setProperty('--rx', ((py - 0.5) * -3.5) + 'deg');
          fc.style.setProperty('--ry', ((px - 0.5) * 3.5) + 'deg');
        });
        fc.addEventListener('pointerleave', function () {
          fc.style.setProperty('--rx', '0deg');
          fc.style.setProperty('--ry', '0deg');
        });
      }
    }

    /* Marquee — remaining reviews, duplicated so -50% loops seamlessly */
    var cards = reviews.slice(start).map(card).join('');
    wall.innerHTML = '<div class="revq"><div class="revq__track">' + cards + cards + '</div></div>';
  })();

  /* ---------- Nav scroll state ---------- */
  (function () {
    var nav = $('#nav');
    if (!nav) return;
    function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 40); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  /* ---------- Reveal on scroll ---------- */
  (function () {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var els = document.querySelectorAll('.reveal');
    if (reduce || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var d = (parseInt(e.target.getAttribute('data-delay'), 10) || 0) * 90;
          e.target.style.transitionDelay = d + 'ms';
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.14 });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  })();

  /* ---------- Animated counters ---------- */
  (function () {
    var section = $('#counters');
    if (!section) return;
    var nums = section.querySelectorAll('b[data-count]');
    var done = false;

    function fmt(v, dec, prefix, suffix) {
      var s = v.toLocaleString('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec });
      return (prefix || '') + s + (suffix || '');
    }

    function run() {
      if (done) return; done = true;
      var start = performance.now(), dur = 1600;
      var ease = function (t) { return 1 - Math.pow(1 - t, 3); };
      function tick(now) {
        var p = Math.min(1, (now - start) / dur), e = ease(p);
        Array.prototype.forEach.call(nums, function (el) {
          var target = parseFloat(el.getAttribute('data-count'));
          var dec = parseInt(el.getAttribute('data-decimals'), 10) || 0;
          el.textContent = fmt(e * target, dec, el.getAttribute('data-prefix'), el.getAttribute('data-suffix'));
        });
        if (p < 1) requestAnimationFrame(tick);
        else Array.prototype.forEach.call(nums, function (el) {
          var target = parseFloat(el.getAttribute('data-count'));
          var dec = parseInt(el.getAttribute('data-decimals'), 10) || 0;
          el.textContent = fmt(target, dec, el.getAttribute('data-prefix'), el.getAttribute('data-suffix'));
        });
      }
      requestAnimationFrame(tick);
    }

    if (!('IntersectionObserver' in window)) { run(); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { run(); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(section);
  })();

  /* ---------- Contact form → WhatsApp ---------- */
  (function () {
    var form = $('#contact-form');
    if (!form) return;
    var err = $('#form-error');

    // Máscara de telefone com DDD: (XX) XXXXX-XXXX
    var tel = form.tel;
    if (tel) {
      tel.addEventListener('input', function () {
        var d = tel.value.replace(/\D/g, '').slice(0, 11);
        var out = '';
        if (d.length > 0) out = '(' + d.slice(0, 2);
        if (d.length >= 2) out += ') ' + d.slice(2, 7);
        if (d.length > 7) out += '-' + d.slice(7, 11);
        tel.value = out;
      });
    }

    function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = form.nome.value.trim();
      var email = form.email.value.trim();
      var telefone = form.tel.value.trim();
      var servico = form.servico.value;
      var situacao = form.msg.value.trim();

      if (!nome || !telefone || !servico || !isEmail(email)) {
        err.classList.add('show');
        return;
      }
      err.classList.remove('show');

      var linhas = [
        'Olá, me chamo ' + nome + ', vim através do site e gostaria de uma informação.',
        '',
        '- E-mail: ' + email,
        '- Telefone: ' + telefone,
        '- Serviço: ' + servico
      ];
      if (situacao) linhas.push('- Situação: ' + situacao);

      window.open('https://wa.me/5521970108814?text=' + encodeURIComponent(linhas.join('\n')), '_blank');
    });
  })();

  /* ---------- Mobile drawer ---------- */
  (function () {
    var burger = $('#nav-burger');
    var drawer = $('#drawer');
    var overlay = $('#drawer-overlay');
    var closeBtn = $('#drawer-close');
    if (!burger || !drawer || !overlay) return;

    function open() {
      drawer.classList.add('open');
      overlay.classList.add('open');
      document.body.classList.add('drawer-open');
      burger.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
    }
    function close() {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      document.body.classList.remove('drawer-open');
      burger.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    }

    burger.addEventListener('click', function () {
      drawer.classList.contains('open') ? close() : open();
    });
    if (closeBtn) closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);
    Array.prototype.forEach.call(drawer.querySelectorAll('a'), function (a) {
      a.addEventListener('click', close);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('open')) close();
    });
  })();

  /* ---------- WhatsApp premium bubble ---------- */
  function initWaBubble() {
    var bubble = $('#wa-message-bubble');
    if (!bubble) return;
    var typing = $('#wa-typing');
    var realMsg = $('#wa-real-message');
    var closeBtn = $('#wa-close-btn');
    var mainBtn = $('#wa-main-btn');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function seen() { try { return sessionStorage.getItem('wa_bubble_seen'); } catch (e) { return null; } }
    function markSeen() { try { sessionStorage.setItem('wa_bubble_seen', '1'); } catch (e) { } }

    function hide() {
      bubble.classList.remove('show');
      bubble.setAttribute('aria-hidden', 'true');
      markSeen();
    }
    function show() {
      bubble.classList.add('show');
      bubble.removeAttribute('aria-hidden');
      setTimeout(function () {
        if (typing) typing.style.display = 'none';
        if (realMsg) realMsg.style.display = 'block';
      }, reduce ? 0 : 2200);
    }

    if (!seen()) setTimeout(show, reduce ? 1200 : 5000);
    if (closeBtn) closeBtn.addEventListener('click', function (e) { e.preventDefault(); hide(); });
    if (mainBtn) mainBtn.addEventListener('click', hide);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWaBubble);
  } else {
    initWaBubble();
  }

})();
