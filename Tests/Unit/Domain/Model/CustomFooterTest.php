<?php
namespace Heiner\Heiner\Tests\Unit\Domain\Model;

/**
 * Test case.
 */
class CustomFooterTest extends \TYPO3\TestingFramework\Core\Unit\UnitTestCase
{
    /**
     * @var \Heiner\Heiner\Domain\Model\CustomFooter
     */
    protected $subject = null;

    protected function setUp()
    {
        parent::setUp();
        $this->subject = new \Heiner\Heiner\Domain\Model\CustomFooter();
    }

    protected function tearDown()
    {
        parent::tearDown();
    }

    /**
     * @test
     */
    public function getServiceReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getService()
        );
    }

    /**
     * @test
     */
    public function setServiceForStringSetsService()
    {
        $this->subject->setService('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'service',
            $this->subject
        );
    }

    /**
     * @test
     */
    public function getServiceLinkReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getServiceLink()
        );
    }

    /**
     * @test
     */
    public function setServiceLinkForStringSetsServiceLink()
    {
        $this->subject->setServiceLink('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'serviceLink',
            $this->subject
        );
    }
}
