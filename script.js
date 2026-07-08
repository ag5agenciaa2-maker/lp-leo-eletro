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
    { name: 'Power Bank Magnético', tag: 'Carregadores', img: 'assets/prod-powerbank.jpg' },
    { name: 'AirPods Pro', tag: 'Fones', img: 'assets/prod-airpods.jpg' },
    { name: 'Carregador Turbo', tag: 'Cabos & fontes', img: 'assets/prod-charger.jpg' },
    { name: 'Headphone P9 Pro', tag: 'Headphones', img: 'assets/prod-headphones.jpg' },
    { name: 'iPhones', tag: 'Smartphones', img: '' },
    { name: 'Capas & películas', tag: 'Proteção', img: '' },
    { name: 'Smartwatch', tag: 'Wearables', img: '' },
    { name: 'Caixas de som', tag: 'Áudio', img: '' }
  ];

  var reviews = [
    { name: 'Roberto Lehmam de Paiva', meta: 'há 2 meses · Google', text: 'Sou sempre bem atendido e tem minha total credibilidade. Neles eu confio 100%.' },
    { name: 'Priscilla Preciosa', meta: 'há 1 ano · Google', text: 'Sempre conserto aparelhos com eles. São super honestos e entregam o serviço rapidamente. Super indico.' },
    { name: 'Raissa Barbosa', meta: 'há 1 ano · Google', text: 'Fui super bem acolhida por todos. Me venderam uma peça de qualidade e preço justo. Também ganhei um cafezinho enquanto esperava!' },
    { name: 'Jhonny Almeida', meta: 'há 3 anos · Google', text: 'Ótima atenção por parte dos funcionários, produtos de boa qualidade e excelente serviço técnico especializado em iPhone e todas as marcas.' },
    { name: 'Ingrid Freitas', meta: 'há 1 ano · Google', text: 'Excelente atendimento! Leo é gente fina demais e os atendentes são super atenciosos também. Com toda certeza virei cliente. Sucesso!' },
    { name: 'Yuri Martins', meta: 'Local Guide · há 6 meses', text: 'Serviço e atendimento de excelência. Ótimos preços e variedade de produtos.' },
    { name: 'Michele do Carmo', meta: 'há 1 ano · Google', text: 'Ótimo atendimento, rápido e eficiente. Preço justo. Que Deus abençoe o trabalho da equipe.' },
    { name: 'FABIO De Souza Messias', meta: 'Local Guide · há 3 anos', text: 'Sempre que preciso de algo para meu smartphone ou o iPhone da minha esposa, vou à Leo Eletro. Ótimo serviço, grande variedade e preços competitivos. Recomendo.' }
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

  /* ---------- Render services ---------- */
  (function () {
    var grid = $('#services-grid');
    if (!grid) return;
    grid.innerHTML = servicos.map(function (s, i) {
      return '<div class="svc reveal" data-delay="' + (i % 3) + '">' +
        '<div class="svc__num">' + s.num + '</div>' +
        '<h3>' + esc(s.title) + '</h3>' +
        '<p>' + esc(s.desc) + '</p></div>';
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
      return '<div class="prod reveal" data-delay="' + (i % 4) + '">' + media +
        '<div class="prod__body"><div class="prod__tag">' + esc(p.tag) + '</div>' +
        '<div class="prod__name">' + esc(p.name) + '</div></div></div>';
    }).join('');
  })();

  /* ---------- Render FAQ ---------- */
  (function () {
    var list = $('#faq-list');
    if (!list) return;
    list.innerHTML = faqs.map(function (f, i) {
      return '<div class="faq-item' + (i === 0 ? ' open' : '') + ' reveal" data-delay="' + (i % 3) + '">' +
        '<button class="faq-item__q" type="button">' + esc(f.q) +
        '<span class="faq-item__sign">' + (i === 0 ? '–' : '+') + '</span></button>' +
        '<div class="faq-item__a"><p>' + esc(f.a) + '</p></div></div>';
    }).join('');
    list.addEventListener('click', function (e) {
      var btn = e.target.closest('.faq-item__q');
      if (!btn) return;
      var item = btn.parentElement;
      var wasOpen = item.classList.contains('open');
      Array.prototype.forEach.call(list.children, function (el) {
        el.classList.remove('open');
        var sign = $('.faq-item__sign', el);
        if (sign) sign.textContent = '+';
      });
      if (!wasOpen) {
        item.classList.add('open');
        $('.faq-item__sign', item).textContent = '–';
      }
    });
  })();

  /* ---------- Reviews carousel ---------- */
  (function () {
    var textEl = $('#review-text');
    var authorEl = $('#review-author');
    var dotsEl = $('#review-dots');
    if (!textEl || !authorEl || !dotsEl) return;

    var idx = 0, timer;
    dotsEl.innerHTML = reviews.map(function (_, i) {
      return '<button class="dot' + (i === 0 ? ' active' : '') + '" data-i="' + i + '" aria-label="Avaliação ' + (i + 1) + '"></button>';
    }).join('');

    function paint() {
      var r = reviews[idx];
      textEl.textContent = '“' + r.text + '”';
      authorEl.querySelector('.quote__name').textContent = r.name;
      authorEl.querySelector('.quote__meta').textContent = r.meta;
      Array.prototype.forEach.call(dotsEl.children, function (d, i) {
        d.classList.toggle('active', i === idx);
      });
    }

    function go(n) {
      idx = (n + reviews.length) % reviews.length;
      textEl.classList.add('fade-out');
      authorEl.classList.add('fade-out');
      setTimeout(function () {
        paint();
        textEl.classList.remove('fade-out');
        authorEl.classList.remove('fade-out');
      }, 300);
    }

    function reset() { clearInterval(timer); timer = setInterval(function () { go(idx + 1); }, 5500); }

    paint();
    reset();
    $('#rev-prev').addEventListener('click', function () { go(idx - 1); reset(); });
    $('#rev-next').addEventListener('click', function () { go(idx + 1); reset(); });
    dotsEl.addEventListener('click', function (e) {
      var d = e.target.closest('.dot');
      if (!d) return;
      go(parseInt(d.getAttribute('data-i'), 10));
      reset();
    });
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
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = form.nome.value.trim();
      var tel = form.tel.value.trim();
      var aparelho = form.aparelho.value.trim();
      var msg = form.msg.value.trim();
      if (!nome || !tel) { err.classList.add('show'); return; }
      err.classList.remove('show');
      var t = 'Olá! Meu nome é ' + nome + '.';
      if (aparelho) t += ' Aparelho: ' + aparelho + '.';
      if (msg) t += ' ' + msg;
      t += ' Telefone: ' + tel;
      window.open('https://wa.me/5521970108814?text=' + encodeURIComponent(t), '_blank');
    });
  })();

})();
