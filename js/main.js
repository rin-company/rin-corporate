'use strict';

// お問い合わせ設定：メールの送受信を確認してから true にしてください。
// false の間はアドレス・メールリンクを表示しません。
const CONTACT_ENABLED = false;
const CONTACT_EMAIL = 'info@ri-n1.com';

const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
const mobileQuery = window.matchMedia('(max-width: 760px)');

if (toggle && navigation) {
  toggle.hidden = false;
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.hidden = mobileQuery.matches;
  };
  closeMenu();
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    navigation.hidden = !open;
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header') && mobileQuery.matches) closeMenu();
  });
  mobileQuery.addEventListener('change', closeMenu);
}

const emailLink = document.querySelector('#contact-email');
if (CONTACT_ENABLED && emailLink) {
  document.querySelector('#contact-status').textContent = 'メールでお問い合わせください。';
  document.querySelector('#contact-note').textContent = 'ボタンを押すと、お使いのメールアプリが開きます。';
  emailLink.href = `mailto:${CONTACT_EMAIL}`;
  emailLink.textContent = `${CONTACT_EMAIL} ↗`;
  emailLink.hidden = false;
}
