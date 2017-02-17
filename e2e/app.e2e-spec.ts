import { GitSearchUserPage } from './app.po';

describe('git-search-user App', function() {
  let page: GitSearchUserPage;

  beforeEach(() => {
    page = new GitSearchUserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
