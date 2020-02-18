class GitHubApi {
  constructor() {
    this.baseUrl = 'https://api.github.com'
  }

  async get(username) {
    const result = await fetch(`${this.baseUrl}/users/${username}`)
    return result.json()
  }

  async getRepositories(username) {
    const result = await fetch(`${this.baseUrl}/users/${username}/repos`)
    return result.json()
  }
}
