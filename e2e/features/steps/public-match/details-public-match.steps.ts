import {CourtDetailsPage} from '../../../pages/court/court-details.page';
import {binding} from 'cucumber-tsflow';
import {MainContentPage} from '../../../pages/main-content.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class DetailCourtSteps {
  private mainContent = new MainContentPage();
  private courtDetails = new CourtDetailsPage();
}
