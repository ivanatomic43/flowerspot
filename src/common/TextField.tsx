import React from 'react'
import { ReactNode } from 'react'

interface TextFieldProps {
  labelName: string;
  fieldData: string | number;
}

function TextField({labelName, fieldData} : TextFieldProps) : JSX.Element {
  return (
    <div className='p-1 m-1 bg-white'>
      <label className='text-xs text-slate-500'>{labelName}</label>
      <p className='text-s text-[#334144]'>{fieldData}</p>
    </div>
  )
}

export default TextField
