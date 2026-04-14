'use strict';

// function handleCheckSubscription (){
//   const days = window.__APP_DAYS_SINCE_SUBSCRIPTION__;
//   const availableDate = window.__APP_AVAILABLE_DATE__;
//   const linkButton = document.querySelector('js-cta_button.--link');
//   const popupButton = document.querySelector('js-cta_button.--popup');

//   alert(`サブスク期間は${days}で、期限は${availableDate}です。`)

//   // console.log("daysSinceSubscription:", days);
//   if(days <= availableDate) {
//     popupButton.style.cssText = "opacity: 1; visibility: visible";
//     alert('サブスク期間が足りていません')
//   } else {
//     linkButton.style.cssText = "opacity: 1; visibility: visible";
//     alert('サブスク期間が足りています')
//   }

// }
// window.addEventListener('DOMContentLoaded', handleCheckSubscription, false);


function handlePopup(){
  const html = document.querySelector('html');
  const popup = document.querySelector('.js-popup');

  html.style.cssText = 'overflow: hidden';
  popup.style.cssText = 'opacity: 1; visibility: visible';
}

function handleGetQuery(){
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('user_id');
  // const startedAt = params.get('subscription_started_at');
  const startedAt = '2026-04-13'

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
    if (diffDays >= 4) {
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

}
window.addEventListener('DOMContentLoaded', handleGetQuery, false);
