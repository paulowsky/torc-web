import data from '../../config/data'

import FootballHomePage from '../../pages/football/home'
import ResultsPage from '../../pages/search/results'
import SearchPage from '../../pages/search/search'

describe('Search', { tags: ['@search'] }, () => {
  it('Should be able to search text', { tags: ['@search_result'] }, () => {
    SearchPage.goto()
    SearchPage.search(data.search)

    FootballHomePage.prepare()

    ResultsPage.enterFirst()

    FootballHomePage.load()
  })
})
