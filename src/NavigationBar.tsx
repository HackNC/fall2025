import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, MapPin, Users, Code, Award, Mail, ExternalLink, Container } from 'lucide-react';
import { useEffect, useRef } from "react";
import '@fontsource/jersey-15'; // npm install @fontsource/jersey-15 if not already installed
import "@fontsource/Poppins";

const Navigation: React.FC = () => {
    return (
        <nav className="bg-primary-light backdrop-blur-sm fixed w-full z-50 bg-opacity-90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-4xl font-bold text-primary-dark font-jersey">
                        HackNC <span className="text-accent-yellow">2025</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#about" className="text-primary-dark hover:text-purple-300 transition-colors">About</a>
                        <a href="#faq" className="text-primary-dark hover:text-purple-300 transition-colors">FAQ</a>
                        <a href="#sponsors" className="text-primary-dark hover:text-purple-300 transition-colors">Sponsors</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;