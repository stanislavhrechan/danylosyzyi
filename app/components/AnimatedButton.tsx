"use client";

import Link, { LinkProps } from "next/link";
import {
    AnchorHTMLAttributes,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";

interface AnimatedButtonProps
    extends LinkProps,
        Omit<
            AnchorHTMLAttributes<HTMLAnchorElement>,
            keyof LinkProps
        > {
    children: ReactNode;
    delay?: number;
}

export default function AnimatedButton({
    children,
    className = "",
    delay = 0,
    ...props
}: AnimatedButtonProps) {
    const ref = useRef<HTMLAnchorElement>(null);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <Link
            ref={ref}
            {...props}
            style={{
                transitionDelay: `${delay}ms`,
            }}
            className={`
                ${className}

                transform
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]

                ${
                    visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[100%] opacity-0"
                }
            `}
        >
            {children}
        </Link>
    );
}