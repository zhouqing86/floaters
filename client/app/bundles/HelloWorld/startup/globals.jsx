import HelloWorldApp from './HelloWorldApp';
import HelloMessage from './HelloMessage';

// This is how react_on_rails can see the HelloWorldApp in the browser.
window.HelloWorldApp = HelloWorldApp;
window.HelloMessage = HelloMessage;
