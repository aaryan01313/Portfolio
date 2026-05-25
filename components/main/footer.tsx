import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-[1200px]">
        <div className="w-full h-full flex flex-row items-start justify-between flex-wrap px-5 md:px-10">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => {
                const isEmail = link.startsWith("mailto:");
                return (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target={isEmail ? "_self" : "_blank"}
                    rel={isEmail ? undefined : "noreferrer noopener"}
                    className="flex flex-row items-center my-[15px]"
                  >
                    {Icon && <Icon />}
                    <span className="text-[15px] ml-[6px]">{name}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mb-[20px] mt-10 text-[15px] text-center">
          &copy; Aryan {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </div>
  );
};