class UI {
  showProfile(userProfile) {
    const containerProfile = document.getElementById('containerProfile')
    containerProfile.style.display = 'grid'

    containerProfile.innerHTML += `
    <div class="profileCard">
      <img src="${userProfile.avatar_url}" alt="Profile Photo" id="profileImg">

      <ul>
        <li>
          <h2>${userProfile.name}</h2>
        </li>
        <li>
          <h3>${userProfile.login}</h3>
        </li>
        <li>
          <p>${userProfile.bio}</p>
        </li>
        <li>
          <p><i class="fas fa-map-marker-alt"></i> ${userProfile.location}</p>
        </li>
        <li><i class="fas fa-link"></i> <a href="${userProfile.blog}" target="_blank">${userProfile.blog}</a></li>
      </ul>
    </div>
    `
  }

  async showRepositories(userProfile) {
    const containerProfile = document.getElementById('containerProfile')
    containerProfile.style.display = 'grid'

    const repositories = document.createElement('div')
    repositories.classList = 'gridRepositories'

    containerProfile.innerHTML += `
    <div class="repositoriesCard">
    <h3>Repositories</h3>
  </div>
    `

    await userProfile.forEach((currentObject) => {
      repositories.innerHTML += `
      <div class="gridBox">
        <i class="far fa-bookmark"></i><a href="${currentObject.url}"> ${currentObject.name}</a>
        <p>${currentObject.description}</p>
      </div>
      `
    })


    const insertRepositories = document.getElementsByClassName('repositoriesCard')[0]
    insertRepositories.appendChild(repositories)

  }
}
