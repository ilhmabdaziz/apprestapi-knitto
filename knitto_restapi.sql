-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 13, 2021 at 07:33 AM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `knitto_restapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `materials`
--

CREATE TABLE `materials` (
  `id` int(11) NOT NULL,
  `nama` varchar(30) NOT NULL,
  `total` float NOT NULL,
  `trend` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `materials`
--

INSERT INTO `materials` (`id`, `nama`, `total`, `trend`) VALUES
(1, 'Kain Tenunan', 2499080, 2.43),
(2, 'Barang Tekstil Lainnya', 1405520, 2.34),
(3, 'Kain Rajutan', 1329870, 0.78),
(4, 'Serat filamen buatan', 684273, -0.06),
(5, 'Serat Stempel Buatan', 427087, -5.84),
(6, ' Benang Pintal', 291324, -0.83),
(7, 'Serat Tekstil', 42315.4, -0.31),
(8, 'Kain Selaman', 4231520000, -4.71),
(9, 'Sutra', 1393.9, -25.85),
(10, 'ilham abdul aziz', 1111110000, 100);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `materials`
--
ALTER TABLE `materials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
