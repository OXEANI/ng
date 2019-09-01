import { LightningElement } from 'lwc';

export default class Card extends LightningElement {
    handleClick() {
        var body = document.body;
        var burgerMenu = this.template.querySelectorAll('.b-menu')[0];
        var burgerContain = this.template.querySelectorAll('.b-container')[0];

        [body, burgerContain].forEach(function(el) {
            el.classList.toggle('open');
        });
    }
}
