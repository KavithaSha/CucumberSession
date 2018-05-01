package com.cucumber.steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CucumberSteps {
	
	WebDriver driver;
	@Given("^User Launch the application$")
	public void user_Launch_the_application() throws Throwable {
		System.setProperty("webdriver.gecko.driver","C:\\Kavitha\\Selenium_AutomationWorkspace\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://login.salesforce.com/");
	}

	@When("^User enter the Username$")
	public void user_enter_the_Username() throws Throwable {
	   Thread.sleep(3000);
		driver.findElement(By.xpath(".//*[@id='username']")).sendKeys("kavithavuppin@gmail.com");
	}

	@When("^User enter the password$")
	public void user_enter_the_password() throws Throwable {
		Thread.sleep(2000);
	   driver.findElement(By.xpath(".//*[@id='password']")).sendKeys("Bhuvanesa0");
	}

	@Then("^Click on Login$")
	public void click_on_Login() throws Throwable {
		Thread.sleep(2000);
	  driver.findElement(By.xpath(".//*[@id='Login']")).click();
	}

	@Then("^verify the pagetitle of home page$")
	public void verify_the_pagetitle_of_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}


}
