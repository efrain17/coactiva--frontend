import { CoactivasPage } from './app.po';

describe('coactivas App', function() {
  let page: CoactivasPage;

  beforeEach(() => {
    page = new CoactivasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
