<?php
/**
 * Created by PhpStorm.
 * User: lestat
 * Date: 28.12.2018
 * Time: 15:29
 */

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 *
 * @ApiResource()
 * @ORM\Entity
 */
class Project
{
    /**
     * @var int The id of the project.
     *
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string The title of the project.
     *
     * @ORM\Column
     */
    public $name;

    /**
     * @var string The description of this book.
     *
     * @ORM\Column(type="integer")
     */
    public $completionLevel;

    /**
     * @var \DateTimeInterface The start date of the project.
     *
     * @ORM\Column(type="datetime", nullable=true)
     */
    public $startDate;

    /**
     * @var \DateTimeInterface The end date of the project.
     *
     * @ORM\Column(type="datetime", nullable=true)
     */
    public $endDate;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCompletionLevel(): ?int
    {
        return $this->completionLevel;
    }

    public function setCompletionLevel(int $completionLevel): self
    {
        $this->completionLevel = $completionLevel;

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(?\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(?\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

}