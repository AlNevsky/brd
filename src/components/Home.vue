<template>
     <div>        
    <SectionTop></SectionTop>        
    <SectionMiddle class="w-container"></SectionMiddle>        
    <SectionBottom class="w-container"></SectionBottom>        
    <SectionFooter class="w-container"></SectionFooter>
  </div>
</template>

<script>
  import TopSection from './HomeComponents/TopSection.vue'
  import MiddleSection from './HomeComponents/MiddleSection.vue'
  import BottomSection from './HomeComponents/BottomSection.vue'
  import FooterSection from './HomeComponents/Footer.vue'
  export default {
    computed: {
      promoAds () {
        return this.$store.getters.promoAds
      },
      Ads () {
        return this.$store.getters.ads
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    components: {
      SectionTop: TopSection,
      SectionMiddle: MiddleSection,
      SectionBottom: BottomSection,
      SectionFooter: FooterSection

    }
  }
</script>

<style scoped lang="stylus">
  .w-container
    max-width: 1185px
</style>
