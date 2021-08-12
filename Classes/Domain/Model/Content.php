<?php
namespace Heiner\Heiner\Domain\Model;


/***
 *
 * This file is part of the "dynTemplate" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2021 
 *
 ***/
/**
 * Content
 */
class Content extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity
{

    /**
     * image
     * 
     * @var \TYPO3\CMS\Extbase\Domain\Model\FileReference
     * @TYPO3\CMS\Extbase\Annotation\ORM\Cascade("remove")
     */
    protected $image = null;

    /**
     * header
     * 
     * @var string
     */
    protected $header = '';

    /**
     * bodytext
     * 
     * @var string
     */
    protected $bodytext = '';

    /**
     * Returns the header
     * 
     * @return string header
     */
    public function getHeader()
    {
        return $this->header;
    }

    /**
     * Sets the header
     * 
     * @param string $header
     * @return void
     */
    public function setHeader($header)
    {
        $this->header = $header;
    }

    /**
     * Returns the bodytext
     * 
     * @return string bodytext
     */
    public function getBodytext()
    {
        return $this->bodytext;
    }

    /**
     * Sets the bodytext
     * 
     * @param string $bodytext
     * @return void
     */
    public function setBodytext($bodytext)
    {
        $this->bodytext = $bodytext;
    }
}
