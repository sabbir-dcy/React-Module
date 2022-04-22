import React from 'react'
import { useForm } from 'react-hook-form'

const AddService = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    const url = `http://localhost:5000/services`
    fetch(url,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => console.log(result))
  }
  return (
    <div className='w-50 mx-auto mt-5'>
      <form
        className='d-flex flex-column gap-2'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder='enter first name'
          {...register('firstName', { required: true, maxLength: 20 })}
        />
        <textarea
          placeholder='enter description'
          {...register('description')}
        />
        <input placeholder='enter price' type='number' {...register('price')} />
        <input placeholder='photo url' type='text' {...register('img')} />
        <input type='submit' value='add service' />
      </form>
    </div>
  )
}

export default AddService
