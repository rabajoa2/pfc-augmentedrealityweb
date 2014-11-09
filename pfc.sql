CREATE DATABASE IF NOT EXISTS pfc;
USE pfc;

CREATE USER 'pfc'@'localhost' IDENTIFIED BY 'pfc';

GRANT ALL PRIVILEGES ON pfc.* TO 'pfc'@'localhost' WITH GRANT OPTION ;

-- MySQL dump 10.13  Distrib 5.5.15, for osx10.6 (i386)
--
-- Host: localhost    Database: pfc
-- ------------------------------------------------------
-- Server version	5.5.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
--

DROP TABLE IF EXISTS `poi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `poi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` int(11) DEFAULT NULL,
  `titulo` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion` text COLLATE utf8_spanish_ci,
  `latitud` varchar(100) DEFAULT NULL,
  `longitud` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Dumping data for table `poi`
--

LOCK TABLES `poi` WRITE;
/*!40000 ALTER TABLE `poi` DISABLE KEYS */;
/*  	          	var pin = [
  	          	       {"name":"New York", "lat":"40.714353", "lng":"-74.005973"},
  	          	       {"name":"San Francisco", "lat":"37.77493", "lng":"-122.419416"},
  	          	       {"name":"Seattle", "lat":"47.60621", "lng":"-122.332071"},
  	          	       {"name":"Los Angeles", "lat":"34.052234", "lng":"-118.243685"},
  	          	       {"name":"Denver", "lat":"39.737567", "lng":"-104.984718"},
  	          	       {"name":"Chicago", "lat":"41.878114", "lng":"-87.629798"},
  	          	       {"name":"Austin", "lat":"30.267153", "lng":"-97.743061"},
  	          	       {"name":"Miami", "lat":"25.788969", "lng":"-80.226439"},
  	          	       {"name":"Pittsburg", "lat":"40.440625", "lng":"-79.995886"},
  	          	       {"name":"Phoenix", "lat":"33.448377", "lng":"-112.074037"},
  	          	       {"name":"Atlanta", "lat":"33.748995", "lng":"-84.387982"},
  	          	       {"name":"Kansas City", "lat":"39.099727", "lng":"-94.578567"}
  	          	   	];
*/
INSERT INTO `poi` (tipo,titulo,descripcion,latitud,longitud) VALUES 
/*(1,'New York','New York',40.714353,-74.005973),
(1,'San Francisco','San Francisco',37.77493,-122.419416),
(1,'Seattle','Seattle',47.60621,-122.332071),
(2,'Los Angeles','Los Angeles',34.052234,-118.243685),*/
(1,'Universidad Politécnica de Madrid','Calle Ramiro de Maeztu, 7, 28040 Madrid',40.448904,-3.718965),
(1,'UPM Campus Sur','Carretera de Valencia, km. 7, 28031 Madrid',40.388461,-3.629555),
(1,'Universidad Autónoma de Madrid','Ciudad Universitaria de Cantoblanco, 28049 Madrid',40.545277,-3.693735),
(2,'Estatua Felipe II','Plaza Mayor',40.415631,-3.707378),
(2,'Plaza de Toros de las Ventas','Las Ventas',40.431955,-3.663414),
(2,'Palau de Cerveró','Plaça de Cisneros, 4, 46003 València, Valencia',39.478046,-0.375588),
(3,'Casa Sixto','Calle Ortega y Gasset, 83, Madrid',40.430125, -3.671622),
(3,'Casa Lucio','Calle Cava Baja, 35, 28005 Madrid',40.412234, -3.709648),
(3,'Asador Donostiarra','Calle de la Infanta Mercedes, 79, 28020 Madrid',40.461975, -3.695663),
(4,'Gimnasio Vambora','Calle Augusto Figueroa, 9, 28004 Madrid',40.423175, -3.699931),
(4,'Gimnasio AltaFit','Calle Jorge Manrique, 27, 28006 Madrid',40.442640, -3.687096),
(4,'Gimnasio Torre Cristal','Paseo de la Castellana, 259C, 28046 Madrid',40.478487, -3.687500),
(5,'Bar Brillante','Calle Eloy Gonzalo, 12, 28010 Madrid',40.434003, -3.702501),
(5,'Sidreria El Tigre','Calle Infantas, 13, 28004 Madrid',40.420586, -3.698823),
(5,'Bar Docamar','Calle de Alcalá, 337, 28027, Madrid',40.433776, -3.648007);


/*!40000 ALTER TABLE `poi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

