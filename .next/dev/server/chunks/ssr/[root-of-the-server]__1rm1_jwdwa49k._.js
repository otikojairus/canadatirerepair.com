module.exports = [
(()=>{"use strict";return[
"[project]/app/locations/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocationsPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$breadcrumb$2d$json$2d$ld$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/breadcrumb-json-ld.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/faq-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/visuals.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/images.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
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
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["trimTitle"])(`Tire Repair Cities | ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]}`),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["trimDescription"])(`Mobile tire repair in Toronto, Vancouver, Calgary, Montreal, and metros across Canada. Open your city page for local notes, then call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]}.`),
    alternates: {
        canonical: "/locations"
    }
};
const locationsIntro = "Choose your city below for local dispatch details and a direct number to call. " + "If you do not see your suburb, call anyway—most listings cover the wider metro area. " + "Have your location, tire size, and a photo of the damage handy when you ring.";
const locFaqs = [
    {
        q: "My suburb is not listed—can you still come?",
        a: "Usually yes. Metro pages cover the wider urban area. Call " + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"] + " with your street address or highway marker."
    },
    {
        q: "Why is each city one link?",
        a: "The hub lists one entry per metro. That page links to tire repair locally; national service pages cover all of Canada."
    },
    {
        q: "Do you work after hours?",
        a: "Yes—roadside and emergency tire repair runs 24/7. Shop appointments for new tires may follow supplier hours."
    }
];
const breadcrumbs = [
    {
        name: "Home",
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])()
    },
    {
        name: "Cities",
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])("locations")
    }
];
function LocationsPage() {
    const cities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cityLocationEntries"])();
    const photo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPhoto"])("hero-local");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$breadcrumb$2d$json$2d$ld$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BreadcrumbJsonLd"], {
                crumbs: breadcrumbs
            }, void 0, false, {
                fileName: "[project]/app/locations/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: locFaqs.map((faq)=>({
                            "@type": "Question",
                            name: faq.q,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.a
                            }
                        }))
                }
            }, void 0, false, {
                fileName: "[project]/app/locations/page.tsx",
                lineNumber: 52,
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
                        fileName: "[project]/app/locations/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: " / "
                    }, void 0, false, {
                        fileName: "[project]/app/locations/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-current": "page",
                        children: "Cities"
                    }, void 0, false, {
                        fileName: "[project]/app/locations/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/locations/page.tsx",
                lineNumber: 64,
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
                                src: photo.src,
                                alt: photo.alt,
                                fill: true,
                                sizes: "100vw",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/app/locations/page.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/locations/page.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow",
                            children: "Cities"
                        }, void 0, false, {
                            fileName: "[project]/app/locations/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Tire repair by Canadian metro"
                        }, void 0, false, {
                            fileName: "[project]/app/locations/page.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "lede",
                            children: locationsIntro
                        }, void 0, false, {
                            fileName: "[project]/app/locations/page.tsx",
                            lineNumber: 77,
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
                                    fileName: "[project]/app/locations/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "btn-value",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]
                                }, void 0, false, {
                                    fileName: "[project]/app/locations/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/locations/page.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/locations/page.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/locations/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "content-section",
                        children: "Choose your city"
                    }, void 0, false, {
                        fileName: "[project]/app/locations/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "city-grid",
                        children: cities.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: c.href,
                                    children: c.name
                                }, void 0, false, {
                                    fileName: "[project]/app/locations/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            }, c.href, false, {
                                fileName: "[project]/app/locations/page.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/locations/page.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaqSection"], {
                        title: "Cities FAQ",
                        items: locFaqs
                    }, void 0, false, {
                        fileName: "[project]/app/locations/page.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/locations/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/locations/page.tsx",
        lineNumber: 50,
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
        credit: "Illustration"
    },
    "hero-service": {
        src: "/images/hero-service.webp",
        alt: "Technician changing a tire at the roadside",
        caption: "On-site tire work for cars, SUVs, and light trucks.",
        credit: "Illustration"
    },
    "hero-local": {
        src: "/images/hero-local.webp",
        alt: "City skyline above busy streets",
        caption: "Metro crews know local highways, depots, and parking rules.",
        credit: "Illustration"
    },
    emergency: {
        src: "/images/emergency.webp",
        alt: "Warning triangle placed behind a vehicle on the road shoulder",
        caption: "Emergency tire repair—cone the lane and stabilize before you roll.",
        credit: "Illustration"
    },
    night: {
        src: "/images/night.webp",
        alt: "Night highway with vehicle light trails",
        caption: "24-hour tire repair for night shifts and winter storms.",
        credit: "Illustration"
    },
    storefront: {
        src: "/images/storefront.webp",
        alt: "Semi truck driving on a multi-lane highway",
        caption: "Truck tire repair—steer, drive, and trailer positions.",
        credit: "Illustration"
    },
    commercial: {
        src: "/images/commercial.webp",
        alt: "Heavy-duty truck on a freeway",
        caption: "Semi truck tires—correct ply, load range, and torque specs.",
        credit: "Illustration"
    },
    "commercial-replacement": {
        src: "/images/commercial-replacement.webp",
        alt: "Stack of commercial truck tires",
        caption: "Fleet programs—document size, axle, and DOT notes on every call.",
        credit: "Illustration"
    },
    replacement: {
        src: "/images/replacement.webp",
        alt: "Car wheel removed with brake rotor visible",
        caption: "Repair or spare swap when the casing is still safe.",
        credit: "Illustration"
    },
    "board-up": {
        src: "/images/board-up.webp",
        alt: "Road crew working beside a highway lane",
        caption: "Truck roadside assistance—staging safe work zones on active roads.",
        credit: "Illustration"
    },
    "commercial-door": {
        src: "/images/commercial-door.webp",
        alt: "Commercial delivery truck on the road",
        caption: "Mobile tire repair—we come to your lot, dock, or driveway.",
        credit: "Illustration"
    },
    "emergency-commercial-door": {
        src: "/images/emergency-commercial-door.webp",
        alt: "Close-up of a large truck tire tread",
        caption: "Emergency truck tire help when a steer or drive goes down.",
        credit: "Illustration"
    },
    door: {
        src: "/images/door.webp",
        alt: "Close-up of worn and damaged tire tread",
        caption: "Flat tire repair—stop driving on zero pressure to save the sidewall.",
        credit: "Illustration"
    },
    "door-glass-replacement": {
        src: "/images/door-glass-replacement.webp",
        alt: "Mechanic inspecting tire tread depth",
        caption: "Puncture repair—plug or patch only when injury is in the tread belt.",
        credit: "Illustration"
    },
    "door-glass-repair": {
        src: "/images/door-glass-repair.webp",
        alt: "Checking tire pressure at the valve stem",
        caption: "Slow leak repair—valves, beads, and rim corrosion checks.",
        credit: "Illustration"
    },
    "storefront-window": {
        src: "/images/storefront-window.webp",
        alt: "Vehicle traveling on a rural highway",
        caption: "Roadside tire repair—note shoulder width and traffic speed.",
        credit: "Illustration"
    },
    "aluminum-door": {
        src: "/images/aluminum-door.webp",
        alt: "Off-road tire covered in mud",
        caption: "Mobile truck and equipment tires—share tire size and axle position.",
        credit: "Illustration"
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
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/locations/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/locations/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1rm1_jwdwa49k._.js.map