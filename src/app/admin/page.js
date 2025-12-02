"use client";

import { Categories } from "./ Categories";
import { Appetizers } from "./Appetizers";
import { Dialog, Dialogs } from "./Dialog";
import { Salads } from "./Salads";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

export default function AdminPage() {
  const [addDishClicked, setAddDishClicked] = useState(false);
  return (
    <div className="flex bg-black ">
      <Sidebar />
      <div className="flex flex-col pt-4 gap-5 pl-6">
        {/* <User /> */}
        <Categories />
        <Appetizers
          addDishClicked={addDishClicked}
          setAddDishClicked={setAddDishClicked}
        />

        <Salads />
      </div>
      {addDishClicked && <Appetizers /> && (
        <div>
          <Dialogs />
        </div>
      )}
    </div>
  );
}
