"use client";

import React, { useState } from "react";
import { AlertTriangle, RefreshCcw, Home, ChevronDown, ChevronUp, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Error() {
    const [showDetails, setShowDetails] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [error, setError] = useState("Something went wrong");
    const [errorInfo, setErrorInfo] = useState("{}:{}:{}:{}");

    const toggleDetails = () => setShowDetails((prev) => !prev);
    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 ${isDarkMode ? "dark" : ""}`}>
            <Card className="w-full max-w-2xl overflow-hidden">
                <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <AlertTriangle className="w-12 h-12 text-yellow-500" />
                        <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                            {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
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
                        <Button variant="outline" onClick={() => (window.location.href = "/")}>
                            <Home className="mr-2 h-4 w-4" /> Go to Homepage
                        </Button>
                    </div>
                    <div className="border-t pt-4">
                        <Button
                            variant="ghost"
                            onClick={toggleDetails}
                            className="flex items-center text-sm text-muted-foreground"
                        >
                            {showDetails ? (
                                <>
                                    <ChevronUp className="mr-2 h-4 w-4" /> Hide technical details
                                </>
                            ) : (
                                <>
                                    <ChevronDown className="mr-2 h-4 w-4" /> Show technical details
                                </>
                            )}
                        </Button>
                        {showDetails && (
                            <div className="mt-4 p-4 bg-muted rounded-md overflow-auto max-h-60">
                                <pre className="text-xs">
                                    {error}
                                    {"\n"}
                                    {errorInfo}
                                </pre>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}