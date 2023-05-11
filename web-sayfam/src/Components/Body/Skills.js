import { Skills } from "../../Data/data";

export function SkillsPage({ language, theme })  {
  const render = Skills.map((i, sayac) => {
    return (
      <div key={sayac}>
        
        <div className="w-28 h-28  " style={i?.stil}>
          <img className="m-auto h-full" src={i.url}></img>
        </div>
        <div className="">{i.software}</div>
      </div>
    );
  });
  return (
    <div className="w-full bg-white  min-h-max  pt-2 pb-2 dark:bg-custom-darkwhite">
    <div className={`mb-60 lg:w-9/12 m-auto max-sm:w-9/12 sm:w-9/12`}>
      <h1 className="text-center pt-20 text-5xl font-medium mb-14 dark:text-white"> {language ? "Skills" : "Yetenekler"}</h1>
      <div className="lg:flex lg:w-11/12 max-sm:w-1/2 max-sm:m-auto sm:w-1/2 lg:flex-wrap lg:justify-center  sm:m-auto  max-sm:flex sm:flex max-sm:flex-wrap sm:flex-wrap max-sm:justify-center sm:justify-center gap-12 pb-24  dark:text-white">
        {render}
      </div>
      <div className="ellipse"></div>
      <div className="ellipse2"></div>
      <div className="ellipse3"></div>
      <div className="rectangle"></div>
      <div className="rectangle2"></div>
    </div>
    </div>
  );
}