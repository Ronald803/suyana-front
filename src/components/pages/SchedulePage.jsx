import React, { useState } from "react";
import Schedule from "../organisms/Schedule";
import ScheduleSelector from "../organisms/ScheduleSelector";
import Popover from "../molecules/Popover";
import NewAppointmentForm from "../molecules/NewAppointmentForm";
import useGetResourceHook from "../../api/useGetResourceHook";
import { options } from "../../global";
import AppointmentSelected from "../molecules/AppointmentSelected";

function SchedulePage() {
  const [specialtySelected, setSpecialtySelected] = useState(null);
  const [dataToShow, setDataToShow] = useState(options.parameters[0].value);
  const [isScheduleFormOpen, setIsScheduleFormOpen] = useState(false);
  const [cellSelected, setCellSelected] = useState(null);
  const { dataResource: patients } = useGetResourceHook("patient", "");
  const { dataResource: doctors } = useGetResourceHook("staff", "");
  const { dataResource: schedule } = useGetResourceHook(
    "appointment/schedule",
    ""
  );
  const { dataResource: specialties } = useGetResourceHook("specialty", "");
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <ScheduleSelector
            defaultValue={specialtySelected}
            options={specialties?.map((specialty) => {
              return { value: specialty._id, ...specialty };
            })}
            name={"Especialidad"}
            id={"specialty"}
            onSelect={setSpecialtySelected}
          />
        </div>
        <div className="w-1/2">
          <ScheduleSelector
            defaultValue={dataToShow}
            options={options.parameters}
            name={"Ver"}
            id={"toShow"}
            onSelect={setDataToShow}
          />
        </div>
      </div>
      <Schedule
        specialtySelected={specialtySelected}
        dataToShow={dataToShow}
        setIsScheduleFormOpen={setIsScheduleFormOpen}
        setCellSelected={setCellSelected}
        schedule={schedule}
      />
      <Popover isOpen={isScheduleFormOpen} setIsOpen={setIsScheduleFormOpen}>
        <div>
          {cellSelected?.appointment ? (
            <AppointmentSelected
              cellSelected={cellSelected}
              setIsOpen={setIsScheduleFormOpen}
            />
          ) : (
            <NewAppointmentForm
              cellSelected={cellSelected}
              patients={patients}
              doctors={doctors}
              specialties={specialties}
              setIsOpen={setIsScheduleFormOpen}
              specialtySelected={specialtySelected}
            />
          )}
        </div>
      </Popover>
    </div>
  );
}

export default SchedulePage;
