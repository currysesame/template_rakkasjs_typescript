import { Tabsday2 } from "../components/tabs/day2"
import { textUrl } from "../components/texturl"
import { Items } from "../components/items"

if (process.browser){
  window.textfile = textUrl.day2.text1;
  console.log(window.textfile);
}

const day2Page = () => (
  <main>
    <Tabsday2 />
    <Items/>
  </main>
);

export default day2Page;
