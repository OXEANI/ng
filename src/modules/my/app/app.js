import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {

    @track newsList;
    @track country = 'pt';
    @track category = '';
    newsInit = false;
    startUrl = 'https://newsapi.org/'
    endpoint = 'v2/top-headlines?'
    apiKey = 'c6886647da054888bac454914a6791ee'

    countryOptions=[
        { label: 'Portugal', value: 'pt' },
        { label: 'França', value: 'fr' },
        { label: 'Brazil', value: 'br' },
    ];
    categoryOptions=[
        { label: 'General', value: 'general' },   
        { label: 'Business', value: 'business' },
        { label: 'Entertainment', value: 'entertainment' },
        { label: 'Health', value: 'health' },
        { label: 'Science', value: 'science' },
        { label: 'Sports', value: 'sports' },
        { label: 'Technology', value: 'technology' },
    ];

    renderedCallback() {
        if (this.newsInit) {
            return;
        }
        this.newsInit = true;
        this.getNews(this.country, this.category).then(data => this.newsList = data.articles);
        window.fbAsyncInit = function() {
            console.log("VASCO")
            FB.init({
                appId            : '740465436160051',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v4.0'
            }); 
            FB.api(
                "/502266423157024/feed",
                "POST",
                {
                    "message": "This is a test message"
                },
                function (response) {
                  if (response && !response.error) {
                    /* handle the result */
                  }
                }
            );
        };
    }    
    handleChange(event) {
        (event.target.label == 'Country') ? this.country = event.target.value : this.category =  event.target.value
        this.getNews(this.country, this.category).then(data => this.newsList = data.articles);
    }
    async getNews(country, category) {
        let reqUrl = `${this.startUrl}${this.endpoint}country=${country}&category=${category}&apiKey=${this.apiKey}`
        console.log(reqUrl);
        let response = await fetch(reqUrl);
        let data = await response.json()
        return data;
    }

}
