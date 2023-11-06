'use client'

import './globals.css'
import { ThemeProvider, Switch, Typography, Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";
import { useState } from "react";
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import languages from './translates.json'

export default function ({ children, }) {
	const router = useRouter()
	const pathname = usePathname()

	const [dark, setDark] = useState(false)
  const [openMenu, setOpenMenu] = useState(false);
	const [langName, setLangName] = useState(pathname.slice(1))
 
  return (
		<ThemeProvider>
			<html className={dark ? 'dark' : ''}>
				<body className="dark:bg-gray-900 dark:text-gray-50">
					<div className="flex p-4">
						<div className="mr-auto">
							<Link href="/">
								<Typography variant="h3" className="font-medium">
									Contact card
								</Typography>
							</Link>
						</div>
						<div className="">
							<div className="">
								<label htmlFor="set-dark-mode">
									<Typography className="font-medium inline-block">
										Toggle dark mode
									</Typography>
								</label>
								<div className="pl-4 inline-block">
									<Switch id="set-dark-mode" checked={dark} onChange={(e) => setDark(e.target.checked)} />
								</div>
							</div>
							<div className="">
								<div className="">
									<Menu open={openMenu} handler={setOpenMenu}>
										<MenuHandler>
											<Button
												variant="text"
												className="flex items-center gap-3 text-base font-normal normal-case"
											>
												{`Change language: ${langName} `}
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`h-3.5 w-3.5 transition-transform ${
													openMenu ? "rotate-180" : ""
												}`}>
													<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
												</svg>
											</Button>
										</MenuHandler>
										<MenuList className="">
											{languages.map((item, index) => 
												<MenuItem className="text-inherit" key={`set-lang-${index}`} onClick={() => {
													setLangName(item.name)
													router.push(`/${item.locale}`)
												}}>
													{item.name}
												</MenuItem>
											)}
										</MenuList>
									</Menu>
								</div>
							</div>
						</div>
					</div>
					<div className="container mx-auto">
						{children}
					</div>
				</body>
			</html>
		</ThemeProvider>
  )
}
