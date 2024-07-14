<script setup>
import LayoutEcommerce from '../layout/LayoutEcommerce.vue';
import Hero from '../components/hero/Hero.vue';
import ProductList from '../components/product/ProductList.vue';
import TopProductList from '../components/product/TopProductList.vue';
import Banner from '../components/banner/Banner.vue';
import Subscribe from '../components/subscribe/Subscribe.vue';
import Testimonials from '../components/testimonial/Testimonials.vue';
</script>

<template>
	<LayoutEcommerce>
		<Hero />
		<ProductList />
		<TopProductList />
		<Banner />
		<Subscribe />
		<ProductList />
		<Testimonials />
	</LayoutEcommerce>
</template>