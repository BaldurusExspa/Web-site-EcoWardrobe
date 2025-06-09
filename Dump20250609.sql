-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: ecowardrobe
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite_products`
--

DROP TABLE IF EXISTS `favorite_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite_products` (
  `users_id` int NOT NULL,
  `products_id` int NOT NULL,
  KEY `fk_favorite_products_users1_idx` (`users_id`),
  KEY `fk_favorite_products_products1_idx` (`products_id`),
  CONSTRAINT `fk_favorite_products_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_favorite_products_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite_products`
--

LOCK TABLES `favorite_products` WRITE;
/*!40000 ALTER TABLE `favorite_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorite_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `date` datetime NOT NULL,
  `delivery_address` varchar(255) NOT NULL,
  `status` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_orders_users1_idx` (`users_id`),
  CONSTRAINT `fk_orders_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_has_products`
--

DROP TABLE IF EXISTS `orders_has_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders_has_products` (
  `orders_id` int NOT NULL,
  `products_id` int NOT NULL,
  PRIMARY KEY (`orders_id`,`products_id`),
  KEY `fk_orders_has_products_products1_idx` (`products_id`),
  KEY `fk_orders_has_products_orders1_idx` (`orders_id`),
  CONSTRAINT `fk_orders_has_products_orders1` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `fk_orders_has_products_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_has_products`
--

LOCK TABLES `orders_has_products` WRITE;
/*!40000 ALTER TABLE `orders_has_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders_has_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `price_change`
--

DROP TABLE IF EXISTS `price_change`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `price_change` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date_interaction` datetime NOT NULL,
  `current_price` int NOT NULL,
  `products_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_price_change_products1_idx` (`products_id`),
  CONSTRAINT `fk_price_change_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `price_change`
--

