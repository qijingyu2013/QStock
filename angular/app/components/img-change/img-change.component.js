class ImgChangeController {
  constructor ($scope) {
    'ngInject'

    $scope.directory=[
      {imgSrc:'img/index/ld_1.png',imgCls: 'img-responsive img-custom-3',imgTitle:'2015年5月6日，湖南证监局领导朱治龙、期货处处长谢云飞、副处长刘皓宇等领导莅临湖南阿凡商品现货交易中心调研指导工作。'},
      {imgSrc:'img/index/ld_2.png',imgCls: 'img-responsive img-custom-3',imgTitle:'朱局表示：阿凡商品交易中心是在实力雄厚的科拉胜集团实体助推下创立创办的现货交易平台，在湖南是屈指可数，朱局强调要从战略和战术上都要规范运作，整合创新，稳步增长，扎实的推进湖南省经济发展，促进湖南省大宗商品交易市场的创新，将阿凡商品打造成为湖南乃至全国甚至国际上大宗商品行业新标杆！'},
      {imgSrc:'img/index/ld_3.png',imgCls: 'img-responsive img-custom-3',imgTitle:'2015年11月12日上午“上海交通大学”信息技术与电气工程研究院 “郁文贤”（院长）教授莅临湖南阿凡商品现货交易中心指导工作。参观交流过程中，郁院长表达了加强双方了解、互动、探寻合作空间的意愿。'},
      {imgSrc:'img/index/ld_4.png',imgCls: 'img-responsive img-custom-3',imgTitle:'2015年11月11日上午，总装备部后勤部政委赵林将军莅临湖南阿凡商品现货交易中心有限公司指导工作。赵将军对于“阿商所”取得的良好成绩表示赞赏，高度认可阿商所在服务实体企业、推动湖南经济发展、促进金融行业创新等方面做出的贡献。'},
      {imgSrc:'img/index/ld_5.png',imgCls: 'img-responsive img-custom-3',imgTitle:'2016年3月30日，湖南省发展研究中心主任王超、宣传部宋部长莅临湖南阿凡商品现货交易中心（以下简称阿商所）指导工作。CLASS集团董事长、阿商所董事长陈鹤鸣及阿商所高管热情接待了王主任和宋部长，随后就企业发展战略进行了深入的座谈。'},
      {imgSrc:'img/index/ld_6.png',imgCls: 'img-responsive img-custom-3',imgTitle:'2016年3月30日，湖南省发展研究中心主任王超、宣传部宋部长莅临湖南阿凡商品现货交易中心（以下简称阿商所）指导工作。CLASS集团董事长、阿商所董事长陈鹤鸣及阿商所高管热情接待了王主任和宋部长，随后就企业发展战略进行了深入的座谈。'}

    ];

    $scope.selectImage=function(row) {
      $scope.imgTitle = $scope.directory[row].imgTitle;
      $scope.imgSrc = $scope.directory[row].imgSrc;
      //
    }

    $scope.imgTitle = $scope.directory[0].imgTitle;
    $scope.imgSrc = $scope.directory[0].imgSrc;
  }

  $onInit () {
  }
}

export const ImgChangeComponent = {
  templateUrl: './views/app/components/img-change/img-change.component.html',
  controller: ImgChangeController,
  controllerAs: 'vm',
  bindings: {}
}

