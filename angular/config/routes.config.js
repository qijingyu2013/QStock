export function RoutesConfig ($stateProvider, $urlRouterProvider) {
  'ngInject'

  var getView = (viewName) => {
    return `./views/app/pages/${viewName}/${viewName}.page.html`
  }

  var getLayout = (layout) => {
    return `./views/app/pages/layout/${layout}.page.html`
  }

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('app', {
      abstract: true,
      views: {
        'layout': {
          templateUrl: getLayout('layout')
        },
        'header@app': {
          templateUrl: getView('header')
        },
        'footer@app': {
          templateUrl: getView('footer')
        },
        main: {}
      },
      data: {
        bodyClass: 'hold-transition skin-blue' // sidebar-mini
      }
    })
    .state('app.landing', {
      url: '/',
      data: {
        auth: false
        //auth: true
      },
      views: {
        'main@app': {
          templateUrl: getView('landing')
        }
      }
    })
    .state('page', {
      abstract: true,
      views: {
        'layout': {
          templateUrl: getLayout('layout')
        },
        'header@page': {
          templateUrl: getView('header')//page
        },
        'footer@page': {
          templateUrl: getView('footer')
        },
        main: {}
      },
      data: {
        bodyClass: 'hold-transition skin-blue'
      }
    })
    .state('page.aboutafjj', {
      url: '/afjj',
      data: {
        auth: false
        //auth: true
      },
      views: {
        'main@page': {
          template: '<pages-afjj></pages-afjj>'
        }
      }
    })

    .state('page.aboutqywh', {
      url: '/qywh',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-qywh></pages-qywh>'
        }
      }
    })



    .state('page.aboutzxjj', {
      url: '/zxjj',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-zxjj></pages-zxjj>'
        }
      }
    })
    .state('page.zxdtlist', {
      url: '/zxdt-list',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-zxdt-list></pages-zxdt-list>'
        }
      }
    })
    .state('page.zxdtone', {
      url: '/zxdt-one/:dataRowId',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-zxdt-one></pages-zxdt-one>'
        }
      }
    })

    .state('page.aboutgsjs', {
      url: '/gsjs',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-gsjs></pages-gsjs>'
        }
      }
    })
    .state('page.aboutjyln', {
      url: '/jyln',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-jyln></pages-jyln>'
        }
      }
    })
    .state('page.aboutgsyw', {
      url: '/gsyw',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-gsyw></pages-gsyw>'
        }
      }
    })
    .state('page.aboutgszz', {
      url: '/gszz',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-gszz></pages-gszz>'
        }
      }
    })
    .state('page.cwhlist', {
      url: '/tea-cwh-list',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-cwh-list></pages-cwh-list>'
        }
      }
    })
    .state('page.cwhone', {
      url: '/tea-cwh-one/:dataRowId',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-cwh-one></pages-cwh-one>'
        }
      }
    })
    .state('page.czslist', {
      url: '/tea-czs-list',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-czs-list></pages-czs-list>'
        }
      }
    })
    .state('page.czsone', {
      url: '/tea-czs-one/:dataRowId',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-czs-one></pages-czs-one>'
        }
      }
    })
    .state('page.cpzslist', {
      url: '/tea-cpzs-list',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-cpzs-list></pages-cpzs-list>'
        }
      }
    })
    .state('page.cpzsone', {
      url: '/tea-cpzs-one/:dataRowId',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-cpzs-one></pages-cpzs-one>'
        }
      }
    })
    .state('page.tzgglist', {
      url: '/tea-tzgg-list',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-tzgg-list></pages-tzgg-list>'
        }
      }
    })
    .state('page.tzggone', {
      url: '/tea-tzgg-one/:dataRowId',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-tzgg-one></pages-tzgg-one>'
        }
      }
    })
    .state('page.jygzlist', {
      url: '/tea-jygz-list',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-jygz-list></pages-jygz-list>'
        }
      }
    })
    .state('page.jygzone', {
      url: '/tea-jygz-one/:dataRowId',
      data: {
        auth: false
      },
      views: {
        'main@page': {
          template: '<pages-jygz-one></pages-jygz-one>'
        }
      }
    })
      .state('page.aboutkhlc', {
        url: '/khlc',
        data: {
          auth: false
        },
        views: {
          'main@page': {
            template: '<pages-khlc></pages-khlc>'
          }
        }
      })
      .state('page.aboutrjxz', {
        url: '/rjxz',
        data: {
          auth: false
        },
        views: {
          'main@page': {
            template: '<pages-rjxz></pages-rjxz>'
          }
        }
      })
}
