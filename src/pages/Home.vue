<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <Hero />
      <!-- <Testimonials /> -->
      <!-- <Features /> -->
      <Features01 />
      <Features02 />
      <!-- <Integrations /> -->
      <!-- <Pricing /> -->
      <!-- <SingleTestimonial /> -->
      <!-- <Faqs /> -->
      <Cta />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Hero from '../partials/Hero.vue'
// import Testimonials from '../partials/Testimonials.vue'
// import Features from '../partials/Features.vue'
import Features02 from '../partials/Features02.vue'
import Features01 from '../partials/Features01.vue'
// import Integrations from '../partials/Integrations.vue'
// import Pricing from '../partials/Pricing.vue'
// import SingleTestimonial from '../partials/SingleTestimonial.vue'
// import Faqs from '../partials/Faqs.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    // Testimonials,
    // Features,
    Features01,
    Features02,
    // Integrations,
    // Pricing,
    // SingleTestimonial,
    // Faqs,
    Cta,
    Footer,
},
}
</script>
<style></style>