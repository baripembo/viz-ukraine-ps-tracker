<template>
  <div class="iati-viz mb-4">
    <OchaHeader class="mb-4" />
    <b-container>
      <a href="/viz-ukraine-ps-tracker/"><b-navbar-brand>
        <span v-html="pageTitle" />
      </b-navbar-brand></a>
      <b-navbar toggleable="lg" type="light" variant="bg-white" class="navbar-iati">
        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'index'}" exact-active-class="active" class="nav-index" no-prefetch @click="onClick('Dashboard')">
              Dashboard
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{name: 'about'}" active-class="active" class="ml-lg-auto nav-about" no-prefetch @click="onClick('About this Dashboard')">
              About this Dashboard
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <nuxt class="main-content" />

      <b-container class="footer">
        <b-row>
          <b-col cols="12">
            <div class="logo-container">
              <a href="https://www.usaid.gov" target="_blank"><img src="~@/assets/logos/usaid.png" alt="USAID" height="60"></a>
              <a href="https://www.unocha.org" target="_blank"><img src="~@/assets/logos//ocha.png" alt="UN OCHA" height="50"></a>
              <a href="https://centre.humdata.org" target="_blank"><img src="~@/assets/logos/centrehumdata.png" alt="Centre for Humanitarian Data" height="45"></a>
              <a href="https://www.connectingbusiness.org" target="_blank"><img src="~@/assets/logos/CBi_logo_2021_horizontal_color_CMYK.svg" alt="Connecting Business Initiative (CBi)" height="70"></a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<style lang='scss'>
.navbar-brand {
  color: #000;
  font-family: 'Gotham Bold', sans-serif;
  font-size: 24px;
  line-height: 28px;
  white-space: normal;
}
.navbar-iati {
  box-shadow: inset 0px -3px 0px 0px #D8D8D8;
  margin: 26px 0 32px;
  padding: 0 27px;
  .nav-item {
    color: #888;
    font-family: 'Gotham Bold', sans-serif;
    font-size: 14px;
    .nav-link {
      padding: 8px 30px;
      &.active {
        border-bottom: 3px solid #F2645A;
        color: #F2645A;
      }
    }
  }
}
.main-content {
  min-height: 100vh;
}
.footer {
  padding: 80px 15px 40px;
  text-align: right;
  .logo-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    img {
      width: auto;
    }
  }
}

@media only screen and (max-width: 992px) {
  .navbar-nav {
    text-align: center;
  }
  .navbar-collapse {
    margin-bottom: 20px;
  }
  .navbar-iati {
    box-shadow: none;
    margin: 0;
    padding: 10px;
  }
  .navbar-toggler {
    border: none;
    padding-right: 0;
    position: absolute;
    right: 0;
    top: -66px;
  }
  .footer {
    padding-top: 0;
    .logo-container {
      flex-wrap: wrap;
      > a {
        margin-top: 30px;
        width: 50%;
      }
    }
  }
}
</style>

<script>
import mixpanel from 'mixpanel-browser'
import config from '../nuxt.config'
import OchaHeader from '~/components/OchaHeader'

export default {
  components: {
    OchaHeader
  },
  data () {
    return {
      title: config.head.title
    }
  },
  computed: {
    pageTitle () {
      let isProd = true
      if (process.client) {
        isProd = !!(window.location.host.includes('ocha-dap')) || !!(window.location.host.includes('humdata'))
        this.$store.commit('setProd', isProd)
      }
      return (isProd) ? 'Ukraine Private Sector Donations Tracker' : '*STAGE* Ukraine Private Sector Donations Tracker'
    },
    query () {
      return this.$route.query
    }
  },
  mounted () {
    const MIXPANEL_TOKEN = this.$store.state.isProd ? process.env.NUXT_ENV_MIXPANEL_TOKEN_PROD : process.env.NUXT_ENV_MIXPANEL_TOKEN_DEV
    mixpanel.init(MIXPANEL_TOKEN)
    this.$mixpanelTrackView()
  },
  methods: {
    onClick (page) {
      // console.log(this.$route.query)
      this.$mixpanelTrackAction('switch viz', config.head.title, page)
    }
  }
}
</script>
