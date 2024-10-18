const FormField = ({
    id,
    onBlur,
    values,
    style,
    label,
    onChange,
    placeholder,
    type,
    inputType,
    icon,
    rows,
  }) => {
    return (
      <div className="flex flex-col gap-2 w-full group">
        <h1 className="text-sm font-medium text-color-light">{label}</h1>
        {type === "input" ? (
          <div
            className={`${style} relative text-color-light bg-inherit  duration-100 outline-none justify-between flex items-center gap-6 px-2  w-full rounded-md font-semibold border-2 border-color-light group-hover:border-color-primary-variant`}
          >
            {icon && <p>{icon}</p>}
  
            <input
              type={inputType}
              value={values}
              onBlur={onBlur}
              id={id}
              onChange={onChange}
              placeholder={placeholder}
              className="w-full h-full bg-inherit py-4 px-3 text-xs outline-none"
            />
          </div>
        ) : (
          <textarea
            name=""
            id={id}
            onBlur={onBlur}
            cols="30"
            rows={rows || 10}
            placeholder={placeholder}
            onChange={onChange}
            value={values}
            className="text-xs md:text-xs duration-150 w-full bg-inherit outline-none border-b rounded-xl border-2 group-hover:border-color-primary-variant px-6 py-4"
          >
            {values}
          </textarea>
        )}
      </div>
    );
  };
  
  export default FormField;

