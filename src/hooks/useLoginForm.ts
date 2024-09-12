import { useAuth } from "@/context";
import { paths } from "@/routes/paths";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
}

export const useLoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [values, setValues] = useState<FormValues>({ email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({ email: "" });

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {
      email: validateEmail(values.email) ? "" : "Email no válido",
    };

    setErrors(newErrors);

    if (!newErrors.email) {
      login();
      navigate(paths.home);
    }
  };

  return {
    values,
    errors,
    handleInputChange,
    handleSubmit,
  };
};
