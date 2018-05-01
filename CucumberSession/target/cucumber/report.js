$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/com/cucumber/session/CucumberSession1.feature");
formatter.feature({
  "line": 1,
  "name": "Login into salesforcce",
  "description": "",
  "id": "login-into-salesforcce",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify the login is successful",
  "description": "",
  "id": "login-into-salesforcce;verify-the-login-is-successful",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User Launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter the Username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter the password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify the pagetitle of home page",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberSteps.user_Launch_the_application()"
});
formatter.result({
  "duration": 9644427152,
  "status": "passed"
});
formatter.match({
  "location": "CucumberSteps.user_enter_the_Username()"
});
formatter.result({
  "duration": 3151004044,
  "status": "passed"
});
formatter.match({
  "location": "CucumberSteps.user_enter_the_password()"
});
formatter.result({
  "duration": 2195522343,
  "status": "passed"
});
formatter.match({
  "location": "CucumberSteps.click_on_Login()"
});
formatter.result({
  "duration": 3546706947,
  "status": "passed"
});
formatter.match({
  "location": "CucumberSteps.verify_the_pagetitle_of_home_page()"
});
formatter.result({
  "duration": 1109710,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.cucumber.steps.CucumberSteps.verify_the_pagetitle_of_home_page(CucumberSteps.java:46)\r\n\tat ✽.Then verify the pagetitle of home page(src/com/cucumber/session/CucumberSession1.feature:9)\r\n",
  "status": "pending"
});
});