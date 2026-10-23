module.exports = [
(()=>{"use strict";return[
"[project]/app/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SeoPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/page-hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/visuals.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/seo-content.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/page-copy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/images.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PAGES"].map((page)=>({
            slug: page.slug
        }));
}
async function generateMetadata({ params }) {
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPage"])((await params).slug);
    if (!page) return {};
    const { title, description } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pageSeoMeta"])(page);
    return {
        title,
        description,
        alternates: {
            canonical: `/${page.slug}`
        },
        openGraph: {
            title,
            description,
            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(page.slug),
            type: "website"
        }
    };
}
async function SeoPage({ params }) {
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPage"])((await params).slug);
    if (!page) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const faqs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faqsFor"])(page);
    const sections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sectionsFor"])(page);
    const links = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internalLinksFor"])(page);
    const isPillar = page.slug === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"];
    const isLocal = page.kind === "city";
    const isNational = page.kind === "national";
    const fullIntro = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["introFor"])(page);
    const crumbs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["breadcrumbLabels"])(page);
    const imageKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imageForServiceSlug"])(page.slug);
    const inline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPhoto"])(imageKey);
    const breadcrumbSchema = [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])()
        },
        {
            "@type": "ListItem",
            position: 2,
            name: crumbs.hub,
            item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(crumbs.hubPath.replace(/^\//, ""))
        }
    ];
    if (isLocal) {
        breadcrumbSchema.push({
            "@type": "ListItem",
            position: 3,
            name: crumbs.current,
            item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(page.slug)
        });
    } else {
        breadcrumbSchema.push({
            "@type": "ListItem",
            position: 3,
            name: crumbs.current,
            item: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(page.slug)
        });
    }
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["h1For"])(page),
            serviceType: page.keyword || "tire repair",
            provider: {
                "@type": "Organization",
                name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"],
                telephone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_E164"],
                url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])()
            },
            areaServed: page.area,
            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(page.slug),
            description: fullIntro
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbSchema
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq)=>({
                    "@type": "Question",
                    name: faq.q,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.a
                    }
                }))
        }
    ];
    if (isLocal) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"],
            telephone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_E164"],
            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["absoluteUrl"])(page.slug),
            areaServed: {
                "@type": "City",
                name: place
            },
            description: fullIntro
        });
    }
    const kicker = isLocal ? place : page.area.replace(" (National)", "");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visuals$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: schemas
            }, void 0, false, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 126,
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
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: " / "
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: crumbs.hubPath,
                        children: crumbs.hub
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: " / "
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-current": "page",
                        children: crumbs.current
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageHero"], {
                kicker: kicker,
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["h1For"])(page),
                lead: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["heroLeadFor"])(page)
                }, void 0, false, {
                    fileName: "[project]/app/[slug]/page.tsx",
                    lineNumber: 138,
                    columnNumber: 15
                }, this),
                ctaLabel: "Call now",
                imageKey: isLocal ? "hero-local" : imageKey,
                secondaryHref: isPillar ? "/services" : isLocal ? "/locations" : `/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]}`,
                secondaryLabel: isPillar ? "All services" : isLocal ? "More cities" : "Emergency line"
            }, void 0, false, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap article-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "article-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "intro-line",
                                children: fullIntro
                            }, void 0, false, {
                                fileName: "[project]/app/[slug]/page.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-photo",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                            src: inline.src,
                                            alt: inline.alt,
                                            fill: true,
                                            sizes: "(max-width: 900px) 100vw, 720px",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[slug]/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                        className: "figure-caption",
                                        children: [
                                            inline.caption,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "figure-credit",
                                                children: [
                                                    " (",
                                                    inline.credit,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[slug]/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[slug]/page.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "content-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: section.h2
                                        }, void 0, false, {
                                            fileName: "[project]/app/[slug]/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this),
                                        section.paragraphs.map((para)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: para
                                            }, para.slice(0, 48), false, {
                                                fileName: "[project]/app/[slug]/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, section.h2, true, {
                                    fileName: "[project]/app/[slug]/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)),
                            links.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "content-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: isNational ? `${page.keyword} across Canada` : isLocal ? `Related services near ${place}` : "Related services"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "link-row",
                                        children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    children: link.anchor
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[slug]/page.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, this)
                                            }, link.href, false, {
                                                fileName: "[project]/app/[slug]/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[slug]/page.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "faq-block",
                                "aria-labelledby": "faq-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "faq-heading",
                                        className: "section-title",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "section-title__mark",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[slug]/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faqHeadingFor"])(page)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "faq-stack",
                                        children: faqs.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "faq-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "faq-item__num",
                                                        "aria-hidden": "true",
                                                        children: String(i + 1).padStart(2, "0")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[slug]/page.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: faq.q
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/[slug]/page.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: faq.a
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/[slug]/page.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/[slug]/page.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, faq.q, true, {
                                                fileName: "[project]/app/[slug]/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[slug]/page.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "side-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Call dispatch"
                            }, void 0, false, {
                                fileName: "[project]/app/[slug]/page.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Share your location, tire size, photos, and whether you are on a highway shoulder."
                            }, void 0, false, {
                                fileName: "[project]/app/[slug]/page.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "btn btn-beacon btn-block",
                                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_E164"]}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "btn-label",
                                        children: "Call"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "btn-value",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/[slug]/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[slug]/page.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[slug]/page.tsx",
        lineNumber: 125,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function PageHero({ kicker, title, lead, ctaLabel = "Call now", secondaryHref, secondaryLabel, variant = "page", imageKey = "hero-service" }) {
    const photo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPhoto"])(variant === "home" ? "hero-home" : imageKey);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `beacon-hero beacon-hero--${variant}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "beacon-hero__glow",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/page-hero.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "beacon-hero__chevrons",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/page-hero.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "beacon-hero__inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "beacon-hero__copy",
                        children: [
                            kicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "beacon-kicker",
                                children: kicker
                            }, void 0, false, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 37,
                                columnNumber: 22
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "beacon-lead",
                                children: lead
                            }, void 0, false, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "beacon-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn btn-beacon",
                                        href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_E164"]}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "btn-label",
                                                children: ctaLabel
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 42,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "btn-value",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 43,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    secondaryHref && secondaryLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        className: "btn btn-outline-light",
                                        href: secondaryHref,
                                        children: secondaryLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "beacon-stats",
                                "aria-label": "Service highlights",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "24/7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this),
                                            " dispatch"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Mobile"
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 51,
                                                columnNumber: 17
                                            }, this),
                                            " to you"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Canada"
                                            }, void 0, false, {
                                                fileName: "[project]/components/page-hero.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this),
                                            " wide"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/page-hero.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "beacon-hero__visual",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "beacon-frame",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                        src: photo.src,
                                        alt: photo.alt,
                                        fill: true,
                                        priority: true,
                                        sizes: "(max-width: 900px) 100vw, 50vw",
                                        className: "beacon-img"
                                    }, void 0, false, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "beacon-frame__tag",
                                        "aria-hidden": "true",
                                        children: "Live dispatch"
                                    }, void 0, false, {
                                        fileName: "[project]/components/page-hero.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "beacon-caption",
                                children: photo.caption
                            }, void 0, false, {
                                fileName: "[project]/components/page-hero.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/page-hero.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/page-hero.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/page-hero.tsx",
        lineNumber: 32,
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
        alt: "Service truck on a Canadian highway",
        caption: "Mobile crews reach highways, yards, and fleet lots.",
        credit: "Unsplash"
    },
    "hero-service": {
        src: "/images/hero-service.webp",
        alt: "Technician working at a vehicle wheel",
        caption: "Field techs for punctures, flats, and fleet rotations.",
        credit: "Unsplash"
    },
    "hero-local": {
        src: "/images/hero-local.webp",
        alt: "Downtown skyline above city streets",
        caption: "Local dispatch knows truck routes, weigh scales, and depot gates.",
        credit: "Unsplash"
    },
    emergency: {
        src: "/images/emergency.webp",
        alt: "Roadside emergency tools ready for a tire call",
        caption: "Emergency — stabilize the vehicle and mark the lane before repair.",
        credit: "Unsplash"
    },
    night: {
        src: "/images/night.webp",
        alt: "Highway at night with vehicle lights",
        caption: "24/7 — line haul, last-mile, and after-hours fleet breakdowns.",
        credit: "Unsplash"
    },
    storefront: {
        src: "/images/storefront.webp",
        alt: "Commercial truck parked at a loading dock",
        caption: "Truck tire repair — steer, drive, and trailer positions.",
        credit: "Unsplash"
    },
    commercial: {
        src: "/images/commercial.webp",
        alt: "Semi truck on a freeway",
        caption: "Semi and heavy-duty tires need correct ply and load rating.",
        credit: "Unsplash"
    },
    "commercial-replacement": {
        src: "/images/commercial-replacement.webp",
        alt: "Fleet of commercial vehicles in a yard",
        caption: "Fleet programs — document size, position, and DOT notes.",
        credit: "Unsplash"
    },
    replacement: {
        src: "/images/replacement.webp",
        alt: "Wheel and tire assembly on pavement",
        caption: "When repair is not safe, we swap to a spare or coordinate replacement.",
        credit: "Unsplash"
    },
    "board-up": {
        src: "/images/board-up.webp",
        alt: "Technician at a vehicle on the shoulder",
        caption: "Roadside assistance — cones, flashers, and safe work zones.",
        credit: "Unsplash"
    },
    "commercial-door": {
        src: "/images/commercial-door.webp",
        alt: "Mobile service van at a truck stop",
        caption: "Mobile truck tire repair — air systems and torque specs matter.",
        credit: "Unsplash"
    },
    "emergency-commercial-door": {
        src: "/images/emergency-commercial-door.webp",
        alt: "Urban street with commercial traffic",
        caption: "Emergency tire repair — get the rig rolling safely.",
        credit: "Unsplash"
    },
    door: {
        src: "/images/door.webp",
        alt: "Close-up of a truck tire tread",
        caption: "Flat tire repair — find the puncture before plugging or patching.",
        credit: "Unsplash"
    },
    "door-glass-replacement": {
        src: "/images/door-glass-replacement.webp",
        alt: "Mechanic inspecting a tire sidewall",
        caption: "Puncture repair — sidewall damage often means replace, not plug.",
        credit: "Unsplash"
    },
    "door-glass-repair": {
        src: "/images/door-glass-repair.webp",
        alt: "Tire pressure gauge on a valve stem",
        caption: "Slow leak repair — bead, valve stem, and rim checks.",
        credit: "Unsplash"
    },
    "storefront-window": {
        src: "/images/storefront-window.webp",
        alt: "Highway rest area with trucks",
        caption: "Roadside tire repair — note lane width and shoulder space.",
        credit: "Unsplash"
    },
    "aluminum-door": {
        src: "/images/aluminum-door.webp",
        alt: "Heavy equipment tire in a yard",
        caption: "Mobile service — bring wheel size and axle position when you call.",
        credit: "Unsplash"
    }
};
/** One distinct image per national service — no two services share a file. */ const NATIONAL_SLUG_IMAGE = {
    "truck-tire-repair": "storefront",
    "semi-truck-tire-repair": "commercial",
    "mobile-truck-tire-repair": "commercial-door",
    "truck-roadside-assistance": "board-up",
    "emergency-tire-repair": "emergency",
    "24-hour-tire-repair": "night",
    "roadside-tire-repair": "storefront-window",
    "mobile-tire-repair": "hero-service",
    "tire-repair": "replacement",
    "flat-tire-repair": "door",
    "tire-puncture-repair": "door-glass-replacement",
    "tire-leak-repair": "door-glass-repair"
};
function imageForServiceSlug(slug) {
    const national = NATIONAL_SLUG_IMAGE[slug];
    if (national) return national;
    if (slug.startsWith("tire-repair-")) return "replacement";
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
"[project]/lib/location-facts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "factsForPage",
    ()=>factsForPage
]);
const CITY_FACTS = {
    Calgary: {
        population: "1.3M in the metro",
        landmark: "Stephen Avenue walk",
        neighbourhood: "Beltline shops and industrial bays",
        climate: "Chinook swings can stress old storefront seals after hail."
    },
    Winnipeg: {
        population: "750k metro",
        landmark: "The Exchange District",
        neighbourhood: "Portage Avenue retail and St. Boniface strips",
        climate: "Deep freezes make tempered glass failures more common in January."
    },
    Edmonton: {
        population: "1M metro",
        landmark: "Whyte Avenue",
        neighbourhood: "Ice District towers and suburban power centres",
        climate: "Dry cold plus gravel spray chips exterior glazing on plazas."
    },
    Ottawa: {
        population: "1M metro",
        landmark: "ByWard Market",
        neighbourhood: "Sparks Street corridors and Kanata business parks",
        climate: "Freeze-thaw cycles loosen door closers on aluminum entries."
    },
    Montreal: {
        population: "4M metro",
        landmark: "Saint-Laurent Boulevard",
        neighbourhood: "Plateau boutiques and Griffintown lofts",
        climate: "Heavy snow loads on awnings sometimes snap adjacent glass."
    },
    Laval: {
        population: "440k city",
        landmark: "Carrefour Laval retail ring",
        neighbourhood: "Chomedey plazas and industrial flex space",
        climate: "Lake-effect gusts hit corner units on exposed boulevards."
    },
    Hamilton: {
        population: "770k metro",
        landmark: "James Street North",
        neighbourhood: "Ancaster power centres and waterfront conversions",
        climate: "Escarpment winds drive debris into low-rise storefronts."
    },
    "St Catharines": {
        population: "140k city",
        landmark: "Port Dalhousie waterfront",
        neighbourhood: "Glendale retail and QEW corridor plazas",
        climate: "Lake Ontario squalls stress older single-pane units."
    },
    Markham: {
        population: "340k city",
        landmark: "Pacific Mall district",
        neighbourhood: "Downtown Markham towers and Highway 7 retail",
        climate: "Busy parking lots mean more vehicle contact with curbside glass."
    },
    "North York": {
        population: "Toronto district",
        landmark: "Yonge and Sheppard cluster",
        neighbourhood: "Finch corridor shops and office podiums",
        climate: "High-rise wind tunnels crack spandrel panels near transit hubs."
    },
    "London, Ontario": {
        population: "430k metro",
        landmark: "Richmond Row",
        neighbourhood: "Masonville retail and industrial parks",
        climate: "Spring thunderstorms bring flying branches into corner windows."
    },
    "Surrey, BC": {
        population: "620k city",
        landmark: "City Centre SkyTrain hub",
        neighbourhood: "Whalley storefronts and South Surrey strip malls",
        climate: "Coastal moisture swells door frames if sealant is aged."
    },
    Mississauga: {
        population: "770k city",
        landmark: "Square One district",
        neighbourhood: "Airport corporate parks and Erin Mills plazas",
        climate: "Gusts off the lake hit east-facing curtain walls."
    },
    Toronto: {
        population: "6.7M metro",
        landmark: "Queen Street West",
        neighbourhood: "Financial core towers and neighbourhood main streets",
        climate: "Dense sidewalks mean vandalism and impact calls spike overnight."
    },
    Halifax: {
        population: "480k metro",
        landmark: "Barrington Street",
        neighbourhood: "Dartmouth crossings and Bayers Lake retail",
        climate: "Nor'easters hurl salt and grit into harbor-facing glass."
    },
    Regina: {
        population: "260k metro",
        landmark: "Victoria Avenue",
        neighbourhood: "East end plazas and warehouse showrooms",
        climate: "Flat prairie wind drives gravel into low commercial glazing."
    },
    Vancouver: {
        population: "2.6M metro",
        landmark: "Gastown heritage fronts",
        neighbourhood: "Broadway medical rows and Marine Drive shops",
        climate: "Seismic codes matter when replacing large tempered panels."
    },
    Vaughan: {
        population: "330k city",
        landmark: "Vaughan Mills corridor",
        neighbourhood: "Maple main street and industrial flex near the 400",
        climate: "Truck traffic vibrates older aluminum storefront systems."
    },
    Etobicoke: {
        population: "Toronto district",
        landmark: "The Kingsway village",
        neighbourhood: "Islington Village and Queensway plazas",
        climate: "Lake breezes corrode exterior door hardware faster near the water."
    },
    Barrie: {
        population: "150k city",
        landmark: "Downtown Dunlop Street",
        neighbourhood: "Big Box strips on Mapleview and industrial bays",
        climate: "Snowplow spray chips glazing on plaza entries each winter."
    },
    Woodbridge: {
        population: "Vaughan community",
        landmark: "Woodbridge Avenue shops",
        neighbourhood: "Highway 7 retail and auto row glass fronts",
        climate: "Loading bays see forklift strikes on door glass weekly."
    },
    Thornhill: {
        population: "Markham/Vaughan border",
        landmark: "Yonge Street strip",
        neighbourhood: "Promenade-adjacent plazas and medical offices",
        climate: "Busy arterials mean more after-hours board-up requests."
    },
    Abbotsford: {
        population: "160k city",
        landmark: "Historic downtown Montrose",
        neighbourhood: "Sumas Way retail and airport road warehouses",
        climate: "Valley fog plus frost cycles fog insulated glass units."
    }
};
const AREA_ALIASES = {
    "London Ontario": "London, Ontario",
    "Surrey BC": "Surrey, BC"
};
function factsForPage(area, kind) {
    if (kind !== "city") return undefined;
    const key = AREA_ALIASES[area] ?? area;
    return CITY_FACTS[key];
}
}),
"[project]/lib/page-copy.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "breadcrumbLabels",
    ()=>breadcrumbLabels,
    "faqHeadingFor",
    ()=>faqHeadingFor,
    "faqsFor",
    ()=>faqsFor,
    "h1For",
    ()=>h1For,
    "heroLeadFor",
    ()=>heroLeadFor,
    "introFor",
    ()=>introFor,
    "sectionsFor",
    ()=>sectionsFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$location$2d$facts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/location-facts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$service$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/service-labels.ts [app-rsc] (ecmascript)");
