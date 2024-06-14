import React from "react";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="">
      <div className={`flex flex-col top-0 px-5 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <h1 className="text-2xl font-bold">Bishnu Bk</h1>
        <h1 className="text-sm font-bold">Full Stack Developer</h1>
      </div>
      <div>
        <div className="flex justify-end items-end mt-4">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <div className={`relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-gray-300 ${isDarkMode ? 'dark:peer-focus:ring-gray-800 dark:bg-gray-700' : 'peer-focus:ring-gray-800 bg-gray-200'}`}>
              <div className={`peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] ${isDarkMode ? 'after:bg-white dark:border-white peer-checked:bg-grey-700' : 'after:bg-white after:border-white after:border after:rounded-full'}`}></div>
            </div>
            <span className={`ms-3 p-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
