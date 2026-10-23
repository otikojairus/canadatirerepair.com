module.exports = [
(()=>{"use strict";return[
"[project]/app/services/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$breadcrumb$2d$json$2d$ld$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/breadcrumb-json-ld.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/faq-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/visuals.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/images.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$link$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/link-labels.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/seo-meta.ts [app-rsc] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
;
const metadata = {
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["trimTitle"])(`Tire Repair Services Canada | ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]}`),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["trimDescription"])(`Mobile tire repair, flat tires, truck roadside assistance, and emergency puncture service across Canada. Pick a service below or call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]}.`),
    alternates: {
        canonical: "/services"
    }
};
const servicesIntro = "Every national service page below covers one job type—mobile flats, puncture repair, semi truck tires, or 24-hour roadside. " + "Start with the closest match; if you have a steer tire issue and a slow leak, tell dispatch on the same call so we load the right gear. " + "Drivers, fleets, and owner-operators share one Canada-wide line—share your location, tire size, and whether you are on a highway shoulder.";
const indexFaqs = [
    {
        q: "Repair vs spare swap—which comes first?",
        a: "Safety first. If the casing is damaged or you are in traffic, we stabilize the vehicle and install your spare when possible, then repair or replace as appropriate."
    },
    {
        q: "Can one visit cover truck and trailer tires?",
        a: "Often yes—tell dispatch how many axles are affected so we bring enough air and torque equipment."
    },
    {
        q: "How do I book?",
        a: "Pick the closest service below, then call " + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"] + " with your location and photos of the tire."
    }
];
const breadcrumbs = [
    {
        name: "Home",
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])()
    },
    {
        name: "Services",
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])("services")
    }
];
function ServicesPage() {
    const hero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPhoto"])("hero-service");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$breadcrumb$2d$json$2d$ld$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BreadcrumbJsonLd"], {
                crumbs: breadcrumbs
            }, void 0, false, {
                fileName: "[project]/app/services/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: indexFaqs.map((faq)=>({
                            "@type": "Question",
                            name: faq.q,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.a
                            }
                        }))
                }
            }, void 0, false, {
                fileName: "[project]/app/services/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "breadcrumb wrap",
                "aria-label": "Breadcrumb",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: " / "
                    }, void 0, false, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-current": "page",
                        children: "Services"
                    }, void 0, false, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "page-intro",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-photo",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                src: hero.src,
                                alt: hero.alt,
                                fill: true,
                                sizes: "100vw",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/services/page.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow",
                            children: "Services"
                        }, void 0, false, {
                            fileName: "[project]/app/services/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Tire repair services in Canada"
                        }, void 0, false, {
                            fileName: "[project]/app/services/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lede",
                            children: servicesIntro
                        }, void 0, false, {
                            fileName: "[project]/app/services/page.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "btn btn-beacon",
                            href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_E164"]}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "btn-label",
                                    children: "Call"
                                }, void 0, false, {
                                    fileName: "[project]/app/services/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "btn-value",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]
                                }, void 0, false, {
                                    fileName: "[project]/app/services/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/services/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/services/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/services/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "content-section",
                        children: "All national services"
                    }, void 0, false, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "service-list",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NATIONAL_PAGES"].map((page)=>{
                            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageForServiceSlug"])(page.slug);
                            const img = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPhoto"])(key);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${page.slug}`,
                                className: "service-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "service-row-thumb",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                            src: img.src,
                                            alt: "",
                                            fill: true,
                                            sizes: "120px"
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$link$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageLinkLabel"])(page)
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: img.caption
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "service-row-arrow",
                                        "aria-hidden": "true",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, page.slug, true, {
                                fileName: "[project]/app/services/page.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaqSection"], {
                        title: "Services FAQ",
                        items: indexFaqs
                    }, void 0, false, {
                        fileName: "[project]/app/services/page.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/services/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/breadcrumb-json-ld.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BreadcrumbJsonLd",
    ()=>BreadcrumbJsonLd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/visuals.tsx [app-rsc] (ecmascript)");
;
;
function BreadcrumbJsonLd({ crumbs }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
        data: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: crumbs.map((crumb, index)=>({
                    "@type": "ListItem",
                    position: index + 1,
                    name: crumb.name,
                    item: crumb.href
                }))
        }
    }, void 0, false, {
        fileName: "[project]/components/breadcrumb-json-ld.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/faq-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaqSection",
    ()=>FaqSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function FaqSection({ title, id = "faq-heading", items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "faq-block",
        "aria-labelledby": id,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: id,
                className: "section-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "section-title__mark",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/faq-section.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/components/faq-section.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "faq-stack",
                children: items.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "faq-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "faq-item__num",
                                "aria-hidden": "true",
                                children: String(i + 1).padStart(2, "0")
                            }, void 0, false, {
                                fileName: "[project]/components/faq-section.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: faq.q
                                    }, void 0, false, {
                                        fileName: "[project]/components/faq-section.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: faq.a
                                    }, void 0, false, {
                                        fileName: "[project]/components/faq-section.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/faq-section.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, faq.q, true, {
                        fileName: "[project]/components/faq-section.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/faq-section.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/faq-section.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/visuals.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JsonLd",
    ()=>JsonLd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function JsonLd({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(data)
        }
    }, void 0, false, {
        fileName: "[project]/components/visuals.tsx",
        lineNumber: 2,
        columnNumber: 10
    }, this);
}
}),
"[project]/lib/content-utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "capitalizeSentence",
    ()=>capitalizeSentence,
    "hashSlug",
    ()=>hashSlug,
    "pick",
    ()=>pick,
    "wordCount",
    ()=>wordCount
]);
function hashSlug(slug) {
    let h = 0;
    for(let i = 0; i < slug.length; i++)h = h * 31 + slug.charCodeAt(i) >>> 0;
    return h;
}
function pick(slug, salt, options) {
    const h = hashSlug(`${slug}:${salt}`);
    return options[h % options.length];
}
function wordCount(text) {
    return text.trim().split(/\s+/).filter(Boolean).length;
}
function capitalizeSentence(s) {
    if (!s) return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
}
}),
"[project]/lib/images.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPhoto",
    ()=>getPhoto,
    "imageForServiceSlug",
    ()=>imageForServiceSlug,
    "nationalServiceImageKeys",
    ()=>nationalServiceImageKeys
]);
const photos = {
    "hero-home": {
        src: "/images/hero-home.webp",
        alt: "Open highway stretching across the Canadian landscape",
        caption: "Highway flats and blowouts—we dispatch to shoulders, ramps, and rest stops.",
        credit: "Unsplash"
    },
    "hero-service": {
        src: "/images/hero-service.webp",
        alt: "Vehicle in an auto service bay",
        caption: "On-site tire work for cars, SUVs, and light trucks.",
        credit: "Unsplash"
    },
    "hero-local": {
        src: "/images/hero-local.webp",
        alt: "Downtown skyline above city streets",
        caption: "Metro crews know local highways, depots, and parking rules.",
        credit: "Unsplash"
    },
    emergency: {
        src: "/images/emergency.webp",
        alt: "Car parked on the roadside shoulder",
        caption: "Emergency tire repair—cone the lane and stabilize before you roll.",
        credit: "Unsplash"
    },
    night: {
        src: "/images/night.webp",
        alt: "Night highway with vehicle light trails",
        caption: "24-hour tire repair for night shifts and winter storms.",
        credit: "Unsplash"
    },
    storefront: {
        src: "/images/storefront.webp",
        alt: "Semi truck driving on a multi-lane highway",
        caption: "Truck tire repair—steer, drive, and trailer positions.",
        credit: "Unsplash"
    },
    commercial: {
        src: "/images/commercial.webp",
        alt: "Heavy-duty truck on a freeway",
        caption: "Semi truck tires—correct ply, load range, and torque specs.",
        credit: "Unsplash"
    },
    "commercial-replacement": {
        src: "/images/commercial-replacement.webp",
        alt: "Car driving on an open road",
        caption: "Fleet programs—document size, axle, and DOT notes on every call.",
        credit: "Unsplash"
    },
    replacement: {
        src: "/images/replacement.webp",
        alt: "Car wheel removed with brake rotor visible",
        caption: "Repair or spare swap when the casing is still safe.",
        credit: "Unsplash"
    },
    "board-up": {
        src: "/images/board-up.webp",
        alt: "Emergency tools staged for roadside work",
        caption: "Truck roadside assistance—staging safe work zones on active roads.",
        credit: "Unsplash"
    },
    "commercial-door": {
        src: "/images/commercial-door.webp",
        alt: "Commercial delivery truck on the road",
        caption: "Mobile tire repair—we come to your lot, dock, or driveway.",
        credit: "Unsplash"
    },
    "emergency-commercial-door": {
        src: "/images/emergency-commercial-door.webp",
        alt: "Close-up of a large truck tire tread",
        caption: "Emergency truck tire help when a steer or drive goes down.",
        credit: "Unsplash"
    },
    door: {
        src: "/images/door.webp",
        alt: "Close-up of worn and damaged tire tread",
        caption: "Flat tire repair—stop driving on zero pressure to save the sidewall.",
        credit: "Unsplash"
    },
    "door-glass-replacement": {
        src: "/images/door-glass-replacement.webp",
        alt: "Mechanic inspecting tire tread depth",
        caption: "Puncture repair—plug or patch only when injury is in the tread belt.",
        credit: "Unsplash"
    },
    "door-glass-repair": {
        src: "/images/door-glass-repair.webp",
        alt: "Checking tire pressure at the valve stem",
        caption: "Slow leak repair—valves, beads, and rim corrosion checks.",
        credit: "Unsplash"
    },
    "storefront-window": {
        src: "/images/storefront-window.webp",
        alt: "Vehicle traveling on a rural highway",
        caption: "Roadside tire repair—note shoulder width and traffic speed.",
        credit: "Unsplash"
    },
    "aluminum-door": {
        src: "/images/aluminum-door.webp",
        alt: "Off-road tire covered in mud",
        caption: "Mobile truck and equipment tires—share tire size and axle position.",
        credit: "Unsplash"
    }
};
/** One distinct image per national service — no two services share a file. */ const NATIONAL_SLUG_IMAGE = {
    "truck-tire-repair": "storefront",
    "semi-truck-tire-repair": "commercial",
    "mobile-truck-tire-repair": "aluminum-door",
    "truck-roadside-assistance": "board-up",
    "emergency-tire-repair": "emergency",
    "24-hour-tire-repair": "night",
    "roadside-tire-repair": "storefront-window",
    "mobile-tire-repair": "commercial-door",
    "tire-repair": "replacement",
    "flat-tire-repair": "door",
    "tire-puncture-repair": "door-glass-replacement",
    "tire-leak-repair": "door-glass-repair"
};
const CITY_ROTATION = [
    "replacement",
    "door",
    "commercial-door",
    "storefront-window",
    "emergency"
];
function imageForServiceSlug(slug) {
    const national = NATIONAL_SLUG_IMAGE[slug];
    if (national) return national;
    if (slug.startsWith("tire-repair-")) {
        let hash = 0;
        for(let i = 0; i < slug.length; i++)hash = (hash + slug.charCodeAt(i)) % CITY_ROTATION.length;
        return CITY_ROTATION[hash];
    }
    if (slug.includes("emergency") || slug.includes("roadside") || slug.includes("24-hour")) return "emergency";
    return "hero-service";
}
function getPhoto(key) {
    return photos[key];
}
function nationalServiceImageKeys() {
    return Object.values(NATIONAL_SLUG_IMAGE);
}
}),
"[project]/lib/link-labels.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pageLinkLabel",
    ()=>pageLinkLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$service$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/service-labels.ts [app-rsc] (ecmascript)");
