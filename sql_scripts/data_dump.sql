-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: wongso-db.cilapmewhv5h.ap-southeast-1.rds.amazonaws.com    Database: onboarding
-- ------------------------------------------------------
-- Server version	8.0.23

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Dumping data for table `average_yield_cost`
--

LOCK TABLES `average_yield_cost` WRITE;
/*!40000 ALTER TABLE `average_yield_cost` DISABLE KEYS */;
INSERT INTO `average_yield_cost` VALUES (80,284,106,372),(120,239,109,455),(140,275,136,493),(240,224,116,518);
/*!40000 ALTER TABLE `average_yield_cost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `collection`
--

LOCK TABLES `collection` WRITE;
/*!40000 ALTER TABLE `collection` DISABLE KEYS */;
INSERT INTO `collection` VALUES ('Flemington','Thursday','Wednesday\r'),('Kensington','Thursday','Wednesday\r'),('North Melbourne','Monday','Sunday\r'),('Parkville','Monday','Monday'),('Carlton North','Wednesday','Tuesday\r'),('Carlton','Wednesday','Tuesday\r'),('Melbourne','Tuesday','Monday\r'),('West Melbourne','Thursday','Wednesday\r'),('East Melbourne','Friday','Thursday\r'),('Jolimont','Friday','Thursday\r'),('Southbank','Tuesday','Monday\r'),('South Yarra','Tuesday','Monday\r'),('Docklands','Tuesday','Monday\r'),('Port Melbourne','Tuesday','Monday\r'),('Fishermans Bend','Tuesday','Monday\r'),('Clayton','Friday','Thursday\r'),('Burwood','Friday','Thursday\r'),('Box Hill','Weekday','Friday'),('Mount Waverley','Friday','Thursday\r'),('Glen Waverley','Friday','Thursday\r'),('St Kilda','Thursday','Wednesday\r'),('Mulgrave','Thursday','Wednesday\r'),('Dandenong','Thursday','Wednesday\r'),('Knoxfield','Thursday','Wednesday\r'),('Cranbourne','Thursday','Wednesday\r'),('Menton','Tuesday','Monday\r'),('Brighton','Tuesday','Monday\r'),('Frankston','Tuesday','Monday\r'),('Belgrave','Tuesday','Monday\r'),('Point Cook','Tuesday','Monday\r'),('Glen Iris','Wednesday','Tuesday\r'),('Toorak','Wednesday','Tuesday\r'),('Oakleigh','Wednesday','Tuesday\r'),('Huntingdale','Wednesday','Tuesday\r'),('Camberwell','Wednesday','Tuesday\r'),('Ashwood','Tuesday','Monday\r'),('Bentleigh','Tuesday','Monday\r'),('Mckinnon','Tuesday','Monday\r'),('Ormand','Tuesday','Monday\r'),('Elwood','Tuesday','Monday');
/*!40000 ALTER TABLE `collection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `contamination_rate`
--

LOCK TABLES `contamination_rate` WRITE;
/*!40000 ALTER TABLE `contamination_rate` DISABLE KEYS */;
INSERT INTO `contamination_rate` VALUES (2002,7.6),(2003,7.2),(2004,10.1),(2005,10.9),(2006,11.5),(2007,10),(2008,10.2),(2009,9),(2010,9.7),(2011,9.8),(2012,9.6),(2013,9.8),(2014,11.5),(2015,9.6),(2016,10.5),(2017,10.3),(2018,10.4),(2019,10.5),(2020,13.3);
/*!40000 ALTER TABLE `contamination_rate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `kerbside_recycleable`
--

LOCK TABLES `kerbside_recycleable` WRITE;
/*!40000 ALTER TABLE `kerbside_recycleable` DISABLE KEYS */;
INSERT INTO `kerbside_recycleable` VALUES (2002,280532,262941,78532,72519,359064,335460,196,74),(2003,312976,295291,84073,75037,397049,370328,211,81),(2004,331165,304917,100284,89001,431449,393918,224,87),(2005,376132,339659,120290,105418,496422,445077,251,98),(2006,407560,362532,128946,112451,536506,474983,270,106),(2007,424210,383734,137041,121459,561251,505193,273,109),(2008,459602,414718,144882,127445,604484,542163,289,115),(2009,454556,417916,153583,136791,608139,554707,286,113),(2010,455984,426010,157156,141299,613140,567309,283,112),(2011,461813,424180,160409,146575,622222,570755,279,112),(2012,459457,429602,159201,145444,618658,575046,273,110),(2013,442099,417731,157020,146087,599119,563818,259,104),(2014,437830,412448,157475,146745,595305,559193,252,101),(2015,434797,406996,156873,149168,591670,556164,245,98),(2016,435098,408707,155353,150265,590451,558972,241,96),(2017,433231,403825,157872,148879,591103,552704,236,94),(2018,425164,380055,157175,141631,582339,521687,229,90),(2019,409779,368551,155285,137373,565064,505924,217,86),(2020,419819,364578,152637,131931,572456,496508,216,85);
/*!40000 ALTER TABLE `kerbside_recycleable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('ymul0001','177c7294cd4272a57a7f4fcb04a2b8e0');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-10 20:04:45
