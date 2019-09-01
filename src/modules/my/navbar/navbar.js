import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track isLogging = false;
    countryOptions = [
        { label: 'Portugal', value: 'pt' },
        { label: 'França', value: 'fr' },
        { label: 'Brazil', value: 'br' }
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
