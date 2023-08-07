<?php

namespace App\Controller;

use App\Entity\Taski;
use App\Repository\TaskiRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\Type\CheckType;

class NewController extends AbstractController
{
//    /**
//     * @Route("/")
//     */
    #[route('/')]
    public function homepage(Request $request)
    {
        return $this->render('homepage/homepage.html.twig', ['title'=>'homepage', 'data' => 1]);
    }

    #[route('/list', name:"list")]
    public function something(TaskiRepository $taskRepository): Response
    {
        $count = 1;
        $tn = array();
        $ts = array();
        $task=$taskRepository
            ->findAll();
        for ($i = 1; $i <= count($task); $i++)
        {
            $tn[] = $task[$i-1]->getTaskName();
            $ts[] = $task[$i-1]->getTaskStatus();
        }
        return $this->render('homepage/homepage1.html.twig', ['title'=>'homepage', 'taski'=>$tn, 'statusy'=>$ts]);
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
        //$alltasks = $entityManager->getRepository(Task::class)->findAll();
        //return $this->json(['state'=>$task->getTaskStatus()]);
        //return $this->json();
        return $this->redirect('/list');
    }

}