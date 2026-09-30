var MOBILE_WIDTH = 768;

var services = [
  {
    num: '01', glyph: '❶', label: 'アウトバウンド支援', ja: 'ゼロセールス', en: 'ZERO SALES',
    text: '営業戦略の立案からマーケティング実行まで企業様の営業においての0→1を構築します。営業リソース0、営業データ0など企業様のありとあらゆる0をプロフェッショナルたちがご支援いたします。'
  },
  {
    num: '02', glyph: '❷', label: 'インバウンド支援', ja: 'ゼロマーケティング', en: 'ZERO MARKETING',
    text: '幅広い媒体の中からお客様の業種・業態に合った最適な広告を提案します。各媒体に精通したプロフェッショナルたちが多角的な目線から調査、分析し多様な方法を提案、お客様の目的達成をご支援いたします。'
  },
  {
    num: '03', glyph: '❸', label: 'SNS運用代行支援', ja: 'ゼロプロモーション', en: 'ZERO PROMOTION',
    text: 'SNS運用の課題に応じて、最適なサービスをご提案いたします。戦略のプランニングから運用代行・コンサルティング・効果検証まで、ワンストップでご支援いたします。'
  },
  {
    num: '04', glyph: '❹', label: 'クラウドソーシング活用支援', ja: 'ゼロユニット', en: 'ZERO UNIT',
    text: 'クラウドワーカーを活用した業務組織の組織構築支援サービス。組織作りから業務支援まで幅広くサポートできる体制を完備しております。'
  }
];

var caseTags = ['Zero sales', 'コンサルティング', '従業員50人', '計画設計コンサルティング'];

var menuData = [
  { title: '会社情報', sub: ['会社概要', '行動指針・経営方針', '代表挨拶', 'メンバー'] },
  { title: 'サービス', sub: ['ZERO SALES', 'ZERO MARKETING', 'ZERO PROMOTION', 'ZERO UNIT'] },
  { title: '導入事例' },
  { title: 'お知らせ' },
  { title: '採用情報' },
  { title: 'お問い合わせ' }
];

function buildMenuLink(item) {
  var linkClass = '';
  if (item.title === '採用情報') { linkClass = ' class="acc__link--recruit"'; }
  if (item.title === 'お問い合わせ') { linkClass = ' class="acc__link--contact"'; }

  return `<li><a href="#"${linkClass}>${item.title}<span>＞</span></a></li>`;
}

function buildMenuGroup(item) {
  var subItems = item.sub
    .map(function (sub) {
      return `<li><a href="#">${sub}<span>＞</span></a></li>`;
    })
    .join('');

  return `
    <li class="acc__group">
      <button class="acc__head">${item.title}<span class="acc__icon"></span></button>
      <ul class="acc__sub">${subItems}</ul>
    </li>
  `;
}

function buildMenu(items, withPrivacy) {
  var rows = items
    .map(function (item) {
      return item.sub ? buildMenuGroup(item) : buildMenuLink(item);
    })
    .join('');

  var privacyRow = withPrivacy ? '<li><a href="#">プライバシーポリシー</a></li>' : '';

  return `<ul class="acc">${rows}${privacyRow}</ul>`;
}

function tintMenuLinks() {
  var recruitLinks = document.querySelectorAll('.acc__link--recruit');
  var contactLinks = document.querySelectorAll('.acc__link--contact');

  recruitLinks.forEach(function (link) {
    link.style.backgroundImage =
      `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${images.recruit})`;
  });

  contactLinks.forEach(function (link) {
    link.style.backgroundImage =
      `linear-gradient(rgba(198,181,25,0.75), rgba(96,87,12,0.75)), url(${images.contact})`;
  });
}

function initMenu() {
  var burger = document.querySelector('#burger');
  var spMenu = document.querySelector('#spMenu');
  var footerMenuData = [menuData[1], menuData[0]].concat(menuData.slice(2));

  spMenu.innerHTML = buildMenu(menuData, false);
  document.querySelector('#footerSp').insertAdjacentHTML('afterbegin', buildMenu(footerMenuData, true));

  tintMenuLinks();

  document.querySelectorAll('.acc__head').forEach(function (head) {
    head.addEventListener('click', function () {
      head.parentNode.classList.toggle('is-open');
    });
  });

  burger.addEventListener('click', function () {
    burger.classList.toggle('is-open');
    spMenu.classList.toggle('is-open');
  });
}

