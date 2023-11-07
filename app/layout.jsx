'use client'

import './globals.css'
import { ThemeProvider, Switch, Typography, Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";
import { useState } from "react";
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import translates from './translates.json'

export default function ({ children, }) {
	const router = useRouter()
	const pathname = usePathname()

	const [dark, setDark] = useState(false)
  const [openLang, setOpenLang] = useState(false);
 
  return (
		<ThemeProvider>
			<html className={dark ? 'dark' : ''}>
				<body className="dark:bg-gray-900 dark:text-gray-50">
					<div className="flex justify-between gap-4 p-4">
						<div className="">
							<div className="">
								<Link href="/">
									<Typography variant="h3" className="font-medium">
										Contact card
									</Typography>
								</Link>
							</div>
							<div className="">
								<a href="https://zummon.page/" target="_blank">
									<Button className="normal-case text-base font-normal" variant="text">Made by zummon</Button>
								</a>
							</div>
						</div>
						<div className="flex flex-col items-end justify-end">
							<div className="">
								<label htmlFor="set-dark-mode">
									<Typography className="font-medium inline-block">
										Toggle dark mode
									</Typography>
								</label>
								<div className="pl-4 inline-block">
									<Switch id="set-dark-mode" color="purple" checked={dark} onChange={(e) => setDark(e.target.checked)} />
								</div>
							</div>
							<div className="">
								<div className="">
									<Menu open={openLang} handler={setOpenLang}>
										<MenuHandler>
											<Button
												variant="text"
												className="flex items-center gap-3 text-base font-normal normal-case text-inherit"
											>
												{`Change language: ${translates[pathname.slice(1)].name} `}
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`h-3.5 w-3.5 transition-transform ${
													openLang ? "rotate-180" : ""
												}`}>
													<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
												</svg>
											</Button>
										</MenuHandler>
										<MenuList className="">
											{Object.entries(translates).map(([locale, item], index) => 
												<MenuItem className="text-inherit" key={`set-lang-${index}`} onClick={() => {
													router.push(`/${locale}`)
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
