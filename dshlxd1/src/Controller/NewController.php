<?php

namespace App\Controller;

use App\Entity\Taski;
use App\Repository\TaskiRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\Type\CheckType;
use Symfony\Component\Routing\Annotation\Route;


class NewController extends AbstractController
{
    #[route('/')]
    public function homepage(Request $request)
    {
        return $this->render('homepage/homepage.html.twig', ['title'=>'homepage', 'data' => 1]);
    }

    #[route('/list', name:"list")]
    public function something(TaskiRepository $taskRepository): Response
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
        return $this->render('homepage/homepage1.html.twig', ['title'=>'homepage', 'taski'=>$tn, 'statusy'=>$ts, 'ids'=>$ti,]);
    }

    #[Route('/list/status_edit/{id}')]
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

        return new JsonResponse(['state'=>$task->getTaskStatus()]);
    }

}