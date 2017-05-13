import { Angular2toasterPage } from './app.po';

describe('angular2toaster App', () => {
  let page: Angular2toasterPage;

  beforeEach(() => {
    page = new Angular2toasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
