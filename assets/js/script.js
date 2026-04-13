'use strict';

function handleCheckSubscription (){
  const days = window.__APP_DAYS_SINCE_SUBSCRIPTION__;
  const borderLine = 3;
  const button = document.querySelector('js-cta_button');

  alert('days =' + days)

  // console.log("daysSinceSubscription:", days);
  if(days <= borderLine) {
    // button.style.cssText = 'pointer-events: none;';
    alert('サブスク期間が足りていません')
  } else {
    alert('サブスク期間が足りています')
  }

}
window.addEventListener('DOMContentLoaded', handleCheckSubscription, false);
