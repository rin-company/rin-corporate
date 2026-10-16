'use strict';

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

// 入力画面はHP独自のデザイン。確認・送信結果は同ページ内のフレームに表示。
// 外部ページの内容は読み取らず、送信成功を推測して表示しません。
const contactForm = document.querySelector('#rin-contact-form');
const resultPanel = document.querySelector('#rin-contact-result-panel');
if (contactForm && resultPanel) {
  contactForm.addEventListener('submit', () => {
    resultPanel.hidden = false;
    contactForm.hidden = true;
    document.querySelector('#rin-result-heading').focus();
    resultPanel.scrollIntoView({ block: 'start', behavior: 'auto' });
  });
  document.querySelector('#rin-contact-edit').addEventListener('click', () => {
    resultPanel.hidden = true;
    contactForm.hidden = false;
    document.querySelector('#contact-sei').focus();
  });
}

// 送信先の確認画面・完了画面の切り替え時はフレーム先頭を表示。
// loadだけで送信成功と判定しないこと。
const resultFrame = document.querySelector('iframe[name="rin-contact-result"]');
if (resultFrame && resultPanel) {
  resultFrame.addEventListener('load', () => {
    if (!resultPanel.hidden) resultPanel.scrollIntoView({ block: 'start', behavior: 'auto' });
  });
}
