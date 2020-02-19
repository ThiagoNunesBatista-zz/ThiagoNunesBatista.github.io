class GitHubApi {
  constructor() {
    this.baseUrl = 'https://api.github.com'
    this.perPage = 2
    this.page = 0
  }

  async get(username) {
    const url = `${this.baseUrl}/users/${username}`
    const result = await fetch(url)
    return result.json()
  }

  async getRepositories(username) {
    const url = `${this.baseUrl}/users/${username}/repos?page=${this.page}&per_page=${this.perPage}`
    this.page++;
    const result = await fetch(url)
    return result.json()
  }
}
