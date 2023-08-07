<?php

namespace App\Controller;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Taski;

class TaskStatusController extends AbstractController
{
    //#[Route('/list/status_edit/{id}')]
    public function edit_status($id, ManagerRegistry $doctrine)
    {
        $entityManager = $doctrine->getManager();
        $task = $entityManager->getRepository(Taski::class)->find($id);

        if (!$task) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }
            if($task->getTaskStatus())
            {
                $task->setTaskStatus(false);
            }
            else
            {
                $task->setTaskStatus(true);
            }
        $entityManager->flush();
        //$alltasks = $entityManager->getRepository(Task::class)->findAll();
        //return $this->json(['state'=>$task->getTaskStatus()]);
        //return $this->json();
        return $this->redirectToRoute('list');
    }
}