/**
 * DS – Moments by the Sea
 * Elegant 3D Coverflow Gallery
 */
(function () {
  'use strict';

  angular.module('panoramaApp', [])
    .controller('MainController', MainController);

  MainController.$inject = ['$timeout'];

  function MainController($timeout) {
    var vm = this;
    vm.loading = true;
    vm.images = [];

    // Strand- & Reise-Platzhalter
    var imageList = [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85',
        alt: 'Côte d\'Azur – Türkises Mittelmeer'
      },
      {
        url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1920&q=85',
        alt: 'Côte d\'Azur – Felsenküste und Meer'
      },
      {
        url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&q=85',
        alt: 'Côte d\'Azur – Abendlicht am Strand'
      },
      {
        url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1920&q=85',
        alt: 'Knokke – Weite Strände an der Nordsee'
      },
      {
        url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=85',
        alt: 'Katwijk – Dünen und Nordsee'
      },
      {
        url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=85',
        alt: 'Nordsee – Stiller Strand bei Katwijk / Knokke'
      },
      {
        url: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920&q=85',
        alt: 'Amsterdam – Grachten und typische Häuser'
      },
      {
        url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85',
        alt: 'Brielle – Niederlande, typische Landschaft'
      },
      {
        url: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1920&q=85',
        alt: 'Brüssel – Stadtansicht Belgien'
      },
      {
        url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=85',
        alt: 'Paris – Eiffelturm'
      },
      {
        url: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=1920&q=85',
        alt: 'Nizza – Promenade an der Côte d\'Azur'
      },
      {
        url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=85',
        alt: 'Tarragona – Mittelmeerküste Spanien'
      },
      {
        url: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1920&q=85',
        alt: 'Kopenhagen – Hafen und bunte Häuser'
      },
      {
        url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=85',
        alt: 'Belek – Türkische Riviera, Strand und Meer'
      },
      {
        url: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1920&q=85',
        alt: 'Griechische Insel – Santorini am Meer'
      },
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85',
        alt: 'Luzern – See und Berge in der Schweiz'
      },
      {
        url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&q=85',
        alt: 'Pisa – Italien, historisches Stadtbild'
      }
    ];

    // Fisher-Yates Shuffle
    function shuffle(arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = a[i];
        a[i] = a[j];
        a[j] = t;
      }
      return a;
    }

    function init() {
      vm.images = shuffle(imageList);
      vm.loading = false;

      $timeout(function () {
        if (window.mySwiper) {
          window.mySwiper.destroy(true, true);
        }

        window.mySwiper = new Swiper('.swiper', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          loop: true,
          loopAdditionalSlides: 3,
          speed: 1400,
          coverflowEffect: {
            rotate: 28,
            stretch: 0,
            depth: 160,
            modifier: 1.1,
            slideShadows: true
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          keyboard: { enabled: true },
          mousewheel: { forceToAxis: true }
        });
      }, 80);
    }

    $timeout(init, 600);
  }
})();
