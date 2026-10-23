module.exports = [
(()=>{"use strict";return[
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/page-hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$photo$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/photo-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/visuals.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/images.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$link$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/link-labels.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/faq-section.tsx [app-rsc] (ecmascript)");
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
;
const metadata = {
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["trimTitle"])(`Canada Tire Repair | 24/7 Mobile Service`),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["trimDescription"])(`Flat tire, puncture, or truck breakdown? Mobile and roadside tire repair across Canada. Call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]} any time.`),
    alternates: {
        canonical: "/"
    }
};
const homeFaqs = [
    {
        q: "Do you repair on the shoulder or in my driveway?",
        a: "Both—mobile units handle home, fleet yards, and highway shoulders when it is safe. We cone the lane and confirm tire size before work starts."
    },
    {
        q: "Which cities do you cover?",
        a: "Major metros from Toronto and Vancouver to Calgary and Halifax. Open the Cities page or call " + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"] + " with your location."
    },
    {
        q: "What should I send when I call?",
        a: "GPS or street address, tire size if you know it, photos of the damage, and whether you have a usable spare."
    }
];
const featured = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NATIONAL_PAGES"].filter((p)=>p.slug === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"] || p.priority === "High" || p.priority === "Top Priority").slice(0, 6);
function HomePage() {
    const cities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cityLocationEntries"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: [
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"],
                        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(),
                        telephone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_E164"],
                        areaServed: "Canada"
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: homeFaqs.map((faq)=>({
                                "@type": "Question",
                                name: faq.q,
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: faq.a
                                }
                            }))
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageHero"], {
                variant: "home",
                kicker: "Canada · 24/7",
                title: "Flat tire? Get off the road safely first.",
                lead: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Passenger cars, light trucks, and semis—we dispatch mobile techs for punctures, flats, leaks, and fleet roadside calls across Canada."
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this),
                ctaLabel: "Call now",
                secondaryHref: "/locations",
                secondaryLabel: "Pick your city"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel panel--ice",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "section-title__mark",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                "What we handle"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lede",
                            children: "Start with the closest service. If you need truck roadside plus a puncture fix, mention both on the same call."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "tile-grid",
                            children: [
                                featured.map((page)=>{
                                    const photo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPhoto"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageForServiceSlug"])(page.slug));
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$photo$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PhotoCard"], {
                                            href: `/${page.slug}`,
                                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$link$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageLinkLabel"])(page),
                                            subtitle: photo.caption,
                                            imageKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageForServiceSlug"])(page.slug)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 19
                                        }, this)
                                    }, page.slug, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$photo$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PhotoCard"], {
                                        href: "/services",
                                        title: "All services",
                                        subtitle: "Full list",
                                        imageKey: "hero-service"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "section-title__mark",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                "Locations"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lede",
                            children: "Pick your city for local dispatch notes and a direct line to help."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "city-grid",
                            children: [
                                cities.slice(0, 12).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: c.href,
                                            children: c.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    }, c.href, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/locations",
                                        children: "All cities"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel panel--ice",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaqSection"], {
                        title: "Quick answers",
                        items: homeFaqs
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 42,
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
"[project]/components/page-hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHero",
    ()=>PageHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/images.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hero$2d$gallery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hero-gallery.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
function PageHero({ kicker, title, lead, ctaLabel = "Call now", secondaryHref, secondaryLabel, variant = "page", imageKey = "hero-service", slug }) {
    const mainKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hero$2d$gallery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["heroMainImageKey"])(slug, variant, imageKey);
    const photo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPhoto"])(mainKey);
    const tiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hero$2d$gallery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["heroTilesFor"])(slug, variant);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `runway-hero runway-hero--${variant}`,
        "aria-labelledby": "runway-hero-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "runway-hero__bg",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                        src: photo.src,
                        alt: "",
                        fill: true,
                        priority: true,
                        sizes: "100vw",
                        className: "runway-hero__bg-img"
                    }, void 0, false, {
                        fileName: "[project]/components/page-hero.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "runway-hero__bg-shade"
                    }, void 0, false, {
                        fileName: "[project]/components/page-hero.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/page-hero.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap runway-hero__layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "runway-hero__copy",
                        children: [
                            kicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "runway-kicker",
                                children: kicker
                            }, void 0, false, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 45,
                                columnNumber: 22
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: "runway-hero-title",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "runway-lead",
                                children: lead
                            }, void 0, false, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "runway-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn btn-beacon btn-beacon--lg",
                                        href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_E164"]}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "btn-label",
                                                children: ctaLabel
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "btn-value",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    secondaryHref && secondaryLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        className: "btn btn-outline-light",
                                        href: secondaryHref,
                                        children: secondaryLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "runway-trust",
                                "aria-label": "Service highlights",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "runway-trust__icon",
                                                "aria-hidden": "true",
                                                children: "◎"
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this),
                                            "Live dispatch"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "runway-trust__icon",
                                                "aria-hidden": "true",
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            "Mobile to you"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "runway-trust__icon",
                                                "aria-hidden": "true",
                                                children: "✦"
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this),
                                            "Canada-wide"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/page-hero.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "runway-mosaic",
                        "aria-label": "Related tire services",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "runway-mosaic__featured",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                        src: photo.src,
                                        alt: photo.alt,
                                        fill: true,
                                        priority: true,
                                        sizes: "(max-width: 900px) 92vw, 42vw",
                                        className: "runway-mosaic__img"
                                    }, void 0, false, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "runway-mosaic__featured-cap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "runway-mosaic__tag",
                                                children: variant === "home" ? "Roadside ready" : "On-site repair"
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: photo.caption
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "runway-mosaic__tiles",
                                children: tiles.map((tile)=>{
                                    const thumb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPhoto"])(tile.key);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: tile.href,
                                            className: "runway-tile",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "runway-tile__thumb",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                        src: thumb.src,
                                                        alt: "",
                                                        fill: true,
                                                        sizes: "120px",
                                                        className: "runway-mosaic__img"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/page-hero.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/page-hero.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "runway-tile__label",
                                                    children: tile.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/page-hero.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/page-hero.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this)
                                    }, tile.href + tile.key, false, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/page-hero.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/page-hero.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/page-hero.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/photo-card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotoCard",
    ()=>PhotoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/images.ts [app-rsc] (ecmascript)");