LOCK TABLES `price_change` WRITE;
/*!40000 ALTER TABLE `price_change` DISABLE KEYS */;
INSERT INTO `price_change` VALUES (1,'2024-05-01 00:00:00',2500,2),(2,'2024-05-05 00:00:00',3200,3),(3,'2024-05-10 00:00:00',1800,4),(4,'2024-05-15 00:00:00',4500,5),(5,'2024-05-20 00:00:00',2900,6),(6,'2024-05-25 00:00:00',3100,7),(7,'2024-06-01 00:00:00',2700,8),(8,'2024-06-05 00:00:00',3800,9),(9,'2024-06-10 00:00:00',2400,10),(10,'2024-06-15 00:00:00',3500,11),(11,'2024-06-20 00:00:00',2600,12),(12,'2024-06-25 00:00:00',3300,13),(13,'2024-07-01 00:00:00',2800,14),(14,'2024-07-05 00:00:00',4000,15),(15,'2024-07-10 00:00:00',3000,16),(16,'2024-07-15 00:00:00',3400,17),(17,'2024-07-20 00:00:00',2900,18),(18,'2024-07-25 00:00:00',3600,19),(19,'2024-08-01 00:00:00',2700,20),(20,'2024-08-05 00:00:00',3900,21),(21,'2024-08-10 00:00:00',2800,22),(22,'2024-08-15 00:00:00',3200,23),(23,'2024-08-20 00:00:00',3100,24),(24,'2024-08-25 00:00:00',2900,25),(25,'2024-09-01 00:00:00',3500,26),(26,'2024-05-15 00:00:00',2300,2),(27,'2024-05-22 00:00:00',3000,3),(28,'2024-05-28 00:00:00',1900,4),(29,'2024-06-08 00:00:00',4300,5),(30,'2024-06-12 00:00:00',2700,6),(31,'2024-06-18 00:00:00',3300,7),(32,'2024-06-22 00:00:00',2500,8),(33,'2024-07-03 00:00:00',3600,9),(34,'2024-07-09 00:00:00',2200,10),(35,'2024-07-15 00:00:00',3400,11),(36,'2024-07-21 00:00:00',2400,12),(37,'2024-08-02 00:00:00',3100,13),(38,'2024-08-08 00:00:00',2600,14),(39,'2024-08-14 00:00:00',3800,15),(40,'2024-08-20 00:00:00',2800,16),(41,'2024-09-01 00:00:00',3200,17),(42,'2024-09-07 00:00:00',2600,18),(43,'2024-09-13 00:00:00',3500,19),(44,'2024-09-19 00:00:00',2500,20),(45,'2024-10-02 00:00:00',3700,21),(46,'2024-10-08 00:00:00',2700,22),(47,'2024-10-14 00:00:00',3000,23),(48,'2024-10-20 00:00:00',2900,24),(49,'2024-11-01 00:00:00',2600,25),(50,'2024-11-07 00:00:00',3300,26),(51,'2024-05-01 12:24:12',7954,1);
/*!40000 ALTER TABLE `price_change` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text,
  `dimensions` set('XS','S','M','L','XL','XXL','3XL') DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `compound` varchar(255) NOT NULL,
  `image` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Джинсы голубые женские','Экологичные голубые джинсы для женщин из органического хлопка','XS,S,M,L,XL',1,'Органический хлопок','Light-blue-jeans-front-2.JPG'),(2,'Джинсы синие мужские','Синие мужские джинсы из переработанного денима','M,L,XL,XXL',1,'Переработанный деним','Blue-jeans-1.JPG'),(3,'Джогеры темно-синие мужские','Удобные спортивные джогеры из органического хлопка','S,M,L',1,'Органический хлопок','Deep-blue-joggers-front.JPG'),(4,'Штаны классические мужские','Классические брюки для офиса из экологичного льна','M,L,XL',1,'Лен','Classic-pants-3.JPG'),(5,'Штаны черные спортивные мужские','Спортивные штаны из переработанного полиэстера','S,M,L,XL',1,'Переработанный полиэстер','Black-trousers-front.JPG'),(6,'Штаны велюровые изумрудные женские','Уютные велюровые штаны из органического хлопка','XS,S,M',1,'Органический хлопок','Velour-trousers-1.JPG'),(7,'Штаны клетчатые черные женские','Клетчатые брюки в стиле casual','S,M,L',1,'Органический хлопок','Black-plaid-trousers-2.JPG'),(8,'Штаны монаха черные мужские','Традиционные черные штаны в стиле буддийских монахов','M,L,XL',1,'Органический хлопок','Black-monk-trousers-fullbody.JPG'),(9,'Шорты из денима женские','Летние шорты из органического денима','XS,S,M,L',1,'Органический деним','Denim-shorts-back.JPG'),(10,'Шорты черные мужские','Удобные летние шорты','M,L,XL',0,'Органический хлопок','Black-shorts-front.JPG'),(11,'Водолазка черная с вырезом женская','Водолазка с оригинальным вырезом','XS,S,M',1,'Органический хлопок','Women-turtleneck-3.JPG'),(12,'Джемпер с рубашкой мужской','Стильный комплект джемпер+рубашка','M,L,XL',1,'Органический хлопок','Jumper-mix-shirt-2.JPG'),(13,'Джемпер синий унисекс','Универсальный джемпер для повседневной носки','S,M,L',1,'Органический хлопок','Blue-jumper-2.JPG'),(14,'Джемпер коричневый унисекс','Теплый джемпер для прохладных дней','S,M,L,XL',0,'Органический хлопок','Brown-jumper-1.JPG'),(15,'Сорочка белая мужская','Классическая сорочка из органического хлопка','M,L,XL',1,'Органический хлопок','Classic-pants-fullbody--White-shirt-fullbody.JPG'),(16,'Рубашка бордовая женская','Стильная рубашка в деловом стиле','XS,S,M,L',1,'Органический хлопок','Burgundy-shirt-back.JPG'),(17,'Рубашка зеленая женская','Яркая рубашка для casual-образа','XS,S,M',1,'Органический хлопок','Green-shirt-1.JPG'),(18,'Рубашка красная мужская','Классическая красная рубашка','M,L,XL',1,'Органический хлопок','Red-shirt-fullbody.JPG'),(19,'Рубашка красная в клетку унисекс','Универсальная рубашка в клетку','S,M,L,XL',1,'Органический хлопок','Red-plaid-shirt-2.JPG'),(20,'Рубашка красная с рисунком мужская','Мужская рубашка с оригинальным принтом','M,L,XL',0,'Органический хлопок','Dark-red-patterned-shirt-fullbody-2.JPG'),(21,'Рубашка серая с рисунком мужская','Мужская рубашка с уникальным дизайном','M,L,XL',1,'Органический хлопок','Dark-gray-patterned-shirt-fullbody.JPG'),(22,'Свитшот белый мужской','Комфортный свитшот для повседневной носки','M,L,XL',1,'Органический хлопок','White-sweater-fullbody-1.JPG'),(23,'Свитшот синий мужской','Стильный свитшот для casual-образа','M,L,XL',1,'Органический хлопок','Sea-blue-sweater-fullbody.JPG'),(24,'Худи желтое тай-дай унисекс','Модное худи в технике тай-дай','S,M,L',1,'Органический хлопок','Tie-dye-hoodie-yellow-front-2.JPG'),(25,'Худи зеленое унисекс','Универсальное худи для повседневной носки','S,M,L,XL',1,'Органический хлопок','Green-hoodie-front-2.JPG'),(26,'Худи фиолетовое женское','Стильное женское худи','XS,S,M,L',0,'Органический хлопок','Purple-hoodie-2.JPG'),(27,'Футболка черная мужская','Легкая спортивная футболка','S',1,'Конопля','Sport-Tshirt-black-man.JPG'),(28,'Футботка черно-желтая мужская','Тай-дай - цвет жизни','S,M,L',1,'Конопл','Tie-dye-Tshirt-yallow-black-back.JPG'),(29,'Футболка черная женская','Совершенно обычная, но качественная футболка','XS,S,M,L,XL,3XL',1,'Органичейский хлопок','Black-Tshirt-1.JPG'),(30,'Футболка фиолетовая женская','Стильная женская футболка','L,XL,XXL,3XL',1,'Органический шелк','Purple-Tshirt-front-1.JPG');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_has_categories`
--

DROP TABLE IF EXISTS `products_has_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_has_categories` (
  `products_id` int NOT NULL,
  `categories_id` int NOT NULL,
  PRIMARY KEY (`products_id`,`categories_id`),
  KEY `fk_products_has_categories_categories1_idx` (`categories_id`),
  KEY `fk_products_has_categories_products1_idx` (`products_id`),
  CONSTRAINT `fk_products_has_categories_categories1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `fk_products_has_categories_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_has_categories`
--

LOCK TABLES `products_has_categories` WRITE;
/*!40000 ALTER TABLE `products_has_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_has_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoping_bag`
--

DROP TABLE IF EXISTS `shoping_bag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoping_bag` (
  `products_id` int NOT NULL,
  `users_id` int NOT NULL,
  KEY `fk_shoping_bag_products1_idx` (`products_id`),
  KEY `fk_shoping_bag_users1_idx` (`users_id`),
  CONSTRAINT `fk_shoping_bag_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_shoping_bag_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoping_bag`
--

LOCK TABLES `shoping_bag` WRITE;
/*!40000 ALTER TABLE `shoping_bag` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoping_bag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storage`
--

DROP TABLE IF EXISTS `storage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storage` (
  `products_id` int NOT NULL,
  `product_count` int NOT NULL,
  KEY `fk_storage_products1_idx` (`products_id`),
  CONSTRAINT `fk_storage_products1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storage`
--

LOCK TABLES `storage` WRITE;
/*!40000 ALTER TABLE `storage` DISABLE KEYS */;
/*!40000 ALTER TABLE `storage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `mobilePhone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (31,'Egor','4567890','egor@gmail.com','$2b$12$02k.ZIXl9EqA3fKUk2EGYe4aeyz3X/Pg.voxnZlgNCtTCVSDCnezG'),(32,'Kirill','34567890','kirill@gmail.com','$2b$12$wkLRDsMXwv7/Zxu6Et5oIOORDu.gQmQwySKy.4MMM3mbu1pzRK.6i');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-09  3:50:12
