'use strict';

function handleCheckSubscription (){
  const days = window.__APP_DAYS_SINCE_SUBSCRIPTION__;
  const availableDate = window.__APP_AVAILABLE_DATE__;
  const linkButton = document.querySelector('js-cta_button.--link');
  const popupButton = document.querySelector('js-cta_button.--popup');

  alert(`サブスク期間は${days}で、期限は${availableDate}です。`)

  // console.log("daysSinceSubscription:", days);
  if(days <= availableDate) {
    popupButton.style.cssText = "opacity: 1; visibility: visible";
    alert('サブスク期間が足りていません')
  } else {
    linkButton.style.cssText = "opacity: 1; visibility: visible";
    alert('サブスク期間が足りています')
  }

}
// window.addEventListener('DOMContentLoaded', handleCheckSubscription, false);

function HandleGetQuery(){
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('user_id'); // "123"
  const startedAt = params.get('subscription_started_at'); // "2026-04-01"

  alert(`ユーザーIDは${userId}で、サブスク期間は${startedAt}です。`)

}
window.addEventListener('DOMContentLoaded', HandleGetQuery, false);