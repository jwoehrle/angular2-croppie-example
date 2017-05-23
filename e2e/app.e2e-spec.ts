import { CropperPage } from './app.po';

describe('cropper App', () => {
  let page: CropperPage;

  beforeEach(() => {
    page = new CropperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
