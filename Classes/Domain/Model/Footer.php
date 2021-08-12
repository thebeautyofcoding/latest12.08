<?php
namespace Heiner\Heiner\Domain\Model;


/***
 *
 * This file is part of the "heiner2" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2021 
 *
 ***/
/**
 * CustomFooter
 */
class Footer extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity
{

    /**
     * service
     * 
     * @var string
     */
    protected $service = '';

    /**
     * serviceLink
     * 
     * @var string
     */
    protected $serviceLink = '';

    /**
     * Returns the service
     * 
     * @return string $service
     */
    public function getService()
    {
        return $this->service;
    }

    /**
     * Sets the service
     * 
     * @param string $service
     * @return void
     */
    public function setService($service)
    {
        $this->service = $service;
    }

    /**
     * Returns the serviceLink
     * 
     * @return string $serviceLink
     */
    public function getServiceLink()
    {
        return $this->serviceLink;
    }

    /**
     * Sets the serviceLink
     * 
     * @param string $serviceLink
     * @return void
     */
    public function setServiceLink($serviceLink)
    {
        $this->serviceLink = $serviceLink;
    }
}
