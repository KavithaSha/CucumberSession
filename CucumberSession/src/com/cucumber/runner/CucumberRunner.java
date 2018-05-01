package com.cucumber.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(format= {"pretty","html:target/cucumber","json:target/cucumber-report.json"}, glue= {
"com.cucumber.steps"},features= {"src/com/cucumber/session/CucumberSession1.feature"},tags= {})		

public class CucumberRunner {

	
}
