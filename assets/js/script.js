'use strict';

function handleCheckSubscription (){
  const days = window.__APP_DAYS_SINCE_SUBSCRIPTION__;
  const borderLine = 38;
  const button = document.querySelector('js-cta_button');

  // console.log("daysSinceSubscription:", days);
  if(days <= borderLine) {
    button.style.cssText = 'pointer-events: none;';
  }

}
window.addEventListener('DOMContentLoaded', handleCheckSubscription, false);
