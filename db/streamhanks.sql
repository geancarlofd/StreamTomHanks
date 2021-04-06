-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 06-Abr-2021 às 02:14
-- Versão do servidor: 10.1.35-MariaDB
-- versão do PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `streamhanks`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `NomeCompleto` varchar(50) CHARACTER SET utf8 NOT NULL,
  `DataNascimento` date NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Senha` varchar(50) NOT NULL,
  `Cartao_NomeCompleto` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Cartao_Numero` varchar(50) NOT NULL,
  `Cartao_Validade` varchar(50) NOT NULL,
  `Cartao_CodigoSeguranca` int(11) NOT NULL,
  `Cpf` varchar(50) NOT NULL,
  `chave` varchar(50) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id`, `NomeCompleto`, `DataNascimento`, `Email`, `Senha`, `Cartao_NomeCompleto`, `Cartao_Numero`, `Cartao_Validade`, `Cartao_CodigoSeguranca`, `Cpf`, `chave`, `status`) VALUES
(18, 'Confirmacao email teste', '2021-04-16', 'geancarlofd@gmail.com', '25d55ad283aa400af464c76d713c07ad', 'Confirmacao email teste', '888888888888888', '2021-08', 123, '22222222222222', '8cc50caf10521a04f0d329191d5ca50d', 1),
(19, 'Gisele Gabriela Cavalli', '2021-04-08', 'geancarlofd@gmail.com', '25d55ad283aa400af464c76d713c07ad', 'Gisele G C', '5555555555555555555555', '2021-08', 111, '11111111111111', 'c58ba848bb24f0a047f5362c01418317', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
