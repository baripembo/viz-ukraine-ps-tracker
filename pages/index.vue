<template>
  <div>
    <template v-if="isBusy">
      <div class="custom-loader text-center text-secondary my-5">
        <b-spinner class="align-middle" />
        <strong>Loading...</strong>
      </div>
    </template>
    <template v-if="!isBusy">
      <hr class="mt-4 mb-0">

      <div class="header-sticky">
        <div class="container">
          <h2>
            <b>{{ numberFormatter(activityCount) }}</b> <span v-if="activityCount > 1 || activityCount===0">donations</span><span v-else>donation</span> <span v-if="selectedFilterDimension==='#org+id'">by</span><span v-else>to</span> <b>{{ selectedFilterLabel }}</b>
          </h2>
          <a class="anchor" @click="scrollTo('filters')">Customize filters</a>
        </div>
      </div>

      <hr class="mt-0 mb-4">

      <b-container>
        <b-row ref="filters">
          <b-col cols="12" lg="7">
            <b-form-group label="Filter:">
              <b-form-radio v-model="initFilterOption" name="filterOptionGroup" :value="filterOptions[0].value" @change="onFilterOptionSelect">
                {{ filterOptions[0].text }}
              </b-form-radio>
              <br>
              <b-form-radio v-model="initFilterOption" name="filterOptionGroup" :value="filterOptions[1].value" @change="onFilterOptionSelect">
                {{ filterOptions[1].text }}
              </b-form-radio>
              <br>
              <!-- <b-form-radio v-model="initFilterOption" name="filterOptionGroup" :value="filterOptions[2].value" @change="onFilterOptionSelect">
                {{ filterOptions[2].text }}
              </b-form-radio>
              <b-badge
                v-b-tooltip.hover
                class="info-icon p-0 ml-3 ml-md-0"
                variant="dark"
                pill
                :title="tooltips['filterSector']">
                ?
              </b-badge> -->
            </b-form-group>

            <v-select
              v-if="selectedFilterDimension==='#org+id'"
              :value="selectedFilter"
              class="filter-select filter-select-org mb-3"
              :options="reportingOrgs"
              :get-option-key="option => option.value"
              :get-option-label="option => option.text"
              :reduce="option => option.value"
              @input="onSelect"
            >
              <template #search="{ attributes, events }">
                <input
                  class="vs__search"
                  v-bind="attributes"
                  placeholder="Type donor name here"
                  v-on="events"
                >
              </template>
            </v-select>

            <v-select
              v-if="selectedFilterDimension==='#country'"
              :value="selectedFilter"
              class="filter-select filter-select-country mb-3"
              :options="countries"
              :get-option-key="option => option.value"
              :get-option-label="option => option.text"
              :reduce="option => option.value"
              @input="onSelect"
            >
              <template #search="{ attributes, events }">
                <input
                  class="vs__search"
                  v-bind="attributes"
                  placeholder="Type humanitarian recipient name here"
                  v-on="events"
                >
              </template>
            </v-select>

            <!-- <v-select
              v-if="selectedFilterDimension==='#sector'"
              :value="selectedFilter"
              class="filter-select filter-select-sector mb-3"
              :options="sectors"
              :get-option-key="option => option.value"
              :get-option-label="option => option.text"
              :reduce="option => option.value"
              @input="onSelect"
            >
              <template #search="{ attributes, events }">
                <input
                  class="vs__search"
                  v-bind="attributes"
                  placeholder="Type sector name here"
                  v-on="events"
                >
              </template>
            </v-select> -->
          </b-col>
          <b-col>
            <b-row>
              <b-col cols="12" md="8" class="mt-3">
                <DownloadDataButton
                  type="transactions"
                  :filter-params="filterParams"
                  :selected-filter-dimension="selectedFilterDimension"
                />
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <hr class="mt-4 mb-0">
      </b-container>

      <b-container>
        <h2 class="header">
          Overview of Cash and In-Kind Donations
        </h2>

        <b-row>
          <b-col cols="12" lg="6">
            <b-form-select
              v-model="selectedRankingFilter"
              class="form-select px-2 ml-3 mb-3"
              :options="rankingFilter[getFilterID(selectedFilterDimension)]"
              @input="onSelectRanking"
            />
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <div class="key-figure-container">
              <DoughnutChart
                :doughnut-chart-data="spendingDonut"
                :colors="spendingColors"
              />
              <div class="key-figure-breakdown w-lg-100 ml-lg-4 mr-lg-5">
                <h3>
                  Total Cash Donations (USD)
                </h3>
                <div class="key-figure-num">
                  {{ currencyFormatter(totalSpending) }}
                </div>

                <RankedList
                  :items="spendingTable"
                  :colors="spendingColors"
                  :last-updated-date="lastUpdatedDate"
                />
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="key-figure-container">
              <DoughnutChart
                :doughnut-chart-data="commitmentsDonut"
                :colors="commitmentColors"
              />
              <div class="key-figure-breakdown w-lg-100 mx-lg-4">
                <h3>
                  Total In-Kind Donations (USD)
                </h3>
                <div class="key-figure-num">
                  {{ currencyFormatter(totalCommitments) }}
                </div>

                <RankedList
                  :items="commitmentsTable"
                  :colors="commitmentColors"
                  :last-updated-date="lastUpdatedDate"
                />
              </div>
            </div>
          </b-col>
        </b-row>

        <h2 class="header mt-3">
          Donation Flows
        </h2>
        <div class="footnote text-muted">
          Please note that flows are only filtered by private sector donor and may not show all donations to a given humanitarian recipient.
        </div>

        <SankeyChart :items="filteredFlowsData" :params="filterParams" />

        <div class="small text-muted mt-5 ml-4">
          {{ lastUpdatedDate }} | CBi
        </div>
        <hr>
      </b-container>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import csvtojson from 'csvtojson'
