import React from "react"
import { Videobarday2_1 } from "../../videobar/day2_1"
import { Videobarday2_2 } from "../../videobar/day2_2"
import { textUrl } from "../../texturl"
import { Link } from "rakkasjs";


export const Tabsday2 = ({router}) => {
  if (process.browser)
  {
    fetch(window.textfile)
        .then(res => {
            return res.text()
        }).then(text => {
            console.log(text)
            window.obj = text;
        });
  }
  
  const [openTab, setOpenTab] = React.useState("1");
  const query: { openTab } = router
  const isTabOne = openTab === "1"
  const isTabTwo = openTab === "2"
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <div selected={isTabOne}>
              <Link href={{ pathname: "/", query: { openTab: "1" } }}>
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === "1"
                      ? "text-white bg-indigo-600"
                      : "text-indigo-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab("1");
                    if (process.browser){
                      window.textfile = textUrl.day2.text1;
                      console.log(window.textfile);
                    }
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  01
                </a>
              </Link>
            </div>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <div selected={isTabTwo}>
              <Link href={{ pathname: "/", query: { openTab: "2" } }}>
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === "2"
                      ? "text-white bg-indigo-600"
                      : "text-indigo-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab("2");
                    if (process.browser){
                      window.textfile = textUrl.day2.text2;
                      console.log(window.textfile);
                    }
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  02
                </a>
              </Link>
            </div>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              {isTabOne && <Videobarday2_1/>}
              {isTabTwo && <Videobarday2_2/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
