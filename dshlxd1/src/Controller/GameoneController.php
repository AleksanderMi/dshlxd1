<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;


class GameoneController extends AbstractController
{
    #[Route('/game')]
    public function mainscreen() : Response
    {
        return $this->render('game/game.html.twig', ['title'=>'game']);
    }
    #[Route('/game/1')]
    public function load_1() : Response
    {
        return $this->render('game/game1.html.twig', ['title'=>'game 1']);
    }

}