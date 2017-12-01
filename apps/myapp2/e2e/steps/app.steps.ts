import { expect } from 'chai';
import { defineSupportCode } from 'cucumber';

import { AppPage } from './app.po';

defineSupportCode(({ Given, Then, Before }) => {
  let app: AppPage;

  Before(() => {
    app = new AppPage();
  });

  Given('I am on the landing page', () => app.navigateTo());

  Then('I should see a welcome message', () => {
    return expect(app.getText()).to.eventually.contains('Welcome to an Angular CLI app built with Nrwl Nx! myapp2');
  });
});
