import { Ng2translatePage } from './app.po';

describe('ng2translate App', () => {
  let page: Ng2translatePage;

  beforeEach(() => {
    page = new Ng2translatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
