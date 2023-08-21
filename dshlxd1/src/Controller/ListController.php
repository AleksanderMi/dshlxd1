<?php

namespace App\Controller;

use App\Repository\TaskiRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
        $tn = array();
        $ts = array();
        $ti = array();
        $all_tasks=$taskRepository
            ->findAll();
        for ($i = 1; $i <= count($all_tasks); $i++)
        {
            $tn[] = $all_tasks[$i-1]->getTaskName();
            $ts[] = $all_tasks[$i-1]->getTaskStatus();
            $ti[] = $all_tasks[$i-1]->getId();
        }
        $ta = array("id" => $ti, "taskname" =>$tn, "status" => $ts);
        return new JsonResponse(['data_dx'=>$ta]);
    }
}