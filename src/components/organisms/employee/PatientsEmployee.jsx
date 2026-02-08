export const PatientsEmployee = ({ employee }) => {
  const { patients } = employee;
  return (
    <div className="border-b border-primary">
      <div className="pt-1 pb-1 pl-2 text-primary font-bold">Pacientes</div>
      <div>
        {patients?.map((patient) => {
          return <div className="pl-2">▪️ {patient?.name} </div>;
        })}
      </div>
    </div>
  );
};
