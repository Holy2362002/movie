"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function PeoDrop() {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <div className="relative inline-block text-left" ref={containerRef}>
            <button
                type="button"
                onClick={() => setOpen(prev => !prev)}
                className="group inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 hover:shadow-md focus:outline-none"
                aria-haspopup="menu"
                aria-expanded={open}
            >
                People
                <svg
                    className="ml-2 -mr-0.5 h-4 w-4 text-gray-500 transition-colors duration-200 group-hover:text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {open ? (
                <div
                    role="menu"
                    aria-orientation="vertical"
                    className="absolute left-0 z-50 mt-2 w-56 origin-top-left rounded-md border border-gray-200 bg-white shadow-lg focus:outline-none"
                >
                    <div className="py-1" role="none">
                        <MenuItem href="/popPeo" label="Popular" onClick={() => setOpen(false)} />
                        
                    </div>
                </div>
            ) : null}
        </div>
    );
}

function MenuItem({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block px-4 py-2 text-sm text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:font-medium"
            role="menuitem"
        >
            {label}
        </Link>
    );
}


