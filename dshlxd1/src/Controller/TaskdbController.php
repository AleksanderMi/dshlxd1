<?php

namespace App\Controller;
use App\Entity\Taski;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TaskdbController extends AbstractController
{
    #[Route('/task')]
    public function createTask(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();

        $task = new Taski();
        $task->setTaskName('pampampam');
        $task->setTaskStatus(false);

        $entityManager->persist($task);

        $entityManager->flush();

        return new Response('Saved new Task with id '.$task->getId());
    }

}