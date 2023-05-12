import React from "react";
import "./Checkbox.css";
const Checkbox = ({ theme, themeHandler, languageHandler, language }) => {
  return (
    <div className="w-full bg-custom-lightgray  min-h-max pt-2 pb-2 dark:bg-custom-gray">
    <div className={`mb-60 lg:w-9/12 m-auto max-sm:w-9/12 sm:w-9/12`}>
          <div className="mt-[33px] font-Inter mr-rightspace ml-leftspace">
      <div className="flex justify-end pt-[33px]">
        <div className="block">
          <label
            htmlFor="checkbox"
            className="flex items-center cursor-pointer"
          >
            <div className="relative mr-2">
              <input
                type="checkbox"
                id="checkbox"
                className="sr-only"
                onChange={themeHandler}
                checked={theme === "dark" ? true : false}
              />
            </div>
          </label>
        </div>
        <div className="flex items-center">
          <h2 className="text-[#777777] text-[15px] font-bold dark:text-[#d9d9d9]">
            {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
          </h2>
          <span className="mx-[14px]">|</span>
          <button
            className="text-[15px] text-[#E92577] font-bold dark:text-[#E92577]"
            onClick={languageHandler}
          >
            {language === false ? "ENG" : "TÜRKÇE"}
  </button>
  <span className="text-[#777777] text-[15px] font-bold">'YE GEÇ</span>
</div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Checkbox;