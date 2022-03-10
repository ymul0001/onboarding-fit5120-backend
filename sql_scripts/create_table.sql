--
-- Table structure for table `average_yield_cost`
--

DROP TABLE IF EXISTS `average_yield_cost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `average_yield_cost` (
  `collection_system_litre` int DEFAULT NULL,
  `cost_per_tonne_dollars` int DEFAULT NULL,
  `cost_per_property_serviced_dollars` int DEFAULT NULL,
  `yield_per_property_serviced` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `collection`
--

DROP TABLE IF EXISTS `collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collection` (
  `locality` varchar(50) DEFAULT NULL,
  `collected_day` varchar(50) DEFAULT NULL,
  `recommended_day` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contamination_rate`
--

DROP TABLE IF EXISTS `contamination_rate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contamination_rate` (
  `year` int DEFAULT NULL,
  `contamination_rate` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `kerbside_recycleable`
--

DROP TABLE IF EXISTS `kerbside_recycleable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kerbside_recycleable` (
  `year` int DEFAULT NULL,
  `metro_tonnes_collected` int DEFAULT NULL,
  `metro_tonnes_sorted` int DEFAULT NULL,
  `non_metro_tonnes_collected` int DEFAULT NULL,
  `non_metro_tonnes_sorted` int DEFAULT NULL,
  `state_tonnes_collected` int DEFAULT NULL,
  `state_tonnes_sorted` int DEFAULT NULL,
  `state_yield_property_serviced` int DEFAULT NULL,
  `state_yield_person` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;