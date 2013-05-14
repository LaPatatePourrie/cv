<?php

namespace Alexis\CVBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('AlexisCVBundle:Default:index.html.twig', array('name' => $name));
    }
}
