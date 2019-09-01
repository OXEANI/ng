import { LightningElement } from 'lwc';

export default class Modal extends LightningElement {
    handleClose() {
        const selectEvent = new CustomEvent('close');
        this.dispatchEvent(selectEvent);
    }
}
