 
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


            logo2 = CONTENT
            logo2 {
                table = tt_content
                select.where = colPos = 5
                orderBy = sorting
                select.languageField = sys_language_uid
            }
            
            layout = TEXT
            layout.field=layout
 
      
            inhaltLinks=CONTENT
            inhaltLinks {
                table = tt_content
                select.where = colPos = 6
                orderBy = sorting
               
     
                select.languageField = sys_language_uid
               
            }

            inhaltRechts=CONTENT
            inhaltRechts {
                table = tt_content
                select.where = colPos = 7
                orderBy = sorting
               
     
                select.languageField = sys_language_uid
               
            }
            inhalt=CONTENT
            inhalt {
                table = tt_content
                select.where = colPos = 1
                orderBy = sorting
               
     
                select.languageField = sys_language_uid
               
            }
            
            footer2=CONTENT
            footer2 {
                table = tt_content
                select.where = colPos = 8
                orderBy = sorting
               
     
                select.languageField = sys_language_uid
               
            }

      
          pages{
            portfolioItem=TEXT
            portfolioItem{
                table=pages
               
                select {
                  
                  where{
                    data = field:pid
                    wrap= uid= |
                    intval = 1
                  } 
              
                }
            }
          
          }

        }
    }

 
    includeCSS {
        50=EXT:heiner/Resources/Public/Css/global.css
        60=EXT:heiner/Resources/Public/Css/el_demo.css
        70=EXT:heiner/Resources/Public/Css/structure.css
        80=EXT:heiner/Resources/Public/Css/agency4.css
        90=EXT:heiner/Resources/Public/Css/custom.css
        100=EXT:heiner/Resources/Public/Css/bootstrap.min.css
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
        110= EXT:heiner/Resources/Public/js/el_demo.js
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


tt_content.b13-1col-jumbotron-container-service-items< lib.contentElement
tt_content.b13-1col-jumbotron-container-service-items {
    templateName = 1ColSection1AboutUs
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
        207 = B13\Container\DataProcessing\ContainerProcessor
        207{
            colPos = 207
            as = children_207
        }

  
    }

}
tt_content.b13-2ColSection1AboutUs< lib.contentElement
tt_content.b13-2ColSection1AboutUs {
    templateName = 2ColSection1AboutUs
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
        208 = B13\Container\DataProcessing\ContainerProcessor
        208{
            colPos = 208
            as = children_208
        }
        209 = B13\Container\DataProcessing\ContainerProcessor
        209{
            colPos = 209
            as = children_209
        }

  
    }

}

tt_content.b13-1col-section1Image-aboout-us< lib.contentElement
tt_content.b13-1col-section1Image-aboout-us {
    templateName = 1ColSection1ImageAboutUs
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
        221 = B13\Container\DataProcessing\ContainerProcessor
        221{
            colPos = 221
            as = children_221
        }

  
    }

}
tt_content.b13-1col-section1-aboout-us< lib.contentElement
tt_content.b13-1col-section1-aboout-us {
    templateName = 1ColSection1AboutUs
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
        214 = B13\Container\DataProcessing\ContainerProcessor
        214{
            colPos = 214
            as = children_214
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



   page.includeJS {
       666 = EXT:heiner/Resources/Public/js/jquery-2.1.4.min.js
       667 = EXT:heiner/Resources/Public/js/FeeditExtend.js
    }
    

    lib.gridelements.defaultGridSetup {
        stdWrap {
            editIcons = tt_content:header, tx_gridelements_children
        }
    }

    lib.emptyColDropzone = TEXT
    lib.emptyColDropzone {
        current = 1
        wrap = <!--###DATA_EMPTY_GRID_DROPZONE_|###-->
    }

    config.sourceopt {
        removeGenerator = {$sourceopt.removeGenerator}
        removeBlurScript = {$sourceopt.removeBlurScript}
        removeComments = {$sourceopt.removeComments}
        removeComments.keep {
            3001 = /###DATA_EMPTY_GRID_DROPZONE_/usi
        }
    }


    lib.gridelements.defaultGridSetup {
  // stdWrap functions being applied to each element

  columns {
    default {
      renderObj = COA
      renderObj {
        # You can use registers to i.e. provide different image settings for each column
        # 10 = LOAD_REGISTER
        20 =< tt_content

        # And you can reset the register later on
        # 30 = RESTORE_REGISTER
      }
    }
  }

  # if you want to provide your own templating, just insert a cObject here
  # this will prevent the collected content from being rendered directly
  # i.e. cObject = TEMPLATE or cObject = FLUIDTEMPLATE will be available from the core
  # the content will be available via fieldnames like
  # tx_gridelements_view_columns (an array containing each column)
  # or tx_gridelements_view_children (an array containing each child)
  # tx_gridelements_view_column_123 (123 is the number of the column)
  # or tx_gridelements_view_child_123 (123 is the UID of the child)

}

lib.tt_content.shortcut.pages = COA
lib.tt_content.shortcut.pages {
  10 = USER
  10 {
    userFunc = tx_gridelements_view->user_getTreeList
  }
  20 = CONTENT
  20 {
    table = tt_content
    select {
      pidInList.data = register:pidInList
      where = colPos >= 0
      orderBy = colPos,sorting
      orderBy.dataWrap = FIND_IN_SET(pid,'{register:pidInList}'),|
    }
  }
}

tt_content.shortcut.5 = LOAD_REGISTER
tt_content.shortcut.5 {
  tt_content_shortcut_recursive.field = recursive
}

tt_content.shortcut.20 {
  0 {
    tables := addToList(pages)
    conf.pages < lib.tt_content.shortcut.pages
  }
  1 {
    tables := addToList(pages)
    conf.pages < lib.tt_content.shortcut.pages
  }
}

// tt_content.gridelements_pi1 >
// tt_content.gridelements_pi1 = COA
// tt_content.gridelements_pi1 {
//   #10 =< lib.stdheader
//   20 = COA
//   20 {
//     10 = USER
//     10 {
//       userFunc = tx_gridelements_view->main
//       setup {
//         default < lib.gridelements.defaultGridSetup
//       }
//     }
//   }
// }