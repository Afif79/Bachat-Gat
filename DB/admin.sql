-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2019 at 02:35 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bg`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `Id` int(11) NOT NULL,
  `username` varchar(15) NOT NULL DEFAULT 'NULL',
  `email` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `Phone` bigint(20) NOT NULL,
  `Address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`Id`, `username`, `email`, `Password`, `Phone`, `Address`) VALUES
(1, 'AFIF', 'shaikhafif48@gmail.com', '123', 9769320992, ''),
(2, 'tauseef', 'tauseef@faj.com', '1234', 8362537189, ''),
(3, 'Sahil ', 'lukha@mahim.com', 'party_de_re', 9871019181, ''),
(4, 'Aashish', 'Respected@person.com', 'stevejobs', 9781028211, ''),
(5, 'Danish', 'dekhte@hai.com', '2381', 8573920475, ''),
(6, 'okjarvisa', 'tryagain@avg.com', '73127', 8573929283, ''),
(7, 'Afif Space', 'asdjias@ds.com', '8219', 8328393939, ''),
(8, 'Danish Ki video', 'sdja@dsd.com', '213', 6847389021, 'Ghatkopar se andheri'),
(9, 'sad', 'dsdh@djs.com', '273', 7839238293, 'shdu hiu'),
(10, 'Prabodh', 'praba@djd.com', '1234', 9827461904, 'KURLA DBIT'),
(11, 'pra', 'pra@gmail.com', 'pra123', 1234567890, 'kurla'),
(12, 'ariana', 'ariana@gmail.com', 'ariana', 1234567890, 'Not known'),
(13, 'a', 'a@gmail.com', 'a', 1452369870, 'Not known'),
(14, 'ab', 'ab@gmail.com', 'ab', 1452369870, 'Not known'),
(16, 'abc', 'abc@gmail.com', 'abc', 1452369874, 'Not known'),
(18, 'abcd', 'abcd@gmail.com', 'abcd', 1452369878, 'Not known'),
(21, 'abcde', 'abcde@gmail.com', 'abcde', 1452369879, 'Not known'),
(22, 'abcdef', 'abcdef@gmail.com', 'abcdef', 1236547893, 'Not known'),
(23, 'xyz', 'xyz@gmail.com', 'xyz', 5423698701, 'Not known'),
(24, 'saurabh', 'aurvir@gmail.com', 'survir', 5656565656, 'CSMT'),
(25, 'saurabhY', 'survir@gmail.com', 'surviry', 5656565656, 'CSMT');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
