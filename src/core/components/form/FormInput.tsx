"use client";

interface FormInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function FormInput({ value, onChange }: FormInputProps) {
  return (
    <>
      <input
        type="text"
        className={"form-control"}
        id="floatingInput"
        placeholder="Type here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
