# Ember Demo Application

This is a demo application to work out the basics of the Ember. 

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### API

This application uses a stubbed [Pretender](https://github.com/trek/pretender) API instead of communicating with a real backend. You can find the definition of the data fixtures and endpoints in `app.js`. 

**Endpoints**
* `GET /api/actors`
* `GET /api/actors/:id`
* `GET /api/movies`
* `GET /api/movies/:id`
* `POST /api/session`

**Authentication**
`POST /api/session` is the only endpoint accessible without authentication. The only valid login is `tony:montana`. The application uses a custom authenticator (`stubbed.js`) to communicate with the `/api/session` endpoint. 

The custom authenticator is influenced by the [Ember Simple Auth OAuth 2](https://github.com/simplabs/ember-simple-auth/tree/master/packages/ember-simple-auth-oauth2) extension. 

## Testing

### Running Tests

In the command line:
* `ember test`
* `ember test --server`

In the browser:
* Go to [http://localhost:4200/tests](http://localhost:4200/tests)

### Testing Helpers

**loginThroughForm()**

While it’s normally possible to utilize the [Ember Simple Auth Testing](https://github.com/simplabs/ember-simple-auth/tree/master/packages/ember-simple-auth-testing) extension to stub logging in for integration tests, this will not actually hit the API endpoint and set `loggedIn` to true (allowing access to the other API endpoints). This creates a situation that does not line up with the actual use of the application.

To circumvent this, this test helper will actually log in through the form before proceeding on to other tests. Recommend for use in the setup block. Note that this method is slower than using the Ember Simple Auth Testing extension. 

## Styleguide
* Use 2 spaces instead of tabs
* Only use vanilla JavaScript (No CoffeeScript)

## Tools Used
* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* [Pretender](https://github.com/trek/pretender) Stubbed API
* [Simple Auth](https://github.com/simplabs/ember-simple-auth) Authentication
* [Zurb Foundation](http://foundation.zurb.com/) Styling
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

