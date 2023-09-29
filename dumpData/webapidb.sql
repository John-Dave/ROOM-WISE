CREATE DATABASE  IF NOT EXISTS `webapidb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `webapidb`;
-- MySQL dump 10.13  Distrib 5.5.43, for debian-linux-gnu (x86_64)
--
-- Host: 18.218.74.150    Database: webapidb
-- ------------------------------------------------------
-- Server version	5.7.24

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
-- Table structure for table `account_records`
--

DROP TABLE IF EXISTS `account_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account_records` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `partnerId` varchar(45) NOT NULL,
  `partnerName` varchar(45) NOT NULL,
  `dateOFInsert` date NOT NULL,
  `dateOfSpend` date NOT NULL,
  `itemName` varchar(45) NOT NULL,
  `paidby` varchar(45) NOT NULL,
  `sharedIn` varchar(500) NOT NULL,
  `totalAmountSpend` varchar(45) NOT NULL,
  `shareAmount` varchar(45) NOT NULL,
  `pairToken` varchar(45) NOT NULL,
  `issettled` varchar(45) NOT NULL,
  `groupname` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=287 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_records`
--

LOCK TABLES `account_records` WRITE;
/*!40000 ALTER TABLE `account_records` DISABLE KEYS */;
INSERT INTO `account_records` VALUES (1,'3_UYIW','Swaleh Mujeeb','2018-07-05','2018-07-01','cfl','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','200','66.67','d7631869-fc99-4211-96f9-fc97c308895e','1','Aligarh'),(2,'3_UYIW','Khawar Khan','2018-07-05','2018-07-05','jug','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','100','33.33','d0a9bd35-6f0e-4f37-928c-176250ccdafa','1','Aligarh'),(3,'3_UYIW','Khawar Khan','2018-07-05','2018-07-05','harpic','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','40','13.33','e3fbb0f7-7628-46d9-b908-4a6c1e6752d5','1','Aligarh'),(4,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','house hold ','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','220','73.33','fa9a4083-447c-4d4a-aadb-b8e1eb3b3d0a','1','Aligarh'),(5,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','slipper toilet','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','100','33.33','de8307af-c097-4a12-bec0-6cca2928b559','1','Aligarh'),(6,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','Led bulb','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','175','58.33','c69a3d1b-672d-4265-b502-63c16902061d','1','Aligarh'),(7,'3_UYIW','Swaleh Mujeeb','2018-07-05','2018-07-05','brush','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','20','6.67','b77fb778-14d7-4872-b0a0-edc81eda29a5','1','Aligarh'),(8,'3_UYIW','Swaleh Mujeeb','2018-07-05','2018-07-05','cfl lock','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','160','53.33','ab8eff5e-6042-4423-9554-3ab8664bcaa9','1','Aligarh'),(9,'3_UYIW','Swaleh Mujeeb','2018-07-05','2018-07-05','water bottle','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','30','10.00','93b71ce8-0497-4544-be49-eb071e1cae6c','1','Aligarh'),(10,'3_UYIW','Swaleh Mujeeb','2018-07-05','2018-07-05','dish wash soap','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','20','6.67','f49b55c5-21ad-49b5-a279-32d51807c258','1','Aligarh'),(11,'3_UYIW','Swaleh Mujeeb','2018-07-05','2018-07-05','dinner','3_UYIW','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb','95','47.50','9553027b-1730-4a85-9c2e-70632ac46ed3','1','Aligarh'),(12,'3_UYIW','Swaleh Mujeeb','2018-07-05','2018-07-05','aftar','3_UYIW','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb','80','40.00','dea035ad-613b-4afb-b943-eaf0d7ac3bfb','1','Aligarh'),(13,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','house hold','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','200','66.67','1b831424-435f-4dac-8128-fdf2ec524024','1','Aligarh'),(14,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','harpic','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','35','11.67','f60ac494-d8ca-41d8-ac65-d932f89b5119','1','Aligarh'),(15,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','pani bottle','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','30','10.00','3d379605-c3b7-449c-a63e-82f9bde9c118','1','Aligarh'),(16,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','khana','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','100','33.33','8353b9b8-adeb-41c8-a485-62a32c83789d','1','Aligarh'),(17,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','utensils','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','600','200.00','f829c3c4-5b98-4ec0-884e-908e7403b721','1','Aligarh'),(18,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','utensils','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','670','223.33','79724ff2-4251-476e-b19e-28f0294a3938','1','Aligarh'),(19,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','led','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','140','46.67','d3f670cb-facf-433a-a9bb-7789fba69d1d','1','Aligarh'),(20,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','Ration','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','292','97.33','5d6fb521-90f1-47d4-9acc-772ac22b4455','1','Aligarh'),(21,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','gas','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','270','90.00','25b1e8d9-2b7f-42f7-8b01-b6588cac2871','1','Aligarh'),(22,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','Roti','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','45','15.00','73ddb55d-49b3-4466-9b90-e390b5b628b8','1','Aligarh'),(23,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','jam','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','150','50.00','2e0a29b0-72fa-4631-ae73-44a79575aaf6','1','Aligarh'),(24,'3_UYIW','Khawar Khan','2018-07-05','2018-07-05','sabzi','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','55','18.33','18801488-f599-494a-876d-ef39a1d7ea8c','1','Aligarh'),(25,'3_UYIW','Khawar Khan','2018-07-05','2018-07-05','ice','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','10','3.33','7522c647-7c7d-4535-8ea4-500fe683f660','1','Aligarh'),(26,'3_UYIW','Khawar Khan','2018-07-05','2018-07-05','atta','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','44','14.67','a4a14a75-5c10-4020-bc9d-26d6b44d9856','1','Aligarh'),(27,'3_UYIW','Khawar Khan','2018-07-05','2018-07-05','milk bread','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','46','15.33','e18cdc00-9981-44f9-851c-1d2b7ada19fb','1','Aligarh'),(28,'3_UYIW','Swaleh Mujeeb','2018-07-05','2018-07-05','dahi','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','20','6.67','b3274268-f3ad-4e74-8e00-ea0425a597d7','1','Aligarh'),(29,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','bread','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','25','8.33','8ed5b160-6fa7-453b-b8ef-1f0a2242ec9c','1','Aligarh'),(30,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','milk','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan','21','10.50','3b9228ce-a461-4174-a57c-742cf698fd6c','1','Aligarh'),(31,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','atta babba','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','100','33.33','239ed27d-7470-4ea7-8764-a2e873863779','1','Aligarh'),(32,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','knife','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','20','6.67','00790c76-c583-4191-b07e-2b619d685711','1','Aligarh'),(33,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','nail cutter','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','30','10.00','66f11516-0a29-45cf-a7d0-27cf02f04e71','1','Aligarh'),(34,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','sabzi','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','60','20.00','1f77df3a-e93e-4b12-b709-275bbcbf0726','1','Aligarh'),(35,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','bread','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','25','8.33','2880a005-f23d-4c15-9428-8ded129ec42a','1','Aligarh'),(36,'3_UYIW','Khawar Khan','2018-07-05','2018-07-05','atta bread milk','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','266','88.67','98115f9c-9af7-49a5-83b3-03b47b3288b7','1','Aligarh'),(37,'3_UYIW','Khawar Khan','2018-07-05','2018-07-05','daal milk jam','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','208','69.33','5f4bd078-91c1-49e0-85a7-e6f9c9ac0300','1','Aligarh'),(38,'3_UYIW','Swaleh Mujeeb','2018-07-05','2018-07-05','zeera garm masala','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','20','6.67','7b7141af-a6cf-4625-8da7-9b24465615c5','1','Aligarh'),(39,'3_UYIW','Swaleh Mujeeb','2018-07-05','2018-07-05','water','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','15','5.00','468b36a0-20e2-476b-b86b-62873cd8f84a','1','Aligarh'),(40,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','vegetables','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','60','20.00','7863d220-8bd7-4269-acb4-d2d2aab78c42','1','Aligarh'),(41,'3_UYIW','Swaleh Mujeeb','2018-07-05','2018-07-05','oil milk eggs','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','171','57.00','62778113-bd9c-4591-9cfa-9228bbb53887','1','Aligarh'),(42,'3_UYIW','Swaleh Mujeeb','2018-07-05','2018-07-05','Ration','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','400','133.33','378136fc-77da-4cfb-b56d-e5dc78e65d33','1','Aligarh'),(43,'3_UYIW','Swaleh Mujeeb','2018-07-05','2018-07-05','Dinner','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','150','50.00','ad61a2ff-d72e-4118-98b1-cad22fbb2244','1','Aligarh'),(44,'3_UYIW','Swaleh Mujeeb','2018-07-05','2018-07-05','House hold','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','250','83.33','df0dab63-b3a0-4a92-86a0-26be75f66f12','1','Aligarh'),(45,'3_UYIW','Farhan Khan','2018-07-05','2018-07-05','bread','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','25','8.33','4a62513c-d656-4a69-854d-76fad7924a0e','1','Aligarh'),(46,'3_UYIW','Swaleh Mujeeb','2018-07-06','2018-07-06','COMMON chicken onion dahi etc','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','235','78.33','42d7b3c6-8302-485f-a639-84627222809e','1','Aligarh'),(47,'3_UYIW','Khawar Khan','2018-07-06','2018-07-07','cold drink','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','100','33.33','51863a7a-dfe7-402e-b61b-0f74969aab8d','1','Aligarh'),(48,'3_UYIW','Khawar Khan','2018-07-06','2018-07-07','Roti','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','80','26.67','fd3ea4f6-2a15-4fda-82a3-b6dd51931a4b','1','Aligarh'),(49,'3_UYIW','Khawar Khan','2018-07-08','2018-07-08','Bread','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','25','8.33','1831d189-b6e6-4ed3-be95-3bb66c730d2f','1','Aligarh'),(50,'3_UYIW','Swaleh Mujeeb','2018-07-08','2018-07-08','Common egg milk ','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','85','28.33','20452afe-775b-4d55-9438-730dee077637','1','Aligarh'),(51,'3_UYIW','Swaleh Mujeeb','2018-07-08','2018-07-08','Common breakfast','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','127','42.33','247b696c-02f4-460e-a52c-835d9f3d21c4','1','Aligarh'),(52,'3_UYIW','Swaleh Mujeeb','2018-07-08','2018-07-08','Common Lunch biryani','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','250','83.33','022308c8-0e9b-420f-8690-73a5bbc0f552','1','Aligarh'),(53,'3_UYIW','Khawar Khan','2018-07-11','2018-07-11','Roti','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','81','27.00','84319775-9446-44a6-976e-59a42bcd65f7','1','Aligarh'),(54,'3_UYIW','Farhan Khan','2018-07-11','2018-07-06','sabzi','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','50','16.67','1cc4470d-188c-44a7-bde2-90fb7e6a598f','1','Aligarh'),(55,'3_UYIW','Farhan Khan','2018-07-11','2018-07-11','Bread dahi','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','40','13.33','52b37ae3-8aec-43db-a654-6612a6c89aca','1','Aligarh'),(56,'3_UYIW','Farhan Khan','2018-07-11','2018-07-11','Atta','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','155','51.67','a53c1ef2-02dc-4643-9c8d-73bdfe4869f2','1','Aligarh'),(57,'3_UYIW','Farhan Khan','2018-07-11','2018-07-11','ice','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','20','6.67','8758b1ae-9707-4d58-962c-15473aae03e0','1','Aligarh'),(58,'3_UYIW','Farhan Khan','2018-07-11','2018-07-10','sabzi','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','40','13.33','2391e5fe-8b5d-40e3-973c-e4f71b894bea','1','Aligarh'),(59,'3_UYIW','Farhan Khan','2018-07-11','2018-07-08','Jam bread','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','180','60.00','b7673c30-16b7-4ff3-a790-c2e22e5b5ac5','1','Aligarh'),(60,'3_UYIW','Swaleh Mujeeb','2018-07-11','2018-07-11','dahi','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','15','5.00','604bfd52-ee9c-4f5c-ade7-aed4e00b4af9','1','Aligarh'),(61,'3_UYIW','Swaleh Mujeeb','2018-07-11','2018-07-11','Butter','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','12','4.00','f7e15a58-c18c-4d92-a461-6213dc79c2e7','1','Aligarh'),(62,'3_UYIW','Swaleh Mujeeb','2018-07-20','2018-07-20','Lifeboy soap','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','25','8.33','0115b0bb-a847-4e86-abc2-94d92cffbc15','1','Aligarh'),(63,'3_UYIW','Farhan Khan','2018-07-25','2018-07-25','slipper','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','80','26.67','c1f95e47-0540-4de1-887f-1d31f2176cbe','1','Aligarh'),(64,'3_UYIW','Farhan Khan','2018-07-25','2018-07-18','Bread','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','25','8.33','eabb074c-9c19-40e5-8ff2-482a7b39d92f','1','Aligarh'),(65,'3_UYIW','Farhan Khan','2018-07-25','2018-07-25','bread','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','25','8.33','dc7a35a6-6e62-4933-ae28-28fbe9293a34','1','Aligarh'),(66,'3_UYIW','Farhan Khan','2018-07-25','2018-07-18','sabzi','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','45','15.00','1f1e6ae2-2363-411e-a7b6-eb18ececbf48','1','Aligarh'),(67,'3_UYIW','Farhan Khan','2018-07-25','2018-07-25','Gass refill','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','300','100.00','18ff8805-60c2-47bf-8fd3-fda3c35b9afa','1','Aligarh'),(68,'3_UYIW','Farhan Khan','2018-07-25','2018-07-25','Eggs','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','50','16.67','96315f75-130b-4b44-98dc-5372c927f392','1','Aligarh'),(69,'3_UYIW','Farhan Khan','2018-07-25','2018-07-25','water','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','15','5.00','9e83a046-13c7-4686-9d99-d6ed5891b691','1','Aligarh'),(70,'3_UYIW','Khawar Khan','2018-07-25','2018-07-25','Nahari','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','300','100.00','0a4c254e-99aa-447e-881b-6b004c0d60cc','1','Aligarh'),(71,'3_UYIW','Khawar Khan','2018-07-25','2018-07-25','roti','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','85','28.33','d59a2ce6-05ea-40f5-9777-1a99c60271c1','1','Aligarh'),(72,'3_UYIW','Khawar Khan','2018-07-25','2018-07-25','colddrink','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','85','28.33','e3ccda52-507d-48f8-80aa-bf374ad21df2','1','Aligarh'),(73,'3_UYIW','Farhan Khan','2018-07-25','2018-07-25','eggs crat milk','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','166','55.33','a9988dfc-9ae3-4754-8f38-3e8161245f56','1','Aligarh'),(74,'3_UYIW','Khawar Khan','2018-07-25','2018-07-25','kabab paratha','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan','185','92.50','b8260d77-849f-4801-8480-672e39ebd2d3','1','Aligarh'),(75,'3_UYIW','Khawar Khan','2018-07-25','2018-07-25','milk','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','26','8.67','0383748b-aa77-4441-8bd6-d9bac0138961','1','Aligarh'),(76,'3_UYIW','Farhan Khan','2018-07-25','2018-07-25','eggs bread','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','50','16.67','94bf01f6-ecfa-4b8d-ab75-62c2beed2a8a','1','Aligarh'),(77,'3_UYIW','Farhan Khan','2018-07-25','2018-07-25','dinner','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','245','81.67','7bad9df2-6996-4e2d-9aec-e10debb3c3a2','1','Aligarh'),(78,'3_UYIW','Farhan Khan','2018-07-25','2018-07-25','fruti','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','95','31.67','6154d554-88b5-475f-83aa-08cfa4374f5a','1','Aligarh'),(79,'3_UYIW','Farhan Khan','2018-07-25','2018-07-25','biscuits','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','50','16.67','dd1b5fe0-a77c-4c63-a40c-2d48a8b6ec6c','1','Aligarh'),(80,'3_UYIW','Khawar Khan','2018-07-25','2018-07-25','butter','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','12','4.00','aa8a2bfd-3201-4f69-9ca7-ef7a22dcdfba','1','Aligarh'),(81,'3_UYIW','Swaleh Mujeeb','2018-07-25','2018-07-25','Ration','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','1000','333.33','0f639298-4b6c-4ff1-8a10-4e1cd3c573a1','1','Aligarh'),(82,'3_UYIW','Swaleh Mujeeb','2018-07-25','2018-07-24','ice','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','10','3.33','c42c3681-e23f-4625-845a-289e1b64260e','1','Aligarh'),(83,'3_UYIW','Farhan Khan','2018-08-01','2018-08-01','dinner','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','120','40.00','31dcfc2f-6782-4655-b35d-3dfc92e46dda','1','Aligarh'),(84,'3_UYIW','Khawar Khan','2018-08-01','2018-08-01','dinner','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','150','50.00','31dcfc2f-6782-4655-b35d-3dfc92e46dda','1','Aligarh'),(85,'3_UYIW','Swaleh Mujeeb','2018-08-01','2018-08-01','breakfast','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','100','33.33','f2e439a9-00e4-4e81-9872-647e60e37db7','1','Aligarh'),(86,'3_UYIW','Khawar Khan','2018-08-01','2018-08-01','roti','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','120','40.00','f7266109-ff4d-4264-8dd0-71a8d3a2cfa8','1','Aligarh'),(87,'3_UYIW','Swaleh Mujeeb','2018-08-01','2018-08-01','Water','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','15','5.00','cfedc09a-9089-4519-a83a-2835bfb22813','1','Aligarh'),(88,'3_UYIW','Swaleh Mujeeb','2018-08-01','2018-08-01','Dinner','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','250','83.33','33737214-6ad8-477b-ac49-90cd2b67f057','1','Aligarh'),(89,'3_UYIW','Swaleh Mujeeb','2018-08-08','2018-08-01','Dinner','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','250','83.33','b2b411af-3d38-4272-b051-ad6ad959edc8','1','Aligarh'),(90,'3_UYIW','Swaleh Mujeeb','2018-08-08','2018-08-04','Dinner Milk papey','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','500','166.67','6af43c42-96b8-4294-9abe-7e16db0e860c','1','Aligarh'),(91,'3_UYIW','Swaleh Mujeeb','2018-08-08','2018-08-08','Breakfast egg crat tea Etc','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','230','76.67','3fe9209d-1f7f-4dc2-aa32-c40eabcc9123','1','Aligarh'),(92,'3_UYIW','Swaleh Mujeeb','2018-08-08','2018-08-08','ice water','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','25','8.33','c0e533c1-5fac-4e5a-a772-154ec642743f','1','Aligarh'),(93,'3_UYIW','Farhan Khan','2018-08-08','2018-08-08','khooda','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','100','33.33','c6ad8121-4ea8-4768-aa79-eab94c6cf8bf','1','Aligarh'),(94,'3_UYIW','Farhan Khan','2018-08-08','2018-08-08','ice','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','10','3.33','be2fc354-e88b-448e-8934-01ef41760e98','1','Aligarh'),(95,'3_UYIW','Farhan Khan','2018-08-08','2018-08-08','sabzi','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','88','29.33','7fcebef0-5468-4a68-9278-ea029b919cad','1','Aligarh'),(96,'3_UYIW','Swaleh Mujeeb','2018-08-08','2018-08-08','newspaper','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','70','23.33','c1835b19-3b49-46f9-bd68-b8c5f806f002','1','Aligarh'),(97,'3_UYIW','Farhan Khan','2018-08-08','2018-08-08','bread ice','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','35','11.67','65c83fe5-4dc6-4215-ab9f-f364b5fc2914','1','Aligarh'),(98,'3_UYIW','Farhan Khan','2018-08-08','2018-08-08','roti ice','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','78','26.00','18f8a8b6-a6ae-489e-ab3b-6e74daae49ad','1','Aligarh'),(99,'3_UYIW','Swaleh Mujeeb','2018-08-09','2018-08-09','Water','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','15','5.00','afc39051-4654-4588-b5a6-7113548ebced','1','Aligarh'),(100,'3_UYIW','Farhan Khan','2018-08-13','2018-08-09','dinner','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','160','53.33','41e1a3ac-d5f5-4d79-93d3-ff3f35c3587c','1','Aligarh'),(101,'3_UYIW','Swaleh Mujeeb','2018-08-13','2018-08-13','ice','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','10','3.33','19e25e35-35ef-459b-b8c7-ce2c5983107b','1','Aligarh'),(102,'3_UYIW','Farhan Khan','2018-08-13','2018-08-13','Dinner','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','155','51.67','264d66e7-b9fd-45d9-93c4-d927fc549bf3','1','Aligarh'),(103,'3_UYIW','Farhan Khan','2018-08-13','2018-08-13','Dinner','6_ORR','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','155','51.67','7cfc26f3-8c0d-4acc-943d-c0c4ac7019ed','1','Aligarh'),(104,'3_UYIW','Swaleh Mujeeb','2018-09-01','2018-09-01','ration','3_UYIW','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb','285','142.50','fb31f72b-eceb-4aaa-8ece-08f338034dca','1','Aligarh'),(105,'3_UYIW','Swaleh Mujeeb','2018-09-01','2018-09-01','dinner','3_UYIW','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb','132','66.00','b05ebe8c-fb3b-43cb-97a5-101a9ff4c544','1','Aligarh'),(106,'3_UYIW','Farhan Khan','2018-09-01','2018-09-01','dinner','6_ORR','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb','150','75.00','50d00073-c669-4d34-8755-7d8523e06280','1','Aligarh'),(107,'3_UYIW','Farhan Khan','2018-09-01','2018-09-01','Dinner','6_ORR','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb','155','77.50','fd145ffa-3fe8-4983-a146-2ebdeb8d4754','1','Aligarh'),(108,'3_UYIW','Farhan Khan','2018-09-01','2018-09-01','gas','6_ORR','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb','180','90.00','8360674a-609e-4e0a-9b6b-38a15fa968d2','1','Aligarh'),(109,'3_UYIW','Farhan Khan','2018-09-01','2018-09-01','Dinner','6_ORR','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb','118','59.00','d31f5b3f-8fe0-4360-982a-d85fd02648a7','1','Aligarh'),(110,'3_UYIW','Farhan Khan','2018-09-01','2018-09-01','breakfast','6_ORR','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb','51','25.50','f38799a3-f339-44b9-a768-b19c593e5e33','1','Aligarh'),(111,'3_UYIW','Farhan Khan','2018-09-01','2018-09-01','oil','6_ORR','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb','110','55.00','f38e7137-810b-40c4-adad-2a1bb2167c82','1','Aligarh'),(112,'3_UYIW','Farhan Khan','2018-09-01','2018-09-01','Milk','6_ORR','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb','26','13.00','884eca26-e03b-402c-80b4-401de35fee76','1','Aligarh'),(113,'3_UYIW','Farhan Khan','2018-09-01','2018-09-01','dinner','6_ORR','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb','80','40.00','88e6097f-8b7c-4a56-8ba5-252e6ba222e5','1','Aligarh'),(114,'3_UYIW','Khawar Khan','2018-09-01','2018-09-01','dinner','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan','120','60.00','1fbdbb4f-2446-489f-a912-4648d62521c9','1','Aligarh'),(115,'3_UYIW','Swaleh Mujeeb','2018-09-06','2018-09-06','shift','3_UYIW','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','120','40.00','cdd8df09-66ac-47b0-84a4-901d2f8c14ee','1','Aligarh'),(116,'3_UYIW','Zohaib Khan','2018-09-06','2018-09-06','shift','5_OOYY','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','10.00','cdd8df09-66ac-47b0-84a4-901d2f8c14ee','1','Aligarh'),(117,'3_UYIW','Zohaib Khan','2018-09-06','2018-09-06','Rent','5_OOYY','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','500','166.67','8a874f2e-991b-4e2b-9e39-8e659fba37e2','1','Aligarh'),(118,'3_UYIW','Faisal Khan','2018-09-06','2018-09-01','Dinner','7_QEWW','7_QEWW__Faisal Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','10.00','08ca9791-13b5-469c-818c-4a74db6cb9f7','1','Aligarh'),(119,'3_UYIW','Swaleh Mujeeb','2018-09-06','2018-09-01','Dinner','3_UYIW','7_QEWW__Faisal Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','120','40.00','08ca9791-13b5-469c-818c-4a74db6cb9f7','1','Aligarh'),(120,'3_UYIW','Faisal Khan','2018-09-06','2018-09-01','Dinner','7_QEWW','7_QEWW__Faisal Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','230','76.67','75298a33-9621-442b-bff5-b2cb6bc5432c','1','Aligarh'),(121,'3_UYIW','Faisal Khan','2018-09-06','2018-09-02','Milk','7_QEWW','7_QEWW__Faisal Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','26','8.67','7a4676f6-3106-463f-9750-8bc0a1260ecc','1','Aligarh'),(122,'3_UYIW','Swaleh Mujeeb','2018-09-06','2018-09-06','water','3_UYIW','7_QEWW__Faisal Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','10.00','c9385a62-2021-4ae1-8a27-6f3d73d34b5f','1','Aligarh'),(123,'3_UYIW','Faisal Khan','2018-09-06','2018-09-06','Fast food','7_QEWW','7_QEWW__Faisal Khan,3_UYIW__Swaleh Mujeeb','100','50.00','d3c66702-170c-45d7-b3aa-778de869e254','1','Aligarh'),(124,'3_UYIW','Swaleh Mujeeb','2018-09-06','2018-09-06','Fast food','3_UYIW','7_QEWW__Faisal Khan,3_UYIW__Swaleh Mujeeb','20','10.00','d3c66702-170c-45d7-b3aa-778de869e254','1','Aligarh'),(125,'3_UYIW','Faisal Khan','2018-09-06','2018-09-06','Chicken','7_QEWW','7_QEWW__Faisal Khan,3_UYIW__Swaleh Mujeeb','300','150.00','e9a063c5-1450-476f-b21e-10406b4c702a','1','Aligarh'),(126,'3_UYIW','Swaleh Mujeeb','2018-09-06','2018-09-06','breakfast','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','56','14.00','b1c8f3db-197b-4ea0-8daa-8d13e7fb1b1e','1','Aligarh'),(127,'3_UYIW','Swaleh Mujeeb','2018-09-06','2018-09-04','Allu','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','20','5.00','c3eed00e-d96d-46a1-9188-0bb322706c86','1','Aligarh'),(128,'3_UYIW','Swaleh Mujeeb','2018-09-10','2018-09-09','Handwash','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','40','10.00','92eacb77-3dee-4409-8f2b-2790ecf56c3c','1','Aligarh'),(129,'3_UYIW','Swaleh Mujeeb','2018-09-10','2018-09-09','Tomato Sous','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','50','12.50','401fdb4d-f8ac-4e36-b4e1-adbce36cff7e','1','Aligarh'),(130,'7_QEWW','Faisal Khan','2018-09-10','2018-09-10','Milk','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','26','6.50','3519b43c-3376-43bb-ab12-dac5428e1394','1','Aligarh'),(131,'7_QEWW','Faisal Khan','2018-09-10','2018-09-09','Dinner','7_QEWW','7_QEWW__Faisal Khan,3_UYIW__Swaleh Mujeeb','120','60.00','59585711-3013-4c6b-a595-8af6b9e15294','1','Aligarh'),(132,'3_UYIW','Swaleh Mujeeb','2018-09-12','2018-09-12','Eggs','3_UYIW','7_QEWW__Faisal Khan','20','20.00','205896a2-48a1-4031-8705-9a6c52c03b38','1','Aligarh'),(133,'3_UYIW','Zohaib Khan','2018-09-12','2018-09-07','Parathe','5_OOYY','7_QEWW__Faisal Khan','45','45.00','af3e3af0-c8ea-4952-93db-4eabf8b05bef','1','Aligarh'),(134,'3_UYIW','Swaleh Mujeeb','2018-09-12','2018-09-12','Parathe','3_UYIW','7_QEWW__Faisal Khan','45','45.00','108a19bf-5245-438f-b5d6-33d47ce7fedf','1','Aligarh'),(135,'3_UYIW','Swaleh Mujeeb','2018-09-12','2018-09-12','Roti','3_UYIW','6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','20','10.00','c29928a1-6fa9-4b16-a7ef-bed82bd03c24','1','Aligarh'),(136,'3_UYIW','Zohaib Khan','2018-09-12','2018-09-10','Water','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','7.50','224cd184-022c-4b50-9bbd-5cf5f249afeb','1','Aligarh'),(137,'3_UYIW','Swaleh Mujeeb','2018-09-14','2018-09-13','Milk','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','52','13.00','f884ab9d-a260-4863-99fe-dff48f319a51','1','Aligarh'),(138,'3_UYIW','Swaleh Mujeeb','2018-09-15','2018-09-15','Bhindi allu shimla mirch','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','100','25.00','fab3bf02-bd1d-4bd7-8e6b-15b95de7c99c','1','Aligarh'),(139,'3_UYIW','Swaleh Mujeeb','2018-09-15','2018-09-15','onion tomato','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','40','10.00','11e18524-fbbc-43c2-8f30-87f4c9154185','1','Aligarh'),(140,'3_UYIW','Swaleh Mujeeb','2018-09-15','2018-09-14','Dinner','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','135','33.75','d2521209-6399-4f12-a7c8-7c2cbd1ef416','1','Aligarh'),(141,'7_QEWW','Faisal Khan','2018-09-18','2018-09-13','Water','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','80','20.00','d1ae3b97-3140-4224-8ac2-e8527ef9b8cb','1','Aligarh'),(142,'7_QEWW','Faisal Khan','2018-09-18','2018-09-13','Roti','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','50','12.50','8deccd03-3518-409a-8693-9374f1b26eef','1','Aligarh'),(143,'7_QEWW','Faisal Khan','2018-09-18','2018-09-18','Roti','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','36','9.00','5ccb8ae7-5016-4b63-8df0-0345a8eac2fe','1','Aligarh'),(144,'3_UYIW','Faisal Khan','2018-09-21','2018-09-22','Dinner','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','380','95.00','e7b1ca13-992a-408b-91fd-9dd533df27f9','1','Aligarh'),(145,'3_UYIW','Faisal Khan','2018-09-21','2018-09-22','tv Recharge','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','300','75.00','db369c2f-cbba-4e37-80f5-8fe57e6051e9','1','Aligarh'),(146,'7_QEWW','Faisal Khan','2018-09-24','2018-09-23','Lunch tawa chicken','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','295','73.75','74aca960-e34f-44fb-93cc-9af85eb6088b','1','Aligarh'),(147,'7_QEWW','Faisal Khan','2018-09-24','2018-09-22','Maggie and shampoo','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','70','17.50','2a8491e7-103c-4688-9a2e-ec2f595c73aa','1','Aligarh'),(148,'7_QEWW','Faisal Khan','2018-09-24','2018-09-21','Samaan maggie and namkeen','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','80','20.00','a88b55c5-870a-4f36-ab06-e8dc6107cd9c','1','Aligarh'),(149,'7_QEWW','Faisal Khan','2018-09-25','2018-09-24','Dinner','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','100','33.33','7bd19aa6-38fc-4da6-b221-2e81df001491','1','Aligarh'),(150,'7_QEWW','Farhan Khan','2018-09-25','2018-09-24','Cold drink','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','60','20.00','43cd88a1-1940-4f98-9438-2397d5e1c545','1','Aligarh'),(151,'7_QEWW','Faisal Khan','2018-09-27','2018-09-25','Samaan','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','450','112.50','387163f8-0c96-4b38-83b9-900fa0318311','1','Aligarh'),(152,'7_QEWW','Faisal Khan','2018-09-28','2018-09-27','Dinner','7_QEWW','7_QEWW__Faisal Khan,5_OOYY__Zohaib Khan','320','160.00','d24e214c-d0b2-49a0-a97d-65387246916d','1','Aligarh'),(153,'7_QEWW','Faisal Khan','2018-10-01','2018-09-28','Parathe','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','90','30.00','21c41701-1c5e-402a-9732-85ff482badbf','1','Aligarh'),(154,'7_QEWW','Faisal Khan','2018-10-01','2018-10-01','Parathe','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan','75','37.50','041f54d3-cf8a-46b8-8773-9a2c6bfae111','1','Aligarh'),(155,'7_QEWW','Faisal Khan','2018-10-06','2018-10-06','Namkeen maggie milk','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','224','56.00','f93a64d9-5d39-4341-b25c-552b1f904a28','1','Aligarh'),(156,'7_QEWW','Faisal Khan','2018-10-09','2018-10-08','Dinner','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','90','30.00','6949d6fc-f3a5-49ab-b933-e4e8f45f0d63','1','Aligarh'),(157,'7_QEWW','Faisal Khan','2018-10-09','2018-10-07','Harpick and addonil','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','85','21.25','93f49846-a069-4c71-b501-ba7485a9223a','1','Aligarh'),(158,'7_QEWW','Faisal Khan','2018-10-09','2018-10-09','Egg','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','40','10.00','f70595b8-b232-4065-a054-46e1007174c1','1','Aligarh'),(159,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','breakfast','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','66','16.50','938ea8d9-63d6-4894-a89e-d199ef448ba2','1','Aligarh'),(160,'7_QEWW','Faisal Khan','2018-10-11','2018-10-11','Sauce and water','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','70','17.50','7cf172c3-34c0-4b8a-a110-a3fb4b2a4463','1','Aligarh'),(161,'7_QEWW','Faisal Khan','2018-10-11','2018-10-09','Egg','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','40','10.00','927534bf-32cc-4e3c-8098-84776adfe5a4','1','Aligarh'),(162,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','dinner','6_ORR','7_QEWW__Faisal Khan','45','45.00','4a093f98-cd7a-46e0-8a46-8f4b7e415959','1','Aligarh'),(163,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','dinner','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','45','11.25','b0223cc1-5309-42e2-973b-a949e78180f2','1','Aligarh'),(164,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','breakfast','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','77','19.25','f7a4ecdf-8059-4a72-a904-a81d5311b0b2','1','Aligarh'),(165,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','Milk','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','52','13.00','12c9e38c-1594-4117-9376-4e1324b2e557','1','Aligarh'),(166,'3_UYIW','Zohaib Khan','2018-10-11','2018-10-11','veg  Masala','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','33','8.25','bdc2ba36-53e7-4b4e-ba3f-251acf8d6e59','1','Aligarh'),(167,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','bread Milk','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','46','11.50','694770df-2b0f-4a06-9a29-1c9d2f131bf0','1','Aligarh'),(168,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','Milk roti','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','97','32.33','d0317045-d67b-4ffe-86a7-1781c9902138','1','Aligarh'),(169,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','Roti','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','45','11.25','5270bf3a-8af7-45c4-bd32-0ae4fb1c601c','1','Aligarh'),(170,'3_UYIW','Zohaib Khan','2018-10-11','2018-10-11','water','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','7.50','2c518e93-6bd9-4e72-b98e-100dcdcc2af4','1','Aligarh'),(171,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','breakfast roti','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','137','34.25','b3b87085-a13c-4136-9feb-40241de78816','1','Aligarh'),(172,'3_UYIW','Zohaib Khan','2018-10-11','2018-10-11','milk','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','27','6.75','ec24c6e0-70fa-4c55-865c-78b7a255d7bd','1','Aligarh'),(173,'3_UYIW','Zohaib Khan','2018-10-11','2018-10-11','lunch','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','87','21.75','2c4e2d57-827d-42d0-af82-f8cba66a7103','1','Aligarh'),(174,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','breakfast','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','51','17.00','81aa703a-ea3b-4ade-86e0-abacd3f5af99','1','Aligarh'),(175,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','Maggi','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','48','16.00','4d664488-b5af-444e-9b10-0fa00f69ee1d','1','Aligarh'),(176,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','milk egg','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','66','22.00','1e470cf1-12db-4f51-ad3c-6841ca456e5c','1','Aligarh'),(177,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','cold drink','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','60','20.00','c610af58-2b56-4ec6-a038-8ca9d5be1556','1','Aligarh'),(178,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','dinner','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','150','50.00','9d398e9e-3769-4f0c-a08d-b0c89fdbecef','1','Aligarh'),(179,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','Pani','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','25','8.33','6b88ee22-cb69-4e5e-9b0c-0f861ee911bd','1','Aligarh'),(180,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','catch up','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','33','11.00','ce321b5b-e702-41a4-9609-a71352020267','1','Aligarh'),(181,'3_UYIW','Faisal Khan','2018-10-11','2018-10-11','Gas Refll','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','157','39.25','8fe2abee-b8fb-481d-bd22-50403c9e6875','1','Aligarh'),(182,'6_ORR','Farhan Khan','2018-10-16','2018-10-16','Tomato Sauce','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','65','16.25','45a78e56-513c-426e-98bc-f49d2f5d00c6','1','Aligarh'),(184,'6_ORR','Farhan Khan','2018-10-17','2018-10-17','Egg tray','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','160','40.00','ddf7f44c-5bd5-46b0-8375-5c303564dbd9','1','Aligarh'),(185,'3_UYIW','Swaleh Mujeeb','2018-10-17','2018-10-22','Dinner','3_UYIW','3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','80','40.00','e96b1ee1-74c1-4f3d-b4bd-84d911b8cb53','1','Aligarh'),(186,'7_QEWW','Swaleh Mujeeb','2018-10-17','2018-10-17','Veg','3_UYIW','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb','50','25.00','3b89d8f9-1370-476a-bcc7-d7967cf4a677','1','Aligarh'),(187,'7_QEWW','Faisal Khan','2018-10-30','2018-10-26','Parathe and cold drink','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','125','41.67','bfe852d2-8d31-4026-8912-ca214124daf0','1','Aligarh'),(188,'3_UYIW','Swaleh Mujeeb','2018-10-31','2018-10-31','Gas Refill','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','270','67.50','fea24580-5082-4bd3-81cd-a8abe10a8c6b','1','Aligarh'),(189,'3_UYIW','Swaleh Mujeeb','2018-10-31','2018-10-31','Roti ','3_UYIW','3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','20','10.00','c0e2bc36-5db7-42d5-83e0-f58ecb77b311','1','Aligarh'),(190,'3_UYIW','Swaleh Mujeeb','2018-10-31','2018-10-31','Onion potatoes','3_UYIW','3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','15.00','7ec90e88-b9a0-4a35-8c57-12f8e0a52cc7','1','Aligarh'),(191,'5_OOYY','Zohaib Khan','2018-11-04','2018-10-30','water','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','7.50','a474c66e-5c77-4521-b169-22ec30234684','1','Aligarh'),(192,'5_OOYY','Zohaib Khan','2018-11-04','2018-11-01','water','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','7.50','70f7a1b3-aa5f-406d-b729-277430004ea3','1','Aligarh'),(193,'5_OOYY','Zohaib Khan','2018-11-04','2018-11-04','water','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','7.50','e44c60ce-0053-4ffa-b2be-6c0bb2de057d','1','Aligarh'),(194,'3_UYIW','Swaleh Mujeeb','2018-11-05','2018-11-06','bread milk','3_UYIW','3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','40','20.00','64cbb46f-bc97-4cb8-a46b-2277e30ee679','1','Aligarh'),(195,'3_UYIW','Swaleh Mujeeb','2018-11-07','2018-11-07','tooth paste','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','49','12.25','44ff5b8a-d9c8-48e4-9f79-c6e307761586','1','Aligarh'),(196,'3_UYIW','Swaleh Mujeeb','2018-11-11','2018-11-11','Dinner','3_UYIW','7_QEWW__Faisal Khan,3_UYIW__Swaleh Mujeeb','195','97.50','f501d74c-6f2f-47d8-aa38-697d8dd15353','1','Aligarh'),(197,'3_UYIW','Swaleh Mujeeb','2018-11-12','2018-11-11','E riskshaw','3_UYIW','7_QEWW__Faisal Khan,3_UYIW__Swaleh Mujeeb','50','25.00','02a114f7-60ec-45f2-b726-3654c03bf667','1','Aligarh'),(198,'3_UYIW','Swaleh Mujeeb','2018-11-14','2018-11-14','Water','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,9_OOUI__Guest Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','6.00','0d1ec70b-74ae-4573-9fc2-4ffb380375cd','1','Aligarh'),(199,'6_ORR','Farhan Khan','2018-11-27','2018-11-27','Pani','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,9_OOUI__Guest Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','6.00','b15320fa-2d6e-4789-806f-4a451e3493e3','1','Aligarh'),(200,'6_ORR','Farhan Khan','2018-11-27','2018-11-27','Hand wash','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,9_OOUI__Guest Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','49','9.80','4b33fa7f-315f-43eb-8d57-e50e9f5a63ff','1','Aligarh'),(201,'6_ORR','Farhan Khan','2018-11-27','2018-11-27','Sauce','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,9_OOUI__Guest Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','33','6.60','844331d9-7ef0-48cd-b70a-526680a96291','1','Aligarh'),(202,'6_ORR','Farhan Khan','2018-11-27','2018-11-27','Breakfast','6_ORR','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','35','11.67','4ecc59a2-c6f8-4de7-a391-19293b2eb264','1','Aligarh'),(203,'3_UYIW','Swaleh Mujeeb','2018-11-29','2018-11-28','Water','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Guest Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','7.50','5519afd8-9376-48e7-bdfd-746e514c3abe','1','Aligarh'),(204,'6_ORR','Farhan Khan','2018-12-01','2018-12-01','Milk Coffee','6_ORR','6_ORR__Farhan Khan,9_OOUI__Guest Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','31','7.75','33a2ea28-3297-465d-b8d8-7594dc938280','1','Aligarh'),(205,'7_QEWW','Faisal Khan','2018-12-09','2018-12-05','Paratha','7_QEWW','6_ORR__Farhan Khan','40','40.00','c35446e3-2187-45dd-bb31-f4a1bbaf8e4e','1','Aligarh'),(206,'7_QEWW','Faisal Khan','2018-12-09','2018-12-09','Catchup','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','65','16.25','a1652f1b-ebb4-435a-96c6-62860063a678','1','Aligarh'),(207,'7_QEWW','Faisal Khan','2018-12-09','2018-12-09','Maggie','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','62','15.50','63387409-8d1c-4526-bf2d-4915d0096add','1','Aligarh'),(208,'5_OOYY','Zohaib Khan','2018-12-12','2018-12-12','water','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','20','5.00','b0e3ae7f-7cc4-41c7-8abe-2bbfbb21c765','1','Aligarh'),(209,'3_UYIW','Swaleh Mujeeb','2018-12-14','2018-12-14','Dinner','3_UYIW','3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','74','37.00','4feb2354-8367-4cf4-8678-50cbc615aaa3','1','Aligarh'),(210,'6_ORR','Farhan Khan','2018-12-18','2018-12-18','Gas Refill','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','300','75.00','c22a4114-342a-49dd-8ce9-4f8feeb2e01e','1','Aligarh'),(211,'5_OOYY','Zohaib Khan','2018-12-19','2018-12-19','water','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','20','5.00','dceb0009-9d05-43c0-9ff6-8196e0f8667b','1','Aligarh'),(212,'7_QEWW','Faisal Khan','2018-12-19','2018-12-19','Parathe','7_QEWW','5_OOYY__Zohaib Khan','25','25.00','c59ade1e-d579-45fa-8e07-07e04f7d689d','1','Aligarh'),(213,'7_QEWW','Faisal Khan','2018-12-19','2018-12-17','Harpik red','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','45','11.25','d213ff8c-81ea-48b0-be11-5e0af3806817','1','Aligarh'),(214,'7_QEWW','Faisal Khan','2018-12-19','2018-12-17','Maggie','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','48','12.00','4925a250-f5a2-49a9-9c59-9b89dc9c9e31','1','Aligarh'),(215,'3_UYIW','Swaleh Mujeeb','2018-12-19','2018-12-19','Colgate','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','50','12.50','1832bba6-ae1f-49d2-bd4d-6df00adba86f','1','Aligarh'),(216,'6_ORR','Farhan Khan','2018-12-26','2018-12-26','Handwash','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','45','11.25','0fb861c6-c6ec-4aae-a7ae-632ed46871c8','1','Aligarh'),(217,'6_ORR','Farhan Khan','2018-12-26','2018-12-26','Pani Bottle','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','25','6.25','c9280c70-c018-4ef8-94fa-d36868fa6a2d','1','Aligarh'),(218,'5_OOYY','Zohaib Khan','2019-03-25','2019-03-18','karamkalla','5_OOYY','3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','6','3.00','e596f1e7-06bd-421d-bf31-690323f93acd','1','Aligarh'),(219,'3_UYIW','Swaleh Mujeeb','2019-03-25','2019-03-18','water','3_UYIW','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','10.00','3850af79-3ae5-4154-af64-26071fab8da1','1','Aligarh'),(220,'3_UYIW','Swaleh Mujeeb','2019-03-25','2019-03-23','Rice','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','50','12.50','76b4716d-7b6a-4b2c-b724-6668b93b87c7','1','Aligarh'),(221,'3_UYIW','Swaleh Mujeeb','2019-03-25','2019-03-23','daal','3_UYIW','3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','15.00','3ecba68a-e90c-4c0e-b46d-82e7845bc7de','1','Aligarh'),(222,'6_ORR','Farhan Khan','2019-03-25','2019-03-26','Gas Refill','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','160','40.00','20cb0136-f127-442b-817e-67227a96cbe5','1','Aligarh'),(223,'6_ORR','Farhan Khan','2019-03-25','2019-03-26','Handwash','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','40','10.00','d9816831-35e2-48e8-a2c5-f85b912f1c01','1','Aligarh'),(224,'5_OOYY','Zohaib Khan','2019-03-26','2019-03-23','Papad','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','60','15.00','3e98afb4-73e8-406b-9ac8-9b29b8a11786','1','Aligarh'),(225,'6_ORR','Farhan Khan','2019-04-02','2019-04-02','Pani','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','7.50','5af6a329-122b-467b-993e-34afd05491e5','1','Aligarh'),(226,'6_ORR','Farhan Khan','2019-04-02','2019-04-02','Dinner','6_ORR','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','80','26.67','a26484f1-a364-4765-ba51-2aef138c41a3','1','Aligarh'),(227,'6_ORR','Farhan Khan','2019-04-02','2019-04-02','Pani','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','7.50','ee5de597-8fa5-434f-9d83-2e1adf61d145','1','Aligarh'),(228,'6_ORR','Farhan Khan','2019-04-02','2019-04-02','Vimbar Scotch','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','20','5.00','bf8c10bc-c81a-4e6b-8dda-4170e6290d6b','1','Aligarh'),(229,'6_ORR','Farhan Khan','2019-04-02','2019-04-02','Vimbar scotch','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','20','5.00','19117cb0-cd5c-443d-ba75-a68b816ebcca','1','Aligarh'),(230,'3_UYIW','Swaleh Mujeeb','2019-04-02','2019-04-02','Vim and fastcard','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','40','10.00','c99a8091-b19c-4c1d-8946-c406dcef2f31','1','Aligarh'),(231,'3_UYIW','Swaleh Mujeeb','2019-04-02','2019-04-02','cooking oil','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','110','27.50','3012e37a-6ab1-4425-8f1a-26e04e5f6713','1','Aligarh'),(232,'3_UYIW','Swaleh Mujeeb','2019-04-02','2019-04-02','Tea','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','7.50','7d05cb96-6c2e-41e8-8cd0-383d7a0ae457','1','Aligarh'),(233,'3_UYIW','Swaleh Mujeeb','2019-04-02','2019-04-02','Rice','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','130','32.50','93b604e0-ed6a-48e6-9f27-3fed8482de57','1','Aligarh'),(234,'3_UYIW','Swaleh Mujeeb','2019-04-02','2019-04-02','Daal','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','90','22.50','43d6a6af-b07c-4525-a2de-52e1be9aa511','1','Aligarh'),(235,'3_UYIW','Swaleh Mujeeb','2019-04-02','2019-04-02','Conflakes','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','40','10.00','3e1e3df9-33ed-440f-bc67-cf292ca721d2','1','Aligarh'),(236,'5_OOYY','Zohaib Khan','2019-04-03','2019-04-03','Koode wale k paise','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','100','25.00','2f9feb85-44a0-4160-b0c8-c24eec844b67','1','Aligarh'),(237,'7_QEWW','Faisal Khan','2019-04-06','2019-04-06','Milk','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','26','8.67','977b1801-d1be-4ed0-9bea-2cab4c7e7876','1','Aligarh'),(238,'7_QEWW','Faisal Khan','2019-04-06','2019-04-06','Maggie and shampoo','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','58','14.50','1f1e5c2f-1ad0-4cfc-800a-1a1bd901f703','1','Aligarh'),(239,'7_QEWW','Faisal Khan','2019-04-06','2019-04-01','Cold drink','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','86','21.50','9df51166-c307-4cce-969b-04121b5d23dd','1','Aligarh'),(240,'7_QEWW','Faisal Khan','2019-04-06','2019-04-06','Dinner with arham and whole party','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','80','20.00','3b116a7a-7c12-41f1-87af-d397fa842943','1','Aligarh'),(241,'7_QEWW','Faisal Khan','2019-04-06','2019-04-02','Maggie','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','48','12.00','53925eed-2bfe-423a-8514-1a79a7d6a904','1','Aligarh'),(242,'7_QEWW','Faisal Khan','2019-04-06','2019-04-03','Last to last week party umair','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','220','55.00','f5538f4b-f334-4d12-aaf1-ad856cf81f2b','1','Aligarh'),(243,'5_OOYY','Zohaib Khan','2019-04-07','2019-04-07','water','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','7.50','6be665d5-0a72-4f32-bfcc-1513bbdb37bf','1','Aligarh'),(244,'7_QEWW','Faisal Khan','2019-04-07','2019-04-08','Chai','7_QEWW','6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','40','20.00','b725531b-2211-4e4f-b29f-b054c281f226','1','Aligarh'),(245,'7_QEWW','Faisal Khan','2019-04-07','2019-04-08','Coldrink','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','40','13.33','8a4e7abc-ba7a-4001-8f86-c3c59f59cfc9','1','Aligarh'),(246,'3_UYIW','Faisal Khan','2019-04-07','2019-04-08','Shampoo','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','20','6.67','84543134-3c2b-4385-abc9-2fc5f99032a0','1','Aligarh'),(247,'3_UYIW','Faisal Khan','2019-04-07','2019-04-08','Handwash','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','65','21.67','8e4d02e1-272e-48e3-94c1-bc39536f1539','1','Aligarh'),(248,'7_QEWW','Faisal Khan','2019-04-07','2019-04-08','Dinner','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','345','115.00','31551dfb-542b-456c-9f17-4f2d7d109569','1','Aligarh'),(249,'3_UYIW','Swaleh Mujeeb','2019-04-08','2019-04-08','Dinner','3_UYIW','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','100','33.33','68fea1da-f62d-4b98-bb54-90ad37ec8ae4','1','Aligarh'),(250,'3_UYIW','Faisal Khan','2019-04-09','2019-04-09','Colddrink','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','35','11.67','21376fae-9736-47d3-9e9a-5aa4e59e3716','1','Aligarh'),(251,'6_ORR','Farhan Khan','2019-04-10','2019-04-05','Pani','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','20','5.00','10316bba-6d4f-467a-b8c7-1218267ad5bc','1','Aligarh'),(252,'6_ORR','Farhan Khan','2019-04-10','2019-04-07','Breakfast','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','90','30.00','a5fc976b-80f3-469c-9a66-7a057e8911e8','1','Aligarh'),(253,'6_ORR','Farhan Khan','2019-04-10','2019-04-07','Lunch','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','100','33.33','fad02cb0-a86a-4d0e-a48e-97d744d712bb','1','Aligarh'),(254,'6_ORR','Farhan Khan','2019-04-10','2019-04-10','Dinner','6_ORR','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','86','28.67','875a7a9a-c3fc-4fd0-9d16-d70fa8edb546','1','Aligarh'),(255,'3_UYIW','Swaleh Mujeeb','2019-04-11','2019-04-10','repair AC switch seeling Fan','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','310','77.50','03bba4fb-03d0-4f0c-8b11-c12a9549fa10','1','Aligarh'),(256,'3_UYIW','Swaleh Mujeeb','2019-04-11','2019-04-11','Gas refill','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','240','60.00','f5a65999-92fb-4470-82f0-a63fd7904ae4','1','Aligarh'),(257,'6_ORR','Farhan Khan','2019-04-11','2019-04-11','Dinner','6_ORR','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','74','24.67','a38cf5a1-f18b-41bf-884d-71fb5306c13d','1','Aligarh'),(258,'3_UYIW','Swaleh Mujeeb','2019-04-13','2019-04-11','kheera mirch dhaniya mirch','3_UYIW','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','10.00','e80b89b5-8555-4758-a235-81340286e548','1','Aligarh'),(259,'5_OOYY','Zohaib Khan','2019-04-13','2019-04-13','Khira neebu','5_OOYY','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','10.00','8f3bba55-9051-46c3-93a1-196d3eedf6c5','1','Aligarh'),(260,'3_UYIW','Farhan Khan','2019-04-16','2019-04-15','Water','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','7.50','3bfd075d-f437-4c83-b9fe-e26e9ff6e833','1','Aligarh'),(261,'3_UYIW','Swaleh Mujeeb','2019-04-17','2019-04-17','vegitable','3_UYIW','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','45','15.00','b684257a-2512-4986-a547-e9c47f82d804','0','Aligarh'),(262,'3_UYIW','Swaleh Mujeeb','2019-04-17','2019-04-17','Heeng','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','18','4.50','02f3cbf7-afb4-4dbb-b077-194b23402607','0','Aligarh'),(263,'3_UYIW','Swaleh Mujeeb','2019-04-20','2019-04-20','Door bell tubelight repair','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','200','50.00','70bdef05-2871-4f17-a0c2-259ad9d414c9','0','Aligarh'),(264,'5_OOYY','Zohaib Khan','2019-04-20','2019-04-21','water','5_OOYY','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','10.00','a33af5a5-cd03-4615-8f0b-6495d15043c4','0','Aligarh'),(265,'5_OOYY','Zohaib Khan','2019-04-21','2019-04-21','pyaz','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','10','2.50','b534e5ad-da03-4ba7-a614-32264343ef71','0','Aligarh'),(266,'6_ORR','Farhan Khan','2019-04-21','2019-04-17','Roti plus dahi','6_ORR','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','45','15.00','725c4202-3af6-4646-bb10-2b10493996a1','0','Aligarh'),(267,'6_ORR','Farhan Khan','2019-04-21','2019-04-18','Dinner','6_ORR','6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','60','30.00','99a50fc2-19be-497b-96f2-96b4a0d72f60','0','Aligarh'),(268,'6_ORR','Farhan Khan','2019-04-21','2019-04-19','Dinner','6_ORR','6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','60','30.00','f6f0f72e-78bc-4ca3-a741-e638fdf4adc4','0','Aligarh'),(269,'6_ORR','Farhan Khan','2019-04-21','2019-04-20','Dinner','6_ORR','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb','50','25.00','8c4152f9-ed71-4371-93d9-4115439a6c92','0','Aligarh'),(270,'6_ORR','Farhan Khan','2019-04-21','2019-04-22','Breakfast','6_ORR','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','90','30.00','e96cd15b-5151-444f-bf70-541bfb09e279','0','Aligarh'),(271,'3_UYIW','Swaleh Mujeeb','2019-04-23','2019-04-23','Bathing soap','3_UYIW','7_QEWW__Faisal Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','20','6.67','6dbf01fe-a80a-4432-b781-f6d31dffb975','0','Aligarh'),(272,'3_UYIW','Swaleh Mujeeb','2019-04-23','2019-04-23','Dinner','3_UYIW','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb','65','32.50','fd242f10-fb04-431a-bd05-9b8a8043f772','0','Aligarh'),(273,'5_OOYY','Zohaib Khan','2019-04-24','2019-04-24','dinner','5_OOYY','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','150','50.00','a30868a4-da00-4ccf-bfcf-3d5efa6ecdcc','0','Aligarh'),(274,'5_OOYY','Zohaib Khan','2019-04-25','2019-04-25','water','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','7.50','1cf7e096-b69f-4de2-aa98-f280f7f649ee','0','Aligarh'),(275,'3_UYIW','Swaleh Mujeeb','2019-04-26','2019-04-26','Refind oil','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','65','16.25','4119e9e9-1fca-459f-9c33-485a93562558','0','Aligarh'),(276,'7_QEWW','Faisal Khan','2019-04-26','2019-04-26','Maggie and milk','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','74','18.50','789cd577-0df1-413c-9ecd-1ae7f01b1871','0','Aligarh'),(277,'7_QEWW','Faisal Khan','2019-04-26','2019-04-25','Red harpic','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','40','10.00','7ede4575-37ed-43ef-8f92-6e85022021d6','0','Aligarh'),(278,'7_QEWW','Faisal Khan','2019-04-26','2019-04-24','Maggie','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','48','12.00','c5b058e0-3133-4511-a7e3-2b75ea091a2a','0','Aligarh'),(279,'7_QEWW','Faisal Khan','2019-04-26','2019-04-27','Two times maggie of last mnth','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','96','24.00','a910af94-f775-4055-93f8-44394fd17500','0','Aligarh'),(280,'7_QEWW','Faisal Khan','2019-04-26','2019-04-27','Last one time milk','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','26','6.50','b8cd4bf2-bccb-4045-965f-29622f341c60','0','Aligarh'),(281,'7_QEWW','Faisal Khan','2019-04-26','2019-04-27','Amul cream','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','57','14.25','45aedf4c-d423-4b25-b1f8-e21c07d0fdb4','0','Aligarh'),(282,'3_UYIW','Swaleh Mujeeb','2019-04-28','2019-04-28','Bread aand eggs','3_UYIW','7_QEWW__Faisal Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','43','14.33','0a2bad10-9c25-416c-b6a1-9e5646a07ead','0','Aligarh'),(283,'3_UYIW','Swaleh Mujeeb','2019-04-28','2019-04-28','Water','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','30','7.50','c2b8309b-8d5d-4dd9-bc54-128aadf40e0e','0','Aligarh'),(284,'5_OOYY','Zohaib Khan','2019-04-28','2019-04-28','lunch','5_OOYY','3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','100','50.00','0b4cbb66-6968-49bb-8032-fce697aa2a93','0','Aligarh'),(285,'5_OOYY','Zohaib Khan','2019-04-28','2019-04-28','hair oil','5_OOYY','6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','37','18.50','f8d8c6e8-1af2-4ad9-b62d-4e4f89725ee6','0','Aligarh'),(286,'5_OOYY','Zohaib Khan','2019-04-28','2019-04-28','pizza','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','290','72.50','9d3fc1ee-a686-48be-a352-bd94e8914956','0','Aligarh');
/*!40000 ALTER TABLE `account_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `addpartnerinfo`
--

DROP TABLE IF EXISTS `addpartnerinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addpartnerinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) NOT NULL,
  `mobile` varchar(45) NOT NULL,
  `isActive` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `accounttype` varchar(45) NOT NULL,
  `partnerID` varchar(45) DEFAULT NULL,
  `ppassword` varchar(45) NOT NULL,
  `dateofjoin` datetime DEFAULT NULL,
  `roomname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `mobile_UNIQUE` (`mobile`),
  UNIQUE KEY `fname_UNIQUE` (`fname`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addpartnerinfo`
--

LOCK TABLES `addpartnerinfo` WRITE;
/*!40000 ALTER TABLE `addpartnerinfo` DISABLE KEYS */;
INSERT INTO `addpartnerinfo` VALUES (1,'Swaleh','9897232006','true','Mujeeb','swaleh@gmail.com','Admin','3_UYIW','1admin','2017-12-31 00:00:00','Aligarh'),(2,'Guest','9876543210','false','Khan','guest@gmail.com','Normal','9_OOUI','123456','2017-12-31 00:00:00','Aligarh'),(8,'Zeeshan','9999613097','true','Khan','zeeshan@gmail.com','Super','3_UTRY','1super','2018-02-14 00:00:00','Super'),(11,'Farhan','9760578050','true','Khan','farhan@gmail.com','Normal','6_ORR','123456','2018-03-20 00:00:00','Aligarh'),(14,'Faisal','8860822367','true','Khan','faisal@gmail.com','Normal','7_QEWW','123456','2018-09-06 00:00:00','Aligarh'),(15,'Zohaib','8630013010','true','Khan','zohaib@gmail.com','Normal','5_OOYY','123456','2018-09-06 00:00:00','Aligarh');
/*!40000 ALTER TABLE `addpartnerinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `noticemessage`
--

DROP TABLE IF EXISTS `noticemessage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `noticemessage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(500) NOT NULL,
  `groupname` varchar(45) NOT NULL,
  `insertdate` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idnew_table_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=345 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noticemessage`
--

LOCK TABLES `noticemessage` WRITE;
/*!40000 ALTER TABLE `noticemessage` DISABLE KEYS */;
INSERT INTO `noticemessage` VALUES (1,'Swaleh Mujeeb  ,      Add-Item  : cfl','Aligarh','2018-07-05 22:52:06'),(2,'Swaleh Mujeeb  ,      Add-Item  : jug','Aligarh','2018-07-05 22:52:36'),(3,'Swaleh Mujeeb  ,      Add-Item  : harpic','Aligarh','2018-07-05 22:53:39'),(4,'Swaleh Mujeeb  ,      Add-Item  : house hold ','Aligarh','2018-07-05 22:54:17'),(5,'Swaleh Mujeeb  ,      Add-Item  : slipper toilet','Aligarh','2018-07-05 22:54:56'),(6,'Swaleh Mujeeb  ,      Add-Item  : Led bulb','Aligarh','2018-07-05 22:55:29'),(7,'Swaleh Mujeeb  ,      Add-Item  : brush','Aligarh','2018-07-05 22:55:57'),(8,'Swaleh Mujeeb  ,      Add-Item  : cfl lock','Aligarh','2018-07-05 22:56:31'),(9,'Swaleh Mujeeb  ,      Add-Item  : water bottle','Aligarh','2018-07-05 22:57:05'),(10,'Swaleh Mujeeb  ,      Add-Item  : dish wash soap','Aligarh','2018-07-05 22:57:33'),(11,'Swaleh Mujeeb  ,      Add-Item  : dinner','Aligarh','2018-07-05 22:58:09'),(12,'Swaleh Mujeeb  ,      Add-Item  : aftar','Aligarh','2018-07-05 22:58:47'),(13,'Swaleh Mujeeb  ,      Add-Item  : house hold','Aligarh','2018-07-05 22:59:23'),(14,'Swaleh Mujeeb  ,      Add-Item  : harpic','Aligarh','2018-07-05 22:59:56'),(15,'Swaleh Mujeeb  ,      Add-Item  : pani bottle','Aligarh','2018-07-05 23:00:47'),(16,'Swaleh Mujeeb  ,      Add-Item  : khana','Aligarh','2018-07-05 23:01:12'),(17,'Swaleh Mujeeb  ,      Add-Item  : utensils','Aligarh','2018-07-05 23:02:27'),(18,'Swaleh Mujeeb  ,      Add-Item  : utensils','Aligarh','2018-07-05 23:03:03'),(19,'Swaleh Mujeeb  ,      Add-Item  : led','Aligarh','2018-07-05 23:03:35'),(20,'Swaleh Mujeeb  ,      Add-Item  : Ration','Aligarh','2018-07-05 23:04:05'),(21,'Swaleh Mujeeb  ,      Add-Item  : gas','Aligarh','2018-07-05 23:04:29'),(22,'Swaleh Mujeeb  ,      Add-Item  : Roti','Aligarh','2018-07-05 23:04:53'),(23,'Swaleh Mujeeb  ,      Add-Item  : jam','Aligarh','2018-07-05 23:05:16'),(24,'Swaleh Mujeeb  ,      Add-Item  : sabzi','Aligarh','2018-07-05 23:06:50'),(25,'Swaleh Mujeeb  ,      Add-Item  : ice','Aligarh','2018-07-05 23:07:50'),(26,'Swaleh Mujeeb  ,      Add-Item  : atta','Aligarh','2018-07-05 23:08:24'),(27,'Swaleh Mujeeb  ,      Add-Item  : milk bread','Aligarh','2018-07-05 23:08:56'),(28,'Swaleh Mujeeb  ,      Add-Item  : dahi','Aligarh','2018-07-05 23:09:41'),(29,'Swaleh Mujeeb  ,      Add-Item  : bread','Aligarh','2018-07-05 23:10:09'),(30,'Swaleh Mujeeb  ,      Add-Item  : milk','Aligarh','2018-07-05 23:11:00'),(31,'Swaleh Mujeeb  ,      Add-Item  : atta babba','Aligarh','2018-07-05 23:11:41'),(32,'Swaleh Mujeeb  ,      Add-Item  : knife','Aligarh','2018-07-05 23:12:10'),(33,'Swaleh Mujeeb  ,      Add-Item  : nail cutter','Aligarh','2018-07-05 23:12:50'),(34,'Swaleh Mujeeb  ,      Add-Item  : sabzi','Aligarh','2018-07-05 23:13:46'),(35,'Swaleh Mujeeb  ,      Add-Item  : bread','Aligarh','2018-07-05 23:14:18'),(36,'Swaleh Mujeeb  ,      Add-Item  : atta bread milk','Aligarh','2018-07-05 23:14:44'),(37,'Swaleh Mujeeb  ,      Add-Item  : daal milk jam','Aligarh','2018-07-05 23:15:24'),(38,'Swaleh Mujeeb  ,      Add-Item  : zeera garm masala','Aligarh','2018-07-05 23:16:01'),(39,'Swaleh Mujeeb  ,      Add-Item  : water','Aligarh','2018-07-05 23:16:24'),(40,'Swaleh Mujeeb  ,      Add-Item  : vegetables','Aligarh','2018-07-05 23:16:56'),(41,'Swaleh Mujeeb  ,      Add-Item  : oil milk eggs','Aligarh','2018-07-05 23:17:21'),(42,'Swaleh Mujeeb  ,     Update-Item : oil milk eggs ,    Record Number : 41','Aligarh','2018-07-05 23:17:37'),(43,'Swaleh Mujeeb  ,      Add-Item  : Ration','Aligarh','2018-07-05 23:18:12'),(44,'Swaleh Mujeeb  ,      Add-Item  : Dinner','Aligarh','2018-07-05 23:18:32'),(45,'Swaleh Mujeeb  ,      Add-Item  : House hold','Aligarh','2018-07-05 23:18:55'),(46,'Swaleh Mujeeb  ,      Add-Item  : bread','Aligarh','2018-07-05 23:19:20'),(47,'Swaleh Mujeeb  ,      Settled Account','Aligarh','2018-07-06 23:58:33'),(48,'Swaleh Mujeeb  ,      Add-Item  : COMMON chicken onion dahi etc','Aligarh','2018-07-07 00:00:56'),(49,'Swaleh Mujeeb  ,      Add-Item  : cold drink','Aligarh','2018-07-07 00:01:57'),(50,'Swaleh Mujeeb  ,      Add-Item  : Roti','Aligarh','2018-07-07 00:02:34'),(51,'Farhan KhanBorrow Rs.322 From Swaleh Mujeeb','Aligarh','2018-07-07 00:10:37'),(52,'Swaleh Mujeeb  ,      Add-Item  : Bread','Aligarh','2018-07-08 10:47:34'),(53,'Swaleh Mujeeb  ,      Add-Item  : Common egg milk ','Aligarh','2018-07-08 10:49:46'),(54,'Swaleh Mujeeb  ,      Add-Item  : Common breakfast','Aligarh','2018-07-08 10:50:39'),(55,'Swaleh Mujeeb  ,      Add-Item  : Common Lunch biryani','Aligarh','2018-07-08 19:26:35'),(56,'Swaleh Mujeeb  ,      Add-Item  : Roti','Aligarh','2018-07-11 22:47:41'),(57,'Swaleh Mujeeb  ,      Add-Item  : sabzi','Aligarh','2018-07-11 22:48:07'),(58,'Swaleh Mujeeb  ,      Add-Item  : Bread dahi','Aligarh','2018-07-11 22:48:32'),(59,'Swaleh Mujeeb  ,      Add-Item  : Atta','Aligarh','2018-07-11 22:49:27'),(60,'Swaleh Mujeeb  ,      Add-Item  : ice','Aligarh','2018-07-11 22:49:47'),(61,'Swaleh Mujeeb  ,      Add-Item  : sabzi','Aligarh','2018-07-11 22:50:26'),(62,'Swaleh Mujeeb  ,      Add-Item  : Jam bread','Aligarh','2018-07-11 22:51:12'),(63,'Swaleh Mujeeb  ,      Add-Item  : dahi','Aligarh','2018-07-11 22:51:32'),(64,'Swaleh Mujeeb  ,      Add-Item  : Butter','Aligarh','2018-07-11 22:52:03'),(65,'Swaleh Mujeeb  ,      Add-Item  : Lifeboy soap','Aligarh','2018-07-20 17:15:23'),(66,'Swaleh Mujeeb  ,      Add-Item  : slipper','Aligarh','2018-07-25 23:11:08'),(67,'Swaleh Mujeeb  ,      Add-Item  : Bread','Aligarh','2018-07-25 23:11:42'),(68,'Swaleh Mujeeb  ,      Add-Item  : bread','Aligarh','2018-07-25 23:12:40'),(69,'Swaleh Mujeeb  ,      Add-Item  : sabzi','Aligarh','2018-07-25 23:13:17'),(70,'Swaleh Mujeeb  ,      Add-Item  : Gass refill','Aligarh','2018-07-25 23:13:51'),(71,'Swaleh Mujeeb  ,      Add-Item  : Eggs','Aligarh','2018-07-25 23:14:31'),(72,'Swaleh Mujeeb  ,      Add-Item  : water','Aligarh','2018-07-25 23:14:56'),(73,'Swaleh Mujeeb  ,      Add-Item  : Nahari','Aligarh','2018-07-25 23:15:39'),(74,'Swaleh Mujeeb  ,      Add-Item  : roti','Aligarh','2018-07-25 23:16:02'),(75,'Swaleh Mujeeb  ,      Add-Item  : colddrink','Aligarh','2018-07-25 23:16:37'),(76,'Swaleh Mujeeb  ,      Add-Item  : eggs crat milk','Aligarh','2018-07-25 23:17:22'),(77,'Swaleh Mujeeb  ,      Add-Item  : kabab paratha','Aligarh','2018-07-25 23:18:12'),(78,'Swaleh Mujeeb  ,      Add-Item  : milk','Aligarh','2018-07-25 23:18:38'),(79,'Swaleh Mujeeb  ,      Add-Item  : eggs bread','Aligarh','2018-07-25 23:19:07'),(80,'Swaleh Mujeeb  ,      Add-Item  : dinner','Aligarh','2018-07-25 23:20:03'),(81,'Swaleh Mujeeb  ,      Add-Item  : fruti','Aligarh','2018-07-25 23:20:31'),(82,'Swaleh Mujeeb  ,      Add-Item  : biscuits','Aligarh','2018-07-25 23:21:09'),(83,'Swaleh Mujeeb  ,      Add-Item  : butter','Aligarh','2018-07-25 23:21:28'),(84,'Swaleh Mujeeb  ,      Add-Item  : Ration','Aligarh','2018-07-25 23:22:17'),(85,'Swaleh Mujeeb  ,      Add-Item  : ice','Aligarh','2018-07-25 23:23:02'),(86,'Swaleh Mujeeb  ,      Add-Item  : dinner','Aligarh','2018-08-01 22:59:13'),(87,'Swaleh Mujeeb  ,      Add-Item  : breakfast','Aligarh','2018-08-01 23:00:02'),(88,'Swaleh Mujeeb  ,      Add-Item  : roti','Aligarh','2018-08-01 23:00:31'),(89,'Swaleh Mujeeb  ,      Add-Item  : Water','Aligarh','2018-08-01 23:00:55'),(90,'Swaleh Mujeeb  ,      Add-Item  : Dinner','Aligarh','2018-08-01 23:01:16'),(91,'Farhan KhanBorrow Rs.1107 From Khawar Khan','Aligarh','2018-08-01 23:08:09'),(92,'Farhan Khan  ,      Settled Account','Aligarh','2018-08-01 23:30:20'),(93,'Swaleh Mujeeb  ,      Add-Item  : Dinner','Aligarh','2018-08-08 22:16:13'),(94,'Swaleh Mujeeb  ,      Add-Item  : Dinner Milk papey','Aligarh','2018-08-08 22:16:44'),(95,'Swaleh Mujeeb  ,      Add-Item  : Breakfast egg crat tea Etc','Aligarh','2018-08-08 22:17:37'),(96,'Swaleh Mujeeb  ,      Add-Item  : ice water','Aligarh','2018-08-08 22:17:59'),(97,'Swaleh Mujeeb  ,      Add-Item  : khooda','Aligarh','2018-08-08 22:18:29'),(98,'Swaleh Mujeeb  ,      Add-Item  : ice','Aligarh','2018-08-08 22:18:46'),(99,'Swaleh Mujeeb  ,      Add-Item  : sabzi','Aligarh','2018-08-08 22:19:08'),(100,'Swaleh Mujeeb  ,      Add-Item  : newspaper','Aligarh','2018-08-08 22:19:33'),(101,'Swaleh Mujeeb  ,      Add-Item  : bread ice','Aligarh','2018-08-08 22:20:01'),(102,'Swaleh Mujeeb  ,      Add-Item  : roti ice','Aligarh','2018-08-08 22:20:24'),(103,'Swaleh Mujeeb  ,      Add-Item  : Water','Aligarh','2018-08-09 21:40:07'),(104,'Swaleh MujeebBorrow Rs.477 From Khawar Khan','Aligarh','2018-08-13 21:40:03'),(105,'Swaleh Mujeeb  ,      Add-Item  : dinner','Aligarh','2018-08-13 21:56:34'),(106,'Swaleh Mujeeb  ,      Add-Item  : ice','Aligarh','2018-08-13 21:56:54'),(107,'Swaleh Mujeeb  ,      Add-Item  : Dinner','Aligarh','2018-08-13 21:57:25'),(108,'Swaleh Mujeeb  ,      Add-Item  : Dinner','Aligarh','2018-08-13 21:57:49'),(109,'Swaleh Mujeeb  ,      Settled Account','Aligarh','2018-08-13 22:00:40'),(110,'Swaleh Mujeeb  ,      Add-Item  : ration','Aligarh','2018-09-01 22:41:55'),(111,'Swaleh Mujeeb  ,      Add-Item  : dinner','Aligarh','2018-09-01 22:44:31'),(112,'Swaleh Mujeeb  ,      Add-Item  : dinner','Aligarh','2018-09-01 22:46:21'),(113,'Swaleh Mujeeb  ,      Add-Item  : Dinner','Aligarh','2018-09-01 22:46:56'),(114,'Swaleh Mujeeb  ,      Add-Item  : gas','Aligarh','2018-09-01 22:47:27'),(115,'Swaleh Mujeeb  ,      Add-Item  : Dinner','Aligarh','2018-09-01 22:47:53'),(116,'Swaleh Mujeeb  ,      Add-Item  : breakfast','Aligarh','2018-09-01 22:48:16'),(117,'Swaleh Mujeeb  ,      Add-Item  : oil','Aligarh','2018-09-01 22:48:40'),(118,'Swaleh Mujeeb  ,      Add-Item  : Milk','Aligarh','2018-09-01 22:49:05'),(119,'Swaleh Mujeeb  ,      Add-Item  : dinner','Aligarh','2018-09-01 22:49:35'),(120,'Swaleh Mujeeb  ,     Update-Item : ration ,    Record Number : 104','Aligarh','2018-09-01 22:50:15'),(121,'Swaleh Mujeeb  ,      Add-Item  : dinner','Aligarh','2018-09-01 22:51:54'),(122,'Swaleh MujeebBorrow Rs.473 From Khawar Khan','Aligarh','2018-09-06 09:51:50'),(123,'Farhan KhanBorrow Rs.153 From Khawar Khan','Aligarh','2018-09-06 16:00:21'),(124,'Swaleh Mujeeb  ,     Update-Item : dinner ,    Record Number : 114','Aligarh','2018-09-06 23:04:42'),(125,'Swaleh Mujeeb  ,      Add-Item  : shift','Aligarh','2018-09-06 23:09:39'),(126,'Swaleh Mujeeb  ,      Add-Item  : Rent','Aligarh','2018-09-06 23:10:18'),(127,'Swaleh Mujeeb  ,      Settled Account','Aligarh','2018-09-06 23:10:45'),(128,'Swaleh Mujeeb  ,      Add-Item  : Dinner','Aligarh','2018-09-06 23:12:40'),(129,'Swaleh Mujeeb  ,      Add-Item  : Dinner','Aligarh','2018-09-06 23:13:30'),(130,'Swaleh Mujeeb  ,      Add-Item  : Milk','Aligarh','2018-09-06 23:14:53'),(131,'Swaleh Mujeeb  ,      Add-Item  : water','Aligarh','2018-09-06 23:15:22'),(132,'Swaleh Mujeeb  ,      Add-Item  : Fast food','Aligarh','2018-09-06 23:15:57'),(133,'Swaleh Mujeeb  ,      Add-Item  : Chicken','Aligarh','2018-09-06 23:16:29'),(134,'Swaleh Mujeeb  ,      Add-Item  : breakfast','Aligarh','2018-09-06 23:17:11'),(135,'Swaleh Mujeeb  ,      Add-Item  : Allu','Aligarh','2018-09-06 23:18:27'),(136,'Swaleh Mujeeb  ,      Add-Item  : Handwash','Aligarh','2018-09-10 12:53:00'),(137,'Swaleh Mujeeb  ,      Add-Item  : Tomato Sous','Aligarh','2018-09-10 12:55:36'),(138,'Swaleh Mujeeb  ,     Update-Item : Handwash ,    Record Number : 128','Aligarh','2018-09-10 12:56:05'),(139,'Faisal Khan  ,      Add-Item  : Milk','Aligarh','2018-09-11 02:53:26'),(140,'Faisal Khan  ,      Add-Item  : Dinner','Aligarh','2018-09-11 02:53:58'),(141,'Swaleh Mujeeb  ,      Add-Item  : Eggs','Aligarh','2018-09-12 21:19:01'),(142,'Swaleh Mujeeb  ,      Add-Item  : Parathe','Aligarh','2018-09-12 21:19:48'),(143,'Swaleh Mujeeb  ,      Add-Item  : Parathe','Aligarh','2018-09-12 21:20:31'),(144,'Swaleh Mujeeb  ,      Add-Item  : Roti','Aligarh','2018-09-12 21:21:08'),(145,'Swaleh Mujeeb  ,      Add-Item  : Water','Aligarh','2018-09-12 21:22:09'),(146,'Zohaib KhanBorrow Rs.313 From Swaleh Mujeeb','Aligarh','2018-09-12 21:28:42'),(147,'Khawar KhanBorrow Rs.10 From Swaleh Mujeeb','Aligarh','2018-09-12 21:31:22'),(148,'Khawar KhanBorrow Rs.50 From Farhan Khan','Aligarh','2018-09-12 21:31:47'),(149,'Swaleh Mujeeb  ,      Settled Account','Aligarh','2018-09-12 21:35:58'),(150,'Swaleh Mujeeb  ,      Add-Item  : Milk','Aligarh','2018-09-14 18:39:48'),(151,'Swaleh Mujeeb  ,      Add-Item  : Bhindi allu shimla mirch','Aligarh','2018-09-15 11:00:26'),(152,'Swaleh Mujeeb  ,      Add-Item  : onion tomato','Aligarh','2018-09-15 11:00:52'),(153,'Swaleh Mujeeb  ,      Add-Item  : Dinner','Aligarh','2018-09-15 11:01:42'),(154,'Faisal Khan  ,      Add-Item  : Water','Aligarh','2018-09-18 21:13:22'),(155,'Faisal Khan  ,      Add-Item  : Roti','Aligarh','2018-09-18 21:14:10'),(156,'Faisal Khan  ,      Add-Item  : Roti','Aligarh','2018-09-18 21:15:02'),(157,'Swaleh Mujeeb  ,      Add-Item  : Dinner','Aligarh','2018-09-22 00:10:30'),(158,'Swaleh Mujeeb  ,      Add-Item  : tv Recharge','Aligarh','2018-09-22 00:14:46'),(159,'Faisal Khan  ,      Add-Item  : Lunch tawa chicken','Aligarh','2018-09-24 21:56:44'),(160,'Faisal Khan  ,      Add-Item  : Maggie and shampoo','Aligarh','2018-09-24 22:01:05'),(161,'Faisal Khan  ,      Add-Item  : Samaan maggie and namkeen','Aligarh','2018-09-24 22:08:41'),(162,'Faisal Khan  ,     Update-Item : Samaan maggie and namkeen ,    Record Number : 148','Aligarh','2018-09-24 22:09:27'),(163,'Faisal Khan  ,      Add-Item  : Dinner','Aligarh','2018-09-25 15:16:41'),(164,'Faisal Khan  ,      Add-Item  : Cold drink','Aligarh','2018-09-25 15:17:46'),(165,'Faisal Khan  ,      Add-Item  : Samaan','Aligarh','2018-09-27 19:56:43'),(166,'Faisal Khan  ,      Add-Item  : Dinner','Aligarh','2018-09-28 12:43:24'),(167,'Faisal Khan  ,      Add-Item  : Parathe','Aligarh','2018-10-01 21:44:34'),(168,'Faisal Khan  ,      Add-Item  : Parathe','Aligarh','2018-10-01 21:45:09'),(169,'Faisal Khan  ,      Add-Item  : Namkeen maggie milk','Aligarh','2018-10-07 04:10:17'),(170,'Faisal Khan  ,      Add-Item  : Dinner','Aligarh','2018-10-09 20:02:02'),(171,'Faisal Khan  ,      Add-Item  : Harpick and addonil','Aligarh','2018-10-09 20:03:02'),(172,'Faisal Khan  ,      Add-Item  : Egg','Aligarh','2018-10-10 04:36:14'),(173,'Swaleh Mujeeb  ,      Add-Item  : breakfast','Aligarh','2018-10-11 22:35:53'),(174,'Swaleh Mujeeb  ,     Update-Item : breakfast ,    Record Number : 159','Aligarh','2018-10-11 22:40:49'),(175,'Faisal Khan  ,      Add-Item  : Sauce and water','Aligarh','2018-10-11 22:42:04'),(176,'Faisal Khan  ,      Add-Item  : Egg','Aligarh','2018-10-11 22:43:20'),(177,'Swaleh Mujeeb  ,     Update-Item : breakfast ,    Record Number : 159','Aligarh','2018-10-11 22:45:54'),(178,'Swaleh Mujeeb  ,      Add-Item  : dinner','Aligarh','2018-10-11 22:46:36'),(179,'Swaleh Mujeeb  ,      Add-Item  : dinner','Aligarh','2018-10-11 22:52:44'),(180,'Swaleh Mujeeb  ,      Add-Item  : breakfast','Aligarh','2018-10-11 22:53:10'),(181,'Swaleh Mujeeb  ,      Add-Item  : Milk','Aligarh','2018-10-11 22:53:29'),(182,'Swaleh Mujeeb  ,      Add-Item  : veg  Masala','Aligarh','2018-10-11 22:54:02'),(183,'Swaleh Mujeeb  ,      Add-Item  : bread Milk','Aligarh','2018-10-11 22:54:33'),(184,'Swaleh Mujeeb  ,      Add-Item  : Milk roti','Aligarh','2018-10-11 22:55:14'),(185,'Swaleh Mujeeb  ,      Add-Item  : Roti','Aligarh','2018-10-11 22:55:40'),(186,'Swaleh Mujeeb  ,      Add-Item  : water','Aligarh','2018-10-11 22:56:05'),(187,'Swaleh Mujeeb  ,      Add-Item  : breakfast roti','Aligarh','2018-10-11 22:56:59'),(188,'Swaleh Mujeeb  ,      Add-Item  : milk','Aligarh','2018-10-11 22:57:22'),(189,'Swaleh Mujeeb  ,      Add-Item  : lunch','Aligarh','2018-10-11 22:57:51'),(190,'Swaleh Mujeeb  ,      Add-Item  : breakfast','Aligarh','2018-10-11 22:58:27'),(191,'Swaleh Mujeeb  ,      Add-Item  : Maggi','Aligarh','2018-10-11 22:58:55'),(192,'Swaleh Mujeeb  ,      Add-Item  : milk egg','Aligarh','2018-10-11 22:59:29'),(193,'Swaleh Mujeeb  ,      Add-Item  : cold drink','Aligarh','2018-10-11 23:00:01'),(194,'Swaleh Mujeeb  ,      Add-Item  : dinner','Aligarh','2018-10-11 23:00:26'),(195,'Swaleh Mujeeb  ,      Add-Item  : Pani','Aligarh','2018-10-11 23:00:53'),(196,'Swaleh Mujeeb  ,      Add-Item  : catch up','Aligarh','2018-10-11 23:01:16'),(197,'Swaleh Mujeeb  ,      Add-Item  : Gas Refll','Aligarh','2018-10-11 23:14:31'),(198,'Swaleh Mujeeb  ,     Update-Item : lunch ,    Record Number : 173','Aligarh','2018-10-11 23:15:14'),(199,'Faisal KhanBorrow Rs.135 From Zohaib Khan','Aligarh','2018-10-11 23:28:53'),(200,'Faisal KhanBorrow Rs.65 From Farhan Khan','Aligarh','2018-10-11 23:29:07'),(201,'Faisal KhanBorrow Rs.49 From Swaleh Mujeeb','Aligarh','2018-10-11 23:29:22'),(202,'Swaleh Mujeeb  ,      Settled Account','Aligarh','2018-10-11 23:30:56'),(203,'Faisal KhanBorrow Rs.1105 From Zohaib Khan','Aligarh','2018-10-12 00:20:52'),(204,'Faisal KhanBorrow Rs.505 From Swaleh Mujeeb','Aligarh','2018-10-12 00:21:12'),(205,'Faisal KhanBorrow Rs.56 From Farhan Khan','Aligarh','2018-10-12 00:21:27'),(206,'Farhan Khan  ,      Add-Item  : Tomato Sauce','Aligarh','2018-10-16 13:47:18'),(210,'Farhan Khan  ,      Add-Item  : Egg tray','Aligarh','2018-10-17 10:17:43'),(218,'Faisal Khan  ,      Add-Item  : Veg','Aligarh','2018-10-17 23:41:31'),(219,'Swaleh Mujeeb  ,     Update-Item : Dinner ,    Record Number : 185','Aligarh','2018-10-22 23:01:44'),(220,'Faisal Khan  ,      Add-Item  : Parathe and cold drink','Aligarh','2018-10-31 02:13:00'),(221,'Swaleh Mujeeb  ,      Add-Item  : Gas Refill','Aligarh','2018-10-31 22:27:20'),(222,'Swaleh Mujeeb  ,      Add-Item  : Roti ','Aligarh','2018-10-31 22:27:57'),(223,'Swaleh Mujeeb  ,      Add-Item  : Onion potatoes','Aligarh','2018-10-31 22:29:58'),(227,'Zohaib Khan  ,      Add-Item  : water','Aligarh','2018-11-04 22:19:46'),(228,'Zohaib Khan  ,      Add-Item  : water','Aligarh','2018-11-04 22:20:24'),(229,'Zohaib Khan  ,      Add-Item  : water','Aligarh','2018-11-04 22:22:05'),(230,'Swaleh Mujeeb  ,      Add-Item  : bread milk','Aligarh','2018-11-06 01:52:50'),(231,'Swaleh Mujeeb  ,      Add-Item  : tooth paste','Aligarh','2018-11-07 12:13:45'),(232,'Swaleh Mujeeb  ,      Add-Item  : Dinner','Aligarh','2018-11-11 21:25:19'),(233,'Swaleh Mujeeb  ,      Add-Item  : E riskshaw','Aligarh','2018-11-12 10:24:40'),(234,'Swaleh Mujeeb  ,      Add-Item  : Water','Aligarh','2018-11-14 20:37:45'),(235,'Farhan Khan  ,      Add-Item  : Pani','Aligarh','2018-11-27 21:06:57'),(236,'Farhan Khan  ,      Add-Item  : Hand wash','Aligarh','2018-11-27 23:18:14'),(237,'Farhan Khan  ,      Add-Item  : Sauce','Aligarh','2018-11-27 23:19:19'),(238,'Farhan Khan  ,      Add-Item  : Breakfast','Aligarh','2018-11-27 23:19:55'),(239,'Swaleh Mujeeb  ,      Add-Item  : Water','Aligarh','2018-11-29 08:13:18'),(240,'Farhan Khan  ,      Add-Item  : Milk Coffee','Aligarh','2018-12-01 23:06:30'),(241,'Faisal Khan  ,      Add-Item  : Paratha','Aligarh','2018-12-09 21:18:01'),(242,'Faisal Khan  ,      Add-Item  : Catchup','Aligarh','2018-12-09 21:19:09'),(243,'Faisal Khan  ,      Add-Item  : Maggie','Aligarh','2018-12-09 21:19:48'),(246,'Faisal Khan  ,     Update-Item : Catchup ,    Record Number : 206','Aligarh','2018-12-10 07:47:53'),(247,'Faisal Khan  ,     Update-Item : Maggie ,    Record Number : 207','Aligarh','2018-12-10 07:48:03'),(248,'Swaleh Mujeeb  ,      Settled Account','Aligarh','2018-12-11 18:11:48'),(249,'Zohaib Khan  ,      Add-Item  : water','Aligarh','2018-12-12 21:56:19'),(250,'Swaleh Mujeeb  ,      Add-Item  : Dinner','Aligarh','2018-12-14 15:37:28'),(251,'Farhan Khan  ,      Add-Item  : Gas Refill','Aligarh','2018-12-18 22:50:19'),(252,'Zohaib Khan  ,      Add-Item  : water','Aligarh','2018-12-19 21:44:49'),(253,'Swaleh MujeebBorrow Rs.282 From Zohaib Khan','Aligarh','2018-12-19 23:25:46'),(254,'Swaleh MujeebBorrow Rs.43 From Guest Khan','Aligarh','2018-12-19 23:27:31'),(255,'Swaleh MujeebBorrow Rs.40 From Faisal Khan','Aligarh','2018-12-19 23:28:00'),(256,'Faisal Khan  ,      Add-Item  : Parathe','Aligarh','2018-12-19 23:28:45'),(257,'Farhan KhanBorrow Rs.50 From Faisal Khan','Aligarh','2018-12-19 23:29:11'),(258,'Faisal Khan  ,      Add-Item  : Harpik red','Aligarh','2018-12-19 23:29:29'),(259,'Faisal Khan  ,      Add-Item  : Maggie','Aligarh','2018-12-19 23:30:39'),(260,'Swaleh Mujeeb  ,      Add-Item  : Colgate','Aligarh','2018-12-19 23:45:29'),(261,'Farhan Khan  ,      Add-Item  : Handwash','Aligarh','2018-12-26 22:39:47'),(262,'Farhan Khan  ,      Add-Item  : Pani Bottle','Aligarh','2018-12-26 22:40:20'),(263,'Swaleh Mujeeb  ,      Settled Account','Aligarh','2019-03-24 23:31:41'),(264,'Farhan KhanBorrow Rs.20 From Faisal Khan','Aligarh','2019-03-24 23:33:27'),(265,'Farhan KhanBorrow Rs.51 From Swaleh Mujeeb','Aligarh','2019-03-24 23:33:45'),(266,'Farhan KhanBorrow Rs.160 From Zohaib Khan','Aligarh','2019-03-24 23:34:02'),(267,'Zohaib Khan  ,      Add-Item  : karamkalla','Aligarh','2019-03-25 13:17:23'),(268,'Swaleh Mujeeb  ,      Add-Item  : water','Aligarh','2019-03-25 13:18:52'),(269,'Swaleh Mujeeb  ,      Add-Item  : Rice','Aligarh','2019-03-25 13:22:16'),(270,'Swaleh Mujeeb  ,      Add-Item  : daal','Aligarh','2019-03-25 13:22:46'),(271,'Farhan Khan  ,      Add-Item  : Gas Refill','Aligarh','2019-03-26 01:42:25'),(272,'Farhan Khan  ,      Add-Item  : Handwash','Aligarh','2019-03-26 01:43:17'),(273,'Zohaib Khan  ,      Add-Item  : Papad','Aligarh','2019-03-26 12:07:50'),(274,'Farhan Khan  ,      Add-Item  : Pani','Aligarh','2019-04-02 19:05:55'),(275,'Farhan Khan  ,      Add-Item  : Dinner','Aligarh','2019-04-02 19:06:53'),(276,'Farhan Khan  ,      Add-Item  : Pani','Aligarh','2019-04-02 19:08:58'),(277,'Farhan Khan  ,      Add-Item  : Vimbar Scotch','Aligarh','2019-04-02 19:10:52'),(278,'Farhan Khan  ,      Add-Item  : Vimbar scotch','Aligarh','2019-04-02 20:05:58'),(279,'Swaleh Mujeeb  ,      Add-Item  : Vim and fastcard','Aligarh','2019-04-02 22:36:06'),(280,'Swaleh Mujeeb  ,      Add-Item  : cooking oil','Aligarh','2019-04-02 22:36:48'),(281,'Swaleh Mujeeb  ,      Add-Item  : Tea','Aligarh','2019-04-02 22:37:10'),(282,'Swaleh Mujeeb  ,      Add-Item  : Rice','Aligarh','2019-04-02 22:39:13'),(283,'Swaleh Mujeeb  ,      Add-Item  : Daal','Aligarh','2019-04-02 22:41:41'),(284,'Swaleh Mujeeb  ,      Add-Item  : Conflakes','Aligarh','2019-04-02 22:42:56'),(285,'Zohaib Khan  ,      Add-Item  : Koode wale k paise','Aligarh','2019-04-03 21:58:59'),(286,'Faisal Khan  ,      Add-Item  : Milk','Aligarh','2019-04-06 23:40:32'),(287,'Faisal Khan  ,      Add-Item  : Maggie and shampoo','Aligarh','2019-04-06 23:42:35'),(288,'Faisal Khan  ,      Add-Item  : Dinner last to last week roti and kawab paratha','Aligarh','2019-04-06 23:44:07'),(289,'Faisal Khan  ,      Add-Item  : Cold drink','Aligarh','2019-04-06 23:44:50'),(290,'Faisal Khan  ,      Add-Item  : Dinner with arham and whole party','Aligarh','2019-04-06 23:46:00'),(291,'Faisal Khan  ,      Add-Item  : Maggie','Aligarh','2019-04-06 23:46:39'),(292,'Faisal Khan  ,      Add-Item  : Last to last week party umair','Aligarh','2019-04-06 23:48:13'),(293,'Zohaib Khan  ,      Add-Item  : water','Aligarh','2019-04-07 14:04:50'),(294,'Faisal Khan  ,      Add-Item  : Chai','Aligarh','2019-04-08 02:07:03'),(295,'Faisal Khan  ,      Add-Item  : Coldrink','Aligarh','2019-04-08 02:07:26'),(296,'Faisal Khan  ,      Add-Item  : Shampoo','Aligarh','2019-04-08 02:08:21'),(297,'Faisal Khan  ,      Add-Item  : Handwash and coldrink','Aligarh','2019-04-08 02:09:02'),(298,'Faisal Khan  ,      Add-Item  : Dinner','Aligarh','2019-04-08 02:09:37'),(299,'Swaleh Mujeeb  ,     Update-Item : Shampoo ,    Record Number : 246','Aligarh','2019-04-08 13:49:01'),(300,'Swaleh Mujeeb  ,      Add-Item  : Dinner','Aligarh','2019-04-09 00:06:31'),(301,'Swaleh Mujeeb  ,     Update-Item : Dinner ,    Record Number : 249','Aligarh','2019-04-09 00:06:49'),(302,'Swaleh Mujeeb  ,     Update-Item : Handwash ,    Record Number : 247','Aligarh','2019-04-09 10:46:23'),(303,'Swaleh Mujeeb  ,      Add-Item  : Colddrink','Aligarh','2019-04-09 10:46:50'),(304,'Swaleh Mujeeb  ,     Update-Item : Handwash ,    Record Number : 247','Aligarh','2019-04-09 10:47:06'),(305,'Farhan Khan  ,      Add-Item  : Pani','Aligarh','2019-04-10 23:52:21'),(306,'Farhan Khan  ,      Add-Item  : Breakfast','Aligarh','2019-04-10 23:53:03'),(307,'Farhan Khan  ,      Add-Item  : Lunch','Aligarh','2019-04-10 23:53:33'),(308,'Farhan Khan  ,      Add-Item  : Dinner','Aligarh','2019-04-10 23:54:32'),(309,'Swaleh Mujeeb  ,      Add-Item  : repair AC switch seeling Fan','Aligarh','2019-04-11 08:36:42'),(310,'Swaleh Mujeeb  ,      Add-Item  : Gas refill','Aligarh','2019-04-11 21:17:53'),(311,'Farhan Khan  ,      Add-Item  : Dinner','Aligarh','2019-04-11 23:17:10'),(312,'Swaleh Mujeeb  ,      Add-Item  : kheera mirch dhaniya mirch','Aligarh','2019-04-13 08:14:02'),(313,'Zohaib Khan  ,      Add-Item  : Khira neebu','Aligarh','2019-04-13 15:40:17'),(314,'Swaleh Mujeeb  ,      Add-Item  : Water','Aligarh','2019-04-16 22:17:08'),(315,'Swaleh Mujeeb  ,      Settled Account','Aligarh','2019-04-16 22:17:43'),(316,'Swaleh MujeebBorrow Rs.550 From Zohaib Khan','Aligarh','2019-04-16 22:33:24'),(317,'Faisal KhanBorrow Rs.163 From Zohaib Khan','Aligarh','2019-04-16 22:36:43'),(318,'Faisal KhanBorrow Rs.141 From Farhan Khan','Aligarh','2019-04-16 22:43:46'),(319,'Swaleh Mujeeb  ,      Add-Item  : vegitable','Aligarh','2019-04-17 22:18:31'),(320,'Swaleh Mujeeb  ,      Add-Item  : Heeng','Aligarh','2019-04-17 22:18:54'),(321,'Swaleh Mujeeb  ,      Add-Item  : Door bell tubelight repair','Aligarh','2019-04-20 17:47:45'),(322,'Zohaib Khan  ,      Add-Item  : water','Aligarh','2019-04-21 02:27:29'),(323,'Zohaib Khan  ,      Add-Item  : pyaz','Aligarh','2019-04-21 11:54:32'),(324,'Farhan Khan  ,      Add-Item  : Roti plus dahi','Aligarh','2019-04-21 23:58:56'),(325,'Farhan Khan  ,      Add-Item  : Dinner','Aligarh','2019-04-22 00:00:00'),(326,'Farhan Khan  ,      Add-Item  : Dinner','Aligarh','2019-04-22 00:00:29'),(327,'Farhan Khan  ,      Add-Item  : Dinner','Aligarh','2019-04-22 00:01:15'),(328,'Farhan Khan  ,      Add-Item  : Breakfast','Aligarh','2019-04-22 00:01:51'),(329,'Swaleh Mujeeb  ,      Add-Item  : Bathing soap','Aligarh','2019-04-23 22:38:44'),(330,'Swaleh Mujeeb  ,      Add-Item  : Dinner','Aligarh','2019-04-23 22:39:25'),(331,'Zohaib Khan  ,      Add-Item  : dinner','Aligarh','2019-04-24 20:54:21'),(332,'Zohaib Khan  ,      Add-Item  : water','Aligarh','2019-04-25 21:27:28'),(333,'Swaleh Mujeeb  ,      Add-Item  : Refind oil','Aligarh','2019-04-27 01:09:04'),(334,'Faisal Khan  ,      Add-Item  : Maggie and milk','Aligarh','2019-04-27 02:46:54'),(335,'Faisal Khan  ,      Add-Item  : Red harpic','Aligarh','2019-04-27 02:47:28'),(336,'Faisal Khan  ,      Add-Item  : Maggie','Aligarh','2019-04-27 02:48:05'),(337,'Faisal Khan  ,      Add-Item  : Two times maggie of last mnth','Aligarh','2019-04-27 02:48:49'),(338,'Faisal Khan  ,      Add-Item  : Last one time milk','Aligarh','2019-04-27 02:49:13'),(339,'Faisal Khan  ,      Add-Item  : Amul cream','Aligarh','2019-04-27 02:54:35'),(340,'Swaleh Mujeeb  ,      Add-Item  : Bread aand eggs','Aligarh','2019-04-28 12:11:01'),(341,'Swaleh Mujeeb  ,      Add-Item  : Water','Aligarh','2019-04-28 12:20:03'),(342,'Zohaib Khan  ,      Add-Item  : lunch','Aligarh','2019-04-28 15:37:23'),(343,'Zohaib Khan  ,      Add-Item  : hair oil','Aligarh','2019-04-28 15:38:17'),(344,'Zohaib Khan  ,      Add-Item  : pizza','Aligarh','2019-04-28 22:26:22');
/*!40000 ALTER TABLE `noticemessage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `numbers`
--

DROP TABLE IF EXISTS `numbers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `numbers` (
  `n` int(11) NOT NULL,
  PRIMARY KEY (`n`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `numbers`
--

LOCK TABLES `numbers` WRITE;
/*!40000 ALTER TABLE `numbers` DISABLE KEYS */;
INSERT INTO `numbers` VALUES (1),(2),(3),(4),(5),(6);
/*!40000 ALTER TABLE `numbers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `setlement_payment`
--

DROP TABLE IF EXISTS `setlement_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `setlement_payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `groupname` varchar(45) NOT NULL,
  `ref_id` int(11) NOT NULL,
  `to_paypartnerid` varchar(45) NOT NULL,
  `to_paypartnername` varchar(45) NOT NULL,
  `to_paycurrentamount` varchar(45) NOT NULL,
  `amount` varchar(45) NOT NULL,
  `paydate` datetime NOT NULL,
  `from_paypartnerid` varchar(45) NOT NULL,
  `from_paypartnername` varchar(45) NOT NULL,
  `from_paycurrentamount` varchar(45) NOT NULL,
  `unquieToken` varchar(200) NOT NULL,
  `MinusPartnerID` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `setlement_payment`
--

LOCK TABLES `setlement_payment` WRITE;
/*!40000 ALTER TABLE `setlement_payment` DISABLE KEYS */;
INSERT INTO `setlement_payment` VALUES (1,'Aligarh',2,'6_ORR','Farhan Khan','1429','322','2018-07-07 00:10:37','3_UYIW','Swaleh Mujeeb','-322','d347af20-6a56-4493-8d01-879e5fef979c',1),(2,'Aligarh',2,'6_ORR','Farhan Khan','1107','1107','2018-08-01 23:08:09','9_OOUI','Khawar Khan','-1107','d347af20-6a56-4493-8d01-879e5fef979c',3),(3,'Aligarh',4,'3_UYIW','Swaleh Mujeeb','477','477','2018-08-13 21:40:03','9_OOUI','Khawar Khan','-489','fa47dcc9-ca15-4b15-b76a-ad6b99854ca9',6),(4,'Aligarh',7,'3_UYIW','Swaleh Mujeeb','473','473','2018-09-06 09:51:50','9_OOUI','Khawar Khan','-626','b5b709ba-0e7a-4464-a179-fbeb7f7b5f03',9),(5,'Aligarh',8,'6_ORR','Farhan Khan','154','153','2018-09-06 16:00:21','9_OOUI','Khawar Khan','-153','b5b709ba-0e7a-4464-a179-fbeb7f7b5f03',9),(6,'Aligarh',11,'5_OOYY','Zohaib Khan','313','313','2018-09-12 21:28:42','3_UYIW','Swaleh Mujeeb','-323','e5c02e67-f9f0-4173-89c5-b715f154d83f',10),(7,'Aligarh',13,'9_OOUI','Khawar Khan','60','10','2018-09-12 21:31:22','3_UYIW','Swaleh Mujeeb','-10','e5c02e67-f9f0-4173-89c5-b715f154d83f',10),(8,'Aligarh',13,'9_OOUI','Khawar Khan','50','50','2018-09-12 21:31:47','6_ORR','Farhan Khan','-50','e5c02e67-f9f0-4173-89c5-b715f154d83f',12),(9,'Aligarh',20,'7_QEWW','Faisal Khan','251','135','2018-10-11 23:28:53','5_OOYY','Zohaib Khan','-135','049cbfe0-88fe-49ad-884f-8d38164ec24f',18),(10,'Aligarh',20,'7_QEWW','Faisal Khan','116','65','2018-10-11 23:29:07','6_ORR','Farhan Khan','-65','049cbfe0-88fe-49ad-884f-8d38164ec24f',19),(11,'Aligarh',20,'7_QEWW','Faisal Khan','51','49','2018-10-11 23:29:22','3_UYIW','Swaleh Mujeeb','-49','049cbfe0-88fe-49ad-884f-8d38164ec24f',17),(12,'Aligarh',27,'7_QEWW','Faisal Khan','1667','1105','2018-10-12 00:20:52','5_OOYY','Zohaib Khan','-1105','85891aa4-bd19-4090-b8c6-9420da3b7a48',25),(13,'Aligarh',27,'7_QEWW','Faisal Khan','562','505','2018-10-12 00:21:12','3_UYIW','Swaleh Mujeeb','-505','85891aa4-bd19-4090-b8c6-9420da3b7a48',24),(14,'Aligarh',27,'7_QEWW','Faisal Khan','57','56','2018-10-12 00:21:27','6_ORR','Farhan Khan','-56','85891aa4-bd19-4090-b8c6-9420da3b7a48',26),(15,'Aligarh',29,'3_UYIW','Swaleh Mujeeb','365','282','2018-12-19 23:25:46','5_OOYY','Zohaib Khan','-282','f0a07abf-ab2f-41cc-bb3d-589036c22e63',30),(16,'Aligarh',29,'3_UYIW','Swaleh Mujeeb','83','43','2018-12-19 23:27:31','9_OOUI','Guest Khan','-43','f0a07abf-ab2f-41cc-bb3d-589036c22e63',33),(17,'Aligarh',29,'3_UYIW','Swaleh Mujeeb','40','40','2018-12-19 23:28:00','7_QEWW','Faisal Khan','-90','f0a07abf-ab2f-41cc-bb3d-589036c22e63',32),(18,'Aligarh',31,'6_ORR','Farhan Khan','50','50','2018-12-19 23:29:11','7_QEWW','Faisal Khan','-50','f0a07abf-ab2f-41cc-bb3d-589036c22e63',32),(19,'Aligarh',36,'6_ORR','Farhan Khan','231','20','2019-03-24 23:33:27','7_QEWW','Faisal Khan','-20','545b8601-a5f2-4bc6-97ca-b1bb82604157',37),(20,'Aligarh',36,'6_ORR','Farhan Khan','211','51','2019-03-24 23:33:45','3_UYIW','Swaleh Mujeeb','-51','545b8601-a5f2-4bc6-97ca-b1bb82604157',34),(21,'Aligarh',36,'6_ORR','Farhan Khan','160','160','2019-03-24 23:34:02','5_OOYY','Zohaib Khan','-160','545b8601-a5f2-4bc6-97ca-b1bb82604157',35),(22,'Aligarh',39,'3_UYIW','Swaleh Mujeeb','550','550','2019-04-16 22:33:24','5_OOYY','Zohaib Khan','-713','89b554b5-f7af-4f36-8493-3ffc976b615b',40),(23,'Aligarh',42,'7_QEWW','Faisal Khan','304','163','2019-04-16 22:36:43','5_OOYY','Zohaib Khan','-163','89b554b5-f7af-4f36-8493-3ffc976b615b',40),(24,'Aligarh',42,'7_QEWW','Faisal Khan','141','141','2019-04-16 22:43:46','6_ORR','Farhan Khan','-141','89b554b5-f7af-4f36-8493-3ffc976b615b',41);
/*!40000 ALTER TABLE `setlement_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settledmentinfo`
--

DROP TABLE IF EXISTS `settledmentinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `settledmentinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `partnerId` varchar(45) NOT NULL,
  `partnername` varchar(45) NOT NULL,
  `spend` varchar(45) NOT NULL,
  `consumed` varchar(45) NOT NULL,
  `settlementID` varchar(2000) NOT NULL,
  `dateofSettlement` datetime NOT NULL,
  `groupName` varchar(45) NOT NULL,
  `settlementBy` varchar(45) NOT NULL,
  `amountStatus` varchar(45) NOT NULL,
  `settlementStatus` varchar(45) NOT NULL,
  `currentamountStatus` varchar(45) NOT NULL,
  `unquieToken` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settledmentinfo`
--

LOCK TABLES `settledmentinfo` WRITE;
/*!40000 ALTER TABLE `settledmentinfo` DISABLE KEYS */;
INSERT INTO `settledmentinfo` VALUES (1,'3_UYIW','Swaleh Mujeeb','1631.00','1953.14','1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45','2018-07-06 23:58:30','Aligarh','3_UYIW','-322','1','0','d347af20-6a56-4493-8d01-879e5fef979c'),(2,'6_ORR','Farhan Khan','3393.00','1963.64','1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45','2018-07-06 23:58:30','Aligarh','3_UYIW','1429','1','0','d347af20-6a56-4493-8d01-879e5fef979c'),(3,'9_OOUI','Khawar Khan','769.00','1876.14','1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45','2018-07-06 23:58:30','Aligarh','3_UYIW','-1107','1','0','d347af20-6a56-4493-8d01-879e5fef979c'),(4,'3_UYIW','Swaleh Mujeeb','2124.00','1646.31','46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88','2018-08-01 23:30:20','Aligarh','6_ORR','477','1','0','fa47dcc9-ca15-4b15-b76a-ad6b99854ca9'),(5,'6_ORR','Farhan Khan','1751.00','1738.81','46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88','2018-08-01 23:30:20','Aligarh','6_ORR','12','1','0','fa47dcc9-ca15-4b15-b76a-ad6b99854ca9'),(6,'9_OOUI','Khawar Khan','1249.00','1738.81','46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88','2018-08-01 23:30:20','Aligarh','6_ORR','-489','1','0','fa47dcc9-ca15-4b15-b76a-ad6b99854ca9'),(7,'3_UYIW','Swaleh Mujeeb','1100.00','626.99','89,90,91,92,93,94,95,96,97,98,99,100,101,102,103','2018-08-13 22:00:40','Aligarh','3_UYIW','473','1','0','b5b709ba-0e7a-4464-a179-fbeb7f7b5f03'),(8,'6_ORR','Farhan Khan','781.00','626.99','89,90,91,92,93,94,95,96,97,98,99,100,101,102,103','2018-08-13 22:00:40','Aligarh','3_UYIW','154','1','1','b5b709ba-0e7a-4464-a179-fbeb7f7b5f03'),(9,'9_OOUI','Khawar Khan','0','626.99','89,90,91,92,93,94,95,96,97,98,99,100,101,102,103','2018-08-13 22:00:40','Aligarh','3_UYIW','-626','1','0','b5b709ba-0e7a-4464-a179-fbeb7f7b5f03'),(10,'3_UYIW','Swaleh Mujeeb','537.00','860.17','104,105,106,107,108,109,110,111,112,113,114,115,116,117','2018-09-06 23:10:45','Aligarh','3_UYIW','-323','1','0','e5c02e67-f9f0-4173-89c5-b715f154d83f'),(11,'5_OOYY','Zohaib Khan','530.00','216.67','104,105,106,107,108,109,110,111,112,113,114,115,116,117','2018-09-06 23:10:45','Aligarh','3_UYIW','313','1','0','e5c02e67-f9f0-4173-89c5-b715f154d83f'),(12,'6_ORR','Farhan Khan','870.00','920.17','104,105,106,107,108,109,110,111,112,113,114,115,116,117','2018-09-06 23:10:45','Aligarh','3_UYIW','-50','1','0','e5c02e67-f9f0-4173-89c5-b715f154d83f'),(13,'9_OOUI','Khawar Khan','120.00','60.00','104,105,106,107,108,109,110,111,112,113,114,115,116,117','2018-09-06 23:10:45','Aligarh','3_UYIW','60','1','0','e5c02e67-f9f0-4173-89c5-b715f154d83f'),(14,'7_QEWW','Faisal Khan','0','0','104,105,106,107,108,109,110,111,112,113,114,115,116,117','2018-09-06 23:10:45','Aligarh','3_UYIW','0','1','0','e5c02e67-f9f0-4173-89c5-b715f154d83f'),(17,'3_UYIW','Swaleh Mujeeb','421.00','470.84','118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136','2018-09-12 21:35:58','Aligarh','3_UYIW','-49','1','0','049cbfe0-88fe-49ad-884f-8d38164ec24f'),(18,'5_OOYY','Zohaib Khan','75.00','210.84','118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136','2018-09-12 21:35:58','Aligarh','3_UYIW','-135','1','0','049cbfe0-88fe-49ad-884f-8d38164ec24f'),(19,'6_ORR','Farhan Khan','0','65.50','118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136','2018-09-12 21:35:58','Aligarh','3_UYIW','-65','1','0','049cbfe0-88fe-49ad-884f-8d38164ec24f'),(20,'7_QEWW','Faisal Khan','832.00','580.84','118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136','2018-09-12 21:35:58','Aligarh','3_UYIW','251','1','0','049cbfe0-88fe-49ad-884f-8d38164ec24f'),(21,'9_OOUI','Khawar Khan','0','0','118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136','2018-09-12 21:35:58','Aligarh','3_UYIW','0','1','0','049cbfe0-88fe-49ad-884f-8d38164ec24f'),(24,'3_UYIW','Swaleh Mujeeb','327.00','832.25','137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181','2018-10-11 23:30:56','Aligarh','3_UYIW','-505','1','0','85891aa4-bd19-4090-b8c6-9420da3b7a48'),(25,'5_OOYY','Zohaib Khan','177.00','1282.24','137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181','2018-10-11 23:30:56','Aligarh','3_UYIW','-1105','1','0','85891aa4-bd19-4090-b8c6-9420da3b7a48'),(26,'6_ORR','Farhan Khan','1103.00','1159.74','137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181','2018-10-11 23:30:56','Aligarh','3_UYIW','-56','1','0','85891aa4-bd19-4090-b8c6-9420da3b7a48'),(27,'7_QEWW','Faisal Khan','3032.00','1364.74','137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181','2018-10-11 23:30:56','Aligarh','3_UYIW','1667','1','1','85891aa4-bd19-4090-b8c6-9420da3b7a48'),(28,'9_OOUI','Khawar Khan','0','0','137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181','2018-10-11 23:30:56','Aligarh','3_UYIW','0','1','0','85891aa4-bd19-4090-b8c6-9420da3b7a48'),(29,'3_UYIW','Swaleh Mujeeb','844.00','478.07','182,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207','2018-12-11 18:11:48','Aligarh','3_UYIW','365','1','0','f0a07abf-ab2f-41cc-bb3d-589036c22e63'),(30,'5_OOYY','Zohaib Khan','90.00','372.24','182,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207','2018-12-11 18:11:48','Aligarh','3_UYIW','-282','1','0','f0a07abf-ab2f-41cc-bb3d-589036c22e63'),(31,'6_ORR','Farhan Khan','403.00','352.24','182,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207','2018-12-11 18:11:48','Aligarh','3_UYIW','50','1','0','f0a07abf-ab2f-41cc-bb3d-589036c22e63'),(32,'7_QEWW','Faisal Khan','292.00','382.82','182,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207','2018-12-11 18:11:48','Aligarh','3_UYIW','-90','1','0','f0a07abf-ab2f-41cc-bb3d-589036c22e63'),(33,'9_OOUI','Guest Khan','0','43.65','182,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207','2018-12-11 18:11:48','Aligarh','3_UYIW','-43','1','0','f0a07abf-ab2f-41cc-bb3d-589036c22e63'),(34,'3_UYIW','Swaleh Mujeeb','124.00','175.25','208,209,210,211,212,213,214,215,216,217','2019-03-24 23:31:41','Aligarh','3_UYIW','-51','1','0','545b8601-a5f2-4bc6-97ca-b1bb82604157'),(35,'5_OOYY','Zohaib Khan','40.00','200.25','208,209,210,211,212,213,214,215,216,217','2019-03-24 23:31:41','Aligarh','3_UYIW','-160','1','0','545b8601-a5f2-4bc6-97ca-b1bb82604157'),(36,'6_ORR','Farhan Khan','370.00','138.25','208,209,210,211,212,213,214,215,216,217','2019-03-24 23:31:41','Aligarh','3_UYIW','231','1','0','545b8601-a5f2-4bc6-97ca-b1bb82604157'),(37,'7_QEWW','Faisal Khan','118.00','138.25','208,209,210,211,212,213,214,215,216,217','2019-03-24 23:31:41','Aligarh','3_UYIW','-20','1','0','545b8601-a5f2-4bc6-97ca-b1bb82604157'),(38,'9_OOUI','Guest Khan','0','0','208,209,210,211,212,213,214,215,216,217','2019-03-24 23:31:41','Aligarh','3_UYIW','0','1','0','545b8601-a5f2-4bc6-97ca-b1bb82604157'),(39,'3_UYIW','Swaleh Mujeeb','1230.00','679.34','218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260','2019-04-16 22:17:43','Aligarh','3_UYIW','550','1','0','89b554b5-f7af-4f36-8493-3ffc976b615b'),(40,'5_OOYY','Zohaib Khan','226.00','939.68','218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260','2019-04-16 22:17:43','Aligarh','3_UYIW','-713','1','0','89b554b5-f7af-4f36-8493-3ffc976b615b'),(41,'6_ORR','Farhan Khan','780.00','921.68','218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260','2019-04-16 22:17:43','Aligarh','3_UYIW','-141','1','0','89b554b5-f7af-4f36-8493-3ffc976b615b'),(42,'7_QEWW','Faisal Khan','1063.00','758.34','218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260','2019-04-16 22:17:43','Aligarh','3_UYIW','304','1','0','89b554b5-f7af-4f36-8493-3ffc976b615b'),(43,'9_OOUI','Guest Khan','0','0','218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260','2019-04-16 22:17:43','Aligarh','3_UYIW','0','1','0','89b554b5-f7af-4f36-8493-3ffc976b615b');
/*!40000 ALTER TABLE `settledmentinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `updaterecordinfo`
--

DROP TABLE IF EXISTS `updaterecordinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `updaterecordinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `partnerId` varchar(45) NOT NULL,
  `partnerName` varchar(45) NOT NULL,
  `dateOFInsert` date NOT NULL,
  `dateOfSpend` date NOT NULL,
  `itemName` varchar(45) NOT NULL,
  `paidby` varchar(45) NOT NULL,
  `sharedIn` varchar(500) NOT NULL,
  `totalAmountSpend` varchar(45) NOT NULL,
  `shareAmount` varchar(45) NOT NULL,
  `pairToken` varchar(45) NOT NULL,
  `issettled` varchar(45) NOT NULL,
  `updateBy` varchar(45) NOT NULL,
  `updateByID` varchar(45) NOT NULL,
  `updateRefRecordId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `updaterecordinfo`
--

LOCK TABLES `updaterecordinfo` WRITE;
/*!40000 ALTER TABLE `updaterecordinfo` DISABLE KEYS */;
INSERT INTO `updaterecordinfo` VALUES (1,'3_UYIW','Swaleh Mujeeb','2018-07-05','2018-07-05','oil milk eggs','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','161','53.67','62778113-bd9c-4591-9cfa-9228bbb53887','0','Swaleh Mujeeb','3_UYIW',41),(2,'3_UYIW','Swaleh Mujeeb','2018-09-01','2018-09-01','ration','3_UYIW','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','285','95.00','fb31f72b-eceb-4aaa-8ece-08f338034dca','0','Swaleh Mujeeb','3_UYIW',104),(3,'3_UYIW','Khawar Khan','2018-09-06','2018-09-01','dinner','9_OOUI','6_ORR__Farhan Khan,9_OOUI__Khawar Khan,3_UYIW__Swaleh Mujeeb','120','40.00','1fbdbb4f-2446-489f-a912-4648d62521c9','0','Swaleh Mujeeb','3_UYIW',114),(4,'3_UYIW','Swaleh Mujeeb','2018-09-10','2018-09-10','Handwash','3_UYIW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','40','10.00','92eacb77-3dee-4409-8f2b-2790ecf56c3c','0','Swaleh Mujeeb','3_UYIW',128),(5,'7_QEWW','Faisal Khan','2018-09-24','2018-09-21','Samaan maggie and namkeen','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','80','20.00','a88b55c5-870a-4f36-ab06-e8dc6107cd9c','0','Faisal Khan','7_QEWW',148),(6,'3_UYIW','Faisal Khan','2018-10-11','2018-10-11','breakfast','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','102','25.50','938ea8d9-63d6-4894-a89e-d199ef448ba2','0','Swaleh Mujeeb','3_UYIW',159),(7,'3_UYIW','Farhan Khan','2018-10-11','2018-10-11','breakfast','6_ORR','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','102','25.50','938ea8d9-63d6-4894-a89e-d199ef448ba2','0','Swaleh Mujeeb','3_UYIW',159),(8,'3_UYIW','Zohaib Khan','2018-10-11','2018-10-11','lunch','5_OOYY','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','287','71.75','2c4e2d57-827d-42d0-af82-f8cba66a7103','0','Swaleh Mujeeb','3_UYIW',173),(9,'3_UYIW','Swaleh Mujeeb','2018-10-16','2018-10-16','testingData','3_UYIW','3_UYIW__Swaleh Mujeeb','1','1.00','8f32933e-b376-4ad6-ab66-9457f8195e25','0','Swaleh Mujeeb','3_UYIW',183),(10,'3_UYIW','Swaleh Mujeeb','2018-10-16','2018-10-16','testingData','3_UYIW','3_UYIW__Swaleh Mujeeb','2','2.00','8f32933e-b376-4ad6-ab66-9457f8195e25','0','Swaleh Mujeeb','3_UYIW',183),(11,'3_UYIW','Swaleh Mujeeb','2018-10-17','2018-10-17','testing','3_UYIW','3_UYIW__Swaleh Mujeeb','1','1.00','e96b1ee1-74c1-4f3d-b4bd-84d911b8cb53','0','Swaleh Mujeeb','3_UYIW',185),(12,'3_UYIW','Swaleh Mujeeb','2018-10-17','2018-10-17','testing','3_UYIW','3_UYIW__Swaleh Mujeeb','10','10.00','e96b1ee1-74c1-4f3d-b4bd-84d911b8cb53','0','Swaleh Mujeeb','3_UYIW',185),(13,'3_UYIW','Swaleh Mujeeb','2018-10-17','2018-10-17','testing','3_UYIW','3_UYIW__Swaleh Mujeeb','1','1.00','e96b1ee1-74c1-4f3d-b4bd-84d911b8cb53','0','Swaleh Mujeeb','3_UYIW',185),(14,'3_UYIW','Swaleh Mujeeb','2018-10-17','2018-10-17','testing','3_UYIW','3_UYIW__Swaleh Mujeeb','10','10.00','e96b1ee1-74c1-4f3d-b4bd-84d911b8cb53','0','Swaleh Mujeeb','3_UYIW',185),(15,'3_UYIW','Swaleh Mujeeb','2018-10-17','2018-10-17','testing','3_UYIW','3_UYIW__Swaleh Mujeeb','1','1.00','e96b1ee1-74c1-4f3d-b4bd-84d911b8cb53','0','Swaleh Mujeeb','3_UYIW',185),(16,'3_UYIW','Swaleh Mujeeb','2018-10-17','2018-10-17','testing','3_UYIW','3_UYIW__Swaleh Mujeeb','10','10.00','e96b1ee1-74c1-4f3d-b4bd-84d911b8cb53','0','Swaleh Mujeeb','3_UYIW',185),(17,'3_UYIW','Swaleh Mujeeb','2018-10-22','2018-10-17','testing','3_UYIW','3_UYIW__Swaleh Mujeeb','1','1.00','e96b1ee1-74c1-4f3d-b4bd-84d911b8cb53','0','Swaleh Mujeeb','3_UYIW',185),(18,'3_UYIW','Swaleh Mujeeb','2018-11-02','2018-10-16','testingData','3_UYIW','3_UYIW__Swaleh Mujeeb','1','1.00','8f32933e-b376-4ad6-ab66-9457f8195e25','0','Swaleh Mujeeb','3_UYIW',183),(19,'3_UYIW','Swaleh Mujeeb','2018-11-02','2018-10-26','testingData','3_UYIW','3_UYIW__Swaleh Mujeeb','10','10.00','8f32933e-b376-4ad6-ab66-9457f8195e25','0','Swaleh Mujeeb','3_UYIW',183),(20,'3_UYIW','Swaleh Mujeeb','2018-11-02','2018-10-26','testingData','3_UYIW','3_UYIW__Swaleh Mujeeb','1','1.00','8f32933e-b376-4ad6-ab66-9457f8195e25','0','Swaleh Mujeeb','3_UYIW',183),(21,'3_UYIW','Swaleh Mujeeb','2018-12-09','2018-11-03','testingData','3_UYIW','3_UYIW__Swaleh Mujeeb','2','2.00','8f32933e-b376-4ad6-ab66-9457f8195e25','0','Faisal Khan','7_QEWW',183),(22,'7_QEWW','Faisal Khan','2018-12-10','2018-12-09','Catchup','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,9_OOUI__Guest Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','65','13.00','a1652f1b-ebb4-435a-96c6-62860063a678','0','Faisal Khan','7_QEWW',206),(23,'7_QEWW','Faisal Khan','2018-12-10','2018-12-09','Maggie','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,9_OOUI__Guest Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','62','12.40','63387409-8d1c-4526-bf2d-4915d0096add','0','Faisal Khan','7_QEWW',207),(24,'7_QEWW','Faisal Khan','2019-04-08','2019-04-08','Shampoo','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','20','5.00','84543134-3c2b-4385-abc9-2fc5f99032a0','0','Swaleh Mujeeb','3_UYIW',246),(25,'3_UYIW','Swaleh Mujeeb','2019-04-08','2019-04-09','Dinner','3_UYIW','6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','100','33.33','68fea1da-f62d-4b98-bb54-90ad37ec8ae4','0','Swaleh Mujeeb','3_UYIW',249),(26,'7_QEWW','Faisal Khan','2019-04-09','2019-04-08','Handwash and coldrink','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,3_UYIW__Swaleh Mujeeb,5_OOYY__Zohaib Khan','100','25.00','8e4d02e1-272e-48e3-94c1-bc39536f1539','0','Swaleh Mujeeb','3_UYIW',247),(27,'3_UYIW','Faisal Khan','2019-04-09','2019-04-08','Handwash','7_QEWW','7_QEWW__Faisal Khan,6_ORR__Farhan Khan,5_OOYY__Zohaib Khan','75','25.00','8e4d02e1-272e-48e3-94c1-bc39536f1539','0','Swaleh Mujeeb','3_UYIW',247);
/*!40000 ALTER TABLE `updaterecordinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'webapidb'
--

--
-- Dumping routines for database 'webapidb'
--
/*!50003 DROP PROCEDURE IF EXISTS `AddPartnerInfo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `AddPartnerInfo`(
IN `Id_` int,
IN `fname_` varchar(50),
IN `email_` varchar(50),
IN `mobile_` varchar(50), 
IN `isActive_` varchar(50), 
IN `lname_` varchar(50), 
IN `accounttype_` varchar(50), 
IN `ppassword_` varchar(50),
IN `dateofjoin_` varchar(50), 
IN `roomname_` varchar(50), 
IN `partnerID_` varchar(50)

)
BEGIN
DECLARE temp varchar(10);
DECLARE tempid int;
DECLARE checktempid int;
DECLARE temstr varchar(100);
SELECT COUNT(*) into checktempid FROM `addpartnerinfo`  WHERE mobile=mobile_;
	IF Id_= 0 THEN
		IF checktempid= 0 THEN
			SET temp=CONCAT(SUBSTRING('1234567890',(round((rand()*10),0)),1),'_',SUBSTRING('QWERTYUIOPASDFGHJKLZXCVBNM',(round((rand()*10),0)),1),SUBSTRING('QWERTYUIOPASDFGHJKLZXCVBNM',(round((rand()*10),0)),1),SUBSTRING('QWERTYUIOPASDFGHJKLZXCVBNM',(round((rand()*10),0)),1),SUBSTRING('QWERTYUIOPASDFGHJKLZXCVBNM',(round((rand()*10),0)),1));
			INSERT INTO `addpartnerinfo`(`fname`  ,`mobile`  ,`isActive`  ,`lname`,`email`  ,`accounttype` ,`partnerID` ,`ppassword` ,`dateofjoin`  ,`roomname` ) 
			VALUES(fname_  ,mobile_  ,isActive_  ,lname_ ,email_ ,accounttype_,temp  ,ppassword_ ,CURDATE()  ,temp );
			
			SET tempid = LAST_INSERT_ID();
			SELECT partnerID FROM `addpartnerinfo`  WHERE id=tempid;
		else
			SELECT 'Already Exist' AS partnerID;
        END IF;
	elseif  accounttype_='Admin' THEN
		UPDATE addpartnerinfo SET accounttype='Normal'  WHERE roomname=(SELECT roomname FROM addpartnerinfo WHERE  partnerID=partnerID_ LIMIT 1);
		UPDATE addpartnerinfo SET mobile=mobile_ ,email=email_ ,accounttype=accounttype_  WHERE id=id_ AND  partnerID=partnerID_;
	elseif ppassword_='xxxxxx' THEN
		UPDATE addpartnerinfo SET mobile=mobile_ ,email=email_  ,ppassword=ppassword_ WHERE id=id_ AND  partnerID=partnerID_;

    END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAccountentries` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `getAccountentries`(
IN`groupname_` VARCHAR(45)
)
BEGIN
	select * from account_records where issettled='0' and groupname=groupname_ order by id desc;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAccountEntriesById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAccountEntriesById`(
IN `Id_` int,
IN`groupname_` VARCHAR(45)
)
BEGIN
		IF Id_= 0 THEN
			SELECT * FROM account_records WHERE groupname=groupname_ order by dateOfSpend;
            else
            SELECT * FROM account_records  where groupname=groupname_ AND id=Id_;
            END IF;
        
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAccountEntriesHistoryById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAccountEntriesHistoryById`(
IN `Id_` int
)
BEGIN

            SELECT * FROM UpdateRecordInfo  where updateRefRecordId=Id_;
           
        
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllDataIn_ONE` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllDataIn_ONE`(
IN `groupname_` varchar(50)
)
BEGIN
	CALL GetAllPartners(groupname_);
    CALL getnoticeMessageP(groupname_);
    CALL getAccountentries(groupname_);
    CALL getDashboardValue(groupname_);
    CALL getSettlementValues(groupname_);
    CALL getGetAllAccountHistory(groupname_);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllPartners` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetAllPartners`(
IN`groupname_` VARCHAR(45)
)
BEGIN
select * from addpartnerinfo WHERE roomname=groupname_  order by fname;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllSettlementPaymentHistoryByToken` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllSettlementPaymentHistoryByToken`(
IN `groupName_` varchar(50),
IN `uniqueToken_` varchar(50)
)
BEGIN
	
		SELECT * FROM setlement_payment WHERE unquieToken=uniqueToken_ AND groupname=groupName_  ORDER BY id asc;
   
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllSettlements` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `getAllSettlements`(
IN `roomname_` varchar(50),
IN `opts_` varchar(100)
)
BEGIN
DECLARE temp varchar(1000);
	IF opts_= '0' THEN
		select CONCAT('Settlement Of - ', DATE_FORMAT(si.dateofSettlement, '%d/%m/%Y'))AS dateofSettleUp ,si.unquieToken AS token  from settledmentinfo AS si WHERE si.groupName=roomname_  group by  token order by si.dateofSettlement desc;    
	else IF roomname_= 'settlementData' THEN
		select partnername AS PartnerName,spend AS Spended,consumed AS Consumed,amountStatus AS Balance from settledmentinfo WHERE unquieToken=opts_ order by partnername ;
	else
        SELECT settlementID INTO temp from settledmentinfo WHERE unquieToken=opts_ LIMIT 1;
		SET @s =CONCAT('SELECT DATE_FORMAT(dateOfSpend, "%d/%m/%Y") AS dateOfSpend_,partnerName AS partnerName_,itemName AS itemName_,sharedIn AS sharedIn_,totalAmountSpend AS totalAmountSpend_,shareAmount AS shareAmount_ FROM account_records where id in (',temp,')');
        PREPARE stmt3 FROM @s;
        EXECUTE stmt3;
        DEALLOCATE PREPARE stmt3;
	END IF;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getDashboardValue` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `getDashboardValue`(
IN`groupname_` VARCHAR(45)
)
BEGIN
	
    
SELECT TotalSpend.spendPartnern AS partnerName, TotalSpend.spendAmount,TotalConsume.consumeAmount,(CAST(TotalSpend.spendAmount as DECIMAL(9,2))-CAST(TotalConsume.consumeAmount as DECIMAL(9,2))) AS TotalAmountStatus FROM (SELECT IFNULL(spendAmount, 0) as spendAmount,CONCAT(prt1.partnerID,'__',prt1.fname,' ',prt1.lname) as spendPartnern FROM (select sum(CAST(totalAmountSpend as DECIMAL(9,2))) AS spendAmount,CONCAT(paidby,'__',partnerName) AS spendPartner from account_records WHERE issettled='0' AND groupname=groupname_ group by paidby) AS spendTable right join addpartnerinfo prt1 ON  CONCAT(prt1.partnerID,'__',prt1.fname,' ',prt1.lname)=spendTable.spendPartner WHERE  prt1.roomname=groupname_ order by spendTable.spendPartner) as TotalSpend
   inner join  
(SELECT IFNULL(shareINTable.consumeAmount,0) as consumeAmount,CONCAT(prt.partnerID,'__',prt.fname,' ',prt.lname) as consumer FROM (SELECT sum(CAST(shareAmount as DECIMAL(9,2))) AS consumeAmount,sharedIn AS consumePartner FROM (select
  account_records.shareAmount,
  SUBSTRING_INDEX(SUBSTRING_INDEX(account_records.sharedIn, ',', numbers.n), ',', -1) sharedIn
from
  numbers inner join account_records 
  on CHAR_LENGTH(account_records.sharedIn)
     -CHAR_LENGTH(REPLACE(account_records.sharedIn, ',', ''))>=numbers.n-1  WHERE account_records.issettled='0' AND account_records.groupname=groupname_
order by
  shareAmount, n) as shareintable group by sharedIn) AS shareINTable right join addpartnerinfo prt  ON  CONCAT(prt.partnerID,'__',prt.fname,' ',prt.lname)=shareINTable.consumePartner WHERE prt.roomname=groupname_ order by shareINTable.consumePartner) AS TotalConsume on TotalSpend.spendPartnern= TotalConsume.consumer;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getGetAllAccountHistory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `getGetAllAccountHistory`(
IN`groupname_` VARCHAR(45)
)
BEGIN
	
    
SELECT TotalSpend.spendPartnern AS partnerName, TotalSpend.spendAmount,TotalConsume.consumeAmount,(CAST(TotalSpend.spendAmount as DECIMAL(9,2))-CAST(TotalConsume.consumeAmount as DECIMAL(9,2))) AS TotalAmountStatus FROM (SELECT IFNULL(spendAmount, 0) as spendAmount,CONCAT(prt1.partnerID,'__',prt1.fname,' ',prt1.lname) as spendPartnern FROM (select sum(CAST(totalAmountSpend as DECIMAL(9,2))) AS spendAmount,CONCAT(paidby,'__',partnerName) AS spendPartner from account_records WHERE  groupname=groupname_ group by paidby) AS spendTable right join addpartnerinfo prt1 ON  CONCAT(prt1.partnerID,'__',prt1.fname,' ',prt1.lname)=spendTable.spendPartner WHERE  prt1.roomname=groupname_ order by spendTable.spendPartner) as TotalSpend
   inner join  
(SELECT IFNULL(shareINTable.consumeAmount,0) as consumeAmount,CONCAT(prt.partnerID,'__',prt.fname,' ',prt.lname) as consumer FROM (SELECT sum(CAST(shareAmount as DECIMAL(9,2))) AS consumeAmount,sharedIn AS consumePartner FROM (select
  account_records.shareAmount,
  SUBSTRING_INDEX(SUBSTRING_INDEX(account_records.sharedIn, ',', numbers.n), ',', -1) sharedIn
from
  numbers inner join account_records 
  on CHAR_LENGTH(account_records.sharedIn)
     -CHAR_LENGTH(REPLACE(account_records.sharedIn, ',', ''))>=numbers.n-1  WHERE  account_records.groupname=groupname_
order by
  shareAmount, n) as shareintable group by sharedIn) AS shareINTable right join addpartnerinfo prt  ON  CONCAT(prt.partnerID,'__',prt.fname,' ',prt.lname)=shareINTable.consumePartner WHERE prt.roomname=groupname_ order by shareINTable.consumePartner) AS TotalConsume on TotalSpend.spendPartnern= TotalConsume.consumer;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getnoticeMessageP` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getnoticeMessageP`(
IN `groupname_` varchar(50)
)
BEGIN
	SELECT * FROM `noticemessage` where groupname=groupname_ order by id desc LIMIT 30;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetSettlementPaymentHistoryByID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetSettlementPaymentHistoryByID`(
IN `id_` INT,
IN `groupName_` varchar(50),
IN `uniqueToken_` varchar(50),
IN `DataFlag_`  varchar(50)
)
BEGIN
	IF DataFlag_='Plus' THEN
		SELECT * FROM setlement_payment WHERE unquieToken=uniqueToken_ AND groupname=groupName_ AND  ref_id=id_ ORDER BY id asc;
    else
			IF DataFlag_='Minus' THEN
				SELECT * FROM setlement_payment WHERE unquieToken=uniqueToken_ AND groupname=groupName_ AND MinusPartnerID=id_ ORDER BY id asc;
            else
				SELECT * FROM setlement_payment WHERE unquieToken=uniqueToken_ AND groupname=groupName_ ORDER BY id asc;
            END IF;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSettlementValues` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getSettlementValues`(
IN`groupname_` VARCHAR(45)
)
BEGIN
DECLARE unquieToken_ varchar(200);
	SELECT unquieToken INTO unquieToken_ FROM settledmentinfo where settlementStatus='0' AND groupName=groupname_ LIMIT 1;
    
		SELECT * FROM settledmentinfo where unquieToken=unquieToken_ AND groupName=groupname_;
	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getSettlementValuesById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getSettlementValuesById`(
IN `PlusAmountId_` INT,
IN `MinusAmountId_` INT,
IN`groupname_` VARCHAR(45)
)
BEGIN
	SELECT * FROM settledmentinfo where settlementStatus='0' and groupName=groupname_ AND id in (PlusAmountId_,MinusAmountId_);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertsettlementpayment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertsettlementpayment`(
IN `groupname_` varchar(50),
IN `ref_id_` INT,
IN `to_paypartnerid_` varchar(50),
IN `to_paypartnername_` varchar(50),
IN `to_paycurrentamount_` varchar(50),
IN `amount_` varchar(50),
IN `from_paypartnerid_` varchar(50),
IN `from_paypartnername_` varchar(50),
IN `from_paycurrentamount_` varchar(50),
IN `MinusCurrentAccountStatus_` varchar(50),
IN `PlusCurrentAccountStatus_` varchar(50),
IN `MinusPartnerID_` INT
)
BEGIN
DECLARE unquieToken_ varchar(200);
DECLARE settledCount_ INT;
	SELECT unquieToken INTO unquieToken_ FROM settledmentinfo WHERE id=ref_id_;
    UPDATE 	`settledmentinfo` SET settlementStatus='1' WHERE amountStatus='0' AND settlementStatus='0' AND currentamountStatus='0' AND unquieToken=unquieToken_;
    IF PlusCurrentAccountStatus_= '0' THEN
    UPDATE 	`settledmentinfo` SET currentamountStatus=PlusCurrentAccountStatus_,settlementStatus='1' WHERE id=ref_id_;
    else
    UPDATE 	`settledmentinfo` SET currentamountStatus=PlusCurrentAccountStatus_ WHERE id=ref_id_;
    END IF;
    IF MinusCurrentAccountStatus_= '0' THEN
    UPDATE 	`settledmentinfo` SET currentamountStatus=MinusCurrentAccountStatus_,settlementStatus='1' WHERE id=MinusPartnerID_;
    else
    UPDATE 	`settledmentinfo` SET currentamountStatus=MinusCurrentAccountStatus_ WHERE id=MinusPartnerID_;
    END IF;
	INSERT INTO  `setlement_payment`  (`groupname`,`ref_id`,`to_paypartnerid`,`to_paypartnername`,`to_paycurrentamount`,`amount`,`paydate`,`from_paypartnerid`,`from_paypartnername`,`from_paycurrentamount`,`unquieToken`,`MinusPartnerID`)
		VALUES(groupname_,ref_id_,to_paypartnerid_,to_paypartnername_,to_paycurrentamount_,amount_,convert_tz(NOW(),'+00:00','+05:30'),from_paypartnerid_,from_paypartnername_,from_paycurrentamount_,unquieToken_,MinusPartnerID_);
     
     
     SELECT COUNT(*)  INTO settledCount_ FROM settledmentinfo WHERE unquieToken=unquieToken_ AND settlementStatus='0';
     
     IF settledCount_=1 THEN
            UPDATE `settledmentinfo` AS vc ,(SELECT count(*) AS nc FROM settledmentinfo where unquieToken=unquieToken_ and settlementStatus='0' and currentamountStatus='0') AS ne,(SELECT count(*) AS mc FROM settledmentinfo where unquieToken=unquieToken_ and settlementStatus='0') AS me SET settlementStatus='1' where unquieToken=unquieToken_ and settlementStatus='0' and (CAST(currentamountStatus as DECIMAL(9,2))!=0 and CAST(currentamountStatus as DECIMAL(9,2))<=2 and  me.mc=1) OR (ne.nc=1 and settlementStatus='0' and currentamountStatus='0');
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertSettlementValue` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertSettlementValue`(
IN `settlementBy_` varchar(50), 
IN `groupName_` varchar(50) ,
IN `settlementStatus_` varchar(50) ,
IN 	`unquieToken_`  varchar(200)
)
BEGIN
DECLARE tempid varchar(2000);
SET tempid=(SELECT CAST(GROUP_CONCAT(id SEPARATOR ',') AS CHAR) as ids FROM account_records  where issettled=0  AND groupname=groupName_);
	
     
 
INSERT INTO `settledmentinfo`  (`partnerId`,`partnername`,`spend`,`consumed`,`settlementID`,`dateofSettlement`,`groupName`,`settlementBy`,`amountStatus`,`settlementStatus`,`currentamountStatus`,`unquieToken`)
SELECT  SUBSTRING(TotalSpend.spendPartnern,1 ,(POSITION("__" IN TotalSpend.spendPartnern)-1)) AS partnerId ,SUBSTRING(TotalSpend.spendPartnern, (POSITION("__" IN TotalSpend.spendPartnern)+2),LENGTH(TotalSpend.spendPartnern)) AS partnername, TotalSpend.spendAmount AS spend,TotalConsume.consumeAmount AS consumed, tempid AS settlementID,convert_tz(NOW(),'+00:00','+05:30') AS dateofSettlement,groupName_ AS groupName,settlementBy_ AS settlementBy,SUBSTRING((CAST(TotalSpend.spendAmount as DECIMAL(9,2))-CAST(TotalConsume.consumeAmount as DECIMAL(9,2))),1,(POSITION("." IN (CAST(TotalSpend.spendAmount as DECIMAL(9,2))-CAST(TotalConsume.consumeAmount as DECIMAL(9,2))))-1) ) AS amountStatus,settlementStatus_ AS settlementStatus ,SUBSTRING((CAST(TotalSpend.spendAmount as DECIMAL(9,2))-CAST(TotalConsume.consumeAmount as DECIMAL(9,2))),1,(POSITION("." IN (CAST(TotalSpend.spendAmount as DECIMAL(9,2))-CAST(TotalConsume.consumeAmount as DECIMAL(9,2))))-1) ) AS currentamountStatus, unquieToken_ AS unquieToken FROM (SELECT IFNULL(spendAmount, 0) as spendAmount,CONCAT(prt1.partnerID,'__',prt1.fname,' ',prt1.lname) as spendPartnern FROM (select sum(CAST(totalAmountSpend as DECIMAL(9,2))) AS spendAmount,CONCAT(paidby,'__',partnerName) AS spendPartner from account_records WHERE issettled='0'  AND groupname=groupName_ group by paidby) AS spendTable right join addpartnerinfo prt1 ON  CONCAT(prt1.partnerID,'__',prt1.fname,' ',prt1.lname)=spendTable.spendPartner WHERE prt1.roomname=groupName_ order by spendTable.spendPartner) as TotalSpend
   inner join  
(SELECT IFNULL(shareINTable.consumeAmount,0) as consumeAmount,CONCAT(prt.partnerID,'__',prt.fname,' ',prt.lname) as consumer FROM (SELECT sum(CAST(shareAmount as DECIMAL(9,2))) AS consumeAmount,sharedIn AS consumePartner FROM (select
  account_records.shareAmount,
  SUBSTRING_INDEX(SUBSTRING_INDEX(account_records.sharedIn, ',', numbers.n), ',', -1) sharedIn
from
  numbers inner join account_records 
  on CHAR_LENGTH(account_records.sharedIn)
     -CHAR_LENGTH(REPLACE(account_records.sharedIn, ',', ''))>=numbers.n-1   WHERE account_records.issettled='0'  AND account_records.groupname=groupName_
order by
  shareAmount, n) as shareintable group by sharedIn) AS shareINTable right join addpartnerinfo prt ON  CONCAT(prt.partnerID,'__',prt.fname,' ',prt.lname)=shareINTable.consumePartner WHERE prt.roomname=groupName_   order by shareINTable.consumePartner) AS TotalConsume on TotalSpend.spendPartnern= TotalConsume.consumer;

UPDATE account_records SET issettled='1'   WHERE  groupname=groupName_  AND issettled='0' ;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insert_accountrecord` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `insert_accountrecord`(
 IN`id_` int,
 IN`partnerId_` VARCHAR(45),
 IN`partnerName_` VARCHAR(45),
 IN`dateOfSpend_` DATETIME,
 IN`itemName_` VARCHAR(45),
 IN`paidby_` VARCHAR(45),
 IN`sharedIn_` VARCHAR(500),
 IN`totalAmountSpend_` VARCHAR(45),
 IN`shareAmount_` VARCHAR(45),
 IN`pairToken_` VARCHAR(45),
 IN`issettled_` VARCHAR(45),
 IN`groupname_` VARCHAR(45)
)
BEGIN
DECLARE temp varchar(50);
SET temp=(SELECT CONCAT(fname,' ',lname) AS partnerName FROM addpartnerinfo WHERE partnerID=partnerId_);
	IF id_=0 THEN
		INSERT INTO `account_records` (`partnerId`,`partnerName`,`dateOFInsert`,`dateOfSpend`,`itemName`,`paidby`,`sharedIn`,`totalAmountSpend`,`shareAmount`,`pairToken`,`issettled`,`groupname`) VALUES(partnerId_,partnerName_,CURDATE(),dateOfSpend_,itemName_,paidby_,sharedIn_,totalAmountSpend_,shareAmount_,pairToken_,issettled_,groupname_);
	else
    INSERT INTO `updaterecordinfo` (`partnerId`,`partnerName`,`dateOFInsert`,`dateOfSpend`,`itemName`,`paidby`,`sharedIn`,`totalAmountSpend`,`shareAmount`,`pairToken`,`issettled`,`updateBy`,`updateByID`,`updateRefRecordId`)  
SELECT partnerId,partnerName,CURDATE() AS dateOFInsert,dateOfSpend,itemName,paidby,sharedIn,totalAmountSpend,shareAmount,pairToken,issettled,temp AS updateBy,partnerId_ AS updateByID,id_ AS updateRefRecordId FROM account_records where id=id_;
    UPDATE account_records   SET partnerId=partnerId_,partnerName=partnerName_,dateOfSpend=dateOfSpend_,itemName=itemName_,paidby=paidby_,sharedIn=sharedIn_,totalAmountSpend=totalAmountSpend_,shareAmount=shareAmount_  where id=id_;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Login_GetLoginDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `Login_GetLoginDetails`(
IN `ppassword_` varchar(50),
IN `partnerID_` varchar(50)
)
BEGIN
	select * from addpartnerinfo where ppassword=ppassword_ and  (partnerID=partnerID_ or mobile=partnerID_ ) and isActive='true' order by id asc;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `multiple_procedure` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `multiple_procedure`()
BEGIN
		CALL GetAccountEntriesById(1,'Aligarh');
		CALL getDashboardValue('TEST');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Multi_procedure` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Multi_procedure`()
BEGIN
	CALL GetAccountEntriesById(1,'Aligarh');
    CALL getGetAllAccountHistory('Aligarh');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `noticeMessageP` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `noticeMessageP`(
IN `message_` varchar(500),
IN `groupname_` varchar(45),
IN `insertdate_` datetime
)
BEGIN
	INSERT INTO `noticemessage`(`message`,`groupname`,`insertdate`) VALUES(message_,groupname_,convert_tz(NOW(),'+00:00','+05:30'));
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `searchAdmin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `searchAdmin`(
IN `mobile_` varchar(10)
)
BEGIN
select CONCAT(fname,lname) AS adminName,mobile,isActive,email,accounttype,partnerID,roomname as groupName from addpartnerinfo AS PI where mobile=mobile_ and accounttype='Admin';
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SetActiveInactive` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SetActiveInactive`(
IN `Id_` int,
IN `IsActive_` VARCHAR(45)
)
BEGIN
UPDATE `addpartnerinfo` SET isActive=IsActive_ WHERE id=Id_;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-01 12:22:44
