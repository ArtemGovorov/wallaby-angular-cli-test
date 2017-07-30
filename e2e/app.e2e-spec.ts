import { WallabyAngularCliTestPage } from './app.po';

describe('wallaby-angular-cli-test App', () => {
  let page: WallabyAngularCliTestPage;

  beforeEach(() => {
    page = new WallabyAngularCliTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
