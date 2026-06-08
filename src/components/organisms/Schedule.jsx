import React, { useEffect, useState } from "react";
import { options } from "../../global";
import { formatCellTextForSchedule } from "../../utils/format";

function Schedule({
  specialtySelected,
  dataToShow,
  setIsScheduleFormOpen,
  setCellSelected,
  schedule,
}) {
  const handleOnClickCell = (hour, day, appointment) => {
    setIsScheduleFormOpen(true);
    setCellSelected({ hour, day, appointment });
  };
  const hours = Object.keys(schedule ?? {});
  const days = options.days;
  const specialty = specialtySelected;
  const parameter = dataToShow;

  return (
    <div className="w-full">
      <table className="table-fixed border-collapse border border-gray-300 text-xs w-full text-center">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="border border-gray-300 py-0.5 text-center">Hora</th>
            {days.map((day, index) => (
              <th key={day.value} className="border border-gray-300">
                {day.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours?.map((hour, hourIndex) => (
            <tr key={hour + hourIndex}>
              <td className="border border-gray-300 font-medium bg-gray-100">
                {hour}
              </td>
              {days.map((day, dayIndex) => (
                <td
                  key={`${hour}-${day.value}`}
                  className={`border border-gray-300 cursor-pointer text-center`}
                  onClick={() =>
                    handleOnClickCell(
                      hour,
                      day,
                      schedule[hour][day.value]?.[specialty]
                    )
                  }
                >
                  {formatCellTextForSchedule(
                    schedule[hour][day.value]?.[specialty]?.[parameter] ?? ""
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
