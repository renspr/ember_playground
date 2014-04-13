Ember Playground
----------------

Ember Playground is an example app to demo various features and (hopefully) best practice on how to use
[Ember.js](http://emberjs.com), [Ember Data](https://github.com/emberjs/data) and
[EmberAppkitRails](https://github.com/dockyard/ember-appkit-rails) with
a [Ruby on Rails](http://rubyonrails.org) back end.

Currently I'm focusing on CRUD operations and server side form validations as part of the "Ember Contacts"
example.

## Installation

Clone/download the app, then run `bundle` to download the dependencies.

```console
git clone https://github.com/renspr/ember_playground.git
cd ember_playground
bundle
```

Create/setup the database and populate the database with some dummy data to play with.

```console
rake db:migrate
rake db:seed
```

Now you can now run the Rails server and access the app in your browser.

```console
rails s
```
