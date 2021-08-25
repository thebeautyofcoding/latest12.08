
<?php
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:heiner/Configuration/TsConfig/setup.tsconfig">'
);


$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['my_preset']='EXT:heiner/Configuration/RTE/Default.yaml';


$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['frontend_editing']['FrontendEditingPanel']['dropzoneModifiers'][] = \Heiner\Heiner\Classes\Hooks\DropzoneModifier::class;

?>