<script setup>
import Navbar from "../components/navbar/Navbar.vue";
import Footer from "../components/footer/Footer.vue";
</script>

<template>
  <div>
    <header>
			<Navbar />
		</header>
    <main>
			<slot />
		</main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
