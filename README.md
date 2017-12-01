# NrwlProtractor

This is an example of a nrwl workspace using Cucumber & Protractor. By default nrwl workspaces use Jasmin & Protractor.

For more details on the changes see [wiki](https://github.com/mrwarrens/nrwl-cucumber/wiki)

#### Commands 

Serve myapp1, then run e2e tests against that server

`ng e2e --app=myapp1`

Run against a remove server

`ng e2e --app=myapp1 --serve=false --base-url=http://my.remote.server.com/app-context/`

Skip updating webdriver

`ng e2e --app=myapp1 --webdriver-update=false`

#### Notes
This implementation makes `app` a required parameter.
