import { PlumberPage } from './app.po';

describe('plumber App', () => {
  let page: PlumberPage;

  beforeEach(() => {
    page = new PlumberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
