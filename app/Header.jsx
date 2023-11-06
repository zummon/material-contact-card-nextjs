"use client";

import { Switch, Typography, Checkbox, Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";
import { useState } from "react";
import languages from './translates.json'
 
export default function () {
  const [openMenu, setOpenMenu] = useState(false);
 
  const menuItems = [
    {
      title: "@material-tailwind/html",
      description:
        "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
      title: "@material-tailwind/react",
      description:
        "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
      title: "Material Tailwind PRO",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
  ];

  return (
    <div className="flex p-4">
      <div className="mr-auto">
        <Typography variant="h3" className="font-medium">
          Contact card
        </Typography>
      </div>
      <div className="">
        <div className="pl-4">
          <Switch
            label={
              <Typography className="font-medium">
                Toggle dark mode
              </Typography>
            }
            containerProps={{
              className: "",
            }}
          />
        </div>
        <div className="">
          <div className="">
            <Menu open={openMenu} handler={setOpenMenu} allowHover>
              <MenuHandler>
                <Button
                  variant="text"
                  className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
                >
                  Change language{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`h-3.5 w-3.5 transition-transform ${
                    openMenu ? "rotate-180" : ""
                  }`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </Button>
              </MenuHandler>
              <MenuList className="">
                {languages.map((item, index) => 
                  <MenuItem className="p-0" key={`set-lang-${index}`}>
                    <label
                      htmlFor="item-2"
                      className="flex cursor-pointer items-center gap-2 p-2"
                    >
                      <Checkbox
                        ripple={false}
                        containerProps={{ className: "p-0" }}
                        className="hover:before:content-none"
                      />
                      {item.name}
                    </label>
                  </MenuItem>
                )}
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}