import { browser, by } from 'protractor';

export class AppPage {
  public navigateTo() {
    return browser.get('#');
  }

  public getText() {
    return browser.findElement(by.css('body')).getText();
  }
}
