class ImgListController {
  constructor ($scope) {
    'ngInject'

    $scope.directory=[
      {imgSrc:'img/index/l1.jpg',imgCls: 'img-responsive img-custom-3'},
      {imgSrc:'img/index/l2.jpg',imgCls: 'img-responsive img-custom-3'},
      {imgSrc:'img/index/l3.jpg',imgCls: 'img-responsive img-custom-3'},
      {imgSrc:'img/index/l4.jpg',imgCls: 'img-responsive img-custom-3'},
      {imgSrc:'img/index/l5.jpg',imgCls: 'img-responsive img-custom-3'},
      {imgSrc:'img/index/l6.jpg',imgCls: 'img-responsive img-custom-3'},
      {imgSrc:'img/index/l7.jpg',imgCls: 'img-responsive img-custom-3'},
      {imgSrc:'img/index/l8.jpg',imgCls: 'img-responsive img-custom-3'}
    ];

    $scope.selectRestaurant=function(row) {
      $scope.selectedRow=row;
    }
    $scope.noSelectRestaurant=function() {
      $scope.selectedRow='false';
    }
  }

  $onInit () {}
}

export const ImgListComponent = {
  templateUrl: './views/app/components/img-list/img-list.component.html',
  controller: ImgListController,
  controllerAs: 'vm',
  bindings: {}
}

