class PagesCpzsListController {
  constructor ($scope, $compile, DTOptionsBuilder, DTColumnBuilder, API) {
    'ngInject'
    this.API = API

    let dataRows = this.API.service('teacollections', this.API.all('informs'))

    dataRows.getList()
        .then((response) => {
      let dataSet = response.plain()

      this.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('data', dataSet)
        .withOption('createdRow', createdRow)
        .withOption('responsive', true)
        .withOption('language',{
                      "info": "显示 从第_START_条 到 第_END_条 共有_TOTAL_条",
                      "infoEmpty": "暂时没有数据",
                      "search": "搜索:",
                      "lengthMenu": "每页显示 _MENU_ 条",
                      "zeroRecords": "没有找到你要的数据哦！",
                      "infoFiltered": "一共有 _MAX_ 条",
                      "paginate": {
                        "next": "下一页",
                        "previous": "上一页"
                      }


        })
        .withBootstrap()

    this.dtColumns = [
      DTColumnBuilder.newColumn(null).notSortable().renderWith(imgsHtml),
      DTColumnBuilder.newColumn(null).notSortable().renderWith(contentsHtml)


    ]

    this.displayTable = true
  })

    let createdRow = (row) => {
      $compile(angular.element(row).contents())($scope)
    }

    let imgsHtml = (data) => {

      return `
                <a ui-sref="page.cpzsone({dataRowId: ${data.id}})">
                    <img  src="${data.img}" />
                </a>`
    }

    let contentsHtml = (data) => {
      return `
                <a ui-sref="page.cpzsone({dataRowId: ${data.id}})">
                    <p class="text-right">
                        ${data.title}
                    </p>
                </a>`
    }
  }

  $onInit () {}

}

export const PagesCpzsListComponent = {
  templateUrl: './views/app/components/pages-cpzs-list/pages-cpzs-list.component.html',
  controller: PagesCpzsListController,
  controllerAs: 'vm',
  bindings: {}
}
