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

  /* ---------- Vitrine: categorias + modal ---------- */
  (function () {
    var grid = $('#products-grid');
    if (!grid) return;

    var A = 'Assets/';
    var FILES = [
      'adaptador-agold-cba13-tipo-c-p2.webp','adaptador-audio-leon-gts-p3.webp','adaptador-inova-car20378-5v2a.webp','adaptador-lehmox-le871-lightning-p2.webp',
      'cabo-agold-cb33-1-micro-3m.webp','cabo-agold-cb33-2-lightning-3m.webp','cabo-agold-cb33-3-tipo-c-3m.webp','cabo-agold-cb35-1-micro-usb.webp','cabo-agold-cb51-tipoc-60w.webp','cabo-apple-usbc-lightning-1m.webp','cabo-dados-agold-cb65-1-micro.webp','cabo-dados-agold-cb65-2-lightning.webp','cabo-dados-agold-cb65-3-tipoc-5a.webp','cabo-hrebos-lightning-hdtv-hdmi.webp','cabo-kaidi-kd-327c-2m.webp','cabo-kaidi-kd327m-2m.webp','cabo-magnetico-hi-turbo-t726-3em1.webp','cabo-tipoc-turbo-35w.webp','cabo-two-plus-cab9017-usbc-18w.webp','cabo-two-plus-cab9018-lightning-18w.webp',
      'caixa-som-altomex-al8901-portatil.webp','caixa-som-banson-711-21.webp','caixa-som-boa-tech-mini.webp','caixa-som-jc-312-bluetooth.webp','caixa-som-ms1664bt-bluetooth-fm.webp','caixa-som-sxqf019-boombox.webp','mini-caixa-som-inova-rad8623.webp','lampada-caixa-som-music-bulb.webp',
      'carregador-apple-20w-usbc-lightning.webp','carregador-apple-usb-power-adapter.webp','carregador-hi-turbo-t210a-38a.webp','carregador-lehmox-le182-30w.webp','carregador-lehmox-le91-30w-micro.webp','carregador-mesa-kaidi-6usb-7a.webp','carregador-notebook-my120w.webp','carregador-smart-camera-fullhd.webp','carregador-two-plus-bateria-exibicao.webp','carregador-two-plus-car2010-48a.webp','carregador-two-plus-car2012-7a-3usb.webp','carregador-two-plus-car2015-51a.webp','carregador-two-plus-car2019-qc3.webp','carregador-two-plus-car2021-20w-pd.webp','carregador-two-plus-car2041-34a-micro.webp','carregador-two-plus-car2045-lightning.webp','carregador-usbc-18w.webp','carregador-veicular-kaidi-kd501a-18w.webp','carregador-wireless-hrebos-hs350-3em1.webp','kit-carregador-12w-lightning.webp','kit-carregador-agold-ca17-1-v8.webp','kit-carregador-agold-ca25-3-tipoc.webp','kit-carregador-agold-lightning-ios.webp','leo-eletro-carregador-turbo-usbc-20w.webp','leo-eletro-power-bank-magnetico-agold.webp',
      'fone-agold-fn-a61-tipo-c.webp','fone-agold-fn-a62-lightning.webp','fone-airdots-pro3-bluetooth.webp','fone-onipha-d21-hifi.webp','fone-pro-5s-branco.webp','headphone-a1003-branco-vermelho.webp','headphone-bluetooth-b09.webp','headphone-bluetooth-wireless.webp','headphone-bmax-bm107-led.webp','headphone-bmax-wireless-led.webp','headphone-gamer-bk06.webp','headphone-hrebos-hs187-wireless.webp','headphone-lehmox-leb05-vermelho.webp','headset-gamer-bk50-rgb.webp','headset-gamer-gm002-microfone.webp','headset-gamer-td-lte-as70-rgb.webp','headset-orelha-gato-rgb-ltomex-a096.webp','leo-eletro-fone-airpods-pro.webp','leo-eletro-headphone-p9-pro.webp',
      'smartwatch-apple-watch-style.webp','smartwatch-blulory-glifo7-pro.webp','smartwatch-caixa-preta.webp',
      'controle-doubleshock4-ps4.webp','controle-knup-kp4028-ps4.webp','console-videogame-retro-4k.webp',
      'suporte-bike-moto-bmax-bmg10.webp','suporte-bike-prova-dagua.webp','suporte-retrovisor-bmax-bmg21.webp','suporte-tv-canaa-parede.webp','suporte-veicular-hrebos-su206.webp','suporte-veicular-kinginfo-sup04.webp','suporte-veicular-lehmox-ley221.webp','suporte-veicular-magnetico-el1907.webp','receptor-bluetooth-veicular-bt350.webp','receptor-bluetooth-veicular-ydt520.webp',
      'leo-eletro-iphones-vitrine.webp','leo-eletro-iphone-como-novo.webp','leo-eletro-capas-peliculas-vitrine.webp',
      'radio-comunicador-baofeng-bf777s.webp','radio-relogio-ltomex-a2019-amfm.webp','radio-retro-altomex-ad139.webp','garrafa-termica-beer-pints-500ml.webp','garrafa-termica-inox-800ml.webp','garrafa-termica-stay-chill-500ml.webp','copo-termico-stanley-beer-pint.webp','teclado-mouse-mbtech-k4-wireless.webp','kit-teclado-mouse-lehmox-ley176.webp','mini-teclado-lehmox-ley182-rgb.webp','mini-teclado-tomate-mtb107-touchpad.webp','mouse-lehmox-ley28-1200dpi.webp','hub-usb-lehmox-ley02-7portas.webp','hub-usb-lehmox-ley200-4portas.webp','roteador-tplink-tlwr829n-300mbps.webp','case-hd-externo-lehmox-ley33.webp','conversor-digital-inova-dig7020.webp','gravador-voz-knup-kp8004-8gb.webp','interruptor-knup-kp-t85-usb.webp','lanterna-chaveiro-bommax-bma092.webp','luz-traseira-bike-led-usb.webp','mini-tripe-mesa-laser-tech.webp'
    ];

    var CATS = [
      { key: 'smartphones', title: 'Smartphones & iPhones', cover: 'leo-eletro-iphones-vitrine.webp', match: function (f) { return /^leo-eletro-iphone/.test(f) || /iphones-vitrine/.test(f) || /capas-peliculas/.test(f); } },
      { key: 'audio', title: 'Fones & Áudio', cover: 'leo-eletro-fone-airpods-pro.webp', match: function (f) { return /^(fone|headphone|headset)-/.test(f) || /^leo-eletro-(fone|headphone)/.test(f); } },
      { key: 'caixas', title: 'Caixas de Som', cover: 'caixa-som-sxqf019-boombox.webp', match: function (f) { return /^(caixa-som|mini-caixa|lampada-caixa)-/.test(f); } },
      { key: 'carregadores', title: 'Carregadores & Power Banks', cover: 'leo-eletro-power-bank-magnetico-agold.webp', match: function (f) { return /^(carregador|kit-carregador)-/.test(f) || /^leo-eletro-(carregador|power-bank)/.test(f); } },
      { key: 'cabos', title: 'Cabos & Adaptadores', cover: 'cabo-magnetico-hi-turbo-t726-3em1.webp', match: function (f) { return /^(cabo|adaptador)-/.test(f); } },
      { key: 'smartwatch', title: 'Smartwatches', cover: 'smartwatch-apple-watch-style.webp', match: function (f) { return /^smartwatch-/.test(f); } },
      { key: 'games', title: 'Games', cover: 'controle-doubleshock4-ps4.webp', match: function (f) { return /^(controle|console)-/.test(f); } },
      { key: 'suportes', title: 'Suportes & Veicular', cover: 'suporte-veicular-magnetico-el1907.webp', match: function (f) { return /^suporte-/.test(f) || /^receptor-bluetooth-veicular/.test(f); } },
      { key: 'diversos', title: 'Rádios & Diversos', cover: 'radio-retro-altomex-ad139.webp', match: function () { return true; } }
    ];

    CATS.forEach(function (c) { c.items = []; });
    FILES.forEach(function (f) {
      for (var i = 0; i < CATS.length; i++) { if (CATS[i].match(f)) { CATS[i].items.push(f); break; } }
    });
    CATS = CATS.filter(function (c) { return c.items.length; });

    var SPEC = { agold: "A'Gold", v8: 'Micro USB', usbc: 'USB-C', tipoc: 'Tipo C', tipo: 'Tipo', rgb: 'RGB', led: 'LED', ps4: 'PS4', hifi: 'HiFi', fm: 'FM', am: 'AM', amfm: 'AM/FM', hd: 'HD', hdmi: 'HDMI', hdtv: 'HDTV', bt: 'BT', ios: 'iOS', pd: 'PD', qc3: 'QC3', '3em1': '3 em 1', '3usb': '3 USB', '6usb': '6 USB' };
    function pretty(file) {
      var b = file.replace(/\.webp$/, '').replace(/^leo-eletro-/, '');
      var words = b.split('-').filter(function (w) {
        if (/^\d+(w|mm|m|k|a|v|mah|dpi|portas)$/i.test(w)) return true;
        if (SPEC[w.toLowerCase()]) return true;
        if (/\d/.test(w)) return false;
        if (w.length <= 1) return false;
        return true;
      }).slice(0, 4).map(function (w) {
        var k = w.toLowerCase();
        if (SPEC[k]) return SPEC[k];
        if (/^\d/.test(w)) return w.toUpperCase();
        return w.charAt(0).toUpperCase() + w.slice(1);
      });
      return words.join(' ') || 'Acessório';
    }
    /* extract a model code (e.g. CA43, CAR2019) to disambiguate repeated names */
    function modelCode(file) {
      var toks = file.replace(/\.webp$/, '').replace(/^leo-eletro-/, '').split('-');
      for (var i = 0; i < toks.length; i++) {
        var t = toks[i];
        if (/[a-z]*\d/i.test(t) && !/^\d+(w|mm|m|k|a|v|mah|dpi|portas)$/i.test(t) && !SPEC[t.toLowerCase()]) {
          return t.toUpperCase().replace(/[^A-Z0-9]/g, '');
        }
      }
      return '';
    }
    /* build display names, guaranteeing uniqueness within a category */
    function nameList(items) {
      var used = {};
      return items.map(function (f) {
        var name = pretty(f);
        if (used[name]) {
          var mc = modelCode(f);
          var cand = mc ? name + ' ' + mc : name;
          var k = 2;
          while (used[cand]) { cand = (mc ? name + ' ' + mc : name) + ' ' + k; k++; }
          name = cand;
        }
        used[name] = true;
        return { f: f, name: name };
      });
    }

    var arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

    grid.innerHTML = CATS.map(function (c, i) {
      return '<button class="vcat reveal" data-delay="' + (i % 4) + '" type="button" data-cat="' + c.key + '">' +
        '<span class="vcat__media"><img src="' + A + c.cover + '" alt="' + esc(c.title) + '" loading="lazy"></span>' +
        '<span class="vcat__body"><span class="vcat__title">' + esc(c.title) + '</span>' +
        '<span class="vcat__count">' + c.items.length + ' ' + (c.items.length > 1 ? 'produtos' : 'produto') + '</span></span>' +
        '<span class="vcat__go" aria-hidden="true">' + arrow + '</span></button>';
    }).join('');

    /* Modal */
    var close = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    var wa = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.2.4-.2.6-.1l1.7.8c.2.1.4.2.5.3.1.2.1.6-.1 1.3z"/></svg>';
    var modal = document.createElement('div');
    modal.className = 'vmodal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML =
      '<div class="vmodal__backdrop" data-close></div>' +
      '<div class="vmodal__panel" role="dialog" aria-modal="true" aria-labelledby="vmodal-title">' +
        '<div class="vmodal__head"><div><span class="vmodal__eyebrow">Vitrine</span>' +
        '<h3 class="vmodal__title" id="vmodal-title"></h3></div>' +
        '<button class="vmodal__close" type="button" data-close aria-label="Fechar">' + close + '</button></div>' +
        '<div class="vmodal__grid" id="vmodal-grid"></div>' +
        '<div class="vmodal__foot"><span class="vmodal__note">Consulte preços e disponibilidade</span>' +
        '<a class="btn btn--gold" id="vmodal-cta" href="#" target="_blank" rel="noopener">Falar no WhatsApp</a></div>' +
      '</div>';
    document.body.appendChild(modal);
    var mGrid = $('#vmodal-grid', modal), mTitle = $('#vmodal-title', modal), mCta = $('#vmodal-cta', modal);

    function openCat(key) {
      var c = null;
      for (var i = 0; i < CATS.length; i++) { if (CATS[i].key === key) { c = CATS[i]; break; } }
      if (!c) return;
      mTitle.textContent = c.title;
      mCta.href = waSobre(c.title);
      mGrid.innerHTML = nameList(c.items).map(function (it) {
        var name = it.name;
        return '<a class="vitem" href="' + waSobre(name) + '" target="_blank" rel="noopener" aria-label="Consultar ' + esc(name) + ' no WhatsApp">' +
          '<img class="vitem__img" src="' + A + it.f + '" alt="' + esc(name) + '">' +
          '<span class="vitem__overlay"><span class="vitem__name">' + esc(name) + '</span>' +
          '<span class="vitem__cta">' + wa + 'Consultar</span></span></a>';
      }).join('');
      mGrid.scrollTop = 0;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.documentElement.style.overflow = 'hidden';
    }
    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.documentElement.style.overflow = '';
    }

    grid.addEventListener('click', function (e) {
      var b = e.target.closest('.vcat');
      if (b) openCat(b.getAttribute('data-cat'));
    });
    modal.addEventListener('click', function (e) { if (e.target.closest('[data-close]')) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
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
