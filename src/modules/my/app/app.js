import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track newsList;
    @track country = 'gb';
    @track category = '';
    @track token;
    @track isLogging = false;
    @track showModal = false;
    @track allText;
    newsInit = false;
    startUrl = 'https://newsapi.org/';
    endpoint = 'v2/top-headlines?';
    apiKey = 'c6886647da054888bac454914a6791ee';

    renderedCallback() {
        if (this.newsInit) {
            return;
        }
        this.newsInit = true;
        this.getNews(this.country, this.category).then(
            data => (this.newsList = data.articles)
        );
        window.fbAsyncInit = function() {
            FB.init({
                appId: '740465436160051',
                cookie: true,
                xfbml: true,
                version: 'v4.0'
            });
        };
    }
    handleChange(event) {
        if (event.detail === null) {
            return;
        }
        event.detail.target.label == 'Country'
            ? (this.country = event.detail.target.value)
            : (this.category = event.detail.target.value);
        this.getNews(this.country, this.category).then(
            data => (this.newsList = data.articles)
        );
        window.scrollTo(0, 0)
    }

    handleLogin(event) {
        const that = this;
        FB.api('/me/accounts', 'get', {}, function(response) {
            if (!response || response.error) {
                alert(response.error);
            } else {
                that.token = response.data[0].access_token;
            }
        });
    }
    handleShare() {
        this.isLogging = !this.isLogging;
        if (this.isLogging === false) {
            this.showModal = true;
        }
    }
    handleClose() {
        this.showModal = false;
    }

    async getNews(country, category) {
        let reqUrl = `${this.startUrl}${this.endpoint}country=${country}&category=${category}&apiKey=${this.apiKey}`;
        let response = await fetch(reqUrl);
        let data = await response.json();
        this.isLogging = false;
        return data;
    }
}
