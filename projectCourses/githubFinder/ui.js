class UI {
  showProfile(userProfile) {
    const containerProfile = document.getElementById('containerProfile')
    const errorArea = document.getElementsByClassName('errorArea')[0]
    const mainTextContainer = document.getElementsByClassName('mainTextContainer')[0]
    const footer = document.getElementsByTagName('footer')[0]

    containerProfile.style.display = 'grid'
    errorArea.style.display = 'none'
    mainTextContainer.style.display = 'none'
    footer.style.position = 'static'

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
      const errorArea = document.getElementsByClassName('errorArea')[0]
      const mainTextContainer = document.getElementsByClassName('mainTextContainer')[0]
      const footer = document.getElementsByTagName('footer')[0]

      containerProfile.style.display = 'grid'
      errorArea.style.display = 'none'
      mainTextContainer.style.display = 'none'
      footer.style.position = 'static'

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
        <i class="far fa-bookmark"></i><a href="${currentObject.html_url}" target="_blank"> ${currentObject.name}</a>
        ${ currentObject.description !== null ? `<p>${currentObject.description}</p>`: ''}
      </div>
      `
    })


    const insertRepositories = document.getElementsByClassName('repositoriesCard')[0]
    insertRepositories.appendChild(repositories)

  }

  async showError(message) {
    const containerProfile = document.getElementById('containerProfile')
    const mainTextContainer = document.getElementsByClassName('mainTextContainer')[0]
    const errorArea = document.getElementsByClassName('errorArea')[0]
    const footer = document.getElementsByTagName('footer')[0]

    containerProfile.style.display = 'none'
    mainTextContainer.style.display = 'none'
    errorArea.style.display = 'flex'
    footer.style.position = 'absolute'

    errorArea.innerHTML = `
    <p>Error: ${message}</p>
    `
  }
}
