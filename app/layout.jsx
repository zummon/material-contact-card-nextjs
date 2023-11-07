'use client'

import './globals.css'
import { ThemeProvider, Switch, Typography, Menu, MenuHandler, MenuList, MenuItem, Button,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel, } from "@material-tailwind/react"
import { useState } from "react"
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
// - [Fake Person](https://www.fakepersongenerator.com/)
// - [Fake Address](https://www.fakeaddressgenerator.com/)
import translates from './translates.json'

export default function ({ children, }) {
	const router = useRouter()
	const pathname = usePathname()

	const [dark, setDark] = useState(false)
  const [openLang, setOpenLang] = useState(false)
  const [activeTab, setActiveTab] = useState("goal");

	const lang = pathname.slice(1)
	const translate = translates[lang] || {}
	
  return (
		<ThemeProvider>
			<html className={dark ? 'dark' : ''}>
				<head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link href={translate.fontFamilySrc} rel="stylesheet" />
				</head>
				<body className="bg-gray-50 dark:bg-gray-900 dark:text-gray-50" style={{fontFamily: translate.fontFamily}}>
					<div className="max-w-5xl mx-auto flex justify-between gap-4 p-4">
						<div className="">
							<div className="">
								<Link href="/">
									<Typography variant="h3" className="font-medium">
										<span className="">
											{translate['headline']}
										</span>
									</Typography>
								</Link>
							</div>
							<div className="">
								<a href="https://zummon.page/" target="_blank">
									<Button className="normal-case text-base font-normal text-pink-600" variant="text">
										<span className="">
											{translate['sub-headline']}
										</span>
									</Button>
								</a>
							</div>
						</div>
						<div className="flex flex-col items-end justify-end">
							<div className="">
								<label className="" htmlFor="set-dark-mode">
									<Typography className="font-medium inline-block">
										<span className="">
											{translate['toggle-dark-mode']}
										</span>
									</Typography>
								</label>
								<div className="px-4 inline-block">
									<Switch color="pink" id="set-dark-mode" checked={dark} onChange={(e) => {
										setDark(e.target.checked)
									}} />
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
												<span className="">
													{translate['change-language']}
												</span>
												<span className="text-pink-600">
													{translate['name']}
												</span>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`h-3.5 w-3.5 transition-transform ${
													openLang ? "rotate-180" : ""
												}`}>
													<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
												</svg>
											</Button>
										</MenuHandler>
										<MenuList className="dark:bg-gray-900 dark:text-gray-50 dark:border-gray-800">
											{Object.entries(translates).map(([locale, item], index) => 
												<MenuItem className="text-inherit dark:hover:bg-dark-600 dark:focus:bg-dark-600 dark:active:bg-dark-600" key={`set-lang-${index}`} onClick={() => {
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
					<div className="max-w-5xl mx-auto">
						<Tabs className="bg-white dark:bg-gray-800 border rounded dark:border-gray-700" value={activeTab}>
							<TabsHeader
								className="rounded-none border-b dark:border-gray-700 bg-transparent p-0"
								indicatorProps={{
									className:
										"bg-transparent border-b-2 border-pink-500 shadow-none rounded-none",
								}}
							>
								<Tab
									value="about"
									onClick={() => setActiveTab('about')}
									className={`py-4 text-inherit ${activeTab === 'about' ? "" : "hover:text-pink-600 focus:text-pink-600"}`}
								>
									<span className="">
										{translate['about']}
									</span>
								</Tab>
								<Tab
									value="goal"
									onClick={() => setActiveTab('goal')}
									className={`py-4 text-inherit ${activeTab === 'goal' ? "" : "hover:text-pink-600 focus:text-pink-600"}`}
								>
									<span className="">
										{translate['goal']}
									</span>
								</Tab>
								<Tab
									value="contact"
									onClick={() => setActiveTab('contact')}
									className={`py-4 text-inherit ${activeTab === 'contact' ? "" : "hover:text-pink-600 focus:text-pink-600"}`}
								>
									<span className="">
										{translate['contact']}
									</span>
								</Tab>
							</TabsHeader>
							<TabsBody className="">
								<TabPanel className="text-inherit" value="about">
									{/* https://undraw.co/ Female avatar */}
									<div className="mb-4">
										<img className="w-56 h-56 mx-auto" src="/undraw-avatar.svg" alt="avatar" />
									</div>
									<p className="">
										{translate['about-detail']}
									</p>
								</TabPanel>
								<TabPanel className="text-inherit" value="goal">
									<p className="">
										{translate['goal-detail']}
									</p>
								</TabPanel>
								<TabPanel className="text-inherit" value="contact">
									<iframe className="w-full mb-4" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7281.746130039218!2d-82.84780815217829!3d37.829657683084456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sth!2sth!4v1699358804058!5m2!1sth!2sth" height="450" style={{"border":0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
									<p className="">
										{translate['contact-detail']}
									</p>
								</TabPanel>
							</TabsBody>
						</Tabs>

						{children}

						<div className="p-4 text-center">
							{translate['translate-by']}
						</div>
					</div>
				</body>
			</html>
		</ThemeProvider>
  )
}
