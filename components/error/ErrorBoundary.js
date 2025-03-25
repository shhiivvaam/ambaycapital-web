'use client'

import React from "react";
import { AlertTriangle, RefreshCcw, Home, ChevronDown, ChevronUp, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            showDetails: false,
            isDarkMode: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo)
        this.setState({ errorInfo })
    }

    toggleDetails = () => {
        this.setState(prevState => ({ showDetails: !prevState.showDetails }))
    }

    toggleDarkMode = () => {
        this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }))
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={`min-h-screen flex items-center justify-center p-4 ${this.state.isDarkMode ? 'dark' : ''}`}>
                    <Card className="w-full max-w-2xl overflow-hidden">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <AlertTriangle className="w-12 h-12 text-yellow-500" />
                                <Button variant="ghost" size="icon" onClick={this.toggleDarkMode}>
                                    {this.state.isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                                </Button>
                            </div>
                            <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
                            <p className="text-muted-foreground mb-6">
                                We apologize for the inconvenience. Our team has been notified and is working on a fix.
                            </p>
                            <div className="flex space-x-4 mb-6">
                                <Button onClick={() => window.location.reload()}>
                                    <RefreshCcw className="mr-2 h-4 w-4" /> Refresh Page
                                </Button>
                                <Button variant="outline" onClick={() => window.location.href = '/'}>
                                    <Home className="mr-2 h-4 w-4" /> Go to Homepage
                                </Button>
                            </div>
                            <div className="border-t pt-4">
                                <Button
                                    variant="ghost"
                                    onClick={this.toggleDetails}
                                    className="flex items-center text-sm text-muted-foreground"
                                >
                                    {this.state.showDetails ? (
                                        <>
                                            <ChevronUp className="mr-2 h-4 w-4" /> Hide technical details
                                        </>
                                    ) : (
                                        <>
                                            <ChevronDown className="mr-2 h-4 w-4" /> Show technical details
                                        </>
                                    )}
                                </Button>
                                {this.state.showDetails && (
                                    <div className="mt-4 p-4 bg-muted rounded-md overflow-auto max-h-60">
                                        <pre className="text-xs">
                                            {this.state.error?.toString()}
                                            {'\n'}
                                            {this.state.errorInfo?.componentStack}
                                        </pre>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            );
        }

        return this.props.children
    }
}

export default ErrorBoundary;