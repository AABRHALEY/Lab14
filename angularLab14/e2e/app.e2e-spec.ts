import { AngularLab14Page } from './app.po';

describe('angular-lab14 App', () => {
  let page: AngularLab14Page;

  beforeEach(() => {
    page = new AngularLab14Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
