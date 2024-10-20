"use client";

import Image from "next/image";

const FormModel = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-adaPeach"
      : type === "update"
      ? "bg-adaSky"
      : "bg-adaPurple";
  return (
    <>
      <button
        className={`${size} flex rounded-full items-center justify-center ${bgColor}`}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
    </>
  );
};

export default FormModel;
