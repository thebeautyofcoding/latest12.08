 
// Logo
 
vars.logo < styles.content.get
vars.logo.select {
    where = colPos = 0
    orderBy = sorting
    languageField = sys_language_uid
    
}
vars.logo.slide = -1
 
 // Inhalt
vars.inhalt < styles.content.get
vars.inhalt.select {
    where = colPos = 1
    orderBy = sorting

    languageField = sys_language_uid
    
}
vars.inhalt.slide = -1
vars.footer < styles.content.get
vars.footer.select {
    where = colPos = 2
    orderBy = sorting

    languageField = sys_language_uid
    
}
vars.footer.slide = -1

page = PAGE 
page {

    config{
        contentObjectExceptionHandler = 0
        frontend_editing = 1
    }
        
    10 = FLUIDTEMPLATE
    10 {


        
        templateName=Default
        partialRootPaths{
            10 = EXT:heiner/Resources/Private/Partials

        }
          templateRootPaths{
            10 = EXT:heiner/Resources/Private/Templates

        }
          layoutRootPaths{
            10 = EXT:heiner/Resources/Private/Layouts

        }
        10 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
        10 {
        
        
        levels = 1
        as = footerNav
        expandAll = 1
        includeSpacer = 1
        titleField = nav_title // title
        dataProcessing {
            10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
            10 {
                references.fieldName = media
            }
        }
    }
        variables < vars
        variables {
            layout = TEXT
            layout.value.field = backend_layout
            layout.value.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide
            
            logo = CONTENT
            logo {
                table = tt_content
                select.where = colPos = 0
                orderBy = sorting
                select.languageField = sys_language_uid
            }
            
            layout = TEXT
            layout.field=layout
 
      
            inhalt=CONTENT
            inhalt {
                table = tt_content
                select.where = colPos = 1
                orderBy = sorting
               
     
                select.languageField = sys_language_uid
               
            }
            
            footer=CONTENT
            footer {
                table = tt_content
                select.where = colPos = 2
                orderBy = sorting
               
     
                select.languageField = sys_language_uid
               
            }



        }
    }

 
    includeCSS {
        50=EXT:heiner/Resources/Public/Css/global.css
        60=EXT:heiner/Resources/Public/Css/el_demo.css
        70=EXT:heiner/Resources/Public/Css/structure.css
        80=EXT:heiner/Resources/Public/Css/agency4.css
        90=EXT:heiner/Resources/Public/Css/custom.css
    }
 
    includeJS {
              
     }
 
   
    includeJSFooter {
        10=EXT:heiner/Resources/Public/js/jquery-2.1.4.min.js
        20=EXT:heiner/Resources/Public/js/mfn.menu.js
        30=EXT:heiner/Resources/Public/js/jquery.plugins.js
        40=EXT:heiner/Resources/Public/js/jquery.jplayer.min.js
        50=EXT:heiner/Resources/Public/js/animations/animations.js
        60=EXT:heiner/Resources/Public/js/translate3d.js
        80=EXT:heiner/Resources/Public/js/email.js
        70=EXT:heiner/Resources/Public/js/scripts.js
        100=EXT:heiner/Resources/Public/js/el_demo.js
   }
 
}


// default/general configuration (will add 'children_<colPos>' variable to processedData for each colPos in container
tt_content.b13-2cols-with-header-container < lib.contentElement
tt_content.b13-2cols-with-header-container {
    templateName = 2ColsWithHeader
    templateRootPaths {
        10 = EXT:heiner/Resources/Private/Templates/Container
    }
       partialRootPaths {
        10 = EXT:heiner/Resources/Private/Partials
    }
       layoutRootPaths {
        10 = EXT:heiner/Resources/Private/Layouts
    }
    dataProcessing {
        100 = B13\Container\DataProcessing\ContainerProcessor
    }
}