;
;
;
;
function isUrgent(page) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceBaseSlug"])(page.slug);
    return base.includes("repair") || base.includes("roadside") || base.includes("24-hour") || base === "tire-repair";
}
function wordTarget(page) {
    if (page.kind === "national") return 800;
    if (isUrgent(page)) return 500;
    return 400;
}
function keywordPhrase(page) {
    return page.keyword.trim() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$service$2d$labels$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceLabelFromSlug"])(page.slug).toLowerCase();
}
function h1For(page) {
    const kw = keywordPhrase(page);
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    if (page.kind === "city") return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["capitalizeSentence"])(kw)} in ${place}`;
    if (page.kind === "national") return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["capitalizeSentence"])(kw)} in Canada`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["capitalizeSentence"])(kw);
}
const serviceHooks = {
    "truck-tire-repair": [
        "Steer and drive tires on line-haul trucks fail on schedule miles—not always on your timetable.",
        "We note ply rating, position, and whether the tire is repairable before you roll again."
    ],
    "semi-truck-tire-repair": [
        "Semi breakdowns block lanes and yards—photos of the wheel position speed dispatch.",
        "Heavy-duty casings need the right plug or patch method; sidewall damage often means replace."
    ],
    "mobile-truck-tire-repair": [
        "Mobile truck units carry air, jacks, and torque gear sized for fleet axles.",
        "Tell us gate codes, scale house hours, and whether the rig is loaded."
    ],
    "truck-roadside-assistance": [
        "Roadside is about coning the lane, stabilizing the trailer, and getting you to a safe pull-off.",
        "We coordinate tire work with jump-starts and air when multiple issues show up at once."
    ],
    "emergency-tire-repair": [
        "A flat on a busy shoulder is a safety incident until the wheel is changed or repaired.",
        "Emergency dispatch prioritizes stranded drivers, fleet managers, and rideshare operators."
    ],
    "24-hour-tire-repair": [
        "Night shifts and winter storms push more blowouts—after-hours crews run nationwide.",
        "Have your size, position, and spare status ready when you dial."
    ],
    "roadside-tire-repair": [
        "Shoulder width, gravel, and traffic speed all affect how we stage the truck.",
        "We repair or swap to spare so you can reach a shop for permanent work if needed."
    ],
    "mobile-tire-repair": [
        "Mobile tire service comes to driveways, lots, and job sites—no tow required for many flats.",
        "Passenger, light truck, and SUV sizes are common; note if you have run-flats."
    ],
    "tire-repair": [
        "Not every puncture is safe to plug—location in the tread and prior repairs matter.",
        "We inspect beads, valves, and rims when a tire keeps losing pressure."
    ],
    "flat-tire-repair": [
        "Driving on a flat ruins the sidewall—stop as soon as it is safe and call.",
        "We can install your spare or repair in place when the casing is sound."
    ],
    "tire-puncture-repair": [
        "Nail in the tread? Size and angle determine plug versus patch.",
        "We follow industry guidance on repairable injury zones before sealing a puncture."
    ],
    "tire-leak-repair": [
        "Slow leaks often trace to valves, beads, or rim corrosion—not the tread.",
        "We soap-test and torque wheels after bead work so pressure holds overnight."
    ]
};
function hookFor(page) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceBaseSlug"])(page.slug);
    const hooks = serviceHooks[base] ?? [
        "Commercial tire work needs straight talk on timing, security, and code—not a vague callback window.",
        "We explain what we can do tonight versus what waits on a measured order."
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "hook", hooks);
}
function localDemographicsSentence(page) {
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$location$2d$facts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["factsForPage"])(page.area, "city");
    if (!f) return `In ${place}, loading zones and yard parking rules shape how fast we can stage tire and axle hardware.`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "demo", [
        `${place} (${f.population}) mixes high-footfall strips such as ${f.neighbourhood} with landmark retail near ${f.landmark}.`,
        `Dispatch for ${place}—about ${f.population}—often stages trucks along ${f.neighbourhood} before rolling to sites by ${f.landmark}.`,
        `Property managers in ${place} (${f.population}) know ${f.landmark}; our crews plan parking around ${f.neighbourhood} yards.`
    ]);
}
function localClimateSentence(page) {
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$location$2d$facts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["factsForPage"])(page.area, "city");
    if (!f) return `Seasonal weather in ${place} can stress older fleet seals—mention recent storms when you call.`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "climate", [
        `Local climate note for ${place}: ${f.climate}`,
        `Around ${f.landmark}, ${f.climate.toLowerCase()}`,
        `${place} weather patterns matter—${f.climate}`
    ]);
}
const closings = [
    `Call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]} with the address, photos of the break, and whether the wheel well is exposed to weather.`,
    `Reach us at ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]}—tell us if you need roadside tonight and permanent tire later.`,
    `Dial ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]} for a clear timeline on security, measurement, and install.`
];
function introFor(page) {
    const kw = keywordPhrase(page);
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const parts = [];
    parts.push(hookFor(page));
    if (page.kind === "national") {
        parts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(`${page.slug}:${page.id}`, "nat1", [
            `This page is for anyone searching ${kw} across Canada—drivers, fleets, and owner-operators, and fleet managers with a broken wheel well.`,
            `We coordinate ${kw} from coast to coast, pairing emergency roadside with proper tire orders.`,
            `National ${kw} routing covers every province—share your postal code so we assign the nearest metro crew.`
        ]));
        parts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(`${page.slug}:${page.id}`, "nat2", [
            `Canadian winters, vandalism, and vehicle strikes all show up on our dispatch board—tell us which scenario you are in.`,
            `Ceiling height, axle hardware, and whether the lite is correct size and load rating help us quote accurately.`,
            `Franchise and multi-site managers use this line for ${kw}—note brand standards if fleet numbering or DOT stickers matter.`
        ]));
        if (page.volume) {
            parts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "vol", [
                `Search demand for ${kw} stays high year-round—volume in the hundreds of monthly lookups reflects how often fleets fail without warning.`,
                `When ${kw} spikes after holidays, early calls secure roadside slots before supplier queues grow.`
            ]));
        }
    } else if (page.kind === "city") {
        parts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "city-book", [
            `You are booking ${kw} in ${place}—crews know local parking bylaws and after-hours access for yards.`,
            `This ${kw} visit in ${place} often means securing a corner unit before morning foot traffic.`
        ]));
        parts.push(localDemographicsSentence(page));
        parts.push(localClimateSentence(page));
        parts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(`${page.slug}:${page.id}`, "city-extra", [
            `If the break is on a axle with lug torque spec, mention it—we bring torque sticks when needed.`,
            `Photos of the tire size stamping and any remaining debris help us order the right thickness.`,
            `Night calls in ${place} need a site contact with keys—security desks at ${place} towers often require COI paperwork.`
        ]));
    }
    if (page.secondary.length) {
        parts.push(`Related searches such as ${page.secondary[0]} are handled on the same line.`);
    }
    parts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "close", closings));
    let text = parts.join(" ");
    const fillers = [
        ` We document measurements, roadside method, and install date in plain language.`,
        ` If you are unsure whether you need repair or full replacement, describe the crack pattern when you call.`,
        ` Insurance claims move faster when you have timestamps and photos—we can note them on the work order.`
    ];
    let i = 0;
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wordCount"])(text) < 80 && i < fillers.length){
        text += fillers[i++] ?? "";
    }
    return text;
}
function extraParagraph(page, salt) {
    const kw = keywordPhrase(page);
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, salt, [
        `Before we arrive for ${kw}, clear flat tire only if it is safe—leave sharp shards for the crew when possible.`,
        `Photos of the full wheel well from inside and outside help when ${place} addresses share a yard sign.`,
        `If you are leasing in ${place || "Canada"}, notify your landlord—many require approved vendors for fleet work.`,
        `Keep customers away from hanging tire—rated tirels can collapse without warning.`,
        `Winter storms in Canada push more roadside calls; mention if heat is off in the space overnight.`
    ]);
}
function padSections(page, sections, intro) {
    const target = wordTarget(page);
    const out = sections.map((s)=>({
            ...s,
            paragraphs: [
                ...s.paragraphs
            ]
        }));
    let total = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wordCount"])(intro) + out.reduce((n, s)=>n + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wordCount"])(s.paragraphs.join(" ")), 0);
    let salt = 0;
    while(total < target && salt < 60){
        const idx = salt % out.length;
        out[idx].paragraphs.push(extraParagraph(page, `pad-${salt}`));
        total = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wordCount"])(intro) + out.reduce((n, s)=>n + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wordCount"])(s.paragraphs.join(" ")), 0);
        salt++;
    }
    return out;
}
function sectionsFor(page) {
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const kw = keywordPhrase(page);
    const intro = introFor(page);
    const sections = [];
    if (page.kind === "city") {
        sections.push({
            h2: `Why ${place} fleets need a local plan for ${kw}`,
            paragraphs: [
                localDemographicsSentence(page),
                localClimateSentence(page),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(`${page.slug}:${page.id}`, "local2", [
                    `Plaza landlords often require COI and after-hours rules—share contact info for security or property management.`,
                    `Corner units see more wind-driven debris; mention exposure when you book ${kw}.`,
                    `Alley deliveries in ${place} can block shoulder space—tell us if the wheel well faces a laneway.`
                ])
            ]
        });
    } else {
        sections.push({
            h2: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["capitalizeSentence"])(kw)} routes we run weekly`,
            paragraphs: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "routes1", [
                    `Dispatch groups ${kw} by metro so measurement and install crews are not crossing provinces unnecessarily.`,
                    `We batch ${kw} roadsides at night when retail strips are quiet and parking is available.`
                ]),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "routes2", [
                    `Holiday weekends spike break-in calls for ${kw}—book security tire or polycarbonate if you are closed several days.`,
                    `Construction sites nearby sometimes vibrate older fleet seals—mention recent work next axle.`
                ])
            ]
        });
        sections.push({
            h2: `How ${kw} works in Canada`,
            paragraphs: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "how1", [
                    `Safety tire markings, wind load, and local bylaws matter—we confirm before ordering custom rated sheets.`,
                    `Property managers often need photos for insurance—we provide them after roadside and after install.`
                ]),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "how2", [
                    `We do not remove the last stable lite without a plan to secure the wheel well the same day.`,
                    `If replacement makes more sense than a risky repair, we say so before you pay for a short-term fix.`
                ])
            ]
        });
    }
    if (isUrgent(page)) {
        sections.push({
            h2: "When to call immediately",
            paragraphs: [
                `A shredded tire, exposed wheel wells to weather, or a wheel about to come loose are urgent—say so on ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]}.`,
                `If anyone is injured, seek medical help first, then cordon off the area until the wheel well is secured.`
            ]
        });
    }
    sections.push({
        h2: "What to tell us on the phone",
        paragraphs: [
            `Street address, unit or suite, ${kw} needs, and whether you need roadside before you drive on a damaged tire.`,
            `Access notes for ${place || "your yard"}—loading docks, elevator sizes, and security codes all affect routing.`
        ]
    });
    sections.push({
        h2: "On site",
        paragraphs: [
            `We remove loose shards safely, board or glaze temporarily, and measure for ${kw} where permanent tire is required.`,
            `You get a verbal summary suitable for insurers, landlords, or fleet compliance teams.`
        ]
    });
    sections.push({
        h2: "After the visit",
        paragraphs: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "after1", [
                `We confirm lead time on rated orders and whether heat-soak or all-season tire is required.`,
                `If you need a different service in ${place || "Canada"}, ask on the call—we can often combine axle and window work.`
            ]),
            extraParagraph(page, "after2")
        ]
    });
    return padSections(page, sections, intro);
}
function faqsFor(page) {
    const kw = keywordPhrase(page);
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const areaLabel = place || "Canada";
    const base = [
        {
            q: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fq1", [
                `How much does ${kw} cost in ${areaLabel}?`,
                `What affects the price of ${kw} in ${areaLabel}?`,
                `Is ${kw} in ${areaLabel} priced per tire or per wheel well?`
            ]),
            a: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fa1", [
                `Price depends on tire type, size, access, and whether roadside is needed tonight. Call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]} with photos for a range before we book.`,
                `We do not publish one national price because axle hardware and rated thickness vary. ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]} outlines typical costs for ${areaLabel}.`
            ])
        },
        {
            q: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fq2", [
                `How soon can you do ${kw} in ${areaLabel}?`,
                `What is the lead time for ${kw} near ${areaLabel}?`,
                `Can you prioritize ${kw} if the wheel well is exposed in ${areaLabel}?`
            ]),
            a: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fa2", [
                `Board-up can often happen the same night; custom tire depends on supplier lead times. Share urgency when you dial ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]}.`,
                `Exposed wheel wells and security risks move you up the queue—say so clearly when you call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]}.`
            ])
        },
        {
            q: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fq3", [
                `Do I need to be on site for ${kw} in ${areaLabel}?`,
                `Can you work with my property manager for ${kw} in ${areaLabel}?`,
                `What should I prepare before ${kw} in ${areaLabel}?`
            ]),
            a: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fa3", [
                `Someone with keys and authority to approve roadside saves time. If you are remote, send a site contact—call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]} either way.`,
                `Clear a path to the wheel well and note ceiling height limits for long tirels.`
            ])
        },
        {
            q: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fq4", [
                `Is ${kw} in ${areaLabel} the same line as the rest of Canada?`,
                `Does this page change the phone number for ${kw}?`,
                `Can I book ${kw} for a fleet location in ${areaLabel}?`
            ]),
            a: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "fa4", [
                `Yes—${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]} is the same nationwide. This page adds local context for ${areaLabel}.`,
                `Franchise and multi-site managers can book; tell us brand standards if tire tint or logo placement matters.`
            ])
        }
    ];
    if (page.kind === "city") {
        const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$location$2d$facts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["factsForPage"])(page.area, "city");
        if (f) {
            base.push({
                q: `Does weather around ${f.landmark} affect tires on Canadian roads?`,
                a: `Yes—${f.climate} Mention recent storms or vandalism when you call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"]}.`
            });
        }
    }
    return base.slice(0, Math.max(3, 4 + page.id % 2));
}
function faqHeadingFor(page) {
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    if (page.kind === "city") return `FAQs about ${keywordPhrase(page)} in ${place}`;
    return `FAQs about ${keywordPhrase(page)} in Canada`;
}
function heroLeadFor(page) {
    const kw = keywordPhrase(page);
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    if (page.kind === "city") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "hero-lead", [
            `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["capitalizeSentence"])(kw)} in ${place}—roadside tonight, proper tire when the tirel is ready.`,
            `Broken wheel well in ${place}? We secure the site first, then order correct size and load rating ${kw} tire.`,
            `${place} crews for ${kw}: photos, access notes, and lug torque spec details speed dispatch.`
        ]);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pick"])(page.slug, "hero-lead", [
        `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["capitalizeSentence"])(kw)} across Canada—retail, restaurants, and offices on one emergency line.`,
        `National ${kw}: security first, then field measurements for code-compliant replacement tire.`,
        `From coast to coast, ${kw} dispatch pairs spare wheel or plug kit with permanent lites.`
    ]);
}
function breadcrumbLabels(page) {
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(page);
    const kw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["capitalizeSentence"])(keywordPhrase(page));
    if (page.kind === "national") {
        return {
            hub: "Services",
            hubPath: "/services",
            parent: null,
            current: `${kw} Canada`
        };
    }
    return {
        hub: "Cities",
        hubPath: "/locations",
        parent: place,
        current: `${kw} ${place}`
    };
}
}),
"[project]/lib/seo-anchors.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seoAnchorCityToService",
    ()=>seoAnchorCityToService,
    "seoAnchorFor",
    ()=>seoAnchorFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
