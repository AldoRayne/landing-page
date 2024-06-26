<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Home Page</title>
	<?php include('../components/head/_head.php') ?>
	<link rel="stylesheet" href="../assets/css/element-tags.min.css" />
	<link rel="stylesheet" href="../assets/css/section-preloader.min.css" />
	<link rel="stylesheet" href="../assets/css/section-hero.min.css" />
	<link rel="stylesheet" href="../assets/css/section-projects.min.css" />
	<link rel="stylesheet" href="../assets/css/section-brands.min.css" />
	<link rel="stylesheet" href="../assets/css/section-team.min.css" />
	<link rel="stylesheet" href="../assets/css/section-services.min.css" />

</head>

<body>
	<div id="smooth__wrapper">
		<div id="smooth__content">
			<?php include('../components/header/_header.php') ?>
			<main>
				<?php include('../components/sections/preloader.php') ?>
				<?php include('../components/sections/hero.php') ?>
				<?php include('../components/sections/projects.php') ?>
				<?php include('../components/sections/brands.php') ?>
				<?php include('../components/sections/team.php') ?>
				<?php include('../components/sections/services.php') ?>
				<?php include('../components/sections/product-design.php') ?>
			</main>
			<?php include('../components/footer/_footer.php') ?>
		</div>
	</div>
	<?php include('../components/elements/_cursor.php') ?>
	<?php include('../components/scripts/_scripts.php') ?>
	<script>
		/** Global gsap.timeline() value */
		const globalTl = gsap.timeline();
	</script>
	<script src="../assets/js/section-preloader.min.js"></script>
	<script src="../assets/js/section-hero.min.js"></script>
	<script src="../assets/js/section-projects.min.js"></script>
	<script src="../assets/js/section-brands.min.js"></script>
	<script src="../assets/js/section-team.min.js"></script>
	<script src="../assets/js/section-services.min.js"></script>
</body>

</html>