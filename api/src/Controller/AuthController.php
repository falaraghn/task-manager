<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class AuthController extends AbstractController
{
    public function register(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $em = $this->getDoctrine()->getManager();

        $requestContent = json_decode($request->getContent(), true);
        $username = $requestContent['username'];
        $password = $requestContent['password'];
        $role = isset($requestContent['roles']) ? $requestContent['roles'] :  'ROLE_USER' ;
        $isActive = isset($requestContent['isActive']) ? $requestContent['isActive'] :  false ;

        $user = new User($username);
        $user->setPassword($encoder->encodePassword($user, $password));
        $user->setRoles($role);
        $user->setIsActive($isActive);
        $em->persist($user);
        $em->flush();

        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());

        $serializer = new Serializer($normalizers, $encoders);

        return new JsonResponse($serializer->serialize($user, 'json'));
    }

    public function getLogged()
    {
        return new Response(sprintf('Logged in as %s', $this->getUser()->getUsername()));
    }
}