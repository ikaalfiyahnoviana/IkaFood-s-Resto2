class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav id="drawer">
            <div class="nav-content">
              <div class="nav-brand">
                <h1>IkaFood's Resto</h1>
              </div>
              <button id="hamburger" aria-label="navigation-menu">☰</button>
              <ul class="nav-menu">
                <li class="nav-item"><a href="/">HOME</a></li>
                <li class="nav-item"><a href="#/CATALOGUE">CATALOGUE</a></li>
                <li class="nav-item"><a href="#/FAVORITE">FAVORITE</a></li>
                <li class="nav-item">
                  <a
                    href="https://github.com/ikaalfiyahnoviana"
                    rel="noreferrer"
                    target="_blank"
                    >ABOUT US</a
                  >
              </li>
              </ul>
            </div>
          </nav>
      `;
  }
}

customElements.define('app-bar', AppBar);
