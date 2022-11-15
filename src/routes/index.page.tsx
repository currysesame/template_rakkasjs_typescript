import { Page } from "rakkasjs";
import { Tabsday1 } from "../components/tabs/day1/"
import { Items } from "../components/items"
import { textUrl } from "../components/texturl"


if (process.browser){
  window.textfile = textUrl.day1.text1;
  console.log(window.textfile);
}

const HomePage: Page = function HomePage() {

  return (
    <main>
      <Tabsday1 />
      <Items/>
    </main>
  );
};

export default HomePage;
