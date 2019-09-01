import { LightningElement, track, api } from 'lwc';
export default class Card extends LightningElement {
    @api content;
    @api token;
    renderedCallback() {
        if (this.fbInit) {
            return;
        }
        this.fbInit = true;
    }
    handleClick() {
        const selectEvent = new CustomEvent('share');
        this.dispatchEvent(selectEvent);
        const that = this;
        const content = this.content;
        const token = this.token;
        const formatTitle = content.title.substring(
            0,
            content.title.indexOf('-')
        );
        FB.api(
            '/me/feed',
            'post',
            {
                access_token: token,
                message: formatTitle + '\n' + content.description,
                link: content.url
            },
            function(response) {
                if (!response || response.error) {
                    alert(response.error);
                }
                that.dispatchEvent(selectEvent);
            }
        );
    }
}
