<?php

namespace App\Entity\forms_entities;

class IntTask
{
    protected int $id;

    public function getId(): int
    {
        return $this->id;
    }
    public function setId(string $id): void
    {
        $this->id = $id;
    }
}