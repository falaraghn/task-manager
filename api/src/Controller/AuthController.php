<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AuthController extends AbstractController
{
    public function register(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $em = $this->getDoctrine()->getManager();

        $requestContent = json_decode($request->getContent(), true);
        $username = $requestContent['username'];
        $password = $requestContent['password'];
        $role = $requestContent['role'];

        $user = new User($username);
        $user->setPassword($encoder->encodePassword($user, $password));
        $user->setRoles($role === null ? 'ROLE_USER' : $role);
        $em->persist($user);
        $em->flush();

        return new Response(sprintf('User %s successfully created', $user->getUsername()));
    }

    public function getLogged()
    {
        return new Response(sprintf('Logged in as %s', $this->getUser()->getUsername()));
    }
}