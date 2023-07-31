export function lazyLoadVideo() {
    const video = document
      .querySelector("home-page")
      .shadowRoot.querySelector("contato-section")
      .shadowRoot.querySelector("video");

      console.log(video)

      const observer = lozad(video);

      observer.observe();
}