;
function pageLinkLabel(page) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$service$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceLabelFromSlug"])(page.slug);
}
}),
"[project]/lib/seo-meta.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "metaDescriptionFor",
    ()=>metaDescriptionFor,
    "metaTitleFor",
    ()=>metaTitleFor,
    "trimDescription",
    ()=>trimDescription,
    "trimTitle",
    ()=>trimTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
;
;
function trimTitle(title, min = 50, max = 60) {
    let t = title.trim();
    if (t.length > max) {
        const cut = t.slice(0, max - 1);
        const lastSpace = cut.lastIndexOf(" ");
        t = (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim() + "…";
    }
    if (t.length < min && t.length + 3 <= max) {
        t = `${t} | CA`;
    }
    return t;
}
function trimDescription(text, min = 150, max = 160) {
    let clean = text.replace(/\s+/g, " ").trim();
    const suffix = " Call now for mobile tire repair and roadside help.";
    if (clean.length < min) {
        clean = `${clean}${clean.endsWith(".") ? "" : "."}${suffix}`;
    }
    if (clean.length > max) {
        const cut = clean.slice(0, max - 1);
        const lastSpace = cut.lastIndexOf(" ");
        clean = (lastSpace >= min ? cut.slice(0, lastSpace) : cut).trim() + "…";
    }
    return clean.slice(0, max);
}
function titleCaseKeyword(keyword) {
    return keyword.trim().replace(/\b\w/g, (c)=>c.toUpperCase());
}
function metaTitleFor(page) {
    const kw = titleCaseKeyword(page.keyword || page.slug.replace(/-/g, " "));
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    let title;
    if (page.kind === "city") {
        title = `${kw} ${place} | ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]}`;
    } else {
        title = `${kw} Canada | ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]}`;
    }
    return trimTitle(title);
}
function metaDescriptionFor(page, introLead, phone) {
    const kw = page.keyword.trim();
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const cta = `Call ${phone} now.`;
    const variants = [
        `${kw} in ${place || "Canada"}—mobile service, puncture repair, and roadside assistance. ${cta}`,
        `Need ${kw}${place ? ` in ${place}` : " across Canada"}? Share location, tire size, and photos to dispatch. ${cta}`,
        `${titleCaseKeyword(kw)}${place ? ` near ${place}` : ""}. Winter roads and highway debris spike demand—call early. ${cta}`,
        `Trusted ${kw} help${place ? ` for ${place}` : ""}. We stabilize the vehicle before you roll on a bad tire. ${cta}`
    ];
    const chosen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "meta", variants);
    const introSnippet = introLead.split(/\s+/).slice(0, 22).join(" ");
    const blended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wordCount"])(chosen) < 18 ? `${introSnippet}. ${cta}` : chosen;
    return trimDescription(blended);
}
;
}),
"[project]/lib/service-labels.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SERVICE_LABELS",
    ()=>SERVICE_LABELS,
    "serviceLabelFromSlug",
    ()=>serviceLabelFromSlug
]);
const SERVICE_LABELS = {
    "truck-tire-repair": "Truck tire repair",
    "semi-truck-tire-repair": "Semi truck tire repair",
    "mobile-truck-tire-repair": "Mobile truck tire repair",
    "truck-roadside-assistance": "Truck roadside assistance",
    "emergency-tire-repair": "Emergency tire repair",
    "24-hour-tire-repair": "24 hour tire repair",
    "roadside-tire-repair": "Roadside tire repair",
    "mobile-tire-repair": "Mobile tire repair",
    "tire-repair": "Tire repair",
    "flat-tire-repair": "Flat tire repair",
    "tire-puncture-repair": "Tire puncture repair",
    "tire-leak-repair": "Tire leak repair"
};
const CITY_SUFFIXES = [
    "calgary",
    "winnipeg",
    "edmonton",
    "ottawa",
    "montreal",
    "laval",
    "hamilton",
    "st-catharines",
    "markham",
    "north-york",
    "london-ontario",
    "surrey-bc",
    "mississauga",
    "toronto",
    "halifax",
    "regina",
    "vancouver",
    "vaughan",
    "etobicoke",
    "barrie",
    "woodbridge",
    "thornhill",
    "abbotsford"
];
function serviceLabelFromSlug(slug) {
    let base = slug;
    for (const city of CITY_SUFFIXES){
        if (base.endsWith(`-${city}`)) {
            base = base.slice(0, -(city.length + 1));
            break;
        }
    }
    return SERVICE_LABELS[base] ?? base.replace(/-/g, " ");
}
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/services/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/services/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__00p-f2ma4hmf7._.js.map