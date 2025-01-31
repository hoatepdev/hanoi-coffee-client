import { Input } from "@/components/ui/input";
import { InputHTMLAttributes, useState } from "react";
import Main from "./styled";
import { Eye, EyeOff } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputFloatProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  message?: string;
  register?: UseFormRegisterReturn<string>;
}

const InputFloat = ({
  label = "",
  message,
  children,
  register,
  ...props
}: InputFloatProps) => {
  return (
    <Main>
      <Input {...props} {...register} />
      {children}
      {message && (
        <p className="message-error" role="alert">
          {message}
        </p>
      )}
      {label && <label>{label}</label>}
    </Main>
  );
};

InputFloat.Password = function Password({ ...props }: InputFloatProps) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((pre) => !pre);
  return (
    <InputFloat type={showPassword ? "text" : "password"} {...props}>
      <button onClick={togglePassword} className="absolute right-2 top-2">
        {showPassword ? <EyeOff /> : <Eye />}
      </button>
    </InputFloat>
  );
};

export default InputFloat;
