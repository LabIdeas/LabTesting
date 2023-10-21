import org.scalatest._
import org.openqa.selenium.htmlunit.HtmlUnitDriver

class SeleniumTest extends FlatSpec with Matchers {

  it should "open a website and check its title" in {
    val driver = new HtmlUnitDriver()
    driver.get("https://www.example.com")
    val title = driver.getTitle
    title should include("Example Domain")
    driver.quit()
  }
}