// if needed you can use ContainerProcessor with explicitly set colPos/variable values
tt_content.b13-2cols-with-header-container < lib.contentElement
tt_content.b13-2cols-with-header-container {
    templateName = 2ColsWithHeader
    templateRootPaths {
        10 = EXT:heiner/Resources/Private/Templates/Container
    }
       partialRootPaths {
        10 = EXT:heiner/Resources/Private/Partials
    }
       layoutRootPaths {
        10 = EXT:heiner/Resources/Private/Layouts
    }
    dataProcessing {
        200 = B13\Container\DataProcessing\ContainerProcessor
        200 {
            colPos = 200
            as = children_200
        }
        201 = B13\Container\DataProcessing\ContainerProcessor
        201 {
            colPos = 201
            as = children_201
        }
        202 = B13\Container\DataProcessing\ContainerProcessor
        202 {
            colPos = 202
            as = children_202
        }
    }
}
tt_content.b13-1col-jumbotron-container < lib.contentElement
tt_content.b13-1col-jumbotron-container {
    templateName = 1ColJumbotron
    templateRootPaths {
        10 = EXT:heiner/Resources/Private/Templates/Container
    }
       partialRootPaths {
        10 = EXT:heiner/Resources/Private/Partials
    }
       layoutRootPaths {
        10 = EXT:heiner/Resources/Private/Layouts
    }
    dataProcessing {
        204 = B13\Container\DataProcessing\ContainerProcessor
        204{
            colPos = 204
            as = children_204
        }

  
    }
}
tt_content.b13-1col-jumbotron-container-services < lib.contentElement
tt_content.b13-1col-jumbotron-container-services {
    templateName = 1ColJumbotronServices
    templateRootPaths {
        10 = EXT:heiner/Resources/Private/Templates/Container
    }
       partialRootPaths {
        10 = EXT:heiner/Resources/Private/Partials
    }
       layoutRootPaths {
        10 = EXT:heiner/Resources/Private/Layouts
    }
    dataProcessing {
        205 = B13\Container\DataProcessing\ContainerProcessor
        205{
            colPos = 205
            as = children_205
        }

  
    }
}

tt_content.b13-1col-jumbotron-container-service-items< lib.contentElement
tt_content.b13-1col-jumbotron-container-service-items {
    templateName = 1ColJumbotronServiceItems
    templateRootPaths {
        10 = EXT:heiner/Resources/Private/Templates/Container
    }
       partialRootPaths {
        10 = EXT:heiner/Resources/Private/Partials
    }
       layoutRootPaths {
        10 = EXT:heiner/Resources/Private/Layouts
    }
    dataProcessing {
        206 = B13\Container\DataProcessing\ContainerProcessor
        206{
            colPos = 206
            as = children_206
        }

  
    }

}


lib.contentElement {
    templateRootPaths.200 = EXT:heiner/Resources/Private/Templates/Content/
    layoutRootPaths.200 = EXT:heiner/Resources/Private/Layouts/
    partialRootPaths.200 = EXT:heiner/Resources/Private/Partials/
}

// tt_content {
//     portfolio_list =< lib.contentElement
//     portfolio_list {
//         templateName = NewContentElement
//     }
// }




tt_content {
   portfolio_list =< lib.contentElement
   portfolio_list {
      templateName = PortfolioList
      dataProcessing.10 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
      dataProcessing.10 {
          pidInList = this
          table=tx_heiner_domain_model_content
     
        #where = portfolio_list = 155
        where.data = field:uid
        where.intval = 1
        where.wrap = parent_uid = |
         as = elements
         orderBy=sorting
    
         dataProcessing {
            11 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
            11 {
               references.fieldName = image
               
            }
         }
      }
   }
}
tt_content {
   custom_footer =< lib.contentElement
   custom_footer {
      templateName = CustomFooter
      dataProcessing.20 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
      dataProcessing.20 {
          pidInList.data = field:pid
          #pidInList = 0
          
          table=tx_heiner_domain_model_footer
     
        #where = portfolio_list = 155
        where.data = field:uid
        where.intval = 1
        where.wrap = parent_uid = |
         as = elements
         orderBy=sorting
      }
         dataProcessing {
            10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
            10 {
               references.fieldName = image
               
            }
         }
      
   }
}
            #Footer navigation



