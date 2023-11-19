import type { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="">
      <Header />
      <div className="flex h-full">
      <Sidebar />
      <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
        <div className="flex w-full mx-auto px-6 py-8">
          <div className="flex flex-col w-full h-full text-gray-900 text-xl ">
            {props.children}
          </div>
        </div>
      </main>
    </div>
    </main>
  );
};
