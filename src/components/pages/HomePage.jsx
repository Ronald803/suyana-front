import CreateEmployeeForm from "../molecules/CreateEmployeeForm"
import LoginForm from "../molecules/LoginForm"
import NewPatientForm from "../molecules/NewPatientForm"

function HomePage() {
  return (
    <div>
      <div>HomePage</div>
      <LoginForm/>
      <CreateEmployeeForm/>
      <NewPatientForm/>
    </div>
  )
}

export default HomePage