import { Email, Email2, HeaderData } from "../../Data/data";

export function Header({ language }) {
  const lang = language ? "en" : "tr";
  const data = HeaderData[lang][0];

  return (
    <div className="w-full bg-custom-lightgray  min-h-max  pt-2 pb-2 dark:bg-custom-gray">
    <div className={`mb-60 lg:w-9/12 m-auto max-sm:w-9/12 sm:w-9/12`}>
      <div className="header w-full lg:flex relative">
      <div className="header-pos text-red-500" style={{position: 'absolute', zIndex: 1, height: '50px' }}></div> 

        <div className="mr-20 flex-1 sm:w-full max-sm:w-full" style={{position: 'relative', zIndex: 2}}> 
          <div className="lg:w-24 text-3xl mb-5 text-center sm:w-full max-sm:w-full dark:text-white">
            {data.hi}
          </div>
          <div className="header-content font-medium sm:w-full max-sm:w-full  mb-1 dark:text-white">
            <span>{data.content}</span>
          </div>
          <div className="lg:flex lg:justify-start max-sm:flex sm:flex max-sm:justify-center sm:justify-center max-sm:gap-4 sm:gap-4 dark:filter-custom-white">
            <a href="">
              {" "}
              <img className=" mr-5 " src={data.headerBrands.linkedin} />
            </a>
            <a href="">
              {" "}
              <img src={data.headerBrands.github} />
            </a>
          </div>
          <div className="header-mail font-normal mt-5 mb-24 dark:text-white">
          {language ? <Email /> : <Email2 />}
          </div>
        </div>
        <div className=" mt-14 ">
          <div className="image-item   ">
            <img className="max-sm:w-full sm:w-full" src={data.headerBrands.image} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
