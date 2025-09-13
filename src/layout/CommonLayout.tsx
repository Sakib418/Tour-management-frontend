import type { ReactNode } from "react";

import Foooter from "./Foooter";
import Navbar from "./Navbar";

interface Iprops {
    children: ReactNode
}

export default function CommonLayout({children}: Iprops){
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar/>
        <div className="grow-1">{children}</div>
       <Foooter/>
    </div>
    );
   
}