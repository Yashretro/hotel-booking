module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/New folder/hotel-booking/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/New folder/hotel-booking/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/Documents/New folder/hotel-booking/app/hotels/[id]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HotelDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/New folder/hotel-booking/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
async function HotelDetails({ params }) {
    const hotelId = (await params).id;
    const hotelNames = {
        1: "Yash Hotels",
        2: 'Adil Hotels',
        3: "Gomti Inn",
        4: 'Chacha Hotels'
    };
    const roomsList = [
        {
            id: 1,
            type: "Single",
            price: 800
        },
        {
            id: 2,
            type: 'Double',
            price: 1200
        },
        {
            id: 3,
            type: "Family",
            price: 2000
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: "Arial, sans-serif",
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/",
                style: {
                    color: "#2563eb"
                },
                children: "← Back"
            }, void 0, false, {
                fileName: "[project]/Documents/New folder/hotel-booking/app/hotels/[id]/page.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: hotelNames[hotelId]
            }, void 0, false, {
                fileName: "[project]/Documents/New folder/hotel-booking/app/hotels/[id]/page.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    marginTop: '25px'
                },
                children: "Available Rooms"
            }, void 0, false, {
                fileName: "[project]/Documents/New folder/hotel-booking/app/hotels/[id]/page.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            roomsList.map((room)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        border: "1px solid #ddd",
                        padding: '15px',
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        margin: 0
                                    },
                                    children: room.type
                                }, void 0, false, {
                                    fileName: "[project]/Documents/New folder/hotel-booking/app/hotels/[id]/page.js",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#2563eb",
                                        fontWeight: 'bold',
                                        margin: '5px 0'
                                    },
                                    children: [
                                        "₹",
                                        room.price,
                                        "/night"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/New folder/hotel-booking/app/hotels/[id]/page.js",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/New folder/hotel-booking/app/hotels/[id]/page.js",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$New__folder$2f$hotel$2d$booking$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: '/booking?hotel=' + hotelId + '&room=' + room.id,
                            style: {
                                padding: "10px 20px",
                                backgroundColor: '#2563eb',
                                color: 'white',
                                textDecoration: "none",
                                borderRadius: '3px'
                            },
                            children: "Book"
                        }, void 0, false, {
                            fileName: "[project]/Documents/New folder/hotel-booking/app/hotels/[id]/page.js",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, room.id, true, {
                    fileName: "[project]/Documents/New folder/hotel-booking/app/hotels/[id]/page.js",
                    lineNumber: 13,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/New folder/hotel-booking/app/hotels/[id]/page.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/New folder/hotel-booking/app/hotels/[id]/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/New folder/hotel-booking/app/hotels/[id]/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e52e93ce._.js.map