<template>
<div class="mainapp">
    <Navbar/>
    <Header/>
    <Popular/>
    <Services/>
    <Benefit/>
    <PopularSlider/>
    <Faq/>
    <Footer/>
</div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/layouts/navbar'
import Header from '@/layouts/header'
import Popular from '@/layouts/popular'
import Services from '@/layouts/services'
import Benefit from '@/layouts/benefit'
import PopularSlider from '@/layouts/popularSlider'
import Faq from '@/layouts/faq'
import Footer from '@/layouts/footer'

export default {
  components: {
    Header,
    Popular,
    Navbar,
    Services,
    Benefit,
    PopularSlider,
    Faq,
    Footer,
  },
  mounted() {
    AOS.init();
  }
}
</script>
