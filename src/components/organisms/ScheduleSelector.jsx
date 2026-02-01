import React, { useState, useEffect } from "react";

function ScheduleSelector({ defaultValue, onSelect, options, name, id }) {
  const [selectedValue, setSelectedValue] = useState(defaultValue ?? "");
  useEffect(() => {
    setSelectedValue(defaultValue ?? "");
  }, [defaultValue]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onSelect?.(e.target.value);
  };
  useEffect(() => {
    if (!selectedValue && options && options.lenght > 0) {
      setSelectedValue(options[0].value);
      onSelect?.(options[0].value);
    }
  }, [options]);
  return (
    <div className="p-2">
      <select
        className="w-full rounded-lg border border-tertiary"
        name={id}
        id={id}
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="">Elige una opción</option>
        {options?.map((option, index) => (
          <option value={option.value} key={index}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ScheduleSelector;
