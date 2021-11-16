/**
 * --------------------------------------------------------------------------
 *  common.js
 * --------------------------------------------------------------------------
 */

var front = front || {};

front.common = front.common || {};

front.common = (function () {

  var init = function() {
    this.a();
    this.commonHandler();
  };

  var a = function () {
    $('a[href="#"]').on('click', function (e) {
      e.preventDefault();
    });
  }

  var commonHandler = function () {
      anime({
          targets: "#bubble-1 path",
          d: [
              'M639.86,0c-5.48,25.2-18.66,49.39-38.91,69.59c-39.95,39.84-106.2,62.95-171.17,59.7\n' +
              '\tc-6.9-0.34-13.86-0.95-20.84-1.68c-36.5-3.79-73.69-10.7-106.43,1.11c-27.8,10.03-45.57,31.55-70.66,45.2\n' +
              '\tc-32.82,17.86-76.99,20.78-115.17,11.25c-38.16-9.53-70.5-30.45-94.13-55.56C14.39,120.93,7.16,111.73,0,102.5V0H639.86z',
              'M495.82,0c-4.25,25.2-14.46,49.39-30.15,69.59c-30.96,39.84-82.29,62.95-132.64,59.7\n' +
              '        c-5.35-0.34-10.74-0.95-16.15-1.68c-28.28-3.79-57.1-10.7-82.47,1.11c-21.54,10.03-35.31,31.55-54.75,45.2\n' +
              '\tc-25.43,17.86-59.66,20.78-89.24,11.25c-29.57-9.53-54.63-30.45-72.94-55.56C11.15,120.93,5.55,111.73,0,102.5V0H495.82z'
          ],
          easing: "easeOutQuad",
          duration: 3000,
          loop: true,
          direction: "alternate",
      });

      anime({
          targets: "#bubble-2 path",
          d: [
              'M639.86,0c-5.48,25.2-18.66,49.39-38.91,69.59c-39.95,39.84-106.2,62.95-171.17,59.7\n' +
              '\tc-6.9-0.34-13.86-0.95-20.84-1.68c-36.5-3.79-73.69-10.7-106.43,1.11c-27.8,10.03-45.57,31.55-70.66,45.2\n' +
              '\tc-32.82,17.86-76.99,20.78-115.17,11.25c-38.16-9.53-70.5-30.45-94.13-55.56C14.39,120.93,7.16,111.73,0,102.5V0H639.86z',
              'M495.82,0c-4.25,25.2-14.46,49.39-30.15,69.59c-30.96,39.84-82.29,62.95-132.64,59.7\n' +
              '        c-5.35-0.34-10.74-0.95-16.15-1.68c-28.28-3.79-57.1-10.7-82.47,1.11c-21.54,10.03-35.31,31.55-54.75,45.2\n' +
              '\tc-25.43,17.86-59.66,20.78-89.24,11.25c-29.57-9.53-54.63-30.45-72.94-55.56C11.15,120.93,5.55,111.73,0,102.5V0H495.82z'
          ],
          easing: "easeOutQuad",
          duration: 3000,
          loop: true,
          direction: "alternate",
      });

      gsap.registerPlugin(ScrollTrigger);

      let SECTIONS = gsap.utils.toArray("section");

      ScrollTrigger.create({
          trigger:"#wrap",
          start:"top top",
          end:"bottom bottom",
          markers: false,
          // onEnter: self => console.log(self.isActive),
          onUpdate(self) {
              // let progress = self.progress;
              // progress.toFixed(3);
              // $('#progress').css('width', `${progress * 100}%`);

              if (self.progress < .2) {
                  $('.main').addClass('active').siblings().removeClass('active');
                  $('.pagination-wrap li').eq(0).addClass('active').siblings().removeClass('active');
              }
              else if (self.progress > .2 && self.progress < .4) {
                  $('.section02').addClass('active').siblings().removeClass('active');
                  $('.pagination-wrap li').eq(1).addClass('active').siblings().removeClass('active');
              }
              else if (self.progress > .4 && self.progress < .6) {
                  $('.section03').addClass('active').siblings().removeClass('active');
                  $('.pagination-wrap li').eq(2).addClass('active').siblings().removeClass('active');
              }
              else if (self.progress > .6 && self.progress < .8) {
                  $('.section04').addClass('active').siblings().removeClass('active');
                  $('.pagination-wrap li').eq(3).addClass('active').siblings().removeClass('active');
              }
              else {
                  $('.section05').addClass('active').siblings().removeClass('active');
                  $('.pagination-wrap li').eq(4).addClass('active').siblings().removeClass('active');
              }
          }
      });

      // ScrollTrigger.matchMedia({
      //     // pc
      //     "(min-width: 800px)": function() {
      //         ScrollTrigger.create({
      //             trigger:"#wrap",
      //             start:"top top",
      //             end:"bottom bottom",
      //             markers: false,
      //             onUpdate(self) {
      //                 if (self.progress < .2) {
      //                     $('.main').addClass('active').siblings().removeClass('active');
      //                     $('.pagination-wrap li').eq(0).addClass('active').siblings().removeClass('active');
      //                 }
      //                 else if (self.progress > .2 && self.progress < .4) {
      //                     $('.section02').addClass('active').siblings().removeClass('active');
      //                     $('.pagination-wrap li').eq(1).addClass('active').siblings().removeClass('active');
      //                 }
      //                 else if (self.progress > .4 && self.progress < .6) {
      //                     $('.section03').addClass('active').siblings().removeClass('active');
      //                     $('.pagination-wrap li').eq(2).addClass('active').siblings().removeClass('active');
      //                 }
      //                 else if (self.progress > .6 && self.progress < .8) {
      //                     $('.section04').addClass('active').siblings().removeClass('active');
      //                     $('.pagination-wrap li').eq(3).addClass('active').siblings().removeClass('active');
      //                 }
      //                 else {
      //                     $('.section05').addClass('active').siblings().removeClass('active');
      //                     $('.pagination-wrap li').eq(4).addClass('active').siblings().removeClass('active');
      //                 }
      //             }
      //         });
      //     },
      //
      //     // mobile
      //     "(max-width: 799px)": function() {
      //
      //     },
      // });

      $(document).ready(function() {
          var maxHeight = 0;

          $(".card-wrap .card").each(function() {
              var h = parseInt($(this).css("height"));
              if (maxHeight < h) {
                  maxHeight = h;
              }
          })

          $(".card-wrap .card .card-inner").each(function() {
              $(this).css({
                  height: maxHeight
              });
          })

          // function accordion (id) {
          //     $(`#${id} .item-header`).on('click', function() {
          //         if ($(this).parent().hasClass('active')) {
          //             $(this).parent().removeClass('active');
          //             $(this).siblings('.item-body').slideUp(200);
          //
          //         } else {
          //             $('.item').removeClass('active');
          //             $('.item-body').slideUp(200);
          //             $(this).parent().addClass('active');
          //             $(this).siblings('.item-body').slideDown(200);
          //         }
          //
          //         var getGalleryNum = $(this).siblings().children('.img-container').find('a').eq(0).attr('data-magnify')
          //         // console.log(getGalleryNum)
          //         $(`[data-magnify = ${getGalleryNum}]`).magnify({
          //             title: false,
          //             headerToolbar: [
          //                 'close'
          //             ],
          //             footerToolbar: [
          //                 'zoomIn',
          //                 'zoomOut',
          //                 'prev',
          //                 'next',
          //             ]
          //         });
          //     });
          // }

          $('.item-header').on('click', function() {
              if ($(this).parent().hasClass('active')) {
                  $(this).parent().removeClass('active');
                  $(this).siblings('.item-body').slideUp(200);

              } else {
                  $('.item').removeClass('active');
                  $('.item-body').slideUp(200);
                  $(this).parent().addClass('active');
                  $(this).siblings('.item-body').slideDown(200);
              }

              var getGalleryNum = $(this).siblings().children('.img-container').find('a').eq(0).attr('data-magnify')
              // console.log(getGalleryNum)
              $(`[data-magnify = ${getGalleryNum}]`).magnify({
                  title: false,
                  headerToolbar: [
                      'close'
                  ],
                  footerToolbar: [
                      'zoomIn',
                      'zoomOut',
                      'prev',
                      'next',
                  ]
              });
          });

          // accordion('career1')
          // accordion('career2')

          $(".img-container").each(function(){
              var ranNum = Math.random();
              var galleryNum = Math.floor(ranNum * 100)
              // console.log(galleryNum)
              var $img = $(this).children();
              // console.log($img)
              $img.attr('data-magnify',galleryNum);
          });

          function barSet() {
              $('.bar').each(function () {
                  var percent = $(this).data("percent");
                  $(this).css("width", percent + "%");
              });

              // $('.percent').each(function () {
              //     var $this = $(this);
              //     $({ Counter: 20 }).animate({
              //         Counter: $this.text()
              //     }, {
              //         delay: 0,
              //         duration: 2000,
              //         easing: 'swing',
              //         step: function () {
              //             $this.text(Math.ceil(this.Counter) + "%");
              //         }
              //     });
              // });
          }

          barSet();

              // setTimeout(skillSet, 1000);
      });
  };

  return {
    a,
    commonHandler,
    init
  }
})();

$(function () {
  front.common.init();
});