;
;
;
;
function PhotoCard({ href, title, subtitle, imageKey }) {
    const photo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPhoto"])(imageKey);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "lane-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lane-card__media",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                        src: photo.src,
                        alt: photo.alt,
                        fill: true,
                        sizes: "(max-width: 700px) 100vw, 33vw",
                        className: "lane-card__img"
                    }, void 0, false, {
                        fileName: "[project]/components/photo-card.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lane-card__shine",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/photo-card.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/photo-card.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lane-card__body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lane-card__title",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/photo-card.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lane-card__sub",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/components/photo-card.tsx",
                        lineNumber: 23,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lane-card__arrow",
                        "aria-hidden": "true",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/components/photo-card.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/photo-card.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/photo-card.tsx",
        lineNumber: 16,
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
"[project]/lib/hero-gallery.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HERO_HOME_TILES",
    ()=>HERO_HOME_TILES,
    "heroMainImageKey",
    ()=>heroMainImageKey,
    "heroTilesFor",
    ()=>heroTilesFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/images.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
;
;
const HERO_HOME_TILES = [
    {
        key: "emergency",
        href: "/emergency-tire-repair",
        label: "Emergency"
    },
    {
        key: "door",
        href: "/flat-tire-repair",
        label: "Flat tire"
    },
    {
        key: "storefront",
        href: "/truck-tire-repair",
        label: "Truck tires"
    },
    {
        key: "commercial-door",
        href: "/mobile-tire-repair",
        label: "Mobile repair"
    }
];
const PAGE_TILE_PRESETS = {
    "truck-tire-repair": [
        {
            key: "commercial",
            href: "/semi-truck-tire-repair",
            label: "Semi tires"
        },
        {
            key: "board-up",
            href: "/truck-roadside-assistance",
            label: "Roadside"
        },
        {
            key: "commercial-replacement",
            href: "/mobile-truck-tire-repair",
            label: "Mobile truck"
        }
    ],
    "semi-truck-tire-repair": [
        {
            key: "storefront",
            href: "/truck-tire-repair",
            label: "Fleet truck"
        },
        {
            key: "emergency",
            href: "/emergency-tire-repair",
            label: "Emergency"
        },
        {
            key: "night",
            href: "/24-hour-tire-repair",
            label: "24 hour"
        }
    ],
    "mobile-truck-tire-repair": [
        {
            key: "commercial-door",
            href: "/mobile-tire-repair",
            label: "Mobile car"
        },
        {
            key: "storefront",
            href: "/truck-tire-repair",
            label: "Truck repair"
        },
        {
            key: "board-up",
            href: "/truck-roadside-assistance",
            label: "Assistance"
        }
    ],
    "truck-roadside-assistance": [
        {
            key: "storefront-window",
            href: "/roadside-tire-repair",
            label: "Roadside"
        },
        {
            key: "emergency",
            href: "/emergency-tire-repair",
            label: "Emergency"
        },
        {
            key: "storefront",
            href: "/truck-tire-repair",
            label: "Truck tires"
        }
    ],
    "emergency-tire-repair": [
        {
            key: "night",
            href: "/24-hour-tire-repair",
            label: "24 hour"
        },
        {
            key: "storefront-window",
            href: "/roadside-tire-repair",
            label: "Roadside"
        },
        {
            key: "door",
            href: "/flat-tire-repair",
            label: "Flat tire"
        }
    ],
    "24-hour-tire-repair": [
        {
            key: "emergency",
            href: "/emergency-tire-repair",
            label: "Emergency"
        },
        {
            key: "storefront-window",
            href: "/roadside-tire-repair",
            label: "Roadside"
        },
        {
            key: "commercial-door",
            href: "/mobile-tire-repair",
            label: "Mobile"
        }
    ],
    "roadside-tire-repair": [
        {
            key: "board-up",
            href: "/truck-roadside-assistance",
            label: "Truck roadside"
        },
        {
            key: "emergency",
            href: "/emergency-tire-repair",
            label: "Emergency"
        },
        {
            key: "commercial-door",
            href: "/mobile-tire-repair",
            label: "Mobile"
        }
    ],
    "mobile-tire-repair": [
        {
            key: "door",
            href: "/flat-tire-repair",
            label: "Flat tire"
        },
        {
            key: "door-glass-replacement",
            href: "/tire-puncture-repair",
            label: "Puncture"
        },
        {
            key: "storefront-window",
            href: "/roadside-tire-repair",
            label: "Roadside"
        }
    ],
    "tire-repair": [
        {
            key: "door",
            href: "/flat-tire-repair",
            label: "Flat tire"
        },
        {
            key: "door-glass-replacement",
            href: "/tire-puncture-repair",
            label: "Puncture"
        },
        {
            key: "door-glass-repair",
            href: "/tire-leak-repair",
            label: "Slow leak"
        }
    ],
    "flat-tire-repair": [
        {
            key: "replacement",
            href: `/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]}`,
            label: "Tire repair"
        },
        {
            key: "door-glass-replacement",
            href: "/tire-puncture-repair",
            label: "Puncture"
        },
        {
            key: "commercial-door",
            href: "/mobile-tire-repair",
            label: "Mobile"
        }
    ],
    "tire-puncture-repair": [
        {
            key: "door",
            href: "/flat-tire-repair",
            label: "Flat tire"
        },
        {
            key: "door-glass-repair",
            href: "/tire-leak-repair",
            label: "Leak repair"
        },
        {
            key: "replacement",
            href: `/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]}`,
            label: "General repair"
        }
    ],
    "tire-leak-repair": [
        {
            key: "door-glass-replacement",
            href: "/tire-puncture-repair",
            label: "Puncture"
        },
        {
            key: "door",
            href: "/flat-tire-repair",
            label: "Flat tire"
        },
        {
            key: "commercial-door",
            href: "/mobile-tire-repair",
            label: "Mobile"
        }
    ]
};
const CITY_TILES = [
    {
        key: "emergency",
        href: "/emergency-tire-repair",
        label: "Emergency"
    },
    {
        key: "commercial-door",
        href: "/mobile-tire-repair",
        label: "Mobile"
    },
    {
        key: "storefront-window",
        href: "/roadside-tire-repair",
        label: "Roadside"
    }
];
function heroTilesFor(slug, variant) {
    if (variant === "home") return HERO_HOME_TILES;
    if (!slug) return HERO_HOME_TILES.slice(0, 3);
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceBaseSlug"])(slug);
    if (PAGE_TILE_PRESETS[base]) return PAGE_TILE_PRESETS[base];
    if (slug.startsWith("tire-repair-")) return CITY_TILES;
    const main = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageForServiceSlug"])(slug);
    return [
        {
            key: main,
            href: `/${slug}`,
            label: "This service"
        },
        ...HERO_HOME_TILES.filter((t)=>t.key !== main).slice(0, 2)
    ];
}
function heroMainImageKey(slug, variant, fallback) {
    if (variant === "home") return "hero-home";
    if (!slug) return fallback;
    if (slug.startsWith("tire-repair-")) return "hero-local";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageForServiceSlug"])(slug);
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
        src: "/images/tire-hero-home.webp",
        alt: "Mechanic installing a car tire and alloy wheel with an impact wrench",
        caption: "Highway flats and blowouts—we dispatch to shoulders, ramps, and rest stops.",
        credit: "Pexels"
    },
    "hero-service": {
        src: "/images/tire-hero-service.webp",
        alt: "Mechanic crouching with an impact wrench changing a car tire on the wheel",
        caption: "On-site tire work for cars, SUVs, and light trucks.",
        credit: "Pexels"
    },
    "hero-local": {
        src: "/images/tire-hero-local.webp",
        alt: "Mechanic in blue overalls inspecting a commercial semi-truck wheel and tire",
        caption: "Metro crews know local highways, depots, and parking rules.",
        credit: "Pexels"
    },
    emergency: {
        src: "/images/tire-emergency.webp",
        alt: "Man crouched on pavement changing a jacked-up car wheel with a lug wrench",
        caption: "Emergency tire repair—cone the lane and stabilize before you roll.",
        credit: "Pexels"
    },
    night: {
        src: "/images/tire-night.webp",
        alt: "Tall stacks of black tires with chalk size markings in a tire warehouse",
        caption: "24-hour tire repair for night shifts and winter storms.",
        credit: "Pexels"
    },
    storefront: {
        src: "/images/tire-storefront.webp",
        alt: "Close-up of dual Goodyear commercial semi-truck tires and polished chrome rims",
        caption: "Truck tire repair—steer, drive, and trailer positions.",
        credit: "Pexels"
    },
    commercial: {
        src: "/images/tire-commercial.webp",
        alt: "Close-up of a heavy-duty semi-truck chassis frame and dually rear tires",
        caption: "Semi truck tires—correct ply, load range, and torque specs.",
        credit: "Pexels"
    },
    "commercial-replacement": {
        src: "/images/tire-commercial-replacement.webp",
        alt: "Close-up of heavy-duty commercial truck wheels and deep-lug tires",
        caption: "Fleet programs—document size, axle, and DOT notes on every call.",
        credit: "Pexels"
    },
    replacement: {
        src: "/images/tire-replacement.webp",
        alt: "Mechanic in blue coveralls mounting a car tire on a tire-changing machine",
        caption: "Repair or spare swap when the casing is still safe.",
        credit: "Pexels"
    },
    "board-up": {
        src: "/images/tire-board-up.webp",
        alt: "Technician kneeling roadside repairing the front tire and wheel of a pickup truck",
        caption: "Truck roadside assistance—staging safe work zones on active roads.",
        credit: "Pexels"
    },
    "commercial-door": {
        src: "/images/tire-commercial-door.webp",
        alt: "Roadside flat tire inspection and pressure check on a detached wheel",
        caption: "Mobile tire repair—we come to your lot, dock, or driveway.",
        credit: "Pexels"
    },
    "emergency-commercial-door": {
        src: "/images/tire-emergency-commercial-door.webp",
        alt: "Close-up of stacked heavy-duty tires showing deep tread patterns",
        caption: "Emergency truck tire help when a steer or drive goes down.",
        credit: "Pexels"
    },
    door: {
        src: "/images/tire-door.webp",
        alt: "Rear pickup truck wheel and rugged all-terrain tire",
        caption: "Flat tire repair—stop driving on zero pressure to save the sidewall.",
        credit: "Unsplash"
    },
    "door-glass-replacement": {
        src: "/images/tire-door-glass-replacement.webp",
        alt: "Detailed close-up of car tire tread grooves and sipes",
        caption: "Puncture repair—plug or patch only when injury is in the tread belt.",
        credit: "Pexels"
    },
    "door-glass-repair": {
        src: "/images/tire-door-glass-repair.webp",
        alt: "Close-up of car tire tread and sidewall resting on asphalt",
        caption: "Slow leak repair—valves, beads, and rim corrosion checks.",
        credit: "Pexels"
    },
    "storefront-window": {
        src: "/images/tire-storefront-window.webp",
        alt: "Roadside spare tire change on the street next to a van",
        caption: "Roadside tire repair—note shoulder width and traffic speed.",
        credit: "Pexels"
    },
    "aluminum-door": {
        src: "/images/tire-aluminum-door.webp",
        alt: "Close-up of a BFGoodrich rugged truck tire and polished wheel on gravel",
        caption: "Mobile truck and equipment tires—share tire size and axle position.",
        credit: "Pexels"
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
"[project]/lib/locations.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cityLocationEntries",
    ()=>cityLocationEntries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
;
function cityLocationEntries() {
    const byArea = new Map();
    for (const page of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CITY_PAGES"]){
        if (byArea.has(page.area)) continue;
        const pillarCity = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CITY_PAGES"].find((p)=>p.area === page.area && p.slug.startsWith(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]}-`));
        const target = pillarCity ?? page;
        byArea.set(page.area, {
            name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(target),
            href: `/${target.slug}`
        });
    }
    return [
        ...byArea.values()
    ].sort((a, b)=>a.name.localeCompare(b.name));
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
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0msyp2i98wyjb._.js.map