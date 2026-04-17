'use strict';

function handlePopup(){
  const html = document.querySelector('html');
  const popup = document.querySelector('.js-popup');
  const closeButton = document.querySelector('.js-popup_close');

  html.style.cssText = 'overflow: hidden';
  popup.style.cssText = 'opacity: 1; visibility: visible';

  if(closeButton) {
    closeButton.addEventListener('click', function(){
      html.style.cssText = ''
      popup.style.cssText = ''
    })
  }
}

function handleGetQuery(){
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('user_id');
  const startedAt = params.get('subscription_started_at');

  const toDayObj = new Date();
  const toDay = `${toDayObj.getFullYear()}-${String(toDayObj.getMonth() + 1).padStart(2, '0')}-${String(toDayObj.getDate()).padStart(2, '0')}`;
  // console.log(`今日は${toDay}`);

  const linkButton = document.querySelector('.js-cta_button.--link');
  const popupButton = document.querySelector('.js-cta_button.--popup');

  if (startedAt) {
    const startedAtObj = new Date(startedAt);
    const diffMs = toDayObj.setHours(0,0,0,0) - startedAtObj.setHours(0,0,0,0);
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    // console.log(`開始日からの経過日数: ${diffDays}日`);
    if (diffDays >= 100) {
      if (linkButton) {
        linkButton.style.cssText = "display: block;";
      }
    } else {
      if (popupButton) {
        popupButton.style.cssText = "display: block";
      }
    }
  }

  popupButton.addEventListener('click', handlePopup, false);
  linkButton.addEventListener('click', function(){
    window.location.href = 'https://jh.swam-pj.jp/quiz/01/'
  })

}
window.addEventListener('DOMContentLoaded', handleGetQuery, false);
