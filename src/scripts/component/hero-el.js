class HeroEl extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('hero');
    this.setAttribute('id', 'hero');
    this.innerHTML = `
        <div class="hero__content">
          <h1>Find Your Favorite Food at IkaFood's Resto</h1>
          <p>One should eat to live, not live to eat</p>
        </div>
      `;
  }
}

customElements.define('hero-el', HeroEl);
