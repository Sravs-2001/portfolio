import React from "react";
import profile from "../../src/assets/1768823700276.jpg";

export default function Navbar() {
  function SkillTile({ src, rounded = false }) {
    return (
      <div className="flex items-center justify-center aspect-square h-[72px] w-[72px] relative shrink-0 rounded-[16px] overflow-hidden">
        {/* Icon wrapper */}
        <div
          className={`absolute inset-[18px] z-[2] overflow-hidden ${rounded ? "rounded-[10px]" : ""}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={src}
              alt="Skill logo"
              className={`w-[36px] h-[36px] object-contain ${rounded ? "rounded-[10px]" : ""}`}
            />
          </div>
        </div>

        {/* Soft white overlay */}
        <div className="absolute inset-0 bg-white opacity-[0.06] z-[1]" />
      </div>
    );
  }

  return (
    <>
      <style>{`div {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;

}
h1 {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif;
  font-style: normal;
  font-weight: 500;
  color: rgb(255, 255, 255);
  font-size: 160px;
  letter-spacing: -6.4px;
  text-transform: none;
  text-decoration-skip-ink: auto;
  text-underline-offset: auto;
  line-height: 160px;
  text-align: start;
  -webkit-text-stroke-width: 0px;
  -webkit-text-stroke-color: rgb(255, 255, 255);
  font-feature-settings: normal;
  font-variation-settings: normal;
  text-wrap-mode: nowrap;
  text-wrap-style: auto;
  padding: 0px;
  margin: 0px;
  text-decoration: none;

}
span {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;

}
a {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  display: flex;
  align-content: center;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  flex-wrap: nowrap;
  row-gap: 16px;
  column-gap: 16px;
  justify-content: flex-end;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  will-change: auto;
  backdrop-filter: blur(10px);
  box-shadow: rgba(255, 255, 255, 0.06) 0px 1px 0px 1px inset;
  opacity: 1;
  border-radius: 32px;
  padding: 32px;
  text-decoration: none;

}
p {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: "Open Sauce Sans", "Open Sauce Sans Placeholder", sans-serif;
  font-style: normal;
  font-weight: 500;
  color: rgb(255, 255, 255);
  font-size: 18px;
  letter-spacing: -0.36px;
  text-transform: none;
  text-decoration-skip-ink: auto;
  text-underline-offset: auto;
  line-height: 21.6px;
  text-align: start;
  -webkit-text-stroke-width: 0px;
  -webkit-text-stroke-color: rgb(255, 255, 255);
  font-feature-settings: normal;
  font-variation-settings: normal;
  text-wrap-mode: nowrap;
  text-wrap-style: auto;
  padding: 0px;
  margin: 0px;
  text-decoration: none;

}
svg {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  display: block;
  width: 18px;
  height: 16px;

}
use {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;

}
img {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  display: block;
  object-position: 50% 50%;

}
li {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;

}
`}</style>
      <header className="box-border antialiased flex flex-col items-center justify-start gap-[10px] h-[708px] w-full overflow-hidden relative px-4 pb-4 bg-black text-black text-[12px] leading-normal font-sans">
        <div className="absolute top-0 left-4 right-4 z-[1] flex flex-col items-center justify-start gap-6 h-[160px] min-h-[160px] overflow-hidden p-0">
          <div className="absolute top-[-240px] left-[744.4px] z-[1] flex flex-col justify-start h-[160px] w-[919.263px] whitespace-nowrap [transform:matrix(1,0.212557,0,1,-459.631,0)] origin-[459.631px_80px] will-change-transform outline-none">
            {/* <h1 style={{}}>
              <span
                style={{
                  whiteSpaceCollapse: "collapse",
                  textWrapMode: "nowrap",
                }}
              >
                <span
                  style={{ display: "inline-block", willChange: "transform" }}
                >
                  N
                </span>
                <span
                  style={{ display: "inline-block", willChange: "transform" }}
                >
                  o
                </span>
                <span
                  style={{ display: "inline-block", willChange: "transform" }}
                >
                  l
                </span>
                <span
                  style={{ display: "inline-block", willChange: "transform" }}
                >
                  a
                </span>
                <span
                  style={{ display: "inline-block", willChange: "transform" }}
                >
                  n
                </span>
              </span>
              <span
                style={{
                  whiteSpaceCollapse: "collapse",
                  textWrapMode: "nowrap",
                }}
              >
                <span
                  style={{ display: "inline-block", willChange: "transform" }}
                >
                  C
                </span>
                <span
                  style={{ display: "inline-block", willChange: "transform" }}
                >
                  a
                </span>
                <span
                  style={{ display: "inline-block", willChange: "transform" }}
                >
                  r
                </span>
                <span
                  style={{ display: "inline-block", willChange: "transform" }}
                >
                  t
                </span>
                <span
                  style={{ display: "inline-block", willChange: "transform" }}
                >
                  e
                </span>
                <span
                  style={{ display: "inline-block", willChange: "transform" }}
                >
                  r
                </span>
              </span>
            </h1> */}
            <h1 className="whitespace-nowrap">
              <span className="whitespace-nowrap">
                <span className="inline-block will-change-transform">S</span>
                <span className="inline-block will-change-transform">r</span>
                <span className="inline-block will-change-transform">a</span>
                <span className="inline-block will-change-transform">v</span>
                <span className="inline-block will-change-transform">a</span>
                <span className="inline-block will-change-transform">n</span>
                <span className="inline-block will-change-transform">i</span>
              </span>

              {/* <span className="whitespace-nowrap ml-2">
    <span className="inline-block will-change-transform">M</span>
    <span className="inline-block will-change-transform">a</span>
    <span className="inline-block will-change-transform">d</span>
    <span className="inline-block will-change-transform">a</span>
    <span className="inline-block will-change-transform">k</span>
    <span className="inline-block will-change-transform">a</span>
  </span> */}
            </h1>
          </div>
          <div className="absolute top-[240px] left-[744.4px] z-[1] flex flex-col justify-start h-[160px] w-[440px] whitespace-nowrap outline-none [transform:matrix(1,0.212557,0,1,-220,0)]">
            <h1 style={{}}>About</h1>
          </div>
          <div className="absolute top-0 left-[744.4px] z-[1] flex flex-col justify-start h-[160px] w-[612.65px] whitespace-nowrap outline-none [transform:matrix(1,0,0,1,-306.325,0)] origin-[306.325px_80px] will-change-transform">
            <h1>Portfolio</h1>
          </div>

          <div className="absolute top-[240px] left-[744.4px] z-[1] flex flex-col justify-start h-[160px] w-[582.088px] whitespace-nowrap outline-none [transform:matrix(1,0.212557,0,1,-291.044,0)]">
            <h1>Contact</h1>
          </div>

          <div className="absolute top-[240px] left-[744.4px] z-[1] flex flex-col justify-start h-[160px] w-[420.325px] whitespace-nowrap outline-none [transform:matrix(1,0.212557,0,1,-210.163,0)]">
            <h1>Stack</h1>
          </div>

          <div className="absolute top-[240px] left-[744.4px] z-[1] flex flex-col justify-start h-[160px] w-[599.688px] whitespace-nowrap outline-none [transform:matrix(1,0.212557,0,1,-299.844,0)]">
            <h1>Resume</h1>
          </div>

          <div className="absolute top-[240px] left-[744.4px] z-[1] flex flex-row items-center justify-center gap-8 h-[160px] w-[431.763px] overflow-visible p-0 [transform:matrix(1,0.212557,0,1,-215.881,0)]">
            {/* TEXT BLOCK */}
            <div className="relative z-[1] flex flex-col justify-start h-[160px] w-[289.763px] whitespace-nowrap outline-none [transform:matrix(1,0.212557,0,1,0,0)]">
              <h1>Hey</h1>
            </div>

            {/* SVG ICON BLOCK */}
            <div
              aria-hidden="true"
              className="relative h-[110px] w-[110px] bg-[length:100%_100%] [image-rendering:pixelated]"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" viewBox=\\"0 0 110 110\\"><g transform=\\"translate(0 0.151)\\"><path d=\\"M 0 109.547 L 0 0 L 110 0 L 110 109.547 Z\\" fill=\\"transparent\\"></path><g transform=\\"translate(0 0.128)\\"><path d=\\"M 14.854 27.706 C 17.726 25.707 22.056 26.09 24.635 28.211 L 21.677 23.93 C 19.297 20.549 20.149 16.891 23.547 14.518 C 26.945 12.153 36.573 18.51 36.573 18.51 C 34.171 15.096 34.621 10.769 38.049 8.374 C 41.477 5.988 46.207 6.813 48.609 10.233 L 80.448 55.026 L 76.39 94.204 L 42.525 81.905 L 12.987 38.289 C 10.564 34.854 11.401 30.116 14.854 27.706 Z\\" fill=\\"rgb(228,140,21)\\"></path></g></svg>")',
              }}
            />
          </div>
        </div>
        <div
          className="
  grid flex-1 
  gap-[16px] 
  grid-rows-[288px_288px] 
  grid-cols-[360.2px_360.2px_360.2px_360.2px]
  h-[692px] 
  justify-center 
  overflow-hidden 
  relative 
  w-[1488.8px] 
  z-[2] 
  pt-[100px]
"
        >
          <div className="self-start relative w-[360.2px] h-[288px]">
            <a href="./about" className="block w-[360.2px] h-[288px] relative">
              {/* Header Row */}
              <div className="flex justify-between items-center h-[22px] w-[296.2px] relative z-[2] overflow-hidden">
                {/* Text Stack */}
                <div className="flex flex-col gap-[8px] h-[22px] w-[51.3px] select-none overflow-hidden">
                  <div className="flex flex-col justify-start h-[21.6px] w-[51.3px]">
                    <p>About</p>
                  </div>

                  <div className="flex flex-col justify-start h-[21.6px] w-[51.3px] skew-y-[12deg]">
                    <p>About</p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="flex justify-center items-center h-[16px] w-[18px] overflow-visible">
                  <div className="flex flex-col justify-start h-[16px] w-[18px] rotate-45 overflow-hidden">
                    <div className="relative h-[16px] w-[18px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-white opacity-[0.08] z-[1]"></div>
            </a>
          </div>
          <div className="self-start col-span-3 relative w-[1112.6px] h-[288px]">
            <a
              href="./portfolio"
              className="block w-[1112.6px] h-[288px] relative"
            >
              {/* Header Row */}
              <div className="flex justify-between items-center h-[22px] w-[1048.6px] relative z-[2] overflow-hidden">
                {/* Text Stack */}
                <div className="flex flex-col gap-[8px] h-[22px] w-[72.1625px] select-none overflow-hidden">
                  <div className="flex flex-col justify-start h-[21.6px] w-[72.1625px] origin-center will-change-transform">
                    <p>Portfolio</p>
                  </div>

                  <div className="flex flex-col justify-start h-[21.6px] w-[72.1625px] skew-y-[12deg] origin-center will-change-transform">
                    <p>Portfolio</p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="flex justify-center items-center h-[16px] w-[18px] overflow-visible">
                  <div className="flex flex-col justify-start h-[16px] w-[18px] rotate-45 overflow-hidden">
                    <div className="relative h-[16px] w-[18px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-white opacity-[0.08] z-[1] will-change-transform"></div>
            </a>
          </div>

          <div
            className="
  self-start 
  grid 
  col-span-3 
  gap-[16px] 
  grid-cols-[360.2px_360.2px_360.2px] 
  grid-rows-[288px] 
  h-[288px] 
  justify-center 
  relative 
  w-[1112.6px] 
  z-[1]
"
          >
            {/* CONTACT CARD */}
            <div className="self-start col-span-2 relative w-[736.4px] h-[288px]">
              <a
                href="./contact"
                className="block w-[736.4px] h-[288px] relative"
              >
                <div className="flex justify-between items-center h-[22px] w-[672.4px] relative z-[2] overflow-hidden">
                  {/* Text Stack */}
                  <div className="flex flex-col gap-[8px] w-[68.0125px] select-none overflow-hidden">
                    <div className="flex flex-col justify-start h-[21.6px] w-[68.0125px]">
                      <p>Contact</p>
                    </div>

                    {/* <div className="flex flex-col justify-start h-[21.6px] w-[68.0125px] skew-y-[12deg]">
                      <p>Contact</p>
                    </div> */}
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center items-center h-[16px] w-[18px] overflow-visible">
                    <div className="rotate-45 flex justify-start h-[16px] w-[18px] overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-white opacity-[0.08] z-[1]"></div>
              </a>
            </div>

            {/* PROFILE IMAGE CARD */}
            <div
              className="
    self-start 
    flex 
    flex-col 
    justify-center 
    items-center 
    h-[288px] 
    w-[360.2px] 
    relative 
    rounded-[32px] 
    overflow-hidden 
    shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)]
    select-none
  "
            >
              <div className="absolute inset-[1px] rounded-[32px] overflow-hidden z-[1]">
                <img
                  src={profile}
                  alt=""
                  className="w-[358.2px] h-[286px] object-cover rounded-[32px]"
                />
              </div>

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-white opacity-[0.08] z-[0]"></div>
            </div>
          </div>

          <div className="self-start grid flex-grow-0 flex-shrink-0 gap-4 grid-cols-1 grid-rows-[136px_136px] h-[288px] justify-center justify-self-start overflow-hidden relative w-[360.2px] p-0">
            <div className="self-start cursor-grab flex-grow-0 flex-shrink-0 h-[136px] justify-self-start relative w-[360.2px]">
              {/* Content goes here */}
              <div className="flex flex-col items-center justify-center gap-4 h-[136px] w-[360.2px] overflow-hidden relative backdrop-blur-[10px] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.06)] rounded-[32px] p-[32px]">
                <div className="flex-grow-0 flex-shrink-0 h-[72px] w-[296.2px] relative">
                  <div className="flex flex-col items-center justify-center h-[72px] w-[296.2px] overflow-hidden relative p-0">
                    {/* Your content here */}
                    <div
                      name="Ticker"
                      className="relative h-[72px] w-[296.2px] flex-shrink-0 flex-grow-0 z-[1]"
                    >
                      <section
                        className="flex w-full h-full items-center justify-center overflow-hidden list-none p-0 m-0 
    [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,black_12.5%,black_87.5%,rgba(0,0,0,0)_100%)]"
                      >
                        <ul
                          className="flex w-full h-full items-center gap-4 list-none p-0 m-0 flex-row will-change-transform relative"
                          style={{
                            transform: "matrix(1, 0, 0, 1, -633.689, 0)",
                          }}
                        >
                          <li style={{}}>
                            <div className="flex items-center justify-center aspect-square h-[72px] w-[72px] overflow-hidden relative shrink-0 rounded-[16px] p-0">
                              <div className="absolute inset-[18px] overflow-hidden z-[2] shrink-0">
                                <div className="absolute inset-0 rounded-none">
                                  <img
                                    decoding="async"
                                    width="334"
                                    height="500"
                                    src="https://framerusercontent.com/images/YSG9Il0233T2Woq4Fpetvt6FxGA.webp"
                                    alt="Figma logo"
                                    className="w-[36px] h-[36px] object-contain rounded-none"
                                  />
                                </div>
                              </div>
                              <div className="absolute inset-0 overflow-visible z-[1] bg-white opacity-[0.06]"></div>
                            </div>
                          </li>

                          <li>
                            <div className="flex items-center justify-center aspect-square h-[72px] w-[72px] overflow-hidden relative shrink-0 rounded-[16px] p-0">
                              <div className="absolute inset-[18px] overflow-hidden z-[2] shrink-0">
                                <div className="absolute inset-0 rounded-none">
                                  <img
                                    decoding="async"
                                    width="340"
                                    height="500"
                                    src="https://framerusercontent.com/images/0j5gYeoRsZG8PJ9hniVzHMcaYo.webp"
                                    alt="Figma logo"
                                    className="w-[36px] h-[36px] object-contain rounded-none"
                                  />
                                </div>
                              </div>
                              <div className="absolute inset-0 overflow-visible z-[1] bg-white opacity-[0.06]"></div>
                            </div>
                          </li>
                          <li style={{}}>
                            <div className="flex items-center justify-center aspect-square h-[72px] w-[72px] overflow-hidden relative shrink-0 rounded-[16px] p-0">
                              <div className="absolute inset-[18px] overflow-hidden z-[2] shrink-0">
                                <div className="absolute inset-0 rounded-none">
                                  <img
                                    decoding="async"
                                    width="500"
                                    height="427"
                                    src="https://framerusercontent.com/images/Jo45NE9cozyWEGOc3q5r66Sl98.webp"
                                    alt="Figma logo"
                                    className="w-[36px] h-[36px] object-contain rounded-none"
                                  />
                                </div>
                              </div>
                              <div className="absolute inset-0 overflow-visible z-[1] bg-white opacity-[0.06]"></div>
                            </div>
                          </li>

                          <li>
                            <div className="flex items-center justify-center aspect-square h-[72px] w-[72px] overflow-hidden relative shrink-0 rounded-[16px] p-0">
                              <div className="absolute inset-[18px] overflow-hidden z-[2] shrink-0">
                                <div className="absolute inset-0 rounded-none">
                                  <img
                                    decoding="async"
                                    width="500"
                                    height="500"
                                    src="https://framerusercontent.com/images/9RCvsOul5SzZBJr1jZ2P5dKjLc.webp"
                                    alt="Figma logo"
                                    className="w-[36px] h-[36px] object-contain rounded-none"
                                  />
                                </div>
                              </div>
                              <div className="absolute inset-0 overflow-visible z-[1] bg-white opacity-[0.06]"></div>
                            </div>
                          </li>
                          <li style={{}}>
                            <div className="flex items-center justify-center aspect-square h-[72px] w-[72px] overflow-hidden relative shrink-0 rounded-[16px] p-0">
                              {/* Inner icon container */}
                              <div className="absolute inset-[18px] overflow-hidden z-[2]">
                                <div className="absolute inset-0 rounded-none flex items-center justify-center">
                                  <img
                                    decoding="async"
                                    width="480"
                                    height="500"
                                    src="https://framerusercontent.com/images/DqvuS90E062F5mQTYxRztACjEWs.webp"
                                    alt="Figma logo"
                                    className="w-[36px] h-[36px] object-contain rounded-none"
                                  />
                                </div>
                              </div>

                              {/* Soft white overlay */}
                              <div className="absolute inset-0 z-[1] bg-white opacity-[0.06]"></div>
                            </div>
                          </li>
                          <li style={{}}>
                            <div className="flex items-center justify-center aspect-square h-[72px] w-[72px] overflow-hidden relative shrink-0 rounded-[16px] p-0">
                              {/* Inner icon container */}
                              <div className="absolute inset-[18px] overflow-hidden z-[2] rounded-[10px]">
                                <div className="absolute inset-0 rounded-[10px] flex items-center justify-center">
                                  <img
                                    decoding="async"
                                    width="460"
                                    height="460"
                                    src="https://framerusercontent.com/images/dn7QoOO5bw8IB8S45pqyNaWr1RI.webp"
                                    alt="Figma logo"
                                    className="w-[36px] h-[36px] object-contain rounded-[10px]"
                                  />
                                </div>
                              </div>

                              {/* Soft white overlay */}
                              <div className="absolute inset-0 z-[1] bg-white opacity-[0.06]"></div>
                            </div>
                          </li>
                          <li style={{}}>
                            <div className="flex items-center justify-center aspect-square h-[72px] w-[72px] overflow-hidden relative shrink-0 rounded-[16px] p-0">
                              {/* Inner icon container */}
                              <div className="absolute inset-[18px] overflow-hidden z-[2] rounded-[10px]">
                                <div className="absolute inset-0 rounded-[10px] flex items-center justify-center">
                                  <img
                                    decoding="async"
                                    width="500"
                                    height="500"
                                    src="https://framerusercontent.com/images/O04c1vkhn73dPjg0bBMR5PCp0.webp"
                                    alt="Figma logo"
                                    className="w-[36px] h-[36px] object-contain rounded-[10px]"
                                  />
                                </div>
                              </div>

                              {/* Soft white overlay */}
                              <div className="absolute inset-0 z-[1] bg-white opacity-[0.06]"></div>
                            </div>
                          </li>
                          <li>
                            <SkillTile src="https://framerusercontent.com/images/6iUqSWA8HhqKewIWzauruisFCkE.webp" />
                          </li>
                          <li>
                            <SkillTile src="https://framerusercontent.com/images/YSG9Il0233T2Woq4Fpetvt6FxGA.webp" />
                          </li>
                          <li>
                            <SkillTile src="https://framerusercontent.com/images/0j5gYeoRsZG8PJ9hniVzHMcaYo.webp" />
                          </li>
                          <li>
                            <SkillTile src="https://framerusercontent.com/images/Jo45NE9cozyWEGOc3q5r66Sl98.webp" />
                          </li>
                          <li>
                            <SkillTile src="https://framerusercontent.com/images/9RCvsOul5SzZBJr1jZ2P5dKjLc.webp" />
                          </li>
                          <li>
                            <SkillTile src="https://framerusercontent.com/images/DqvuS90E062F5mQTYxRztACjEWs.webp" />
                          </li>

                          {/* Rounded icons */}
                          <li>
                            <SkillTile
                              rounded
                              src="https://framerusercontent.com/images/dn7QoOO5bw8IB8S45pqyNaWr1RI.webp"
                            />
                          </li>
                          <li>
                            <SkillTile
                              rounded
                              src="https://framerusercontent.com/images/O04c1vkhn73dPjg0bBMR5PCp0.webp"
                            />
                          </li>
                          <li
                            aria-hidden="true"
                            className="will-change-transform"
                          >
                            <div className="flex items-center justify-center aspect-square h-[72px] w-[72px] relative shrink-0 rounded-[16px] overflow-hidden p-0">
                              {/* Inner icon container */}
                              <div className="absolute inset-[18px] z-[2] overflow-hidden rounded-[10px]">
                                <div className="absolute inset-0 rounded-[10px] flex items-center justify-center">
                                  <img
                                    decoding="async"
                                    width="460"
                                    height="460"
                                    src="https://framerusercontent.com/images/dn7QoOO5bw8IB8S45pqyNaWr1RI.webp"
                                    alt="Figma logo"
                                    className="w-[36px] h-[36px] object-contain rounded-[10px]"
                                  />
                                </div>
                              </div>

                              {/* Soft white overlay */}
                              <div className="absolute inset-0 z-[1] bg-white opacity-[0.06]"></div>
                            </div>
                          </li>
                          <li
                            aria-hidden="true"
                            className="will-change-transform"
                          >
                            <div className="flex items-center justify-center aspect-square h-[72px] w-[72px] relative shrink-0 rounded-[16px] overflow-hidden p-0">
                              {/* Inner icon container */}
                              <div className="absolute inset-[18px] z-[2] overflow-hidden rounded-[10px]">
                                <div className="absolute inset-0 rounded-[10px] flex items-center justify-center">
                                  <img
                                    decoding="async"
                                    width="500"
                                    height="500"
                                    src="https://framerusercontent.com/images/O04c1vkhn73dPjg0bBMR5PCp0.webp"
                                    alt="Figma logo"
                                    className="w-[36px] h-[36px] object-contain rounded-[10px]"
                                  />
                                </div>
                              </div>

                              {/* Soft white overlay */}
                              <div className="absolute inset-0 z-[1] bg-white opacity-[0.06]"></div>
                            </div>
                          </li>
                          <li
                            aria-hidden="true"
                            className="will-change-transform"
                          >
                            <div className="flex items-center justify-center aspect-square h-[72px] w-[72px] relative shrink-0 rounded-[16px] overflow-hidden p-0">
                              {/* Inner icon container */}
                              <div className="absolute inset-[18px] z-[2] overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <img
                                    decoding="async"
                                    width="412"
                                    height="412"
                                    src="https://framerusercontent.com/images/6iUqSWA8HhqKewIWzauruisFCkE.webp"
                                    alt="Figma logo"
                                    className="w-[36px] h-[36px] object-contain rounded-none"
                                  />
                                </div>
                              </div>

                              {/* Soft white overlay */}
                              <div className="absolute inset-0 z-[1] bg-white opacity-[0.06]"></div>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 z-[1] bg-white/10 backdrop-blur-md border border-white/20"></div>
              </div>
            </div>
            <div className="relative w-[360px] h-[136px] self-start">
              <a
                href="https://drive.google.com/file/d/167um-hT0g-Xc2ClPDNb0z40feV9LT7e2/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative"
              >
                {/* Top Content */}
                <div className="relative z-[2] flex justify-between items-center w-[296px] h-[22px] overflow-hidden">
                  {/* Resume Text Stack */}
                  <div className="flex flex-col gap-2 select-none">
                    <p className="text-base">Resume</p>

                    {/* <p className="text-base transform skew-y-6">Resume</p> */}
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex items-center justify-center w-[18px] h-[16px] rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>

                {/* Glass Overlay Background */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-[1]"></div>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