function initHero() {
  document.querySelectorAll('.diamond__img').forEach(function (img, i) {
    img.style.backgroundImage = `url(${images.hero[i]})`;
  });

  document.querySelector('#heroMesh').style.backgroundImage = `url(${images.heroBg})`;
}

function initLogos() {
  var track = document.querySelector('#logosTrack');
  var logos = track.querySelectorAll('li');

  logos.forEach(function (logo) {
    track.appendChild(logo.cloneNode(true));
  });
}

function renderServices() {
  var html = services
    .map(function (item, i) {
      return `
        <article class="service-card">
          <img class="service-card__img" src="${images.service[i]}" alt="">
          <p class="service-card__tag">
            <span class="service-card__num">
              <small>Service</small>
              <span class="n-pc">${item.num}</span>
              <span class="n-sp">${item.glyph}</span>
            </span>
            <span class="service-card__label">${item.label}</span>
          </p>
          <div class="service-card__body">
            <div>
              <h3 class="service-card__ja">${item.ja}</h3>
              <p class="service-card__en">${item.en}</p>
              <p>${item.text}</p>
            </div>
            <a href="#" class="service-card__more">View More →</a>
          </div>
        </article>
      `;
    })
    .join('');

  document.querySelector('#serviceList').innerHTML = html;
}

function renderCases() {
  var tagsHtml = caseTags
    .map(function (tag) {
      return `<li>${tag}</li>`;
    })
    .join('');

  var cardHtml = `
    <a href="#" class="case-card">
      <img src="${images.caseImg}" alt="">
      <h3>株式会社　株式会社</h3>
      <p>タイトルタイトルタイトルタイトルタイトル</p>
      <ul class="tags">${tagsHtml}</ul>
    </a>
  `;

  document.querySelector('#caseList').innerHTML = cardHtml.repeat(3);
}

function initMemberSlider() {
  var track = document.querySelector('#memberTrack');
  var windowEl = document.querySelector('.slider__window');
  var currentIndex = 0;

  var cardHtml = `
    <div class="member-card">
      <img src="${images.member}" alt="田中　太郎">
      <p>役職が入ります</p>
      <h3>田中　太郎</h3>
    </div>
  `;
  track.innerHTML = cardHtml.repeat(5);

  var cards = track.querySelectorAll('.member-card');

  function isMobile() {
    return window.innerWidth <= MOBILE_WIDTH;
  }

  function visibleCount() {
    return isMobile() ? 1 : 3;
  }

  function moveSlider() {
    var gap = isMobile() ? 10 : 48;
    var step = cards[0].offsetWidth + gap;
    var offset = -(currentIndex * step);

    if (isMobile()) {
      offset += (windowEl.offsetWidth - cards[0].offsetWidth) / 2;
    }
    track.style.transform = `translateX(${offset}px)`;
  }

  function goNext() {
    var max = cards.length - visibleCount();
    currentIndex = currentIndex >= max ? 0 : currentIndex + 1;
    moveSlider();
  }

  function goPrev() {
    var max = cards.length - visibleCount();
    currentIndex = currentIndex <= 0 ? max : currentIndex - 1;
    moveSlider();
  }

  document.querySelector('#next').addEventListener('click', goNext);
  document.querySelector('#prev').addEventListener('click', goPrev);

  var touchStartX = 0;
  windowEl.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  });
  windowEl.addEventListener('touchend', function (e) {
    var diff = e.changedTouches[0].clientX - touchStartX;
    if (diff < -40) { goNext(); }
    if (diff > 40) { goPrev(); }
  });

  window.addEventListener('resize', function () {
    currentIndex = 0;
    moveSlider();
  });

  moveSlider();
}

function renderNews() {
  var itemHtml = `
    <li>
      <a href="#">
        <div class="news__meta">
          <span>0000/00/00</span>
          <span class="news__label">プレスリリース</span>
        </div>
        <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
      </a>
    </li>
  `;

  document.querySelector('#newsList').innerHTML = itemHtml.repeat(4);
}

function initBanners() {
  document.querySelector('.banner--recruit').style.backgroundImage =
    `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images.recruit})`;

  document.querySelector('.banner--contact').style.backgroundImage =
    `linear-gradient(rgba(198,181,25,0.7), rgba(96,87,12,0.7)), url(${images.contact})`;
}

initMenu();
initHero();
initLogos();
renderServices();
renderCases();
initMemberSlider();
renderNews();
initBanners();
