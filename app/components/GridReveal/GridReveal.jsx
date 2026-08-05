"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./HeroGridReveal.css";

gsap.registerPlugin(ScrollTrigger);

export default function HeroGridReveal({
    image = "/images/hero_bg.png",
    rows = 4,
    cols = 15,
    height = "100vh",
    gap = 14,
}) {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    // refs всех плиток
    const tileRefs = useRef([]);

    tileRefs.current = [];

    const addTile = (el) => {
        if (el && !tileRefs.current.includes(el)) {
            tileRefs.current.push(el);
        }
    };

    // создаём плитки
    const tiles = useMemo(() => {
        const arr = [];

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                arr.push({
                    row,
                    col,
                    id: `${row}-${col}`,
                });
            }
        }

        return arr;
    }, [rows, cols]);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const grid = gridRef.current;

        if (!section || !grid) return;

        const ctx = gsap.context(() => {

            ////////////////////////////////////////////////////
            // вычисляем размеры
            ////////////////////////////////////////////////////

            const width = grid.offsetWidth;
            const height = grid.offsetHeight;

            const tileWidth =
                (width - gap * (cols - 1)) / cols;

            const tileHeight =
                (height - gap * (rows - 1)) / rows;

            ////////////////////////////////////////////////////
            // расставляем плитки
            ////////////////////////////////////////////////////

            tileRefs.current.forEach((tile, index) => {

                const row = Math.floor(index / cols);
                const col = index % cols;

                const x =
                    col * (tileWidth + gap);

                const y =
                    row * (tileHeight + gap);

                gsap.set(tile, {
                    width: tileWidth,
                    height: tileHeight,
                    x,
                    y,
                });

                ////////////////////////////////////////////////////
                // background
                ////////////////////////////////////////////////////

                const bg = tile.querySelector(".hero-grid-bg");

                gsap.set(bg, {

                    width,
                    height,

                    x: -x,
                    y: -y,

                });

            });

            ////////////////////////////////////////////////////
            // Timeline
            ////////////////////////////////////////////////////

            const tl = gsap.timeline({

                scrollTrigger: {

                    trigger: section,

                    start: "top top",

                    end: "+=2500",

                    pin: true,

                    scrub: 1,

                    anticipatePin: 1,

                    invalidateOnRefresh: true,

                }

            });

            ////////////////////////////////////////////////////
            // сюда позже добавим анимацию
            ////////////////////////////////////////////////////

        }, section);

        return () => ctx.revert();

    }, [cols, rows, gap]);

    return (

        <section
            ref={sectionRef}
            className="hero-grid-section"
            style={{
                height,
            }}
        >

            <div
                ref={gridRef}
                className="hero-grid-wrapper"
            >

                {tiles.map((tile) => (

                    <div
                        key={tile.id}
                        ref={addTile}
                        className="hero-grid-tile"
                    >

                        <div
                            className="hero-grid-bg"
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        />

                    </div>

                ))}

            </div>

        </section>

    );

}