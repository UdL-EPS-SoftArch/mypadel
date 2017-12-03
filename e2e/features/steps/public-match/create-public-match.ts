
import {binding, when} from 'cucumber-tsflow';

@binding()
class CreatePublicMatchSteps {

  @when(/^I create a public match with date "([^"]*)", court type "([^"]*)" and level "([^"]*)"$/)
  public iCreateAPublicMatch(date: string, courtType: string, level: string): void{

  }

}
