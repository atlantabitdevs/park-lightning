const Input = ({value, type, placeholder, onChange}) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="bg-gradient-to-b from-white to-prk-gray-light border-solid border-2 border-neutral-200 w-full p-8 rounded-full flex flex-row space-x-8 text-2xl text-center"
    />
    );
};

export default Input;
