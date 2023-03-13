import DivCheck from "@/components/DivCheck";
import HomePage from "@/components/homepage/HomePage";
import Head from "next/head";
import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function Home() {
  

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <HomePage />
      {/* <DivCheck /> */}
    </>
  );
}
