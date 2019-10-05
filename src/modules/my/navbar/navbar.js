import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track isLogging = false;
    countryOptions = [
        { label: 'Portugal', value: 'pt'},
        { label: 'United Arab Emirates', value: 'ae'},
        { label: 'Argentina', value: 'ar'},
        { label: 'Austria', value: 'at'},
        { label: 'Australia', value: 'au'},
        { label: 'Belgium', value: 'be'},
        { label: 'Bulgaria', value: 'bg'},
        { label: 'Brazil', value: 'br'},
        { label: 'Canada', value: 'ca'},
        { label: 'Switzerland', value: 'ch'},
        { label: 'China', value: 'cn'},
        { label: 'Colombia', value: 'co'},
        { label: 'Cuba', value: 'cu'},
        { label: 'Czechia', value: 'cz'},
        { label: 'Germany', value: 'de'},
        { label: 'Egypt', value: 'eg'},
        { label: 'France', value: 'fr'},
        { label: 'United Kingdom', value: 'gb'},
        { label: 'Greece', value: 'gr'},
        { label: 'Hong Kong', value: 'hk'},
        { label: 'Hungary', value: 'hu'},
        { label: 'Indonesia', value: 'id'},
        { label: 'Ireland', value: 'ie'},
        { label: 'Israel', value: 'il'},
        { label: 'India', value: 'in'},
        { label: 'Italy', value: 'it'},
        { label: 'Japan', value: 'jp'},
        { label: 'Korea, Republic of', value: 'kr'},
        { label: 'Lithuania', value: 'lt'},
        { label: 'Latvia', value: 'lv'},
        { label: 'Morocco', value: 'ma'},
        { label: 'Mexico', value: 'mx'},
        { label: 'Malaysia', value: 'my'},
        { label: 'Nigeria', value: 'ng'},
        { label: 'Netherlands', value: 'nl'},
        { label: 'Norway', value: 'no'},
        { label: 'New Zealand', value: 'nz'},
        { label: 'Philippines', value: 'ph'},
        { label: 'Poland', value: 'pl'},
        { label: 'Romania', value: 'ro'},
        { label: 'Serbia', value: 'rs'},
        { label: 'Russian Federation', value: 'ru'},
        { label: 'Saudi Arabia', value: 'sa'},
        { label: 'Sweden', value: 'se'},
        { label: 'Singapore', value: 'sg'},
        { label: 'Slovenia', value: 'si'},
        { label: 'Slovakia', value: 'sk'},
        { label: 'Thailand', value: 'th'},
        { label: 'Turkey', value: 'tr'},
        { label: 'Taiwan, Province of China', value: 'tw'},
        { label: 'Ukraine', value: 'ua'},
        { label: 'United States of America', value: 'us'},
        { label: 'Venezuela (Bolivarian Republic of)', value: 've'},
        { label: 'South Africa', value: 'za'},
    ];
    categoryOptions = [
        { label: 'General', value: 'general' },
        { label: 'Business', value: 'business' },
        { label: 'Entertainment', value: 'entertainment' },
        { label: 'Health', value: 'health' },
        { label: 'Science', value: 'science' },
        { label: 'Sports', value: 'sports' },
        { label: 'Technology', value: 'technology' }
    ];

    handleLogin() {
        const that = this;
        this.isLogging = true;
        const selectEvent = new CustomEvent('login');
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                that.dispatchEvent(selectEvent);
                that.isLogging = false;
            } else {
                FB.login(
                    function(response) {
                        that.dispatchEvent(selectEvent);
                        that.isLogging = false;
                    },
                    { scope: 'manage_pages, publish_pages' }
                );
            }
        });
    }
    handleChange(event) {
        const selectEvent = new CustomEvent('change', {
            detail: event
        });
        this.dispatchEvent(selectEvent);
    }
    handleClick() {
        let burgerMenu = this.template.querySelectorAll('.nav-item');
        burgerMenu.forEach(function(el) {
            el.style.display === 'block'
                ? (el.style.display = '')
                : (el.style.display = 'block');
        });
    }
}
