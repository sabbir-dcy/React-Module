import { dataContext } from '../../../hooks/UseData'
import { useContext } from 'react'
import Expert from '../Expert/Expert'

const Experts = () => {
  const experts = useContext(dataContext).experts
  return (
    <div className=''>
      <h2 className='text-primary text-center m-5'>Our Experts</h2>
      <div className='row'>
        {experts?.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  )
}

export default Experts
