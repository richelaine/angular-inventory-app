import { AngularInventoryAppPage } from './app.po';

describe('angular-inventory-app App', () => {
  let page: AngularInventoryAppPage;

  beforeEach(() => {
    page = new AngularInventoryAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
