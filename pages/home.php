<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Home Page</title>
	<?php include('../components/head/_head.php') ?>
	<link rel="stylesheet" href="../assets/css/section-preloader.min.css" />
	<link rel="stylesheet" href="../assets/css/section-hero.min.css" />

</head>

<body class="overflow-hidden">
	<?php include('../components/header/_header.php') ?>
	<main>
		<?php include('../components/sections/preloader.php') ?>
		<?php include('../components/sections/hero.php') ?>
	</main>
	<?php include('../components/footer/_footer.php') ?>
	<?php include('../components/scripts/_scripts.php') ?>
	<script>
		/** Global gsap.timeline() value */
		const globalTl = gsap.timeline();
	</script>
	<script src="../assets/js/section-preloader.js"></script>
	<script src="../assets/js/section-hero.js"></script>
</body>

</html>