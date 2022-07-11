import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    console.log($navbarBurgers);

    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

        });
    });
  }
}
