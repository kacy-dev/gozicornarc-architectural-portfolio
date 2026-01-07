"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, CircleQuestionMark, BadgeQuestionMarkIcon } from "lucide-react";

type ServiceKey = "consultation" | "planning" | "building";

const SERVICES: { key: ServiceKey; label: string }[] = [
    { key: "consultation", label: "Consultation" },
    { key: "planning", label: "Planning" },
    { key: "building", label: "Building" },
];

const FAQ_DATA: Record<
    ServiceKey,
    { question: string; answer: string }[]
> = {
    consultation: [
        {
            question: "What happens during the initial consultation?",
            answer:
                "We discuss your vision, project scope, budget expectations, and site conditions. This helps us understand your goals and propose the most suitable architectural or construction approach.",
        },
        {
            question: "Is the consultation session free?",
            answer:
                "Yes. The first consultation is completely free and designed to give you clarity before any formal engagement or commitment.",
        },
        {
            question: "Do I need land before booking a consultation?",
            answer:
                "No. You can consult with us even before purchasing land. We can help you evaluate plots, zoning requirements, and development potential.",
        },
        {
            question: "Can consultations be done remotely?",
            answer:
                "Yes. We offer both physical and virtual consultations via video calls for clients outside our immediate location.",
        },
        {
            question: "How long does a consultation session last?",
            answer:
                "A typical consultation lasts between 30 to 60 minutes, depending on project complexity and client requirements.",
        },
    ],

    planning: [
        {
            question: "What does the planning phase include?",
            answer:
                "The planning phase covers architectural design, space planning, structural coordination, material selection, and cost estimation.",
        },
        {
            question: "Do you handle drawings and approvals?",
            answer:
                "Yes. We prepare architectural drawings, structural plans, and assist with all regulatory approvals and submission processes.",
        },
        {
            question: "Can I request revisions to the design?",
            answer:
                "Absolutely. The planning phase is collaborative, and revisions are encouraged until the final design fully reflects your vision.",
        },
        {
            question: "How long does the planning stage take?",
            answer:
                "Depending on project size and approval requirements, planning can take anywhere from 2 weeks to several months.",
        },
        {
            question: "Will I receive a detailed project cost breakdown?",
            answer:
                "Yes. We provide a transparent cost estimate covering materials, labor, and timelines to help you plan financially.",
        },
    ],

    building: [
        {
            question: "Do you manage construction from start to finish?",
            answer:
                "Yes. We offer end-to-end construction management including site supervision, material sourcing, scheduling, and final delivery.",
        },
        {
            question: "How do you ensure quality during construction?",
            answer:
                "We implement strict quality control processes, use vetted suppliers, and maintain consistent on-site supervision throughout the build.",
        },
        {
            question: "Do you work with a fixed timeline?",
            answer:
                "Yes. A clear project timeline is established before construction begins, and progress is monitored to avoid unnecessary delays.",
        },
        {
            question: "Can I make changes during construction?",
            answer:
                "Minor changes can be accommodated, though significant alterations may affect cost and timeline. All changes are communicated transparently.",
        },
        {
            question: "Do you provide post-construction support?",
            answer:
                "Yes. We offer post-completion inspections and support to ensure everything meets agreed standards and client satisfaction.",
        },
    ],
};


export default function FAQ() {
    const [activeService, setActiveService] =
        useState<ServiceKey>("consultation");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        // <section className="section">
        <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 px-4 lg:px-40 sm:px-6 md:px-10 py-8 md:py-12 lg:py-16 mx-auto">
            {/* Heading */}
            <div className="mb-12 flex flex-col items-center text-center">
               
                <div>

                    <h1 className=" text-2xl sm:text-2xl lg:text-2xl font-extrabold font-michroma">
                        Frequently Asked Questions
                    </h1>
                    <p className="w-24 text-center mx-auto sm:w-24 h-1 bg-orange-400 my-4"></p>
                    <p className=" text-sm font-poppins font-bold mb-3 uppercase">Everything you need to know about working with us</p>
                </div>
                <div className="flex justify-center items-center hidden lg:block md:block">
                    <CircleQuestionMark className="w-70 h-70 text-orange-400 mt-4" />
                </div>
            </div>


            <div>
                {/* Service Tabs */}
                <div className="flex justify-center gap-4 mb-10 flex-wrap">
                    {SERVICES.map((service) => {
                        const isActive = service.key === activeService;

                        return (
                            <button
                                key={service.key}
                                onClick={() => {
                                    setActiveService(service.key);
                                    setOpenIndex(null);
                                }}
                                className={`px-6 py-3 rounded-full text-sm font-medium font-poppins transition-base cursor-pointer
                  ${isActive
                                        ? "bg-orange-400 text-white shadow-md"
                                        : "bg-concrete text-foreground hover:bg-concrete/80"
                                    }`}
                            >
                                {service.label}
                            </button>
                        );
                    })}
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {FAQ_DATA[activeService].map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="shadow-xs border broder-1 border-neutral-200 rounded-lg overflow-hidden"
                            >
                                {/* Question */}
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                >
                                    <span className="font-medium">
                                        {faq.question}
                                    </span>

                                    <motion.span
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="shrink-0"
                                    >
                                        <Plus size={20} />
                                    </motion.span>
                                </button>

                                {/* Answer */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="px-6 overflow-hidden"
                                        >
                                            <p className="pb-6 text-muted text-sm">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
        // </section>
    );
}
