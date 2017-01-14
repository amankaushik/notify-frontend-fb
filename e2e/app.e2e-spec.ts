import { NotifyFrontendFbPage } from './app.po';

describe('notify-frontend-fb App', function() {
  let page: NotifyFrontendFbPage;

  beforeEach(() => {
    page = new NotifyFrontendFbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
