/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */


// Changing footer description and removing mobile numebr
/*
const footer = document.querySelector(
    '.footer__aside-item--localization .hidden-pocket'
);
footer.innerHTML = `Kavee C&amp;C cages <br>Brocks Copse Road, Wootton Bridge, PO33 4NP, U.K. <br>supportclient@kaveecage.com`;
*/

if ( document.querySelector('.js-timer-hours') ) {
  // Custom-Countdown
  var second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  
  // var targetTime = new Date('{{- end_date -}}').getTime();
  var targetTime = new Date();
  targetTime.setHours(11);
  targetTime.setMinutes(30);
  targetTime.setSeconds(0);
  
  if (new Date().getTime() - targetTime.getTime() <= 0) {
    targetTime.setDate(new Date().getDate() + 1);
  }
  
  var x = setInterval(function () {
    var now = new Date().getTime();
    countdown = targetTime.getTime() - now;
    if (countdown <= 0) {
      targetTime.setDate(new Date().getDate() + 1);
    }
    (document.querySelector('.js-timer-hours').innerText = Math.floor(
      (countdown % day) / hour
    )),
    (document.querySelector('.js-timer-minutes').innerText = Math.floor(
        (countdown % hour) / minute
    )),
    (document.querySelector('.js-timer-seconds').innerText = Math.floor(
        (countdown % minute) / second
    ));
  }, second);
}

window.onload = function(event) {
  setTimeout(function() {
    var smileIcon = document.querySelector('#smile-ui-lite-container');
    
    if (smileIcon) {
      //smileIcon.removeAttribute('style');
      //smileIcon.style.position = 'fixed';
      smileIcon.style.zIndex = '1000';
    }
  }, 5000);
};


function changeMegaMenuFeaturedImage(el) {
  // get SVG to use
  let megaMenuWrapper = el.closest(".mega-menu__inner-wrapper");
  
  let existingSVG = megaMenuWrapper.querySelectorAll(".mega-menu__featured-image .hover-svg");
  if( existingSVG && existingSVG.length > 0 ){
    existingSVG.forEach(el => el.remove());
  }

  let svg = el.querySelector(".mega-menu__image-wrapper svg");
  if( svg ){
    let featuredImageWrapper = megaMenuWrapper.querySelector(".mega-menu__featured-image");

    megaMenuWrapper.classList.add("hover-active");
    let newSVG = svg.cloneNode(true);
    newSVG.classList.add("hover-svg")
    featuredImageWrapper.appendChild(newSVG);
  }
}

function resetMegaMenuFeaturedImage(el) {
  // get SVG to use
  let megaMenuWrapper = el.closest(".mega-menu__inner-wrapper");
  
  let svg = megaMenuWrapper.querySelector(".mega-menu__image-wrapper .hover-svg");
  if( svg ){
    svg.forEach(el => el.remove());
  }

  megaMenuWrapper.classList.remove("hover-active");
}

document.addEventListener("DOMContentLoaded", function(){
  let menuItems = document.querySelectorAll(".mega-menu__promo");
  menuItems.forEach(el => {
    el.addEventListener("mouseover", evt => { changeMegaMenuFeaturedImage(el) });
    el.addEventListener("mouseout", evt => { resetMegaMenuFeaturedImage(el) });
  })
})