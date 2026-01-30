module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/New folder/hotel-booking/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/New folder/hotel-booking/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/Documents/New folder/hotel-booking/app/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/New folder/hotel-booking/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Home() {
    const hotelList = [
        {
            id: 1,
            name: 'Yash Hotels',
            city: 'Varanasi',
            price: 1500,
            image: 'https://imgs.search.brave.com/7RotLeHy7px6qbDCGaE2-Z4HJfCOo7KJSirgZ9yr8DU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG90ZWxzLW9mLW5l/dy1kZWxoaS5jb20v/ZGF0YS9QaG90b3Mv/MzAweDMwMHcvNjg3/My82ODczMjgvNjg3/MzI4NzA3LkpQRUc'
        },
        {
            id: 2,
            name: "Adil Hotels",
            city: "Patna",
            price: 1200,
            image: 'https://imgs.search.brave.com/syfhHlpXaTo4NFxfBu4ExDACkQUsGpN_tlreU4T590Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVudWUuZXZlbnRz/L3B1YmxpYy91cGxv/YWQvaG90ZWxnYWxs/ZXJ5LzExNDgvSG90/ZWxfSW50ZXJjaXR5/LU5ld19EZWxoaS0w/MS5qcGc'
        },
        {
            id: 3,
            name: "Gomti Inn",
            city: 'Lucknow',
            price: 900,
            image: "https://imgs.search.brave.com/OEKLFivBj81v96SDI81Lcx7Y9W8lVLFw9VgTf-yu43Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yMWlt/Z2h0bGFrLm1tdGNk/bi5jb20vN2U4MDNh/MzJlNTlkMTFlYzk3/NDMwYTU4YTlmZWFj/MDIuanBnPyZvdXRw/dXQtcXVhbGl0eT03/NSZkb3duc2l6ZT0y/NDM6MTYyJm91dHB1/dC1mb3JtYXQ9anBn"
        },
        {
            id: 4,
            name: 'Chacha Hotels',
            city: "Jharkhand",
            price: 1100,
            image: "https://imgs.search.brave.com/nPQUuv1ZvWfXhDmu15mhGiLR1_VSDcNkFH9aaNK5w3E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVudWUuZXZlbnRz/L3B1YmxpYy91cGxv/YWQvaG90ZWxnYWxs/ZXJ5LzExNTgvSG90/ZWxfV2FsbnV0X0Nh/c3RsZS1OZXdfRGVs/aGktMDEuanBn"
        }
    ];
    const containerStyle = {
        fontFamily: "Arial, sans-serif",
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    borderBottom: "2px solid #333",
                    paddingBottom: '15px',
                    marginBottom: '30px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Hotel Booking"
                }, void 0, false, {
                    fileName: "[project]/Documents/New folder/hotel-booking/app/page.js",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/New folder/hotel-booking/app/page.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    marginBottom: '20px'
                },
                children: "Availabel Hotels"
            }, void 0, false, {
                fileName: "[project]/Documents/New folder/hotel-booking/app/page.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: '20px'
                },
                children: hotelList.map((hotel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            border: "1px solid #ddd",
                            padding: '15px',
                            borderRadius: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: hotel.image,
                                alt: hotel.name,
                                style: {
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/New folder/hotel-booking/app/page.js",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: hotel.name
                            }, void 0, false, {
                                fileName: "[project]/Documents/New folder/hotel-booking/app/page.js",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#666",
                                    margin: '5px 0'
                                },
                                children: hotel.city
                            }, void 0, false, {
                                fileName: "[project]/Documents/New folder/hotel-booking/app/page.js",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "18px",
                                    fontWeight: 'bold',
                                    margin: '10px 0',
                                    color: '#2563eb'
                                },
                                children: [
                                    "₹",
                                    hotel.price,
                                    "/night"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/New folder/hotel-booking/app/page.js",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: '/hotels/' + hotel.id,
                                style: {
                                    display: "inline-block",
                                    marginTop: '10px',
                                    padding: "10px 15px",
                                    backgroundColor: '#2563eb',
                                    color: "white",
                                    textDecoration: 'none',
                                    borderRadius: '5px'
                                },
                                children: "Book now"
                            }, void 0, false, {
                                fileName: "[project]/Documents/New folder/hotel-booking/app/page.js",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        ]
                    }, hotel.id, true, {
                        fileName: "[project]/Documents/New folder/hotel-booking/app/page.js",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/New folder/hotel-booking/app/page.js",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/New folder/hotel-booking/app/page.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/New folder/hotel-booking/app/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/New folder/hotel-booking/app/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__31c615b0._.js.map