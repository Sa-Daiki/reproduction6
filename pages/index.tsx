import Image from "next/image";

import mainVisual from "/public/mainvisual.jpg";
import concept from "/public/concept.jpg";
import work from "/public/work.jpg";

const index = () => {
  return (
    <>
      <main>
        <div>
          <div className="w-full mx-auto md:w-[90vw]">
            <Image
              src={mainVisual}
              alt=""
              height={1920}
              width={900}
              className="w-full mx-auto maxW-full h-[366px] md:h-[auto] md:mt-[4%] object-cover"
            />
          </div>

          <header className="w-[90%] mx-auto">
            <div className="flex justify-between py-[18px] mb-[20px] md:justify-start">
              <a className="mr-[50px] text-[14px]">Wooden Jewelry</a>
              <ul className="flex">
                <li className="mr-[30px] ">
                  <a className="text-[14px]">Concept</a>
                </li>
                <li className="mr-[30px]">
                  <a className="text-[14px]">Work</a>
                </li>
                <li className="">
                  <a className="text-[14px]">Contact</a>
                </li>
              </ul>
            </div>
          </header>

          <div className="max-w-[1000px] mx-auto px-[18px]">
            <section className="flex items-center mb-[60px] flex-col md:flex-row">
              <div className="md:w-[50%]">
                <Image
                  src={concept}
                  alt=""
                  width={1000}
                  height={1000}
                  className="maxW-[100%] mb-1 object-contain align-bottom"
                />
              </div>
              <div className="md:w-[50%] md:px-[7%]">
                <h1 className="text-[20px] mb-1">
                  私たちの考えるジュエリーとは
                </h1>
                <h2 className="text-4 mb-[25px]">Concept</h2>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  <br />
                  テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </section>

            <section className="flex items-center mb-[60px] flex-col md:flex-row">
              <div className="md:w-[50%]">
                <Image
                  src={work}
                  alt=""
                  width={1000}
                  height={1000}
                  className="maxW-[100%] mb-1 object-contain align-bottom"
                />
              </div>
              <div className="md:w-[50%] md:p-[7%]">
                <h1 className="text-[20px] mb-1">ハンドメイドにこだわる理由</h1>
                <h2 className="text-4 mb-[25px]">Work</h2>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  <br />
                  テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </section>
            <footer className="flex justify-between py-5">
              <p className="text-[14px]">Wooden Jewelry</p>
              <p className="text-[14px]">&copy; Wooden Jewelry</p>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
