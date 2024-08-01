import React from "react";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const OutOfStockToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-white p-3 flex items-start justify-between">
      <p className="font-bold text-base">Out Of Stock Items</p>
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div className="block bg-[#A10550] w-10 h-6"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-4 h-4 transition ${
              isChecked ? "transform translate-x-full " : ""
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

const ViewFilters = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
    
      const handleItemList = (item) => {
        setSelectedFilters((prev) => [...prev, item]);
      };
  return (
    <div>
      <OutOfStockToggle />
      {menuData.map((menu, index) => (
        <div className="bg-white p-3">
          <div
            className="flex flex-row justify-between items-center cursor-pointer"
            onClick={toggleVisibility}
          >
            <p className="font-bold md:text-base text-xs">{menu.title}</p>
            <span>{isVisible ? <FaCaretUp /> : <FaCaretDown />}</span>
          </div>
          <ul className={`${isVisible ? "block" : "hidden"}`}>
            {menu?.items &&
              menu?.items?.map((item, index) => (
                <li key={index} className="py-1">
                  <input
                    type="checkbox"
                    name={item}
                    id={item}
                    checked={selectedFilters.includes(item)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        handleItemList(e.target.name);
                      } else {
                        removeFilter(e.target.name);
                      }
                    }}
                  />{" "}
                  {item}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ViewFilters;
