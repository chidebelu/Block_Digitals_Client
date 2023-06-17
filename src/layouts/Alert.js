import { useContext } from 'react'
import alertContext from '../context/alert/alertContext'
const Alert = () => {
    const context = useContext(alertContext)

  return (
   context.alert.length > 0 && (context.alert.map(alert => <div key={alert.id} className={`alert alert-${alert.types}`}>
            <i className='fas fa-info-circle'></i> {alert.message}
        </div>))
  )
}

export default Alert