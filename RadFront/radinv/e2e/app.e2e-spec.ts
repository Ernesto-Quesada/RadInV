import { RadinvPage } from './app.po';

describe('radinv App', () => {
  let page: RadinvPage;

  beforeEach(() => {
    page = new RadinvPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