import numeral from 'numeral'
import config from '../nuxt.config'
import DoughnutChart from '~/components/DoughnutChart'
import SankeyChart from '~/components/FinancialSankey.vue'
import DownloadDataButton from '~/components/DownloadDataButton'
import RankedList from '~/components/RankedList'

export default {
  components: {
    DoughnutChart,
    DownloadDataButton,
    SankeyChart,
    RankedList
  },
  data () {
    return {
      initFilterOption: '#org+id',
      selectedFilterDimension: '#org+id',
      selectedFilter: '*',
      selectedFilterLabel: '',
      filterOptions: [
        { text: 'By Private Sector Donor', value: '#org+id', label: ' private sector donors' },
        { text: 'By Humanitarian Recipient', value: '#country', label: ' humanitarian recipients' }
        // { text: 'By Sector', value: '#sector', label: 'all sectors' }
      ],
      selectedRankingFilter: '#country',
      rankingFilter: [
        [
          { text: 'By Humanitarian Recipient', value: '#country' },
          { text: 'By Private Sector Donor', value: '#org+id' }
          // { text: 'By Sector', value: '#sector' }
        ],
        [
          { text: 'By Private Sector Donor', value: '#org+id' },
          { text: 'By Humanitarian Recipient', value: '#country' }
          // { text: 'By Sector', value: '#sector' }
        ],
        [
          // { text: 'By Sector', value: '#sector' },
          { text: 'By Humanitarian Recipient', value: '#country' },
          { text: 'By Publishing Org', value: '#org+id' }
        ]
      ],
      commitmentColors: ['#007CE1', '#3393E2', '#65ABE3', '#98C3E4', '#CADAE5', '#EEE'],
      spendingColors: ['#C6382E', '#DC4E44', '#F2645A', '#F0948F', '#EDC4C3', '#EEE'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      fullData: [],
      filteredData: [],
      filterParams: {},
      flowsActivityCount: 0,
      fullFlowsData: [],
      filteredFlowsData: [],
      filterFlowsParams: {},
      orgNameIndex: [],
      lastUpdatedDate: '',
      skippedTransactions: 0,
      loaded: false
    }
  },
  head () {
    return {
      title: config.head.title + ': Dashboard'
    }
  },
  computed: {
    isBusy () {
      return this.fullData.length === 0
    },
    tooltips () {
      return this.$store.state.tooltips
    },
    isProd () {
      return this.$store.state.isProd
    },
    reportingOrgs () {
      let orgList = [...new Set(this.fullData.map(item => item['#org+id']))]
      orgList = orgList.map((item) => {
        const org = {}
        org.value = item
        org.text = this.getOrgName(item)
        return org
      })
      return this.populateSelect(orgList, 'All private sector donors')
    },
    countries () {
      let countryList = [...new Set(this.fullData.map(item => item['#country']))]
      countryList = countryList.map((item) => {
        const country = {}
        country.value = item
        country.text = item
        return country
      })
      return this.populateSelect(countryList, 'All humanitarian recipients')
    },
    sectors () {
      let sectorList = [...new Set(this.fullData.map(item => item['#sector']))]
      sectorList = sectorList.map((item) => {
        const sector = {}
        sector.value = item
        sector.text = item
        return sector
      })
      return this.populateSelect(sectorList, 'All sectors')
    },
    commitments () {
      return this.filteredData.filter(item => item['#x_transaction_type'] === 'commitments')
    },
    spending () {
      return this.filteredData.filter(item => item['#x_transaction_type'] === 'spending')
    },
    commitmentsRanked () {
      return this.getRankedList(this.commitments)
    },
    spendingRanked () {
      return this.getRankedList(this.spending)
    },
    donorCount () {
      const donors = [...new Set(this.fullData.map(item => item['#org+id']))]
      return donors.length
    },
    recipientCount () {
      const recipient = [...new Set(this.fullData.map(item => item['#country']))]
      return recipient.length
    },
    activityCount () {
      const activities = [...new Set(this.filteredData.map(item => item['#activity+code']))]
      return activities.length
    },
    totalCommitments () {
      return this.getTotal(this.commitments)
    },
    totalSpending () {
      return this.getTotal(this.spending)
    },
    tagPattern () {
      return (this.selectedFilterDimension === '#org+id' && this.selectedFilter !== '*') ? '#value+total' : '#value+net'
    },
    commitmentsTable () {
      return this.populateList(this.commitmentsRanked)
    },
    spendingTable () {
      return this.populateList(this.spendingRanked)
    },
    commitmentsDonut () {
      return this.populateDonut(this.totalCommitments, this.commitmentsRanked)
    },
    spendingDonut () {
      return this.populateDonut(this.totalSpending, this.spendingRanked)
    }
  },
  mounted () {
    this.toggleBodyClass('addClass', 'index')

    this.filterParams = {
      humanitarian: 'off',
      strict: 'off'
    }
    this.filterParams['#org+id'] = '*'
    this.filterParams['#sector'] = '*'

    const filePath = (config.dev) ? '' : '/viz-ukraine-ps-tracker/'
    const dataPath = filePath + 'reporting_orgs.json'
    axios.get(dataPath)
      .then((response) => {
        this.orgNameIndex = response.data.data
        this.$store.commit('setorgNameIndex', response.data.data)

        this.selectedFilterLabel = this.orgNameIndex.length + ' private sector donors'

        this.$nextTick(() => {
          if ('org' in this.$route.query) {
            this.filterParams['#org+id'] = this.$route.query.org
            this.querySetup('#org+id')
          }
          if ('sector' in this.$route.query) {
            this.filterParams['#sector'] = this.$route.query.sector
            this.querySetup('#sector')
          }
          if ('humanitarian' in this.$route.query) {
            this.filterParams.humanitarian = this.$route.query.humanitarian
          }
          if ('strict' in this.$route.query) {
            this.filterParams.strict = this.$route.query.strict
          }

          this.loadData()
        })
      })
  },
  updated () {
    this.createStickyHeader()
  },
  destroyed () {
    this.toggleBodyClass('removeClass', 'index')
  },
  methods: {
    async loadData () {
      const filePath = (config.dev) ? '' : '/viz-ukraine-ps-tracker/'
      await axios.get(filePath + 'tooltips.csv')
        .then((response) => {
          return csvtojson().fromString(response.data).then((jsonData) => {
            this.$store.commit('setTooltips', jsonData)
          })
        })

      // get transaction data
      await axios.get(filePath + 'transactions.json')
        .then((response) => {
          // process the metadata
          const metadata = response.data.metadata
          const dateRun = new Date(metadata['#date+run'])
          const date = this.months[dateRun.getMonth()] + ' ' + dateRun.getDate() + ', ' + dateRun.getFullYear()
          this.lastUpdatedDate = date

          // process the transaction data
          this.fullData = response.data.data
          this.filteredData = this.filterData()
        })

      // get flows data
      await axios.get(filePath + 'flows.json')
        .then((response) => {
          this.fullFlowsData = response.data.data
          this.updateFilteredFlowsData()
        })
    },
    urlQuery () {
      const _query = {}
      if (this.filterParams['#org+id'] !== '*') {
        _query.org = this.filterParams['#org+id']
      }
      if (this.filterParams['#sector'] !== '*') {
        _query.sector = this.filterParams['#sector']
      }
      if (this.filterParams.humanitarian !== 'off') {
        _query.humanitarian = this.filterParams.humanitarian
      }
      if (this.filterParams.strict !== 'off') {
        _query.strict = this.filterParams.strict
      }
      return _query
    },
    updateRouter () {
      this.$router.push({ name: 'index', query: this.urlQuery() })
    },
    querySetup (dimension) {
      this.initFilterOption = dimension
      this.selectedFilterDimension = dimension
      this.selectedFilter = this.filterParams[dimension]
      this.selectedFilterLabel = (dimension === '#org+id') ? this.getOrgName(this.selectedFilter) : this.selectedFilter
      const filterArray = this.rankingFilter[this.getFilterID(dimension)]
      this.selectedRankingFilter = filterArray[0].value
    },
    numberFormatter (value) {
      if (value === 0) { return '0' }
      return value
        ? numeral(value).format('0,0')
        : ''
    },
    currencyFormatter (value) {
      return numeral(value).format('$0.0a')
    },
    onFilterOptionSelect (selected) {
      this.selectedFilterDimension = selected
      const filterArray = this.rankingFilter[this.getFilterID(selected)]
      this.selectedRankingFilter = filterArray[0].value

      this.resetParams()
      this.setDefaultFilterLabel(selected)
      this.updateFilteredData()
      this.updateFilteredFlowsData()
      this.$mixpanelTrackAction('change content', 'Dashboard Breakdown radio filter', selected)
    },
    onSelect (value) {
      this.selectedFilter = value
      this.filterParams[this.selectedFilterDimension] = value
      this.filterParams['#org+id+reporting'] = (this.selectedFilterDimension === '#org+id') ? value : '*' // param for sankey
      if (value !== '*') {
        this.selectedFilterLabel = (this.selectedFilterDimension === '#org+id') ? this.getOrgName(value) : value
      } else {
        this.setDefaultFilterLabel(this.selectedFilterDimension)
      }
      this.updateFilteredData()
      this.updateFilteredFlowsData()
      this.$mixpanelTrackAction('change content', 'Dashboard Breakdown select filter', value)
    },
    onToggle (event) {
      this.filterParams[event.target.parentElement.id] = event.target.value
      this.updateFilteredData()
      this.$mixpanelTrackAction('change content', 'Dashboard Breakdown toggle filter', event.target.parentElement.id + ' ' + event.target.value)
    },
    onQuickFilter (event) {
      event.preventDefault()
      this.onSelect(event.target.id)
    },
    onSelectRanking (value) {
      this.$mixpanelTrackAction('change content', 'Dashboard Ranking select filter', value)
    },
    onSelectTimeline (value) {
      // this.$mixpanelTrackAction('change content', 'Commitments and Spending Timeline select filter', value)
    },
    setDefaultFilterLabel (dimension) {
      const filterOption = this.filterOptions.filter(option => option.value === dimension)
      const count = (dimension === '#org+id') ? this.donorCount : this.recipientCount
      this.selectedFilterLabel = count + ' ' + filterOption[0].label.toLowerCase()
    },
    updateFilteredData () {
      this.filteredData = this.filterData()
      this.updateRouter()
    },
    filterData () {
      let result = this.fullData
      const params = this.filterParams

      const filterDimension = this.selectedFilterDimension

      if (params[filterDimension] && params[filterDimension] !== '*') {
        result = result.filter(item => item[filterDimension] === params[filterDimension])
      }
      if (params['humanitarian'] === 'on') {
        result = result.filter(item => item['#indicator+bool+humanitarian'] === 1)
      }
      if (params['strict'] === 'on') {
        result = result.filter(item => item['#indicator+bool+strict'] === 1)
      }
      return result
    },
    updateFilteredFlowsData () {
      this.filteredFlowsData = this.filterFlowsData()
      this.updateRouter()
    },
    filterFlowsData () {
      let result = this.fullFlowsData.map(i => ({ ...i }))
      const params = this.filterParams
      const filterDimension = '#org+id+reporting'// this.selectedFilterDimension

      if (params[filterDimension] && params[filterDimension] !== '*') {
        result = result.filter(item => item[filterDimension] === params[filterDimension])
      }
      if (params['humanitarian'] === 'on') {
        result = result.filter(item => item['#indicator+bool+humanitarian'] === 1)
      }
      if (params['strict'] === 'on') {
        result = result.filter(item => item['#indicator+bool+strict'] === 1)
      }
      if (params['humanitarian'] === 'off' || params['strict'] === 'off') {
        result = this.aggregateFlows(result)
      }

      // get total count before partioning data into incoming/outgoing
      this.flowsActivityCount = result.length
      result = this.partitionData(result)
      return result
    },
    aggregateFlows (data) {
      const aggregated = data.reduce((acc, item) => {
        const pattern = (item['#x_transaction_direction'] === 'incoming') ? '#org+name+provider' : '#org+name+receiver'
        const match = acc.find(a => a[pattern] !== '' && a['#org+id+reporting'] === item['#org+id+reporting'] && a[pattern] === item[pattern])

        if (!match) {
          acc.push(item)
        } else {
          match['#value+total'] += item['#value+total']
        }
        return acc
      }, [])
      return aggregated
    },
    partitionData (data) {
      let [incoming, outgoing] = data.reduce((result, element) => {
        result[element['#x_transaction_direction'] === 'incoming' ? 0 : 1].push(element)
        return result
      }, [[], []])
      incoming = this.formatData(incoming)
      outgoing = this.formatData(outgoing)
      return incoming.concat(outgoing)
    },
    formatData (array) {
      return array.sort((a, b) =>
        a['#value+total'] > b['#value+total'] ? -1 : 1
      ).slice(0, 10)
    },
    populateSelect (data, defaultValue) {
      const selectList = data.reduce((itemList, item) => {
        itemList.push({ value: item.value, text: item.text })
        return itemList
      }, []).sort((a, b) =>
        a.text < b.text ? -1 : 1
      )
      selectList.unshift({ value: '*', text: defaultValue })
      return selectList
    },
    populateList (data) {
      return data.reduce((list, item) => {
        list.push({ item: item[0], value: '$' + this.numberFormatter(item[1]) })
        return list
      }, []).sort((a, b) =>
        b.value - a.value
      )
    },
    populateDonut (total, rankedData) {
      const ranked = (rankedData.length > 5) ? rankedData.slice(0, 5) : rankedData
      // calculate sum of top 5 and append 'Other' value if sum < 100
      const sum = ranked.reduce((total, amount) => {
        return total + amount[1]
      }, 0)
      if (sum < total) { ranked.push(['Other or unspecified', total - sum]) }
      const ratios = ranked.reduce((list, item) => {
        const ratio = Number(((item[1] / total) * 100).toFixed(1))
        list.push(ratio)
        return list
      }, [])
      const labels = ranked.map(row => row[0])
      return { values: ratios, labels }
    },
    getOrgName (id) {
      const org = this.orgNameIndex.filter(org => org['#org+id+reporting'] === id)
      return org[0]['#org+name+reporting']
    },
    getOrgID (name) {
      const org = this.orgNameIndex.filter(org => org['#org+name+reporting'] === name)
      return org[0]['#org+id+reporting']
    },
    getCumulativeSeries (data) {
      let total = 0
      return data.reduce((cumulativeValues, value) => {
        total += value
        cumulativeValues.push(total)
        return cumulativeValues
      }, [])
    },
    getTotal (data) {
      const result = data.map(item => Number(item[this.tagPattern]))
      return (result.length > 0) ? result.reduce((total, value) => total + value) : 0
    },
    getRankedList (data) {
      const dimension = this.selectedRankingFilter
      const unspecifiedObject = {}
      const ranked = Object.entries(data.reduce((list, item, index) => {
        const value = Number(item[this.tagPattern])
        const key = (dimension === '#org+id') ? this.getOrgName(item[dimension]) : item[dimension]
        if (item[dimension].includes('Unspecified')) {
          unspecifiedObject[key] = unspecifiedObject[key] + value || value
        } else {
          list[key] = list[key] + value || value
        }
        return list
      }, {})).sort((a, b) =>
        b[1] - a[1]
      )

      // push unspecified item to bottom of list
      const unspecified = Object.entries(unspecifiedObject)[0]
      if (unspecified !== undefined) {
        // replace text for recipient countries
        if (unspecified[0] === '(Unspecified recipient)') { unspecified[0] = 'No recipient specified' }
        ranked.push(unspecified)
      }
      return ranked
    },
    getFilterID () {
      if (this.selectedFilterDimension === '#sector') { return 2 } else if (this.selectedFilterDimension === '#country') { return 1 } else { return 0 }
    },
    resetParams () {
      this.filterParams['#org+id+reporting'] = '*' // param for sankey
      this.filterParams['#org+id'] = '*'
      this.filterParams['#country'] = '*'
      this.filterParams['#sector'] = '*'
      this.selectedFilter = '*'
    },
    toggleBodyClass (addRemoveClass, className) {
      const el = document.body

      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    },
    createStickyHeader () {
      const el = document.getElementsByClassName('header-sticky')[0]
      if (!this.loaded && el !== undefined) {
        this.loaded = true
        const observer = new IntersectionObserver(
          ([e]) => e.target.classList.toggle('is-stuck', e.intersectionRatio < 1),
          { threshold: [1] }
        )
        observer.observe(el)
      }
    },
    scrollTo (refName) {
      const element = this.$refs[refName]
      const top = element.offsetTop - 100
      window.scrollTo(0, top)
    }
  }
}
</script>

<style lang='scss'>
  abbr[title], abbr[data-original-title] {
    text-decoration: none;
    cursor: auto;
  }
  .key-figure-container {
    border-bottom: 1px solid #CCC;
    display: flex;
    flex-direction: row;
    margin-bottom: 28px;
    padding: 20px 0;
  }
  .key-figure-num {
    font-family: 'Gotham Book', sans-serif;
    font-size: 42px;
    line-height: 49px;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 992px) {
    .iati-viz {
      h2.header {
        .badge.info-icon.badge-pill {
          width: 20px;
        }
      }
    }
  }
</style>
