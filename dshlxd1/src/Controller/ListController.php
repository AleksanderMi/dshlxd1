<?php

namespace App\Controller;

use App\Repository\TaskiRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\forms_entities\Task;
use App\Entity\Taski;
use App\Form\Type\TaskType;
use App\Form\Type\FormIntType;
use Doctrine\Persistence\ManagerRegistry;


class ListController extends AbstractController
{
    #[Route('/list/dx')]
    public function list_dx(TaskiRepository $taskRepository)
    {
        return $this->render('/list/list_dx.html.twig',['title'=>"list_dx"]);
    }

    #[Route('/list/dx/data')]
    public function list_dx_data(TaskiRepository $taskRepository)
    {
        $ta = array();
        $all_tasks=$taskRepository
            ->findAll();
        for ($i = 1; $i <= count($all_tasks); $i++)
        {
            $ta[] = $all_tasks[$i-1]->getTaskAll();
        }
        return new JsonResponse(['data_dx'=>$ta]);
    }

    #[Route('/list/dx/data/change')]
    public function change_data(Request $request, ManagerRegistry $doctrine)
    {
        $array = json_decode($request->getContent());
        $entityManager = $doctrine->getManager();
        $task = $entityManager->getRepository(Taski::class)->find($array[0]);
        if (!$task) {
            throw $this->createNotFoundException(
                'No product found for id '.$array[0]
            );
        }
        else
        {
            if($array[1] != null)
                $task->setTaskName($array[1]);
            if($array[2] != null)
                $task->setTaskStatus($array[2]);
        }
        $entityManager->flush();
        return new JsonResponse(['content_retrieved'=>$array]);
    }
}