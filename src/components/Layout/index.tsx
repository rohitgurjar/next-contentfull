import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { GET_HEADER } from "@/Queries/Header.query";
import { client } from "@/lib/api";

type NavItemType = {
  __typename: string;
  label: string;
  url: string;
};

const Layout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  const { data } = await client.query({ query: GET_HEADER });

  const logoUrl = data.headerCollection.items[0].logo.url;

  const navItem = data.headerCollection.items[0].navBarLinkCollection.items;

  return (
    <>
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Image src={logoUrl} alt={"Image"} width={153} height={44} />{" "}
            <nav className="flex gap-2">
              {navItem.map((item: NavItemType, i: number) => {
                return (
                  <Button key={i} variant="ghost" asChild>
                    <Link href={item.url}>{item.label}</Link>
                  </Button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm ">&copy; 2025 Skillz. All rights reserved.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm  hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm  hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-sm  hover:text-foreground">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
