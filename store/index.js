export const state = () => ({
  tooltips: {},
  reporterNameIndex: [],
  receiverNameIndex: [],
  isProd: true
})

export const mutations = {
  setTooltips (state, tooltips) {
    state.tooltips = tooltips.reduce((summary, item) => {
      summary[item.key] = item.tooltip
      return summary
    }, {})
  },
  setReporterNameIndex (state, reporterNameIndex) {
    state.reporterNameIndex = reporterNameIndex
  },
  setReceiverNameIndex (state, receiverNameIndex) {
    state.receiverNameIndex = receiverNameIndex
  },
  setProd (state, isProd) {
    state.isProd = isProd
  }
}

export const actions = {
}
