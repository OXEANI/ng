import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
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
        const selectEvent = new CustomEvent('login');
        const that = this;
        FB.login(
            function(response) {
                that.dispatchEvent(selectEvent);
            },
            { scope: 'manage_pages, publish_pages' }
        );
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
