import { forwardRef, useRef, useImperativeHandle } from "react";

const CustomInput = forwardRef(function CustomInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
      };
    },
    []
  );

  return <input {...props} ref={inputRef} />;
});

export default CustomInput;
