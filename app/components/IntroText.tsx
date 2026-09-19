"use client";

import {
    Children,
    isValidElement,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTextProps {
    children: ReactNode;
    className?: string;
}

interface Word {
    text: string;
    className?: string;
}

interface ParsedWord {
    type: "word";
    text: string;
    className?: string;
}

interface ParsedBreak {
    type: "break";
}

type ParsedPart = ParsedWord | ParsedBreak;

interface Line {
    words: Word[];
}

export default function AnimatedText({
    children,
    className = "",
}: AnimatedTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const isInView = useInView(containerRef, {
        once: true,
        amount: 0.2,
    });

    const [lines, setLines] = useState<Line[]>([]);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        let cancelled = false;

        const calculateLines = () => {
            if (cancelled) return;

            const parts = getTextParts(children);

            if (!parts.length) {
                setLines([]);
                return;
            }

            const measure = document.createElement("div");
            const styles = window.getComputedStyle(container);

            measure.style.position = "absolute";
            measure.style.visibility = "hidden";
            measure.style.pointerEvents = "none";
            measure.style.left = "0";
            measure.style.top = "0";
            measure.style.width = `${container.clientWidth}px`;

            measure.style.fontFamily = styles.fontFamily;
            measure.style.fontSize = styles.fontSize;
            measure.style.fontWeight = styles.fontWeight;
            measure.style.fontStyle = styles.fontStyle;
            measure.style.lineHeight = styles.lineHeight;
            measure.style.letterSpacing = styles.letterSpacing;
            measure.style.wordSpacing = styles.wordSpacing;
            measure.style.textTransform = styles.textTransform;
            measure.style.textIndent = styles.textIndent;
            measure.style.whiteSpace = "normal";

            measure.style.margin = "0";
            measure.style.padding = "0";
            measure.style.border = "0";

            document.body.appendChild(measure);

            const wordElements: {
                element: HTMLSpanElement;
                word: Word;
            }[] = [];

            parts.forEach((part) => {
                if (part.type === "break") {
                    measure.appendChild(
                        document.createElement("br")
                    );
                    return;
                }

                const tokens =
                    part.text.match(/\S+|\s+/g) || [];

                tokens.forEach((token) => {
                    if (/^\s+$/.test(token)) return;

                    const span =
                        document.createElement("span");

                    span.textContent = token;
                    span.style.display = "inline";

                    if (part.className) {
                        span.className = part.className;
                    }

                    const space =
                        document.createTextNode(" ");

                    measure.appendChild(span);
                    measure.appendChild(space);

                    wordElements.push({
                        element: span,
                        word: {
                            text: token,
                            className: part.className,
                        },
                    });
                });
            });

            const grouped: Line[] = [];

            let currentTop: number | null = null;
            let currentLine: Word[] = [];

            const breakPositions = new Set<number>();

            let wordIndex = 0;

            parts.forEach((part) => {
                if (part.type === "break") {
                    breakPositions.add(wordIndex);
                    return;
                }

                const tokens =
                    part.text.match(/\S+|\s+/g) || [];

                tokens.forEach((token) => {
                    if (!/^\s+$/.test(token)) {
                        wordIndex++;
                    }
                });
            });

            wordElements.forEach(
                ({ element, word }, index) => {
                    const top = element.offsetTop;

                    if (
                        breakPositions.has(index) &&
                        currentLine.length > 0
                    ) {
                        grouped.push({
                            words: currentLine,
                        });

                        currentLine = [];
                        currentTop = null;
                    }

                    if (
                        currentTop === null ||
                        Math.abs(top - currentTop) <= 2
                    ) {
                        currentLine.push(word);

                        if (currentTop === null) {
                            currentTop = top;
                        }
                    } else {
                        if (currentLine.length) {
                            grouped.push({
                                words: currentLine,
                            });
                        }

                        currentLine = [word];
                        currentTop = top;
                    }
                }
            );

            if (currentLine.length) {
                grouped.push({
                    words: currentLine,
                });
            }

            document.body.removeChild(measure);

            if (!cancelled) {
                setLines(grouped);
            }
        };

        const run = async () => {
            try {
                if (document.fonts?.ready) {
                    await document.fonts.ready;
                }
            } catch {}

            requestAnimationFrame(() => {
                if (!cancelled) {
                    calculateLines();
                }
            });
        };

        run();

        const resizeObserver =
            new ResizeObserver(() => {
                calculateLines();
            });

        resizeObserver.observe(container);

        window.addEventListener(
            "resize",
            calculateLines
        );

        return () => {
            cancelled = true;

            resizeObserver.disconnect();

            window.removeEventListener(
                "resize",
                calculateLines
            );
        };
    }, [children]);

    return (
        <div
            ref={containerRef}
            className={className}
        >
            {lines.length > 0 && (
                <motion.div
                    initial="hidden"
                    animate={
                        isInView
                            ? "visible"
                            : "hidden"
                    }
                    variants={{
                        hidden: {},

                        visible: {
                            transition: {
                                staggerChildren: 0.12,
                            },
                        },
                    }}
                >
                    {lines.map((line, lineIndex) => (
                        <div
                            key={lineIndex}
                            className="overflow-hidden"
                        >
                            <motion.div
                                className="block"
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: "100%",
                                    },

                                    visible: {
                                        opacity: 1,
                                        y: "0%",

                                        transition: {
                                            duration: 0.8,
                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1,
                                            ],
                                        },
                                    },
                                }}
                            >
                                {line.words.map(
                                    (
                                        word,
                                        wordIndex
                                    ) => (
                                        <span
                                            key={`${lineIndex}-${wordIndex}`}
                                            className={
                                                word.className
                                            }
                                        >
                                            {word.text}
                                            {" "}
                                        </span>
                                    )
                                )}
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

function getTextParts(
    node: ReactNode,
    inheritedClassName?: string
): ParsedPart[] {
    if (
        node === null ||
        node === undefined ||
        typeof node === "boolean"
    ) {
        return [];
    }

    if (typeof node === "string") {
        return [
            {
                type: "word",
                text: node,
                className: inheritedClassName,
            },
        ];
    }

    if (typeof node === "number") {
        return [
            {
                type: "word",
                text: String(node),
                className: inheritedClassName,
            },
        ];
    }

    if (isValidElement(node)) {
        if (node.type === "br") {
            return [
                {
                    type: "break",
                },
            ];
        }

        const props = node.props as {
            children?: ReactNode;
            className?: string;
        };

        const className =
            props.className ??
            inheritedClassName;

        return getTextParts(
            props.children,
            className
        );
    }

    return Children.toArray(node).flatMap(
        (child) =>
            getTextParts(
                child,
                inheritedClassName
            )
    );
}