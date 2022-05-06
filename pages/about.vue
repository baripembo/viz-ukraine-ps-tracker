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

            <p>The response of the global business community to the ongoing humanitarian emergency in Ukraine has been unprecedented.</p>

            <p>This dashboard was created to make it easier to visualize, explore, and understand the scope and scale of private sector donations being made for the benefit of affected people. In doing so, we hope to shine a light on the generosity of local and global businesses while also bringing more transparency and accountability to the sources and uses of funds being allocated to support the millions of people who have been affected by the war.</p>

            <!--             <p>For the purposes of this dashboard, “private sector” is defined as corporations and corporate-linked foundations, including individual and family foundations associated with prominent business leaders. The dashboard does not include contributions from individuals.</p>

            <p>This dashboard was built by the <a href="https://centre.humdata.org" target="_blank">OCHA Centre for Humanitarian Data</a> based on data collected and maintained by the <a href="https://www.connectingbusiness.org" target="_blank">OCHA/UNDP Connecting Business initiative (CBi)</a>. The CBi team has made every effort possible to ensure the accuracy of the data presented, and we are committed to updating the <a href="https://data.humdata.org/dataset/ukraine-private-sector-donations-tracker" target="_blank">underlying data</a> on a weekly basis through 30 September 2022.</p>

            <p>Data is sourced from individual United Nations agencies, funds, and programmes; the OCHA-managed <a href="https://www.unocha.org/ukraine/about-uhf" target="_blank">Ukraine Humanitarian Fund</a>; the OCHA <a href="https://fts.unocha.org" target="_blank">Financial Tracking Service</a>; the <a href="https://unfoundation.org" target="_blank">United Nations Foundation</a>; public reporting; and academic/non-profit sources including <a href="https://candid.org" target="_blank">Candid</a>, the <a href="https://www.uschamberfoundation.org" target="_blank">U.S. Chamber of Commerce Foundation</a>, and the <a href="https://ccc.bc.edu/content/ccc.html" target="_blank">Boston College Centre for Corporate Citizenship</a>.</p>

            <p>This dashboard is made possible by the support of the American People through the <a href="https://www.usaid.gov/who-we-are/organization/bureaus/bureau-humanitarian-assistance" target="_blank">United States Agency for International Development (USAID) Bureau for Humanitarian Assistance</a>.</p> -->
          </section>

          <section class="mb-5">
            <h2>
              Frequently asked questions
            </h2>

            <div class="accordion" role="tablist">
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <b-button v-b-toggle.accordion-1 block squared>
                    Who created the Ukraine Private Sector Donations Tracker?
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-1" accordion="faq-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <p>This dashboard was built by the United Nations Office for the Coordination of Humanitarian Affairs (OCHA) <a href="https://centre.humdata.org" target="_blank">Centre for Humanitarian Data</a> based on data collected and maintained by the <a href="https://www.connectingbusiness.org" target="_blank">Connecting Business initiative (CBi)</a>. CBi is a joint project of OCHA and the United Nations Development Programme (UNDP) that is dedicated to strategic engagement with the private sector before, during, and after emergencies.</p>
                      <p>The dashboard was made possible by the support of the American People through the <a href="https://www.usaid.gov/who-we-are/organization/bureaus/bureau-humanitarian-assistance" target="_blank">United States Agency for International Development (USAID) Bureau for Humanitarian Assistance</a>.</p>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <b-button v-b-toggle.accordion-2 block squared>
                    What is the definition of “private sector”?
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="faq-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <p>For the purposes of this dashboard, “private sector” is defined as corporations and corporate-linked foundations, including individual and family foundations associated with prominent business leaders. The dashboard does not include contributions from private individuals (including celebrities) or from private associations and foundations.</p>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <b-button v-b-toggle.accordion-3 block squared>
                    Where does this data come from?
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="faq-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <p>For the most part, transaction data comes from public sources including corporate press releases and news reports. Data has also been sourced through direct reports from corporate donors and humanitarian recipients, including the International Federation of the Red Cross and Red Crescent Societies (IFRC), individual United Nations agencies, funds, and programmes, the OCHA-managed <a href="https://www.unocha.org/ukraine/about-uhf" target="_blank">Ukraine Humanitarian Fund</a>, the OCHA <a href="https://fts.unocha.org" target="_blank">Financial Tracking Service</a>, and the <a href="https://unfoundation.org" target="_blank">United Nations Foundation</a>. Additional data comes from academic and non-profit sources including <a href="https://candid.org" target="_blank">Candid</a>, the <a href="https://www.uschamberfoundation.org" target="_blank">U.S. Chamber of Commerce Foundation</a>, and the <a href="https://ccc.bc.edu/content/ccc.html" target="_blank">Boston College Centre for Corporate Citizenship</a>. You can view a full list of sources including links to public reports by <a href="https://data.humdata.org/dataset/ukraine-private-sector-donations-tracker" target="_blank">downloading the underlying dataset</a> from the Humanitarian Data Exchange.</p>

                      <p>The CBi team has made every effort possible to ensure the accuracy of the data presented, and we are committed to updating this dashboard on an ongoing basis through at least 30 September 2022.</p>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <b-button v-b-toggle.accordion-4 block squared>
                    Why is the largest recipient of funds “[multiple or not specified]”?
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-4" accordion="faq-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <p>Many publicly announced pledges have not been disaggregated. For example, Epic Games <a href="https://www.epicgames.com/fortnite/en-US/news/support-humanitarian-relief-for-ukraine" target="_blank">announced a donation</a> of US $144 million to Direct Relief, UNICEF, UNHCR, WFP, and World Central Kitchen, but did not provide a breakdown of the distribution of funds across these recipient organizations. CBi is reaching out to donors and recipients to encourage disaggregation of donations, and we update records as we receive new information. In the meantime, you can generally view the names of humanitarian recipients and other relevant information by moving your mouse over the Donation Flows diagram.</p>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <b-button v-b-toggle.accordion-5 block squared>
                    Why are some of the donors and recipients “redacted”?
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-5" accordion="faq-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <p>Some corporate donors and humanitarian recipients have expressed safety and other concerns associated with public identification. For example, Google and Microsoft have confirmed that they do not wish to name their individual grant recipients (though they do not object to recipients reporting on their incoming donations). Out of respect for these concerns, we have redacted donor and recipient names when requested to do so.</p>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <b-button v-b-toggle.accordion-6 block squared>
                    Why is the “paid” total so much less than the “pledged” total?
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-6" accordion="faq-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <p>To be marked as “paid”, the CBi team requires verification from the recipient that funds or goods were transferred and received.</p>
                      <p>There can be significant time between the announcement of a donation and the actual transfer of funds due to the obligation to conduct due diligence assessments, negotiate specific contractual language, make logistical arrangements, and so on.</p>
                      <p>Even after such requirements are met and funds/goods are transferred, there can be significant delays in reporting, especially because of the ongoing complexity of the humanitarian response itself.</p>
                      <p>The CBi team is committed to ongoing updates of this dashboard, and as we verify completed transactions we will reclassify “pledged” donations as “paid”.</p>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <b-button v-b-toggle.accordion-7 block squared>
                    Why are different totals being reported by other sources?
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-7" accordion="faq-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <p>Many organizations use different definitions of the term “private sector”. For example, many UN entities include donations from corporations, individuals, and public fundraising campaigns in a single total. This can lead to significant divergences between reports issued by those entities and their associated entries in this dashboard.</p>
                      <p>In addition, many sources differentiate between funds intended to support projects within Ukraine versus donations to support individuals affected by the conflict who are outside of Ukraine. Some donors have made contributions that are unrestricted, meaning that the humanitarian organization can use its discretion to decide when, where, and how to spend the donation. In general, this tracker includes any donation that has been described as intended to support the humanitarian response to the Ukraine crisis, regardless of the specific conditions that may be agreed between the donor and the recipient.</p>
                      <p>Finally, as noted above, public announcements of donations are often made weeks before contribution agreements are signed or funds are actually transferred. When funds are distributed, there are often changes to the values and/or recipients.</p>
                      <p><b>Please note that the OCHA <a href="https://fts.unocha.org" target="_blank">Financial Tracking Service</a> is the only official source of information on humanitarian funding flows.</b></p>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <b-button v-b-toggle.accordion-8 block squared>
                    What do K, M, and B mean?
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-8" accordion="faq-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <p>Totals are rounded up to the first decimal place, with K standing for “thousand”, M for “million”, and B for “billion”. In other words, $200K = $200,000; $2.2M = $2,200,000; $2.3B = $2,300,000,000.</p>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </section>

          <section class="mb-5">
            <h2>
              How can I make a donation to support the humanitarian response in Ukraine?
            </h2>

            <p>Financial contributions to reputable aid agencies and coordinated response funds are one of the most valuable and effective forms of response in humanitarian emergencies. Businesses and individuals should consider contributing to any of the organizations or projects the <a href="https://reliefweb.int/report/ukraine/ukraine-flash-appeal-march-august-2022-enuk" target="_blank">Ukraine Flash Appeal</a> and the inter-agency <a href="https://data2.unhcr.org/en/documents/details/91114" target="_blank">Regional Refugee Response Plan</a>. Refer to the <a href="https://www.connectingbusiness.org/publications/ocha-business-guide-ukraine-humanitarian-crisis" target="_blank">OCHA Business Guide to the Ukraine Crisis</a> for more information about how to help.</p>
          </section>

          <section class="mb-5">
            <h2>
              I want to report missing data / I have a different question, comment, or media inquiry.
            </h2>

            <p>CBi welcomes questions, comments, media inquiries, and reports of missing or incomplete information. Please reach out to our team by emailing <a href="mailto:connectingbusiness@un.org">connectingbusiness@un.org</a>.</p>
          </section>

          <section class="mb-5">
            <h2>
              Resources for Developers
            </h2>

            <p>This code that powers this dashboard has been shared as open-source software. Learn more and access GitHub repositories <a href="https://data.humdata.org/viz-iati-c19-dashboard/about#developers" target="_blank">here</a>.</p>
          </section>

          <section class="mb-5">
            <h2>
              Terms of Service / Privacy Notice
            </h2>

            <p>The <a href="https://data.humdata.org" target="_blank">Humanitarian Data Exchange</a> (HDX) <a href="https://data.humdata.org/about/terms" target="_blank">Terms of Service</a> govern your use of this website.</p>
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
