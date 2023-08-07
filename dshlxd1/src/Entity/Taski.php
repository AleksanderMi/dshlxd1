<?php

namespace App\Entity;

use App\Repository\TaskiRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TaskiRepository::class)]
class Taski
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $Task_name = null;

    #[ORM\Column]
    private ?bool $status = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTaskName(): ?string
    {
        return $this->Task_name;
    }

    public function setTaskName(string $Task_name): static
    {
        $this->Task_name = $Task_name;

        return $this;
    }

    public function getTaskStatus(): ?bool
    {
        return $this->status;
    }

    public function setTaskStatus(bool $status): static
    {
        $this->status = $status;

        return $this;
    }
}
