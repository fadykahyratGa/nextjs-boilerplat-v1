"use client";
import Image from "next/image";
import Link from "next/link";
import Authentication from "./_components/Authentication";
import { Button } from "@/components/ui/button";
import { auth } from "@/configs/firebaseConfig";
import ProfileAvatar from "./_components/ProfileAvatar";
import { useAuthContext } from "./provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  // const user = auth?.currentUser;
  // console.log(user)
  const user = useAuthContext();

  console.log(user?.user);
  const router = useRouter();
  useEffect(() => {
    router.replace("/app");
  }, []);
  return <></>;
}
