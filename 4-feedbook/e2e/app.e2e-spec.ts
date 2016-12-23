import { FeedbookPage } from './app.po';

describe('feedbook App', function() {
  let page: FeedbookPage;

  beforeEach(() => {
    page = new FeedbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