;
function seoAnchorFor(target) {
    const keyword = target.keyword.trim() || target.title.split("|")[0].trim();
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(target);
    if (target.kind === "city") {
        return `${keyword} ${place}`;
    }
    if (target.kind === "national") {
        return `${keyword} Canada`;
    }
    return keyword;
}
function seoAnchorCityToService(cityPage, service) {
    const place = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locationName"])(cityPage);
    const keyword = service.keyword.trim() || service.slug.replace(/-/g, " ");
    return `${keyword} ${place}`;
}
}),
"[project]/lib/seo-content.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allSlugsLinkedFromPillar",
    ()=>allSlugsLinkedFromPillar,
    "internalLinksFor",
    ()=>internalLinksFor,
    "isCityPageSlug",
    ()=>isCityPageSlug,
    "pageSeoMeta",
    ()=>pageSeoMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$anchors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seo-anchors.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/page-copy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/seo-meta.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pages.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const CITY_SERVICE_SLUGS = [
    "mobile-tire-repair",
    "flat-tire-repair",
    "emergency-tire-repair",
    "roadside-tire-repair",
    "24-hour-tire-repair",
    "truck-tire-repair"
];
const citySlugSet = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CITY_PAGES"].map((p)=>p.slug));
function pickCityPages(page, min, max) {
    const span = max - min + 1;
    const count = min + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashSlug"])(page.slug) % span;
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashSlug"])(`${page.slug}:cities`) % __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CITY_PAGES"].length;
    const out = [];
    for(let i = 0; i < count; i++){
        out.push(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CITY_PAGES"][(start + i) % __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CITY_PAGES"].length]);
    }
    return out;
}
function isEmergencyNational(page) {
    if (page.kind !== "national") return false;
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceBaseSlug"])(page.slug);
    return base === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"] || base.includes("emergency") || base.includes("24-hour") || base.includes("roadside") || base.includes("mobile");
}
function internalLinksFor(page) {
    const links = [];
    const seen = new Set();
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceBaseSlug"])(page.slug);
    const pillar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPage"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]);
    const emergency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPage"])("emergency-tire-repair");
    const twentyFour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPage"])("24-hour-tire-repair");
    const add = (target, anchor)=>{
        if (!target) return;
        const href = `/${target.slug}`;
        if (href === `/${page.slug}` || seen.has(href)) return;
        seen.add(href);
        links.push({
            href,
            anchor: anchor ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$anchors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoAnchorFor"])(target)
        });
    };
    if (page.kind === "national") {
        if (page.slug !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]) {
            add(pillar, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$anchors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoAnchorFor"])(pillar));
        }
        if (base === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PILLAR_SLUG"]) {
            for (const city of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CITY_PAGES"])add(city);
        } else if (isEmergencyNational(page)) {
            for (const city of pickCityPages(page, 2, 5))add(city);
        } else {
            for (const city of pickCityPages(page, 2, 4))add(city);
        }
        if (emergency && page.slug !== "emergency-tire-repair") add(emergency, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$anchors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoAnchorFor"])(emergency));
        if (twentyFour && page.slug !== "24-hour-tire-repair") add(twentyFour, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$anchors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoAnchorFor"])(twentyFour));
        const siblings = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NATIONAL_PAGES"].filter((p)=>p.slug !== page.slug && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serviceBaseSlug"])(p.slug) !== base);
        const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashSlug"])(page.slug) % Math.max(1, siblings.length);
        for (const s of siblings.slice(start, start + 3))add(s);
        return links;
    }
    if (page.kind === "city") {
        add(pillar, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$anchors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoAnchorFor"])(pillar));
        const serviceStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashSlug"])(page.slug) % CITY_SERVICE_SLUGS.length;
        for(let i = 0; i < 4; i++){
            const slug = CITY_SERVICE_SLUGS[(serviceStart + i) % CITY_SERVICE_SLUGS.length];
            const national = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPage"])(slug);
            if (national) add(national, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$anchors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoAnchorCityToService"])(page, national));
        }
        add(emergency, emergency ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$anchors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoAnchorCityToService"])(page, emergency) : undefined);
        const others = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CITY_PAGES"].filter((c)=>c.slug !== page.slug);
        const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashSlug"])(page.slug) % Math.max(1, others.length - 2);
        for (const c of others.slice(start, start + 3))add(c);
        return links;
    }
    add(pillar);
    return links;
}
function pageSeoMeta(page) {
    const intro = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$page$2d$copy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["introFor"])(page);
    return {
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["metaTitleFor"])(page),
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2d$meta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["metaDescriptionFor"])(page, intro, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHONE_DISPLAY"])
    };
}
function allSlugsLinkedFromPillar() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PAGES"].map((p)=>p.slug);
}
function isCityPageSlug(slug) {
    return citySlugSet.has(slug);
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
"[project]/app/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1yziogmhle7al._.js.map