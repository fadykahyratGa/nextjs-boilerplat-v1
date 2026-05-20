"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
function UsersAdsList() {
  const [adsList, setAdsList] = useState([]);
  return (
    <div>
      {adsList?.length == 0 && (
        <div className="p-5 border-dashed border-2 rounded-2xl flex flex-col justify-center items-center mt-6 gap-3">
          <Image
            src="/signboard.jpg"
            className="w-20"
            alt="empty"
            width={200}
            height={200}
          />
          <h2 className="text-xl">You don't have any ads created</h2>
          <Button>Create New Ads</Button>
        </div>
      )}
    </div>
  );
}
export default UsersAdsList;
