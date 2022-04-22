import React from 'react'
import { useServices } from '../../hooks/useServices'

const ManageServices = () => {
  const [services, setServices] = useServices()
  return (
    <div>
      <h2>this is manage service</h2>
      {services.map((service) => (
        <div key={service._id}>
          <p>
            {service.name}
            <button
              onClick={() => {
                const proceed = window.confirm('are u sure')
                if (proceed) {
                  const id = service._id
                  const url = `http://localhost:5000/services/${id}`
                  fetch(url, {
                    method: 'delete',
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data)
                      const remain = services.filter(
                        (service) => service._id !== id
                      )
                      setServices(remain)
                    })
                }
              }}
            >
              delete
            </button>
          </p>
        </div>
      ))}
    </div>
  )
}

export default ManageServices
