<?php
defined('TYPO3_MODE') || die();

/* inherit and extend the show items from the parent class */

if (isset($GLOBALS['TCA']['tt_content']['types']['1']['showitem'])) {
    $GLOBALS['TCA']['tt_content']['types']['Tx_Heiner_Content']['showitem'] =
        $GLOBALS['TCA']['tt_content']['types']['1']['showitem'];
} elseif (is_array($GLOBALS['TCA']['tt_content']['types'])) {
    // use first entry in types array
    $tt_content_type_definition = reset($GLOBALS['TCA']['tt_content']['types']);
    $GLOBALS['TCA']['tt_content']['types']['Tx_Heiner_Content']['showitem'] =
        $tt_content_type_definition['showitem'];
} else {
    $GLOBALS['TCA']['tt_content']['types']['Tx_Heiner_Content']['showitem'] =
        '';
}
$GLOBALS['TCA']['tt_content']['types']['Tx_Heiner_Content']['showitem'] .=
    ',--div--;LLL:EXT:heiner/Resources/Private/Language/locallang_db.xlf:tx_heiner_domain_model_content,';
$GLOBALS['TCA']['tt_content']['types']['Tx_Heiner_Content']['showitem'] .=
    'header, bodytext, image';

$GLOBALS['TCA']['tt_content']['columns'][
    $GLOBALS['TCA']['tt_content']['ctrl']['type']
]['config']['items'][] = [
    'LLL:EXT:heiner/Resources/Private/Language/locallang_db.xlf:tt_content.tx_extbase_type.Tx_Heiner_Content',
    'Tx_Heiner_Content',
];

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    ['custom element', 'portfolio_list', 'content-text'],
    'textmedia',
    'after'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
    ['custom element', 'custom_footer', 'content-text'],
    'textmedia',
    'after'
);

// $GLOBALS['TCA']['tt_content']['types']['portfolio_list']= [
//    'showitem' => '
//          --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
//             --palette--;;general,
//             image; Image,
//             header; Title,

//             bodytext; Schreiben Sie einen Text,

//          --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
//             --palette--;;hidden,
//             --palette--;;access,
//       ',
//    'columnsOverrides' => [
//       'bodytext' => [
//          'config' => [
//             'enableRichtext' => true,
//             'richtextConfiguration' => 'default',
//          ],
//       ],
//     ],

// ];
$GLOBALS['TCA']['tt_content']['types']['portfolio_list'] = [
    'showitem' => '
          --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
             --palette--;;general,
            
             header; Title,
          
             portfolio_list_item;Elemente,
             
          --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
             --palette--;;hidden,
             --palette--;;access,
       ',
    'columnsOverrides' => [
        'bodytext' => [
            'config' => [
                'enableRichtext' => true,
                'richtextConfiguration' => 'default',
            ],
        ],
        'portfolio_list_item' => [
            'exclude' => true,
            'label' => 'Einzelnes-Portfolio',
            'config' => [
                'type' => 'inline',
                'allowed' => 'tx_heiner_domain_model_content',
                'foreign_table' => 'tx_heiner_domain_model_content',
                'foreign_field' => 'parent_uid',

                'minitems' => 0,
                'maxitems' => 99,
                'appearance' => [
                    'collapseAll' => true,
                    'expandSingle' => true,
                    'levelLinksPosition' => 'bottom',
                    'useSortable' => true,
                    'showPossibleLocalizationRecords' => true,
                    'showRemovedLocalizationRecords' => true,
                    'showAllLocalizationLink' => true,
                    'showSynchronizationLink' => true,
                    'enabledControls' => [
                        'info' => false,
                    ],
                ],
            ],
        ],
    ],
];
$GLOBALS['TCA']['tt_content']['types']['custom_footer'] = [
    'showitem' => '
          --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
             --palette--;;general,
            
             header; Title,
            image; Logo,
            bodytext;Adress,
             service_entry;Elemente,
             
          --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
             --palette--;;hidden,
             --palette--;;access,
       ',
    'columnsOverrides' => [
        'bodytext' => [
            'config' => [
                'enableRichtext' => true,
                'richtextConfiguration' => 'default',
            ],
        ],
        'service_entry' => [
            'exclude' => true,
            'label' => 'Einzelner-Service',
            'config' => [
                'type' => 'inline',
                'allowed' => 'tx_heiner_domain_model_footer',
                'foreign_table' => 'tx_heiner_domain_model_footer',
                'foreign_field' => 'parent_uid',

                'minitems' => 0,
                'maxitems' => 99,
                'appearance' => [
                    'collapseAll' => true,
                    'expandSingle' => true,
                    'levelLinksPosition' => 'bottom',
                    'useSortable' => true,
                    'showPossibleLocalizationRecords' => true,
                    'showRemovedLocalizationRecords' => true,
                    'showAllLocalizationLink' => true,
                    'showSynchronizationLink' => true,
                    'enabledControls' => [
                        'info' => false,
                    ],
                ],
            ],
        ],
    ],
];


