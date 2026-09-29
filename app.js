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
        url: 'https://images.unsplash.com/photo-1558002179-7b0c7e0f2c0e?w=1920&q=85',
        alt: 'Brielle – Historisches Städtchen in den Niederlanden'
      },
      {
        url: 'https://images.unsplash.com/photo-1559113202-c916b4e6cf8e?w=1920&q=85',
        alt: 'Brüssel – Grand Place'
      },
      {
        url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=85',
        alt: 'Paris – Eiffelturm'
      },
      {
        url: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=1920&q=85',
        alt: 'Nizza – Promenade des Anglais an der Côte d\'Azur'
      },
      {
        url: 'https://images.unsplash.com/photo-1555881403-646f363e7a7a?w=1920&q=85',
        alt: 'Tarragona – Mittelmeerküste in Spanien'
      },
      {
        url: 'https://images.unsplash.com/photo-1513622475202-7f0d4b4b5b5a?w=1920&q=85',
        alt: 'Kopenhagen – Hafen und bunte Häuser'
      },
      {
        url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=85',
        alt: 'Belek – Türkische Riviera, Strand und Meer'
      },
      {
        url: 'https://images.unsplash.com/photo-1570077186671-e3a7e0c6b4c0?w=1920&q=85',
        alt: 'Griechische Insel – Santorini, weißes Dorf am Meer'
      },
      {
        url: 'https://images.unsplash.com/photo-1527004017725-7e5b7d0a9c0a?w=1920&q=85',
        alt: 'Luzern – Kapellbrücke und See in der Schweiz'
      },
      {
        url: 'https://images.unsplash.com/photo-1548585744-6b85f46e1f91?w=1920&q=85',
        alt: 'Pisa – Schiefer Turm in Italien'
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

    // Kurze elegante Ladezeit
    $timeout(init, 600);
  }
})();
