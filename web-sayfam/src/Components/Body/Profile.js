import { profileAboutMe, profileInformation, profileSearch } from "../../Data/data";


export function Profile({ language }) {
  const lang = language ? "en" : "tr";
const profileSearchData = profileSearch[lang];
const profileInformationData = profileInformation[lang];

const about = profileAboutMe[lang].map((i, index) => (
  <div key={index}>
    <div className="mb-5 ">{i.includes}</div>
    <div>{i.about}</div>
  </div>
));

  const profile = (
    <div className="ml-10">
    <div className="flex sm:items-start max-sm:items-start lg:items-center mt-3 ">
      <div className="font-semibold w-1/4 mr-6 dark:text-white">
        {profileSearchData.date}
      </div>
      <div className="text-lg font-normal w-3/4  dark:text-white">
        {profileInformationData.date}
      </div>
    </div>
      <div className="flex sm:items-start max-sm:items-start lg:items-center mt-3 dark:text-white">
        <div className="font-semibold w-1/4 mr-6">
          {profileSearch[lang].place}
        </div>
  
        <div className="text-lg font-normal w-3/4 ">
          {profileInformation[lang].adress}
        </div>
      </div>
      <div className="flex sm:items-start max-sm:items-start lg:items-center mt-3 dark:text-white">
        <div className="font-semibold w-1/4 mr-6">
          {profileSearch[lang].educationStatus}
        </div>{" "}
        <div className="text-lg font-normal w-3/4 dark:text-white ">
          {profileInformation[lang].education}
        </div>
      </div>
      <div className="flex sm:items-start max-sm:items-start lg:items-center mt-3 dark:text-white">
        <div className="font-semibold w-1/4 mr-6">
          {profileSearch[lang].choseRol}
        </div>{" "}
        <div className="text-lg font-normal w-3/4 ">
          {profileInformation[lang].chose}
        </div>
      </div>
    </div>
  );
  
    return (
      <div className="w-full light: bg-custom-lightgray  min-h-max  pt-2 pb-2 dark:bg-custom-gray">
      <div className={`mb-60 lg:w-9/12 m-auto max-sm:w-9/12 sm:w-9/12`}>
        <h1 className="text-center pt-20 font-medium text-4xl mb-9 dark:text-white">{language ? "Profile" : "Profil"}</h1>
        <div className="">
          <div className="  lg:flex  ">
            <div className=" lg:w-3/5 flex-1 profile-item dark:bg-custom-information">
              <div className="pt-9 mb-9 info font-normal text-2xl ml-10">
              {language ? "Basic Information" : "Temel Bilgiler"}
              </div>
              {profile}
            </div>
            <div className="lg:w-2/5 lg:ml-16 sm:ml-0 mt-20 dark:text-white">
            <div className="relative" style={{ zIndex: 2 }}>
            <div className="mb-5 text-2xl font-normal dark:text-white">{language ? "About Me" : "Hakkımda"}</div>
            <div className="about dark:text-white"></div>
              {about}
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    );
  }