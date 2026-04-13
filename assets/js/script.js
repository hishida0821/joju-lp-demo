'use strict';

function handleCheckSubscription (){
  const days = window.__APP_DAYS_SINCE_SUBSCRIPTION__;
  const availableDate = window.__APP_AVAILABLE_DATE__;
  const button = document.querySelector('js-cta_button');

  alert(`サブスク期間は${days}で、期限は${availableDate}です。`)

  // console.log("daysSinceSubscription:", days);
  if(days <= availableDate) {
    button.style.cssText = 'pointer-events: none;';
    alert('サブスク期間が足りていません')
  } else {
    alert('サブスク期間が足りています')
  }

}
window.addEventListener('DOMContentLoaded', handleCheckSubscription, false);
