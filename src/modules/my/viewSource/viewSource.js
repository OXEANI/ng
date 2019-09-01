import { LightningElement, api } from 'lwc';

export default class ViewSource extends LightningElement {
    @api source;
    @api token;

    get sourceURL() {
        return this.source;
    }
}
