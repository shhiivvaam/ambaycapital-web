'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Home, Search, Map, Compass, ArrowRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Custom404() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="absolute top-20 left-20 hidden lg:block">
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Avatar className="h-16 w-16 border-2 border-primary shadow-lg">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>
                            <Search className="h-8 w-8 text-muted-foreground" />
                        </AvatarFallback>
                    </Avatar>
                </motion.div>
            </div>

            <div className="absolute top-40 right-32 hidden lg:block">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                >
                    <Avatar className="h-20 w-20 border-2 border-primary shadow-lg">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>
                            <Compass className="h-10 w-10 text-muted-foreground" />
                        </AvatarFallback>
                    </Avatar>
                </motion.div>
            </div>

            <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text mb-4 sm:mb-8">
                        We lost this page
                    </h1>

                    <div className="relative px-4 sm:px-0">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-16 -right-16 text-primary/10 hidden sm:block"
                        >
                            <Map className="h-24 w-24 sm:h-32 sm:w-32" />
                        </motion.div>

                        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 sm:mb-12">
                            We searched high and low but couldn't find what you're looking for. <br className="hidden sm:inline" />
                            Let's find a better place for you to go.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/">
                            <Button size="lg" className="w-full sm:w-auto group">
                                <Home className="mr-2 h-5 w-5" />
                                AmbayCapital
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>

                        {/* TODO: add an option for users to search for plans and pages across the site */}
                        {/* <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                            <Search className="mr-2 h-5 w-5" />
                            Search Site
                        </Button> */}
                    </div>
                </motion.div>

                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -bottom-16 sm:-bottom-32 left-1/2 transform -translate-x-1/2"
                >
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                        <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
                        <div className="absolute inset-4 bg-primary/10 rounded-full blur-2xl"></div>
                        <div className="absolute inset-8 bg-primary/15 rounded-full blur-xl"></div>
                    </div>
                </motion.div>
            </div>

            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-grid-primary/5 bg-[size:32px_32px] opacity-30"></div>
            </div>
        </div>
    )
};

