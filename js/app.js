// ============================================================
// DITZ Store — App Logic
// © DITZNET TECHNOLOGY
// ============================================================

(function () {
  'use strict';

  // ── STATE ──────────────────────────────────────────────────
  let state = {
    section: 'beranda',
    platform: 'instagram',
    type: null,
    search: '',
    sort: 'default',
    calcPlatform: 'instagram',
    calcType: null,
    calcService: null,
    calcQty: 1000,
    modalService: null,
    modalQty: 1000,
  };

  // ── HELPERS ────────────────────────────────────────────────
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const rp = n => 'Rp ' + Math.round(n).toLocaleString('id-ID');

  function sanitizeWANumber(num) {
    let n = String(num).replace(/[\s\-]/g, '');
    if (n.startsWith('0')) n = '62' + n.slice(1);
    return n;
  }

  function formatNum(n) {
    if (n >= 1000000000) return (n/1000000000).toFixed(1).replace(/\.0$/,'') + 'M';
    if (n >= 1000000)    return (n/1000000).toFixed(1).replace(/\.0$/,'') + 'Jt';
    if (n >= 1000)       return (n/1000).toFixed(1).replace(/\.0$/,'') + 'K';
    return n.toLocaleString('id-ID');
  }

  function getTagClass(tag) {
    const t = tag.toLowerCase();
    if (t.includes('real'))    return 'tag-real';
    if (t.includes('high') || t.includes('best quality') || t.includes('hq')) return 'tag-hq';
    if (t.includes('instant')) return 'tag-instant';
    if (t.includes('refill') && !t.includes('no refill')) return 'tag-refill';
    if (t.includes('no refill')) return 'tag-noref';
    if (t.includes('custom')) return 'tag-custom';
    if (t.includes('mixed'))  return 'tag-mixed';
    return 'tag-default';
  }

  function platformColor(p) {
    return { instagram: '#e1306c', tiktok: '#ffffff', youtube: '#ff0000' }[p] || '#6c63ff';
  }

  function platformIcon(p) {
    return { instagram: 'fab fa-instagram', tiktok: 'fab fa-tiktok', youtube: 'fab fa-youtube' }[p] || 'fas fa-globe';
  }

  function platformColorStyle(p) {
    return `color:${platformColor(p)}`;
  }

  // ── NAVIGATION ─────────────────────────────────────────────
  function navigate(section) {
    state.section = section;
    $$('.section').forEach(s => s.classList.remove('active'));
    const el = $(`#sec-${section}`);
    if (el) el.classList.add('active');

    $$('.nav-link, .bot-nav-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.section === section);
    });

    // Reset scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function initNav() {
    $$('[data-section]').forEach(btn => {
      btn.addEventListener('click', () => navigate(btn.dataset.section));
    });
  }

  // ── SEARCH ─────────────────────────────────────────────────
  function initSearch() {
    const inp = $('#nav-search-input');
    const searchBtn = $('#nav-search-btn');
    if (!inp) return;

    function doSearch() {
      state.search = inp.value.trim().toLowerCase();
      if (state.search) {
        navigate('layanan');
        state.platform = null;
        state.type = null;
        renderLayanan();
      }
    }

    inp.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
    if (searchBtn) searchBtn.addEventListener('click', doSearch);

    // Clear search when navigating away
    $$('[data-section]').forEach(navBtn => {
      navBtn.addEventListener('click', () => {
        if (navBtn.dataset.section !== 'layanan') {
          state.search = '';
          inp.value = '';
        }
      });
    });
  }

  // ── BERANDA ────────────────────────────────────────────────
  function renderBeranda() {
    // Platform cards
    const grid = $('#platform-cards');
    if (!grid) return;

    grid.innerHTML = CATEGORIES.map(cat => {
      const count = SERVICES.filter(s => s.platform === cat.id).length;
      const types = getTypes(cat.id);
      return `
        <div class="platform-card" style="--platform-color:${cat.color}"
             onclick="goLayanan('${cat.id}')">
          <div class="platform-icon">
            <i class="${cat.icon}" style="${platformColorStyle(cat.id)}"></i>
          </div>
          <div>
            <div class="platform-name">${cat.label}</div>
            <div class="platform-count">${count} layanan · ${types.length} kategori</div>
          </div>
        </div>`;
    }).join('');

    // Stats
    const totalSvc = SERVICES.length;
    const platforms = CATEGORIES.length;
    $('#stat-total').textContent = totalSvc + '+';
    $('#stat-platforms').textContent = platforms;
  }

  window.goLayanan = function(platform) {
    state.platform = platform;
    state.type = null;
    state.search = '';
    navigate('layanan');
    renderLayanan();
  };

  // ── LAYANAN ────────────────────────────────────────────────
  function renderLayanan() {
    renderPlatformTabs();
    renderTypeTabs();
    renderProducts();
  }

  function renderPlatformTabs() {
    const container = $('#platform-tabs');
    if (!container) return;
    container.innerHTML = CATEGORIES.map(cat => `
      <button class="platform-tab ${state.platform === cat.id && !state.search ? 'active' : ''}"
              onclick="setPlatform('${cat.id}')">
        <i class="${cat.icon}" style="${platformColorStyle(cat.id)}"></i>
        ${cat.label}
      </button>
    `).join('');
  }

  window.setPlatform = function(platform) {
    state.platform = platform;
    state.type = null;
    state.search = '';
    const searchInp = $('#nav-search-input');
    if (searchInp) searchInp.value = '';
    renderLayanan();
  };

  function renderTypeTabs() {
    const container = $('#type-tabs');
    if (!container) return;
    if (!state.platform || state.search) {
      container.innerHTML = '';
      return;
    }
    const types = getTypes(state.platform);
    container.innerHTML = `
      <button class="type-tab ${!state.type ? 'active' : ''}" onclick="setType(null)">Semua</button>
      ${types.map(t => `
        <button class="type-tab ${state.type === t ? 'active' : ''}" onclick="setType('${t}')">
          ${t}
        </button>
      `).join('')}`;
  }

  window.setType = function(type) {
    state.type = type;
    renderTypeTabs();
    renderProducts();
  };

  function getFilteredProducts() {
    let list = [...SERVICES];

    if (state.search) {
      const q = state.search;
      list = list.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.type.toLowerCase().includes(q) ||
        s.platform.toLowerCase().includes(q) ||
        (s.tags || []).some(t => t.toLowerCase().includes(q))
      );
    } else {
      if (state.platform) list = list.filter(s => s.platform === state.platform);
      if (state.type)     list = list.filter(s => s.type === state.type);
    }

    const sort = state.sort;
    if (sort === 'price-asc')  list.sort((a,b) => a.ratePerK - b.ratePerK);
    if (sort === 'price-desc') list.sort((a,b) => b.ratePerK - a.ratePerK);
    if (sort === 'name')       list.sort((a,b) => a.name.localeCompare(b.name, 'id'));
    if (sort === 'min-asc')    list.sort((a,b) => a.minOrder - b.minOrder);

    return list;
  }

  function renderProducts() {
    const grid = $('#product-grid');
    const countEl = $('#result-count');
    if (!grid) return;

    const list = getFilteredProducts();
    if (countEl) countEl.textContent = `${list.length} layanan`;

    if (!list.length) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1">
          <i class="fas fa-search"></i>
          <p>Layanan tidak ditemukan.<br>Coba kata kunci lain atau pilih kategori berbeda.</p>
        </div>`;
      return;
    }

    grid.innerHTML = list.map(s => buildProductCard(s)).join('');
  }

  function buildProductCard(s) {
    const tagsHtml = (s.tags || []).slice(0,3).map(t =>
      `<span class="tag ${getTagClass(t)}">${t}</span>`
    ).join('');

    const pricePerUnit = s.ratePerK / 1000;
    const sample1k = Math.ceil(pricePerUnit * 1000);

    return `
    <div class="product-card" onclick="openModal(${s.id})">
      <div class="card-top">
        <div class="card-platform-icon">
          <i class="${platformIcon(s.platform)}" style="${platformColorStyle(s.platform)}"></i>
        </div>
        <div class="card-meta">
          <div class="card-type">${s.platform.toUpperCase()} · ${s.type}</div>
          <div class="card-id">ID #${s.id}</div>
        </div>
      </div>
      <div class="card-name">${s.name}</div>
      <div class="card-tags">${tagsHtml}</div>
      <div class="card-specs">
        <div class="spec-item">
          <div class="spec-label">Kecepatan</div>
          <div class="spec-val">${s.speed}</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Refill</div>
          <div class="spec-val">${s.refill}</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Min. Order</div>
          <div class="spec-val">${formatNum(s.minOrder)}</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Maks. Order</div>
          <div class="spec-val">${formatNum(s.maxOrder)}</div>
        </div>
      </div>
      <div class="card-pricing">
        <div class="price-row">
          <span class="price-label">Harga per 1.000</span>
          <span class="price-val">${rp(sample1k)}</span>
        </div>
        <div class="price-sub">Klik untuk lihat detail & hitung harga</div>
      </div>
      <div class="card-actions">
        <button class="btn-order" onclick="event.stopPropagation(); quickOrder(${s.id})">
          <i class="fab fa-whatsapp"></i> Order via WA
        </button>
        <button class="btn-detail-card" onclick="event.stopPropagation(); openModal(${s.id})" title="Detail">
          <i class="fas fa-info"></i>
        </button>
      </div>
    </div>`;
  }

  function initSortSelect() {
    const sel = $('#sort-select');
    if (!sel) return;
    sel.addEventListener('change', () => {
      state.sort = sel.value;
      renderProducts();
    });
  }

  // ── MODAL ──────────────────────────────────────────────────
  window.openModal = function(id) {
    const s = SERVICES.find(x => x.id === id);
    if (!s) return;
    state.modalService = s;
    state.modalQty = Math.max(s.minOrder, 1000);
    renderModal(s);
    $('#modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function() {
    $('#modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
  };

  function renderModal(s) {
    $('#modal-icon').innerHTML = `<i class="${platformIcon(s.platform)}" style="${platformColorStyle(s.platform)}"></i>`;
    $('#modal-type-label').textContent = `${s.platform.toUpperCase()} · ${s.type}`;
    $('#modal-title').textContent = s.name;
    $('#modal-id').textContent = `ID #${s.id}`;

    // Specs
    const perK = s.ratePerK;
    $('#modal-specs').innerHTML = `
      <div class="modal-spec">
        <div class="modal-spec-label">Kecepatan</div>
        <div class="modal-spec-val">${s.speed}</div>
      </div>
      <div class="modal-spec">
        <div class="modal-spec-label">Refill</div>
        <div class="modal-spec-val">${s.refill}</div>
      </div>
      <div class="modal-spec">
        <div class="modal-spec-label">Kualitas</div>
        <div class="modal-spec-val">${s.quality}</div>
      </div>
      <div class="modal-spec">
        <div class="modal-spec-label">Min. Order</div>
        <div class="modal-spec-val">${s.minOrder.toLocaleString('id-ID')}</div>
      </div>
      <div class="modal-spec">
        <div class="modal-spec-label">Maks. Order</div>
        <div class="modal-spec-val">${s.maxOrder.toLocaleString('id-ID')}</div>
      </div>
      <div class="modal-spec">
        <div class="modal-spec-label">Harga / 1000</div>
        <div class="modal-spec-val" style="color:var(--accent)">${rp(perK)}</div>
      </div>`;

    // Tags
    const tagsHtml = (s.tags || []).map(t =>
      `<span class="tag ${getTagClass(t)}">${t}</span>`
    ).join('');
    $('#modal-tags').innerHTML = tagsHtml;

    // Set qty input
    const qtyInput = $('#modal-qty-input');
    qtyInput.min = s.minOrder;
    qtyInput.max = s.maxOrder;
    qtyInput.value = state.modalQty;

    // Qty presets
    const presets = [1000, 5000, 10000, 50000, 100000].filter(p => p >= s.minOrder && p <= s.maxOrder);
    $('#modal-presets').innerHTML = presets.map(p =>
      `<button class="modal-qty-preset" onclick="setModalQty(${p})">${formatNum(p)}</button>`
    ).join('');

    updateModalPrice();

    // Min order warning
    const warn = $('#modal-min-warn');
    if (warn) warn.textContent = `Min. order: ${s.minOrder.toLocaleString('id-ID')}`;
  }

  function updateModalPrice() {
    const s = state.modalService;
    if (!s) return;
    const qty = parseInt($('#modal-qty-input').value) || s.minOrder;
    state.modalQty = qty;
    const total = calcPrice(s.ratePerK, qty);
    $('#modal-price-total').textContent = rp(total);
    $('#modal-price-per-k').textContent = rp(s.ratePerK);
    $('#modal-qty-display').textContent = qty.toLocaleString('id-ID');
  }

  window.setModalQty = function(qty) {
    $('#modal-qty-input').value = qty;
    updateModalPrice();
  };

  window.quickOrder = function(id) {
    const s = SERVICES.find(x => x.id === id);
    if (!s) return;
    // Gunakan minOrder sebagai qty default, bukan hardcode 1000
    const defaultQty = s.minOrder;
    const url = buildWAMessage(s, defaultQty);
    window.open(url, '_blank');
  };

  window.orderFromModal = function() {
    const s = state.modalService;
    if (!s) return;
    const qty = parseInt($('#modal-qty-input').value) || s.minOrder;
    if (qty < s.minOrder) {
      showToast(`Min. order adalah ${s.minOrder.toLocaleString('id-ID')}`, 'warning');
      return;
    }
    if (qty > s.maxOrder) {
      showToast(`Maks. order adalah ${s.maxOrder.toLocaleString('id-ID')}`, 'warning');
      return;
    }
    const url = buildWAMessage(s, qty);
    window.open(url, '_blank');
    closeModal();
  };

  function initModal() {
    $('#modal-overlay').addEventListener('click', e => {
      if (e.target === $('#modal-overlay')) closeModal();
    });
    $('#modal-qty-input').addEventListener('input', updateModalPrice);

    // Tutup modal dengan tombol Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });
  }

  // ── KALKULATOR ─────────────────────────────────────────────
  function initKalkulator() {
    renderCalcPlatforms();

    $('#calc-platform').addEventListener('change', function() {
      state.calcPlatform = this.value;
      state.calcType = null;
      state.calcService = null;
      renderCalcTypes();
      renderCalcServices();
      updateCalcResult();
    });

    $('#calc-type').addEventListener('change', function() {
      state.calcType = this.value;
      state.calcService = null;
      renderCalcServices();
      updateCalcResult();
    });

    $('#calc-service').addEventListener('change', function() {
      state.calcService = parseInt(this.value);
      updateCalcResult();
    });

    $('#calc-qty').addEventListener('input', function() {
      state.calcQty = parseInt(this.value) || 0;
      updateCalcResult();
    });

    renderCalcTypes();
    renderCalcServices();
  }

  function renderCalcPlatforms() {
    const sel = $('#calc-platform');
    sel.innerHTML = CATEGORIES.map(c =>
      `<option value="${c.id}" ${state.calcPlatform === c.id ? 'selected' : ''}>${c.label}</option>`
    ).join('');
  }

  function renderCalcTypes() {
    const sel = $('#calc-type');
    const types = getTypes(state.calcPlatform);
    sel.innerHTML = `<option value="">-- Pilih Tipe --</option>` +
      types.map(t => `<option value="${t}">${t}</option>`).join('');
  }

  function renderCalcServices() {
    const sel = $('#calc-service');
    if (!state.calcType) {
      sel.innerHTML = `<option value="">-- Pilih tipe dulu --</option>`;
      return;
    }
    const svcs = getServices(state.calcPlatform, state.calcType);
    sel.innerHTML = `<option value="">-- Pilih Layanan --</option>` +
      svcs.map(s => `<option value="${s.id}">#${s.id} — ${s.name.substring(0,60)}...</option>`).join('');
  }

  function updateCalcResult() {
    const svc = state.calcService ? SERVICES.find(s => s.id === state.calcService) : null;
    const qty = state.calcQty;
    const res = $('#calc-result');

    if (!svc || !qty || qty <= 0) {
      res.innerHTML = `<p style="color:var(--text3);font-size:.83rem;text-align:center;padding:.5rem 0">
        Pilih platform, tipe, dan layanan untuk melihat estimasi harga.</p>`;
      const waBtn = $('#calc-wa-btn');
      if (waBtn) waBtn.style.display = 'none';
      return;
    }

    const total = calcPrice(svc.ratePerK, qty);
    const warning = qty < svc.minOrder
      ? `<div style="color:#f59e0b;font-size:.77rem;margin-top:.5rem">
          <i class="fas fa-triangle-exclamation"></i> Min. order: ${svc.minOrder.toLocaleString('id-ID')}
         </div>`
      : qty > svc.maxOrder
      ? `<div style="color:#ef4444;font-size:.77rem;margin-top:.5rem">
          <i class="fas fa-circle-xmark"></i> Maks. order: ${svc.maxOrder.toLocaleString('id-ID')}
         </div>`
      : '';

    res.innerHTML = `
      <div class="result-line">
        <span>Layanan</span>
        <strong style="max-width:180px;text-align:right;font-size:.78rem">${svc.name.substring(0,50)}...</strong>
      </div>
      <div class="result-line">
        <span>Harga per 1.000</span>
        <strong>${rp(svc.ratePerK)}</strong>
      </div>
      <div class="result-line">
        <span>Jumlah</span>
        <strong>${qty.toLocaleString('id-ID')}</strong>
      </div>
      <div class="result-line">
        <span>Kecepatan</span>
        <strong>${svc.speed}</strong>
      </div>
      <div class="result-line">
        <span>Refill</span>
        <strong>${svc.refill}</strong>
      </div>
      <div class="result-line" style="padding-top:.75rem;margin-top:.25rem">
        <span>Estimasi Total</span>
        <span class="result-total">${rp(total)}</span>
      </div>
      ${warning}`;

    // Update WA btn
    const waBtn = $('#calc-wa-btn');
    if (waBtn && qty >= svc.minOrder && qty <= svc.maxOrder) {
      waBtn.href = buildWAMessage(svc, qty);
      waBtn.style.display = 'flex';
    } else if (waBtn) {
      waBtn.style.display = 'none';
    }
  }

  // ── CUSTOM ORDER ───────────────────────────────────────────
  function initCustomOrder() {
    renderMinOrderTable();

    const form = $('#custom-order-form');
    if (!form) return;

    // Platform change → update type options
    $('#custom-platform').addEventListener('change', function() {
      updateCustomTypes(this.value);
    });

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      submitCustomOrder();
    });
  }

  function updateCustomTypes(platform) {
    const sel = $('#custom-type');
    if (!platform) { sel.innerHTML = `<option value="">-- Pilih platform dulu --</option>`; return; }
    // platform value bisa berupa label (Instagram) atau id (instagram) — normalisasi ke lowercase
    const platformId = platform.toLowerCase();
    const types = getTypes(platformId);
    sel.innerHTML = `<option value="">-- Pilih Tipe Layanan --</option>` +
      types.map(t => `<option value="${t}">${t}</option>`).join('');
  }

  function renderMinOrderTable() {
    const tbody = $('#min-order-tbody');
    if (!tbody) return;
    // Show min custom order per type (use the smallest minOrder in that type)
    const rows = [];
    CATEGORIES.forEach(cat => {
      const types = getTypes(cat.id);
      types.forEach(type => {
        const svcs = getServices(cat.id, type);
        const minMo = Math.min(...svcs.map(s => s.minOrder));
        rows.push({ platform: cat.label, type, minOrder: minMo });
      });
    });

    tbody.innerHTML = rows.map(r => `
      <tr>
        <td>${r.platform}</td>
        <td>${r.type}</td>
        <td>${r.minOrder.toLocaleString('id-ID')}</td>
      </tr>`).join('');
  }

  function submitCustomOrder() {
    const platformVal = $('#custom-platform').value;
    const type = $('#custom-type').value;
    const qty = parseInt($('#custom-qty').value);
    const link = $('#custom-link').value.trim();
    const notes = $('#custom-notes').value.trim();

    if (!platformVal || !type || !qty || !link) {
      showToast('Harap lengkapi semua field yang wajib diisi.', 'warning');
      return;
    }

    if (isNaN(qty) || qty <= 0) {
      showToast('Jumlah order harus berupa angka yang valid.', 'warning');
      return;
    }

    // Tampilkan label platform yang proper (capitalised)
    const platformLabel = CATEGORIES.find(c => c.id === platformVal.toLowerCase())?.label || platformVal;

    const msg = `Halo DITZ Store, saya ingin melakukan *Custom Order*:\n\n` +
      `*Platform:* ${platformLabel}\n` +
      `*Tipe:* ${type}\n` +
      `*Jumlah:* ${qty.toLocaleString('id-ID')}\n` +
      `*Link/Username:* ${link}\n` +
      `${notes ? `*Catatan:* ${notes}\n` : ''}` +
      `\nMohon konfirmasi ketersediaan dan harga. Terima kasih!`;

    const url = `https://wa.me/${sanitizeWANumber(WHATSAPP_NUMBER)}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }

  // ── FAQ ────────────────────────────────────────────────────
  function initFAQ() {
    $$('.faq-q').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const answer = item.querySelector('.faq-a');
        const isOpen = btn.classList.contains('open');
        $$('.faq-q').forEach(b => { b.classList.remove('open'); });
        $$('.faq-a').forEach(a => { a.classList.remove('open'); });
        if (!isOpen) {
          btn.classList.add('open');
          answer.classList.add('open');
        }
      });
    });
  }

  // ── TOAST ──────────────────────────────────────────────────
  function showToast(msg, type = 'info') {
    const icon = type === 'warning' ? 'fas fa-triangle-exclamation' :
                 type === 'success' ? 'fas fa-circle-check' : 'fas fa-circle-info';
    const color = type === 'warning' ? '#f59e0b' : type === 'success' ? '#22c55e' : 'var(--accent)';
    const wrap = $('#toast-wrap');
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<i class="${icon}" style="color:${color}"></i> ${msg}`;
    wrap.appendChild(t);
    setTimeout(() => t.remove(), 3500);
  }
  window.showToast = showToast;

  // ── KONTAK WA ──────────────────────────────────────────────
  function initKontak() {
    const btn = $('#wa-contact-btn');
    if (btn) {
      btn.href = `https://wa.me/${sanitizeWANumber(WHATSAPP_NUMBER)}?text=${encodeURIComponent('Halo DITZ Store, saya ingin bertanya tentang layanan Anda.')}`;
    }
  }

  // ── INIT ───────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initSearch();
    renderBeranda();
    renderLayanan();
    initSortSelect();
    initModal();
    initKalkulator();
    initCustomOrder();
    initFAQ();
    initKontak();
    navigate('beranda');
  });

})();