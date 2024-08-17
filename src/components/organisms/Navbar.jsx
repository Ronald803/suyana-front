import OptionsBar from '../molecules/OptionsBar'
import { options } from '../../global'

function Navbar() {
  return (
    <div>
      <OptionsBar options={options.navbar} />
    </div>
  )
}

export default Navbar