import React from "react"
import { Videobarday1_1 } from "../../videobar/day1_1"
import { Videobarday1_2 } from "../../videobar/day1_2"
import { textUrl } from "../../texturl"
import { Link } from "rakkasjs";

export const Tabsday1 = ({ router }) => {
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
                    ? "text-white bg-red-600"
                    : "text-red-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab("1");
                  if (process.browser){
                    window.textfile = textUrl.day1.text1;
                    console.log(window.textfile);
                  }
                }}
                >01</a>
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
                    ? "text-white bg-red-600"
                    : "text-red-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab("2");
                  if (process.browser){
                    window.textfile = textUrl.day1.text2;
                    console.log(window.textfile);
                  }
                }}
                >02</a>
              </Link>
            </div>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                {isTabOne && <Videobarday1_1/>}
                {isTabTwo && <Videobarday1_2/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}





