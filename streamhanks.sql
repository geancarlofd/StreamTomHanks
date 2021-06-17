-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 17-Jun-2021 às 21:20
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
-- Estrutura da tabela `ficha_tecnica`
--

CREATE TABLE `ficha_tecnica` (
  `id` int(11) NOT NULL,
  `id_filmes` int(11) NOT NULL,
  `sinopse` varchar(700) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `duracao` varchar(20) NOT NULL,
  `diretor` varchar(50) NOT NULL,
  `producao` varchar(50) DEFAULT NULL,
  `roteiro` varchar(50) DEFAULT NULL,
  `edicao` varchar(50) DEFAULT NULL,
  `distribuicao` varchar(50) DEFAULT NULL,
  `trailer` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `ficha_tecnica`
--

INSERT INTO `ficha_tecnica` (`id`, `id_filmes`, `sinopse`, `duracao`, `diretor`, `producao`, `roteiro`, `edicao`, `distribuicao`, `trailer`) VALUES
(1, 1, 'Mesmo com o raciocínio lento, Forrest Gump nunca se sentiu desfavorecido. Graças ao apoio da mãe, ele teve uma vida normal. Seja no campo de futebol como um astro do esporte, lutando no Vietnã ou como capitão de um barco de pesca de camarão, Forrest inspira a todos com seu otimismo. Mas a pessoa que Forrest mais ama pode ser a mais difícil de salvar: seu amor de infância, a doce e perturbada Jenny.', '142', 'Robert Zemeckis', 'Wendy Finerman Steve Tisch Steve Starkey', 'Eric Roth', 'Arthur Schmidt', 'Paramount Pictures', 'https://www.youtube.com/embed/bLvqoHBptjg'),
(2, 2, 'O dedicado funcionário executivo da FedEx, Chuck Noland, viaja a trabalho para a Malásia quando o avião da empresa cai sobre o Oceano Pacífico durante uma tempestade. Como o único sobrevivente do acidente, Chuck vai parar em uma ilha deserta. Quando suas tentativas de socorro se esgotam, Chuck aprende a sobreviver na ilha.', '144', 'Robert Zemeckis', 'Jack Rapke, Robert Zemeckis, Steve Starkey e Tom H', '	William Broyles Jr.', 'Arthur Schmidt', '20th Century Fox e DreamWorks Pictures', 'https://www.youtube.com/embed/qGuOZPwLayY'),
(3, 3, 'Ao desembarcar na Normandia, no dia 6 de junho de 1944, o Capitão Miller recebe a missão de comandar um grupo do Segundo Batalhão para o resgate do soldado James Ryan, o caçula de quatro irmãos, dentre os quais três morreram em combate. Por ordens do chefe George C. Marshall, eles precisam procurar o soldado e garantir o seu retorno, com vida, para casa.', '169', 'Steven Spielberg', 'Steven Spielberg Ian Bryce Mark Gordon Gary Levins', 'Robert Rodat', 'Michael Kahn', 'DreamWorks Pictures e Paramount Pictures', 'https://www.youtube.com/embed/WdHJ_nLRjIA'),
(4, 4, 'Em 1971, os editores Katharine Graham e Ben Bradlee do Washington Post arriscam suas carreiras e liberdade para expor segredos governamentais que abrangem três décadas e quatro presidentes dos Estados Unidos.', '113', 'Steven Spielberg', 'Steven Spielberg Kristie Macosko Krieger Amy Pasca', 'Liz Hannah Josh Singer', 'Michael Kahn e Sarah Broshar', 'Universal Studios 20th Century Fox', 'https://www.youtube.com/embed/nrXlY6gzTTM'),
(5, 5, 'O filme se passa na década de 1960 e retrata a história de Frank Abagnale, que quando adolescente se disfarçava das mais diversas profissões e ganhou milhões de dólares com seus golpes.', '141', 'Steven Spielberg', 'Steven Spielberg Michel Shane Walter F. Parkes Lau', 'Jeff Nathanson (Baseado em Frank Abagnale)', 'Michael Kahn', 'DreamWorks', 'https://www.youtube.com/embed/s-7pyIxz8Qg'),
(6, 6, 'Depois que um desejo transforma o menino Josh Baskin de 12 anos em um homem de 30 anos de idade, ele vai para Nova York e começa a trabalhar em uma loja de brinquedos. O proprietário da empresa promove Josh para testar novos brinquedos. Uma colega de trabalho, Susan Lawrence, se interessa romanticamente por Josh, mas a pressão de viver como adulto começa a dominá-lo e ele anseia por retornar à sua vida, como um menino.', '104', 'Penny Marshall', 'James L. Brooks', 'Gary Ross Anne Spielberg', 'Barry Malkin', '20th Century Fox', 'https://www.youtube.com/embed/BGDTNhHYJ94'),
(7, 7, 'Um carcereiro tem um relacionamento incomum e comovente com um preso que está no corredor na morte: Coffey, um negro enorme, condenado por ter matado brutalmente duas gêmeas de nove anos. Ele tem tamanho e força para matar qualquer um, mas seu comportamento é completamente oposto à sua aparência. Além de ser simples, ingênuo e ter pavor do escuro, ele possui um dom sobrenatural. Com o passar do tempo, o carcereiro aprende que, às vezes, os milagres acontecem nos lugares mais inesperados.', '189', 'Frank Darabont', 'Frank Darabont e David Valdes', 'Frank Darabont', 'Richard Francis-Bruce', 'Warner Bros', 'https://www.youtube.com/embed/Ki4haFrqSrw'),
(8, 8, 'Um veterano de guerra que viaja de cidade em cidade lendo as notícias faz uma perigosa viagem pelo Texas para levar uma garotinha órfã até seu novo lar.', '118', 'Paul Greengrass', 'Gary Goetzman, Gail Mutrux e Gregory Goodman', 'Paul Greengrass e Luke Davies', 'William Goldenberg', 'Netflix', 'https://www.youtube.com/embed/zTZDb_iKooI'),
(9, 9, 'Woody, Buzz Lightyear e o resto da turma embarcam em uma viagem com Bonnie e um novo brinquedo chamado Forky. A aventura logo se transforma em uma reunião inesperada quando o ligeiro desvio que Woody faz o leva ao seu amigo há muito perdido, Bo Peep.', '81', 'John Lasseter', 'Ralph Guggenheim e Bonnie Arnold', 'Joss Whedon, Andrew Stanton, Joel Cohen e Alec Sok', ' Robert Gordon e Lee Unkrich', 'Walt Disney Pictures e Pixar Animation Studios', 'https://www.youtube.com/embed/v-PjgYDrg70'),
(10, 10, 'Woody tenta salvar um brinquedo que acaba indo parar em um bazar de usados, mas termina por ser sequestrado por um colecionador que pretende vendê-lo a um museu japonês. Na casa do sequestrador, Woody descobre que, no passado, foi protagonista de um famoso seriado de TV e por isso é um brinquedo muito valioso. Ele conhece os demais integrantes de sua coleção e, enquanto isso, os demais brinquedos, liderados por Buzz Lightyear, partem em uma atrapalhada operação de resgate.', '92', 'John Lasseter', 'Helene Plotkin e Karen Robert Jackson', 'Andrew Stanton, Rita Hsiao, Doug Chamberlin e Chri', 'Lee Unkrich, Edie Bleiman e David Ian Salter', 'Walt Disney Pictures e Pixar Animation Studios', 'https://www.youtube.com/embed/xNWSGRD5CzU'),
(11, 11, 'Com seu amado Andy se preparando para ir para a universidade, Woody, Buzz Lightyear e o restante dos brinquedos enfrentam o seu maior medo: serem esquecidos quando são colocados no sótão. Mas, por engano, acabam no meio-fio. Woody, o único escolhido para acompanhar Andy, percebe o erro e salva a gangue, mas os brinquedos acabam em uma creche. Lá, todos percebem que existe um lugar com brincadeiras infinitas, mas os pequenos são incontroláveis e Woody e sua turma decidem planejar uma grande fuga.', '103', 'Lee Unkrich', 'Darla K. Anderson', 'Michael Arndt', 'Ken Schretzmann', 'Walt Disney Studios Motion Pictures', 'https://www.youtube.com/embed/JcpWXaA2qeg'),
(12, 12, 'Woody, Buzz Lightyear e o resto da turma embarcam em uma viagem com Bonnie e um novo brinquedo chamado Forky. A aventura logo se transforma em uma reunião inesperada quando o ligeiro desvio que Woody faz o leva ao seu amigo há muito perdido, Bo Peep.', '100', 'Josh Cooley', 'Jonas Rivera Mark Nielsen', 'Stephany Folsom e Andrew Stanton', 'Axel Geddes', 'Walt Disney Studios Motion Pictures', 'https://www.youtube.com/embed/wmiIUN-7qhE'),
(13, 13, 'Tom Hanks e o diretor Robert Zemecks se reúnem para O Expresso Polar, uma aventura inspirada no livro infantil de Chris Van Allsburg. Quando um menino cheio de dúvidas pega uma extraordinária carona para o Polo Norte, ele embarca em uma jornada de autodescobrimento que mostra a ele que a maravilha da vida nunca desaparece para aqueles que acreditam.', '100', 'Robert Zemeckis', 'Steve Starkey, Robert Zemeckis, Gary Goetzman e Wi', 'Robert Zemeckis William Broyles Jr.', 'R. Orlando Duenas e Jeremiah O\'Driscoll', 'Warner Bros. Pictures', 'https://www.youtube.com/embed/TQhRqtt-Fpo'),
(14, 14, 'Neste desenho animado, as formigas estão cansadas de sofrer ataques constantes a seu formigueiro e encolhem um menino destruidor chamado Lucas, que é condenado a viver entre elas até que perceba seus erros. Ajudado pelos insetos guardiões, Lucas descobre um mundo que nunca soube que existia e logo junta forças com seus novos amigos para combater um exterminador que ameaça o formigueiro.', '88', 'John A. Davis', 'Tom Hanks', 'John A. Davis', 'Jon Price', 'Warner Bros', 'https://www.youtube.com/embed/1UArmfHdeyk'),
(15, 15, 'Homer Simpson polui o lago de Springfield e acaba causando sérios danos para a cidade. Para amenizar o problema, a solução é colocar toda a cidade dentro de uma bolha, se isolando do resto do mundo.', '93', 'David Silverman', 'James L. Brooks, Matt Groening, Al Jean, Mike Scul', 'James L. Brooks, Matt Groening, Al Jean, Mike Scul', 'John Carnochan', '20th Century Fox', 'https://www.youtube.com/embed/HRV6tMR-SSs'),
(16, 16, 'Um assassinato no museu do Louvre em Paris e pistas enigmáticas em alguns dos quadros mais famosos de Leonardo DaVinci levam à descoberta de um mistério religioso. Por mais de dois mil anos, uma sociedade secreta guarda informações que, se descobertas, poderiam comprometer o cristianismo. Robert Langdon, um professor especialista em simbologia e história, se envolve na investigação.', '149', 'Ron Howard', 'Brian Grazer Ron Howard John Calley', 'Akiva Goldsman (Baseado em romance de Dan Brown)', 'Daniel P. Hanley Mike Hill', 'Columbia Pictures', 'https://www.youtube.com/embed/lfqHb6INj3w'),
(17, 17, 'Quando o simbologista da Harvard, Robert Langdon descobre o ressurgimento de uma antiga irmandade conhecida como Iluminados, ele voa para Roma para alertar o Vaticano, o inimigo mais odiado dos Iluminados. Unindo forças com a bela cientista italiana Vittoria Vetra, Robert segue uma trilha de séculos da idade dos símbolos antigos, na esperança de prevenir a trama mortal dos Iluminados contra a Igreja Católica Romana de se concretizar.', '260', 'Ron Howard', 'Ron Howard, John Calley e Brian Grazer', 'Akiva Goldsman e David Koepp (Baseado em romance d', 'Daniel P. Hanley e Mike Hill', 'Columbia Pictures', 'https://www.youtube.com/embed/GPaAwbveFLg'),
(18, 18, 'Robert Langdon acorda num quarto de hospital em Florença, sem memória do que aconteceu nos últimos dias. Ele se acha novamente na mira de uma grande caçada. Mas com a ajuda da Dr. Sienna Brooks e do seu conhecimento em simbologia, Langdon ira tentar recuperar sua liberdade e memórias perdidas, enquanto resolve o enigma mais intrigante que ele já presenciou.', '121', 'Ron Howard', 'Brian Grazer e Ron Howard', 'David Koepp (Baseado em romance de Dan Brown)', 'Tom Elkins e Dan Hanley', 'Columbia Pictures', 'https://www.youtube.com/embed/RH2BD49sEZI');

-- --------------------------------------------------------

--
-- Estrutura da tabela `filmes`
--

CREATE TABLE `filmes` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `ano` int(11) NOT NULL,
  `genero` varchar(150) NOT NULL,
  `referencia` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `filmes`
--

INSERT INTO `filmes` (`id`, `titulo`, `ano`, `genero`, `referencia`) VALUES
(1, 'Forest Gump', 1994, 'Comedia Drama', 'Recomendado'),
(2, 'Náufrago', 2001, 'Drama Aventura', 'Recomendado'),
(3, 'O Resgate do Soldade Ryan', 1998, 'Drama Guerra', 'Recomendado'),
(4, 'The Post: A Guerra Secreta', 2017, 'Drama Suspense', 'Recomendado'),
(5, 'Prenda-me Se For Capaz', 2002, 'Comédia Drama Biográfico', 'Recomendado'),
(6, 'Quero Ser Grande', 1988, 'Comédia Fantasia', 'Recomendado'),
(7, 'À Espera de um Milagre', 1999, 'Drama Policial Fantasia', 'Recomendado'),
(8, 'Relatos do Mundo', 2021, 'Faroeste Drama', 'Recomendado'),
(9, 'Toy Story', 1995, 'Animação Aventura Comédia', 'Dublador'),
(10, 'Toy Story 2', 1999, 'Animação Aventura Comédia', 'Dublador'),
(11, 'Toy Story 3', 2010, 'Animação Aventura Comédia', 'Dublador'),
(12, 'Toy Story 4', 2019, 'Animação Aventura Comédia', 'Dublador'),
(13, 'O Expresso Polar', 2004, 'Animação Aventura Fantasia', 'Dublador'),
(14, 'Lucas - Um Intruso no Formigueiro', 2006, 'Animação Aventura', 'Produtor'),
(15, 'Os Simpsons - O Filme', 2007, 'Animação Aventura Comédia', 'Dublador'),
(16, 'O Código Da Vinci', 2006, 'Suspense Mistério Thriller', 'Dan Brown'),
(17, 'Anjos e Demônios', 2009, 'Suspense Fantasia', 'Dan Brown'),
(18, 'Inferno', 2016, 'Suspense Thriller', 'Dan Brown'),
(19, 'Filadélfia', 1993, 'Drama', 'none'),
(20, 'Ponte de Espiões', 2015, 'Espionagem', 'none');

-- --------------------------------------------------------

--
-- Estrutura da tabela `minha_lista`
--

CREATE TABLE `minha_lista` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_filmes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `minha_lista`
--

INSERT INTO `minha_lista` (`id`, `id_usuario`, `id_filmes`) VALUES
(148, 26, 1),
(158, 27, 4),
(160, 26, 5),
(161, 26, 4);

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
  `status` int(11) NOT NULL DEFAULT '0',
  `tipo` varchar(30) NOT NULL DEFAULT 'normal'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id`, `NomeCompleto`, `DataNascimento`, `Email`, `Senha`, `Cartao_NomeCompleto`, `Cartao_Numero`, `Cartao_Validade`, `Cartao_CodigoSeguranca`, `Cpf`, `chave`, `status`, `tipo`) VALUES
(26, 'Geancarlo Ferreira Dahle', '2021-04-23', 'geancarlofd@gmail.com', '25d55ad283aa400af464c76d713c07ad', 'Geancarlo', '555555555555555', '2021-08', 123, '99999999999999', '2993a1f9b5f85a33d82f6e30725911d7', 1, 'normal'),
(27, 'Tom Hanks', '1956-07-09', 'streamhanks@gmail.com', '25d55ad283aa400af464c76d713c07ad', 'Thomas Jeffrey Hanks', '8888888888888888', '2026-02', 888, '88888888888888', '25d55ad283aa400af464c76d713c07ad', 1, 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ficha_tecnica`
--
ALTER TABLE `ficha_tecnica`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_filmes` (`id_filmes`);

--
-- Indexes for table `filmes`
--
ALTER TABLE `filmes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `minha_lista`
--
ALTER TABLE `minha_lista`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_filmes` (`id_filmes`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ficha_tecnica`
--
ALTER TABLE `ficha_tecnica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `filmes`
--
ALTER TABLE `filmes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `minha_lista`
--
ALTER TABLE `minha_lista`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=162;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `ficha_tecnica`
--
ALTER TABLE `ficha_tecnica`
  ADD CONSTRAINT `ficha_tecnica_ibfk_1` FOREIGN KEY (`id_filmes`) REFERENCES `filmes` (`id`);

--
-- Limitadores para a tabela `minha_lista`
--
ALTER TABLE `minha_lista`
  ADD CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `minha_lista_ibfk_1` FOREIGN KEY (`id_filmes`) REFERENCES `filmes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
