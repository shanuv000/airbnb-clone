import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

const Search = () => {
  // State for start and end dates of the date range
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Object representing the selected date range
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // Function to handle date range selection
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="search">
      {/* Date Range Picker Component */}
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      {/* Number of Guests Input */}
      <div className="search__guests">
        <h2>Number of Guests</h2>
        <PeopleIcon />
        <input min={0} defaultValue={2} type="number" />
      </div>
      {/* Search Button */}
      <Button variant="outlined">Search Airbnb</Button>
    </div>
  );
};

export default Search;