$GLOBALS['TCA']['tt_content']['types']['bodytext'] = [
    'showitem' => '
          --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
             --palette--;;general,
            
        
            bodytext;Inhalt,
            
             
          --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
             --palette--;;hidden,
             --palette--;;access,
       ',
    'columnsOverrides' => [
        'bodytext' => [
            'config' => [
                'enableRichtext' => true,
                'richtextConfiguration' => 'default',
            ],
        ],

    ],
];



$customFields = [
    'bodytext' => [
        'exclude' => false,
        'l10n_mode' => 'prefixLangTitle',
        'label' => 'Inhalt',
        'config' => [
            'type' => 'text',
            'cols' => 40,
            'rows' => 6,
            'enableRichtext' => true
        ],
    ]
];
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content',$customFields);

// $GLOBALS['TCA']['tt_content']['columns']['header']['config']=[
//     'type' => 'inline',
//     'foreign_table' => 'tt_content',
//     'foreign_field' => 'header',
//     'foreign_sortby' => 'sorting',
//     'maxitems' => 9999,
//     'appearance' => [
//         'collapseAll' => 0,
//         'levelLinksPosition' => 'top',
//         'showSynchronizationLink' => 1,
//         'showPossibleLocalizationRecords' => 1,
//         'useSortable' => 1,
//         'showAllLocalizationLink' => 1
//     ]
// ];
// $GLOBALS['TCA']['tt_content']['columns']['bodytext']['config']=[
//     'type' => 'inline',
//     'foreign_table' => 'tt_content',
//     'foreign_field' => 'header',
//     'foreign_sortby' => 'sorting',
//     'maxitems' => 9999,
//     'appearance' => [
//         'collapseAll' => 0,
//         'levelLinksPosition' => 'top',
//         'showSynchronizationLink' => 1,
//         'showPossibleLocalizationRecords' => 1,
//         'useSortable' => 1,
//         'showAllLocalizationLink' => 1
//     ]
// ];
// $GLOBALS['TCA']['tt_content']['columns']['image']['config']=[
//     'type' => 'inline',
//     'foreign_table' => 'tt_content',
//     'foreign_field' => 'image',
//     'foreign_sortby' => 'sorting',
//     'maxitems' => 9999,
//     'appearance' => [
//         'collapseAll' => 0,
//         'levelLinksPosition' => 'top',
//         'showSynchronizationLink' => 1,
//         'showPossibleLocalizationRecords' => 1,
//         'useSortable' => 1,
//         'showAllLocalizationLink' => 1
//     ]
// ];

$temporaryColumn = [
    'portfolio_list_item' => [
        'exclude' => true,
        'label' => 'Einzelnes-Portfolio',
        'config' => [
            'type' => 'inline',
            'allowed' => 'tt_content',
            'foreign_table' => 'tt_content',
            'foreign_sortby' => 'sorting',

            'minitems' => 0,
            'maxitems' => 99,
            'appearance' => [
                'collapseAll' => true,
                'expandSingle' => true,
                'levelLinksPosition' => 'bottom',
                'useSortable' => true,
                'showPossibleLocalizationRecords' => true,
                'showRemovedLocalizationRecords' => true,
                'showAllLocalizationLink' => true,
                'showSynchronizationLink' => true,
                'enabledControls' => [
                    'info' => false,
                ],
            ],
        ],
    ],
];
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
    'tt_content',
    $temporaryColumn
);
$service_entry = [
    'service_entry' => [
        'exclude' => true,
        'label' => 'Einzelner-Service-Eintrag',
        'config' => [
            'type' => 'inline',
            'allowed' => 'tt_content',
            'foreign_table' => 'tt_content',
            'foreign_sortby' => 'sorting',

            'minitems' => 0,
            'maxitems' => 99,
            'appearance' => [
                'collapseAll' => true,
                'expandSingle' => true,
                'levelLinksPosition' => 'bottom',
                'useSortable' => true,
                'showPossibleLocalizationRecords' => true,
                'showRemovedLocalizationRecords' => true,
                'showAllLocalizationLink' => true,
                'showSynchronizationLink' => true,
                'enabledControls' => [
                    'info' => false,
                ],
            ],
        ],
    ],
];
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
    'tt_content',
    $service_entry
);
//  $customImage = [
//     'portfolio_list' => [

//         'exclude' => true,
//         'label' => 'Einzelnes-Portfolio',
//         'config' => [
//             'type' => 'inline',
//             'foreign_table' => 'tt_content',
//             'foreign_field' => 'teaser_field',
//             'foreign_sortby' => 'sorting',
//             'maxitems' => 9999,
//             'appearance' => [
//                 'collapseAll' => 0,
//                 'levelLinksPosition' => 'top',
//                 'showSynchronizationLink' => 1,
//                 'showPossibleLocalizationRecords' => 1,
//                 'useSortable' => 1,
//                 'showAllLocalizationLink' => 1
//             ],
//         ],

