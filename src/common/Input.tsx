export interface InputProps {
  id: string;
  name: string;
  value: string;
  labelName: string;
  inputType: string;
  onChange: React.ChangeEventHandler;
}

function Input({labelName, inputType, id, name, value, onChange} : InputProps) : JSX.Element {
  return (
    <div className='m-2 bg-gray-200 border-2 rounded border-gray-300'>
      <div className='w-full m-auto'>
        <label className='text-xs ml-2 text-slate-500 '>{labelName}</label>
        <input type={inputType} id={id} name={name} value={value} onChange={onChange} className='w-full p-2 outline-0 bg-gray-200 text-s'></input>
      </div>
    </div>
  )
}

export default Input
