import { footer } from "../../Data/data";

export function Footer({ language = 'tr' }) {
  const content = footer[language ? 'en' : 'tr'];

  return (
    <div className="w-full bg-white  min-h-max  pt-2 pb-2 dark:bg-custom-darkwhite">
    <div className={`mb-60 lg:w-9/12 m-auto max-sm:w-9/12 sm:w-9/12`}>
    <div className="sm:pt-8 ">
      <div className="max-sm:pb-10 lg:pb-20 sm:pb-10 max-sm-9/12 m-auto sm:w-9/12 ">
        <div className="lg:flex  lg:items-center lg:mr-6 m-auto   relative max-sm:w-9/12  max-sm:pt-7 lg:justify-center lg:ml-14  dark:text-white">
          <div className="text-5xl lg:w-2/3 max-sm:w-full sm:w-full max-sm-text-center lg:justify-center relative  ">
            <div className="relative  max-sm:w-full lg:w-full"style={{ zIndex: 2}}>{content.slogan}</div>
            <div className="footer"style={{ zIndex: 1}}></div>
          </div>
          <div className="lg:w-1/4 font-medium text-2xl max-sm:flex max-sm:flex-col sm:flex sm:flex-col  max-sm:mt-5 max-sm:text-center sm:text-center sm:mt-5 lg:text-start ">
            <div className="hover:underline" style={content.github.stil}>
              {content.github.title}
            </div>
            <div className="hover:underline">{content.personalBlog}</div>
            <div className="hover:underline" style={content.linkedin.stil}>
              {content.linkedin.title}
            </div>
            <div className="hover:underline" style={content.Email.stil}>
              {content.Email.title}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