//     ],
//  ];
//  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $customImage);

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
    \B13\Container\Tca\Registry::class
)->configureContainer(
    (new \B13\Container\Tca\ContainerConfiguration(
        'b13-2cols-with-header-container', // CType
        '2 Column Container With Header', // label
        'Some Description of the Container', // description
        [
            [
                [
                    'name' => 'header',
                    'colPos' => 200,
                    'colspan' => 2,
                    'allowed' => ['CType' => 'header, textmedia'],
                ],
            ],
            [
                ['name' => 'left side', 'colPos' => 201],
                ['name' => 'right side', 'colPos' => 202],
            ],
        ] // grid configuration
    ))
        // set an optional icon configuration
        ->setIcon(
            'EXT:container_example/Resources/Public/Icons/b13-2cols-with-header-container.svg'
        )
);


\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
    \B13\Container\Tca\Registry::class
)->configureContainer(
    (new \B13\Container\Tca\ContainerConfiguration(
        'b13-1col-jumbotron-container', // CType
        '1 Column Container', // label
        'Some Description of the Container', // description
        [
    
            [
                ['name' => 'normal', 'colPos' => 204],
          
            ],
        ] // grid configuration
    ))
        // set an optional icon configuration
        ->setIcon(
            'EXT:container_example/Resources/Public/Icons/b13-2cols-with-header-container.svg'
        )
);

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
    \B13\Container\Tca\Registry::class
)->configureContainer(
    (new \B13\Container\Tca\ContainerConfiguration(
        'b13-1col-jumbotron-container-services', // CType
        '1 Column Container for services', // label
        'Some Description of the Container', // description
        [
    
            [
                ['name' => 'normal', 'colPos' => 205],
          
            ],
        ] // grid configuration
    ))
        // set an optional icon configuration
        ->setIcon(
            'EXT:container_example/Resources/Public/Icons/b13-2cols-with-header-container.svg'
        )
);
\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
    \B13\Container\Tca\Registry::class
)->configureContainer(
    (new \B13\Container\Tca\ContainerConfiguration(
        'b13-1col-jumbotron-container-service-items', // CType
        '1 Column Container for services', // label
        'Some Description of the Container', // description
        [
    
            [
                ['name' => 'normal', 'colPos' => 206],
          
            ],
        ] // grid configuration
    ))
        // set an optional icon configuration
        ->setIcon(
            'EXT:container_example/Resources/Public/Icons/b13-2cols-with-header-container.svg'
        )
);


\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
    \B13\Container\Tca\Registry::class
)->configureContainer(
    (new \B13\Container\Tca\ContainerConfiguration(
        'b13-2ColSection1AboutUs', // CType
        '2 Column Container for Section1 in About us', // label
        'Some Description of the Container', // description
        [
            [
                [
                    'name' => 'header',
                    'colPos' => 210,
                    'colspan' => 2,
                    'allowed' => ['CType' => 'header, textmedia'],
                ],
            ],
            [
                ['name' => 'left side', 'colPos' => 208],
                ['name' => 'right side', 'colPos' => 209],
            ],
        ] // grid configuration
    ))
        // set an optional icon configuration
        ->setIcon(
            'EXT:container_example/Resources/Public/Icons/b13-2cols-with-header-container.svg'
        )
);


\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
    \B13\Container\Tca\Registry::class
)->configureContainer(
    (new \B13\Container\Tca\ContainerConfiguration(
        'b13-1col-section1-aboout-us', // CType
        '1 Column Container for Section1 in About us', // label
        'Some Description of the Container', // description
        [
            [
                [
                    'name' => 'header',
                    'colPos' => 213,
                    'colspan' => 2,
                    'allowed' => ['CType' => 'header, textmedia'],
                ],
            ],
            [
                ['name' => 'normal', 'colPos' => 214],
               
            ],
        ] // grid configuration
    ))
        // set an optional icon configuration
        ->setIcon(
            'EXT:container_example/Resources/Public/Icons/b13-2cols-with-header-container.svg'
        )
);


\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
    \B13\Container\Tca\Registry::class
)->configureContainer(
    (new \B13\Container\Tca\ContainerConfiguration(
        'b13-1col-section1Image-aboout-us', // CType
        '1 Column Image', // label
        'Some Description of the Container', // description
        [
            [
                [
                    'name' => 'header',
                    'colPos' => 220,
                    'colspan' => 2,
                    'allowed' => ['CType' => 'header, textmedia'],
                ],
            ],
            [
                ['name' => 'normal', 'colPos' => 221],
               
            ],
        ] // grid configuration
    ))
        // set an optional icon configuration
        ->setIcon(
            'EXT:container_example/Resources/Public/Icons/b13-2cols-with-header-container.svg'
        )
);


