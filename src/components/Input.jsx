export default function Input({
  children,
  value,
  setValue,
  type = 'text',
  placeholder,
  isRequired = true
}) {
  return (
    <div className='flex flex-col'>
      <label
        className='block text-[24px] font-sans 
          text-[#404040] font-semibold'
      >
        {children}
        <input
          type={type}
          className='my-2 p-1 block w-full rounded-r-xl border 
            border-black focus-visible:outline-none 
            focus-visible:border-[#249898] text-[24px] font-sans'
          value={value}
          onChange={event => setValue(event.target.value)}
          placeholder={placeholder}
          required={isRequired}
        />
      </label>
    </div>
  );
}
