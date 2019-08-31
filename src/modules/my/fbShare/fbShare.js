import { LightningElement } from 'lwc';

export default class Card extends LightningElement {

    renderedCallback() {
        if (this.fbInit) {
            return;
        }
        this.fbInit = true;       
    }

    handleShareFb() {
        
    }
}

        