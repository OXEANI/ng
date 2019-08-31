import { LightningElement, api } from 'lwc';

export default class ViewSource extends LightningElement {
    @api source;

    get sourceURL() {
        return this.source;
    }
}