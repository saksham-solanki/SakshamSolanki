"use client"

import { type ReactNode, useEffect, useState } from "react";
import {
    ArrowRight,
    BarChart2,
    ChevronDown,
    Home,
    PieChart,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function ShiftingDropDown() {
    return (
        <div className="flex w-full justify-start bg-bg-primary px-8 py-5 text-text-primary md:justify-center">
            <Tabs />
        </div>
    );
}

const Tabs = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const [dir, setDir] = useState<null | "l" | "r">(null);

    const handleSetSelected = (val: number | null) => {
        if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "r" : "l");
        } else if (val === null) {
            setDir(null);
        }

        setSelected(val);
    };

    return (
        <div
            onMouseLeave={() => handleSetSelected(null)}
            className="relative flex h-fit gap-2"
        >
            {TABS.map((t) => {
                return (
                    <Tab
                        key={t.id}
                        selected={selected}
                        handleSetSelected={handleSetSelected}
                        tab={t.id}
                    >
                        {t.title}
                    </Tab>
                );
            })}

            <AnimatePresence>
                {selected && <Content dir={dir} selected={selected} />}
            </AnimatePresence>
        </div>
    );
};

const Tab = ({
    children,
    tab,
    handleSetSelected,
    selected,
}: {
    children: ReactNode;
    tab: number;
    handleSetSelected: (val: number | null) => void;
    selected: number | null;
}) => {
    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            className={`
    flex items-center gap-1 rounded-full px-3 py-1.5 text-sm
    transition-all duration-200
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
    ${selected === tab
                    ? "bg-bg-secondary text-text-primary shadow-sm"
                    : "text-text-tertiary hover:bg-bg-secondary/60 hover:text-text-primary"
                }
  `}
        >
            <span>{children}</span>
            <ChevronDown
                size={16}
                className={`text-text-tertiary transition-transform duration-200 ${selected === tab ? "rotate-180 text-text-primary" : ""
                    }`}
            />
        </button>
    );
};

const Content = ({
    selected,
    dir,
}: {
    selected: number | null;
    dir: null | "l" | "r";
}) => {
    return (
        <motion.div
            id="overlay-content"
            initial={{
                opacity: 0,
                y: 8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: 8,
            }}
            className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-xl border border-border bg-bg-secondary text-text-primary shadow-xl p-4"
        >
            <Bridge />
            <Nub selected={selected} />

            {TABS.map((t) => {
                return (
                    <div className="overflow-hidden" key={t.id}>
                        {selected === t.id && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                                <t.Component />
                            </motion.div>
                        )}
                    </div>
                );
            })}
        </motion.div>
    );
};

const Bridge = () => (
    <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }: { selected: number | null }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById("overlay-content");

            if (!hoveredTab || !overlayContent) return;

            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();

            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

            setLeft(tabCenter);
        }
    };

    return (
        <motion.span
            style={{
                clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
            }}
            animate={{ left }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-bg-secondary border border-border"
        />
    );
};

const Products = () => {
    return (
        <div>
            <div className="flex gap-6">
                <div>
                    <h3 className="mb-2 text-sm font-medium text-text-primary">
                        Startup
                    </h3>
                    <a
                        href="#"
                        className="mb-1 block text-sm text-text-tertiary hover:text-text-primary"
                    >
                        Bookkeeping
                    </a>
                    <a
                        href="#"
                        className="block text-sm text-text-tertiary hover:text-text-primary"
                    >
                        Invoicing
                    </a>
                </div>

                <div>
                    <h3 className="mb-2 text-sm font-medium text-text-primary">
                        Scaleup
                    </h3>
                    <a
                        href="#"
                        className="mb-1 block text-sm text-text-tertiary hover:text-text-primary"
                    >
                        Live Coaching
                    </a>
                    <a
                        href="#"
                        className="mb-1 block text-sm text-text-tertiary hover:text-text-primary"
                    >
                        Reviews
                    </a>
                    <a
                        href="#"
                        className="block text-sm text-text-tertiary hover:text-text-primary"
                    >
                        Tax/VAT
                    </a>
                </div>

                <div>
                    <h3 className="mb-2 text-sm font-medium text-text-primary">
                        Enterprise
                    </h3>
                    <a
                        href="#"
                        className="mb-1 block text-sm text-text-tertiary hover:text-text-primary"
                    >
                        White glove
                    </a>
                    <a
                        href="#"
                        className="mb-1 block text-sm text-text-tertiary hover:text-text-primary"
                    >
                        SOX Compliance
                    </a>
                    <a
                        href="#"
                        className="mb-1 block text-sm text-text-tertiary hover:text-text-primary"
                    >
                        Staffing
                    </a>
                    <a
                        href="#"
                        className="block text-sm text-text-tertiary hover:text-text-primary"
                    >
                        More
                    </a>
                </div>
            </div>

            <button
                className="ml-auto mt-4 flex items-center gap-1 text-sm font-medium text-accent transition-colors"
            >
                <span>View more</span>
                <ArrowRight size={16} />
            </button>
        </div>
    );
};

const Pricing = () => {
    return (
        <div className="grid grid-cols-3 gap-4 divide-x divide-border">
            <a
                href="#"
                className="flex w-full flex-col items-center justify-center py-2 text-text-tertiary transition-colors hover:text-text-primary"
            >
                <Home className="mb-2 h-5 w-5 text-accent" />
                <span className="text-xs">Startup</span>
            </a>

            <a
                href="#"
                className="flex w-full flex-col items-center justify-center py-2 text-text-tertiary transition-colors hover:text-text-primary"
            >
                <BarChart2 className="mb-2 h-5 w-5 text-accent" />
                <span className="text-xs">Scaleup</span>
            </a>

            <a
                href="#"
                className="flex w-full flex-col items-center justify-center py-2 text-text-tertiary transition-colors hover:text-text-primary"
            >
                <PieChart className="mb-2 h-5 w-5 text-accent" />
                <span className="text-xs">Enterprise</span>
            </a>
        </div>
    );
};

const Blog = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-2">
                <a
                    href="#"
                    className="group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                    <img
                        className="mb-2 h-14 w-full rounded-md object-cover"
                        src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=200&fit=crop"
                        alt="Blog post thumbnail"
                    />
                    <h4 className="mb-0.5 text-sm font-medium text-text-primary group-hover:underline">
                        Lorem ipsum dolor
                    </h4>
                    <p className="text-xs text-text-tertiary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
                        quidem eos.
                    </p>
                </a>

                <a
                    href="#"
                    className="group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                    <img
                        className="mb-2 h-14 w-full rounded-md object-cover"
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop"
                        alt="Blog post thumbnail"
                    />
                    <h4 className="mb-0.5 text-sm font-medium text-text-primary group-hover:underline">
                        Lorem ipsum dolor
                    </h4>
                    <p className="text-xs text-text-tertiary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
                        quidem eos.
                    </p>
                </a>
            </div>

            <button
                className="ml-auto mt-4 flex items-center gap-1 text-sm font-medium text-accent transition-colors"
            >
                <span>View more</span>
                <ArrowRight size={16} />
            </button>
        </div>
    );
};

const TABS = [
    {
        title: "Products",
        Component: Products,
    },
    {
        title: "Pricing",
        Component: Pricing,
    },
    {
        title: "Blog",
        Component: Blog,
    },
].map((n, idx) => ({ ...n, id: idx + 1 }));
