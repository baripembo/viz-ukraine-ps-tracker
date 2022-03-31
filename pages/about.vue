<template>
  <div class="about">
    <b-container>
      <b-row>
        <!-- <b-col cols="3" class="d-none d-lg-block d-xl-none">
          <ul class="jump-nav">
            <li>
              <nuxt-link :to="{ name: 'about', hash: '#methodology' }">
                Methodology Notes
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ name: 'about', hash: '#developers' }">
                Technical Details / Resources for Developers
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ name: 'about', hash: '#tos' }">
                Terms of Service / Privacy Notice
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ name: 'about', hash: '#contact' }">
                Get in Touch
              </nuxt-link>
            </li>
          </ul>
        </b-col> -->
        <b-col cols="12" lg="9">
          <section class="mb-5">
            <h2>About this Dashboard</h2>

            <p>The response of the global business community to the ongoing humanitarian emergency in Ukraine has been unprecedented. The purpose of this dashboard is to make it easier to visualize, explore, and understand the scope and scale of private sector donations being made for the benefit of affected people. For the purposes of this dashboard, “private sector” is defined as corporations and corporate-linked foundations, including individual and family foundations associated with prominent business leaders.</p>

            <p>This dashboard was built by the <a href="https://centre.humdata.org" target="_blank">OCHA Centre for Humanitarian Data</a> based on data collected and maintained by the <a href="https://www.connectingbusiness.org" target="_blank">OCHA/UNDP Connecting Business initiative (CBi)</a>. CBi has made every effort to assure the accuracy of the data presented, but we cannot guarantee that each transaction has been verified by the donor and recipient. Data is sourced from <a href="https://www.unocha.org" target="_blank">United Nations Office for the Coordination of Humanitarian Affairs</a>; the <a href="https://fts.unocha.org" target="_blank">OCHA Financial Tracking Service</a>; the <a href="https://unfoundation.org" target="_blank">United Nations Foundation</a>; UN agencies, funds, and programmes; corporate press releases; public reporting; and academic and non-profit sources including <a href="https://candid.org" target="_blank">Candid</a>, the <a href="https://www.uschamberfoundation.org" target="_blank">U.S. Chamber of Commerce Foundation</a>, and the <a href="https://ccc.bc.edu/content/ccc.html" target="_blank">Boston College Centre for Corporate Citizenship</a>.</p></p>

            <p>CBi is grateful for the generous support of the <a href="https://www.usaid.gov" target="_blank">United States Agency for International Development (USAID)</a> Bureau for Humanitarian Affairs.</p>
          </section>

          <section class="mb-5">
            <h2>
              Questions? Want to report something missing or incorrect?
            </h2>

            <p>This dashboard substantially undercounts the total cash and in-kind donations made by the private sector. In general, we are listing contributions that we can establish as actually paid (not just committed) and for which breakdowns by recipient are available.</p>

            <p>CBi welcomes questions, comments, or reports of missing or incomplete information. Please reach out to our team by emailing <a href="mailto:connectingbusiness@un.org">connectingbusiness@un.org</a>.</p>
          </section>

          <section class="mb-5">
            <h2>
              Make a Donation
            </h2>

            <p>Want to learn how you can donate to the humanitarian response in Ukraine? Businesses should refer to the <a href="https://www.connectingbusiness.org/publications/ocha-business-guide-ukraine-humanitarian-crisis" target="_blank">OCHA Business Guide to the Ukraine Crisis</a> for more information about how to help. Individuals can make contributions through <a href="https://crisisrelief.un.org/t/ukraine" target="_blank">OCHA</a> or <a href="https://donate.unhcr.org/int/en/ukraine-emergency" target="_blank">UNHCR</a>.</p>
          </section>

          <section class="mb-5">
            <h2>
              Technical Details / Resources for Developers
            </h2>

            <p>Everything developed for this dashboard is based on the <a href="https://data.humdata.org/viz-iati-c19-dashboard/about" target="_blank">IATI COVID-19 Funding Dashboard</a>, which was shared as open-source software. Learn more and access GitHub repositories <a href="https://data.humdata.org/viz-iati-c19-dashboard/about#developers" target="_blank">here</a>.</p>
          </section>

          <section class="mb-5">
            <h2>
              Terms of Service / Privacy Notice
            </h2>

            <p>The <a href="https://data.humdata.org/" target="_blank">Humanitarian Data Exchange</a> (HDX) <a href="https://data.humdata.org/about/terms" target="_blank">Terms of Service</a> govern your use of this website.</p>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang='scss'>
.about {
  h2 {
    font-family: 'Gotham Bold', sans-serif;
    font-size: 18px;
    color: #007CE0;
  }
  h3 {
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
  }
}
.jump-nav {
  list-style: none;
  position: sticky;
  top: 0;
  li {
    padding: 3px 0;
  }
  a {
    color: #333;
    letter-spacing: 0.01em;
    font-family: 'Gotham Book', sans-serif;
    font-size: 14px;
    line-height: 18px;
    padding: 0;
    &:hover {
      color: #007CE0;
      text-decoration: none;
    }
  }
}
.accordion {
  .card {
    border: none;
    border-bottom: 1px solid #CCC;
    border-radius: 0;
    &:hover {
      background-color: #EDF6FD;
    }
    &:not(:last-of-type) {
      border-bottom: 1px solid #CCC;
    }
  }
  .card-body {
    padding-top: 5px;
  }
  .card-header {
    background-color: transparent;
    border: none;
    padding: 0;
    .btn-secondary {
      background-color: transparent;
      border: none;
      color: #000;
      font-weight: 400;
      font-size: 18px;
      letter-spacing: 0.01em;
      line-height: 24px;
      padding: 27px 10px;
      text-align: left;
      transition: none;
      &:focus {
        box-shadow: none;
      }
      &:not(:disabled):not(.disabled):active,
      &:not(:disabled):not(.disabled).active {
        color: #000;
        background-color: transparent;
        border: none;
      }
    }
  }
}
.logos-section {
  padding: 25px 15px;
  background-color: #007bff;
}
blockquote {
  font-style: italic;
  margin-left: 30px;
}
</style>
<script>
import config from '../nuxt.config'
export default {
  components: {},
  data () {
    return {}
  },
  head () {
    return {
      title: config.head.title + ': About this Dashboard'
    }
  }
}
</script>
