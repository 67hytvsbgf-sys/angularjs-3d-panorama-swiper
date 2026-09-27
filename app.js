/**
 * AngularJS 3D Panorama / Coverflow Swiper
 * Fullscreen – Bilder aus images/ – random – 5 Sekunden pro Bild
 */
(function () {
  'use strict';

  angular.module('panoramaApp', [])
    .controller('MainController', MainController);

  MainController.$inject = ['$timeout', '$scope'];

  function MainController($timeout, $scope) {
    var vm = this;

    vm.loading = true;
    vm.images = [];

    // ============================================================
    // HIER BILDER EINTRAGEN (Dateinamen im Ordner images/)
    // Du kannst beliebig viele hinzufügen.
    // ============================================================
    var imageFiles = [
      'images/1.jpg',
      'images/2.jpg',
      'images/3.jpg',
      'images/4.jpg',
      'images/5.jpg'
      // weitere Bilder hier ergänzen, z.B.:
      // 'images/mein-bild.jpg',
    ];

    // Shuffle (Fisher-Yates) – zufällige Reihenfolge
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    // Bilder laden / Liste setzen
    function initImages() {
      // Kopie erstellen und shuffeln
      vm.images = shuffle(imageFiles.slice());
      vm.loading = false;

      // Swiper erst nach Angular Digest initialisieren
      $timeout(function () {
        initSwiper();
      }, 50);
    }

    function initSwiper() {
      // Falls bereits ein Swiper existiert, zerstören
      if (window.mySwiper) {
        window.mySwiper.destroy(true, true);
      }

      window.mySwiper = new Swiper('.swiper', {
        effect: 'coverflow',           // 3D Coverflow = Panorama-ähnlicher Effekt
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        loopAdditionalSlides: 2,
        coverflowEffect: {
          rotate: 50,                  // Drehwinkel der seitlichen Slides
          stretch: 0,
          depth: 200,                  // Tiefe (3D)
          modifier: 1,
          slideShadows: true
        },
        autoplay: {
          delay: 5000,                 // 5 Sekunden pro Bild
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        },
        speed: 1200,                   // Übergangsdauer
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // Für echte Fullscreen-Nutzung
        keyboard: {
          enabled: true
        },
        mousewheel: {
          forceToAxis: true
        }
      });
    }

    // Start
    initImages();
  }
})();
