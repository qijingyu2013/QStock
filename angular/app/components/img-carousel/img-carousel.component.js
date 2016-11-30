class ImgCarouselController {
  constructor ($scope) {
    'ngInject'

    $scope.directory = [
      {id:0, imgArr:[
        {imgSrc: 'img/index/l1.jpg', imgCls: 'img-responsive img-custom-3' ,text: 'aaaaaa'},
        {imgSrc: 'img/index/l2.jpg', imgCls: 'img-responsive img-custom-3' ,text: '的方式地方都是'},
        {imgSrc: 'img/index/l3.jpg', imgCls: 'img-responsive img-custom-3' ,text: '的方式地方都是'}
      ]},
      {id:1, imgArr:[
        {imgSrc: 'img/index/l2.jpg', imgCls: 'img-responsive img-custom-3' ,text: '的方式地方都是'},
        {imgSrc: 'img/index/l3.jpg', imgCls: 'img-responsive img-custom-3' ,text: '的方式地方都是'},
        {imgSrc: 'img/index/l3.jpg', imgCls: 'img-responsive img-custom-3' ,text: '的方式地方都是'}
      ]},
      {id:2, imgArr:[
        {imgSrc: 'img/index/l3.jpg', imgCls: 'img-responsive img-custom-3' ,text: '的方式地方都是'},
        {imgSrc: 'img/index/l2.jpg', imgCls: 'img-responsive img-custom-3' ,text: '的方式地方都是'},
        {imgSrc: 'img/index/l3.jpg', imgCls: 'img-responsive img-custom-3' ,text: '的方式地方都是'}
      ]},
      {id:3, imgArr:[
        {imgSrc: 'img/index/l4.jpg', imgCls: 'img-responsive img-custom-3' ,text: '的方式地方都是'},
        {imgSrc: 'img/index/l2.jpg', imgCls: 'img-responsive img-custom-3' ,text: '的方式地方都是'},
        {imgSrc: 'img/index/l3.jpg', imgCls: 'img-responsive img-custom-3' ,text: '的方式地方都是'}
      ]}
    ];
    var element = angular.element("#carousel-hyxw");

    element.addClass("carousel-indicators-display-none");
    $scope.myInterval = 3000;//循环间隔 3s
    $scope.noWrapSlides = false;
    $scope.noTransition = false;
    $scope.noPause = false;
    $scope.active = 0;

  }

  $onInit () {}
}

export const ImgCarouselComponent = {
  templateUrl: './views/app/components/img-carousel/img-carousel.component.html',
  controller: ImgCarouselController,
  controllerAs: 'vm',
  bindings: {}
}

