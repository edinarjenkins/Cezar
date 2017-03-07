import { CezarPage } from './app.po';

describe('cezar App', function() {
  let page: CezarPage;

  beforeEach(() => {
    page = new CezarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
