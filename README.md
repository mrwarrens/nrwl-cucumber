# NrwlCucumber

This is an example of a [nrwl workspace](https://nrwl.io/nx) using Cucumber & Protractor. By default nrwl workspaces use Jasmin & Protractor.

For more details on the changes see [wiki](https://github.com/mrwarrens/nrwl-cucumber/wiki)

#### Commands 

Serve myapp1, then run just myapp1's e2e tests against that server

`ng e2e --app=myapp1`

Run myapp1's e2e tests against a remove server

`ng e2e --app=myapp1 --serve=false --base-url=http://my.remote.server.com/app-context/`

Skip updating webdriver

`ng e2e --app=myapp1 --webdriver-update=false`

#### Notes
This implementation makes `app` a required parameter. Developling locally often against just one application.  This also has the advantage of preventing conflicting steps across applications.
