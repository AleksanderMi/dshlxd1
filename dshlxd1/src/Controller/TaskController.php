<?php

namespace App\Controller;

use App\Entity\forms_entities\Task;
use App\Entity\Taski;
use App\Form\Type\TaskType;
use App\Form\Type\FormIntType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\forms_entities\IntTask;

class TaskController extends AbstractController
{
    #[Route('/form', name: "app_forms")]
    public function new(Request $request, ManagerRegistry $doctrine)
    {
        $task = new Task;
        $form = $this->createForm(TaskType::class, $task);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $entityManager = $doctrine->getManager();

            $taskq = new Taski();
            $taskq->setTaskName($task->getTask());
            $taskq->setTaskStatus($task->getStatus());

            $entityManager->persist($taskq);

            $entityManager->flush();

            return $this->render('Forms/form_submitted.html.twig', ['title'=>'form submitted', 'task' => $task->getTask(), 'status' => $task->getStatus(), 'id'=>$taskq->getId()]);
        }
        return $this->render('Forms/form.html.twig', ['title'=>'forms', 'form' => $form->createView(), 'whatToDo'=>'add']);
    }

    #[Route('/list/manager')]
    public function delete(Request $request, ManagerRegistry $doctrine)
    {
        $idTask = new IntTask;
        $form = $this->createForm(FormIntType::class, $idTask);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $entityManager = $doctrine->getManager();
            $id = $idTask->getId();
            $task = $entityManager->getRepository(Taski::class)->find($id);
            $entityManager->remove($task);
            $entityManager->flush();
            return $this->render('Forms/task_deleted.html.twig', ['title'=>'task deleted','id'=>$id]);
        }
        return $this->render('Forms/form.html.twig', ['title'=>'deleting task', 'form' => $form->createView(), 'whatToDo'=>'delete']);
    }
}