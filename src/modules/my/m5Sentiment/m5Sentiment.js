import { LightningElement, track, api } from 'lwc';
import * as toxicity from '@tensorflow-models/toxicity';
import { IamAuthenticator } from 'ibm-watson/auth';
import DiscoveryV1 from 'ibm-watson/discovery/v1';
import ToneAnalyzerV3 from 'ibm-watson/tone-analyzer/v3';

// The minimum prediction confidence.
const threshold = 0.5;
const apiKey = 'f6WZTLMlhrPjrmq5z6uuMq6iBqSwWKdUQLcGuBdkI4Rv';


export default class m5Sentiment extends LightningElement {
    @track init = false;
    @api news;
    async renderedCallback() {
        if(this.init ) {
            return;
        }
        this.init = true;
        if( this.news ) {
          this.handleSentiment();
        }
    } 

    async handleSentiment() {
      /*
      var toneAnalyzer = new ToneAnalyzerV3({
        authenticator: new IamAuthenticator({ apikey:  'f6WZTLMlhrPjrmq5z6uuMq6iBqSwWKdUQLcGuBdkI4Rv' }),
        version: '2017-09-21',
        url: 'https://gateway-lon.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21',
        text: 'Hello WOrld!'
      });
      */

var toneAnalyzer = new ToneAnalyzerV3({
  authenticator: new IamAuthenticator({ apikey:  'f6WZTLMlhrPjrmq5z6uuMq6iBqSwWKdUQLcGuBdkI4Rv' }),
  version: '2017-09-21',
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api/'
});

toneAnalyzer.tone(
  {
    toneInput: 'Greetings from the Watson Developer Cloud Node SDK, we are pleased to say hello!',
    contentType: 'text/plain'
  },
  function(err, tone) {
    if (err) {
      console.log(err);
    } else {
      console.log('tone endpoint:');
      console.log(JSON.stringify(tone, null, 2));
    }
  }
);

var params = {
  utterances: [
    { text: 'My charger isn’t working.', user: 'customer' },
    {
      text:
        'Thanks for reaching out. Can you give me some more detail about the issue?',
      user: 'agent'
    },
    {
      text:
        "I put my charger in my phone last night to charge and it isn't working. Which is ridiculous, it's a new charger, I bought it yesterday.",
      user: 'customer'
    },
    {
      text:
        'I’m sorry you’re having issues with charging. What kind of charger do you have?',
      user: 'agent'
    }
  ]
};

toneAnalyzer.toneChat(params, function(err, tone) {
  if (err) {
    console.log(err);
  } else {
    console.log('tone_chat endpoint:');
    console.log(JSON.stringify(tone, null, 2));
  }
});
/*
      toneAnalyzer.tone(
        {
          toneInput: 'Greetings from the Watson Developer Cloud Node SDK, we are pleased to say hello!',
          contentType: 'jsonp'
        },
        function(err, tone) {
          if (err) {
            console.log(err);
          } else {
            console.log('tone endpoint:');
            console.log(JSON.stringify(tone, null, 2));
          }
        }
      );
*/
      // in the constructor, letting the SDK manage the IAM token
      /*
      const discovery = await new DiscoveryV1({
        url: 'https://gateway-lon.watsonplatform.net/tone-analyzer/api',
        version: '2017-09-21',
        authenticator: new IamAuthenticator({ apikey:  'f6WZTLMlhrPjrmq5z6uuMq6iBqSwWKdUQLcGuBdkI4Rv' }),
        text: 'Hello world! How are you? This is to test my sentiment'
      });
      console.log(discovery);
      
      
      
      const url = 'https://gateway-lon.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21&text=Team%2C%20I%20know%20that%20times%20are%20tough%21%20Product%20sales%20have%20been%20disappointing%20for%20the%20past%20three%20quarters.%20We%20have%20a%20competitive%20product%2C%20but%20we%20need%20to%20do%20a%20better%20job%20of%20selling%20it%21'
      // Create a new user
      fetch( url, {
        url: 'https://gateway-lon.watsonplatform.net/tone-analyzer/api',
        version: '2017-09-21',
        authenticator: new IamAuthenticator({ apikey:  'f6WZTLMlhrPjrmq5z6uuMq6iBqSwWKdUQLcGuBdkI4Rv' }),
        text: 'Hello world! How are you? This is to test my sentiment'
      }).then(data => console.log(data))
      

*/
    }

    handleToxicity() {
      
      const sentences = this.news.title + ' ' + this.news.description;
       // Load the model. Users optionally pass in a threshold and an array of
      // labels to include.
      toxicity.load(threshold).then(model => {
        console.log(sentences)
        model.classify(sentences).then(predictions => {

          predictions.forEach(function (value) {
            if( value.results[0].match ) {
              console.log('label: ' + value.label);
              console.log('match: ' + value.results[0].match);

            }
          });
        });
      });
    }
}