<?php

namespace App\Repository;

use App\Entity\Taski;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Taski>
 *
 * @method Taski|null find($id, $lockMode = null, $lockVersion = null)
 * @method Taski|null findOneBy(array $criteria, array $orderBy = null)
 * @method Taski[]    findAll()
 * @method Taski[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TaskiRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Taski::class);
    }

//    /**
//     * @return Taski[] Returns an array of Taski objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('t.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Taski
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
