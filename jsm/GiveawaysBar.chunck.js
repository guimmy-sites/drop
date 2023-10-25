"use strict";
(self.webpackChunk = self.webpackChunk || []).push([[686], {
    315: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return Ce
            }
        });
        var i, a, r = n(656), o = n(317), s = n(3), l = n.n(s), c = n(318), d = n(685), u = n(728), g = n(682), v = n(0), f = n(4), m = n(18), h = n(31), y = n(1), w = n(652), x = n(636), T = n(649), p = (0,
        T.sendTo)("eventBus", (function(e) {
            return {
                type: "SET_AUTH_TOKEN",
                authToken: e.authToken
            }
        }
        )), E = (0,
        T.sendTo)("eventBus", (function(e) {
            return {
                type: "SET_BALANCE",
                balance: e.balance
            }
        }
        )), N = (0,
        T.sendTo)("eventBus", {
            type: "FETCH_BALANCE"
        }), _ = {
            eventCreators: {
                SET_AUTH_TOKEN: function(e) {
                    return {
                        authToken: e
                    }
                },
                SET_BALANCE: function(e) {
                    return {
                        balance: e
                    }
                },
                FETCH_BALANCE: function() {
                    return {}
                }
            },
            initialContext: {
                authToken: "",
                balance: 0
            },
            assignToken: (0,
            T.assign)({
                authToken: function(e, t) {
                    return t.authToken
                }
            }),
            assignBalance: (0,
            T.assign)({
                balance: function(e, t) {
                    return t.balance
                }
            }),
            sendAuthTokenUpdate: p,
            sendBalanceUpdate: E,
            sendFetchBalance: N
        };
        (a = i || (i = {})).champion = "champion",
        a.challenger = "challenger",
        a.legend = "legend",
        a.contender = "contender",
        a.amateur = "amateur";
        var k, O, b, A, C, R = [i.champion, i.challenger, i.legend, i.contender, i.amateur];
        !function(e) {
            e.code = "PROMO_CODE_USAGE",
            e.case = "CASE_OPEN"
        }(k || (k = {})),
        function(e) {
            e.LATEST = "latest",
            e.START_TIME_ASCENDING = "startTimeAscending",
            e.START_TIME_DESCENDING = "startTimeDescending",
            e.PRIZE_ASCENDING = "prizeAscending",
            e.PRIZE_DESCENDING = "prizeDescending"
        }(O || (O = {})),
        function(e) {
            e.ACTIVE = "active",
            e.MY = "my",
            e.FINISHED = "finished",
            e.ALL_FINISHED = "allfinished",
            e.ALL_JOINED = "alljoined"
        }(b || (b = {})),
        function(e) {
            e.ACTIVE = "active",
            e.ORGANISER = "organiser",
            e.FINISHED = "finished"
        }(A || (A = {})),
        function(e) {
            e.ENDED = "ended",
            e.ACTIVE = "active"
        }(C || (C = {}));
        var S = {
            FN: "Factory New",
            MW: "Minimal Wear",
            FT: "Field-Tested",
            WW: "Well-Worn",
            BS: "Battle-Scarred"
        }
          , D = function(e) {
            if ("string" != typeof e)
                return null;
            var t = e.match(/^(.*)i([0-9]+)$/);
            return null != t && t[1] && null != t && t[2] ? {
                id: t[2],
                subtoken: t[1]
            } : void 0
        };
        function I(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function Z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? I(Object(n), !0).forEach((function(t) {
                    (0,
                    w.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var U, P, G = (0,
        x.N)(Z(Z({}, _.initialContext), {}, {
            giveaway: null,
            idWithoutToken: null,
            mySteamId: ""
        }), {
            events: Z(Z({}, _.eventCreators), {}, {
                KEYDROP_GIVEAWAY_STATS: function(e) {
                    return {
                        data: e
                    }
                },
                START_DRAWING: function() {
                    return {}
                },
                SHOW_NEXT_GIVEAWAY: function(e) {
                    return {
                        data: e
                    }
                },
                ADD_USER_COUNT_TO_GIVEAWAY: function(e) {
                    return {
                        userId: e
                    }
                },
                START_COUNTDOWN: function(e) {
                    return {
                        deadlineTimestamp: e
                    }
                }
            })
        }), L = G.createMachine({
            id: "ActiveKeydropGiveawayItemMachine",
            context: G.initialContext,
            entry: ["extractIDWithoutToken"],
            invoke: [{
                src: "manageKeydropSocket"
            }],
            on: {
                SET_AUTH_TOKEN: {
                    actions: [_.assignToken],
                    internal: !0
                },
                SET_BALANCE: {
                    actions: [_.assignBalance],
                    internal: !0
                },
                START_COUNTDOWN: {
                    actions: ["assignCountdown"]
                },
                SHOW_NEXT_GIVEAWAY: {
                    actions: ["assignGiveaway"],
                    target: ".showingLabel",
                    internal: !1
                }
            },
            initial: "idle",
            states: {
                idle: {
                    tags: ["idle"],
                    on: {
                        START_DRAWING: {
                            target: "drawing"
                        },
                        ADD_USER_COUNT_TO_GIVEAWAY: {
                            actions: ["increaseParticipantsCount"]
                        }
                    }
                },
                drawing: {
                    tags: ["drawing"]
                },
                showingLabel: {
                    tags: ["showingLabel"],
                    after: {
                        5e3: {
                            target: "idle"
                        }
                    },
                    on: {
                        ADD_USER_COUNT_TO_GIVEAWAY: {
                            actions: ["increaseParticipantsCount"]
                        }
                    }
                }
            }
        }, {
            actions: {
                extractIDWithoutToken: (0,
                y.f0)((function(e) {
                    var t, n;
                    e.idWithoutToken = null !== (t = null === (n = D(e.giveaway.id)) || void 0 === n ? void 0 : n.id) && void 0 !== t ? t : e.giveaway.id
                }
                )),
                assignGiveaway: (0,
                y.f0)((function(e, t) {
                    var n, i;
                    e.giveaway = t.data,
                    e.idWithoutToken = null !== (n = null === (i = D(t.data.id)) || void 0 === i ? void 0 : i.id) && void 0 !== n ? n : t.data.id
                }
                ), "SHOW_NEXT_GIVEAWAY"),
                increaseParticipantsCount: (0,
                y.f0)((function(e, t) {
                    var n;
                    e.giveaway.participantCount = Number(null !== (n = e.giveaway.participantCount) && void 0 !== n ? n : 0) + 1,
                    e.mySteamId === t.userId && (e.giveaway.haveIJoined = !0)
                }
                ), "ADD_USER_COUNT_TO_GIVEAWAY"),
                assignCountdown: (0,
                y.f0)((function(e, t) {
                    e.giveaway.deadlineTimestamp = t.deadlineTimestamp
                }
                ), "START_COUNTDOWN")
            }
        }), B = n(32), W = n(39), j = 3e5;
        !function(e) {
            e.REPORT_UNAUTHORIZED = "REPORT_UNAUTHORIZED",
            e.UPDATE_TOKEN = "UPDATE_TOKEN",
            e.REPORT_AUTHORIZED = "REPORT_AUTHORIZED",
            e.REPORT_LOGGED_IN = "REPORT_LOGGED_IN",
            e.REPORT_LOGGED_OUT = "REPORT_LOGGED_OUT"
        }(P || (P = {}));
        var H, z, F, X, K, M, Y, q, V, J, Q, $, ee, te, ne, ie = (U = {},
        (0,
        w.Z)(U, P.REPORT_AUTHORIZED, (function() {
            return {}
        }
        )),
        (0,
        w.Z)(U, P.REPORT_UNAUTHORIZED, (function() {
            return {}
        }
        )),
        (0,
        w.Z)(U, P.REPORT_LOGGED_IN, (function() {
            return {}
        }
        )),
        (0,
        w.Z)(U, P.REPORT_LOGGED_OUT, (function() {
            return {}
        }
        )),
        (0,
        w.Z)(U, P.UPDATE_TOKEN, (function(e) {
            return {
                token: e.token
            }
        }
        )),
        U), ae = (0,
        x.N)({
            tokenEndpoint: W.bl.token,
            token: "",
            exp: 0
        }, {
            events: {
                "done.invoke.fetchToken": function(e) {
                    return {
                        data: e
                    }
                },
                "error.platform.fetchToken": function() {
                    return {}
                },
                REFRESH_TOKEN: function() {
                    return {}
                }
            }
        }), re = ae.createMachine({
            id: "TokenMachine",
            context: ae.initialContext,
            initial: "gettingFirstToken",
            states: {
                gettingFirstToken: {
                    invoke: {
                        src: "fetchToken",
                        onDone: {
                            actions: ["assignToken", "sendUpdateToken"],
                            target: "checkingAuthorization"
                        },
                        onError: {
                            target: "unauthorized"
                        }
                    }
                },
                checkingAuthorization: {
                    always: [{
                        cond: "hasToken",
                        target: "authorized"
                    }, {
                        target: "unauthorized"
                    }]
                },
                unauthorized: {
                    entry: [(0,
                    T.sendParent)(P.REPORT_UNAUTHORIZED)]
                },
                authorized: {
                    invoke: {
                        src: "manageTokenExpirationTime"
                    },
                    on: {
                        REFRESH_TOKEN: {
                            target: ".refreshingToken",
                            internal: !0
                        }
                    },
                    entry: [(0,
                    T.sendParent)(P.REPORT_AUTHORIZED)],
                    initial: "checkingIfLoggedIn",
                    states: {
                        checkingIfLoggedIn: {
                            always: [{
                                cond: "isTokenUserLoggedIn",
                                target: "loggedIn"
                            }, {
                                target: "loggedOut"
                            }]
                        },
                        loggedIn: {
                            entry: [(0,
                            T.sendParent)(P.REPORT_LOGGED_IN)]
                        },
                        loggedOut: {
                            entry: [(0,
                            T.sendParent)(P.REPORT_LOGGED_OUT)]
                        },
                        refreshingToken: {
                            invoke: {
                                src: "fetchToken",
                                onDone: {
                                    actions: ["assignToken", "sendUpdateToken"],
                                    target: "#TokenMachine.checkingAuthorization"
                                }
                            }
                        }
                    }
                }
            }
        }, {
            guards: {
                hasToken: function(e) {
                    return !!e.token
                },
                isTokenUserLoggedIn: function(e) {
                    var t;
                    return 0 != +(null === (t = (0,
                    y.L4)(e.token)) || void 0 === t ? void 0 : t.sub)
                }
            },
            actions: {
                assignToken: ae.assign({
                    token: function(e, t) {
                        return t.data
                    },
                    exp: function() {
                        return Date.now() + 9e5
                    }
                }),
                sendUpdateToken: (0,
                T.sendParent)((function(e) {
                    var t = e.token;
                    return {
                        type: P.UPDATE_TOKEN,
                        token: t
                    }
                }
                ))
            },
            services: {
                fetchToken: function(e) {
                    var t = new URL(e.tokenEndpoint);
                    return t.searchParams.set("t", Date.now().toString()),
                    fetch(t).then((function(e) {
                        return e.text()
                    }
                    ))
                },
                manageTokenExpirationTime: function(e) {
                    return function(t) {
                        var n, i = function() {
                            if (document.hidden)
                                void 0 !== n && (clearTimeout(n),
                                n = void 0);
                            else {
                                var i = e.exp - Date.now();
                                i < j && t({
                                    type: "REFRESH_TOKEN"
                                });
                                var a = Math.max(0, i - j);
                                n = setTimeout((function() {
                                    return t({
                                        type: "REFRESH_TOKEN"
                                    })
                                }
                                ), a)
                            }
                        };
                        return i(),
                        document.addEventListener("visibilitychange", i),
                        function() {
                            void 0 !== n && clearTimeout(n),
                            document.removeEventListener("visibilitychange", i)
                        }
                    }
                }
            }
        }), oe = (null === (H = window.__giveaways_URL) || void 0 === H || null === (z = H.keydrop) || void 0 === z ? void 0 : z.base) + "/giveaway/", se = (null === (F = window.__giveaways_URL) || void 0 === F || null === (X = F.keydrop) || void 0 === X ? void 0 : X.action) + "/giveaway/", le = (null === (K = window.__giveaways_URL) || void 0 === K || null === (M = K.user) || void 0 === M ? void 0 : M.base) + "/giveaway-user/", ce = (null === (Y = window.__giveaways_URL) || void 0 === Y || null === (q = Y.user) || void 0 === q ? void 0 : q.action) + "/giveaway-user/", de = null === (V = window.__giveaways_URL) || void 0 === V || null === (J = V.keydrop) || void 0 === J ? void 0 : J.base, ue = (null === (Q = window.__giveaways_URL) || void 0 === Q || null === ($ = Q.user) || void 0 === $ || $.base,
        (0,
        y.fA)(oe)), ge = (0,
        y.fA)(se), ve = (0,
        y.fA)(le), fe = (0,
        y.fA)(ce), me = {
            token: (0,
            y.fA)(window.__url.base)("token"),
            keydropGiveawayList: ue("list", {}),
            keydropGiveawayLastFinished: ue("lastGiveawaysFinished"),
            keydropGiveawaySingle: ue("data/:id"),
            winnersKeydrop: ue("winners/:id"),
            keydropJoin: ge("joinGiveaway/:id"),
            __TEST__keydropFill: ge("joinTest/:id/:count"),
            userGiveawayList: ve("list", {}),
            getCases: ve("cases"),
            getUserItems: ve("user-items"),
            userGiveawaySingle: ve("giveaway/:id"),
            userWinners: ve("winners/:id"),
            createUserGiveaway: fe("create"),
            userCancel: fe("decline/:id"),
            userJoin: fe("join/:id"),
            userGetNewPromocode: fe("promocode"),
            __TEST__userEndGiveaway: fe("setEnd/:id"),
            __TEST__userFill: fe("joinTest/:id/:count"),
            __TEST__userDeposit: fe("testDeposit", {})
        };
        function he(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function ye(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? he(Object(n), !0).forEach((function(t) {
                    (0,
                    w.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var we, xe, Te = (0,
        x.N)({
            authToken: "",
            rates: null === (ee = window.__userInitialData) || void 0 === ee ? void 0 : ee.rates,
            currency: null === (te = window.__userInitialData) || void 0 === te ? void 0 : te.currency,
            language: document.documentElement.lang,
            keydropSocket: null
        }, {
            events: ye(ye({}, ie), {}, {
                "done.invoke.fetchBalance": function(e) {
                    return {
                        data: e
                    }
                }
            })
        }), pe = Te.createMachine({
            id: "GiveawaysBarMachine",
            context: Te.initialContext,
            invoke: {
                id: "tokenService",
                src: re.withContext(ye(ye({}, re.initialState.context), {}, {
                    tokenEndpoint: me.token()
                }))
            },
            on: (0,
            w.Z)({}, P.UPDATE_TOKEN, {
                actions: ["assignAuthToken"]
            }),
            initial: "gettingFirstAuthToken",
            states: {
                gettingFirstAuthToken: {
                    on: (ne = {},
                    (0,
                    w.Z)(ne, P.REPORT_UNAUTHORIZED, "notAuthorized"),
                    (0,
                    w.Z)(ne, P.REPORT_LOGGED_IN, "authorized.loggedIn"),
                    (0,
                    w.Z)(ne, P.REPORT_LOGGED_OUT, "authorized.loggedOut"),
                    ne)
                },
                notAuthorized: {
                    tags: ["notAuthorized"]
                },
                authorized: {
                    entry: ["createSocketKeydropConnection"],
                    tags: ["authorized"],
                    states: {
                        loggedIn: {
                            tags: ["loggedIn"]
                        },
                        loggedOut: {
                            tags: ["loggedOut"]
                        }
                    }
                }
            }
        }, {
            actions: {
                createSocketKeydropConnection: Te.assign((function(e) {
                    return {
                        keydropSocket: (0,
                        B.io)(de, {
                            transports: ["websocket"],
                            auth: {
                                token: e.authToken
                            },
                            query: {
                                "x-currency": e.currency
                            }
                        })
                    }
                }
                )),
                assignAuthToken: (0,
                y.f0)((function(e, t) {
                    e.authToken = t.token
                }
                ), P.UPDATE_TOKEN)
            }
        }), Ee = n(258), Ne = (0,
        u.E)(m.Z), _e = null === (we = window.__giveawaysBar) || void 0 === we ? void 0 : we.lang, ke = null === (xe = window.__giveawaysBar) || void 0 === xe ? void 0 : xe.giveaways, Oe = {
            initial: {
                y: "-100%"
            },
            animate: {
                y: 0
            },
            exit: {
                y: "100%"
            }
        }, be = function(e) {
            var t = e.giveawayNotStarted
              , n = e.giveawayNotFinished
              , i = e.giveawayIsDrawing
              , a = e.deadlineTimestamp
              , r = e.frequency
              , o = (0,
            v.useRef)()
              , s = function(e) {
                if (null !== o && null !== o.current) {
                    var t = o.current.querySelector(".days-unit")
                      , n = o.current.querySelector(".days-value")
                      , i = o.current.querySelector(".hours-unit")
                      , a = o.current.querySelector(".hours-value")
                      , r = o.current.querySelector(".minutes-unit")
                      , s = o.current.querySelector(".minutes-value")
                      , l = o.current.querySelector(".seconds-unit")
                      , c = o.current.querySelector(".seconds-value");
                    t.textContent = e.days.unit,
                    n.textContent = (0,
                    y.vk)(e.days.value),
                    i.textContent = e.hours.unit,
                    a.textContent = (0,
                    y.vk)(e.hours.value),
                    r.textContent = e.minutes.unit,
                    s.textContent = (0,
                    y.vk)(e.minutes.value),
                    l.textContent = e.seconds.unit,
                    c.textContent = (0,
                    y.vk)(e.seconds.value)
                }
            };
            (0,
            v.useEffect)((function() {
                var e, t = {
                    startTime: Date.now(),
                    currentTime: Date.now(),
                    endTime: new Date(a).getTime()
                };
                return n && (e = serverCountdown({
                    currentTime: t.currentTime,
                    startTime: t.startTime,
                    endTime: t.endTime,
                    onTick: s,
                    onComplete: s
                })),
                function() {
                    var t;
                    null === (t = e) || void 0 === t || t()
                }
            }
            ), [n]);
            var l = n ? (0,
            c.BX)(c.HY, {
                children: [(0,
                c.BX)("div", {
                    className: "flex w-6 flex-shrink-0 flex-col items-center justify-center text-center",
                    children: [(0,
                    c.tZ)("div", {
                        className: "days-value text-xs font-bold tabular-nums leading-none text-white",
                        children: "00"
                    }), (0,
                    c.tZ)("div", {
                        className: "days-unit text-[6px] font-medium leading-none text-white text-opacity-70"
                    })]
                }), (0,
                c.tZ)("div", {
                    className: "mx-0.5 text-center text-xs font-semibold text-navy-300",
                    children: ":"
                }), (0,
                c.BX)("div", {
                    className: "flex w-6 flex-shrink-0 flex-col items-center justify-center text-center",
                    children: [(0,
                    c.tZ)("div", {
                        className: "hours-value text-xs font-bold tabular-nums leading-none text-white",
                        children: "00"
                    }), (0,
                    c.tZ)("div", {
                        className: "hours-unit text-[6px] font-medium leading-none text-white text-opacity-70"
                    })]
                }), (0,
                c.tZ)("div", {
                    className: "mx-0.5 text-center text-xs font-semibold text-navy-300",
                    children: ":"
                }), (0,
                c.BX)("div", {
                    className: "flex w-6 flex-shrink-0 flex-col items-center justify-center text-center",
                    children: [(0,
                    c.tZ)("div", {
                        className: "minutes-value text-xs font-bold tabular-nums leading-none text-white",
                        children: "00"
                    }), (0,
                    c.tZ)("div", {
                        className: "minutes-unit text-[6px] font-medium leading-none text-white text-opacity-70"
                    })]
                }), (0,
                c.tZ)("div", {
                    className: "mx-0.5 text-center text-xs font-semibold text-navy-300",
                    children: ":"
                }), (0,
                c.BX)("div", {
                    className: "flex w-6 flex-shrink-0 flex-col items-center justify-center text-center",
                    children: [(0,
                    c.tZ)("div", {
                        className: "seconds-value text-xs font-bold tabular-nums leading-none text-white",
                        children: "00"
                    }), (0,
                    c.tZ)("div", {
                        className: "seconds-unit text-[6px] font-medium leading-none text-white text-opacity-70"
                    })]
                })]
            }) : i ? (0,
            c.tZ)("p", {
                className: "col-span-7 self-center text-center text-2xs font-semibold uppercase leading-tight text-white text-opacity-70",
                children: _e.drawInProgress
            }) : t ? (0,
            c.tZ)("p", {
                className: "col-span-7 self-center text-center text-2xs font-semibold uppercase leading-tight text-white text-opacity-70",
                children: _e.waitingForPlayers
            }) : (0,
            c.tZ)("p", {
                className: "col-span-7 self-center text-center text-2xs font-semibold uppercase leading-tight text-white text-opacity-70",
                children: _e.giveawayFinished
            });
            return (0,
            c.tZ)("div", {
                ref: o,
                className: (0,
                y.cn)("mb-2 mt-auto flex h-8 items-center justify-center rounded-lg px-1.5", n ? "w-full xl:w-min" : "w-full"),
                css: {
                    backgroundColor: null == r ? void 0 : r.midColorHex
                },
                children: l
            })
        }, Ae = function(e) {
            var t, n = e.giveaway, a = e.authToken, s = e.keydropSocket, m = (0,
            v.useState)(0), h = (0,
            o.Z)(m, 2), w = h[0], x = h[1], T = function(e) {
                switch (e) {
                case i.champion:
                    return {
                        text: "CHAMPION",
                        icon: (0,
                        c.tZ)(f.gJ, {
                            className: "h-full w-full text-giveaway-champion"
                        }),
                        textColorClass: "text-giveaway-champion",
                        bgColorClass: "bg-[#231C11]",
                        midColorHex: "#3e321e",
                        bannerImgSrc: "giveaway/champion-banner.png"
                    };
                case i.challenger:
                    return {
                        text: "CHALLENGER",
                        icon: (0,
                        c.tZ)(f.Cb, {
                            className: "h-full w-full text-giveaway-challenger"
                        }),
                        textColorClass: "text-giveaway-challenger",
                        bgColorClass: "bg-[#170809]",
                        midColorHex: "#231111",
                        bannerImgSrc: "giveaway/challenger-banner.png"
                    };
                case i.legend:
                    return {
                        text: "LEGEND",
                        icon: (0,
                        c.tZ)(f.Ud, {
                            className: "h-full w-full text-giveaway-legend"
                        }),
                        textColorClass: "text-giveaway-legend",
                        bgColorClass: "bg-[#081717]",
                        midColorHex: "#112223",
                        bannerImgSrc: "giveaway/legend-banner.png"
                    };
                case i.contender:
                    return {
                        text: "CONTENDER",
                        icon: (0,
                        c.tZ)(f.Qq, {
                            className: "h-full w-full text-giveaway-contender"
                        }),
                        textColorClass: "text-giveaway-contender",
                        bgColorClass: "bg-[#0D0817]",
                        midColorHex: "#171123",
                        bannerImgSrc: "giveaway/contender-banner.png"
                    };
                case i.amateur:
                    return {
                        text: "AMATEUR",
                        icon: (0,
                        c.tZ)(f.ro, {
                            className: "h-full w-full text-giveaway-amateur"
                        }),
                        textColorClass: "text-giveaway-amateur",
                        bgColorClass: "bg-[#08170E]",
                        midColorHex: "#112319",
                        bannerImgSrc: "giveaway/amateur-banner.png"
                    }
                }
            }(n.frequency), p = (0,
            v.useRef)(!0), E = (0,
            d.e)(L, {
                devTools: !0,
                context: {
                    authToken: a,
                    giveaway: n
                },
                services: {
                    manageKeydropSocket: function(e) {
                        return function(t) {
                            var n = function() {
                                var n = (0,
                                r.Z)(l().mark((function n(i) {
                                    return l().wrap((function(n) {
                                        for (; ; )
                                            switch (n.prev = n.next) {
                                            case 0:
                                                if (e.giveaway.frequency === i.frequency) {
                                                    n.next = 2;
                                                    break
                                                }
                                                return n.abrupt("return");
                                            case 2:
                                                t(G.events.SHOW_NEXT_GIVEAWAY(i));
                                            case 3:
                                            case "end":
                                                return n.stop()
                                            }
                                    }
                                    ), n)
                                }
                                )));
                                return function(e) {
                                    return n.apply(this, arguments)
                                }
                            }()
                              , i = function(n) {
                                String(e.idWithoutToken) === String(n.idGiveaway) && t(G.events.ADD_USER_COUNT_TO_GIVEAWAY(n.idSteam))
                            }
                              , a = function(n) {
                                String(e.idWithoutToken) === String(n.idGiveaway) && t({
                                    type: "START_COUNTDOWN",
                                    deadlineTimestamp: n.deadlineTimestamp
                                })
                            }
                              , o = function(n) {
                                String(e.giveaway.id) === String(n.idGiveaway) && t(G.events.START_DRAWING())
                            };
                            return s.on("PLAYER_JOIN", i),
                            s.on("START_COUNTDOWN", a),
                            s.on("CREATE", n),
                            s.on("GIVEAWAY_END", o),
                            function() {
                                s.off("PLAYER_JOIN", i),
                                s.off("START_COUNTDOWN", a),
                                s.off("CREATE", n),
                                s.off("GIVEAWAY_END", o)
                            }
                        }
                    }
                }
            }), N = (0,
            o.Z)(E, 2), _ = N[0], k = N[1], O = _.context, b = new Date(O.giveaway.deadlineTimestamp).getTime() > Date.now(), A = !O.giveaway.deadlineTimestamp, C = _.hasTag("drawing");
            (0,
            v.useEffect)((function() {
                p.current && (p.current = !1)
            }
            )),
            (0,
            v.useEffect)((function() {
                _.context.authToken !== a && k({
                    type: "SET_AUTH_TOKEN",
                    authToken: a
                })
            }
            ), [a]);
            var R = O.giveaway.prizes.reduce((function(e, t) {
                return e + t.price
            }
            ), 0);
            return (0,
            c.BX)("div", {
                className: "relative grid h-36 min-w-[90%] snap-start overflow-hidden sm:min-w-[50%] md:min-w-[33.333333%] xl:min-w-[20%]",
                children: [(0,
                c.BX)(g.M, {
                    children: [_.hasTag("drawing") ? (0,
                    c.tZ)(u.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: .5,
                            delay: .5
                        },
                        className: "absolute left-0 right-0 z-20 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50 text-white",
                        children: (0,
                        c.BX)("a", {
                            href: "/giveaways/keydrop/".concat(O.giveaway.id),
                            className: "flex h-full w-full flex-col items-center justify-center",
                            children: [(0,
                            c.tZ)(f.kB, {
                                className: "h-10 w-10 animate-bounce-rotate text-gold-400"
                            }), (0,
                            c.tZ)("p", {
                                className: "mt-4",
                                children: _e.drawInProgress
                            })]
                        })
                    }) : null, _.hasTag("showingLabel") ? (0,
                    c.tZ)(u.E.span, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: .5,
                            delay: .5
                        },
                        className: "absolute -left-6 top-4 z-20 flex h-6 w-26 -rotate-45 transform items-center justify-center bg-gold-400 text-sm font-bold text-navy-900",
                        children: _e.new
                    }) : null]
                }), (0,
                c.tZ)(g.M, {
                    children: (0,
                    c.BX)(u.E.div, {
                        initial: "initial",
                        animate: "animate",
                        exit: "exit",
                        transition: {
                            duration: .5,
                            ease: "easeOut"
                        },
                        variants: p.current ? {} : Oe,
                        className: (0,
                        y.cn)("relative col-start-1 row-start-1 grid overflow-hidden border-b border-current pl-2.5 pt-2.5", null == T ? void 0 : T.bgColorClass, T.textColorClass),
                        children: [(0,
                        c.tZ)("div", {
                            className: "absolute -bottom-1/2 -left-2 h-full w-auto rotate-[30deg] transform",
                            css: {
                                "*": {
                                    color: null == T ? void 0 : T.midColorHex
                                }
                            },
                            children: null == T ? void 0 : T.icon
                        }), (0,
                        c.BX)("div", {
                            className: "flex h-6",
                            children: [(0,
                            c.BX)("div", {
                                className: "flex items-center",
                                children: [(0,
                                c.tZ)("div", {
                                    className: "h-5 w-5",
                                    children: null == T ? void 0 : T.icon
                                }), (0,
                                c.tZ)("p", {
                                    className: "ml-2 text-xs font-bold text-white text-opacity-70",
                                    children: null == T ? void 0 : T.text
                                })]
                            }), (0,
                            c.BX)("div", {
                                className: "ml-auto flex items-center rounded-l-md py-1.5 pl-1.5 pr-2 text-xs font-bold tabular-nums text-white",
                                css: {
                                    backgroundColor: null == T ? void 0 : T.midColorHex
                                },
                                children: [(0,
                                c.tZ)(f.hg, {
                                    className: (0,
                                    y.cn)("mr-1 h-3 w-3", null == T ? void 0 : T.textColorClass)
                                }), O.giveaway.participantCount ? O.giveaway.participantCount : (null === (t = O.giveaway.participants) || void 0 === t ? void 0 : t.length) || 0]
                            })]
                        }), (0,
                        c.BX)("div", {
                            className: "relative flex min-h-0 flex-shrink",
                            children: [(0,
                            c.BX)("div", {
                                className: "flex w-[45%] flex-col",
                                children: [(0,
                                c.BX)("div", {
                                    className: "flex min-h-0 flex-shrink",
                                    children: [(0,
                                    c.tZ)("button", {
                                        type: "button",
                                        className: (0,
                                        y.cn)("z-10 -ml-1 cursor-pointer p-1 text-white transition-opacity duration-200 hover:text-navy-100", 0 === w ? "pointer-events-none opacity-0" : ""),
                                        onClick: function() {
                                            return x(w - 1)
                                        },
                                        children: (0,
                                        c.tZ)(f.e0, {
                                            className: "h-3 w-3 rotate-90 transform transition-colors duration-200"
                                        })
                                    }), (0,
                                    c.tZ)("div", {
                                        className: "grid-stack -mx-2 grid h-full max-h-[74px] min-h-0 w-4/5",
                                        children: (0,
                                        c.tZ)(g.M, {
                                            initial: !1,
                                            children: (0,
                                            c.tZ)(Ne, {
                                                initial: {
                                                    opacity: 0,
                                                    scale: .8
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    scale: 1
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    scale: .8
                                                },
                                                transition: {
                                                    duration: .3,
                                                    ease: "easeOut"
                                                },
                                                variant: "SKIN_THUMBNAIL_SMALL",
                                                src: (0,
                                                y.Ig)(O.giveaway.prizes[w].itemImg),
                                                alt: "",
                                                className: "aspect-[98.5/74] h-full min-h-0 w-full object-contain"
                                            }, O.giveaway.prizes[w].itemImg)
                                        })
                                    }), (0,
                                    c.tZ)("button", {
                                        type: "button",
                                        className: (0,
                                        y.cn)("z-10 -mr-1 cursor-pointer p-1 text-white transition-opacity duration-200 hover:text-navy-100", w === O.giveaway.prizes.length - 1 ? "pointer-events-none opacity-0" : ""),
                                        onClick: function() {
                                            return x(w + 1)
                                        },
                                        children: (0,
                                        c.tZ)(f.e0, {
                                            className: "h-3 w-3 -rotate-90 transform transition-colors duration-200"
                                        })
                                    })]
                                }), (0,
                                c.tZ)("span", {
                                    className: (0,
                                    y.cn)("mb-2 mt-auto truncate text-xs font-semibold", null == T ? void 0 : T.textColorClass),
                                    children: (0,
                                    y.L6)()(R)
                                })]
                            }), (0,
                            c.BX)("a", {
                                href: "/giveaways/keydrop/".concat(O.giveaway.id),
                                className: "flex w-[55%] flex-col pr-2.5",
                                children: [(0,
                                c.BX)("div", {
                                    className: "my-auto flex flex-col",
                                    children: [(0,
                                    c.tZ)("span", {
                                        className: "truncate text-xs font-bold text-white text-opacity-70",
                                        children: O.giveaway.prizes[w].title
                                    }), (0,
                                    c.tZ)("span", {
                                        className: "truncate text-xs font-bold leading-none text-white",
                                        children: O.giveaway.prizes[w].subtitle
                                    }), (0,
                                    c.tZ)("span", {
                                        className: "mb-1.5 truncate text-xs text-white text-opacity-70",
                                        children: S[O.giveaway.prizes[w].condition]
                                    })]
                                }), (0,
                                c.tZ)(be, {
                                    giveawayNotStarted: A,
                                    giveawayNotFinished: b,
                                    giveawayIsDrawing: C,
                                    deadlineTimestamp: O.giveaway.deadlineTimestamp,
                                    frequency: T
                                }, O.giveaway.id)]
                            })]
                        })]
                    }, O.giveaway.id)
                })]
            })
        }, Ce = function() {
            var e = (0,
            h.Z)()
              , t = (0,
            d.e)(pe)
              , n = (0,
            o.Z)(t, 1)[0]
              , i = n.context
              , a = i.authToken
              , r = i.keydropSocket
              , s = n.hasTag("authorized") ? R.map((function(e) {
                return null == ke ? void 0 : ke.find((function(t) {
                    return t.frequency === e
                }
                ))
            }
            )).filter(Boolean) : [];
            return (0,
            c.BX)("div", {
                className: "relative flex h-full",
                children: [(0,
                c.BX)("div", {
                    className: "flex h-36 w-8 flex-shrink-0 flex-col items-center justify-center bg-navy-700/60 text-center text-xs font-semibold leading-tight md:w-32 md:rounded-tl-xl xl:text-sm",
                    children: [(0,
                    c.tZ)("span", {
                        className: "hidden uppercase text-[#FFDDA6] md:block",
                        children: e("giveaways.new")
                    }), (0,
                    c.tZ)("span", {
                        className: "hidden uppercase text-white md:inline-block",
                        children: e("giveaways.title")
                    }), (0,
                    c.tZ)("span", {
                        className: "inline-block -rotate-90 transform text-white md:hidden",
                        children: e("giveaways.title")
                    }), (0,
                    c.tZ)("a", {
                        className: "\n        button\n        mt-4\n        hidden\n        h-7\n        bg-gold\n        px-2\n        text-[10px]\n        text-navy-900\n        hover:bg-gold-400\n        md:flex\n        xl:px-3\n      ",
                        href: "/giveaways",
                        children: (0,
                        c.tZ)("span", {
                            className: "uppercase",
                            children: e("giveaways.joinNow")
                        })
                    })]
                }), s.length > 0 ? (0,
                c.tZ)("div", {
                    className: "w-full overflow-hidden",
                    children: (0,
                    c.tZ)("div", {
                        className: (0,
                        y.cn)("flex w-full snap-x snap-mandatory overflow-x-auto xl:grid xl:snap-none xl:grid-cols-5", ke ? "opacity-100" : "pointer-events-none opacity-50"),
                        children: s.map((function(e) {
                            return (0,
                            c.tZ)(Ae, {
                                authToken: a,
                                giveaway: e,
                                keydropSocket: r
                            }, e.id)
                        }
                        ))
                    })
                }) : (0,
                c.tZ)(Ee.R, {})]
            })
        }
    }
}]);