import HomePage from '../../pages/HomePage';

const homePage = new HomePage();

Given('I open the home page', () => {
  homePage.visit();
});

Then('I should see the title {string}', (title) => {
  homePage.clickHomePageImage();
});