import { ViitraToDoPage } from './app.po';

describe('viitra-to-do App', () => {
  let page: ViitraToDoPage;

  beforeEach(() => {
    page = new ViitraToDoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
