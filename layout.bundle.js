/*! For license information please see layout.ed3518f541dfb10c0a89.bundle.js.LICENSE.txt */
!function() {
    var e, t, n, o, r = {
        229: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return S
                },
                q: function() {
                    return C
                }
            });
            var o = n(317)
              , r = n(652)
              , a = n(656)
              , i = n(3)
              , s = n.n(i)
              , l = n(318)
              , c = n(0)
              , u = n(2)
              , d = n(10)
              , p = n(39)
              , f = n(8)
              , h = n(29);
            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0,
                        r.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var g = {
                gold: 0,
                pkt: 0,
                vdolce: 0,
                status: !0
            }
              , w = {
                gold: 0,
                pkt: 0,
                vdolce: 0,
                status: !0,
                skinsCount: 0,
                skinsValue: 0
            }
              , v = {
                status: !0,
                coin: 0
            }
              , b = {
                cacheKey: "balanceData",
                eventBalance: {
                    api: p.bl.eventBalance,
                    key: "eventBalance"
                },
                balance: {
                    api: p.bl.balance({
                        skinsValue: !1
                    }),
                    key: "balance"
                },
                walletAndSkinsBalance: {
                    api: p.bl.balance({
                        skinsValue: window.__layout.featureFlags.quickSell
                    }),
                    key: "walletAndSkinsBalance"
                }
            }
              , k = function(e) {
                var t = e.isLoggedIn
                  , n = e.isEnabled
                  , o = (0,
                u.$G)("common").t
                  , r = (0,
                d.useQueryClient)()
                  , i = function() {
                    var e = (0,
                    a.Z)(s().mark((function e() {
                        var n;
                        return s().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 3,
                                    (0,
                                    f.L)(b.eventBalance.api);
                                case 3:
                                    e.t0 = e.sent,
                                    e.next = 7;
                                    break;
                                case 6:
                                    e.t0 = v;
                                case 7:
                                    n = e.t0,
                                    r.setQueryData(b.cacheKey, (function(e) {
                                        return y(y({}, e), {}, {
                                            eventCoins: n.coin
                                        })
                                    }
                                    ));
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
                  , l = (0,
                d.useQuery)(b.eventBalance.key, i, {
                    refetchOnWindowFocus: !0,
                    retry: 3,
                    onError: function() {
                        window.__layout.toast({
                            type: "error",
                            title: o("error.eventBalance.title"),
                            message: o("error.eventBalance.message"),
                            duration: 6e3
                        })
                    }
                }).refetch
                  , c = function() {
                    var e = (0,
                    a.Z)(s().mark((function e() {
                        var n;
                        return s().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 3,
                                    (0,
                                    f.L)(b.balance.api);
                                case 3:
                                    e.t0 = e.sent,
                                    e.next = 7;
                                    break;
                                case 6:
                                    e.t0 = g;
                                case 7:
                                    return n = e.t0,
                                    r.setQueryData(b.cacheKey, (function(e) {
                                        return y(y({}, e), {}, {
                                            wallet: n.pkt,
                                            gold: n.gold
                                        })
                                    }
                                    )),
                                    e.abrupt("return", n);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
                  , p = function() {
                    var e = (0,
                    a.Z)(s().mark((function e() {
                        var n;
                        return s().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 3,
                                    (0,
                                    f.L)(b.walletAndSkinsBalance.api);
                                case 3:
                                    e.t0 = e.sent,
                                    e.next = 7;
                                    break;
                                case 6:
                                    e.t0 = w;
                                case 7:
                                    return n = e.t0,
                                    r.setQueryData(b.cacheKey, (function(e) {
                                        return y(y({}, e), {}, {
                                            gold: n.gold,
                                            wallet: n.pkt,
                                            skinsValue: n.skinsValue
                                        })
                                    }
                                    )),
                                    e.abrupt("return", n);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return {
                    updateCoinBalance: l,
                    updateBalance: c,
                    updateBalanceAndSkinsValue: (0,
                    d.useQuery)(b.walletAndSkinsBalance.key, p, {
                        enabled: n,
                        refetchOnWindowFocus: !0,
                        retry: 3,
                        suspense: !1,
                        onError: function() {
                            window.__layout.toast({
                                type: "error",
                                title: o("error.balance.title"),
                                message: o("error.balance.message")
                            })
                        }
                    }).refetch
                }
            }
              , z = function(e) {
                var t = e.children
                  , n = k({
                    isLoggedIn: !1,
                    isEnabled: !1
                })
                  , o = n.updateBalance
                  , r = n.updateBalanceAndSkinsValue
                  , a = n.updateCoinBalance;
                return (0,
                c.useEffect)((function() {
                    window.__layout.updateBalance = o,
                    window.__layout.updateCoinBalance = a,
                    window.__layout.updateBalanceAndSkinsValue = function() {
                        return r()
                    }
                }
                ), [r, o, a]),
                (0,
                l.tZ)(j.Provider, {
                    value: {
                        loadingStatus: "success",
                        balance: {
                            eventCoins: 0,
                            gold: 0,
                            skinsValue: 0,
                            wallet: 0
                        },
                        updateBalanceAndSkinsValue: r
                    },
                    children: t
                })
            }
              , x = function(e) {
                var t = e.children
                  , n = e.getInitialData
                  , r = (0,
                c.useState)(!1)
                  , a = (0,
                o.Z)(r, 2)
                  , i = a[0]
                  , s = a[1]
                  , u = (0,
                d.useQuery)(b.cacheKey, n, {
                    refetchOnWindowFocus: !1,
                    staleTime: 1 / 0
                })
                  , p = u.data
                  , f = u.status
                  , m = k({
                    isLoggedIn: !0,
                    isEnabled: !i
                })
                  , y = m.updateBalance
                  , g = m.updateBalanceAndSkinsValue
                  , w = m.updateCoinBalance
                  , v = (0,
                h.E)()
                  , z = v.subscribe
                  , x = v.unsubscribe;
                return (0,
                c.useEffect)((function() {
                    var e = z("RESUME_FETCHING_INVENTORY", (function() {
                        s(!1),
                        g()
                    }
                    ))
                      , t = z("SUSPEND_FETCHING_INVENTORY", (function() {
                        s(!0)
                    }
                    ));
                    return function() {
                        x(e),
                        x(t)
                    }
                }
                ), [s, g]),
                (0,
                c.useEffect)((function() {
                    window.__layout.updateBalance = y,
                    window.__layout.updateCoinBalance = w,
                    window.__layout.updateBalanceAndSkinsValue = function() {
                        return g()
                    }
                }
                ), [g, y, w]),
                (0,
                l.tZ)(j.Provider, {
                    value: {
                        updateBalanceAndSkinsValue: g,
                        loadingStatus: f,
                        balance: p
                    },
                    children: t
                })
            }
              , j = (0,
            c.createContext)(null)
              , C = function(e) {
                var t = e.children
                  , n = e.isLoggedIn
                  , o = e.getInitialData;
                return n ? (0,
                l.tZ)(x, {
                    getInitialData: o,
                    children: t
                }) : (0,
                l.tZ)(z, {
                    children: t
                })
            }
              , S = function() {
                var e = (0,
                c.useContext)(j);
                return e || console.error("useBalanceContext must be used within the BalanceProvider"),
                e
            }
        },
        42: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return y
                },
                n: function() {
                    return m
                }
            });
            var o = n(652)
              , r = n(656)
              , a = n(3)
              , i = n.n(a)
              , s = n(318)
              , l = n(0)
              , c = n(10)
              , u = n(229);
            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        (0,
                        o.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var f = function(e) {
                return (0,
                r.Z)(i().mark((function t() {
                    var n, o;
                    return i().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e();
                            case 2:
                                if (o = t.sent,
                                null === (n = o.user) || void 0 === n || !n.balance) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return", p(p({}, o.user.balance), {}, {
                                    wallet: o.user.balance.pkt
                                }));
                            case 5:
                                return t.abrupt("return", null);
                            case 6:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))
            }
              , h = (0,
            l.createContext)(null)
              , m = function(e) {
                var t = e.getInitialData
                  , n = e.children
                  , o = (0,
                c.useQueryClient)()
                  , a = (0,
                c.useQuery)("initialData", function(e) {
                    return (0,
                    r.Z)(i().mark((function t() {
                        var n, o, r, a, s, l;
                        return i().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e();
                                case 2:
                                    return l = t.sent,
                                    t.abrupt("return", p(p({}, l), {}, {
                                        user: {
                                            id: null === (n = l.user) || void 0 === n ? void 0 : n.id,
                                            steamID: null === (o = l.user) || void 0 === o ? void 0 : o.steamID,
                                            userKey: null === (r = l.user) || void 0 === r ? void 0 : r.userKey,
                                            username: null === (a = l.user) || void 0 === a ? void 0 : a.username,
                                            avatar: null === (s = l.user) || void 0 === s ? void 0 : s.avatar
                                        }
                                    }));
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))
                }(t), {
                    refetchOnWindowFocus: !1,
                    staleTime: 1 / 0
                })
                  , d = a.data
                  , m = a.status;
                return (0,
                l.useEffect)((function() {
                    window.__layout.updateBonus = function(e) {
                        return o.setQueryData("initialData", (function(t) {
                            return p(p({}, t), {}, {
                                bonus: e
                            })
                        }
                        ))
                    }
                }
                ), []),
                (0,
                s.tZ)(h.Provider, {
                    value: p({
                        loadingStatus: m
                    }, d),
                    children: (0,
                    s.tZ)(u.q, {
                        isLoggedIn: null == d ? void 0 : d.isLoggedIn,
                        getInitialData: f(t),
                        children: n
                    })
                })
            }
              , y = function() {
                var e = (0,
                l.useContext)(h);
                if (!e)
                    throw new Error("useGlobalContext() must be used within a <GlobalContextProvider />");
                return e
            }
        },
        39: function(e, t, n) {
            "use strict";
            n.d(t, {
                bl: function() {
                    return l
                }
            });
            var o, r = n(317), a = n(12), i = "undefined" != typeof window && (null === (o = window.__skinChanger) || void 0 === o ? void 0 : o.API_BASE_URL) || "https://key-drop.io:3000", s = function(e, t) {
                var n = new URL(e,i);
                return Object.entries(t).forEach((function(e) {
                    var t = (0,
                    r.Z)(e, 2)
                      , o = t[0]
                      , a = t[1];
                    a && (Array.isArray(a) ? a.forEach((function(e) {
                        return n.searchParams.append(o, String(e))
                    }
                    )) : n.searchParams.append(o, String(a)))
                }
                )),
                n.toString()
            }, l = {
                token: a.bl.token,
                balance: function(e) {
                    return s(a.bl.balance, e)
                },
                eventBalance: a.bl.eventBalance,
                UserInventoryItem: function(e) {
                    return s("/UserInventoryItem", e)
                },
                createOrder: function(e) {
                    return s("/SkinsChanger/createOrder", e)
                },
                orderStatus: function(e) {
                    return t = "/SkinsChanger/orderStatus/".concat(e),
                    new URL(t,i).toString();
                    var t
                },
                latestOrderStatus: function(e) {
                    return s("/SkinsChanger/latestOrderStatus", e)
                },
                InventoryItem: function(e) {
                    return s("/InventoryItem", e)
                },
                search: function() {
                    return new URL("Api/search",window.__url.base).href
                }
            }
        },
        12: function(e, t, n) {
            "use strict";
            n.d(t, {
                bl: function() {
                    return c
                }
            });
            var o, r = n(317), a = null === (o = window.__url) || void 0 === o ? void 0 : o.base, i = "/" === new URL(a).pathname ? "" : new URL(a).pathname, s = function(e, t) {
                var n = new URL("".concat(i, "/").concat(e),a);
                return Object.entries(t).forEach((function(e) {
                    var t = (0,
                    r.Z)(e, 2)
                      , o = t[0]
                      , a = t[1];
                    Array.isArray(a) ? a.forEach((function(e) {
                        return n.searchParams.append(o, String(e))
                    }
                    )) : n.searchParams.append(o, String(a))
                }
                )),
                n.toString()
            }, l = function(e) {
                return new URL("".concat(i, "/").concat(e),a).toString()
            }, c = {
                accountHistoryDeposit: function(e) {
                    return s("apiData/AccountHistory/deposit", e)
                },
                accountHistoryTransactions: function(e) {
                    return s("apiData/AccountHistory/transaction", e)
                },
                accountHistoryWithdrawals: function(e) {
                    return s("apiData/AccountHistory/affilate", e)
                },
                initialData: l("apiData/Init/index"),
                balance: l("balance"),
                eventBalance: l("Event/Event/globalData"),
                yourItems: l("apiData/Settings/userUpdate"),
                updateUserSettings: l("apiData/Settings/userUpdate"),
                affiliate: l("apiData/Affilate/index"),
                affiliateCreatorData: l("apiData/Creators/data"),
                affiliateCreatorWithdraw: l("apiData/Creators/withdraw"),
                saveAffiliateCode: l("apiData/Affilate/savePromoCode"),
                freeGoldTasks: l("apiData/Challenges"),
                sendChallenge: function(e) {
                    return l("Challenges/send_".concat(e))
                },
                freeGoldTaskAutoAccept: l("Challenges/send_auto_accept"),
                freeGoldTaskCasinoStepOne: l("Challenges/send_oneCasinoStepOne"),
                freeGoldTaskCasinoLvl10: l("Challenges/send_oneCasinoLvl/10"),
                freeGoldTaskCasinoLvl50: l("Challenges/send_oneCasinoLvl/50"),
                freeGoldTaskEmailAdd: l("Challenges/send_emailadd"),
                freeGoldTaskUploadImage: l("ajaxUpload/zadania"),
                freeGoldTaskSendFoto: l("Challenges/send_foto"),
                userSupportTickets: l("apiData/Support/userTickets"),
                supportTicket: l("apiData/Support/ticket"),
                supportActiveTicket: l("apiData/Support/activeTicket"),
                settingsUserNewsletter: l("apiData/Settings/userNewsletter"),
                supportMessage: l("apiData/Support/message"),
                supportTicketMessage: l("apiData/Support/ticketMessage"),
                uploadHelpAttachment: l("/AjaxUpload/help"),
                payments: l("apiData/Payment"),
                pay: l("Pay/"),
                changeCurrency: l("Api/change_waluta"),
                changeLanguage: l("Api/change_lang"),
                changeLangAndCurrency: l("apiData/Settings/changeLangAndCurrency"),
                changeEmail: l("panel/profil/sendemail_verifi"),
                verifyEmail: l("panel/profil/verifi_email_code"),
                changeTradeUrl: l("panel/Profil/change_trade_url"),
                profileData: function(e) {
                    return l("apiData/UserStats/index/".concat(e))
                },
                botStats: function(e) {
                    var t, n, o;
                    return null === (t = window.__account) || void 0 === t || null === (n = t.endpoints) || void 0 === n || null === (o = n.botStats) || void 0 === o ? void 0 : o.replace(":steamId", e)
                },
                yourItemsData: l("panel/profil/my_winner_list"),
                yourItemsMarketData: ("market_info.php",
                new URL("market_info.php",a).toString()),
                yourItemsEqValue: l("panel/profil/eq_value"),
                yourItemsSellEq: l("skins/Control/sell_eq"),
                yourItemsSellSkin: l("skins/Control/sell/{ID}"),
                yourItemsCollectSkin: l("skins/Control/withdraw/{ID}"),
                yourItemsCollectGame: l("game/winner"),
                yourItemsUpgrader: l("skins/upgrader"),
                yourItemsSellGame: l("game/Winner/sell/{ID}"),
                yourItemsSkinChanger: l("skin-changer"),
                profileAllDrops: l("api-data/User"),
                token: l("token"),
                contractsYourItems: l("apiData/contract/myitems"),
                contractMake: l("apiData/contract/make"),
                subscribeToNewsletter: l("panel/newsletter/subscribe"),
                unsubscribeFromNewsletter: l("panel/newsletter/unsubscribe"),
                provablyFairHistory: function(e) {
                    return l("apiData/skins/ProvablyFair/itemHistory/".concat(e))
                },
                payoutMethods: l("apiData/Creators/withdrawMethod")
            }
        },
        258: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return i
                },
                V: function() {
                    return a
                }
            });
            var o = n(318)
              , r = n(31)
              , a = function() {
                var e = (0,
                r.Z)();
                return (0,
                o.BX)("div", {
                    className: "relative flex h-full",
                    children: [(0,
                    o.BX)("div", {
                        className: "flex h-36 w-8 flex-shrink-0 flex-col items-center justify-center bg-navy-700/60 text-center text-xs font-semibold leading-tight md:w-32 md:rounded-tl-xl xl:text-sm",
                        children: [(0,
                        o.tZ)("span", {
                            className: "hidden uppercase text-[#FFDDA6] md:block",
                            children: e("giveaways.new")
                        }), (0,
                        o.tZ)("span", {
                            className: "hidden uppercase text-white md:inline-block",
                            children: e("giveaways.title")
                        }), (0,
                        o.tZ)("span", {
                            className: "inline-block -rotate-90 transform text-white md:hidden",
                            children: e("giveaways.title")
                        }), (0,
                        o.tZ)("a", {
                            className: "\n          button\n          mt-4\n          hidden\n          h-7\n          bg-gold\n          px-2\n          text-[10px]\n          text-navy-900\n          hover:bg-gold-400\n          md:flex\n          xl:px-3\n        ",
                            href: "/giveaways",
                            children: (0,
                            o.tZ)("span", {
                                className: "uppercase",
                                children: e("giveaways.joinNow")
                            })
                        })]
                    }), (0,
                    o.tZ)(i, {})]
                })
            }
              , i = function() {
                return (0,
                o.tZ)("div", {
                    id: "giveawaysBar-placeholders",
                    className: "w-full overflow-hidden",
                    children: (0,
                    o.BX)("div", {
                        className: "flex w-full snap-x snap-mandatory overflow-x-auto opacity-100 xl:grid xl:snap-none xl:grid-cols-5",
                        children: [(0,
                        o.tZ)("div", {
                            className: "\n            relative\n            grid\n            h-36\n            min-w-[90%]\n            snap-start\n            overflow-hidden\n            sm:min-w-[50%]\n            md:min-w-[33.333333%]\n          ",
                            children: (0,
                            o.BX)("div", {
                                className: "\n              relative\n              grid\n              overflow-hidden\n              border-b\n              border-giveaway-champion\n              bg-[#231C11]\n              pl-2.5\n              pt-2.5\n            ",
                                style: {
                                    gridArea: "1/1/auto/auto",
                                    transform: "none"
                                },
                                children: [(0,
                                o.tZ)("div", {
                                    className: "\n                css-yky5ab-GiveawayHomeListItem\n                absolute\n                -bottom-1/2\n                -left-2\n                h-full\n                w-auto\n                rotate-[30deg]\n                transform\n              ",
                                    children: (0,
                                    o.BX)("svg", {
                                        className: "icon h-full w-full text-giveaway-champion",
                                        viewBox: "0 0 24 25",
                                        children: [(0,
                                        o.tZ)("circle", {
                                            cx: "12.04",
                                            cy: "12.478",
                                            r: "11.693",
                                            fill: "#3e321e"
                                        }), (0,
                                        o.tZ)("path", {
                                            fill: "#231c11",
                                            d: "M6.97 16.28h10.14v1.014H6.97V16.28Zm0-7.098 2.535 1.521 2.535-3.042 2.535 3.042 2.535-1.52v6.083H6.97V9.182Z"
                                        })]
                                    })
                                }), (0,
                                o.tZ)("div", {
                                    className: "flex h-6",
                                    children: (0,
                                    o.BX)("div", {
                                        className: "flex items-center",
                                        children: [(0,
                                        o.tZ)("div", {
                                            className: "h-5 w-5",
                                            children: (0,
                                            o.BX)("svg", {
                                                className: "icon h-full w-full text-giveaway-champion",
                                                viewBox: "0 0 24 25",
                                                children: [(0,
                                                o.tZ)("circle", {
                                                    cx: "12.04",
                                                    cy: "12.478",
                                                    r: "11.693",
                                                    fill: "currentColor"
                                                }), (0,
                                                o.tZ)("path", {
                                                    fill: "#231c11",
                                                    d: "M6.97 16.28h10.14v1.014H6.97V16.28Zm0-7.098 2.535 1.521 2.535-3.042 2.535 3.042 2.535-1.52v6.083H6.97V9.182Z"
                                                })]
                                            })
                                        }), (0,
                                        o.tZ)("p", {
                                            className: "ml-2 text-xs font-bold text-white text-opacity-70",
                                            children: "CHAMPION"
                                        })]
                                    })
                                })]
                            })
                        }), (0,
                        o.tZ)("div", {
                            className: "\n            relative\n            grid\n            h-36\n            min-w-[90%]\n            snap-start\n            overflow-hidden\n            sm:min-w-[50%]\n            md:min-w-[33.333333%]\n          ",
                            children: (0,
                            o.BX)("div", {
                                className: "\n              relative\n              grid\n              overflow-hidden\n              border-b\n              border-giveaway-challenger\n              bg-[#170809]\n              pl-2.5\n              pt-2.5\n            ",
                                style: {
                                    gridArea: "1/1/auto/auto",
                                    transform: "none"
                                },
                                children: [(0,
                                o.tZ)("div", {
                                    className: "\n                css-t736bs-GiveawayHomeListItem\n                absolute\n                -bottom-1/2\n                -left-2\n                h-full\n                w-auto\n                rotate-[30deg]\n                transform\n              ",
                                    children: (0,
                                    o.BX)("svg", {
                                        className: "icon h-full w-full text-giveaway-challenger",
                                        viewBox: "0 0 24 24",
                                        children: [(0,
                                        o.tZ)("path", {
                                            fill: "#231111",
                                            d: "M12.192 23.704c-6.456 0-11.69-5.233-11.69-11.69 0-6.456 5.234-11.69 11.69-11.69 6.456 0 11.69 5.234 11.69 11.69 0 6.457-5.234 11.69-11.69 11.69Zm0-16.65-4.96 4.96 4.96 4.96 4.96-4.96-4.96-4.96Z"
                                        }), (0,
                                        o.tZ)("circle", {
                                            cx: "12.192",
                                            cy: "11.949",
                                            r: "6.541",
                                            fill: "#231111"
                                        }), (0,
                                        o.tZ)("path", {
                                            fill: "#18080a",
                                            d: "M9.127 8.38h6.13a.43.43 0 0 1 .349.177l1.644 2.26a.215.215 0 0 1-.016.273l-4.884 5.29a.214.214 0 0 1-.316 0L7.15 11.09a.215.215 0 0 1-.015-.272l1.644-2.26a.43.43 0 0 1 .348-.178Z"
                                        })]
                                    })
                                }), (0,
                                o.tZ)("div", {
                                    className: "flex h-6",
                                    children: (0,
                                    o.BX)("div", {
                                        className: "flex items-center",
                                        children: [(0,
                                        o.tZ)("div", {
                                            className: "h-5 w-5",
                                            children: (0,
                                            o.BX)("svg", {
                                                className: "icon h-full w-full text-giveaway-challenger",
                                                viewBox: "0 0 24 24",
                                                children: [(0,
                                                o.tZ)("path", {
                                                    fill: "currentColor",
                                                    d: "M12.192 23.704c-6.456 0-11.69-5.233-11.69-11.69 0-6.456 5.234-11.69 11.69-11.69 6.456 0 11.69 5.234 11.69 11.69 0 6.457-5.234 11.69-11.69 11.69Zm0-16.65-4.96 4.96 4.96 4.96 4.96-4.96-4.96-4.96Z"
                                                }), (0,
                                                o.tZ)("circle", {
                                                    cx: "12.192",
                                                    cy: "11.949",
                                                    r: "6.541",
                                                    fill: "currentColor"
                                                }), (0,
                                                o.tZ)("path", {
                                                    fill: "#18080a",
                                                    d: "M9.127 8.38h6.13a.43.43 0 0 1 .349.177l1.644 2.26a.215.215 0 0 1-.016.273l-4.884 5.29a.214.214 0 0 1-.316 0L7.15 11.09a.215.215 0 0 1-.015-.272l1.644-2.26a.43.43 0 0 1 .348-.178Z"
                                                })]
                                            })
                                        }), (0,
                                        o.tZ)("p", {
                                            className: "ml-2 text-xs font-bold text-white text-opacity-70",
                                            children: "CHALLENGER"
                                        })]
                                    })
                                })]
                            })
                        }), (0,
                        o.tZ)("div", {
                            className: "\n            relative\n            grid\n            h-36\n            min-w-[90%]\n            snap-start\n            overflow-hidden\n            sm:min-w-[50%]\n            md:min-w-[33.333333%]\n          ",
                            children: (0,
                            o.BX)("div", {
                                className: "\n              relative\n              grid\n              overflow-hidden\n              border-b\n              border-giveaway-legend\n              bg-[#081717]\n              pl-2.5\n              pt-2.5\n            ",
                                style: {
                                    gridArea: "1/1/auto/auto",
                                    transform: "none"
                                },
                                children: [(0,
                                o.tZ)("div", {
                                    className: "\n                css-1c1m3hy-GiveawayHomeListItem\n                absolute\n                -bottom-1/2\n                -left-2\n                h-full\n                w-auto\n                rotate-[30deg]\n                transform\n              ",
                                    children: (0,
                                    o.tZ)("svg", {
                                        className: "icon h-full w-full text-giveaway-legend",
                                        viewBox: "0 0 24 25",
                                        children: (0,
                                        o.tZ)("path", {
                                            fill: "#112223",
                                            d: "M11.694 24.159c-6.456 0-11.69-5.234-11.69-11.69 0-6.457 5.234-11.69 11.69-11.69 6.457 0 11.69 5.233 11.69 11.69 0 6.456-5.233 11.69-11.69 11.69Zm0-16.65-4.96 4.96 4.96 4.96 4.96-4.96-4.96-4.96Z"
                                        })
                                    })
                                }), (0,
                                o.tZ)("div", {
                                    className: "flex h-6",
                                    children: (0,
                                    o.BX)("div", {
                                        className: "flex items-center",
                                        children: [(0,
                                        o.tZ)("div", {
                                            className: "h-5 w-5",
                                            children: (0,
                                            o.tZ)("svg", {
                                                className: "icon h-full w-full text-giveaway-legend",
                                                viewBox: "0 0 24 25",
                                                children: (0,
                                                o.tZ)("path", {
                                                    fill: "currentColor",
                                                    d: "M11.694 24.159c-6.456 0-11.69-5.234-11.69-11.69 0-6.457 5.234-11.69 11.69-11.69 6.457 0 11.69 5.233 11.69 11.69 0 6.456-5.233 11.69-11.69 11.69Zm0-16.65-4.96 4.96 4.96 4.96 4.96-4.96-4.96-4.96Z"
                                                })
                                            })
                                        }), (0,
                                        o.tZ)("p", {
                                            className: "ml-2 text-xs font-bold text-white text-opacity-70",
                                            children: "LEGEND"
                                        })]
                                    })
                                })]
                            })
                        }), (0,
                        o.tZ)("div", {
                            className: "\n            relative\n            grid\n            h-36\n            min-w-[90%]\n            snap-start\n            overflow-hidden\n            sm:min-w-[50%]\n            md:min-w-[33.333333%]\n          ",
                            children: (0,
                            o.BX)("div", {
                                className: "\n              relative\n              grid\n              overflow-hidden\n              border-b\n              border-giveaway-contender\n              bg-[#0D0817]\n              pl-2.5\n              pt-2.5\n            ",
                                style: {
                                    gridArea: "1/1/auto/auto",
                                    transform: "none"
                                },
                                children: [(0,
                                o.tZ)("div", {
                                    className: "\n                css-16t5hxv-GiveawayHomeListItem\n                absolute\n                -bottom-1/2\n                -left-2\n                h-full\n                w-auto\n                rotate-[30deg]\n                transform\n              ",
                                    children: (0,
                                    o.BX)("svg", {
                                        className: "icon h-full w-full text-giveaway-contender",
                                        viewBox: "0 0 25 25",
                                        children: [(0,
                                        o.tZ)("circle", {
                                            cx: "12.547",
                                            cy: "12.478",
                                            r: "11.693",
                                            fill: "#171123"
                                        }), (0,
                                        o.tZ)("path", {
                                            fill: "#0d0818",
                                            d: "M12.547 7.661a5.072 5.072 0 0 1 5.07 5.07 5.072 5.072 0 0 1-5.07 5.07 5.072 5.072 0 0 1-5.07-5.07 5.072 5.072 0 0 1 5.07-5.07Zm0 7.098a2.025 2.025 0 0 0 2.028-2.028 2.025 2.025 0 0 0-2.028-2.028 2.025 2.025 0 0 0-2.028 2.028c0 1.122.906 2.028 2.028 2.028Zm0-2.535c.278 0 .507.228.507.507a.508.508 0 0 1-.507.507.508.508 0 0 1-.507-.507c0-.279.228-.507.507-.507Z"
                                        })]
                                    })
                                }), (0,
                                o.tZ)("div", {
                                    className: "flex h-6",
                                    children: (0,
                                    o.BX)("div", {
                                        className: "flex items-center",
                                        children: [(0,
                                        o.tZ)("div", {
                                            className: "h-5 w-5",
                                            children: (0,
                                            o.BX)("svg", {
                                                className: "icon h-full w-full text-giveaway-contender",
                                                viewBox: "0 0 25 25",
                                                children: [(0,
                                                o.tZ)("circle", {
                                                    cx: "12.547",
                                                    cy: "12.478",
                                                    r: "11.693",
                                                    fill: "currentColor"
                                                }), (0,
                                                o.tZ)("path", {
                                                    fill: "#0d0818",
                                                    d: "M12.547 7.661a5.072 5.072 0 0 1 5.07 5.07 5.072 5.072 0 0 1-5.07 5.07 5.072 5.072 0 0 1-5.07-5.07 5.072 5.072 0 0 1 5.07-5.07Zm0 7.098a2.025 2.025 0 0 0 2.028-2.028 2.025 2.025 0 0 0-2.028-2.028 2.025 2.025 0 0 0-2.028 2.028c0 1.122.906 2.028 2.028 2.028Zm0-2.535c.278 0 .507.228.507.507a.508.508 0 0 1-.507.507.508.508 0 0 1-.507-.507c0-.279.228-.507.507-.507Z"
                                                })]
                                            })
                                        }), (0,
                                        o.tZ)("p", {
                                            className: "ml-2 text-xs font-bold text-white text-opacity-70",
                                            children: "CONTENDER"
                                        })]
                                    })
                                })]
                            })
                        }), (0,
                        o.tZ)("div", {
                            className: "\n            relative\n            grid\n            h-36\n            min-w-[90%]\n            snap-start\n            overflow-hidden\n            sm:min-w-[50%]\n            md:min-w-[33.333333%]\n          ",
                            children: (0,
                            o.BX)("div", {
                                className: "\n              relative\n              grid\n              overflow-hidden\n              border-b\n              border-giveaway-amateur\n              bg-[#08170E]\n              pl-2.5\n              pt-2.5\n            ",
                                style: {
                                    gridArea: "1/1/auto/auto",
                                    transform: "none"
                                },
                                children: [(0,
                                o.tZ)("div", {
                                    className: "\n                css-7qx29q-GiveawayHomeListItem\n                absolute\n                -bottom-1/2\n                -left-2\n                h-full\n                w-auto\n                rotate-[30deg]\n                transform\n              ",
                                    children: (0,
                                    o.BX)("svg", {
                                        className: "icon h-full w-full text-giveaway-amateur",
                                        viewBox: "0 0 24 25",
                                        children: [(0,
                                        o.tZ)("circle", {
                                            cx: "12.049",
                                            cy: "12.478",
                                            r: "11.693",
                                            fill: "#112319"
                                        }), (0,
                                        o.tZ)("path", {
                                            fill: "#08180e",
                                            d: "m15.322 8.644-4.004 4.005.73.732 4.006-4.005a5.175 5.175 0 0 1-4.005 8.446 5.175 5.175 0 0 1-5.173-5.173 5.175 5.175 0 0 1 8.446-4.005Z"
                                        })]
                                    })
                                }), (0,
                                o.tZ)("div", {
                                    className: "flex h-6",
                                    children: (0,
                                    o.BX)("div", {
                                        className: "flex items-center",
                                        children: [(0,
                                        o.tZ)("div", {
                                            className: "h-5 w-5",
                                            children: (0,
                                            o.BX)("svg", {
                                                className: "icon h-full w-full text-giveaway-amateur",
                                                viewBox: "0 0 24 25",
                                                children: [(0,
                                                o.tZ)("circle", {
                                                    cx: "12.049",
                                                    cy: "12.478",
                                                    r: "11.693",
                                                    fill: "currentColor"
                                                }), (0,
                                                o.tZ)("path", {
                                                    fill: "#08180e",
                                                    d: "m15.322 8.644-4.004 4.005.73.732 4.006-4.005a5.175 5.175 0 0 1-4.005 8.446 5.175 5.175 0 0 1-5.173-5.173 5.175 5.175 0 0 1 8.446-4.005Z"
                                                })]
                                            })
                                        }), (0,
                                        o.tZ)("p", {
                                            className: "ml-2 text-xs font-bold text-white text-opacity-70",
                                            children: "AMATEUR"
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
        },
        301: function(e, t, n) {
            "use strict";
            var o, r = n(656), a = n(3), i = n.n(a), s = n(318), l = function() {
                function e(e) {
                    this.parent = e
                }
                return e.prototype.send = function(e, t) {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["do", "message:send", [e, t]])
                }
                ,
                e.prototype.sendText = function(e) {
                    this.send("text", e)
                }
                ,
                e.prototype.sendFile = function(e) {
                    this.send("file", e)
                }
                ,
                e.prototype.sendAnimation = function(e) {
                    this.send("animation", e)
                }
                ,
                e.prototype.sendAudio = function(e) {
                    this.send("audio", e)
                }
                ,
                e.prototype.show = function(e, t) {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["do", "message:show", [e, t]])
                }
                ,
                e.prototype.showText = function(e) {
                    this.show("text", e)
                }
                ,
                e.prototype.showFile = function(e) {
                    this.show("file", e)
                }
                ,
                e.prototype.showAnimation = function(e) {
                    this.show("animation", e)
                }
                ,
                e.prototype.showAudio = function(e) {
                    this.show("audio", e)
                }
                ,
                e.prototype.showPicker = function(e) {
                    this.show("picker", e)
                }
                ,
                e.prototype.showField = function(e) {
                    this.show("field", e)
                }
                ,
                e.prototype.showCarousel = function(e) {
                    this.show("carousel", e)
                }
                ,
                e.prototype.markAsRead = function() {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["do", "message:read"])
                }
                ,
                e.prototype.onMessageSent = function(e) {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["off", "message:sent"]),
                    window.$crisp.push(["on", "message:sent", e])
                }
                ,
                e.prototype.onMessageReceived = function(e) {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["off", "message:received"]),
                    window.$crisp.push(["on", "message:received", e])
                }
                ,
                e.prototype.onMessageComposeSent = function(e) {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["off", "message:compose:sent"]),
                    window.$crisp.push(["on", "message:compose:sent", e])
                }
                ,
                e.prototype.onMessageComposeReceive = function(e) {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["off", "message:compose:received"]),
                    window.$crisp.push(["on", "message:compose:received", e])
                }
                ,
                e
            }(), c = function() {
                function e(e) {
                    this.parent = e
                }
                return e.prototype.setNickname = function(e) {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["set", "user:nickname", [e]])
                }
                ,
                e.prototype.setEmail = function(e, t) {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["set", "user:email", [e, t]])
                }
                ,
                e.prototype.setPhone = function(e) {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["set", "user:phone", [e]])
                }
                ,
                e.prototype.setAvatar = function(e) {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["set", "user:avatar", [e]])
                }
                ,
                e.prototype.setCompany = function(e, t) {
                    var n = {};
                    t && t.url && (n.url = t.url),
                    t && t.description && (n.description = t.description),
                    t && t.employment && (n.employment = [t.employment.title],
                    t.employment.role && n.employment.push(t.employment.role)),
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["set", "user:company", [e, n]])
                }
                ,
                e.prototype.getEmail = function() {
                    return this.parent.isCrispInjected() ? window.$crisp.get("user:email") : null
                }
                ,
                e.prototype.getPhone = function() {
                    return this.parent.isCrispInjected() ? window.$crisp.get("user:phone") : null
                }
                ,
                e.prototype.getNickname = function() {
                    return this.parent.isCrispInjected() ? window.$crisp.get("user:nickname") : null
                }
                ,
                e.prototype.getAvatar = function() {
                    return this.parent.isCrispInjected() ? window.$crisp.get("user:avatar") : null
                }
                ,
                e.prototype.getCompany = function() {
                    return this.parent.isCrispInjected() ? window.$crisp.get("user:company") : null
                }
                ,
                e.prototype.onEmailChanged = function(e) {
                    this.parent.isCrispInjected() && (window.$crisp.push(["off", "user:email:changed"]),
                    window.$crisp.push(["on", "user:email:changed", e]))
                }
                ,
                e.prototype.onPhoneChanged = function(e) {
                    this.parent.isCrispInjected() && (window.$crisp.push(["off", "user:phone:changed"]),
                    window.$crisp.push(["on", "user:phone:changed", e]))
                }
                ,
                e.prototype.onNicknameChanged = function(e) {
                    this.parent.isCrispInjected() && (window.$crisp.push(["off", "user:nickname:changed"]),
                    window.$crisp.push(["on", "user:nickname:changed", e]))
                }
                ,
                e.prototype.onAvatarChanged = function(e) {
                    this.parent.isCrispInjected() && (window.$crisp.push(["off", "user:avatar:changed"]),
                    window.$crisp.push(["on", "user:avatar:changed", e]))
                }
                ,
                e
            }(), u = function() {
                function e(e) {
                    this.parent = e
                }
                return e.prototype.run = function(e) {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["do", "trigger:run", [e]])
                }
                ,
                e
            }();
            !function(e) {
                e.Red = "red",
                e.Orange = "orange",
                e.Yellow = "yellow",
                e.Green = "green",
                e.Blue = "blue",
                e.Purple = "purple",
                e.Pink = "pink",
                e.Brown = "brown",
                e.Grey = "grey",
                e.Black = "black"
            }(o || (o = {}));
            var d, p, f = function() {
                function e(e) {
                    this.parent = e
                }
                return e.prototype.reset = function(e) {
                    void 0 === e && (e = !1),
                    this.parent.isCrispInjected() && window.$crisp.do("session:reset", [e])
                }
                ,
                e.prototype.setSegments = function(e, t) {
                    this.parent.createSingletonIfNecessary(),
                    $crisp.push(["set", "session:segments", [e, t]])
                }
                ,
                e.prototype.setData = function(e) {
                    var t = this
                      , n = [];
                    Object.entries(e).forEach((function(e) {
                        t.isValidDataValue(e[0]) && n.push([e[0], e[1]])
                    }
                    )),
                    this.parent.createSingletonIfNecessary(),
                    $crisp.push(["set", "session:data", [n]])
                }
                ,
                e.prototype.pushEvent = function(e, t, n) {
                    void 0 === t && (t = {}),
                    void 0 === n && (n = o.Blue),
                    this.parent.isCrispInjected() && window.$crisp.push(["set", "session:event", [[[e, t, n]]]])
                }
                ,
                e.prototype.getData = function(e) {
                    if (this.parent.isCrispInjected())
                        return window.$crisp.get("session:data", e)
                }
                ,
                e.prototype.getIdentifier = function() {
                    return this.parent.isCrispInjected() ? window.$crisp.get("session:identifier") : null
                }
                ,
                e.prototype.onLoaded = function(e) {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["off", "session:loaded"]),
                    window.$crisp.push(["on", "session:loaded", e])
                }
                ,
                e.prototype.isValidDataValue = function(e) {
                    return "string" == typeof e || "number" == typeof e || "boolean" == typeof e
                }
                ,
                e
            }(), h = function() {
                function e(e) {
                    this.parent = e
                }
                return e.prototype.show = function() {
                    this.parent.autoInjectIfNecessasy(),
                    window.$crisp.push(["do", "chat:show"])
                }
                ,
                e.prototype.hide = function() {
                    this.parent.autoInjectIfNecessasy(),
                    window.$crisp.push(["do", "chat:hide"])
                }
                ,
                e.prototype.open = function() {
                    this.parent.autoInjectIfNecessasy(),
                    window.$crisp.push(["do", "chat:open"])
                }
                ,
                e.prototype.close = function() {
                    this.parent.isCrispInjected() && window.$crisp.push(["do", "chat:close"])
                }
                ,
                e.prototype.unreadCount = function() {
                    return this.parent.isCrispInjected() ? window.$crisp.get("chat:unread:count") : 0
                }
                ,
                e.prototype.isChatOpened = function() {
                    return !!this.parent.isCrispInjected() && window.$crisp.is("chat:opened")
                }
                ,
                e.prototype.isVisible = function() {
                    return !!this.parent.isCrispInjected() && window.$crisp.is("chat:visible")
                }
                ,
                e.prototype.onChatInitiated = function(e) {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["off", "chat:initiated"]),
                    window.$crisp.push(["on", "chat:initiated", e])
                }
                ,
                e.prototype.onChatOpened = function(e) {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["off", "chat:opened"]),
                    window.$crisp.push(["on", "chat:opened", e])
                }
                ,
                e.prototype.onChatClosed = function(e) {
                    this.parent.createSingletonIfNecessary(),
                    window.$crisp.push(["off", "chat:closed"]),
                    window.$crisp.push(["on", "chat:closed", e])
                }
                ,
                e
            }();
            !function(e) {
                e.Default = "default",
                e.Amber = "amber",
                e.Black = "black",
                e.Blue = "blue",
                e.BlueGrey = "blue_grey",
                e.LightBlue = "light_blue",
                e.Brown = "brown",
                e.Cyan = "cyan",
                e.Green = "green",
                e.LightGreen = "light_green",
                e.Grey = "grey",
                e.Indigo = "indigo",
                e.Orange = "orange",
                e.DeepOrange = "deep_orange",
                e.Pink = "pink",
                e.Purple = "purple",
                e.DeepPurple = "deep_purple",
                e.Red = "red",
                e.Teal = "teal"
            }(d || (d = {})),
            function(e) {
                e.Left = "left",
                e.Right = "right"
            }(p || (p = {}));
            var m = new (function() {
                function e() {
                    this.clientUrl = "https://client.crisp.chat/l.js",
                    this.websiteId = "",
                    this.autoload = !0,
                    this.injected = !1,
                    this.chat = new h(this),
                    this.session = new f(this),
                    this.user = new c(this),
                    this.message = new l(this),
                    this.trigger = new u(this)
                }
                return e.prototype.configure = function(e, t) {
                    void 0 === t && (t = {}),
                    this.websiteId = e,
                    this.tokenId = t.tokenId,
                    this.locale = t.locale,
                    this.sessionMerge = t.sessionMerge,
                    this.cookieDomain = t.cookieDomain,
                    this.cookieExpire = t.cookieExpire,
                    this.lockFullview = t.lockFullview,
                    this.lockMaximized = t.lockMaximized,
                    this.safeMode = t.safeMode,
                    void 0 !== t.clientUrl && (this.clientUrl = t.clientUrl),
                    void 0 !== t.autoload && (this.autoload = t.autoload),
                    this.autoload && this.load()
                }
                ,
                e.prototype.load = function() {
                    var e = document.getElementsByTagName("head");
                    if (this.createSingletonIfNecessary(),
                    !0 !== this.isCrispInjected()) {
                        if (!this.websiteId)
                            throw new Error("websiteId must be set before loading Crisp");
                        if (window.CRISP_WEBSITE_ID = this.websiteId,
                        window.CRISP_RUNTIME_CONFIG = {},
                        this.tokenId && (window.CRISP_TOKEN_ID = this.tokenId),
                        this.sessionMerge && (window.CRISP_RUNTIME_CONFIG.session_merge = !0),
                        this.locale && (window.CRISP_RUNTIME_CONFIG.locale = this.locale),
                        this.lockFullview && (window.CRISP_RUNTIME_CONFIG.lock_full_view = !0),
                        this.lockMaximized && (window.CRISP_RUNTIME_CONFIG.lock_maximized = !0),
                        this.cookieDomain && (window.CRISP_COOKIE_DOMAIN = this.cookieDomain),
                        this.cookieExpire && (window.CRISP_COOKIE_EXPIRE = this.cookieExpire),
                        !e || !e[0])
                            return this.deferredLoading();
                        !0 === this.safeMode && this.setSafeMode(!0);
                        var t = document.createElement("script");
                        t.src = this.clientUrl,
                        t.async = !0,
                        e[0].appendChild(t),
                        this.injected = !0
                    }
                }
                ,
                e.prototype.setTokenId = function(e) {
                    this.tokenId = e,
                    !0 === this.isCrispInjected() && (e ? window.CRISP_TOKEN_ID = e : delete window.CRISP_TOKEN_ID)
                }
                ,
                e.prototype.setZIndex = function(e) {
                    this.createSingletonIfNecessary(),
                    window.$crisp.push(["config", "container:index", [e]])
                }
                ,
                e.prototype.setColorTheme = function(e) {
                    this.createSingletonIfNecessary(),
                    window.$crisp.push(["config", "color:theme", [e]])
                }
                ,
                e.prototype.setHideOnAway = function(e) {
                    this.createSingletonIfNecessary(),
                    window.$crisp.push(["config", "hide:on:away", [e]])
                }
                ,
                e.prototype.setHideOnMobile = function(e) {
                    this.createSingletonIfNecessary(),
                    window.$crisp.push(["config", "hide:on:mobile", [e]])
                }
                ,
                e.prototype.setPosition = function(e) {
                    this.createSingletonIfNecessary(),
                    $crisp.push(["config", "position:reverse", [e === p.Left]])
                }
                ,
                e.prototype.setAvailabilityTooltip = function(e) {
                    this.createSingletonIfNecessary(),
                    window.$crisp.push(["config", "availability:tooltip", [e]])
                }
                ,
                e.prototype.setVacationMode = function(e) {
                    this.createSingletonIfNecessary(),
                    window.$crisp.push(["config", "hide:vacation", [e]])
                }
                ,
                e.prototype.setSafeMode = function(e) {
                    void 0 === e && (e = !0),
                    this.createSingletonIfNecessary(),
                    window.$crisp.push(["safe", e])
                }
                ,
                e.prototype.muteSound = function(e) {
                    this.createSingletonIfNecessary(),
                    window.$crisp.push(["config", "sound:mute", [e]])
                }
                ,
                e.prototype.toggleOperatorCount = function(e) {
                    this.createSingletonIfNecessary(),
                    window.$crisp.push(["config", "show:operator:count", [e]])
                }
                ,
                e.prototype.createSingletonIfNecessary = function() {
                    void 0 === window.$crisp && (window.$crisp = [])
                }
                ,
                e.prototype.autoInjectIfNecessasy = function() {
                    this.isCrispInjected() || this.load()
                }
                ,
                e.prototype.isCrispInjected = function() {
                    return !!(!0 === this.injected || window.$crisp && window.$crisp.is)
                }
                ,
                e.prototype.deferredLoading = function() {
                    var e = this;
                    document.addEventListener("DOMContentLoaded", (function() {
                        e.load()
                    }
                    ))
                }
                ,
                e
            }())
              , y = n(0)
              , g = n.t(y, 2)
              , w = n(6)
              , v = n(10)
              , b = n(317)
              , k = n(728)
              , z = n(682)
              , x = n(623)
              , j = n(2)
              , C = n(683)
              , S = n(42)
              , E = n(31)
              , N = function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , n = (0,
                y.useState)(t)
                  , o = (0,
                b.Z)(n, 2)
                  , r = o[0]
                  , a = o[1];
                return (0,
                y.useEffect)((function() {
                    var t = window.matchMedia(e)
                      , n = !0
                      , o = function() {
                        n && (t.matches ? a(!0) : a(!1))
                    };
                    return t.addEventListener("change", o),
                    a(t.matches),
                    function() {
                        n = !1,
                        t.removeEventListener("change", o)
                    }
                }
                ), [e]),
                r
            }
              , O = n(32)
              , T = (0,
            y.createContext)(null)
              , Z = function(e) {
                var t = e.userId
                  , n = e.statsSocketUrl
                  , o = e.children
                  , r = (0,
                y.useRef)()
                  , a = (0,
                y.useState)(null)
                  , i = (0,
                b.Z)(a, 2)
                  , l = i[0]
                  , c = i[1];
                return (0,
                y.useEffect)((function() {
                    return r.current || (r.current = (0,
                    O.io)(n, {
                        transports: ["websocket"]
                    })),
                    r.current.disconnected && (r.current.connect(),
                    r.current.emit("NEW_USER", t),
                    r.current.on("stats", (function(e) {
                        c(JSON.parse(e))
                    }
                    ))),
                    function() {
                        r.current.disconnect(),
                        r.current.off("stats")
                    }
                }
                ), []),
                (0,
                s.tZ)(T.Provider, {
                    value: {
                        stats: l,
                        socket: r.current
                    },
                    children: o
                })
            }
              , I = function() {
                var e = (0,
                y.useContext)(T);
                if (!e)
                    throw new Error("useStatsContext() must be used within a <StatsContextProvider />");
                return e
            }
              , P = n(1)
              , L = "cookies-banner";
            function A() {
                var e = (0,
                E.Z)()
                  , t = (0,
                y.useState)((function() {
                    return "true" !== localStorage.getItem(L)
                }
                ))
                  , n = (0,
                b.Z)(t, 2)
                  , o = n[0]
                  , r = n[1];
                if (!o)
                    return null;
                var a = function() {
                    window.localStorage.setItem(L, "true"),
                    r(!1)
                };
                return (0,
                s.BX)("div", {
                    className: "fixed bottom-0 right-0 z-[9999] flex w-full translate-x-0 cursor-pointer rounded-xl sm:bottom-5 sm:right-5 sm:w-[323px] sm:max-w-full",
                    style: {
                        background: "rgba(13, 16, 22, 0.9)"
                    },
                    onClick: a,
                    children: [(0,
                    s.tZ)("div", {
                        className: "justifiy-center ml-5 flex shrink-0 items-center text-gold",
                        children: (0,
                        s.tZ)("svg", {
                            className: "inline-block h-[46px] w-[59.5px]",
                            children: (0,
                            s.tZ)("use", {
                                xlinkHref: (0,
                                P.iU)("cookies")
                            })
                        })
                    }), (0,
                    s.BX)("div", {
                        className: "p-5 text-white",
                        children: [(0,
                        s.tZ)("p", {
                            className: "text-md font-semibold uppercase leading-none",
                            children: e("cookieBanner.title")
                        }), (0,
                        s.tZ)("p", {
                            className: "mt-1.5 text-[9.625px] font-extralight leading-[1.3]",
                            children: e("cookieBanner.message")
                        })]
                    }), (0,
                    s.tZ)("button", {
                        className: "absolute right-0 top-0 flex h-[37px] w-[34px] cursor-pointer items-center justify-center p-[10px] font-extralight leading-none text-white/50 transition duration-300 hover:scale-125 hover:text-white",
                        onClick: a,
                        children: (0,
                        s.tZ)("svg", {
                            className: "block max-h-full w-full",
                            children: (0,
                            s.tZ)("use", {
                                xlinkHref: (0,
                                P.iU)("close")
                            })
                        })
                    })]
                })
            }
            var D = n(4)
              , R = n(652)
              , B = n(657)
              , M = ["component"];
            function F(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(n), !0).forEach((function(t) {
                        (0,
                        R.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var U, H, G, $, Y = (0,
            y.createContext)(null), V = function(e) {
                var t = e.component
                  , n = (0,
                B.Z)(e, M);
                return (0,
                s.tZ)(Y.Provider, _({
                    value: t
                }, n))
            }, X = function(e) {
                var t = (0,
                y.useContext)(Y) || "a";
                return (0,
                s.tZ)(t, _({}, e))
            }, W = function() {
                var e = (0,
                y.useState)(!1)
                  , t = (0,
                b.Z)(e, 2)
                  , n = t[0]
                  , o = t[1]
                  , r = (0,
                y.useState)(!1)
                  , a = (0,
                b.Z)(r, 2)
                  , i = a[0]
                  , l = a[1]
                  , c = (0,
                S.b)()
                  , u = c.isLoggedIn
                  , d = c.crispOpen
                  , p = (0,
                E.Z)()
                  , f = N(P.BC.js.md);
                return i && !d && u ? (0,
                s.BX)(k.E.div, {
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
                        duration: .3
                    },
                    className: "absolute bottom-0 left-24 max-w-sm overflow-hidden rounded-xl bg-navy-800 text-center text-white shadow-sm",
                    children: [(0,
                    s.BX)("p", {
                        className: "px-8 py-6 text-sm sm:whitespace-nowrap",
                        children: [p("crisp.unavailableTitle"), (0,
                        s.tZ)("br", {}), (0,
                        s.tZ)("span", {
                            className: "text-gold",
                            children: p("crisp.unavailableDescription")
                        })]
                    }), (0,
                    s.BX)("div", {
                        className: "flex items-center justify-center gap-5 bg-navy-600 px-8 py-5",
                        children: [(0,
                        s.tZ)(X, {
                            href: "/panel/profil/support-chat",
                            className: "button button-primary px-12",
                            children: p("crisp.yes")
                        }), (0,
                        s.tZ)("button", {
                            type: "button",
                            className: "button button-primary border-gold bg-navy-600 px-6 hover:bg-navy-500",
                            onClick: function() {
                                l(!1),
                                o(!1)
                            },
                            children: p("crisp.no")
                        })]
                    })]
                }, "crispOfflineAlert") : u ? (0,
                s.tZ)("button", {
                    className: "flex h-19 w-19 items-center justify-center rounded-full border border-gold-400 bg-navy-750 shadow-[0_0px_50px_rgba(221,169,73,0.15)] transition-all hover:border-gold-300 hover:shadow-[0_0px_50px_rgba(221,169,73,0.4)]",
                    onClick: d ? function() {
                        n && f ? (m.chat.close(),
                        o(!1)) : (m.chat.open(),
                        o(!0))
                    }
                    : function() {
                        i ? (o(!1),
                        l(!1)) : (o(!0),
                        l(!0))
                    }
                    ,
                    children: n && f ? (0,
                    s.tZ)(k.E.div, {
                        initial: {
                            opacity: 0,
                            rotate: 30,
                            scale: .75
                        },
                        animate: {
                            opacity: 1,
                            rotate: 0,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            rotate: 30,
                            scale: .75
                        },
                        transition: {
                            duration: .3
                        },
                        children: (0,
                        s.tZ)(D.Tw, {
                            className: "h-8 w-8 text-gold-500"
                        })
                    }, "close") : (0,
                    s.tZ)(k.E.div, {
                        initial: {
                            opacity: 0,
                            scale: .75
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: .75
                        },
                        transition: {
                            duration: .3
                        },
                        children: (0,
                        s.tZ)(D.DT, {
                            className: "h-8 w-8 text-gold-500"
                        })
                    }, "open")
                }) : null
            }, q = function() {
                var e = (0,
                y.useState)(!1)
                  , t = (0,
                b.Z)(e, 2)
                  , n = t[0]
                  , o = t[1];
                return (0,
                y.useEffect)((function() {
                    var e = (0,
                    x.Z)((function() {
                        var e = window.scrollY;
                        o(e > 1100)
                    }
                    ), 200);
                    return window.addEventListener("scroll", e),
                    function() {
                        window.removeEventListener("scroll", e)
                    }
                }
                ), []),
                (0,
                s.tZ)(z.M, {
                    initial: !1,
                    children: n && (0,
                    s.tZ)(k.E.div, {
                        initial: {
                            opacity: 0,
                            height: 0,
                            marginTop: 0
                        },
                        animate: {
                            opacity: 1,
                            height: "4.75rem",
                            marginTop: 25,
                            transition: {
                                duration: .3
                            }
                        },
                        exit: {
                            opacity: 0,
                            height: 0,
                            marginTop: 0,
                            transition: {
                                duration: .3
                            }
                        },
                        className: "!hidden md:!block",
                        children: (0,
                        s.tZ)("button", {
                            className: "flex aspect-square w-19 items-center justify-center overflow-hidden rounded-full bg-navy-750 transition-all duration-200 hover:border-gold-300 hover:shadow-[0_0px_50px_rgba(221,169,73,0.4)]",
                            onClick: function() {
                                return window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                })
                            },
                            children: (0,
                            s.tZ)(D.i7, {
                                className: "h-8 w-8 text-white"
                            })
                        })
                    }, "scrollToTop")
                })
            }, K = function() {
                var e = I().stats
                  , t = (0,
                j.$G)().t
                  , n = (0,
                C.YD)({
                    threshold: .5
                })
                  , o = (0,
                b.Z)(n, 3)
                  , r = o[0]
                  , a = o[1]
                  , i = o[2];
                return (0,
                s.BX)(s.HY, {
                    children: [(0,
                    s.tZ)("div", {
                        className: (0,
                        P.cn)("fixed bottom-[24px] left-6 z-50", a ? "absolute" : "fixed"),
                        style: {
                            bottom: a ? i.boundingClientRect.height / 2 + 24 : 24
                        },
                        children: (0,
                        s.BX)(z.M, {
                            initial: !1,
                            children: [m.isCrispInjected() && (0,
                            s.tZ)(W, {}, "helpButton"), (0,
                            s.tZ)(q, {}, "scrollToTopButton")]
                        })
                    }), (0,
                    s.tZ)(A, {}), (0,
                    s.BX)("footer", {
                        ref: r,
                        className: "bg-navy-750",
                        children: [(0,
                        s.tZ)("div", {
                            className: "border-b border-navy-600",
                            children: (0,
                            s.BX)("div", {
                                className: "container flex justify-around gap-2 py-6 sm:gap-10 lg:py-9 xxl:justify-between",
                                children: [(0,
                                s.BX)("div", {
                                    className: "flex min-w-fit items-center gap-x-2.5 sm:gap-x-3 lg:gap-x-5",
                                    children: [(0,
                                    s.tZ)("svg", {
                                        className: "mt-[0.2rem] h-5 w-5 text-gold sm:h-7 sm:w-7 lg:h-10 lg:w-10",
                                        children: (0,
                                        s.tZ)("use", {
                                            xlinkHref: (0,
                                            P.iU)("online")
                                        })
                                    }), (0,
                                    s.BX)("div", {
                                        children: [(0,
                                        s.tZ)("span", {
                                            className: "block text-base font-semibold tabular-nums leading-none text-gold sm:text-xl lg:text-2xl",
                                            children: (0,
                                            P.uf)((null == e ? void 0 : e.countOnline) || 0)
                                        }), (0,
                                        s.tZ)("span", {
                                            className: "block text-10px uppercase leading-none text-navy-100 md:text-xs",
                                            children: t("online")
                                        })]
                                    })]
                                }), (0,
                                s.BX)("div", {
                                    className: "flex min-w-fit items-center gap-x-2.5 sm:gap-x-3 lg:gap-x-5",
                                    children: [(0,
                                    s.tZ)("svg", {
                                        className: "mt-[0.2rem] h-5 w-5 text-gold sm:h-7 sm:w-7 lg:h-10 lg:w-10",
                                        children: (0,
                                        s.tZ)("use", {
                                            xlinkHref: (0,
                                            P.iU)("user4")
                                        })
                                    }), (0,
                                    s.BX)("div", {
                                        children: [(0,
                                        s.tZ)("span", {
                                            className: "block text-base font-semibold tabular-nums leading-none text-gold sm:text-xl lg:text-2xl",
                                            children: (0,
                                            P.uf)((null == e ? void 0 : e.countUsers) || 0)
                                        }), (0,
                                        s.tZ)("span", {
                                            className: "block text-10px uppercase leading-none text-navy-100 md:text-xs",
                                            children: t("users")
                                        })]
                                    })]
                                }), (0,
                                s.BX)("div", {
                                    className: "flex min-w-fit items-center gap-x-2.5 sm:gap-x-3 lg:gap-x-5",
                                    children: [(0,
                                    s.tZ)("svg", {
                                        className: "mt-[0.2rem] h-5 w-5 text-gold sm:h-7 sm:w-7 lg:h-10 lg:w-10",
                                        children: (0,
                                        s.tZ)("use", {
                                            xlinkHref: (0,
                                            P.iU)("key2")
                                        })
                                    }), (0,
                                    s.BX)("div", {
                                        children: [(0,
                                        s.tZ)("span", {
                                            className: "block text-base font-semibold tabular-nums leading-none text-gold sm:text-xl lg:text-2xl",
                                            children: (0,
                                            P.uf)((null == e ? void 0 : e.countCasesOpen) || 0)
                                        }), (0,
                                        s.tZ)("span", {
                                            className: "block text-10px uppercase leading-none text-navy-100 md:text-xs",
                                            children: t("openedCases")
                                        })]
                                    })]
                                }), (0,
                                s.BX)("div", {
                                    className: "hidden min-w-fit items-center gap-x-2.5 sm:gap-x-3 lg:gap-x-5 xl:flex",
                                    children: [(0,
                                    s.tZ)("svg", {
                                        className: "mt-[0.2rem] h-7 w-7 text-gold lg:h-10 lg:w-10",
                                        children: (0,
                                        s.tZ)("use", {
                                            xlinkHref: (0,
                                            P.iU)("upgradeCircle")
                                        })
                                    }), (0,
                                    s.BX)("div", {
                                        children: [(0,
                                        s.tZ)("span", {
                                            className: "block text-base font-semibold tabular-nums leading-none text-gold sm:text-xl lg:text-2xl",
                                            children: (0,
                                            P.uf)((null == e ? void 0 : e.countUpgrade) || 0)
                                        }), (0,
                                        s.tZ)("span", {
                                            className: "block text-10px uppercase leading-none text-navy-100 md:text-xs",
                                            children: t("upgrades")
                                        })]
                                    })]
                                }), (0,
                                s.BX)("div", {
                                    className: "hidden min-w-fit items-center gap-x-2.5 sm:gap-x-3 md:flex lg:gap-x-5",
                                    children: [(0,
                                    s.tZ)("svg", {
                                        className: "mt-[0.2rem] h-7 w-7 text-gold lg:h-10 lg:w-10",
                                        children: (0,
                                        s.tZ)("use", {
                                            xlinkHref: (0,
                                            P.iU)("swords")
                                        })
                                    }), (0,
                                    s.BX)("div", {
                                        children: [(0,
                                        s.tZ)("span", {
                                            className: "block text-base font-semibold tabular-nums leading-none text-gold sm:text-xl lg:text-2xl",
                                            children: (0,
                                            P.uf)((null == e ? void 0 : e.countBattles) || 0)
                                        }), (0,
                                        s.tZ)("span", {
                                            className: "block text-10px uppercase leading-none text-navy-100 md:text-xs",
                                            children: t("caseBattles")
                                        })]
                                    })]
                                })]
                            })
                        }), (0,
                        s.tZ)("div", {
                            className: "border-b border-navy-600 bg-navy-600 lg:bg-transparent",
                            children: (0,
                            s.BX)("div", {
                                className: "container flex gap-0.5",
                                children: [(0,
                                s.tZ)("div", {
                                    className: "flex w-1/6 flex-shrink-0 scale-[1.2] items-center justify-center sm:scale-100 md:w-full md:flex-shrink lg:aspect-video lg:h-20 lg:bg-navy-600",
                                    children: (0,
                                    s.tZ)("img", {
                                        className: "block h-full w-full object-contain",
                                        src: (0,
                                        P.$o)("footer-payment-providers/visa.webp")
                                    })
                                }), (0,
                                s.tZ)("div", {
                                    className: "flex w-1/6 flex-shrink-0 scale-[1.2] items-center justify-center sm:scale-100 md:w-full md:flex-shrink lg:aspect-video lg:h-20 lg:bg-navy-600",
                                    children: (0,
                                    s.tZ)("img", {
                                        className: "block h-full w-full object-contain",
                                        src: (0,
                                        P.$o)("footer-payment-providers/mastercard.webp")
                                    })
                                }), (0,
                                s.tZ)("div", {
                                    className: "flex w-1/6 flex-shrink-0 scale-[1.2] items-center justify-center sm:scale-100 md:w-full md:flex-shrink lg:aspect-video lg:h-20 lg:bg-navy-600",
                                    children: (0,
                                    s.tZ)("img", {
                                        className: "block h-full w-full object-contain",
                                        src: (0,
                                        P.$o)("footer-payment-providers/blik.webp")
                                    })
                                }), (0,
                                s.tZ)("div", {
                                    className: "flex w-1/6 flex-shrink-0 scale-[1.2] items-center justify-center sm:scale-100 md:w-full md:flex-shrink lg:aspect-video lg:h-20 lg:bg-navy-600",
                                    children: (0,
                                    s.tZ)("img", {
                                        className: "block h-full w-full object-contain",
                                        src: (0,
                                        P.$o)("footer-payment-providers/sofort.webp")
                                    })
                                }), (0,
                                s.tZ)("div", {
                                    className: "flex w-1/6 flex-shrink-0 scale-[1.2] items-center justify-center sm:scale-100 md:w-full md:flex-shrink lg:aspect-video lg:h-20 lg:bg-navy-600",
                                    children: (0,
                                    s.tZ)("img", {
                                        className: "block h-full w-full object-contain",
                                        src: (0,
                                        P.$o)("footer-payment-providers/trustly.webp")
                                    })
                                }), (0,
                                s.tZ)("div", {
                                    className: "flex w-1/6 flex-shrink-0 scale-[1.2] items-center justify-center sm:scale-100 md:w-full md:flex-shrink lg:aspect-video lg:h-20 lg:bg-navy-600",
                                    children: (0,
                                    s.tZ)("img", {
                                        className: "block h-full w-full object-contain",
                                        src: (0,
                                        P.$o)("footer-payment-providers/paypal.webp")
                                    })
                                }), (0,
                                s.tZ)("div", {
                                    className: "hidden w-full items-center justify-center text-11px font-bold text-navy-200 lg:flex lg:aspect-video lg:h-20 lg:bg-navy-600",
                                    children: t("footer.andMore")
                                })]
                            })
                        }), (0,
                        s.BX)("div", {
                            className: "container mx-auto items-center gap-20 pb-9 lg:flex lg:items-start lg:justify-between lg:pb-0",
                            children: [(0,
                            s.BX)("div", {
                                className: "flex items-center justify-between gap-x-5 py-9 lg:flex-col lg:items-start lg:justify-start lg:gap-x-12",
                                children: [(0,
                                s.BX)("svg", {
                                    viewBox: "0 0 269.2 67.4",
                                    className: "block w-48 fill-navy-100",
                                    children: [(0,
                                    s.tZ)("path", {
                                        d: "M179.3 17.5V55h-5.2l-.3-4.2c-2.1 3.4-5.6 4.7-9.2 4.7-7.7 0-13.5-5-13.5-13.8 0-9 5.7-13.8 13.4-13.8 3.2 0 7.6 1.6 9.3 4.7V17.5h5.5zm-22.7 24.3c0 5.3 3.7 8.6 8.4 8.6 4.6 0 8.4-3.4 8.4-8.6 0-5.1-3.8-8.6-8.4-8.6-4.7 0-8.4 3.1-8.4 8.6zm35.3-13.2l.4 3.5c1.9-3.4 4.9-4.1 7.8-4.1 2.6 0 5 .9 6.5 2.3l-2.5 4.8a6.5 6.5 0 00-4.7-1.6c-3.8 0-7.1 2.4-7.1 7.2V55h-5.5V28.6h5.1zm43.4 13.2c0 7.8-5.4 13.7-13.7 13.7-8.3 0-13.6-5.9-13.6-13.7S213.4 28 221.6 28c8.1 0 13.7 6 13.7 13.8zm-21.8 0c0 4.7 3.1 8.6 8.1 8.6 5.1 0 8.1-3.9 8.1-8.6s-3.3-8.7-8.1-8.7c-5.1 0-8.1 4-8.1 8.7zm27.6 25.5V28.6h5.2l.3 4.3a11 11 0 019.3-4.8c7.9.1 13.3 5.8 13.3 13.8s-5.1 13.8-13.3 13.8c-3.2 0-7.3-1.2-9.3-4.4v16.1h-5.5v-.1zm22.7-25.5c0-5-3.3-8.4-8.4-8.4s-8.3 3.7-8.3 8.4 3.5 8.4 8.3 8.4a8 8 0 008.4-8.4zM151.1 62h13.6v5.3h-13.6V62z"
                                    }), (0,
                                    s.tZ)("path", {
                                        d: "M73.1 17.5v21.9l9.8-10.8h6.7v.3L78.2 41l13 13.6v.4h-6.8L73.1 42.8V55h-5.6V17.5h5.6zm24.5 26.3c.5 4 3.8 6.6 8.6 6.6 2.7 0 6.1-1 7.7-2.8l3.6 3.5c-2.7 3-7.3 4.5-11.4 4.5-8.7 0-14.3-5.5-14.3-14 0-8 5.6-13.8 13.9-13.8 8.5 0 14.3 5.2 13.3 16H97.6zm16.1-4.6c-.3-4.2-3.4-6.4-7.8-6.4-4 0-7.3 2.2-8.2 6.4h16zm35.4-10.6l-16.7 38.7h-6.1l5.5-12.6-10.6-26h6.4l4.6 12.5 2.6 7.5 2.8-7.4 5.3-12.6h6.2v-.1zM25 24.5h6.7v9.1H25v-9.1zm0 14h6.7V63H25V38.5zm-4.8-4.9H4.6c-2.5 0-4.6-2-4.6-4.6 0-2.5 2-4.6 4.6-4.6h15.6v9.2zm0 29.4C11.8 63 5 56.2 5 47.8v-9.3h15.2V63zm16.3-29.4h15.6c2.5 0 4.6-2 4.6-4.6 0-2.5-2-4.6-4.6-4.6H36.5v9.2zm0 29.4c8.4 0 15.2-6.8 15.2-15.2v-9.3H36.5V63zM24.4 20.1L9.2 15.8c-1.1-.3-1.3-1.9-.4-2.5L19.2 6c.7-.5 1.6-.2 1.9.6L26 18.1c.4 1.1-.5 2.3-1.6 2zm5.8-1.7L39.1.8c.5-1 1.8-1 2.3-.1l8.9 14.9c.5.9 0 2-.9 2.1l-17.8 2.8c-1.1.1-1.9-1.1-1.4-2.1z"
                                    })]
                                }), (0,
                                s.BX)("div", {
                                    children: [(0,
                                    s.tZ)("p", {
                                        className: "mb-2.5 hidden text-11px font-bold text-navy-100 md:block lg:mt-5",
                                        children: t("followUs")
                                    }), (0,
                                    s.BX)("div", {
                                        className: "flex gap-x-3",
                                        children: [(0,
                                        s.tZ)(X, {
                                            href: "https://twitter.com/keydropcom/",
                                            target: "_blank",
                                            rel: "noopener noreferrer nofollow",
                                            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-navy-600 p-2 transition-colors duration-200 hover:text-white lg:h-10 lg:w-10",
                                            children: (0,
                                            s.tZ)(D.Jf, {
                                                className: "block h-4 w-4"
                                            })
                                        }), (0,
                                        s.tZ)(X, {
                                            href: "https://instagram.com/keydropcom_official/",
                                            target: "_blank",
                                            rel: "noopener noreferrer nofollow",
                                            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-navy-600 p-2 transition-colors duration-200 hover:text-white lg:h-10 lg:w-10",
                                            children: (0,
                                            s.tZ)("svg", {
                                                className: "block h-5 w-5",
                                                children: (0,
                                                s.tZ)("use", {
                                                    xlinkHref: (0,
                                                    P.iU)("instagram")
                                                })
                                            })
                                        }), (0,
                                        s.tZ)(X, {
                                            href: "https://facebook.com/keydropcom",
                                            target: "_blank",
                                            rel: "noopener noreferrer nofollow",
                                            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-navy-600 p-2 transition-colors duration-200 hover:text-white lg:h-10 lg:w-10",
                                            children: (0,
                                            s.tZ)("svg", {
                                                className: "block h-5 w-5",
                                                children: (0,
                                                s.tZ)("use", {
                                                    xlinkHref: (0,
                                                    P.iU)("facebook")
                                                })
                                            })
                                        }), (0,
                                        s.tZ)(X, {
                                            href: "https://steamcommunity.com/groups/csbulletsgo",
                                            target: "_blank",
                                            rel: "noopener noreferrer nofollow",
                                            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-navy-600 p-2 transition-colors duration-200 hover:text-white lg:h-10 lg:w-10",
                                            children: (0,
                                            s.tZ)("svg", {
                                                className: "block h-5 w-5",
                                                children: (0,
                                                s.tZ)("use", {
                                                    xlinkHref: (0,
                                                    P.iU)("steam-circle")
                                                })
                                            })
                                        }), (0,
                                        s.tZ)(X, {
                                            href: "https://discord.com/invite/keydrop",
                                            target: "_blank",
                                            rel: "noopener noreferrer nofollow",
                                            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-navy-600 p-2 transition-colors duration-200 hover:text-white lg:h-10 lg:w-10",
                                            children: (0,
                                            s.tZ)("svg", {
                                                className: "block h-5 w-5",
                                                children: (0,
                                                s.tZ)("use", {
                                                    xlinkHref: (0,
                                                    P.iU)("discord")
                                                })
                                            })
                                        }), (0,
                                        s.tZ)(X, {
                                            href: "https://t.me/+XIpzDRRB_-ozMmU0",
                                            target: "_blank",
                                            rel: "noopener noreferrer nofollow",
                                            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-navy-600 p-2 transition-colors duration-200 hover:text-white lg:h-10 lg:w-10",
                                            children: (0,
                                            s.tZ)("svg", {
                                                className: "block h-5 w-5",
                                                children: (0,
                                                s.tZ)("use", {
                                                    xlinkHref: (0,
                                                    P.iU)("telegram")
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            }), (0,
                            s.BX)("div", {
                                className: "flex justify-between gap-x-4 gap-y-10 text-10px uppercase sm:justify-start sm:gap-x-10 lg:py-9",
                                children: [(0,
                                s.BX)("div", {
                                    className: "space-y-4",
                                    children: [(0,
                                    s.tZ)("h3", {
                                        className: "text-11px font-bold text-white",
                                        children: t("customerService")
                                    }), (0,
                                    s.BX)("ul", {
                                        className: "list-inside list-disc space-y-2 whitespace-nowrap font-light text-white/90",
                                        children: [(0,
                                        s.tZ)("li", {
                                            children: (0,
                                            s.tZ)(X, {
                                                href: "/provably-fair",
                                                className: "transition-colors duration-150 hover:text-gold",
                                                children: t("navigation.provablyFair")
                                            })
                                        }), (0,
                                        s.tZ)("li", {
                                            children: (0,
                                            s.tZ)(X, {
                                                href: "/tos",
                                                className: "transition-colors duration-150 hover:text-gold",
                                                children: t("navigation.termOfService")
                                            })
                                        }), (0,
                                        s.tZ)("li", {
                                            children: (0,
                                            s.tZ)(X, {
                                                href: "/policy",
                                                className: "transition-colors duration-150 hover:text-gold",
                                                children: t("navigation.privacyPolicy")
                                            })
                                        }), (0,
                                        s.tZ)("li", {
                                            children: (0,
                                            s.tZ)(X, {
                                                href: "/panel/profil/support-chat",
                                                className: "transition-colors duration-150 hover:text-gold",
                                                children: t("navigation.support")
                                            })
                                        })]
                                    })]
                                }), (0,
                                s.BX)("div", {
                                    className: "space-y-4",
                                    children: [(0,
                                    s.tZ)("h3", {
                                        className: "text-11px font-bold text-white",
                                        children: t("myAccount")
                                    }), (0,
                                    s.BX)("ul", {
                                        className: "list-inside list-disc space-y-2 whitespace-nowrap font-light text-white/90",
                                        children: [(0,
                                        s.tZ)("li", {
                                            children: (0,
                                            s.tZ)(X, {
                                                href: "/panel/profil",
                                                className: "transition-colors duration-150 hover:text-gold",
                                                children: t("navigation.myAccount")
                                            })
                                        }), (0,
                                        s.tZ)("li", {
                                            children: (0,
                                            s.tZ)(X, {
                                                href: "/panel/profil/affiliate-system",
                                                className: "transition-colors duration-150 hover:text-gold",
                                                children: t("navigation.affiliateSystem")
                                            })
                                        })]
                                    })]
                                }), (0,
                                s.BX)("div", {
                                    className: "col-span-2 space-y-4",
                                    children: [(0,
                                    s.tZ)("h3", {
                                        className: "text-11px font-bold text-white",
                                        children: t("keyDrop")
                                    }), (0,
                                    s.BX)("ul", {
                                        className: "grid list-inside list-disc gap-x-4 gap-y-2 whitespace-nowrap font-light text-white/90 sm:grid-cols-[auto_auto] sm:gap-x-10",
                                        children: [(0,
                                        s.tZ)("li", {
                                            children: (0,
                                            s.tZ)(X, {
                                                href: "/daily-case",
                                                className: "transition-colors duration-150 hover:text-gold",
                                                children: t("navigation.dailyCase")
                                            })
                                        }), (0,
                                        s.tZ)("li", {
                                            children: (0,
                                            s.tZ)(X, {
                                                href: "/case-battle",
                                                className: "transition-colors duration-150 hover:text-gold",
                                                children: t("navigation.caseBattle")
                                            })
                                        }), (0,
                                        s.tZ)("li", {
                                            children: (0,
                                            s.tZ)(X, {
                                                href: "/skin-changer",
                                                className: "transition-colors duration-150 hover:text-gold",
                                                children: t("navigation.skinChanger")
                                            })
                                        }), (0,
                                        s.tZ)("li", {
                                            children: (0,
                                            s.tZ)(X, {
                                                href: "/skins/upgrader",
                                                className: "transition-colors duration-150 hover:text-gold",
                                                children: t("navigation.upgrader")
                                            })
                                        }), (0,
                                        s.tZ)("li", {
                                            children: (0,
                                            s.tZ)(X, {
                                                href: "/panel/profil/contracts",
                                                className: "transition-colors duration-150 hover:text-gold",
                                                children: t("navigation.contracts")
                                            })
                                        }), (0,
                                        s.tZ)("li", {
                                            children: (0,
                                            s.tZ)(X, {
                                                href: "/panel/profil/free-gold",
                                                className: "transition-colors duration-150 hover:text-gold",
                                                children: t("navigation.freeGold")
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        }), (0,
                        s.tZ)("div", {
                            className: "bg-navy-600",
                            children: (0,
                            s.BX)("div", {
                                className: "container mx-auto text-10px font-light lg:flex lg:items-center lg:justify-between lg:gap-20 lg:py-5",
                                children: [(0,
                                s.tZ)("div", {
                                    className: "space-y-5 py-5 lg:py-0",
                                    children: (0,
                                    s.BX)("p", {
                                        className: "text-center leading-snug text-navy-300 lg:max-w-xl lg:text-left lg:uppercase",
                                        children: ["All Rights Reserved. Powered by Steam. Not affiliated with Valve Corp.", (0,
                                        s.tZ)("br", {}), "Copyright © ", (new Date).getFullYear(), " Key-Drop. All Rights Reserved."]
                                    })
                                }), (0,
                                s.tZ)("div", {
                                    className: "-ml-5 -mr-5 space-y-5 bg-navy-600 p-5 lg:mx-0 lg:bg-transparent lg:p-0",
                                    children: (0,
                                    s.BX)("p", {
                                        className: "text-center leading-snug text-navy-300 lg:max-w-[33em] lg:text-right lg:uppercase",
                                        children: ["APRODI LTD (Stavrou, 74, 1st floor, Office 102, Strovolos, ", (0,
                                        s.tZ)("br", {}), "2035, Nicosia, Cyprus)"]
                                    })
                                })]
                            })
                        })]
                    })]
                })
            }, J = n(733), Q = n(685), ee = n(845), te = n(605);
            function ne(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ne(Object(n), !0).forEach((function(t) {
                        (0,
                        R.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ne(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            !function(e) {
                e.INPUT_INPUT = "combobox-input",
                e.BTN_EXPAND_COMBOBOX = "expand-combobox-options-button"
            }(U || (U = {})),
            function(e) {
                e.BTN_ADD_FUNDS = "refill-deposit-button"
            }(H || (H = {})),
            function(e) {
                e.DIV_SKIN_CARD = "items-browser-item-skin-card",
                e.IMG_SKIN_THUMBNAIL = "items-browser-item-image",
                e.LABEL_ITEM_PRICE = "items-browser-item-price",
                e.LABEL_ITEM_CONDITION = "items-browser-item-condition",
                e.LABEL_ITEM_NAME = "items-browser-item-name",
                e.LABEL_ITEM_CATEGORY = "items-browser-item-category",
                e.ICON_IS_SELECTED = "items-browser-item-is-selected",
                e.ICON_IS_HOVERED = "items-browser-item-is-hovered"
            }(G || (G = {})),
            function(e) {
                e.LABEL_MESSAGE_TOAST_TITLE = "toast-title",
                e.LABEL_MESSAGE_TOAST_DESCRIPTION = "toast-message"
            }($ || ($ = {}));
            var re = function(e) {
                var t, n = e["data-testid"], o = void 0 === n ? "" : n, r = e.initialValue, a = e.options, i = e.onChange, l = e.arrowPlacement, c = void 0 === l ? "right" : l, u = e.arrowIcon, d = void 0 === u ? "short" : u, p = e.className, f = void 0 === p ? "" : p, h = e.buttonClassName, m = void 0 === h ? "" : h, g = e.renderSelectedIcon, w = e.renderOption, v = e.value, k = e.disabled, z = void 0 !== k && k, x = (0,
                y.useState)((null != r ? r : a.length > 0) ? null === (t = a[0]) || void 0 === t ? void 0 : t.value : ""), j = (0,
                b.Z)(x, 2), C = j[0], S = j[1], E = y.useRef(null), N = y.useState(null), O = (0,
                b.Z)(N, 2), T = O[0], Z = O[1], I = y.useState(null), L = (0,
                b.Z)(I, 2), A = L[0], R = L[1], B = (0,
                y.useState)(""), M = (0,
                b.Z)(B, 2), F = M[0], _ = M[1], H = (0,
                te.D)(T, A, {
                    placement: "bottom-start",
                    modifiers: [{
                        name: "offset",
                        options: {
                            offset: [0, 4]
                        }
                    }]
                }), G = H.styles, $ = H.attributes;
                (0,
                y.useEffect)((function() {
                    r && S(r)
                }
                ), [r]),
                (0,
                y.useEffect)((function() {
                    void 0 !== v && S(v)
                }
                ), [v]);
                var Y = "" === F ? a : a.filter((function(e) {
                    return e.label ? e.label.toLowerCase().includes(F.toLowerCase()) : e.value.toLowerCase().includes(F.toLowerCase())
                }
                ));
                return (0,
                s.tZ)(J.h, {
                    "data-testid": o,
                    as: "div",
                    value: C,
                    onChange: function(e) {
                        S(e),
                        i(e)
                    },
                    className: (0,
                    P.cn)("relative", f),
                    disabled: z,
                    children: function(e) {
                        var t = e.open;
                        return (0,
                        s.BX)(s.HY, {
                            children: [(0,
                            s.BX)("div", {
                                className: (0,
                                P.cn)("dropdown", m),
                                ref: Z,
                                children: ["left" === c && (0,
                                s.tZ)(J.h.Button, {
                                    "data-testid": U.BTN_EXPAND_COMBOBOX,
                                    className: "dropdown-arrow",
                                    children: "short" === d ? (0,
                                    s.tZ)(D.e0, {
                                        className: "block h-2.5 w-2.5 flex-shrink-0 transition-transform duration-200",
                                        style: {
                                            transform: "rotateX(".concat(t ? 180 : 0, "deg)")
                                        }
                                    }) : (0,
                                    s.tZ)(D.fO, {
                                        className: "block h-2.5 w-2.5 flex-shrink-0 transition-transform duration-200",
                                        style: {
                                            transform: "rotateX(".concat(t ? 180 : 0, "deg)")
                                        }
                                    })
                                }), g(C), (0,
                                s.tZ)(J.h.Button, {
                                    className: "h-full w-full",
                                    children: (0,
                                    s.tZ)(J.h.Input, {
                                        "data-testid": U.INPUT_INPUT,
                                        className: "h-full w-full rounded-lg bg-transparent text-[16px] font-light focus:outline-none focus:ring-0 lg:text-2xs",
                                        onChange: function(e) {
                                            return _(e.target.value)
                                        },
                                        onFocus: function(e) {
                                            return e.target.select()
                                        },
                                        displayValue: function(e) {
                                            var t;
                                            return (null === (t = a.find((function(t) {
                                                return t.value === e
                                            }
                                            ))) || void 0 === t ? void 0 : t.label) || ""
                                        }
                                    })
                                }), "right" === c && (0,
                                s.tZ)(J.h.Button, {
                                    className: "dropdown-arrow ml-auto",
                                    children: "short" === d ? (0,
                                    s.tZ)(D.e0, {
                                        className: "block h-2.5 w-2.5 flex-shrink-0 transition-transform duration-200",
                                        style: {
                                            transform: "rotateX(".concat(t ? 180 : 0, "deg)")
                                        }
                                    }) : (0,
                                    s.tZ)(D.fO, {
                                        className: "block h-2.5 w-2.5 flex-shrink-0 transition-transform duration-200",
                                        style: {
                                            transform: "rotateX(".concat(t ? 180 : 0, "deg)")
                                        }
                                    })
                                })]
                            }), (0,
                            s.tZ)(ae, {
                                children: (0,
                                s.tZ)("div", oe(oe({
                                    ref: E,
                                    style: oe(oe({}, G.popper), {}, {
                                        minWidth: null == T ? void 0 : T.offsetWidth,
                                        zIndex: 999
                                    })
                                }, $.popper), {}, {
                                    children: (0,
                                    s.tZ)(ee.u, {
                                        show: t,
                                        enter: "transition duration-200 ease-out",
                                        enterFrom: "transform scale-95 opacity-0 -translate-y-1",
                                        enterTo: "transform scale-100 opacity-100",
                                        leave: "transition duration-200 ease-out",
                                        leaveFrom: "transform scale-100 opacity-100",
                                        leaveTo: "transform scale-95 opacity-0 -translate-y-1",
                                        className: "right-0 z-50 w-full origin-top",
                                        beforeEnter: function() {
                                            return R(E.current)
                                        },
                                        afterLeave: function() {
                                            return R(null)
                                        },
                                        children: t ? (0,
                                        s.tZ)(J.h.Options, {
                                            "data-cy": "comboboxItems",
                                            static: !0,
                                            className: "custom-scrollbar max-h-64 overflow-y-auto overflow-x-hidden rounded-lg border border-navy-200 border-opacity-30 bg-navy-700 bg-opacity-90 shadow-lg outline-none md:max-h-80",
                                            style: {
                                                backdropFilter: "blur(1.3px)"
                                            },
                                            children: Y.map((function(e) {
                                                var t = e.value
                                                  , n = e.label;
                                                return (0,
                                                s.tZ)(J.h.Option, {
                                                    value: t,
                                                    children: function(e) {
                                                        var o = e.active;
                                                        return (0,
                                                        s.tZ)("div", {
                                                            className: (0,
                                                            P.cn)("Options-center flex w-full cursor-pointer px-3 py-2 text-left text-[16px] font-light outline-none transition-colors duration-200 lg:text-2xs", o ? "bg-navy-500" : ""),
                                                            children: w({
                                                                value: t,
                                                                label: n
                                                            }) || t
                                                        })
                                                    }
                                                }, t)
                                            }
                                            ))
                                        }) : null
                                    })
                                }))
                            })]
                        })
                    }
                })
            };
            function ae(e) {
                var t = e.children
                  , n = (0,
                y.useState)(!1)
                  , o = (0,
                b.Z)(n, 2)
                  , r = o[0]
                  , a = o[1];
                return (0,
                y.useEffect)((function() {
                    a(!0)
                }
                ), []),
                r ? (0,
                w.createPortal)(t, document.body) : null
            }
            var ie = n(606);
            function se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? se(Object(n), !0).forEach((function(t) {
                        (0,
                        R.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : se(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var ce = function(e) {
                var t, n = e["data-testid"], o = void 0 === n ? "" : n, r = e.initialValue, a = e.options, i = e.onChange, l = e.arrowPlacement, c = void 0 === l ? "right" : l, u = e.arrowIcon, d = void 0 === u ? "short" : u, p = e.className, f = void 0 === p ? "" : p, h = e.buttonClassName, m = void 0 === h ? "" : h, g = e.optionClassName, w = void 0 === g ? "" : g, v = e.renderSelectedLabel, k = e.value, z = e.disabled, x = void 0 !== z && z, j = (0,
                y.useState)((null != r ? r : a.length > 0) ? null === (t = a[0]) || void 0 === t ? void 0 : t.value : ""), C = (0,
                b.Z)(j, 2), S = C[0], E = C[1], N = y.useRef(null), O = y.useState(null), T = (0,
                b.Z)(O, 2), Z = T[0], I = T[1], L = y.useState(null), A = (0,
                b.Z)(L, 2), R = A[0], B = A[1], M = (0,
                te.D)(Z, R, {
                    placement: "bottom-start",
                    modifiers: [{
                        name: "offset",
                        options: {
                            offset: [0, 4]
                        }
                    }]
                }), F = M.styles, _ = M.attributes;
                (0,
                y.useEffect)((function() {
                    r && E(r)
                }
                ), [r]),
                (0,
                y.useEffect)((function() {
                    void 0 !== k && E(k)
                }
                ), [k]);
                var U = a.find((function(e) {
                    var t = e.value;
                    return String(t).toLowerCase() === String(S).toLowerCase()
                }
                ))
                  , H = (null == U ? void 0 : U.selectedLabel) || (null == U ? void 0 : U.label) || (null == U ? void 0 : U.value);
                return (0,
                s.tZ)(ie.v, {
                    "data-testid": o,
                    as: "div",
                    className: (0,
                    P.cn)("relative", f),
                    children: function(e) {
                        var t = e.open;
                        return (0,
                        s.BX)(s.HY, {
                            children: [(0,
                            s.BX)(ie.v.Button, {
                                ref: I,
                                className: (0,
                                P.cn)("dropdown", m),
                                disabled: x,
                                children: ["left" === c && (0,
                                s.tZ)("div", {
                                    className: "dropdown-arrow",
                                    children: "short" === d ? (0,
                                    s.tZ)(D.e0, {
                                        className: "block h-2.5 w-2.5 flex-shrink-0 transition-transform duration-200",
                                        style: {
                                            transform: "rotateX(".concat(t ? 180 : 0, "deg)")
                                        }
                                    }) : (0,
                                    s.tZ)(D.fO, {
                                        className: "block h-2.5 w-2.5 flex-shrink-0 transition-transform duration-200",
                                        style: {
                                            transform: "rotateX(".concat(t ? 180 : 0, "deg)")
                                        }
                                    })
                                }), v ? v(S) : (0,
                                s.tZ)("div", {
                                    className: "overflow-hidden whitespace-nowrap px-3 text-base lg:text-2xs",
                                    children: H
                                }), "right" === c && (0,
                                s.tZ)("div", {
                                    className: "dropdown-arrow ml-auto",
                                    children: "short" === d ? (0,
                                    s.tZ)(D.e0, {
                                        className: "block h-2.5 w-2.5 flex-shrink-0 transition-transform duration-200",
                                        style: {
                                            transform: "rotateX(".concat(t ? 180 : 0, "deg)")
                                        }
                                    }) : (0,
                                    s.tZ)(D.fO, {
                                        className: "block h-2.5 w-2.5 flex-shrink-0 transition-transform duration-200",
                                        style: {
                                            transform: "rotateX(".concat(t ? 180 : 0, "deg)")
                                        }
                                    })
                                })]
                            }), (0,
                            s.tZ)(ue, {
                                children: (0,
                                s.tZ)("div", le(le({
                                    ref: N,
                                    style: le(le({}, F.popper), {}, {
                                        minWidth: null == Z ? void 0 : Z.offsetWidth,
                                        zIndex: 999
                                    })
                                }, _.popper), {}, {
                                    children: (0,
                                    s.tZ)(ee.u, {
                                        show: t,
                                        enter: "transition duration-200 ease-out",
                                        enterFrom: "transform scale-95 opacity-0 -translate-y-1",
                                        enterTo: "transform scale-100 opacity-100",
                                        leave: "transition duration-200 ease-out",
                                        leaveFrom: "transform scale-100 opacity-100",
                                        leaveTo: "transform scale-95 opacity-0 -translate-y-1",
                                        className: "right-0 z-50 w-full origin-top",
                                        beforeEnter: function() {
                                            return B(N.current)
                                        },
                                        afterLeave: function() {
                                            return B(null)
                                        },
                                        children: t ? (0,
                                        s.tZ)(ie.v.Items, {
                                            "data-cy": "dropdownItems",
                                            static: !0,
                                            className: "custom-scrollbar max-h-64 overflow-y-auto overflow-x-hidden rounded-lg border border-navy-200 border-opacity-30 bg-navy-700 bg-opacity-90 shadow-lg outline-none md:max-h-80",
                                            style: {
                                                backdropFilter: "blur(1.3px)"
                                            },
                                            children: a.map((function(e) {
                                                var t = e.value
                                                  , n = e.label;
                                                return (0,
                                                s.tZ)(ie.v.Item, {
                                                    children: function(e) {
                                                        var o = e.active;
                                                        return (0,
                                                        s.tZ)("div", {
                                                            className: (0,
                                                            P.cn)("flex w-full cursor-pointer items-center px-3 py-2 text-left text-base font-light outline-none transition-colors duration-200 lg:text-2xs", w, o ? "bg-navy-500" : ""),
                                                            onClick: function() {
                                                                return function(e) {
                                                                    E(e),
                                                                    i(e)
                                                                }(t)
                                                            },
                                                            children: n || t
                                                        })
                                                    }
                                                }, t)
                                            }
                                            ))
                                        }) : null
                                    })
                                }))
                            })]
                        })
                    }
                })
            };
            function ue(e) {
                var t = e.children
                  , n = (0,
                y.useState)(!1)
                  , o = (0,
                b.Z)(n, 2)
                  , r = o[0]
                  , a = o[1];
                return (0,
                y.useEffect)((function() {
                    return a(!0)
                }
                ), []),
                r ? (0,
                w.createPortal)(t, document.body) : null
            }
            var de = n(628)
              , pe = (0,
            k.E)(de.t9)
              , fe = (0,
            k.E)(de.cZ)
              , he = function(e) {
                var t = e.isOpen
                  , n = e.setIsOpen
                  , o = e.className
                  , r = e.contentClassName
                  , a = e.children;
                return (0,
                s.tZ)(z.M, {
                    children: t && (0,
                    s.tZ)(pe, {
                        style: {
                            background: "rgba(0, 0, 0, 0.85)"
                        },
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
                            duration: .3,
                            ease: "easeOut"
                        },
                        onDismiss: function() {
                            return n(!1)
                        },
                        className: (0,
                        P.cn)("z-50 flex items-center", o),
                        children: (0,
                        s.tZ)(fe, {
                            as: "div",
                            "aria-label": "Modal",
                            initial: {
                                opacity: 0,
                                scale: .9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: .9
                            },
                            transition: {
                                duration: .3,
                                ease: "easeOut"
                            },
                            css: {
                                padding: "0 !important",
                                background: "transparent !important",
                                width: "max-content !important",
                                maxWidth: "calc(100vw - 30px) !important",
                                margin: "auto !important"
                            },
                            children: (0,
                            s.BX)("div", {
                                className: (0,
                                P.cn)("relative rounded-xl bg-navy-700", r),
                                children: [(0,
                                s.tZ)("button", {
                                    onClick: function() {
                                        return n(!1)
                                    },
                                    className: "absolute right-0 top-0 z-10 p-5 text-navy-200 transition-colors duration-200 hover:text-white",
                                    children: (0,
                                    s.tZ)(D.Tw, {
                                        className: "h-5 w-5"
                                    })
                                }), a]
                            })
                        })
                    })
                })
            };
            function me(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function ye(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? me(Object(n), !0).forEach((function(t) {
                        (0,
                        R.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var ge = function(e) {
                var t = e.targetRef
                  , n = e.isVisible
                  , o = e.value
                  , r = e.className
                  , a = void 0 === r ? "" : r
                  , i = e.placement
                  , l = void 0 === i ? "top-start" : i
                  , c = e.onMouseEnter
                  , u = e.onMouseLeave
                  , d = (0,
                y.useState)(null)
                  , p = (0,
                b.Z)(d, 2)
                  , f = p[0]
                  , h = p[1]
                  , m = (0,
                te.D)(t.current, f, {
                    placement: l,
                    modifiers: [{
                        name: "offset",
                        options: {
                            offset: [0, 4]
                        }
                    }]
                })
                  , g = m.styles
                  , w = m.attributes;
                return n ? (0,
                s.tZ)(we, {
                    children: (0,
                    s.tZ)("div", ye(ye({
                        ref: h,
                        style: g.popper
                    }, w.popper), {}, {
                        className: (0,
                        P.cn)("z-50 rounded-md bg-navy-800 p-3 text-xs text-navy-100", a),
                        onMouseEnter: c,
                        onMouseLeave: u,
                        children: o
                    }))
                }) : null
            };
            function we(e) {
                var t = e.children
                  , n = (0,
                y.useState)(!1)
                  , o = (0,
                b.Z)(n, 2)
                  , r = o[0]
                  , a = o[1];
                return (0,
                y.useEffect)((function() {
                    return a(!0)
                }
                ), []),
                r ? (0,
                w.createPortal)(t, document.body) : null
            }
            var ve, be = function(e) {
                var t, n, o, r, a = e.content, i = void 0 === a ? "" : a, l = e.linkKey, c = e.iconClassName, u = void 0 === c ? "" : c, d = e.className, p = void 0 === d ? "" : d, f = e.icon, h = void 0 === f ? D.AM : f, m = (0,
                y.useState)(!1), g = (0,
                b.Z)(m, 2), w = g[0], v = g[1], k = (0,
                y.useRef)(null), z = (0,
                y.useRef)(), x = l ? (null === (t = window.__global) || void 0 === t ? void 0 : t.questionMarkLinks[l][null === (n = window.__layout) || void 0 === n || null === (o = n.initialData) || void 0 === o ? void 0 : o.language.toLowerCase()]) || (null === (r = window.__global) || void 0 === r ? void 0 : r.questionMarkLinks[l].en) : null, j = function(e) {
                    clearTimeout(z.current),
                    z.current = setTimeout((function() {
                        v(!1)
                    }
                    ), e)
                };
                return (0,
                y.useEffect)((function() {
                    return function() {
                        z.current && clearTimeout(z.current)
                    }
                }
                ), []),
                (0,
                s.BX)("div", {
                    className: (0,
                    P.cn)("group relative h-min w-min normal-case", p),
                    children: [(0,
                    s.tZ)(ge, {
                        isVisible: w,
                        targetRef: k,
                        value: (0,
                        s.BX)("span", {
                            children: [i, " ", l && x ? (0,
                            s.tZ)("a", {
                                href: x,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "text-gold-500 underline transition-colors duration-200 hover:text-gold-400",
                                children: window.__global.lang.readMore
                            }) : null]
                        }),
                        placement: "top",
                        className: "max-w-xs cursor-default bg-navy-800/70 px-3 py-2 text-10px !text-white",
                        onMouseEnter: function() {
                            v(!0),
                            z.current && clearTimeout(z.current)
                        },
                        onMouseLeave: function() {
                            return j(1e3)
                        }
                    }), (0,
                    s.tZ)("button", {
                        className: "-m-2 h-min w-min cursor-pointer p-2",
                        type: "button",
                        ref: k,
                        onClick: function() {
                            v(!0),
                            j(5e3)
                        },
                        onMouseEnter: function() {
                            v(!0),
                            z.current && clearTimeout(z.current)
                        },
                        onMouseLeave: function() {
                            return j(1e3)
                        },
                        children: (0,
                        s.tZ)(h, {
                            className: (0,
                            P.cn)("h-5 w-5 text-white text-opacity-50 duration-200 group-hover:text-opacity-100", u, w ? "text-gold-400" : "")
                        })
                    })]
                })
            }, ke = (0,
            y.createContext)(null), ze = function(e) {
                var t = e.children
                  , n = (0,
                y.useState)(!1)
                  , o = (0,
                b.Z)(n, 2)
                  , r = o[0]
                  , a = o[1]
                  , i = (0,
                y.useState)((function() {
                    return "true" === localStorage.getItem(je)
                }
                ))
                  , l = (0,
                b.Z)(i, 2)
                  , c = l[0]
                  , u = l[1];
                return (0,
                s.tZ)(ke.Provider, {
                    value: {
                        langCurrencySelectOpen: r,
                        setLangCurrencySelectOpen: a,
                        translateDisabledBannerVisible: c,
                        setTranslateDisabledBannerVisible: u
                    },
                    children: t
                })
            }, xe = function() {
                var e = (0,
                y.useContext)(ke);
                if (!e)
                    throw new Error("useLangCurrencyContext() must be used within a <LangCurrencyContextProvider />");
                return e
            }, je = "GOOGLE_TRANSLATION_DISABLED_BANNER_VISIBLE", Ce = function() {
                var e = (0,
                j.$G)("header").t
                  , t = xe()
                  , n = t.setLangCurrencySelectOpen
                  , o = t.setTranslateDisabledBannerVisible
                  , r = t.translateDisabledBannerVisible
                  , a = new MutationObserver((function(e) {
                    e.forEach((function(e) {
                        "class" === e.attributeName && e.target.classList.contains("translated-ltr") && (localStorage.setItem(je, "true"),
                        location.reload(),
                        window.scrollTo(0, 0))
                    }
                    ))
                }
                ));
                return (0,
                y.useEffect)((function() {
                    a.observe(document.getElementsByTagName("html")[0], {
                        attributes: !0
                    })
                }
                ), []),
                r ? (0,
                s.tZ)("div", {
                    className: "w-full bg-gradient-to-r from-gold-1050 to-[#665230] text-white",
                    children: (0,
                    s.BX)("div", {
                        className: "container flex items-center justify-between py-2",
                        children: [(0,
                        s.tZ)("p", {
                            className: "mr-4 text-sm",
                            children: e("googleTranslateIsDisabled")
                        }), (0,
                        s.tZ)("button", {
                            className: "button button-green-dimmed mr-4 hidden h-8 items-center justify-center sm:flex",
                            onClick: function() {
                                n(!0),
                                o(!1),
                                localStorage.setItem(je, "false")
                            },
                            children: (0,
                            s.tZ)("span", {
                                children: e("chooseYourLanguage")
                            })
                        }), (0,
                        s.tZ)(D.Tw, {
                            className: "h-5 w-5 shrink-0 cursor-pointer text-gold-300",
                            onClick: function() {
                                o(!1),
                                localStorage.setItem(je, "false")
                            }
                        })]
                    })
                }) : null
            }, Se = n(684), Ee = n(636), Ne = n(12), Oe = (0,
            Ee.N)({
                countryList: {},
                langList: {},
                currencyList: [],
                country: "",
                language: "",
                currency: "",
                draft: {
                    country: "",
                    language: "",
                    currency: ""
                }
            }, {
                events: {
                    CHANGE_COUNTRY: function(e) {
                        return {
                            value: e
                        }
                    },
                    CHANGE_LANGUAGE: function(e) {
                        return {
                            value: e
                        }
                    },
                    CHANGE_CURRENCY: function(e) {
                        return {
                            value: e
                        }
                    },
                    CANCEL: function() {
                        return {}
                    },
                    SAVE: function() {
                        return {}
                    }
                }
            }).createMachine({
                id: "LangCurrencyMachine",
                initial: "idle",
                states: {
                    idle: {
                        on: {
                            CHANGE_COUNTRY: {
                                cond: function(e, t) {
                                    if ("CHANGE_COUNTRY" === t.type)
                                        return e.draft.country !== t.value
                                },
                                actions: [(0,
                                Se.f0)((function(e, t) {
                                    e.draft.country = t.value
                                }
                                ))],
                                target: ".touched"
                            },
                            CHANGE_LANGUAGE: {
                                cond: function(e, t) {
                                    if ("CHANGE_LANGUAGE" === t.type)
                                        return e.draft.language !== t.value
                                },
                                actions: [(0,
                                Se.f0)((function(e, t) {
                                    e.draft.language = t.value
                                }
                                ))],
                                target: ".touched"
                            },
                            CHANGE_CURRENCY: {
                                cond: function(e, t) {
                                    if ("CHANGE_CURRENCY" === t.type)
                                        return e.draft.currency !== t.value
                                },
                                actions: [(0,
                                Se.f0)((function(e, t) {
                                    e.draft.currency = t.value
                                }
                                ))],
                                target: ".touched"
                            },
                            CANCEL: {
                                actions: [(0,
                                Se.f0)((function(e) {
                                    e.draft.language = e.language,
                                    e.draft.currency = e.currency
                                }
                                ))]
                            },
                            SAVE: "saving"
                        },
                        initial: "untouched",
                        states: {
                            untouched: {
                                tags: ["untouched"]
                            },
                            touched: {
                                tags: ["touched"]
                            }
                        }
                    },
                    saving: {
                        invoke: {
                            src: (ve = (0,
                            r.Z)(i().mark((function e(t) {
                                var n, o, r;
                                return i().wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.draft,
                                            (o = new FormData).append("lang", n.language),
                                            o.append("currency", n.currency),
                                            document.cookie = "userCountryCode=".concat(n.country.toUpperCase(), "; Path=/"),
                                            e.next = 7,
                                            fetch(Ne.bl.changeLangAndCurrency, {
                                                method: "POST",
                                                body: o
                                            });
                                        case 7:
                                            return r = e.sent,
                                            e.abrupt("return", r.json());
                                        case 9:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            ))),
                            function(e) {
                                return ve.apply(this, arguments)
                            }
                            ),
                            onDone: {
                                actions: [function(e) {
                                    e.draft.language !== e.language ? location.href = "/".concat(e.draft.language.toLowerCase(), "/").concat(location.pathname.replace(/^\/.+?\//, "")) : location.reload()
                                }
                                ]
                            }
                        }
                    }
                }
            }), Te = function(e) {
                var t, n, o = e.className, r = (0,
                S.b)(), a = (0,
                j.$G)(["common", "header"]).t, i = xe(), l = i.langCurrencySelectOpen, c = i.setLangCurrencySelectOpen, u = i.setTranslateDisabledBannerVisible, d = (0,
                Q.e)(Oe, {
                    context: {
                        countryList: r.countryList,
                        langList: r.langList,
                        currencyList: r.currencyList,
                        country: r.country,
                        language: r.language,
                        currency: r.currency,
                        draft: {
                            country: r.country,
                            language: r.language,
                            currency: r.currency
                        }
                    }
                }), p = (0,
                b.Z)(d, 2), f = p[0], h = p[1], m = f.context, y = m.countryList, g = m.langList, w = m.currencyList, v = m.country, k = m.language, z = m.currency;
                return (0,
                s.BX)(s.HY, {
                    children: [(0,
                    s.BX)("button", {
                        onClick: function() {
                            c(!0),
                            u(!1),
                            localStorage.setItem(je, "false")
                        },
                        className: (0,
                        P.cn)("hidden items-center justify-center gap-2 whitespace-nowrap text-xs uppercase leading-none text-navy-100 transition-colors duration-200 hover:text-white xl:flex", o),
                        children: [(0,
                        s.tZ)("img", {
                            src: "/web/KD/static/flags/".concat(null == k ? void 0 : k.toLowerCase(), ".svg"),
                            className: "h-5 w-5 flex-shrink-0 rounded-full"
                        }), (0,
                        s.BX)("span", {
                            children: [null == g ? void 0 : g[k], " | ", (0,
                            s.tZ)("span", {
                                className: "font-bold",
                                children: z
                            })]
                        }), (0,
                        s.tZ)(D.e0, {
                            className: "h-2.5 w-2.5 flex-shrink-0"
                        })]
                    }), (0,
                    s.tZ)("button", {
                        onClick: function() {
                            c(!0),
                            u(!1),
                            localStorage.setItem(je, "false")
                        },
                        className: (0,
                        P.cn)("button aspect-square h-9 w-9 rounded bg-navy-800 p-1 xl:hidden", o),
                        children: (0,
                        s.tZ)("img", {
                            src: "/web/KD/static/flags/".concat(null == k ? void 0 : k.toLowerCase(), ".svg"),
                            className: "h-5 w-5 flex-shrink-0 rounded-full"
                        })
                    }), (0,
                    s.tZ)(he, {
                        isOpen: l,
                        setIsOpen: function(e) {
                            e || h("CANCEL"),
                            c(e)
                        },
                        className: "backdrop-blur-[3px] lg:!bg-[rgb(8,10,13)] lg:!bg-opacity-90",
                        children: (0,
                        s.BX)("div", {
                            className: "flex flex-col p-8 lg:p-12",
                            children: [(0,
                            s.tZ)("h2", {
                                className: "text-center text-base font-semibold text-white",
                                children: a("header:currencySelectModal.title")
                            }), (0,
                            s.tZ)("p", {
                                className: "text-center text-xs font-light text-navy-200",
                                children: a("header:currencySelectModal.excerpt")
                            }), (0,
                            s.tZ)("label", {
                                className: "mb-2 mt-8 text-xs font-light text-white",
                                children: a("header:country")
                            }), (0,
                            s.tZ)(re, {
                                initialValue: v,
                                onChange: function(e) {
                                    return h({
                                        type: "CHANGE_COUNTRY",
                                        value: e
                                    })
                                },
                                options: y ? null === (t = Object.entries(y)) || void 0 === t ? void 0 : t.map((function(e) {
                                    var t = (0,
                                    b.Z)(e, 2);
                                    return {
                                        value: t[0],
                                        label: t[1]
                                    }
                                }
                                )) : [],
                                renderOption: function(e) {
                                    var t = e.value
                                      , n = e.label;
                                    return (0,
                                    s.BX)("div", {
                                        className: "flex items-center justify-center font-light text-navy-100",
                                        children: [(0,
                                        s.tZ)("img", {
                                            src: "/web/KD/static/country-flags/".concat(null == t ? void 0 : t.toLowerCase(), ".svg"),
                                            className: "mr-3 h-5 w-5 flex-shrink-0 rounded-full sm:mr-2"
                                        }), n]
                                    })
                                },
                                renderSelectedIcon: function(e) {
                                    return (0,
                                    s.tZ)(J.h.Button, {
                                        className: "flex-shrink-0",
                                        children: (0,
                                        s.tZ)("img", {
                                            src: "/web/KD/static/country-flags/".concat(null == e ? void 0 : e.toLowerCase(), ".svg"),
                                            className: "ml-3 mr-3 h-5 w-5 flex-shrink-0 rounded-full sm:mr-2"
                                        })
                                    })
                                },
                                arrowPlacement: "right",
                                buttonClassName: "dropdown-simple w-full",
                                className: "w-full max-w-full"
                            }), (0,
                            s.tZ)("label", {
                                className: "mb-2 mt-6 text-xs font-light text-white",
                                children: a("header:language")
                            }), (0,
                            s.tZ)(re, {
                                initialValue: k,
                                onChange: function(e) {
                                    return h({
                                        type: "CHANGE_LANGUAGE",
                                        value: e
                                    })
                                },
                                options: g ? null === (n = Object.entries(g)) || void 0 === n ? void 0 : n.map((function(e) {
                                    var t = (0,
                                    b.Z)(e, 2);
                                    return {
                                        value: t[0],
                                        label: t[1]
                                    }
                                }
                                )) : [],
                                renderOption: function(e) {
                                    var t = e.value
                                      , n = e.label;
                                    return (0,
                                    s.BX)("div", {
                                        className: "flex items-center justify-center font-light text-navy-100",
                                        children: [(0,
                                        s.tZ)("img", {
                                            src: "/web/KD/static/flags/".concat(null == t ? void 0 : t.toLowerCase(), ".svg"),
                                            className: "mr-3 h-5 w-5 flex-shrink-0 rounded-full sm:mr-2"
                                        }), n]
                                    })
                                },
                                renderSelectedIcon: function(e) {
                                    return (0,
                                    s.tZ)(J.h.Button, {
                                        className: "flex-shrink-0",
                                        children: (0,
                                        s.tZ)("img", {
                                            src: "/web/KD/static/flags/".concat(null == e ? void 0 : e.toLowerCase(), ".svg"),
                                            className: "ml-3 mr-3 h-5 w-5 flex-shrink-0 rounded-full sm:mr-2"
                                        })
                                    })
                                },
                                arrowPlacement: "right",
                                buttonClassName: "dropdown-simple w-full",
                                className: "w-full max-w-full"
                            }), (0,
                            s.BX)("span", {
                                className: "mb-2 mt-6 flex items-center justify-between",
                                children: [(0,
                                s.tZ)("label", {
                                    className: "text-xs font-light text-white",
                                    children: a("header:currency")
                                }), (0,
                                s.tZ)(be, {
                                    linkKey: "currency",
                                    content: a("header:currencySelectModal.currencyTooltip"),
                                    className: "ml-1"
                                })]
                            }), (0,
                            s.tZ)(ce, {
                                initialValue: z,
                                onChange: function(e) {
                                    return h({
                                        type: "CHANGE_CURRENCY",
                                        value: e
                                    })
                                },
                                options: null == w ? void 0 : w.map((function(e) {
                                    return {
                                        value: e,
                                        label: (0,
                                        s.tZ)("div", {
                                            className: "font-light uppercase text-navy-100",
                                            children: e
                                        })
                                    }
                                }
                                )),
                                arrowPlacement: "right",
                                buttonClassName: "dropdown-simple w-full",
                                className: "w-80 max-w-full"
                            }), (0,
                            s.BX)("div", {
                                className: "mt-8 grid grid-cols-2 gap-4",
                                children: [(0,
                                s.tZ)("button", {
                                    className: "button button-secondary text-[10px] uppercase",
                                    onClick: function() {
                                        c(!1),
                                        h("CANCEL")
                                    },
                                    children: a("cancel")
                                }), (0,
                                s.tZ)("button", {
                                    className: "button button-primary text-[10px] uppercase",
                                    onClick: function() {
                                        return h("SAVE")
                                    },
                                    children: a("save")
                                })]
                            })]
                        })
                    })]
                })
            };
            function Ze() {
                return "undefined" == typeof document || "visible" === document.visibilityState
            }
            var Ie = function() {
                var e = (0,
                y.useState)(Ze())
                  , t = (0,
                b.Z)(e, 2)
                  , n = t[0]
                  , o = t[1];
                function r() {
                    o(Ze())
                }
                return (0,
                y.useEffect)((function() {
                    return window.addEventListener("visibilitychange", r),
                    function() {
                        window.removeEventListener("visibilitychange", r)
                    }
                }
                ), []),
                n
            }
              , Pe = {
                1: "#b0c3d9",
                2: "#5e98d9",
                3: "#4b69ff",
                4: "#8847ff",
                5: "#d32ce6",
                6: "#eb4b4b",
                7: "#e4ae39"
            }
              , Le = {
                1: "#7c95ad",
                2: "#5370e6",
                3: "#df5dee",
                4: "#a41aff",
                5: "#ff445d",
                6: "#dcae64"
            };
            function Ae(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function De(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ae(Object(n), !0).forEach((function(t) {
                        (0,
                        R.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ae(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var Re = function(e, t) {
                var n = Date.now() - e;
                if (n >= 6e4) {
                    var o = Math.max(0, Math.round(n / 6e4));
                    return "RelativeTimeFormat"in Intl ? new Intl.RelativeTimeFormat(document.documentElement.lang,{
                        style: "short"
                    }).format(-o, "minutes") : "".concat(o, " ").concat(t.timer.minutes)
                }
                var r = Math.max(0, Math.round(n / 1e3));
                return "RelativeTimeFormat"in Intl ? new Intl.RelativeTimeFormat(document.documentElement.lang,{
                    style: "short"
                }).format(-r, "seconds") : "".concat(r, " ").concat(t.timer.seconds)
            }
              , Be = function(e) {
                var t = ["basename", "bg", "caseImage", "caseName", "dateInsert", "dateUnix", "dropSource", "hash", "idSteam", "lvl", "percent", "productImage", "productName", "type", "upgrader", "userAvatar", "userName"];
                return e.reduce((function(e, n, o) {
                    return De(De({}, e), {}, (0,
                    R.Z)({}, t[o], n))
                }
                ), {})
            }
              , Me = n(688)
              , Fe = n(253)
              , _e = n(649)
              , Ue = function(e) {
                var t = e.lvl;
                return Number(t) > 0
            }
              , He = (0,
            Fe.C)({
                id: "Livedrop",
                context: {
                    rowLength: 0,
                    bufferAllDrops: [],
                    bufferBestDrops: [],
                    bestDrops: [],
                    allDrops: [],
                    newBestDropsCount: 0,
                    newAllDropsCount: 0,
                    warmUpFactor: 8
                },
                tsTypes: {},
                schema: {
                    context: {},
                    events: {}
                },
                type: "parallel",
                states: {
                    tab: {
                        initial: "route",
                        states: {
                            route: {
                                always: [{
                                    cond: "rememberedBestTab",
                                    target: "best"
                                }, {
                                    target: "all"
                                }]
                            },
                            all: {
                                entry: ["rememberAllTab"],
                                on: {
                                    CHANGE_TO_BEST: {
                                        target: ["#Livedrop.data.running.waiting", "best"]
                                    }
                                }
                            },
                            best: {
                                entry: ["rememberBestTab"],
                                on: {
                                    CHANGE_TO_ALL: {
                                        target: ["#Livedrop.data.running.waiting", "all"]
                                    }
                                }
                            }
                        }
                    },
                    visibility: {
                        initial: "visible",
                        states: {
                            hidden: {
                                on: {
                                    ON: "visible"
                                }
                            },
                            visible: {
                                on: {
                                    OFF: "hidden"
                                }
                            }
                        }
                    },
                    data: {
                        entry: ["initSocket"],
                        on: {
                            CHANGE_ROW_LENGTH: {
                                actions: ["setRowLength"]
                            }
                        },
                        initial: "running",
                        states: {
                            paused: {
                                on: {
                                    ON: "running.waiting"
                                }
                            },
                            running: {
                                invoke: {
                                    src: "invokeSocket"
                                },
                                initial: "waitingForInitialData",
                                states: {
                                    waitingForInitialData: {
                                        tags: ["waitingForInitialData"],
                                        on: {
                                            ADD_BEST_ITEMS: {
                                                actions: ["assignAllDrops"],
                                                target: "waiting"
                                            }
                                        }
                                    },
                                    waiting: {
                                        on: {
                                            OFF: "#Livedrop.data.paused",
                                            ADD_ITEMS: [{
                                                cond: "isFirstAssignment",
                                                actions: ["assignAllDrops"]
                                            }, {
                                                actions: ["assignToBuffers"]
                                            }]
                                        },
                                        after: (0,
                                        R.Z)({}, 618, "tick")
                                    },
                                    tick: {
                                        always: [{
                                            cond: "isWarmUpFactorGreaterThanOne",
                                            actions: ["releaseNewAllItems", "releaseNewBestItems", "decreaseWarmUpFactor"],
                                            target: "waiting"
                                        }, {
                                            actions: ["releaseNewAllItems", "releaseNewBestItems"],
                                            target: "waiting"
                                        }]
                                    }
                                }
                            }
                        }
                    }
                }
            }, {
                guards: {
                    rememberedBestTab: function() {
                        return "best" === window.localStorage.livedropTab
                    },
                    isFirstAssignment: function(e) {
                        return 0 === e.allDrops.length
                    },
                    isWarmUpFactorGreaterThanOne: function(e) {
                        return e.warmUpFactor > 1
                    }
                },
                actions: {
                    decreaseWarmUpFactor: (0,
                    _e.assign)((function(e) {
                        return {
                            warmUpFactor: e.warmUpFactor -= .5
                        }
                    }
                    )),
                    rememberAllTab: function() {
                        window.localStorage.livedropTab = "all"
                    },
                    rememberBestTab: function() {
                        window.localStorage.livedropTab = "best"
                    },
                    setRowLength: (0,
                    _e.assign)({
                        rowLength: function(e, t) {
                            return t.data
                        }
                    }),
                    assignToBuffers: (0,
                    _e.assign)((function(e, t) {
                        var n = t.data
                          , o = n.filter(Ue);
                        return {
                            bufferBestDrops: [].concat((0,
                            Me.Z)(o), (0,
                            Me.Z)(e.bufferBestDrops)),
                            bufferAllDrops: [].concat((0,
                            Me.Z)(n), (0,
                            Me.Z)(e.bufferAllDrops))
                        }
                    }
                    )),
                    assignAllDrops: (0,
                    _e.assign)((function(e, t) {
                        var n = t.data
                          , o = n.filter(Ue);
                        return {
                            bestDrops: [].concat((0,
                            Me.Z)(o), (0,
                            Me.Z)(e.bestDrops)),
                            allDrops: [].concat((0,
                            Me.Z)(n), (0,
                            Me.Z)(e.allDrops))
                        }
                    }
                    )),
                    releaseNewBestItems: (0,
                    _e.assign)((function(e) {
                        var t = e.bufferBestDrops
                          , n = t.length
                          , o = e.bestDrops;
                        if (n) {
                            var r = 10 / e.warmUpFactor
                              , a = Math.min(Math.floor(n / r) + 1, 7)
                              , i = t.slice(-a)
                              , s = t.slice(0, -a).slice(0, 70);
                            return {
                                bestDrops: [].concat((0,
                                Me.Z)(i), (0,
                                Me.Z)(o)).slice(0, 30),
                                bufferBestDrops: s,
                                newBestDropsCount: a
                            }
                        }
                    }
                    )),
                    releaseNewAllItems: (0,
                    _e.assign)((function(e) {
                        var t = e.bufferAllDrops
                          , n = t.length
                          , o = e.allDrops;
                        if (n) {
                            var r = 10 / e.warmUpFactor
                              , a = Math.min(Math.floor(n / r) + 1, 7)
                              , i = t.slice(-a)
                              , s = t.slice(0, -a).slice(0, 70);
                            return {
                                allDrops: [].concat((0,
                                Me.Z)(i), (0,
                                Me.Z)(o)).slice(0, 30),
                                bufferAllDrops: s,
                                newAllDropsCount: a
                            }
                        }
                    }
                    ))
                }
            })
              , Ge = function(e) {
                var t = e.currentTab
                  , n = e.onSelectBestDrops
                  , o = e.onSelectAllDrops
                  , r = (0,
                j.$G)(["common", "header"]).t
                  , a = I().stats;
                return (0,
                s.BX)("div", {
                    className: "relative z-20 flex flex-shrink-0 md:bg-navy-550 lg:w-48",
                    children: [(0,
                    s.BX)("div", {
                        className: "relative flex w-2/3 items-center border-r border-navy-700 pb-3 pl-5 pt-2.5 md:justify-center md:pl-0 lg:w-20 lg:flex-1 lg:flex-col",
                        children: [(0,
                        s.tZ)("svg", {
                            viewBox: "0 0 28 28",
                            className: "block h-7 w-7 fill-current text-gold",
                            children: (0,
                            s.tZ)("path", {
                                d: "M5.75018 3.41724L7.39985 5.0669C6.53189 5.93266 5.84358 6.96141 5.37447 8.09403C4.90536 9.22665 4.66471 10.4408 4.66635 11.6667C4.66635 14.2451 5.71052 16.5784 7.39985 18.2666L5.75135 19.9151C4.66632 18.8332 3.80577 17.5475 3.21914 16.132C2.63251 14.7165 2.33137 13.199 2.33302 11.6667C2.33106 10.1344 2.63195 8.61671 3.21838 7.20099C3.80481 5.78526 4.66523 4.49938 5.75018 3.41724V3.41724ZM22.2492 3.41724C23.3341 4.49938 24.1946 5.78526 24.781 7.20099C25.3674 8.61671 25.6683 10.1344 25.6663 11.6667C25.6683 13.1991 25.3674 14.7168 24.781 16.1325C24.1946 17.5482 23.3341 18.8341 22.2492 19.9162L20.5995 18.2666C21.4675 17.4008 22.1558 16.3721 22.6249 15.2394C23.094 14.1068 23.3347 12.8927 23.333 11.6667C23.333 9.0884 22.2888 6.75507 20.5995 5.0669L22.248 3.4184L22.2492 3.41724ZM9.04952 6.71657L10.7004 8.3674C10.2663 8.80014 9.92207 9.3144 9.68741 9.88061C9.45276 10.4468 9.33232 11.0538 9.33302 11.6667C9.33302 12.9559 9.85568 14.1226 10.7004 14.9661L9.04952 16.6169C8.39855 15.9675 7.88234 15.1959 7.53056 14.3464C7.17878 13.4969 6.99836 12.5862 6.99968 11.6667C6.99968 9.73357 7.78368 7.98357 9.04952 6.71657ZM18.9498 6.71657C19.6008 7.36593 20.117 8.13755 20.4688 8.98707C20.8206 9.83659 21.001 10.7473 20.9997 11.6667C21.001 12.5862 20.8206 13.4969 20.4688 14.3464C20.117 15.1959 19.6008 15.9675 18.9498 16.6169L17.299 14.9661C17.7331 14.5333 18.0773 14.0191 18.312 13.4529C18.5466 12.8866 18.667 12.2796 18.6663 11.6667C18.667 11.0538 18.5466 10.4468 18.312 9.88061C18.0773 9.3144 17.7331 8.80014 17.299 8.3674L18.9498 6.71657V6.71657ZM13.9997 14.0001C13.3808 14.0001 12.7874 13.7542 12.3498 13.3167C11.9122 12.8791 11.6663 12.2856 11.6663 11.6667C11.6663 11.0479 11.9122 10.4544 12.3498 10.0168C12.7874 9.57924 13.3808 9.3334 13.9997 9.3334C14.6185 9.3334 15.212 9.57924 15.6496 10.0168C16.0872 10.4544 16.333 11.0479 16.333 11.6667C16.333 12.2856 16.0872 12.8791 15.6496 13.3167C15.212 13.7542 14.6185 14.0001 13.9997 14.0001ZM13.9997 16.3334C14.6763 16.3334 15.2562 16.8152 15.381 17.4802L16.9163 25.6667H11.083L12.6183 17.4802C12.7432 16.8152 13.323 16.3334 13.9997 16.3334Z"
                            })
                        }), (0,
                        s.tZ)("h2", {
                            className: "my-1 ml-2 text-center text-sm font-semibold uppercase leading-none text-gold lg:ml-0",
                            children: r("livedrop")
                        }), (0,
                        s.BX)("div", {
                            className: "ml-6 flex flex-col items-center lg:ml-0",
                            children: [(0,
                            s.BX)("div", {
                                className: "mb-px flex items-center text-center text-xs font-semibold text-white",
                                children: [(0,
                                s.tZ)("div", {
                                    className: "green-dot-pulse mr-1.5 inline-block h-[6px] w-[6px] flex-shrink-0 rounded-full bg-green"
                                }), (0,
                                s.tZ)("span", {
                                    className: "s-online",
                                    children: null != a && a.countOnline ? (0,
                                    P.V2)()(null == a ? void 0 : a.countOnline) : (0,
                                    s.tZ)(s.HY, {
                                        children: " "
                                    })
                                })]
                            }), (0,
                            s.tZ)("div", {
                                className: "text-center text-3xs font-medium uppercase leading-none text-navy-100",
                                children: r("online")
                            })]
                        })]
                    }), (0,
                    s.BX)("div", {
                        className: "flex w-1/3 self-stretch overflow-hidden md:bg-navy-600 lg:w-16 lg:flex-col",
                        children: [(0,
                        s.BX)("button", {
                            className: (0,
                            P.cn)("transition-fast flex flex-1 flex-col items-center justify-center px-1 text-navy-100 md:hover:bg-navy-500", "best" === t && "bg-navy-550 text-gold"),
                            onClick: n,
                            children: [(0,
                            s.tZ)("svg", {
                                viewBox: "0 0 18 18",
                                className: "mb-1 h-[18px] w-[18px] fill-current",
                                children: (0,
                                s.tZ)("path", {
                                    d: "M2.09991 3.89988L5.24991 5.99988L8.38941 1.60488C8.45879 1.50766 8.55039 1.42841 8.65657 1.37373C8.76276 1.31905 8.88048 1.29053 8.99991 1.29053C9.11935 1.29053 9.23706 1.31905 9.34325 1.37373C9.44944 1.42841 9.54104 1.50766 9.61041 1.60488L12.7499 5.99988L15.8999 3.89988C16.0191 3.82056 16.1586 3.77703 16.3017 3.77443C16.4449 3.77183 16.5858 3.81026 16.7078 3.88519C16.8298 3.96013 16.9279 4.06842 16.9903 4.19728C17.0527 4.32614 17.077 4.47018 17.0602 4.61238L15.8279 15.0876C15.8064 15.2701 15.7187 15.4383 15.5814 15.5603C15.4442 15.6824 15.2669 15.7499 15.0832 15.7499H2.91666C2.73296 15.7499 2.55566 15.6824 2.41839 15.5603C2.28111 15.4383 2.19341 15.2701 2.17191 15.0876L0.939664 4.61163C0.923014 4.46949 0.947378 4.32556 1.00988 4.19682C1.07238 4.06808 1.17041 3.95991 1.2924 3.88507C1.41438 3.81024 1.55523 3.77187 1.69832 3.7745C1.8414 3.77712 1.98075 3.82063 2.09991 3.89988V3.89988ZM8.99991 11.2499C9.39774 11.2499 9.77927 11.0918 10.0606 10.8105C10.3419 10.5292 10.4999 10.1477 10.4999 9.74988C10.4999 9.35205 10.3419 8.97052 10.0606 8.68922C9.77927 8.40791 9.39774 8.24988 8.99991 8.24988C8.60209 8.24988 8.22056 8.40791 7.93925 8.68922C7.65795 8.97052 7.49991 9.35205 7.49991 9.74988C7.49991 10.1477 7.65795 10.5292 7.93925 10.8105C8.22056 11.0918 8.60209 11.2499 8.99991 11.2499Z"
                                })
                            }), (0,
                            s.tZ)("div", {
                                className: "whitespace-nowrap text-center text-3xs font-semibold uppercase leading-none",
                                children: "Best Drop"
                            })]
                        }), (0,
                        s.tZ)("div", {
                            className: "h-px bg-navy-700"
                        }), (0,
                        s.BX)("button", {
                            className: (0,
                            P.cn)("transition-fast flex flex-1 flex-col items-center justify-center px-1 text-navy-100 md:hover:bg-navy-500", "all" === t && "bg-navy-550 text-gold"),
                            onClick: o,
                            children: [(0,
                            s.tZ)("svg", {
                                viewBox: "0 0 20 20",
                                className: "mb-1 h-[18px] w-[18px] fill-current",
                                children: (0,
                                s.tZ)("path", {
                                    d: "M3.33366 2.5H16.667L18.3337 5.83333V16.6667C18.3337 16.8877 18.2459 17.0996 18.0896 17.2559C17.9333 17.4122 17.7213 17.5 17.5003 17.5H2.50033C2.27931 17.5 2.06735 17.4122 1.91107 17.2559C1.75479 17.0996 1.66699 16.8877 1.66699 16.6667V5.83667L3.33366 2.5ZM10.8337 11.6667V8.33333H9.16699V11.6667H6.66699L10.0003 15L13.3337 11.6667H10.8337ZM16.4703 5.83333L15.637 4.16667H4.36449L3.53116 5.83333H16.4703Z"
                                })
                            }), (0,
                            s.tZ)("div", {
                                className: "whitespace-nowrap text-center text-3xs font-semibold uppercase leading-none",
                                children: "All Drop"
                            })]
                        })]
                    })]
                })
            }
              , $e = n(637)
              , Ye = n(18)
              , Ve = function() {
                return (0,
                s.BX)(s.HY, {
                    children: [(0,
                    s.tZ)("div", {
                        className: "h-12 w-12 rounded-lg bg-transparent"
                    }), (0,
                    s.BX)("div", {
                        className: "flex w-full items-center justify-center",
                        children: [(0,
                        s.tZ)("div", {
                            className: "mr-1.5 h-5 w-5 flex-shrink-0 rounded-full bg-transparent object-cover"
                        }), (0,
                        s.tZ)("div", {
                            className: "truncate text-[0.5rem] font-semibold uppercase leading-none text-white"
                        })]
                    })]
                })
            }
              , Xe = function(e) {
                var t = e.data
                  , n = (0,
                R.Z)({
                    upgrader: "donut-chart",
                    case: "box",
                    contract: "contracts",
                    event: "event"
                }, "free-case-battle", "ticket")[t.dropSource] || "box"
                  , o = {
                    case: (0,
                    s.tZ)(Ye.Z, {
                        variant: "CASE_THUMBNAIL_SMALL",
                        src: t.caseImage,
                        alt: "",
                        className: "my-3 aspect-[2/2.3] min-h-0 flex-1 rounded object-cover",
                        style: {
                            boxShadow: "0 3px 12px rgb(0 0 0 / 40%)"
                        }
                    }),
                    event: (0,
                    s.tZ)("img", {
                        src: (0,
                        P.$o)("event-coin.png"),
                        alt: "",
                        className: "my-5 aspect-[2/2.3] min-h-0 flex-1 rounded object-contain"
                    })
                }[t.dropSource] || (0,
                s.tZ)(et, {
                    name: n,
                    className: "my-auto h-12 w-12 text-[var(--color,white)]"
                });
                return (0,
                s.BX)(s.HY, {
                    children: [o, (0,
                    s.BX)("div", {
                        className: "flex w-full items-center justify-center",
                        children: [(0,
                        s.tZ)("img", {
                            src: t.userAvatar,
                            alt: "User Profile Image",
                            className: "mr-1.5 h-5 w-5 flex-shrink-0 rounded-full object-cover"
                        }), (0,
                        s.tZ)("div", {
                            className: "truncate text-[0.5rem] font-semibold uppercase leading-none text-white",
                            children: t.userName
                        })]
                    })]
                })
            }
              , We = ["name"]
              , qe = ["data"];
            function Ke(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function Je(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ke(Object(n), !0).forEach((function(t) {
                        (0,
                        R.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ke(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var Qe = function(e) {
                var t = e.name
                  , n = (0,
                B.Z)(e, We);
                return (0,
                s.tZ)("svg", Je(Je({}, n), {}, {
                    children: (0,
                    s.tZ)("use", {
                        xlinkHref: (0,
                        P.lI)(t)
                    })
                }))
            }
              , et = function(e) {
                var t = e.name
                  , n = e.className;
                return "event" === t ? (0,
                s.tZ)("img", {
                    src: (0,
                    P.$o)("event-coin.png"),
                    alt: "",
                    className: "-mt-px mr-1 h-2.5 w-2.5 object-contain"
                }) : (0,
                s.tZ)(Qe, {
                    name: t,
                    className: n
                })
            }
              , tt = function(e) {
                var t = e.date
                  , n = (0,
                E.Z)()
                  , o = {
                    minutes: n("timer.minutes"),
                    seconds: n("timer.seconds")
                }
                  , r = 1e3 * Number(t)
                  , a = (0,
                y.useState)(Re(r, o))
                  , i = (0,
                b.Z)(a, 2)
                  , l = i[0]
                  , c = i[1];
                return (0,
                y.useEffect)((function() {
                    var e = setInterval((function() {
                        return c(Re(r, o))
                    }
                    ), 1e3);
                    return function() {
                        return clearInterval(e)
                    }
                }
                ), [c]),
                (0,
                s.tZ)("div", {
                    className: "w-full truncate text-center text-[0.4375rem] font-semibold leading-none text-white opacity-70",
                    children: l
                })
            }
              , nt = function(e) {
                var t = e.data
                  , n = (0,
                B.Z)(e, qe)
                  , o = (0,
                y.useState)(!1)
                  , r = (0,
                b.Z)(o, 2)
                  , a = r[0]
                  , i = r[1]
                  , l = (0,
                E.Z)()
                  , c = (0,
                P.w4)(t.productName)
                  , u = (0,
                R.Z)({
                    upgrader: "donut-chart",
                    case: "box",
                    contract: "contracts",
                    event: "event"
                }, "free-case-battle", "ticket")[t.dropSource] || "box"
                  , d = (0,
                R.Z)({
                    upgrader: (0,
                    s.BX)("span", {
                        children: [l("dropSource.upgrade"), " ", (0,
                        s.BX)("span", {
                            className: "opacity-60",
                            children: [t.percent, "%"]
                        })]
                    }),
                    case: l("dropSource.case"),
                    contract: l("dropSource.contract"),
                    event: l("dropSource.event")
                }, "free-case-battle", l("dropSource.freeCaseBattle"))[t.dropSource] || l("dropSource.case")
                  , p = "event" === t.dropSource ? null : (0,
                s.tZ)(et, {
                    name: u,
                    className: "absolute left-1/2 top-1/2 z-[-1] mr-1 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-[0.07]"
                });
                return (0,
                s.BX)("a", Je(Je({
                    href: "/user/profile/".concat(t.idSteam),
                    className: "group relative z-0 block h-full overflow-hidden bg-navy-800 bg-bottom bg-no-repeat",
                    style: {
                        width: 116,
                        "--color": "Skins" === t.type ? Pe[t.bg] : Le[t.bg]
                    }
                }, n), {}, {
                    onMouseOver: function() {
                        return i(!0)
                    },
                    onMouseLeave: function() {
                        return i(!1)
                    },
                    children: [(0,
                    s.BX)("div", {
                        className: "relative flex h-full transform flex-col items-center p-2 transition-transform duration-300 ease-out group-hover:-translate-y-full",
                        children: [(0,
                        s.BX)("div", {
                            className: "flex items-center text-[0.4375rem] font-semibold text-white opacity-70",
                            children: [(0,
                            s.tZ)(et, {
                                name: u,
                                className: "-mt-px mr-1 h-2.5 w-2.5"
                            }), d]
                        }), (0,
                        s.BX)("div", {
                            className: "relative z-0 min-h-0 w-4/5 flex-1",
                            children: [p, (0,
                            s.tZ)(Ye.Z, {
                                variant: "SKIN_THUMBNAIL_SMALL",
                                src: t.productImage,
                                alt: "Skin Image",
                                className: "h-16 min-h-0 w-full object-contain"
                            })]
                        }), (0,
                        s.BX)("div", {
                            className: "w-full truncate text-center text-[0.5625rem] font-semibold uppercase leading-none text-white",
                            children: [(0,
                            P.BG)(c.top) ? (0,
                            s.tZ)("span", {
                                className: "text-orange-500",
                                children: "ST"
                            }) : null, " ", (0,
                            P.$L)(c.top)]
                        }), (0,
                        s.tZ)("div", {
                            className: "my-px w-full truncate text-center text-[0.5rem] font-medium leading-none text-white opacity-50",
                            children: c.bottom
                        }), (0,
                        s.tZ)(tt, {
                            date: t.dateUnix
                        })]
                    }), (0,
                    s.tZ)("div", {
                        className: "flex h-full w-full transform flex-col items-center p-2 transition-transform duration-300 ease-out group-hover:-translate-y-full",
                        children: a ? (0,
                        s.tZ)(Xe, {
                            data: t
                        }) : (0,
                        s.tZ)(Ve, {})
                    }), (0,
                    s.tZ)("div", {
                        className: "absolute inset-0 z-[-1] opacity-30 transition-opacity duration-300 group-hover:opacity-30",
                        style: {
                            backgroundImage: "linear-gradient(transparent 30%, var(--color))"
                        }
                    }), (0,
                    s.tZ)("div", {
                        className: "absolute bottom-0 left-0 h-px w-full",
                        style: {
                            backgroundColor: "var(--color, #999)"
                        }
                    })]
                }))
            };
            function ot(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function rt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ot(Object(n), !0).forEach((function(t) {
                        (0,
                        R.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var at = function(e) {
                var t = e.drops
                  , n = e.newDropsCount
                  , o = N(P.BC.js.sm);
                return (0,
                s.tZ)("div", {
                    className: "h-full w-screen flex-shrink-0 overflow-hidden",
                    children: (0,
                    s.tZ)(k.E.ul, {
                        style: {
                            left: 117 * -n
                        },
                        animate: {
                            x: [0, 117 * n]
                        },
                        transition: {
                            duration: .618,
                            ease: $e.Aq.easeOut
                        },
                        className: "relative flex h-full gap-px will-change-transform",
                        children: t.map((function(e, t) {
                            var r = t <= n - 1
                              , a = n - t - 1
                              , i = o ? .17 - .02 * n : 0
                              , l = a * i
                              , c = .618 / n + a * i;
                            return (0,
                            s.tZ)(k.E.li, rt(rt({
                                className: "flex-shrink-0"
                            }, r && {
                                animate: o ? {
                                    y: ["-100%", "0%"]
                                } : {},
                                transition: {
                                    delay: l,
                                    duration: c,
                                    ease: $e.Aq.easeOut
                                }
                            }), {}, {
                                children: (0,
                                s.tZ)(nt, {
                                    data: e
                                })
                            }), "".concat(e.hash, "_").concat(t))
                        }
                        ))
                    }, "".concat(t[0].hash, "_list"))
                })
            }
              , it = function() {
                var e, t, n, o, r = (e = (0,
                y.useState)((function() {
                    return {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }
                )),
                t = (0,
                b.Z)(e, 2),
                n = t[0],
                o = t[1],
                (0,
                y.useEffect)((function() {
                    function e() {
                        o({
                            width: window.innerWidth,
                            height: window.innerHeight
                        })
                    }
                    return window.addEventListener("resize", e),
                    function() {
                        return window.removeEventListener("resize", e)
                    }
                }
                ), []),
                n).width, a = (0,
                E.Z)(), i = Math.ceil(r / 116), l = (0,
                y.useRef)(null), c = (0,
                Q.e)(He, {
                    context: {
                        rowLength: i
                    },
                    actions: {
                        initSocket: function() {
                            l.current = (0,
                            O.io)(window.__layout.livedropSocketUrl, {
                                path: "/livedrop/",
                                transports: ["websocket"]
                            })
                        }
                    },
                    services: {
                        invokeSocket: function() {
                            return function(e) {
                                return l.current.once("bestdrop", (function(t) {
                                    var n = JSON.parse(t).map((function(e) {
                                        return Be(e)
                                    }
                                    ));
                                    e({
                                        type: "ADD_BEST_ITEMS",
                                        data: n
                                    })
                                }
                                )),
                                l.current.on("drop", (function(t) {
                                    var n = JSON.parse(t).map((function(e) {
                                        return Be(e)
                                    }
                                    ));
                                    e({
                                        type: "ADD_ITEMS",
                                        data: n
                                    })
                                }
                                )),
                                function() {
                                    var e, t;
                                    null === (e = l.current) || void 0 === e || e.off("bestdrop"),
                                    null === (t = l.current) || void 0 === t || t.off("drop")
                                }
                            }
                        }
                    }
                }), u = (0,
                b.Z)(c, 2), d = u[0], p = u[1], f = Ie(), h = (0,
                C.YD)(), m = (0,
                b.Z)(h, 2), g = m[0], w = m[1];
                return (0,
                y.useEffect)((function() {
                    p({
                        type: "CHANGE_ROW_LENGTH",
                        data: i
                    })
                }
                ), [i]),
                (0,
                y.useEffect)((function() {
                    p(f && w ? "ON" : "OFF")
                }
                ), [f, w]),
                (0,
                s.BX)("div", {
                    className: "flex flex-col bg-navy-900 lg:flex-row",
                    children: [(0,
                    s.tZ)(Ge, {
                        currentTab: d.matches("tab.all") ? "all" : "best",
                        onSelectBestDrops: function() {
                            return p({
                                type: "CHANGE_TO_BEST"
                            })
                        },
                        onSelectAllDrops: function() {
                            return p({
                                type: "CHANGE_TO_ALL"
                            })
                        }
                    }), (0,
                    s.BX)("div", {
                        ref: g,
                        className: "relative ml-px grid h-29 w-full overflow-hidden",
                        onMouseOver: function() {
                            return p("OFF")
                        },
                        onMouseLeave: function() {
                            return p("ON")
                        },
                        children: [(0,
                        s.BX)("div", {
                            className: "absolute left-0 top-0 z-10 flex h-full w-16 -translate-x-full transform cursor-default flex-col items-center justify-center bg-navy-700 bg-opacity-50 p-2 text-xs font-bold text-red transition duration-300 ease-in-out real-hover:opacity-50 [*:hover_>_&]:translate-x-0",
                            children: [(0,
                            s.tZ)("svg", {
                                viewBox: "0 0 24 24",
                                className: "h-5 w-5 fill-current",
                                children: (0,
                                s.tZ)("path", {
                                    d: "M14,19H18V5H14M6,19H10V5H6V19Z"
                                })
                            }), (0,
                            s.tZ)("span", {
                                className: "uppercase",
                                children: a("paused")
                            })]
                        }), d.hasTag("waitingForInitialData") ? (0,
                        s.tZ)(st, {}) : (0,
                        s.BX)(z.M, {
                            initial: !1,
                            children: [d.matches("tab.best") && (0,
                            s.tZ)(k.E.div, {
                                initial: {
                                    y: "-100%"
                                },
                                animate: {
                                    y: 0
                                },
                                exit: {
                                    y: "-100%"
                                },
                                className: "col-start-1 col-end-2 row-start-1 row-end-2 h-full min-h-0",
                                children: (0,
                                s.tZ)(at, {
                                    drops: d.context.bestDrops,
                                    newDropsCount: d.context.newBestDropsCount
                                })
                            }, "tab.best"), d.matches("tab.all") && (0,
                            s.tZ)(k.E.div, {
                                initial: {
                                    y: "100%"
                                },
                                animate: {
                                    y: 0
                                },
                                exit: {
                                    y: "100%"
                                },
                                className: "col-start-1 col-end-2 row-start-1 row-end-2 h-full min-h-0",
                                children: (0,
                                s.tZ)(at, {
                                    drops: d.context.allDrops,
                                    newDropsCount: d.context.newAllDropsCount
                                })
                            }, "tab.all")]
                        })]
                    })]
                })
            }
              , st = function() {
                return (0,
                s.tZ)("div", {
                    className: "relative h-29",
                    children: (0,
                    s.tZ)("div", {
                        className: "absolute inset-0 z-0 h-full",
                        children: [{
                            color: "#5e98d9",
                            icon: "box"
                        }, {
                            color: "#5e98d9",
                            icon: "box"
                        }, {
                            color: "#8847ff",
                            icon: "donut-chart"
                        }, {
                            color: "#8847ff",
                            icon: "box"
                        }, {
                            color: "#d32ce6",
                            icon: "donut-chart"
                        }, {
                            color: "#5e98d9",
                            icon: "box"
                        }, {
                            color: "#eb4b4b",
                            icon: "box"
                        }, {
                            color: "#5e98d9",
                            icon: "box"
                        }, {
                            color: "#5e98d9",
                            icon: "donut-chart"
                        }, {
                            color: "#8847ff",
                            icon: "box"
                        }, {
                            color: "#d32ce6",
                            icon: "box"
                        }, {
                            color: "#5e98d9",
                            icon: "donut-chart"
                        }, {
                            color: "#d32ce6",
                            icon: "box"
                        }, {
                            color: "#b0c3d9",
                            icon: "box"
                        }, {
                            color: "#5e98d9",
                            icon: "donut-chart"
                        }, {
                            color: "#b0c3d9",
                            icon: "box"
                        }, {
                            color: "#5e98d9",
                            icon: "donut-chart"
                        }, {
                            color: "#8847ff",
                            icon: "box"
                        }, {
                            color: "#5e98d9",
                            icon: "box"
                        }].map((function(e, t) {
                            return (0,
                            s.BX)("div", {
                                className: "absolute left-0 top-0 z-0 h-full w-[116px] overflow-hidden bg-navy-800 bg-bottom bg-no-repeat",
                                style: {
                                    left: "".concat(117 * t, "px")
                                },
                                children: [(0,
                                s.tZ)("div", {
                                    className: "absolute inset-0 z-[-1] opacity-30 transition-opacity duration-300 group-hover:opacity-30",
                                    style: {
                                        backgroundImage: "linear-gradient(transparent 30%, ".concat(e.color, ")")
                                    }
                                }), (0,
                                s.tZ)("svg", {
                                    className: "absolute left-1/2 top-1/2 mr-1 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-[.07]",
                                    children: (0,
                                    s.tZ)("use", {
                                        xlinkHref: (0,
                                        P.lI)(e.icon)
                                    })
                                }), (0,
                                s.tZ)("div", {
                                    className: "absolute bottom-0 left-0 h-px w-full",
                                    style: {
                                        backgroundColor: e.color
                                    }
                                })]
                            }, "livedrop-placeholder-".concat(t))
                        }
                        ))
                    })
                })
            }
              , lt = ["as", "icon", "iconClassName", "className", "label", "children"];
            function ct(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function ut(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ct(Object(n), !0).forEach((function(t) {
                        (0,
                        R.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ct(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var dt, pt = (0,
            y.forwardRef)((function(e, t) {
                var n = e.as
                  , o = void 0 === n ? "button" : n
                  , r = e.icon
                  , a = e.iconClassName
                  , i = void 0 === a ? "w-4 h-4 flex-shrink-0" : a
                  , l = e.className
                  , c = void 0 === l ? "" : l
                  , u = e.label
                  , d = void 0 === u ? "" : u
                  , p = e.children
                  , f = (0,
                B.Z)(e, lt);
                return (0,
                s.tZ)(o, ut(ut({
                    ref: t,
                    className: (0,
                    P.cn)("button", c)
                }, f), {}, {
                    children: null != p ? p : (0,
                    s.BX)(s.HY, {
                        children: [r ? (0,
                        s.tZ)(r, {
                            className: (0,
                            P.cn)(i, d ? "mr-2" : "")
                        }) : null, d ? (0,
                        s.tZ)("span", {
                            children: d
                        }) : null]
                    })
                }))
            }
            )), ft = n(229), ht = n(853), mt = function(e) {
                var t = e.value
                  , n = void 0 === t ? 0 : t
                  , o = e.render
                  , r = void 0 === o ? function(e) {
                    return e
                }
                : o
                  , a = (0,
                y.useRef)()
                  , i = (0,
                y.useRef)(n);
                return (0,
                y.useEffect)((function() {
                    var e = {
                        value: i.current
                    };
                    String(i.current) !== String(n) ? ht.p8.to(e, {
                        value: n,
                        duration: .5,
                        onUpdate: function() {
                            a.current && (a.current.innerText = r(e.value))
                        }
                    }) : a.current.innerText = String(r(n))
                }
                ), [n]),
                (0,
                y.useEffect)((function() {
                    i.current = n
                }
                ), [n]),
                (0,
                s.tZ)("span", {
                    "data-testid": "animated-number",
                    ref: a
                })
            };
            !function(e) {
                e.DIV_BALANCE_CONTAINER = "balance",
                e.LABEL_USER_ACCOUNT_FUNDS = "header-account-balance",
                e.LABEL_SKINS_BALANCE = "skins-balance"
            }(dt || (dt = {}));
            var yt = n(880)
              , gt = n(891)
              , wt = n(895)
              , vt = n(893)
              , bt = n(897)
              , kt = n(898)
              , zt = n(877)
              , xt = n(889)
              , jt = n(899)
              , Ct = n(887)
              , St = n(878)
              , Et = n(904)
              , Nt = n(885);
            function Ot(e, t, n, o) {
                let r = (0,
                Nt.E)(n);
                (0,
                y.useEffect)((()=>{
                    function n(e) {
                        r.current(e)
                    }
                    return (e = null != e ? e : window).addEventListener(t, n, o),
                    ()=>e.removeEventListener(t, n, o)
                }
                ), [e, t, o])
            }
            var Tt = n(890)
              , Zt = n(884)
              , It = (e=>(e[e.Forwards = 0] = "Forwards",
            e[e.Backwards = 1] = "Backwards",
            e))(It || {});
            function Pt() {
                let e = (0,
                y.useRef)(0);
                return function(e, t, n) {
                    let o = (0,
                    Nt.E)(t);
                    (0,
                    y.useEffect)((()=>{
                        function t(e) {
                            o.current(e)
                        }
                        return window.addEventListener(e, t, n),
                        ()=>window.removeEventListener(e, t, n)
                    }
                    ), [e, n])
                }("keydown", (t=>{
                    "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0)
                }
                ), !0),
                e
            }
            var Lt, At, Dt = n(886), Rt = ((At = Rt || {})[At.Open = 0] = "Open",
            At[At.Closed = 1] = "Closed",
            At), Bt = ((Lt = Bt || {})[Lt.TogglePopover = 0] = "TogglePopover",
            Lt[Lt.ClosePopover = 1] = "ClosePopover",
            Lt[Lt.SetButton = 2] = "SetButton",
            Lt[Lt.SetButtonId = 3] = "SetButtonId",
            Lt[Lt.SetPanel = 4] = "SetPanel",
            Lt[Lt.SetPanelId = 5] = "SetPanelId",
            Lt);
            let Mt = {
                0: e=>({
                    ...e,
                    popoverState: (0,
                    yt.E)(e.popoverState, {
                        0: 1,
                        1: 0
                    })
                }),
                1: e=>1 === e.popoverState ? e : {
                    ...e,
                    popoverState: 1
                },
                2: (e,t)=>e.button === t.button ? e : {
                    ...e,
                    button: t.button
                },
                3: (e,t)=>e.buttonId === t.buttonId ? e : {
                    ...e,
                    buttonId: t.buttonId
                },
                4: (e,t)=>e.panel === t.panel ? e : {
                    ...e,
                    panel: t.panel
                },
                5: (e,t)=>e.panelId === t.panelId ? e : {
                    ...e,
                    panelId: t.panelId
                }
            }
              , Ft = (0,
            y.createContext)(null);
            function _t(e) {
                let t = (0,
                y.useContext)(Ft);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Popover /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, _t),
                    t
                }
                return t
            }
            Ft.displayName = "PopoverContext";
            let Ut = (0,
            y.createContext)(null);
            function Ht(e) {
                let t = (0,
                y.useContext)(Ut);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Popover /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, Ht),
                    t
                }
                return t
            }
            Ut.displayName = "PopoverAPIContext";
            let Gt = (0,
            y.createContext)(null);
            function $t() {
                return (0,
                y.useContext)(Gt)
            }
            Gt.displayName = "PopoverGroupContext";
            let Yt = (0,
            y.createContext)(null);
            function Vt(e, t) {
                return (0,
                yt.E)(t.type, Mt, e, t)
            }
            Yt.displayName = "PopoverPanelContext";
            let Xt = gt.AN.RenderStrategy | gt.AN.Static
              , Wt = gt.AN.RenderStrategy | gt.AN.Static
              , qt = (0,
            gt.yV)((function(e, t) {
                var n;
                let o = (0,
                y.useRef)(null)
                  , r = (0,
                wt.T)(t, (0,
                wt.h)((e=>{
                    o.current = e
                }
                )))
                  , a = (0,
                y.useRef)([])
                  , i = (0,
                y.useReducer)(Vt, {
                    popoverState: 1,
                    buttons: a,
                    button: null,
                    buttonId: null,
                    panel: null,
                    panelId: null,
                    beforePanelSentinel: (0,
                    y.createRef)(),
                    afterPanelSentinel: (0,
                    y.createRef)()
                })
                  , [{popoverState: s, button: l, buttonId: c, panel: u, panelId: d, beforePanelSentinel: p, afterPanelSentinel: f},h] = i
                  , m = (0,
                Et.i)(null != (n = o.current) ? n : l)
                  , g = (0,
                y.useMemo)((()=>{
                    if (!l || !u)
                        return !1;
                    for (let e of document.querySelectorAll("body > *"))
                        if (Number(null == e ? void 0 : e.contains(l)) ^ Number(null == e ? void 0 : e.contains(u)))
                            return !0;
                    let e = (0,
                    zt.GO)()
                      , t = e.indexOf(l)
                      , n = (t + e.length - 1) % e.length
                      , o = (t + 1) % e.length
                      , r = e[n]
                      , a = e[o];
                    return !u.contains(r) && !u.contains(a)
                }
                ), [l, u])
                  , w = (0,
                Nt.E)(c)
                  , v = (0,
                Nt.E)(d)
                  , b = (0,
                y.useMemo)((()=>({
                    buttonId: w,
                    panelId: v,
                    close: ()=>h({
                        type: 1
                    })
                })), [w, v, h])
                  , k = $t()
                  , z = null == k ? void 0 : k.registerPopover
                  , x = (0,
                Zt.z)((()=>{
                    var e;
                    return null != (e = null == k ? void 0 : k.isFocusWithinPopoverGroup()) ? e : (null == m ? void 0 : m.activeElement) && ((null == l ? void 0 : l.contains(m.activeElement)) || (null == u ? void 0 : u.contains(m.activeElement)))
                }
                ));
                (0,
                y.useEffect)((()=>null == z ? void 0 : z(b)), [z, b]),
                Ot(null == m ? void 0 : m.defaultView, "focus", (e=>{
                    var t, n, o, r;
                    0 === s && (x() || l && u && e.target !== window && (null != (n = null == (t = p.current) ? void 0 : t.contains) && n.call(t, e.target) || null != (r = null == (o = f.current) ? void 0 : o.contains) && r.call(o, e.target) || h({
                        type: 1
                    })))
                }
                ), !0),
                (0,
                Ct.O)([l, u], ((e,t)=>{
                    h({
                        type: 1
                    }),
                    (0,
                    zt.sP)(t, zt.tJ.Loose) || (e.preventDefault(),
                    null == l || l.focus())
                }
                ), 0 === s);
                let j = (0,
                Zt.z)((e=>{
                    h({
                        type: 1
                    });
                    let t = e ? e instanceof HTMLElement ? e : "current"in e && e.current instanceof HTMLElement ? e.current : l : l;
                    null == t || t.focus()
                }
                ))
                  , C = (0,
                y.useMemo)((()=>({
                    close: j,
                    isPortalled: g
                })), [j, g])
                  , S = (0,
                y.useMemo)((()=>({
                    open: 0 === s,
                    close: j
                })), [s, j])
                  , E = e
                  , N = {
                    ref: r
                };
                return y.createElement(Yt.Provider, {
                    value: null
                }, y.createElement(Ft.Provider, {
                    value: i
                }, y.createElement(Ut.Provider, {
                    value: C
                }, y.createElement(xt.up, {
                    value: (0,
                    yt.E)(s, {
                        0: xt.ZM.Open,
                        1: xt.ZM.Closed
                    })
                }, (0,
                gt.sY)({
                    ourProps: N,
                    theirProps: E,
                    slot: S,
                    defaultTag: "div",
                    name: "Popover"
                })))))
            }
            ))
              , Kt = (0,
            gt.yV)((function(e, t) {
                let n = (0,
                vt.M)()
                  , {id: o=`headlessui-popover-button-${n}`, ...r} = e
                  , [a,i] = _t("Popover.Button")
                  , {isPortalled: s} = Ht("Popover.Button")
                  , l = (0,
                y.useRef)(null)
                  , c = `headlessui-focus-sentinel-${(0,
                vt.M)()}`
                  , u = $t()
                  , d = null == u ? void 0 : u.closeOthers
                  , p = null !== (0,
                y.useContext)(Yt);
                (0,
                y.useEffect)((()=>{
                    if (!p)
                        return i({
                            type: 3,
                            buttonId: o
                        }),
                        ()=>{
                            i({
                                type: 3,
                                buttonId: null
                            })
                        }
                }
                ), [p, o, i]);
                let[f] = (0,
                y.useState)((()=>Symbol()))
                  , h = (0,
                wt.T)(l, t, p ? null : e=>{
                    if (e)
                        a.buttons.current.push(f);
                    else {
                        let e = a.buttons.current.indexOf(f);
                        -1 !== e && a.buttons.current.splice(e, 1)
                    }
                    a.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),
                    e && i({
                        type: 2,
                        button: e
                    })
                }
                )
                  , m = (0,
                wt.T)(l, t)
                  , g = (0,
                Et.i)(l)
                  , w = (0,
                Zt.z)((e=>{
                    var t, n, o;
                    if (p) {
                        if (1 === a.popoverState)
                            return;
                        switch (e.key) {
                        case bt.R.Space:
                        case bt.R.Enter:
                            e.preventDefault(),
                            null == (n = (t = e.target).click) || n.call(t),
                            i({
                                type: 1
                            }),
                            null == (o = a.button) || o.focus()
                        }
                    } else
                        switch (e.key) {
                        case bt.R.Space:
                        case bt.R.Enter:
                            e.preventDefault(),
                            e.stopPropagation(),
                            1 === a.popoverState && (null == d || d(a.buttonId)),
                            i({
                                type: 0
                            });
                            break;
                        case bt.R.Escape:
                            if (0 !== a.popoverState)
                                return null == d ? void 0 : d(a.buttonId);
                            if (!l.current || null != g && g.activeElement && !l.current.contains(g.activeElement))
                                return;
                            e.preventDefault(),
                            e.stopPropagation(),
                            i({
                                type: 1
                            })
                        }
                }
                ))
                  , v = (0,
                Zt.z)((e=>{
                    p || e.key === bt.R.Space && e.preventDefault()
                }
                ))
                  , b = (0,
                Zt.z)((t=>{
                    var n, o;
                    (0,
                    kt.P)(t.currentTarget) || e.disabled || (p ? (i({
                        type: 1
                    }),
                    null == (n = a.button) || n.focus()) : (t.preventDefault(),
                    t.stopPropagation(),
                    1 === a.popoverState && (null == d || d(a.buttonId)),
                    i({
                        type: 0
                    }),
                    null == (o = a.button) || o.focus()))
                }
                ))
                  , k = (0,
                Zt.z)((e=>{
                    e.preventDefault(),
                    e.stopPropagation()
                }
                ))
                  , z = 0 === a.popoverState
                  , x = (0,
                y.useMemo)((()=>({
                    open: z
                })), [z])
                  , j = (0,
                jt.f)(e, l)
                  , C = p ? {
                    ref: m,
                    type: j,
                    onKeyDown: w,
                    onClick: b
                } : {
                    ref: h,
                    id: a.buttonId,
                    type: j,
                    "aria-expanded": e.disabled ? void 0 : 0 === a.popoverState,
                    "aria-controls": a.panel ? a.panelId : void 0,
                    onKeyDown: w,
                    onKeyUp: v,
                    onClick: b,
                    onMouseDown: k
                }
                  , S = Pt()
                  , E = (0,
                Zt.z)((()=>{
                    let e = a.panel;
                    e && (0,
                    yt.E)(S.current, {
                        [It.Forwards]: ()=>(0,
                        zt.jA)(e, zt.TO.First),
                        [It.Backwards]: ()=>(0,
                        zt.jA)(e, zt.TO.Last)
                    }) === zt.fE.Error && (0,
                    zt.jA)((0,
                    zt.GO)().filter((e=>"true" !== e.dataset.headlessuiFocusGuard)), (0,
                    yt.E)(S.current, {
                        [It.Forwards]: zt.TO.Next,
                        [It.Backwards]: zt.TO.Previous
                    }), {
                        relativeTo: a.button
                    })
                }
                ));
                return y.createElement(y.Fragment, null, (0,
                gt.sY)({
                    ourProps: C,
                    theirProps: r,
                    slot: x,
                    defaultTag: "button",
                    name: "Popover.Button"
                }), z && !p && s && y.createElement(Tt._, {
                    id: c,
                    features: Tt.A.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: E
                }))
            }
            ))
              , Jt = (0,
            gt.yV)((function(e, t) {
                let n = (0,
                vt.M)()
                  , {id: o=`headlessui-popover-overlay-${n}`, ...r} = e
                  , [{popoverState: a},i] = _t("Popover.Overlay")
                  , s = (0,
                wt.T)(t)
                  , l = (0,
                xt.oJ)()
                  , c = null !== l ? (l & xt.ZM.Open) === xt.ZM.Open : 0 === a
                  , u = (0,
                Zt.z)((e=>{
                    if ((0,
                    kt.P)(e.currentTarget))
                        return e.preventDefault();
                    i({
                        type: 1
                    })
                }
                ))
                  , d = (0,
                y.useMemo)((()=>({
                    open: 0 === a
                })), [a]);
                return (0,
                gt.sY)({
                    ourProps: {
                        ref: s,
                        id: o,
                        "aria-hidden": !0,
                        onClick: u
                    },
                    theirProps: r,
                    slot: d,
                    defaultTag: "div",
                    features: Xt,
                    visible: c,
                    name: "Popover.Overlay"
                })
            }
            ))
              , Qt = (0,
            gt.yV)((function(e, t) {
                let n = (0,
                vt.M)()
                  , {id: o=`headlessui-popover-panel-${n}`, focus: r=!1, ...a} = e
                  , [i,s] = _t("Popover.Panel")
                  , {close: l, isPortalled: c} = Ht("Popover.Panel")
                  , u = `headlessui-focus-sentinel-before-${(0,
                vt.M)()}`
                  , d = `headlessui-focus-sentinel-after-${(0,
                vt.M)()}`
                  , p = (0,
                y.useRef)(null)
                  , f = (0,
                wt.T)(p, t, (e=>{
                    s({
                        type: 4,
                        panel: e
                    })
                }
                ))
                  , h = (0,
                Et.i)(p);
                (0,
                Dt.e)((()=>(s({
                    type: 5,
                    panelId: o
                }),
                ()=>{
                    s({
                        type: 5,
                        panelId: null
                    })
                }
                )), [o, s]);
                let m = (0,
                xt.oJ)()
                  , g = null !== m ? (m & xt.ZM.Open) === xt.ZM.Open : 0 === i.popoverState
                  , w = (0,
                Zt.z)((e=>{
                    var t;
                    switch (e.key) {
                    case bt.R.Escape:
                        if (0 !== i.popoverState || !p.current || null != h && h.activeElement && !p.current.contains(h.activeElement))
                            return;
                        e.preventDefault(),
                        e.stopPropagation(),
                        s({
                            type: 1
                        }),
                        null == (t = i.button) || t.focus()
                    }
                }
                ));
                (0,
                y.useEffect)((()=>{
                    var t;
                    e.static || 1 === i.popoverState && (null == (t = e.unmount) || t) && s({
                        type: 4,
                        panel: null
                    })
                }
                ), [i.popoverState, e.unmount, e.static, s]),
                (0,
                y.useEffect)((()=>{
                    if (!r || 0 !== i.popoverState || !p.current)
                        return;
                    let e = null == h ? void 0 : h.activeElement;
                    p.current.contains(e) || (0,
                    zt.jA)(p.current, zt.TO.First)
                }
                ), [r, p, i.popoverState]);
                let v = (0,
                y.useMemo)((()=>({
                    open: 0 === i.popoverState,
                    close: l
                })), [i, l])
                  , b = {
                    ref: f,
                    id: o,
                    onKeyDown: w,
                    onBlur: r && 0 === i.popoverState ? e=>{
                        var t, n, o, r, a;
                        let l = e.relatedTarget;
                        l && p.current && (null != (t = p.current) && t.contains(l) || (s({
                            type: 1
                        }),
                        (null != (o = null == (n = i.beforePanelSentinel.current) ? void 0 : n.contains) && o.call(n, l) || null != (a = null == (r = i.afterPanelSentinel.current) ? void 0 : r.contains) && a.call(r, l)) && l.focus({
                            preventScroll: !0
                        })))
                    }
                    : void 0,
                    tabIndex: -1
                }
                  , k = Pt()
                  , z = (0,
                Zt.z)((()=>{
                    let e = p.current;
                    e && (0,
                    yt.E)(k.current, {
                        [It.Forwards]: ()=>{
                            var t;
                            (0,
                            zt.jA)(e, zt.TO.First) === zt.fE.Error && (null == (t = i.afterPanelSentinel.current) || t.focus())
                        }
                        ,
                        [It.Backwards]: ()=>{
                            var e;
                            null == (e = i.button) || e.focus({
                                preventScroll: !0
                            })
                        }
                    })
                }
                ))
                  , x = (0,
                Zt.z)((()=>{
                    let e = p.current;
                    e && (0,
                    yt.E)(k.current, {
                        [It.Forwards]: ()=>{
                            var e;
                            if (!i.button)
                                return;
                            let t = (0,
                            zt.GO)()
                              , n = t.indexOf(i.button)
                              , o = t.slice(0, n + 1)
                              , r = [...t.slice(n + 1), ...o];
                            for (let t of r.slice())
                                if ("true" === t.dataset.headlessuiFocusGuard || null != (e = i.panel) && e.contains(t)) {
                                    let e = r.indexOf(t);
                                    -1 !== e && r.splice(e, 1)
                                }
                            (0,
                            zt.jA)(r, zt.TO.First, {
                                sorted: !1
                            })
                        }
                        ,
                        [It.Backwards]: ()=>{
                            var t;
                            (0,
                            zt.jA)(e, zt.TO.Previous) === zt.fE.Error && (null == (t = i.button) || t.focus())
                        }
                    })
                }
                ));
                return y.createElement(Yt.Provider, {
                    value: o
                }, g && c && y.createElement(Tt._, {
                    id: u,
                    ref: i.beforePanelSentinel,
                    features: Tt.A.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: z
                }), (0,
                gt.sY)({
                    ourProps: b,
                    theirProps: a,
                    slot: v,
                    defaultTag: "div",
                    features: Wt,
                    visible: g,
                    name: "Popover.Panel"
                }), g && c && y.createElement(Tt._, {
                    id: d,
                    ref: i.afterPanelSentinel,
                    features: Tt.A.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: x
                }))
            }
            ))
              , en = (0,
            gt.yV)((function(e, t) {
                let n = (0,
                y.useRef)(null)
                  , o = (0,
                wt.T)(n, t)
                  , [r,a] = (0,
                y.useState)([])
                  , i = (0,
                Zt.z)((e=>{
                    a((t=>{
                        let n = t.indexOf(e);
                        if (-1 !== n) {
                            let e = t.slice();
                            return e.splice(n, 1),
                            e
                        }
                        return t
                    }
                    ))
                }
                ))
                  , s = (0,
                Zt.z)((e=>(a((t=>[...t, e])),
                ()=>i(e))))
                  , l = (0,
                Zt.z)((()=>{
                    var e;
                    let t = (0,
                    St.r)(n);
                    if (!t)
                        return !1;
                    let o = t.activeElement;
                    return !(null == (e = n.current) || !e.contains(o)) || r.some((e=>{
                        var n, r;
                        return (null == (n = t.getElementById(e.buttonId.current)) ? void 0 : n.contains(o)) || (null == (r = t.getElementById(e.panelId.current)) ? void 0 : r.contains(o))
                    }
                    ))
                }
                ))
                  , c = (0,
                Zt.z)((e=>{
                    for (let t of r)
                        t.buttonId.current !== e && t.close()
                }
                ))
                  , u = (0,
                y.useMemo)((()=>({
                    registerPopover: s,
                    unregisterPopover: i,
                    isFocusWithinPopoverGroup: l,
                    closeOthers: c
                })), [s, i, l, c])
                  , d = (0,
                y.useMemo)((()=>({})), [])
                  , p = e
                  , f = {
                    ref: o
                };
                return y.createElement(Gt.Provider, {
                    value: u
                }, (0,
                gt.sY)({
                    ourProps: f,
                    theirProps: p,
                    slot: d,
                    defaultTag: "div",
                    name: "Popover.Group"
                }))
            }
            ))
              , tn = Object.assign(qt, {
                Button: Kt,
                Overlay: Jt,
                Panel: Qt,
                Group: en
            });
            var nn = n(638);
            function on(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function rn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? on(Object(n), !0).forEach((function(t) {
                        (0,
                        R.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : on(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            ht.p8.registerPlugin(nn.W);
            var an, sn = function(e) {
                var t = (0,
                y.useRef)(null)
                  , n = (0,
                y.useRef)(null)
                  , o = (0,
                y.useRef)(null)
                  , r = (0,
                y.useRef)(null)
                  , a = (0,
                y.useRef)(null)
                  , i = (0,
                y.useRef)(null);
                return (0,
                y.useEffect)((function() {
                    var e = ht.p8.timeline({
                        repeat: -1,
                        yoyo: !0,
                        defaults: {
                            ease: "power4.inOut",
                            duration: .1,
                            delay: .08
                        }
                    })
                      , s = i.current;
                    return e.to(s, {
                        morphSVG: t.current ? t.current : void 0
                    }).to(s, {
                        morphSVG: n.current ? n.current : void 0
                    }).to(s, {
                        morphSVG: o.current ? o.current : void 0
                    }).to(s, {
                        morphSVG: r.current ? r.current : void 0
                    }).to(s, {
                        morphSVG: a.current ? a.current : void 0
                    }).to(s, {
                        morphSVG: i.current ? i.current : void 0
                    }),
                    document.addEventListener("visibilitychange", (function() {
                        "visible" === document.visibilityState ? e.play() : (e.progress(0),
                        e.pause())
                    }
                    )),
                    function() {
                        e.kill()
                    }
                }
                ), []),
                (0,
                s.BX)("svg", rn(rn({
                    viewBox: "0 0 270 190"
                }, e), {}, {
                    children: [(0,
                    s.BX)("defs", {
                        children: [(0,
                        s.tZ)("path", {
                            ref: t,
                            d: "M200.9,5.8l0.5,0c0.9,0.1,1.3,0.6,1.4,1.4l2.4,4c0,0.1,0.1,0.1,0.1,0.1c1.1,1.4,2.3,2,3.5,1.9l1.7-1.3\n          c1.1,1,1.8,2.1,1.9,3.4l-2.3,1.7c0.4,0.9,0.3,2,0,3l-1.6,1.2l-0.8-0.1l-36,27.3l0.2,1.4c-15.7,12.7-24.2,20.5-25.5,23.3\n          c-1.7,1.5-3.5,2.3-5.4,2.2l-8.3,6.2c-0.2,0.1-0.3,0.5-0.1,1c0,0.2,0.1,0.4,0.1,0.6c0.1,0.3,0.3,0.7,0.5,1\n          c7.3,7.7,18.3,11.5,33.2,11.3l1.4,15c-19.2,0.4-34.6-4.6-46-14.8l-1.3,1c2,1.7,1.7,3.4-0.9,5.1c0.4,0.9,0.3,1.8-0.7,2.7\n          c-1.3,1.3-2.9,2.6-4.5,3.8c-1.6,1.3-2.7,2.1-3.1,2.5c-0.7,0.5-1.4,0.7-2.4,0.5c-0.4-0.1-0.8-0.2-1.1-0.5c-0.7,2.9,0.2,8.1,2.7,15.5\n          c1.5,2.9,2.2,4.9,2.1,5.9c-1.8,2.2-3.9,3.3-6.4,3.4c-1.6,0.1-2.9-0.2-4-0.9c-0.5-0.4-0.9-1-1.2-1.6c-0.2-0.4-0.3-0.9-0.4-1.4\n          l-3-10.6c-0.4-1.3-1.4-2.6-3.4-3.8c-0.9-0.5-1.6-1.3-2-2.4c-1.5,1-2.8,2.5-4.1,4.5c-9.6,15.9-18.6,32.3-27.2,49.1\n          c-1,0.9-2,1.2-3.1,0.7c-6-6.2-12.1-11.6-18-16.3c-0.3-0.5-0.5-0.8-0.6-1.3c-0.1-0.4,0.1-0.7,0.4-0.9l23.8-25.3\n          c1-1.1,2.8-1.9,5.5-2.3l9.6-10.8l0.8-0.2l4.2-4.5c-0.3-2.2-0.2-3.9,0.4-5.2l0.1-0.1c0-0.1,0-0.1,0-0.1c-0.2-1.3-0.1-2.4,0-3.4\n          c0.2-1,0.6-1.6,1.2-2.1c0,0,0.1,0,0.1-0.1l40.9-30.7l-0.4-0.9l1.2-0.9c0.1-0.4,0-0.6-0.4-0.6c0-0.1-0.2-0.1-0.2-0.1l-2.1,1.5\n          l-0.9-1.2c-0.1-0.1,0-0.3,0.4-0.6c0.4-0.1,0.7,0.1,1.1,0.6l1.4-1c0-1.3,0.6-1.9,1.8-1.6l0,0c1-1.4,2.1-2.2,3.6-2.2l-0.4-0.6l1.8-1.3\n          c-0.1-0.4,0.1-0.7,0.5-1l0.8,0l1.4-1l0.3,0.5c1-1.6,2.2-1.6,3.8,0.2c-0.2-0.8-0.4-1.5-0.2-2l22-15.4c0.3-0.2,0.5-0.2,0.9-0.1\n          c0.2,0,0.4,0.1,0.5,0.3l16-11.9c1.9,0.9,4.2,1.5,6.7,1.7l2.5-0.8l1.3,0.4l11.2-8.3l-1-1.4l-1.1-7.6c-0.2,0-0.4-0.2-0.6-0.3\n          c-0.9-0.7-1-1.5-0.2-2.5L200.9,5.8L200.9,5.8z M206,20.7l-1.9,1.4l-0.4-0.6l-11.8,8.8l0.6,1.4L207,20.9L206,20.7z M180.9,32\n          l-11.1,8.3l1.2,1.6l11.1-8.3L180.9,32z M173.6,45.7l11.4-8.5l-0.6-0.8L173,44.9L173.6,45.7z M115.2,97.7c-0.2-0.3-0.6-0.3-1,0\n          l-4.8,3.6c-0.2,0.7-0.3,1.2-0.3,1.7c0,0.3,0,0.6,0.1,0.8c0,0.2,0.1,0.3,0.3,0.5c1.3,1.6,2.7,1.9,4.6,1l-0.4,0.9\n          c-1,0.7-2,0.9-3.2,0.7c-1.2-0.2-2.1-0.8-2.8-1.7c-0.5,0.3-1,0.4-1.4,0.4c-0.5-0.1-0.8-0.2-1-0.4l3,3.5l0,0.8\n          c0.3,0.1,0.4,0.2,0.7,0.2c0.8,0.2,1.5,0.1,2.1-0.3c0.5-0.4,1.4-1.2,2.9-2.2c1.4-1.2,2.8-2.4,4.1-3.6c0.3-0.4,0.6-0.8,0.7-1.2\n          L115.2,97.7L115.2,97.7z"
                        }), (0,
                        s.tZ)("path", {
                            ref: n,
                            d: "M166.4679,42.2745c-0.932,0.3234-1.7347,1.0197-2.2216,2.024l-6.4512,13.3078c0.4107-2.1266,0.2584-4.3711-0.4531-6.4216c-1.1643-3.3553-3.253-5.7633-6.2661-7.2239c-3.1386-1.5215-6.1973-1.6088-9.5526-0.4445c-3.1689,1.0996-5.5769,3.1883-7.0375,6.2014c-1.5215,3.1386-1.6697,6.3228-0.57,9.4917c1.1643,3.3553,3.1883,5.5769,6.327,7.0984c1.8832,0.9129,3.8234,1.3883,5.8815,1.3007c-0.1864,0.0647-0.1864,0.0647-0.2473,0.1902c-4.4205,0.803-7.1596,1.3358-8.0916,1.6592c-1.6168,0.4566-3.3591,0.8524-5.1662,1.0617c-1.3087,0.1408-2.6173,0.2817-3.9907,0.2361c-1.6206,0.1447-3.1804,0.1638-4.7401,0.1829c-1.9326,0.1485-3.5455,0.9171-4.7095,2.6785l-20.8797,32.5166c-0.4831,1.3163-0.1635,1.9364,0.7686,1.613l20.8188-32.391c1.2287-1.5751,2.777-2.53,4.8351-2.6177c1.4342-0.08,2.994-0.0991,4.6146-0.2438c1.3125,0.1711,2.6212,0.0303,3.9907-0.2361c1.807-0.2094,3.9868-0.5481,6.7868-1.2064c1.6815-0.2702,4.0439-0.9856,7.0264-2.0205c1.1184-0.3881,2.176-0.6507,3.2983-0.7268c0.1864-0.0647,0.312-0.0038,0.6239-0.0076c0.3766,0.1826,0.9397,0.3005,1.3772,0.3575l-0.6086,1.2555c-0.2434,0.5022-0.3613,1.0652-0.4792,1.6283c-1.9479-1.0993-4.1353-1.3845-6.1858-0.673c-2.1152,0.5251-3.6596,1.792-4.5725,3.6752c-0.5592,0.1941-1.1184,0.3881-1.7994,0.8333c-1.7956,1.1452-3.3324,3.036-4.424,5.6078c-1.8793-0.601-3.5647-0.6427-5.1814-0.1861c-2.7276,1.4686-5.1394,3.2454-7.4218,5.3949l1.4231,4.1009c-0.1826,0.3766-0.4907,0.6924-0.738,0.8826c-0.2473,0.1902-0.4337,0.2549-0.6201,0.3196c-0.9397-0.3005-1.9402-0.4754-2.7505-0.4031c-1.2478,0.0153-1.9934,0.274-2.6097,0.9056c-0.0609,0.1255-0.1217,0.2511-0.3081,0.3158c-1.7194,2.2675-3.1877,4.6567-4.5913,7.2322l2.6215,5.147l-5.4781,1.0655c-1.2134,2.8229-2.1148,5.6419-2.7043,8.4571l3.8769,5.7556c-1.0044-0.4869-1.8794-0.601-2.8114-0.2775s-1.613,0.7686-2.039,1.6474c-0.0911,2.7467-0.0567,5.5543,0.4152,8.4189c0.1447,1.6206,0.2208,2.7429,0.2932,3.5532l1.381,0.6695c0.2511,0.1217,0.6277,0.3043,1.0044,0.4869l-0.3916,3.6864c5.6725,4.6104,11.2041,7.9122,16.8422,9.7151c4.4967,0.3193,7.6694-0.4684,9.3926-2.4239l3.1272,0.5857c0.3081-0.3158,0.5554-0.506,0.7418-0.5707c3.6558-2.104,6.9311-4.7025,10.0124-7.8603l-2.2751-2.3433l0.6086-1.2554l5.4173-0.94c0.0609-0.1255,0.1217-0.2511,0.3081-0.3158c1.0993-1.9479,2.5676-4.337,4.093-7.1637l-3.116-4.7666l6.2314-0.7004c1.3922-3.5114,2.2251-6.8288,2.8716-10.0815l-4.0442-4.1312l4.6031-1.1796c0.0911-2.7467-0.065-5.3032-0.3467-7.9205l-2.9105-3.2715c-0.0038-0.312-0.0685-0.4984-0.0723-0.8103c0.0571-0.4375,0.1749-1.0005,0.4184-1.5027c0.1749-1.0005,0.658-2.3169,1.5709-4.2c0.7265-1.8185,0.3346-3.2489-1.1111-4.1048c0.7912-1.6321,0.8367-3.0054,0.3193-4.4967c-0.5783-1.3657-1.5903-2.4765-3.036-3.3324c0.7456-0.2587,1.2363-0.9511,1.727-1.6436l12.4156-25.6112c0.4869-1.0044,0.5363-2.0658,0.0873-3.0587c-0.2626-1.0576-1.0197-1.7347-2.024-2.2216l0,0C168.5869,42.0614,167.5863,41.8864,166.4679,42.2745z M155.5773,59.9423c-0.4869,1.0044-1.0385,1.8223-1.7156,2.5794c-1.3125-0.1711-2.4309,0.217-3.6064,1.0426c-0.8027,0.6962-1.6053,1.3925-2.2824,2.1496c-0.0609,0.1255-0.0609,0.1255-0.0609,0.1255c-2.3016,0.5898-4.6146,0.2438-6.8744-0.8517c-2.6364-1.2781-4.5349-3.4388-5.5052-6.2349c-0.9703-2.7961-0.8791-5.5428,0.4598-8.3048c1.2781-2.6365,3.4388-4.5349,6.2349-5.5052c2.7961-0.9703,5.6683-0.8183,8.3048,0.4598c2.762,1.3389,4.5349,3.4388,5.5052,6.2349C157.0074,54.4336,156.8554,57.3059,155.5773,59.9423z"
                        }), (0,
                        s.tZ)("path", {
                            ref: o,
                            d: "M141.0262,102.4305l9.219-0.1808c39.7681-36.1528,56.7599-61.8214,50.7947-76.8248c-38.5028,34.1644-63.0867,56.2177-74.2941,65.9789c-2.7115,2.7115-4.8806,4.6999-6.3267,6.146c-2.7115-2.7115-5.7845-5.4229-8.6767-7.7729c-1.0846,0.1808-1.6269,0.7231-1.9884,1.6269c3.6153,4.3383,5.6037,7.2306,5.7845,8.8575l-47.7217,48.0833c-0.1808,2.8922,0.9038,5.7844,3.073,8.4959c2.3499,2.5307,3.7961,4.1576,4.5191,5.0614c0.7231,0.7231,1.8076,1.4461,3.073,2.1692c1.0846,0.7231,2.3499,0.7231,3.6153-0.3615c25.307-29.6453,40.6719-46.0949,46.0949-49.3486c0.1808-0.1808,0.5423,0,1.0846,0c1.6269,0.5423,3.796,3.073,7.0498,7.0498l1.9884-1.8076c-1.9884-3.2538-4.3383-6.146-6.5075-9.219C133.6148,106.2266,136.6878,103.5151,141.0262,102.4305z"
                        }), (0,
                        s.tZ)("path", {
                            ref: r,
                            d: "M187.7619,36.7136l-3.0692,0.4597l-0.8653-5.7773l-0.9027,0.1352c0.443-3.2044,0.1185-5.3709-1.154-6.4724c-1.426-0.894-2.6898-0.7047-3.7913,0.5679l-3.2235,4.3592l0.4056,2.7081l-37.7329,5.6517l-0.8653-5.7773l-9.027,1.3521l0.8653,5.7773l-37.0107,5.5435l-2.5451-2.2031L76.9302,44.823l-0.7126-2.2929c7.4379,0.3627,16.0856,0.1749,26.331-0.4367c0.2076,0.1535,1.1103,0.0183,2.7081-0.4056c1.7784-0.451,2.9881-1.0013,3.4215-1.8046c0.641-0.6498,0.7134-1.399,0.2442-2.0671c-0.2887-0.6951-1.8412-1.2009-4.6034-1.1564c-11.5546,1.7307-23.533,1.8635-36.0619,0.7866c-0.9297-0.0453-1.6249,0.2434-2.5005,0.5591c-2.8346,0.7937-4.8388,2.2015-5.8051,4.3767c-0.1265,0.3881-0.1988,1.1373-0.1177,1.6789c0.793,6.5265,1.974,13.1794,3.3357,19.8053c1.461,6.0572,2.0194,12.2497,2.0631,18.7038l-0.8852,2.7169c-0.2712,1.8865,0.5138,3.4303,2.5085,4.4236c1.8141,1.0204,4.9374,0.9218,8.9817-0.4223c1.4173-0.3969,2.4472-4.6121,2.7828-12.2306l10.4713-1.5684l4.8746-0.7301l6.8605-1.0276c7.6718,4.3886,11.4981,8.984,11.479,13.7862c-2.0336,12.303-2.3247,22.6836-1.0538,31.169l11.7351-1.7577l7.2742,48.5653l14.9848-2.2445l-7.2742-48.5653l2.5276-0.3786l-4.0833-27.2615c1.0832-0.1622,4.1795-0.4414,9.4422-1.0451c5.2897-0.4231,8.8194-1.5056,11.1847-2.9674s3.2235-4.3592,2.755-8.7192c-0.649-4.333,0.0286-7.2033,1.8793-8.4035l26.7199-4.0022l-1.3521-9.027l3.0692-0.4597l-0.676-4.5135l20.7621-3.1098l-0.9465-6.3189l-20.7621,3.1098L187.7619,36.7136z M147.7759,67.9917l8.6659-1.298c-0.1988,1.1373,0.1257,3.3038,0.5854,6.373c0.2792,3.0962-0.4525,5.6055-2.2492,7.1667c-1.9501,1.7688-5.6874,2.6978-10.9771,3.1209c-5.1362,0.2155-8.0336-0.6426-8.277-2.2675l-1.6495-11.0129l7.2216-1.0817c-0.0366,2.2206,0.676,4.5135,1.5421,6.5989c1.2813,2.3923,2.5626,4.7847,4.3314,6.7348c0.3611-0.0541,0.7222-0.1082,1.0562-0.3428c0.1535-0.2076,0.4875-0.4422,0.4334-0.8033c-1.2001-1.8507-1.9398-4.3242-2.0114-7.2669c-0.1893-1.2638,0.163-2.6087,0.5154-3.9536C147.216,69.1831,147.6494,68.3798,147.7759,67.9917z M65.961,52.9267c-0.3698-1.2367-0.5591-2.5005-0.5408-3.6108c-0.0088-1.2908-0.0175-2.5816,0.1543-3.8995c0.1988-1.1373,0.9663-2.1752,2.149-2.9061l1.2638-0.1893l5.0098,0.1726l-0.0636,2.04l3.9481,26.3588c-4.197-2.1402-6.8597-2.6643-8.3494-1.5183c-0.0541-0.3611-0.0811-0.5416-0.1352-0.9027c-0.0541-0.3611-0.1082-0.7222-0.3428-1.0562c-0.3698-1.2367-0.5591-2.5005-0.7214-3.5838c-0.3969-1.4173-0.7397-2.4735-0.956-3.9178c-0.3428-1.0562-0.5321-2.32-0.7214-3.5838C66.3125,55.2737,66.1232,54.0099,65.961,52.9267z"
                        }), (0,
                        s.tZ)("path", {
                            ref: a,
                            d: "M170.4072,40.3326c-1.9574,0.4194-3.9148,1.3981-5.4527,3.0759c-0.5592,0.5592-1.3981,1.1185-2.3768,1.6778c-3.2157,1.2583-6.711,1.8176-10.0665,1.3981c-1.6777-0.2796-3.3555-0.1398-4.8935,0.4194c-1.5379,0.4194-2.9361,0.8389-4.3342,1.5379c-2.0972,0.9787-3.2157,2.7963-3.2157,5.3129c1.1185,1.1185,1.3981,2.3768,0.6991,3.6351c-0.6991,1.8176-1.8176,3.4953-3.3555,4.8935c0,0.2796,0.1398,0.5593,0.1398,0.6991c1.6777,1.1185,3.3555,1.1185,4.8934-0.1398l-1.6777,5.1731c-0.6991-0.2796-1.3981-0.4194-2.0972-0.5592c-1.5379-0.4194-2.7963-1.2583-4.0546-2.5166c-0.5592-0.4194-1.1185-0.6991-1.9574-0.8389c-0.5592,0-1.1185,0.2796-1.5379,0.2796c0.4194,0.5592,0.9787,0.9787,1.5379,1.3981c1.3981,1.5379,1.9574,3.2157,1.6778,5.0333c0,0.6991,0,1.2583,0.1398,1.8176c1.3981,2.9361,3.4953,4.0546,6.8508,3.3555c0.9787-0.2796,1.8176-0.6991,2.6564-1.3981c0.4194-0.2796,0.8389-0.8389,1.1185-1.2583c0.8389-1.8176,1.5379-3.4953,2.0972-5.3129c1.9574,0.8389,3.9148,0.6991,6.012-0.1398c1.9574-0.8389,3.4953-2.0972,4.6138-4.0546c0.4194-0.9787,1.1185-1.6778,2.237-2.0972c2.0972,1.2583,3.4953,3.2157,3.7749,5.7323c0,1.1185,0.6991,2.0972,1.6777,2.6564c-0.5592,0.4194-0.6991,1.1185-0.4194,1.9574c0,0,0,0.1398,0.1398,0.2796c-5.4527,3.0759-10.6258,6.2916-15.659,9.6471c-1.8176,1.3981-3.7749,2.9361-5.7323,4.474c-1.8176,1.8176-4.0546,2.237-6.5712,1.8176c-3.4953,0.1398-6.711,0.9787-9.9267,2.5166c-5.0333,2.7963-9.9267,6.1518-14.2609,9.9267c-5.1731,4.3342-10.3462,8.5286-15.6591,12.723c-4.8935,3.6351-9.2277,7.8295-13.2822,12.4434c-1.1185,1.3981-1.6778,2.9361-1.5379,4.474c0.1398,2.3768,0.9787,4.3342,2.5166,6.2916c3.6351,4.474,7.4101,8.948,11.7443,12.8628c2.237,0.4194,4.0546,0.1398,5.8721-1.2583c0.9787-0.8389,2.0972-1.8176,3.0759-2.6564c0.5593-0.2796,0.9787-0.6991,1.3981-1.1185l37.8893-31.5977c2.6564-2.237,4.3342-5.3129,5.3129-8.6684c0.4194-1.9574,0.6991-3.775,0.8389-5.7323c1.6777-1.3981,3.4953-2.7963,5.3129-4.1944c3.3555-2.7963,6.711-5.8721,9.6471-9.2277c1.5379-1.6778,3.0759-3.4953,4.474-5.1731c0.5592,0.1398,0.9787,0.2796,1.5379,0.1398c0.2796,0,0.5593,0,0.9787-0.1398c0.9787-0.1398,1.5379-0.6991,1.9574-1.3981c0.1398-0.2796,0.1398-0.4194,0.1398-0.6991c0.1398,0,0.1398,0,0.2796,0c1.3981,0.1398,2.0972-0.4194,2.0972-1.8176c0-0.2796,0-0.4194,0-0.6991c0.5593,0.1398,1.1185-0.1398,1.6777-0.4194c1.6778,0.2796,3.0759-0.1398,4.0546-1.1185c1.8176-1.6778,3.0759-3.6351,3.7749-5.8721c0.2796-0.9787,0.2796-1.9574,0.1398-2.9361c-0.2796-1.5379-0.8389-3.0759-1.3981-4.474c-0.6991-1.3981-1.2583-2.7963-1.8176-4.1944c-1.5379-3.9148-3.0759-7.9693-4.474-11.8841C177.2581,41.3113,174.1822,40.053,170.4072,40.3326z"
                        })]
                    }), (0,
                    s.tZ)("path", {
                        ref: i,
                        d: "M168.4,21.8l-4.3,2.9l-0.9-1.4l-7.6,5.1l0.4,1.2l-52.2,34.7c-0.4-0.3-0.9-0.6-1.3-1c-1.6,1.2-3.2,2.2-5,3.1\n        c-5.2,3-10.4,6.3-15.7,9.8c-5.1,3.6-8.1,5.6-9.1,6.2c-0.9,0.8-1.4,1.2-1.9,1.7c-2.5,2.3-3.8,4-3.6,5.1c-1.1,0.9-2.6,1.2-3.9,0.8c-1.3,0.6-2,2.1-1.7,3.6l0.8,1.1l5.8,3.9l1,4.2l0.2,0.3l0,0.2c0.1,0.4,0.2,0.8,0.4,1.2l-0.1,0.5c0.4,2,0,4.1-1.1,5.9c-0.9,1.5-2,2.7-3.3,3.8l2.1,3.1c1-0.7,2.1-1.2,3.2-1.5c2.1-0.7,4.4-1,6.6-0.9c4.1,0.1,7.6,3.2,8.1,7.3c5.4,20.8,8.4,32.3,9.3,34.1c1.5,3.8,4.2,7.1,7.7,9.2c0.4,0.9,1.3,1.6,2.3,1.7c0.9,0.2,1.8,0.1,2.6-0.3c0.9-0.4,1.6-1.3,1.7-2.3c0.1-0.3,0.1-0.6,0-0.8c8.6-3.3,16.7-8,23.9-13.8c-0.1-2-1.1-3.8-2.7-5c-6.4-9.2-10.6-19.8-12.2-31c0.5-3.2,3.6-5.7,9.4-7c4.8-1.2,10.8-6.8,17.7-16.5c-4.9-5.9-6.7-10.9-5-15.3c1.7-5.6,11.3-13.5,28.8-23.7c0.4-0.9,0.3-1.9-0.2-2.7l7.7-5.1c0-2.7-2-6.6-6.1-11.5l2.9-1.9C173,27.1,171.3,23.8,168.4,21.8z M138.5,86.1c0.5,1.5,0.9,3,1.1,4.6c0.3,2.3-1.5,4.9-5.5,8.4c-3.5,3-7.5,5.2-11.8,6.6c-2,0.9-4.4,1.1-6.5,0.4c-2-0.6-3.6-2-4.6-3.9c-1-1.9-1.1-4.1-0.3-6.1c1-2.4,2.9-4.3,5.2-5.5c0.7,2.3,2.2,4.2,4.1,5.6l2-0.3c1.7,2.2,4.4,3.3,7.1,2.9c3.3,0.1,5-0.7,4.9-2c-4.6,0.6-9.2-1.2-12.2-4.8c-0.8-0.9-1.3-1.9-1.6-3l8.5-5.6c0.5-0.2,1-0.5,1.6-0.6c1-0.3,2.4,0,4.8,0.9C136.6,83.9,137.8,84.8,138.5,86.1z"
                    })]
                }))
            };
            !function(e) {
                e.QUICK_SELL = "quick_sell",
                e.QUICK_SELL_PANEL = "quick_sell_panel",
                e.QUICK_SELL_SKIN_TILE = "quick_sell_skin_tile",
                e.QUICK_SELL_SKIN_TILE_PLACEHOLDER_ITEM = "quick_sell_skin_tile_placeholder_item"
            }(an || (an = {}));
            var ln, cn, un = n(8), dn = n(29), pn = (null === (ln = n.g) || void 0 === ln || null === (cn = ln.__url) || void 0 === cn ? void 0 : cn.base) || "https://key-drop.com", fn = "/" === new URL(pn).pathname ? "" : new URL(pn).pathname, hn = {
                getUserInventoryUrl: function(e) {
                    return function(e, t) {
                        var n = new URL("".concat(fn, "/").concat("apiData/Profile/getProfileInventoryItems"),pn);
                        return Object.entries(t).forEach((function(e) {
                            var t = (0,
                            b.Z)(e, 2)
                              , o = t[0]
                              , r = t[1];
                            Array.isArray(r) ? r.forEach((function(e) {
                                return n.searchParams.append(o, String(e))
                            }
                            )) : n.searchParams.append(o, String(r))
                        }
                        )),
                        n.toString()
                    }(0, e)
                },
                getSellManyUrl: (0,
                P.fA)(window.__url.base)("skins/Control/sell_many")
            }, mn = function(e) {
                var t, n, o;
                return 1 === (null === (t = e[0]) || void 0 === t ? void 0 : t.data.pagination.pages) ? null === (n = e[e.length - 1]) || void 0 === n || null === (o = n.data) || void 0 === o ? void 0 : o.items : null == e ? void 0 : e.flatMap((function(e) {
                    var t;
                    return null == e || null === (t = e.data) || void 0 === t ? void 0 : t.items
                }
                ))
            }, yn = function() {
                var e = (0,
                r.Z)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0,
                                un.L)(hn.getSellManyUrl(), {
                                    body: {
                                        winners: t
                                    }
                                });
                            case 2:
                                if ((n = e.sent).status) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", Promise.reject(n));
                            case 5:
                                return e.abrupt("return", n);
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), gn = (0,
            Fe.C)({
                id: "QuickSell",
                context: {
                    selectedItems: []
                },
                schema: {
                    events: {},
                    context: {},
                    services: {}
                },
                states: {
                    quickSellInventory: {
                        initial: "idle",
                        states: {
                            idle: {
                                tags: ["inventoryQueryDisabled"],
                                on: {
                                    LOAD_INITIAL_INVENTORY: "loadingInventory"
                                }
                            },
                            loadingInventory: {
                                states: {
                                    fetchin: {
                                        on: {
                                            DONE_LOADING: [{
                                                target: "loaded",
                                                cond: "isActive"
                                            }, "checkIfActive"]
                                        }
                                    },
                                    loaded: {
                                        type: "final"
                                    },
                                    checkIfActive: {
                                        always: {
                                            target: "loaded",
                                            cond: "isActive"
                                        }
                                    }
                                },
                                initial: "fetchin",
                                onDone: "quickSellInventoryItems"
                            },
                            quickSellInventoryItems: {
                                initial: "waitingForSelection",
                                states: {
                                    selecting: {
                                        on: {
                                            SELECT: {
                                                actions: "assignSelectedItem"
                                            },
                                            SELL: {
                                                cond: "hasSelectedItems",
                                                target: "waitingForSellingConfirmation"
                                            },
                                            UNSELECT: [{
                                                target: "waitingForSelection",
                                                actions: "assignUnselectedItem",
                                                cond: "hasSelectedOneItem"
                                            }, {
                                                target: "selecting",
                                                internal: !0,
                                                actions: "assignUnselectedItem"
                                            }]
                                        }
                                    },
                                    waitingForSellingConfirmation: {
                                        on: {
                                            CONFIRM_SELL: {
                                                target: "selling"
                                            },
                                            CANCEL_SELL: {
                                                target: "selecting"
                                            }
                                        }
                                    },
                                    selling: {
                                        invoke: {
                                            src: "sell",
                                            onDone: [{
                                                target: "sold",
                                                actions: "publishSoldSkins"
                                            }],
                                            onError: {
                                                target: "refetchingInventory",
                                                actions: ["showSellingError", "updateBalance"]
                                            }
                                        }
                                    },
                                    sold: {
                                        entry: ["resetSelected", "updateBalance"],
                                        always: "refetchingInventory"
                                    },
                                    waitingForSelection: {
                                        on: {
                                            SELECT: {
                                                target: "selecting",
                                                actions: "assignSelectedItem"
                                            }
                                        }
                                    },
                                    refetchingInventory: {
                                        initial: "loading",
                                        states: {
                                            loading: {
                                                invoke: {
                                                    src: "refetch",
                                                    onDone: {
                                                        target: "loaded",
                                                        actions: "updateSelectedItems"
                                                    },
                                                    onError: {
                                                        target: "loaded",
                                                        actions: "showErrorRefetchMessage"
                                                    }
                                                }
                                            },
                                            loaded: {
                                                type: "final"
                                            }
                                        },
                                        onDone: [{
                                            target: "selecting",
                                            cond: "hasSelectedItems"
                                        }, {
                                            target: "waitingForSelection"
                                        }]
                                    }
                                }
                            }
                        }
                    },
                    inventoryFetchingActivity: {
                        states: {
                            active: {
                                on: {
                                    SUSPEND: "suspended"
                                }
                            },
                            suspended: {},
                            refetchingInventory: {
                                initial: "loading",
                                states: {
                                    loading: {
                                        invoke: {
                                            src: "refetch",
                                            onDone: {
                                                target: "loaded",
                                                actions: "updateSelectedItems"
                                            },
                                            onError: {
                                                target: "loaded",
                                                actions: "showErrorRefetchMessage"
                                            }
                                        }
                                    },
                                    loaded: {
                                        type: "final"
                                    }
                                },
                                onDone: "active"
                            }
                        },
                        initial: "active",
                        on: {
                            RESUME: ".refetchingInventory",
                            REFETCH: {
                                target: ".refetchingInventory",
                                cond: "isActive"
                            }
                        }
                    }
                },
                type: "parallel"
            }, {
                guards: {
                    hasSelectedItems: function(e) {
                        return Boolean(e.selectedItems.length)
                    },
                    hasSelectedOneItem: function(e) {
                        return 1 === e.selectedItems.length
                    },
                    isActive: function(e, t, n) {
                        return n.state.matches("inventoryFetchingActivity.active")
                    }
                },
                actions: {
                    assignSelectedItem: (0,
                    Se.f0)((function(e, t) {
                        if ("SELECT" !== t.type)
                            return e;
                        e.selectedItems.push(t.item)
                    }
                    )),
                    updateSelectedItems: (0,
                    Se.f0)((function(e, t) {
                        if (function(e) {
                            return "done.invoke.QuickSell.inventoryFetchingActivity.refetchingInventory.loading:invocation[0]" === e.type || "done.invoke.QuickSell.quickSellInventory.quickSellInventoryItems.refetchingInventory.loading:invocation[0]" === e.type
                        }(t)) {
                            var n, o = mn(null !== (n = t.data.data.pages) && void 0 !== n ? n : []);
                            e.selectedItems = o.filter((function(t) {
                                return e.selectedItems.some((function(e) {
                                    return t.pfId === e.pfId
                                }
                                ))
                            }
                            ))
                        }
                    }
                    )),
                    assignUnselectedItem: (0,
                    Se.f0)((function(e, t) {
                        if ("UNSELECT" !== t.type)
                            return e;
                        e.selectedItems.splice(e.selectedItems.findIndex((function(e) {
                            return e.pfId === t.item.pfId
                        }
                        )), 1)
                    }
                    )),
                    resetSelected: (0,
                    Se.f0)((function(e) {
                        e.selectedItems = []
                    }
                    ))
                },
                services: {
                    sell: function(e) {
                        return (0,
                        r.Z)(i().mark((function t() {
                            var n;
                            return i().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2,
                                        yn(e.selectedItems.map((function(e) {
                                            return {
                                                productID: e.pfId,
                                                id: e.id
                                            }
                                        }
                                        )));
                                    case 2:
                                        return n = t.sent,
                                        t.abrupt("return", {
                                            skins: e.selectedItems,
                                            data: n
                                        });
                                    case 4:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))
                    }
                }
            });
            function wn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function vn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? wn(Object(n), !0).forEach((function(t) {
                        (0,
                        R.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var bn = "skinsData"
              , kn = function(e) {
                var t = e.pageParam
                  , n = void 0 === t ? 0 : t;
                return (0,
                un.L)(hn.getUserInventoryUrl({
                    page: n,
                    perPage: 18
                }))
            }
              , zn = (0,
            y.createContext)(null)
              , xn = function(e) {
                var t = e.children
                  , n = (0,
                E.Z)()
                  , o = (0,
                dn.E)()
                  , r = o.subscribe
                  , a = o.unsubscribe
                  , i = o.publish
                  , l = (0,
                ft.W)().updateBalanceAndSkinsValue
                  , c = (0,
                Q.e)(gn, {
                    devTools: !0,
                    actions: {
                        updateBalance: function() {
                            window.__layout.updateCoinBalance(),
                            l()
                        },
                        showSellingError: function() {
                            window.__layout.toast({
                                type: "error",
                                title: n("quickSell.error.sellingTitle"),
                                message: n("quickSell.error.sellingTitle")
                            })
                        },
                        publishSoldSkins: function(e, t) {
                            (function(e) {
                                return "done.invoke.QuickSell.quickSellInventory.quickSellInventoryItems.selling:invocation[0]" === e.type
                            }
                            )(t) && i("SKINS_SOLD", {
                                skins: t.data.skins
                            })
                        }
                    },
                    services: {
                        refetch: function() {
                            return h.refetch()
                        }
                    }
                })
                  , u = (0,
                b.Z)(c, 2)
                  , d = u[0]
                  , p = u[1]
                  , f = !d.hasTag("inventoryQueryDisabled") && !d.matches({
                    inventoryFetchingActivity: "suspended"
                })
                  , h = (0,
                v.useInfiniteQuery)(bn, kn, {
                    refetchOnWindowFocus: !1,
                    enabled: f,
                    getNextPageParam: function(e) {
                        var t, n, o, r, a = null === (t = e.data) || void 0 === t || null === (n = t.pagination) || void 0 === n ? void 0 : n.page, i = null === (o = e.data) || void 0 === o || null === (r = o.pagination) || void 0 === r ? void 0 : r.pages;
                        return a + 1 === i || 0 === i ? null : a + 1
                    },
                    onError: function(e) {
                        var t, n = e.error;
                        return window.__layout.toast({
                            type: "error",
                            title: null === (t = window) || void 0 === t ? void 0 : t.lang_title[20],
                            message: n
                        })
                    }
                })
                  , m = Ie();
                (0,
                y.useEffect)((function() {
                    m && p("REFETCH")
                }
                ), [m]),
                (0,
                y.useEffect)((function() {
                    var e = r("RESUME_FETCHING_INVENTORY", (function() {
                        p("RESUME")
                    }
                    ))
                      , t = r("SUSPEND_FETCHING_INVENTORY", (function() {
                        p("SUSPEND")
                    }
                    ));
                    return function() {
                        a(e),
                        a(t)
                    }
                }
                ), [p]),
                (0,
                y.useEffect)((function() {
                    window.__layout.updateQuickSell = function() {
                        return p("REFETCH")
                    }
                }
                ), []);
                var g = d.matches({
                    quickSellInventory: {
                        quickSellInventoryItems: "selling"
                    }
                }) || h.isFetching
                  , w = d.matches({
                    quickSellInventory: {
                        quickSellInventoryItems: "selling"
                    }
                }) || d.matches({
                    quickSellInventory: {
                        quickSellInventoryItems: "refetchingInventory"
                    }
                })
                  , k = !h.isLoading && d.can("DONE_LOADING");
                (0,
                y.useEffect)((function() {
                    k && p("DONE_LOADING")
                }
                ), [k, p]);
                var z = d.matches({
                    quickSellInventory: "loadingInventory"
                });
                return (0,
                s.tZ)(zn.Provider, {
                    value: {
                        machine: [d, p],
                        query: vn(vn({}, h), {}, {
                            fetchNextPage: function() {
                                return f && h.fetchNextPage()
                            },
                            isLoading: z,
                            isFetching: g,
                            isSelling: w
                        })
                    },
                    children: t
                })
            }
              , jn = (0,
            y.memo)((function(e) {
                var t = e.data
                  , n = e.isSelected;
                return (0,
                s.tZ)("div", {
                    "data-testid": an.QUICK_SELL_SKIN_TILE,
                    className: (0,
                    P.cn)("h-full cursor-pointer transition-colors duration-200", n ? "bg-gold-850" : "bg-navy-600 hover:bg-navy-550"),
                    children: (0,
                    s.BX)("div", {
                        className: "pointer-events-none flex h-full flex-col gap-y-1 p-1.5",
                        children: [(0,
                        s.tZ)(Ye.Z, {
                            variant: "SKIN_THUMBNAIL_SMALL",
                            src: t.image,
                            alt: "skin image",
                            className: "aspect-[4/3] object-contain"
                        }), (0,
                        s.tZ)("p", {
                            className: "select-none self-center rounded bg-navy-800 px-2 py-0.5 text-11px font-bold leading-5 text-gold-400",
                            children: (0,
                            P.L6)()(t.price)
                        })]
                    })
                })
            }
            ));
            jn.displayName = "QuickSellSkinTile";
            var Cn = jn
              , Sn = n(9)
              , En = {
                backgroundImage: "linear-gradient(\n    to right,\n    ".concat(Sn.O.navy[600], ",\n    ").concat(Sn.O.navy[500], ",\n    ").concat(Sn.O.navy[600], ",\n    ").concat(Sn.O.navy[500], ",\n    ").concat(Sn.O.navy[600], "\n  )"),
                backgroundSize: "400% 100%"
            }
              , Nn = (0,
            y.memo)((function(e) {
                var t, n = e.count, o = void 0 === n ? 9 : n, r = e.onInView, a = void 0 === r ? function() {}
                : r, i = e.seed, l = void 0 === i ? 0 : i, c = (0,
                y.useRef)(), u = (0,
                P.N2)(null === (t = window.__userInitialData) || void 0 === t ? void 0 : t.currency);
                return (0,
                y.useEffect)((function() {
                    var e = c.current;
                    if (e) {
                        var t = new IntersectionObserver((function(e) {
                            (0,
                            b.Z)(e, 1)[0].isIntersecting && a()
                        }
                        ),{
                            rootMargin: "0px 0px"
                        });
                        return t.observe(e),
                        function() {
                            return t.unobserve(e)
                        }
                    }
                }
                ), [c.current]),
                (0,
                s.tZ)(y.Fragment, {
                    children: Array(o).fill(null).map((function(e, t) {
                        return (0,
                        s.BX)(k.E.div, {
                            ref: 0 === t ? c : null,
                            "data-testid": an.QUICK_SELL_SKIN_TILE_PLACEHOLDER_ITEM,
                            className: "flex h-full cursor-pointer flex-col gap-y-1 bg-navy-600 p-1.5 hover:bg-navy-550",
                            layout: !0,
                            style: En,
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            children: [(0,
                            s.tZ)(sn, {
                                className: "aspect-[4/3] fill-navy-700"
                            }), (0,
                            s.tZ)("p", {
                                className: "self-center rounded bg-navy-800 px-2 py-0.5 text-11px font-bold leading-5 text-gold-400",
                                children: u
                            })]
                        }, "placeholder_".concat(t + l))
                    }
                    ))
                })
            }
            ));
            function On(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function Tn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? On(Object(n), !0).forEach((function(t) {
                        (0,
                        R.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : On(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var Zn = function() {
                var e, t = (0,
                E.Z)(), n = (0,
                y.useContext)(zn), o = n.machine, r = n.query, a = (0,
                b.Z)(o, 2), i = a[0], l = a[1], c = r.data, u = r.isLoading, d = r.hasNextPage, p = r.fetchNextPage, f = r.isSelling;
                (0,
                y.useEffect)((function() {
                    l({
                        type: "LOAD_INITIAL_INVENTORY"
                    })
                }
                ), [l]);
                var h, m, g, w = mn(null !== (e = null == c ? void 0 : c.pages) && void 0 !== e ? e : []), v = i.context.selectedItems.reduce((function(e, t) {
                    return t.price + e
                }
                ), 0), x = (h = (0,
                y.useRef)(!1),
                m = (0,
                y.useRef)(!1),
                g = (0,
                y.useRef)(),
                (0,
                y.useEffect)((function() {
                    var e = function() {
                        h.current = !1,
                        m.current = !1
                    };
                    return document.addEventListener("mouseup", e),
                    function() {
                        document.removeEventListener("mouseup", e)
                    }
                }
                ), []),
                function(e) {
                    var t = e.id
                      , n = void 0 === t ? "" : t
                      , o = e.isSelected
                      , r = void 0 !== o && o
                      , a = e.onSelect
                      , i = void 0 === a ? function() {}
                    : a
                      , s = e.onDeselect
                      , l = void 0 === s ? function() {}
                    : s
                      , c = e.onContextMenu
                      , u = e.onMouseDown
                      , d = e.onMouseMove;
                    return {
                        onContextMenu: function(e) {
                            null == c || c(e),
                            e.preventDefault(),
                            m.current = !0,
                            g.current = n,
                            r && (null == l || l())
                        },
                        onMouseDown: function(e) {
                            0 === e.button && (null == u || u(e),
                            h.current = !0,
                            g.current = n,
                            r ? null == l || l() : null == i || i())
                        },
                        onMouseMove: function(e) {
                            null == d || d(e),
                            g.current !== n && (m.current && r ? null == l || l() : h.current && !r && (null == i || i()))
                        }
                    }
                }
                ), j = i.matches({
                    quickSellInventory: {
                        quickSellInventoryItems: "waitingForSellingConfirmation"
                    }
                }) ? (0,
                s.BX)(k.E.div, {
                    className: "rounded-b-xl bg-navy-800 p-1.5",
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 5
                    },
                    children: [(0,
                    s.tZ)("p", {
                        className: "mb-2 mt-0.5 text-center text-11px font-bold uppercase text-white/90",
                        children: t("quickSell.confirmationQuestionTitle")
                    }), (0,
                    s.BX)("div", {
                        className: "grid grid-cols-2 gap-x-1.5",
                        children: [(0,
                        s.tZ)(pt, {
                            className: "button-primary-dimmed h-9",
                            onClick: function() {
                                return l({
                                    type: "CANCEL_SELL"
                                })
                            },
                            children: t("quickSell.no")
                        }), (0,
                        s.tZ)(pt, {
                            className: "button-primary h-9",
                            onClick: function() {
                                return l({
                                    type: "CONFIRM_SELL"
                                })
                            },
                            children: t("quickSell.yes")
                        })]
                    })]
                }, "confirmation") : (0,
                s.tZ)(k.E.div, {
                    initial: {
                        opacity: 0,
                        y: -5
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 10
                    },
                    className: "p-1.5",
                    children: (0,
                    s.tZ)("button", {
                        disabled: !i.can("SELL"),
                        className: "button button-light-green relative w-full tabular-nums",
                        onClick: function() {
                            return l("SELL")
                        },
                        children: i.context.selectedItems.length ? (0,
                        s.BX)("span", {
                            children: [t("quickSell.sellSelectedFor"), " ", (0,
                            s.tZ)(mt, {
                                value: v,
                                render: (0,
                                P.L6)()
                            }), " (", i.context.selectedItems.length, ")"]
                        }) : t("quickSell.sellSelectedSkins")
                    })
                }, "button");
                return (0,
                s.BX)("div", {
                    "data-testid": an.QUICK_SELL_PANEL,
                    className: "flex min-w-[280px] flex-col rounded-b-xl border-t border-pink-300 bg-navy-800",
                    children: [(0,
                    s.BX)("div", {
                        className: "relative",
                        children: [(0,
                        s.tZ)("div", {
                            className: (0,
                            P.cn)("custom-scrollbar relative grid h-[20rem] w-[20rem] select-none grid-cols-3 content-start gap-0.5 overflow-y-auto overflow-x-hidden transition-opacity duration-200"),
                            children: u || d || null != w && w.length || !w ? (0,
                            s.BX)(z.M, {
                                initial: !1,
                                children: [null == w ? void 0 : w.map((function(e) {
                                    var t = Boolean(i.context.selectedItems.find((function(t) {
                                        return t.pfId === e.pfId
                                    }
                                    )));
                                    return (0,
                                    s.tZ)(k.E.div, Tn(Tn({
                                        layout: !0,
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        }
                                    }, x({
                                        id: e.pfId.toString(),
                                        isSelected: t,
                                        onSelect: function() {
                                            return l({
                                                type: "SELECT",
                                                item: e
                                            })
                                        },
                                        onDeselect: function() {
                                            return l({
                                                type: "UNSELECT",
                                                item: e
                                            })
                                        }
                                    })), {}, {
                                        children: (0,
                                        s.tZ)(Cn, {
                                            data: e,
                                            isSelected: t
                                        })
                                    }), e.pfId)
                                }
                                )), (u || d) && (0,
                                s.tZ)(Nn, {
                                    count: 9,
                                    onInView: p,
                                    seed: null == w ? void 0 : w.length
                                })]
                            }) : (0,
                            s.tZ)("div", {
                                className: "col-span-3 flex h-full items-center justify-center",
                                children: (0,
                                s.tZ)("p", {
                                    className: "mt-6 text-center text-sm",
                                    children: t("quickSell.emptyInventory")
                                })
                            })
                        }), f && (0,
                        s.tZ)(k.E.div, {
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
                                duration: .2,
                                ease: "easeOut"
                            },
                            className: "absolute left-0 top-0 flex h-full w-full items-center justify-center bg-navy-800/60 pb-4 text-center backdrop-blur-[3px]",
                            children: (0,
                            s.tZ)(sn, {
                                className: "h-28 w-28 fill-current text-gold"
                            })
                        })]
                    }), (0,
                    s.tZ)("div", {
                        className: "grid-stack grid h-14",
                        children: (0,
                        s.tZ)(z.M, {
                            initial: !1,
                            children: j
                        })
                    })]
                })
            }
              , In = function() {
                return (0,
                s.tZ)(xn, {
                    children: (0,
                    s.tZ)(tn, {
                        className: "relative flex h-full items-center",
                        children: function(e) {
                            var t = e.open;
                            return (0,
                            s.BX)(s.HY, {
                                children: [(0,
                                s.tZ)(tn.Button, {
                                    className: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-navy-500 transition duration-200 md:hover:bg-navy-300",
                                    children: (0,
                                    s.tZ)("svg", {
                                        className: "h-2.5 w-2.5 text-white transition-transform duration-200 ease-out",
                                        style: {
                                            transform: t ? "rotateX(180deg)" : ""
                                        },
                                        children: (0,
                                        s.tZ)("use", {
                                            xlinkHref: (0,
                                            P.iU)("arrow-down")
                                        })
                                    })
                                }), (0,
                                s.tZ)(ee.u, {
                                    as: y.Fragment,
                                    enter: "duration-200 transform transition ease-out origin-top-right",
                                    enterFrom: "opacity-0 scale-[0.97]",
                                    enterTo: "opacity-100 scale-100",
                                    leave: "duration-200 transform transition ease-in origin-top-right",
                                    leaveFrom: "opacity-100 scale-100",
                                    leaveTo: "opacity-0 scale-[0.97]",
                                    children: (0,
                                    s.tZ)(tn.Panel, {
                                        className: "absolute right-0 top-full z-50",
                                        children: (0,
                                        s.tZ)(Zn, {})
                                    })
                                })]
                            })
                        }
                    })
                })
            }
              , Pn = function(e) {
                var t = e.skinsBalance
                  , n = (0,
                j.$G)("common").t;
                return (0,
                s.BX)("div", {
                    "data-testid": dt.LABEL_SKINS_BALANCE,
                    className: "flex h-full items-center gap-x-2",
                    children: [(0,
                    s.tZ)("div", {
                        className: "flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900",
                        children: (0,
                        s.tZ)(D.PJ, {
                            className: "h-5 w-5 text-pink-400"
                        })
                    }), (0,
                    s.BX)("div", {
                        className: "min-w-[5.2rem]",
                        children: [(0,
                        s.tZ)("div", {
                            className: "text-sm font-bold tabular-nums text-pink-200",
                            children: (0,
                            s.tZ)(mt, {
                                value: t,
                                render: (0,
                                P.L6)()
                            })
                        }), (0,
                        s.tZ)("p", {
                            className: "whitespace-nowrap text-2xs font-semibold uppercase leading-none tracking-wider",
                            children: n("header:skinsValue")
                        })]
                    }), (0,
                    s.tZ)(In, {})]
                })
            }
              , Ln = function(e) {
                var t = e.walletBalance
                  , n = e.skinsBalance
                  , o = (0,
                j.$G)("common").t;
                return (0,
                s.BX)("div", {
                    "data-testid": dt.DIV_BALANCE_CONTAINER,
                    className: "flex h-full items-center gap-x-5",
                    children: [(0,
                    s.BX)("div", {
                        className: "flex items-center gap-x-2",
                        children: [(0,
                        s.tZ)("div", {
                            className: "flex h-7 w-7 items-center justify-center rounded-lg bg-[#000902] lg:h-9 lg:w-9",
                            children: (0,
                            s.tZ)(D.f3, {
                                className: "h-4 w-4 flex-shrink-0 text-lightgreen lg:h-5 lg:w-5"
                            })
                        }), (0,
                        s.BX)("div", {
                            children: [(0,
                            s.tZ)("p", {
                                "data-testid": dt.LABEL_USER_ACCOUNT_FUNDS,
                                className: "text-xs font-bold tabular-nums text-lightgreen lg:text-sm",
                                children: (0,
                                s.tZ)(mt, {
                                    value: t,
                                    render: (0,
                                    P.L6)()
                                })
                            }), (0,
                            s.tZ)("p", {
                                className: "whitespace-nowrap text-2xs font-semibold uppercase leading-none tracking-wider",
                                children: o("header:walletBalance")
                            })]
                        })]
                    }), window.__layout.featureFlags.quickSell && (0,
                    s.tZ)(Pn, {
                        skinsBalance: n
                    })]
                })
            }
              , An = (0,
            y.createContext)(null)
              , Dn = function(e) {
                var t, n = e.children, o = new URLSearchParams(window.location.search), r = o.get("code"), a = o.get("goldenCode"), i = (0,
                y.useState)((t = {
                    promoCode: r,
                    goldenCode: a
                }).promoCode ? "PROMO" : t.goldenCode ? "GOLDEN" : null), l = (0,
                b.Z)(i, 2), c = l[0], u = l[1], d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "PROMO";
                    return u(e)
                };
                return (0,
                y.useEffect)((function() {
                    window.__layout.openCouponModal = d
                }
                ), [d]),
                (0,
                s.tZ)(An.Provider, {
                    value: {
                        open: c,
                        handleOpenModal: d,
                        handleCloseModal: function() {
                            return u(null)
                        },
                        initialPromoCode: r,
                        initialGoldenCode: a
                    },
                    children: n
                })
            }
              , Rn = function() {
                var e = (0,
                y.useContext)(An);
                if (!e)
                    throw new Error("useCouponModalContext() must be used within a <CouponModalContextProvider />");
                return e
            }
              , Bn = ["amount", "onClick"];
            function Mn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            var Fn = (0,
            y.forwardRef)((function(e, t) {
                var n = e.amount
                  , o = e.onClick
                  , r = (0,
                B.Z)(e, Bn);
                return (0,
                s.tZ)("a", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Mn(Object(n), !0).forEach((function(t) {
                            (0,
                            R.Z)(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mn(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({
                    ref: t,
                    href: "/panel/profil/deposit-money",
                    onClick: function(e) {
                        var t, r, a;
                        "new" === (null === (t = window.__userInitialData) || void 0 === t ? void 0 : t.paymentModuleVersion) && (e.preventDefault(),
                        null === (r = (a = window).__openPaymentModal) || void 0 === r || r.call(a, n ? {
                            amount: n
                        } : void 0),
                        null == o || o(e))
                    }
                }, r))
            }
            ));
            Fn.displayName = "LinkToPayment";
            var _n = function(e) {
                var t = e.bonus
                  , n = (0,
                j.$G)("header").t;
                return (0,
                s.tZ)(Fn, {
                    children: (0,
                    s.BX)("button", {
                        "data-testid": H.BTN_ADD_FUNDS,
                        className: "group relative flex h-9 items-center gap-x-3 overflow-hidden whitespace-nowrap rounded-[0.25rem] border border-lightgreen-200 bg-gradient-to-l from-lightgreen-100/25 to-transparent bg-[length:100%_100%] px-2 py-2 transition-[background-size] duration-200 after:absolute after:right-0 after:top-0 after:rotate-12 hover:bg-[length:150%_150%] sm:gap-x-2 sm:bg-gradient-to-r md:h-auto md:rounded-lg lg:px-4 lg:py-3",
                        children: [(0,
                        s.tZ)(D.f3, {
                            className: "h-4 w-4 flex-shrink-0 text-lightgreen lg:h-5 lg:w-5"
                        }), (0,
                        s.BX)("div", {
                            className: "flex gap-1.5",
                            children: [(0,
                            s.tZ)("span", {
                                className: "hidden text-xs font-bold uppercase text-white sm:inline",
                                children: n("deposit")
                            }), t ? (0,
                            s.BX)("span", {
                                className: "text-xs font-bold uppercase text-lightgreen",
                                children: ["+", t, "%"]
                            }) : (0,
                            s.tZ)("svg", {
                                viewBox: "0 0 12 11",
                                className: "h-3 w-3 fill-lightgreen sm:hidden",
                                children: (0,
                                s.tZ)("path", {
                                    d: "M11.1019 7.10003H7.32186V10.98H4.68186V7.10003H0.901855V4.66003H4.68186V0.780029H7.32186V4.66003H11.1019V7.10003Z"
                                })
                            })]
                        }), (0,
                        s.tZ)("div", {
                            className: "absolute right-0 hidden rotate-[30deg] text-6xl font-bold leading-none text-lightgreen-200 opacity-5 transition-transform duration-200 group-hover:-translate-x-6 group-hover:translate-y-3 group-hover:rotate-[30deg] group-hover:scale-125 group-hover:duration-[400ms] group-hover:ease-[cubic-bezier(0.03,0.69,0.15,0.86)] sm:block",
                            children: "$"
                        })]
                    })
                })
            }
              , Un = function(e) {
                var t, n = e.user, o = e.className, r = e.language, a = e.currency, i = e.loggedIn, l = e.loadingFinished, c = e.bonus, u = (0,
                ft.W)().balance, d = (0,
                j.$G)("header").t, p = N(P.BC.js.md);
                return (0,
                s.BX)("div", {
                    className: (0,
                    P.cn)("flex self-stretch rounded-l-2xl md:bg-navy-800/80", o),
                    children: [i && (0,
                    s.tZ)(k.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: .5
                        },
                        className: "hidden items-center gap-x-3 pl-3 lg:flex lg:pl-5",
                        children: (0,
                        s.tZ)(Ln, {
                            walletBalance: null == u ? void 0 : u.wallet,
                            skinsBalance: null == u ? void 0 : u.skinsValue
                        })
                    }), i && (0,
                    s.tZ)(k.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: .5
                        },
                        className: "flex items-center justify-center rounded-l-2xl md:bg-[#121216] md:px-3 lg:px-5",
                        children: (0,
                        s.tZ)(_n, {
                            bonus: c
                        })
                    }), (0,
                    s.BX)("div", {
                        className: "flex items-center self-stretch rounded-l-2xl pl-4 pr-3 md:gap-3 md:bg-navy-550 md:pl-3 lg:gap-4 lg:px-5",
                        children: [i ? (0,
                        s.BX)(s.HY, {
                            children: [(0,
                            s.BX)(k.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: .5
                                },
                                className: "hidden flex-col gap-3 md:flex",
                                children: [(0,
                                s.tZ)(X, {
                                    href: "/panel/profil",
                                    className: "min-w-[10rem] max-w-[12rem] truncate text-sm font-bold text-white md:min-w-[9rem] md:max-w-[11rem]",
                                    children: null == n ? void 0 : n.username
                                }), (0,
                                s.BX)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0,
                                    s.tZ)(X, {
                                        href: "/#gold-area",
                                        className: "cursor-pointer",
                                        children: (0,
                                        s.BX)("span", {
                                            className: "flex items-center gap-1 text-xs font-bold tabular-nums text-gold",
                                            children: [(0,
                                            s.tZ)("img", {
                                                src: (0,
                                                P.$o)("gold-coin.svg"),
                                                alt: "",
                                                className: "h-4 w-4 object-contain"
                                            }), (0,
                                            s.tZ)(mt, {
                                                value: null == u ? void 0 : u.gold,
                                                render: (0,
                                                P.V2)(void 0, {
                                                    maximumFractionDigits: 0
                                                })
                                            })]
                                        })
                                    }), ((null == u ? void 0 : u.eventCoins) || 0 === (null == u ? void 0 : u.eventCoins)) && (0,
                                    s.tZ)(X, {
                                        href: null === (t = window.__layout) || void 0 === t ? void 0 : t.eventURL,
                                        className: "cursor-pointer",
                                        children: (0,
                                        s.BX)("span", {
                                            className: "flex items-center gap-1 text-xs font-bold tabular-nums text-event-points",
                                            children: [(0,
                                            s.tZ)("img", {
                                                src: (0,
                                                P.$o)("event-coin.png"),
                                                alt: "",
                                                className: "h-4 w-4 object-contain"
                                            }), (0,
                                            s.tZ)(mt, {
                                                value: null == u ? void 0 : u.eventCoins,
                                                render: (0,
                                                P.V2)(void 0, {
                                                    maximumFractionDigits: 0
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            }), (0,
                            s.tZ)(k.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: .5
                                },
                                children: (0,
                                s.tZ)(X, {
                                    href: "/panel/profil",
                                    "aria-label": d("header:goToYourProfile"),
                                    className: "hidden h-15 w-15 overflow-hidden rounded-full md:block",
                                    children: (0,
                                    s.tZ)("img", {
                                        src: null == n ? void 0 : n.avatar,
                                        alt: ""
                                    })
                                })
                            })]
                        }) : null, !i && l && (0,
                        s.tZ)(Gn, {
                            className: "hidden md:flex"
                        }), (!p || i) && (0,
                        s.tZ)(k.E.div, {
                            initial: p ? {
                                opacity: 0
                            } : {
                                opacity: 1
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: .5
                            },
                            children: (0,
                            s.tZ)(ie.v, {
                                as: "div",
                                className: "md:relative",
                                children: function(e) {
                                    var t, o = e.close, l = e.open;
                                    return (0,
                                    s.BX)(s.HY, {
                                        children: [(0,
                                        s.BX)(ie.v.Button, {
                                            className: "h-9 w-9 cursor-pointer rounded bg-navy-400 p-2 transition md:h-auto md:w-auto md:rounded-md md:hover:bg-navy-300",
                                            children: [(0,
                                            s.tZ)("svg", {
                                                className: "duration-250 hidden h-2.5 w-2.5 text-white transition ease-out md:block",
                                                css: {
                                                    transform: l ? "rotateX(180deg)" : ""
                                                },
                                                children: (0,
                                                s.tZ)("use", {
                                                    xlinkHref: (0,
                                                    P.iU)("arrow-down")
                                                })
                                            }), (0,
                                            s.tZ)("svg", {
                                                className: "h-5 w-5 text-white md:hidden",
                                                children: (0,
                                                s.tZ)("use", {
                                                    xlinkHref: (0,
                                                    P.iU)("mobile-hamburger")
                                                })
                                            })]
                                        }), (0,
                                        s.tZ)(ee.u, {
                                            enter: "transition duration-250 ease-out",
                                            enterFrom: "transform opacity-0 scale-[.97]",
                                            enterTo: "transform opacity-100",
                                            leave: "transition duration-250 ease-out",
                                            leaveFrom: "transform opacity-100",
                                            leaveTo: "transform opacity-0 scale-[.97]",
                                            className: "fixed left-0 top-0 z-50 flex h-screen w-full origin-top flex-col overflow-scroll bg-navy-550 focus:outline-none md:absolute md:left-auto md:right-6 md:top-15 md:h-auto md:w-60 md:origin-top-right md:overflow-hidden md:rounded-b-xl",
                                            children: (0,
                                            s.BX)(ie.v.Items, {
                                                className: "flex flex-col",
                                                children: [(0,
                                                s.tZ)("div", {
                                                    className: "my-[13px] ml-auto mr-[11px] flex aspect-square h-9 w-9 cursor-pointer items-center justify-center rounded bg-navy-400 md:hidden",
                                                    onClick: o,
                                                    children: (0,
                                                    s.tZ)(D.Tw, {
                                                        className: "mx-auto block h-6 w-6 text-white"
                                                    })
                                                }), i && (0,
                                                s.BX)("div", {
                                                    className: "flex items-center rounded-b-xl rounded-t-xl bg-navy-750 px-2.5 py-6 md:rounded-t-none md:p-5",
                                                    children: [(0,
                                                    s.tZ)(X, {
                                                        className: "flex-shrink-0",
                                                        href: "/panel/profil",
                                                        children: (0,
                                                        s.tZ)("img", {
                                                            src: null == n ? void 0 : n.avatar,
                                                            alt: "",
                                                            className: "mr-5 h-18 w-18 rounded-lg object-cover md:mr-4 md:h-13 md:w-13"
                                                        })
                                                    }), (0,
                                                    s.BX)("div", {
                                                        className: "w-full",
                                                        children: [(0,
                                                        s.tZ)(X, {
                                                            href: "/panel/profil",
                                                            className: "block truncate text-base font-semibold uppercase text-navy-100 md:mb-1 md:max-w-[8rem] md:text-sm",
                                                            children: null == n ? void 0 : n.username
                                                        }), (0,
                                                        s.BX)("div", {
                                                            className: "flex items-center",
                                                            children: [(0,
                                                            s.tZ)(D.f3, {
                                                                className: "mr-2 h-4 w-4 text-white md:h-3.5  md:w-3.5"
                                                            }), (0,
                                                            s.tZ)("span", {
                                                                className: "saldo_punkty text-base font-bold uppercase tabular-nums text-white md:text-sm md:font-semibold",
                                                                children: (0,
                                                                P.xG)(null == u ? void 0 : u.wallet, r, a)
                                                            })]
                                                        }), (0,
                                                        s.BX)("div", {
                                                            className: "mt-1 flex w-full items-center gap-2.5 border-t border-navy-400 pt-2 md:hidden",
                                                            children: [(0,
                                                            s.tZ)(X, {
                                                                href: "/#gold-area",
                                                                className: "cursor-pointer",
                                                                children: (0,
                                                                s.BX)("span", {
                                                                    className: "flex items-center gap-1 text-xs font-bold tabular-nums text-gold",
                                                                    children: [(0,
                                                                    s.tZ)("img", {
                                                                        src: (0,
                                                                        P.$o)("gold-coin.svg"),
                                                                        alt: "",
                                                                        className: "h-4 w-4 object-contain"
                                                                    }), (0,
                                                                    P.V2)()(null == u ? void 0 : u.gold)]
                                                                })
                                                            }), ((null == u ? void 0 : u.eventCoins) || 0 === (null == u ? void 0 : u.eventCoins)) && (0,
                                                            s.tZ)(X, {
                                                                href: null === (t = window.__layout) || void 0 === t ? void 0 : t.eventURL,
                                                                className: "cursor-pointer",
                                                                children: (0,
                                                                s.BX)("span", {
                                                                    className: "flex items-center gap-1 text-xs font-bold tabular-nums text-event-points",
                                                                    children: [(0,
                                                                    s.tZ)("img", {
                                                                        src: (0,
                                                                        P.$o)("event-coin.png"),
                                                                        alt: "",
                                                                        className: "h-4 w-4 object-contain"
                                                                    }), (0,
                                                                    P.V2)()(null == u ? void 0 : u.eventCoins)]
                                                                })
                                                            })]
                                                        })]
                                                    })]
                                                }), (0,
                                                s.tZ)(Hn, {
                                                    label: d("myAccount"),
                                                    icon: (0,
                                                    s.tZ)("use", {
                                                        xlinkHref: (0,
                                                        P.iU)("new-account")
                                                    }),
                                                    link: "/panel/profil"
                                                }), (0,
                                                s.tZ)($n, {
                                                    closeDropdown: o
                                                }), (0,
                                                s.tZ)(Yn, {
                                                    closeDropdown: o
                                                }), (0,
                                                s.tZ)(Hn, {
                                                    label: d("affiliateSystem"),
                                                    icon: (0,
                                                    s.tZ)("use", {
                                                        xlinkHref: (0,
                                                        P.iU)("new-affiliate-system")
                                                    }),
                                                    link: "/panel/profil/affiliate-system"
                                                }), (0,
                                                s.tZ)("p", {
                                                    className: "my-2 ml-10 text-xs text-navy-100 md:ml-6",
                                                    children: d("games")
                                                }), (0,
                                                s.tZ)(Hn, {
                                                    label: d("caseBattle"),
                                                    icon: (0,
                                                    s.tZ)("use", {
                                                        xlinkHref: (0,
                                                        P.iU)("case-battle-swords")
                                                    }),
                                                    link: "/case-battle/list"
                                                }), (0,
                                                s.tZ)(Hn, {
                                                    label: d("contracts"),
                                                    icon: (0,
                                                    s.tZ)("use", {
                                                        xlinkHref: (0,
                                                        P.iU)("new-contracts")
                                                    }),
                                                    link: "/panel/profil/contracts"
                                                }), (0,
                                                s.tZ)(Hn, {
                                                    label: d("upgrader"),
                                                    icon: (0,
                                                    s.tZ)("use", {
                                                        xlinkHref: (0,
                                                        P.lI)("donut-chart")
                                                    }),
                                                    link: "/skins/upgrader"
                                                }), (0,
                                                s.tZ)(Hn, {
                                                    label: d("skinChanger"),
                                                    icon: (0,
                                                    s.tZ)("use", {
                                                        xlinkHref: (0,
                                                        P.iU)("new-skin-changer")
                                                    }),
                                                    link: "/skin-changer"
                                                }), (0,
                                                s.tZ)(Hn, {
                                                    label: d("giveaways"),
                                                    icon: (0,
                                                    s.tZ)("use", {
                                                        xlinkHref: (0,
                                                        P.lI)("gift")
                                                    }),
                                                    link: "/giveaways"
                                                }), (0,
                                                s.tZ)(Hn, {
                                                    label: d("dailyCase"),
                                                    icon: (0,
                                                    s.tZ)("use", {
                                                        xlinkHref: (0,
                                                        P.iU)("box")
                                                    }),
                                                    link: "/daily-case"
                                                }), (0,
                                                s.tZ)("p", {
                                                    className: "my-2 ml-10 text-xs text-navy-100 md:ml-6",
                                                    children: d("customerService")
                                                }), (0,
                                                s.tZ)(Hn, {
                                                    label: d("support"),
                                                    icon: (0,
                                                    s.tZ)("use", {
                                                        xlinkHref: (0,
                                                        P.iU)("headphones")
                                                    }),
                                                    link: "/panel/profil/support-chat"
                                                }), (0,
                                                s.tZ)(Hn, {
                                                    label: d("provablyFair"),
                                                    icon: (0,
                                                    s.tZ)("use", {
                                                        xlinkHref: (0,
                                                        P.lI)("shield")
                                                    }),
                                                    link: "/provably-fair"
                                                }), i && (0,
                                                s.tZ)(Hn, {
                                                    label: d("logout"),
                                                    icon: (0,
                                                    s.tZ)("use", {
                                                        xlinkHref: (0,
                                                        P.iU)("new-logout")
                                                    }),
                                                    link: "/steam/logout",
                                                    className: "mt-3 w-full border-t border-t-navy-400 py-3 md:rounded-b-xl"
                                                }), (0,
                                                s.tZ)(ie.v.Item, {
                                                    as: "div",
                                                    className: "mx-2.5 mt-6 md:hidden",
                                                    children: i ? (0,
                                                    s.tZ)(Fn, {
                                                        children: (0,
                                                        s.tZ)(pt, {
                                                            className: "h-13 w-full bg-gold-400 text-navy-800 hover:bg-gold-300",
                                                            label: d("addFunds")
                                                        })
                                                    }) : (0,
                                                    s.tZ)(Gn, {})
                                                })]
                                            })
                                        })]
                                    })
                                }
                            })
                        })]
                    })]
                })
            }
              , Hn = function(e) {
                var t = e.label
                  , n = e.icon
                  , o = e.link
                  , r = e.className;
                return (0,
                s.tZ)(ie.v.Item, {
                    children: function(e) {
                        var a = e.active;
                        return (0,
                        s.BX)(X, {
                            className: (0,
                            P.cn)("flex items-center py-2.5 text-white", a && "bg-gold", r),
                            href: o,
                            children: [(0,
                            s.tZ)("svg", {
                                className: (0,
                                P.cn)("mx-10 h-6 w-6 md:mx-6 md:h-4 md:w-4", a ? "text-navy-750" : "text-white"),
                                children: n
                            }), (0,
                            s.tZ)("span", {
                                className: (0,
                                P.cn)("text-base capitalize md:text-sm", a ? "text-navy-750" : "text-white"),
                                children: t
                            })]
                        })
                    }
                })
            }
              , Gn = function(e) {
                var t = e.className
                  , n = void 0 === t ? "" : t
                  , o = (0,
                j.$G)("header").t;
                return (0,
                s.BX)("a", {
                    "data-login-link": !0,
                    className: (0,
                    P.cn)("button h-13 bg-gold-400 text-[#23232d] hover:bg-gold-600", n),
                    rel: "nofollow",
                    href: window.__login.link,
                    children: [(0,
                    s.tZ)("svg", {
                        viewBox: "0 0 24 24",
                        className: "mr-3 h-5 w-5 fill-current",
                        children: (0,
                        s.tZ)("path", {
                            d: "M24 12c0 6.627-5.373 12-12 12C6.218 24 1.392 19.909.256 14.463l4.764 2.003c.285 1.441 1.56 2.547 3.115 2.534 1.723-.017 3.105-1.414 3.116-3.129l.007-.003 3.602-2.684c2.304.024 4.14-1.833 4.14-4.091C19 6.833 17.166 5 14.907 5c-2.234 0-4.048 1.791-4.09 4.015l-2.64 3.693c-.668-.014-1.269.169-1.791.51L.092 10.572C.8 4.619 5.857 0 12 0c6.627 0 12 5.373 12 12zM7.423 17.477l-1.544-.649c.38.858 1.236 1.461 2.249 1.457 1.346-.012 2.422-1.11 2.41-2.455-.012-1.329-1.104-2.41-2.432-2.41-.287.001-.57.05-.86.16l1.542.648c.898.378 1.319 1.411.941 2.308-.376.896-1.409 1.318-2.306.941zm7.484-5.602c-1.533 0-2.781-1.249-2.781-2.782 0-1.534 1.248-2.782 2.781-2.782 1.534 0 2.781 1.248 2.781 2.782 0 1.533-1.247 2.782-2.781 2.782zm0-.682c1.159 0 2.1-.942 2.1-2.101 0-1.158-.94-2.102-2.1-2.102-1.16 0-2.102.943-2.102 2.102.001 1.159.943 2.101 2.102 2.101z"
                        })
                    }), o("header:loginViaSteam")]
                })
            }
              , $n = function(e) {
                var t = e.closeDropdown
                  , n = (0,
                j.$G)("header").t
                  , o = Rn().handleOpenModal;
                return (0,
                s.BX)("button", {
                    className: "flex items-center py-2.5 text-white hover:bg-gold hover:text-navy-750",
                    onClick: function() {
                        t(),
                        o()
                    },
                    children: [(0,
                    s.tZ)("svg", {
                        className: "mx-10 h-6 w-6 md:mx-6 md:h-4 md:w-4",
                        children: (0,
                        s.tZ)("use", {
                            xlinkHref: (0,
                            P.iU)("new-promocode")
                        })
                    }), (0,
                    s.tZ)("span", {
                        className: "text-base capitalize md:text-sm",
                        children: n("promocode")
                    })]
                })
            }
              , Yn = function(e) {
                var t = e.closeDropdown
                  , n = (0,
                j.$G)("header").t
                  , o = Rn().handleOpenModal;
                return (0,
                s.BX)("button", {
                    className: "flex items-center py-2.5 text-white hover:bg-gold hover:text-navy-750",
                    onClick: function() {
                        t(),
                        o("GOLDEN")
                    },
                    children: [(0,
                    s.tZ)("svg", {
                        className: "mx-10 h-6 w-6 md:mx-6 md:h-4 md:w-4",
                        children: (0,
                        s.tZ)("use", {
                            xlinkHref: (0,
                            P.iU)("keyboard")
                        })
                    }), (0,
                    s.tZ)("span", {
                        className: "text-base capitalize md:text-sm",
                        children: n("goldencode")
                    })]
                })
            }
              , Vn = n(894)
              , Xn = n(903)
              , Wn = n(882)
              , qn = n(896)
              , Kn = n(888);
            function Jn(e) {
                if (!e)
                    return new Set;
                if ("function" == typeof e)
                    return new Set(e());
                let t = new Set;
                for (let n of e.current)
                    n.current instanceof HTMLElement && t.add(n.current);
                return t
            }
            var Qn = (e=>(e[e.None = 1] = "None",
            e[e.InitialFocus = 2] = "InitialFocus",
            e[e.TabLock = 4] = "TabLock",
            e[e.FocusLock = 8] = "FocusLock",
            e[e.RestoreFocus = 16] = "RestoreFocus",
            e[e.All = 30] = "All",
            e))(Qn || {});
            let eo = (0,
            gt.yV)((function(e, t) {
                let n = (0,
                y.useRef)(null)
                  , o = (0,
                wt.T)(n, t)
                  , {initialFocus: r, containers: a, features: i=30, ...s} = e;
                (0,
                Vn.H)() || (i = 1);
                let l = (0,
                Et.i)(n);
                !function({ownerDocument: e}, t) {
                    let n = function(e=!0) {
                        let t = (0,
                        y.useRef)(no.slice());
                        return (0,
                        qn.q)((([e],[n])=>{
                            !0 === n && !1 === e && (0,
                            Wn.Y)((()=>{
                                t.current.splice(0)
                            }
                            )),
                            !1 === n && !0 === e && (t.current = no.slice())
                        }
                        ), [e, no, t]),
                        (0,
                        Zt.z)((()=>{
                            var e;
                            return null != (e = t.current.find((e=>null != e && e.isConnected))) ? e : null
                        }
                        ))
                    }(t);
                    (0,
                    qn.q)((()=>{
                        t || (null == e ? void 0 : e.activeElement) === (null == e ? void 0 : e.body) && (0,
                        zt.C5)(n())
                    }
                    ), [t]);
                    let o = (0,
                    y.useRef)(!1);
                    (0,
                    y.useEffect)((()=>(o.current = !1,
                    ()=>{
                        o.current = !0,
                        (0,
                        Wn.Y)((()=>{
                            o.current && (0,
                            zt.C5)(n())
                        }
                        ))
                    }
                    )), [])
                }({
                    ownerDocument: l
                }, Boolean(16 & i));
                let c = function({ownerDocument: e, container: t, initialFocus: n}, o) {
                    let r = (0,
                    y.useRef)(null)
                      , a = (0,
                    Xn.t)();
                    return (0,
                    qn.q)((()=>{
                        if (!o)
                            return;
                        let i = t.current;
                        i && (0,
                        Wn.Y)((()=>{
                            if (!a.current)
                                return;
                            let t = null == e ? void 0 : e.activeElement;
                            if (null != n && n.current) {
                                if ((null == n ? void 0 : n.current) === t)
                                    return void (r.current = t)
                            } else if (i.contains(t))
                                return void (r.current = t);
                            null != n && n.current ? (0,
                            zt.C5)(n.current) : (0,
                            zt.jA)(i, zt.TO.First) === zt.fE.Error && console.warn("There are no focusable elements inside the <FocusTrap />"),
                            r.current = null == e ? void 0 : e.activeElement
                        }
                        ))
                    }
                    ), [o]),
                    r
                }({
                    ownerDocument: l,
                    container: n,
                    initialFocus: r
                }, Boolean(2 & i));
                !function({ownerDocument: e, container: t, containers: n, previousActiveElement: o}, r) {
                    let a = (0,
                    Xn.t)();
                    Ot(null == e ? void 0 : e.defaultView, "focus", (e=>{
                        if (!r || !a.current)
                            return;
                        let i = Jn(n);
                        t.current instanceof HTMLElement && i.add(t.current);
                        let s = o.current;
                        if (!s)
                            return;
                        let l = e.target;
                        l && l instanceof HTMLElement ? oo(i, l) ? (o.current = l,
                        (0,
                        zt.C5)(l)) : (e.preventDefault(),
                        e.stopPropagation(),
                        (0,
                        zt.C5)(s)) : (0,
                        zt.C5)(o.current)
                    }
                    ), !0)
                }({
                    ownerDocument: l,
                    container: n,
                    containers: a,
                    previousActiveElement: c
                }, Boolean(8 & i));
                let u = Pt()
                  , d = (0,
                Zt.z)((e=>{
                    let t = n.current;
                    t && (0,
                    yt.E)(u.current, {
                        [It.Forwards]: ()=>{
                            (0,
                            zt.jA)(t, zt.TO.First, {
                                skipElements: [e.relatedTarget]
                            })
                        }
                        ,
                        [It.Backwards]: ()=>{
                            (0,
                            zt.jA)(t, zt.TO.Last, {
                                skipElements: [e.relatedTarget]
                            })
                        }
                    })
                }
                ))
                  , p = (0,
                Kn.G)()
                  , f = (0,
                y.useRef)(!1)
                  , h = {
                    ref: o,
                    onKeyDown(e) {
                        "Tab" == e.key && (f.current = !0,
                        p.requestAnimationFrame((()=>{
                            f.current = !1
                        }
                        )))
                    },
                    onBlur(e) {
                        let t = Jn(a);
                        n.current instanceof HTMLElement && t.add(n.current);
                        let o = e.relatedTarget;
                        o instanceof HTMLElement && "true" !== o.dataset.headlessuiFocusGuard && (oo(t, o) || (f.current ? (0,
                        zt.jA)(n.current, (0,
                        yt.E)(u.current, {
                            [It.Forwards]: ()=>zt.TO.Next,
                            [It.Backwards]: ()=>zt.TO.Previous
                        }) | zt.TO.WrapAround, {
                            relativeTo: e.target
                        }) : e.target instanceof HTMLElement && (0,
                        zt.C5)(e.target)))
                    }
                };
                return y.createElement(y.Fragment, null, Boolean(4 & i) && y.createElement(Tt._, {
                    as: "button",
                    type: "button",
                    "data-headlessui-focus-guard": !0,
                    onFocus: d,
                    features: Tt.A.Focusable
                }), (0,
                gt.sY)({
                    ourProps: h,
                    theirProps: s,
                    defaultTag: "div",
                    name: "FocusTrap"
                }), Boolean(4 & i) && y.createElement(Tt._, {
                    as: "button",
                    type: "button",
                    "data-headlessui-focus-guard": !0,
                    onFocus: d,
                    features: Tt.A.Focusable
                }))
            }
            ))
              , to = Object.assign(eo, {
                features: Qn
            })
              , no = [];
            if ("undefined" != typeof window && "undefined" != typeof document) {
                let e = function(e) {
                    e.target instanceof HTMLElement && e.target !== document.body && no[0] !== e.target && (no.unshift(e.target),
                    no = no.filter((e=>null != e && e.isConnected)),
                    no.splice(10))
                };
                window.addEventListener("click", e, {
                    capture: !0
                }),
                window.addEventListener("mousedown", e, {
                    capture: !0
                }),
                window.addEventListener("focus", e, {
                    capture: !0
                }),
                document.body.addEventListener("click", e, {
                    capture: !0
                }),
                document.body.addEventListener("mousedown", e, {
                    capture: !0
                }),
                document.body.addEventListener("focus", e, {
                    capture: !0
                })
            }
            function oo(e, t) {
                for (let n of e)
                    if (n.contains(t))
                        return !0;
                return !1
            }
            let ro = (0,
            y.createContext)(!1);
            function ao() {
                return (0,
                y.useContext)(ro)
            }
            function io(e) {
                return y.createElement(ro.Provider, {
                    value: e.force
                }, e.children)
            }
            var so = n(879);
            let lo = y.Fragment
              , co = y.Fragment
              , uo = (0,
            y.createContext)(null)
              , po = (0,
            gt.yV)((function(e, t) {
                let n = e
                  , o = (0,
                y.useRef)(null)
                  , r = (0,
                wt.T)((0,
                wt.h)((e=>{
                    o.current = e
                }
                )), t)
                  , a = (0,
                Et.i)(o)
                  , i = function(e) {
                    let t = ao()
                      , n = (0,
                    y.useContext)(uo)
                      , o = (0,
                    Et.i)(e)
                      , [r,a] = (0,
                    y.useState)((()=>{
                        if (!t && null !== n || so.O.isServer)
                            return null;
                        let e = null == o ? void 0 : o.getElementById("headlessui-portal-root");
                        if (e)
                            return e;
                        if (null === o)
                            return null;
                        let r = o.createElement("div");
                        return r.setAttribute("id", "headlessui-portal-root"),
                        o.body.appendChild(r)
                    }
                    ));
                    return (0,
                    y.useEffect)((()=>{
                        null !== r && (null != o && o.body.contains(r) || null == o || o.body.appendChild(r))
                    }
                    ), [r, o]),
                    (0,
                    y.useEffect)((()=>{
                        t || null !== n && a(n.current)
                    }
                    ), [n, a, t]),
                    r
                }(o)
                  , [s] = (0,
                y.useState)((()=>{
                    var e;
                    return so.O.isServer ? null : null != (e = null == a ? void 0 : a.createElement("div")) ? e : null
                }
                ))
                  , l = (0,
                Vn.H)()
                  , c = (0,
                y.useRef)(!1);
                return (0,
                Dt.e)((()=>{
                    if (c.current = !1,
                    i && s)
                        return i.contains(s) || (s.setAttribute("data-headlessui-portal", ""),
                        i.appendChild(s)),
                        ()=>{
                            c.current = !0,
                            (0,
                            Wn.Y)((()=>{
                                var e;
                                c.current && (!i || !s || (s instanceof Node && i.contains(s) && i.removeChild(s),
                                i.childNodes.length <= 0 && (null == (e = i.parentElement) || e.removeChild(i))))
                            }
                            ))
                        }
                }
                ), [i, s]),
                l && i && s ? (0,
                w.createPortal)((0,
                gt.sY)({
                    ourProps: {
                        ref: r
                    },
                    theirProps: n,
                    defaultTag: lo,
                    name: "Portal"
                }), s) : null
            }
            ))
              , fo = (0,
            gt.yV)((function(e, t) {
                let {target: n, ...o} = e
                  , r = {
                    ref: (0,
                    wt.T)(t)
                };
                return y.createElement(uo.Provider, {
                    value: n
                }, (0,
                gt.sY)({
                    ourProps: r,
                    theirProps: o,
                    defaultTag: co,
                    name: "Popover.Group"
                }))
            }
            ))
              , ho = Object.assign(po, {
                Group: fo
            })
              , mo = (0,
            y.createContext)(null);
            function yo() {
                let e = (0,
                y.useContext)(mo);
                if (null === e) {
                    let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, yo),
                    e
                }
                return e
            }
            function go() {
                let[e,t] = (0,
                y.useState)([]);
                return [e.length > 0 ? e.join(" ") : void 0, (0,
                y.useMemo)((()=>function(e) {
                    let n = (0,
                    Zt.z)((e=>(t((t=>[...t, e])),
                    ()=>t((t=>{
                        let n = t.slice()
                          , o = n.indexOf(e);
                        return -1 !== o && n.splice(o, 1),
                        n
                    }
                    )))))
                      , o = (0,
                    y.useMemo)((()=>({
                        register: n,
                        slot: e.slot,
                        name: e.name,
                        props: e.props
                    })), [n, e.slot, e.name, e.props]);
                    return y.createElement(mo.Provider, {
                        value: o
                    }, e.children)
                }
                ), [t])]
            }
            let wo = (0,
            gt.yV)((function(e, t) {
                let n = (0,
                vt.M)()
                  , {id: o=`headlessui-description-${n}`, ...r} = e
                  , a = yo()
                  , i = (0,
                wt.T)(t);
                (0,
                Dt.e)((()=>a.register(o)), [o, a.register]);
                let s = {
                    ref: i,
                    ...a.props,
                    id: o
                };
                return (0,
                gt.sY)({
                    ourProps: s,
                    theirProps: r,
                    slot: a.slot || {},
                    defaultTag: "p",
                    name: a.name || "Description"
                })
            }
            ))
              , vo = Object.assign(wo, {})
              , bo = (0,
            y.createContext)((()=>{}
            ));
            bo.displayName = "StackContext";
            var ko = (e=>(e[e.Add = 0] = "Add",
            e[e.Remove = 1] = "Remove",
            e))(ko || {});
            function zo({children: e, onUpdate: t, type: n, element: o, enabled: r}) {
                let a = (0,
                y.useContext)(bo)
                  , i = (0,
                Zt.z)(((...e)=>{
                    null == t || t(...e),
                    a(...e)
                }
                ));
                return (0,
                Dt.e)((()=>{
                    let e = void 0 === r || !0 === r;
                    return e && i(0, n, o),
                    ()=>{
                        e && i(1, n, o)
                    }
                }
                ), [i, n, o, r]),
                y.createElement(bo.Provider, {
                    value: i
                }, e)
            }
            const xo = "function" == typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }
              , {useState: jo, useEffect: Co, useLayoutEffect: So, useDebugValue: Eo} = g;
            function No(e) {
                const t = e.getSnapshot
                  , n = e.value;
                try {
                    const e = t();
                    return !xo(n, e)
                } catch {
                    return !0
                }
            }
            const Oo = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t, n) {
                return t()
            }
            : function(e, t, n) {
                const o = t()
                  , [{inst: r},a] = jo({
                    inst: {
                        value: o,
                        getSnapshot: t
                    }
                });
                return So((()=>{
                    r.value = o,
                    r.getSnapshot = t,
                    No(r) && a({
                        inst: r
                    })
                }
                ), [e, o, t]),
                Co((()=>(No(r) && a({
                    inst: r
                }),
                e((()=>{
                    No(r) && a({
                        inst: r
                    })
                }
                )))), [e]),
                Eo(o),
                o
            }
            ;
            var To = n(881);
            function Zo() {
                let e;
                return {
                    before({doc: t}) {
                        var n;
                        let o = t.documentElement;
                        e = (null != (n = t.defaultView) ? n : window).innerWidth - o.clientWidth
                    },
                    after({doc: t, d: n}) {
                        let o = t.documentElement
                          , r = o.clientWidth - o.offsetWidth
                          , a = e - r;
                        n.style(o, "paddingRight", `${a}px`)
                    }
                }
            }
            var Io = n(901);
            function Po() {
                if (!(0,
                Io.gn)())
                    return {};
                let e;
                return {
                    before() {
                        e = window.pageYOffset
                    },
                    after({doc: t, d: n, meta: o}) {
                        function r(e) {
                            return o.containers.flatMap((e=>e())).some((t=>t.contains(e)))
                        }
                        n.style(t.body, "marginTop", `-${e}px`),
                        window.scrollTo(0, 0);
                        let a = null;
                        n.addEventListener(t, "click", (e=>{
                            if (e.target instanceof HTMLElement)
                                try {
                                    let n = e.target.closest("a");
                                    if (!n)
                                        return;
                                    let {hash: o} = new URL(n.href)
                                      , i = t.querySelector(o);
                                    i && !r(i) && (a = i)
                                } catch {}
                        }
                        ), !0),
                        n.addEventListener(t, "touchmove", (e=>{
                            e.target instanceof HTMLElement && !r(e.target) && e.preventDefault()
                        }
                        ), {
                            passive: !1
                        }),
                        n.add((()=>{
                            window.scrollTo(0, window.pageYOffset + e),
                            a && a.isConnected && (a.scrollIntoView({
                                block: "nearest"
                            }),
                            a = null)
                        }
                        ))
                    }
                }
            }
            function Lo(e) {
                let t = {};
                for (let n of e)
                    Object.assign(t, n(t));
                return t
            }
            let Ao = function(e, t) {
                let n = new Map
                  , o = new Set;
                return {
                    getSnapshot: ()=>n,
                    subscribe: e=>(o.add(e),
                    ()=>o.delete(e)),
                    dispatch(e, ...r) {
                        let a = t[e].call(n, ...r);
                        a && (n = a,
                        o.forEach((e=>e())))
                    }
                }
            }(0, {
                PUSH(e, t) {
                    var n;
                    let o = null != (n = this.get(e)) ? n : {
                        doc: e,
                        count: 0,
                        d: (0,
                        To.k)(),
                        meta: new Set
                    };
                    return o.count++,
                    o.meta.add(t),
                    this.set(e, o),
                    this
                },
                POP(e, t) {
                    let n = this.get(e);
                    return n && (n.count--,
                    n.meta.delete(t)),
                    this
                },
                SCROLL_PREVENT({doc: e, d: t, meta: n}) {
                    let o = {
                        doc: e,
                        d: t,
                        meta: Lo(n)
                    }
                      , r = [Po(), Zo(), {
                        before({doc: e, d: t}) {
                            t.style(e.documentElement, "overflow", "hidden")
                        }
                    }];
                    r.forEach((({before: e})=>null == e ? void 0 : e(o))),
                    r.forEach((({after: e})=>null == e ? void 0 : e(o)))
                },
                SCROLL_ALLOW({d: e}) {
                    e.dispose()
                },
                TEARDOWN({doc: e}) {
                    this.delete(e)
                }
            });
            Ao.subscribe((()=>{
                let e = Ao.getSnapshot()
                  , t = new Map;
                for (let[n] of e)
                    t.set(n, n.documentElement.style.overflow);
                for (let n of e.values()) {
                    let e = "hidden" === t.get(n.doc)
                      , o = 0 !== n.count;
                    (o && !e || !o && e) && Ao.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
                    0 === n.count && Ao.dispatch("TEARDOWN", n)
                }
            }
            ));
            let Do = new Map
              , Ro = new Map;
            function Bo(e, t=!0) {
                (0,
                Dt.e)((()=>{
                    var n;
                    if (!t)
                        return;
                    let o = "function" == typeof e ? e() : e.current;
                    if (!o)
                        return;
                    let r = null != (n = Ro.get(o)) ? n : 0;
                    return Ro.set(o, r + 1),
                    0 !== r || (Do.set(o, {
                        "aria-hidden": o.getAttribute("aria-hidden"),
                        inert: o.inert
                    }),
                    o.setAttribute("aria-hidden", "true"),
                    o.inert = !0),
                    function() {
                        var e;
                        if (!o)
                            return;
                        let t = null != (e = Ro.get(o)) ? e : 1;
                        if (1 === t ? Ro.delete(o) : Ro.set(o, t - 1),
                        1 !== t)
                            return;
                        let n = Do.get(o);
                        n && (null === n["aria-hidden"] ? o.removeAttribute("aria-hidden") : o.setAttribute("aria-hidden", n["aria-hidden"]),
                        o.inert = n.inert,
                        Do.delete(o))
                    }
                }
                ), [e, t])
            }
            var Mo, Fo = ((Mo = Fo || {})[Mo.Open = 0] = "Open",
            Mo[Mo.Closed = 1] = "Closed",
            Mo), _o = (e=>(e[e.SetTitleId = 0] = "SetTitleId",
            e))(_o || {});
            let Uo = {
                0: (e,t)=>e.titleId === t.id ? e : {
                    ...e,
                    titleId: t.id
                }
            }
              , Ho = (0,
            y.createContext)(null);
            function Go(e) {
                let t = (0,
                y.useContext)(Ho);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, Go),
                    t
                }
                return t
            }
            function $o(e, t) {
                return (0,
                yt.E)(t.type, Uo, e, t)
            }
            Ho.displayName = "DialogContext";
            let Yo = gt.AN.RenderStrategy | gt.AN.Static
              , Vo = (0,
            gt.yV)((function(e, t) {
                let n = (0,
                vt.M)()
                  , {id: o=`headlessui-dialog-${n}`, open: r, onClose: a, initialFocus: i, __demoMode: s=!1, ...l} = e
                  , [c,u] = (0,
                y.useState)(0)
                  , d = (0,
                xt.oJ)();
                void 0 === r && null !== d && (r = (d & xt.ZM.Open) === xt.ZM.Open);
                let p = (0,
                y.useRef)(null)
                  , f = (0,
                wt.T)(p, t)
                  , h = (0,
                y.useRef)(null)
                  , m = (0,
                Et.i)(p)
                  , g = e.hasOwnProperty("open") || null !== d
                  , w = e.hasOwnProperty("onClose");
                if (!g && !w)
                    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                if (!g)
                    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                if (!w)
                    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                if ("boolean" != typeof r)
                    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${r}`);
                if ("function" != typeof a)
                    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);
                let v = r ? 0 : 1
                  , [b,k] = (0,
                y.useReducer)($o, {
                    titleId: null,
                    descriptionId: null,
                    panelRef: (0,
                    y.createRef)()
                })
                  , z = (0,
                Zt.z)((()=>a(!1)))
                  , x = (0,
                Zt.z)((e=>k({
                    type: 0,
                    id: e
                })))
                  , j = !!(0,
                Vn.H)() && !s && 0 === v
                  , C = c > 1
                  , S = null !== (0,
                y.useContext)(Ho)
                  , E = C ? "parent" : "leaf"
                  , N = null !== d && (d & xt.ZM.Closing) === xt.ZM.Closing
                  , O = !S && !N && j;
                Bo((0,
                y.useCallback)((()=>{
                    var e, t;
                    return null != (t = Array.from(null != (e = null == m ? void 0 : m.querySelectorAll("body > *")) ? e : []).find((e=>"headlessui-portal-root" !== e.id && e.contains(h.current) && e instanceof HTMLElement))) ? t : null
                }
                ), [h]), O);
                let T = !!C || j;
                Bo((0,
                y.useCallback)((()=>{
                    var e, t;
                    return null != (t = Array.from(null != (e = null == m ? void 0 : m.querySelectorAll("[data-headlessui-portal]")) ? e : []).find((e=>e.contains(h.current) && e instanceof HTMLElement))) ? t : null
                }
                ), [h]), T);
                let Z = (0,
                Zt.z)((()=>{
                    var e, t;
                    return [...Array.from(null != (e = null == m ? void 0 : m.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) ? e : []).filter((e=>!(e === document.body || e === document.head || !(e instanceof HTMLElement) || e.contains(h.current) || b.panelRef.current && e.contains(b.panelRef.current)))), null != (t = b.panelRef.current) ? t : p.current]
                }
                ))
                  , I = !(!j || C);
                (0,
                Ct.O)((()=>Z()), z, I);
                let P = !(C || 0 !== v);
                Ot(null == m ? void 0 : m.defaultView, "keydown", (e=>{
                    P && (e.defaultPrevented || e.key === bt.R.Escape && (e.preventDefault(),
                    e.stopPropagation(),
                    z()))
                }
                )),
                function(e, t, n=(()=>[document.body])) {
                    !function(e, t, n) {
                        let o = function(e) {
                            return Oo(e.subscribe, e.getSnapshot, e.getSnapshot)
                        }(Ao)
                          , r = e ? o.get(e) : void 0
                          , a = !!r && r.count > 0;
                        (0,
                        Dt.e)((()=>{
                            if (e && t)
                                return Ao.dispatch("PUSH", e, n),
                                ()=>Ao.dispatch("POP", e, n)
                        }
                        ), [t, e])
                    }(e, t, (e=>{
                        var t;
                        return {
                            containers: [...null != (t = e.containers) ? t : [], n]
                        }
                    }
                    ))
                }(m, !(N || 0 !== v || S), Z),
                (0,
                y.useEffect)((()=>{
                    if (0 !== v || !p.current)
                        return;
                    let e = new ResizeObserver((e=>{
                        for (let t of e) {
                            let e = t.target.getBoundingClientRect();
                            0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height && z()
                        }
                    }
                    ));
                    return e.observe(p.current),
                    ()=>e.disconnect()
                }
                ), [v, p, z]);
                let[L,A] = go()
                  , D = (0,
                y.useMemo)((()=>[{
                    dialogState: v,
                    close: z,
                    setTitleId: x
                }, b]), [v, b, z, x])
                  , R = (0,
                y.useMemo)((()=>({
                    open: 0 === v
                })), [v])
                  , B = {
                    ref: f,
                    id: o,
                    role: "dialog",
                    "aria-modal": 0 === v || void 0,
                    "aria-labelledby": b.titleId,
                    "aria-describedby": L
                };
                return y.createElement(zo, {
                    type: "Dialog",
                    enabled: 0 === v,
                    element: p,
                    onUpdate: (0,
                    Zt.z)(((e,t)=>{
                        "Dialog" === t && (0,
                        yt.E)(e, {
                            [ko.Add]: ()=>u((e=>e + 1)),
                            [ko.Remove]: ()=>u((e=>e - 1))
                        })
                    }
                    ))
                }, y.createElement(io, {
                    force: !0
                }, y.createElement(ho, null, y.createElement(Ho.Provider, {
                    value: D
                }, y.createElement(ho.Group, {
                    target: p
                }, y.createElement(io, {
                    force: !1
                }, y.createElement(A, {
                    slot: R,
                    name: "Dialog.Description"
                }, y.createElement(to, {
                    initialFocus: i,
                    containers: Z,
                    features: j ? (0,
                    yt.E)(E, {
                        parent: to.features.RestoreFocus,
                        leaf: to.features.All & ~to.features.FocusLock
                    }) : to.features.None
                }, (0,
                gt.sY)({
                    ourProps: B,
                    theirProps: l,
                    slot: R,
                    defaultTag: "div",
                    features: Yo,
                    visible: 0 === v,
                    name: "Dialog"
                })))))))), y.createElement(Tt._, {
                    features: Tt.A.Hidden,
                    ref: h
                }))
            }
            ))
              , Xo = (0,
            gt.yV)((function(e, t) {
                let n = (0,
                vt.M)()
                  , {id: o=`headlessui-dialog-backdrop-${n}`, ...r} = e
                  , [{dialogState: a},i] = Go("Dialog.Backdrop")
                  , s = (0,
                wt.T)(t);
                (0,
                y.useEffect)((()=>{
                    if (null === i.panelRef.current)
                        throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                }
                ), [i.panelRef]);
                let l = (0,
                y.useMemo)((()=>({
                    open: 0 === a
                })), [a]);
                return y.createElement(io, {
                    force: !0
                }, y.createElement(ho, null, (0,
                gt.sY)({
                    ourProps: {
                        ref: s,
                        id: o,
                        "aria-hidden": !0
                    },
                    theirProps: r,
                    slot: l,
                    defaultTag: "div",
                    name: "Dialog.Backdrop"
                })))
            }
            ))
              , Wo = (0,
            gt.yV)((function(e, t) {
                let n = (0,
                vt.M)()
                  , {id: o=`headlessui-dialog-panel-${n}`, ...r} = e
                  , [{dialogState: a},i] = Go("Dialog.Panel")
                  , s = (0,
                wt.T)(t, i.panelRef)
                  , l = (0,
                y.useMemo)((()=>({
                    open: 0 === a
                })), [a])
                  , c = (0,
                Zt.z)((e=>{
                    e.stopPropagation()
                }
                ));
                return (0,
                gt.sY)({
                    ourProps: {
                        ref: s,
                        id: o,
                        onClick: c
                    },
                    theirProps: r,
                    slot: l,
                    defaultTag: "div",
                    name: "Dialog.Panel"
                })
            }
            ))
              , qo = (0,
            gt.yV)((function(e, t) {
                let n = (0,
                vt.M)()
                  , {id: o=`headlessui-dialog-overlay-${n}`, ...r} = e
                  , [{dialogState: a, close: i}] = Go("Dialog.Overlay")
                  , s = (0,
                wt.T)(t)
                  , l = (0,
                Zt.z)((e=>{
                    if (e.target === e.currentTarget) {
                        if ((0,
                        kt.P)(e.currentTarget))
                            return e.preventDefault();
                        e.preventDefault(),
                        e.stopPropagation(),
                        i()
                    }
                }
                ))
                  , c = (0,
                y.useMemo)((()=>({
                    open: 0 === a
                })), [a]);
                return (0,
                gt.sY)({
                    ourProps: {
                        ref: s,
                        id: o,
                        "aria-hidden": !0,
                        onClick: l
                    },
                    theirProps: r,
                    slot: c,
                    defaultTag: "div",
                    name: "Dialog.Overlay"
                })
            }
            ))
              , Ko = (0,
            gt.yV)((function(e, t) {
                let n = (0,
                vt.M)()
                  , {id: o=`headlessui-dialog-title-${n}`, ...r} = e
                  , [{dialogState: a, setTitleId: i}] = Go("Dialog.Title")
                  , s = (0,
                wt.T)(t);
                (0,
                y.useEffect)((()=>(i(o),
                ()=>i(null))), [o, i]);
                let l = (0,
                y.useMemo)((()=>({
                    open: 0 === a
                })), [a]);
                return (0,
                gt.sY)({
                    ourProps: {
                        ref: s,
                        id: o
                    },
                    theirProps: r,
                    slot: l,
                    defaultTag: "h2",
                    name: "Dialog.Title"
                })
            }
            ))
              , Jo = Object.assign(Vo, {
                Backdrop: Xo,
                Panel: Wo,
                Overlay: qo,
                Title: Ko,
                Description: vo
            });
            var Qo = function(e) {
                var t = e.className;
                return (0,
                s.tZ)("div", {
                    "data-testid": "spinner",
                    className: (0,
                    P.cn)("transform transition duration-200", t),
                    children: (0,
                    s.BX)("svg", {
                        className: "h-full w-full animate-spin",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [(0,
                        s.tZ)("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                        }), (0,
                        s.tZ)("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        })]
                    })
                })
            }
              , er = function(e) {
                var t = e.type
                  , n = e.loading
                  , o = e.failure
                  , r = e.failureMessage
                  , a = e.success
                  , i = e.successMessage
                  , l = e.value
                  , c = e.placeholder
                  , u = e.onChange
                  , d = e.onSubmit
                  , p = (0,
                j.$G)().t;
                return (0,
                s.BX)("div", {
                    "data-testid": "use_code_modal_form",
                    className: "relative z-20 flex flex-row items-center gap-5 rounded-2xl bg-navy-600",
                    children: [(0,
                    s.BX)("div", {
                        className: "relative flex-1",
                        children: [(0,
                        s.tZ)("input", {
                            className: (0,
                            P.cn)("h-[55px] w-full bg-transparent px-5 py-4 font-light placeholder:text-[#B8BCD0] focus:!outline-none focus:!ring-0", o && "border border-giveaway-challenger", a && "promoCode" === t && "text-lightgreen-100"),
                            placeholder: c,
                            value: l,
                            onChange: u
                        }), a && (0,
                        s.tZ)("div", {
                            className: "absolute right-4 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-[#92FFB1]",
                            children: (0,
                            s.tZ)(D.Ye, {
                                className: "h-3 w-3 text-black"
                            })
                        }), a && "promoCode" === t && i && (0,
                        s.tZ)("div", {
                            className: "absolute right-14 top-1/2 -translate-y-1/2 rounded-lg bg-lightgreen-800 px-3 py-2 text-xs text-lightgreen-100",
                            children: i
                        }), o && (0,
                        s.tZ)("div", {
                            className: "absolute right-4 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-red-400",
                            children: (0,
                            s.tZ)(D.Tw, {
                                className: "h-4 w-4 text-black"
                            })
                        }), o && r && (0,
                        s.tZ)("div", {
                            className: "absolute left-0 right-0 top-full mt-2 rounded-lg bg-[#231111] px-3 py-2 text-xs  text-giveaway-challenger",
                            children: r
                        })]
                    }), (0,
                    s.BX)(pt, {
                        type: "button",
                        disabled: n,
                        className: (0,
                        P.cn)("button-lg px-5 md:min-w-[180px]", a ? "button-light-green text-lightgreen" : "button-primary text-[#FFD592]"),
                        onClick: d,
                        children: [n && (0,
                        s.tZ)(Qo, {
                            className: "mr-1 h-4 w-4 text-gold"
                        }), p(a ? "codeModal.activated" : "codeModal.apply")]
                    })]
                })
            };
            function tr(e) {
                return "GOLD" === e.type
            }
            var nr = function(e) {
                var t = e.codes
                  , n = (0,
                j.$G)("common").t;
                return (0,
                s.BX)("table", {
                    "data-testid": "codes_table",
                    className: "w-full min-w-[500px] table-fixed text-xs uppercase",
                    children: [(0,
                    s.tZ)("thead", {
                        children: (0,
                        s.BX)("tr", {
                            className: "grid grid-cols-3",
                            children: [(0,
                            s.tZ)("th", {
                                className: "py-4 text-left font-semibold",
                                children: n("codeModal.promotionCode")
                            }), (0,
                            s.tZ)("th", {
                                className: "py-4 text-center font-semibold",
                                children: n("codeModal.bonusAmount")
                            }), (0,
                            s.tZ)("th", {
                                className: "py-4 text-right font-semibold",
                                children: n("codeModal.dateOfUse")
                            })]
                        })
                    }), (0,
                    s.tZ)("tbody", {
                        className: "w-full text-sm font-semibold text-white [&>*]:[&>*:nth-child(odd)]:bg-navy-600",
                        children: t.map((function(e) {
                            return (0,
                            s.BX)("tr", {
                                className: "grid grid-cols-3 rounded-lg",
                                children: [(0,
                                s.tZ)("td", {
                                    className: "flex items-center justify-start rounded-l-[6px] py-3 pl-4",
                                    children: e.promoCode
                                }), (0,
                                s.tZ)("td", {
                                    className: "flex items-center justify-center gap-x-1 p-4 text-center",
                                    children: tr(e) ? (0,
                                    s.BX)(s.HY, {
                                        children: [(0,
                                        s.tZ)("img", {
                                            src: (0,
                                            P.$o)("gold-coin.svg"),
                                            className: "h-6 w-6"
                                        }), e.goldBonus]
                                    }) : (0,
                                    s.tZ)("span", {
                                        className: "text-semibold text-lightgreen-100",
                                        children: e.depositBonus && (0,
                                        P.up)(e.depositBonus)
                                    })
                                }), (0,
                                s.tZ)("td", {
                                    className: "flex items-center justify-end rounded-r-[6px] py-3 pr-4",
                                    children: e.date
                                })]
                            }, "".concat(e.title, "_").concat(e.date))
                        }
                        ))
                    })]
                })
            }
              , or = function(e) {
                var t = e.codes
                  , n = e.state
                  , o = (0,
                j.$G)("common").t;
                return (0,
                s.tZ)(z.M, {
                    initial: !1,
                    children: "success" === n && t.length > 0 ? (0,
                    s.BX)(k.E.div, {
                        "data-testid": "code_modal_history_table",
                        className: "w-full p-2 sm:p-10",
                        initial: {
                            opacity: 0,
                            height: .2
                        },
                        animate: {
                            opacity: 1,
                            height: "auto"
                        },
                        exit: {
                            opacity: 0,
                            height: .2
                        },
                        children: [(0,
                        s.tZ)("h3", {
                            className: "text-center text-base font-light text-[#B8BCD0]",
                            children: o("codeModal.codeHistory")
                        }), (0,
                        s.tZ)("hr", {
                            className: "relative mt-4 h-px border-0 bg-[#B8BCD0]/15 after:absolute after:inset-x-1/2 after:inset-y-0 after:h-px after:w-5/12 after:-translate-x-1/2 after:bg-[#B8BCD0]"
                        }), (0,
                        s.tZ)("div", {
                            className: "custom-scrollbar w-full overflow-x-auto",
                            children: (0,
                            s.tZ)(nr, {
                                codes: t
                            })
                        })]
                    }) : null
                })
            }
              , rr = function(e) {
                var t = e.textData
                  , n = e.gradient
                  , o = e.icon
                  , r = e.imageUrl
                  , a = e.imageClassName
                  , i = e.handleCodeChange
                  , l = e.code
                  , c = e.submit
                  , u = e.placeholder
                  , d = e.type
                  , p = e.reCaptcha
                  , f = e.historyCodes
                  , h = e.state
                  , m = e.successMessage
                  , y = e.failureMessage
                  , g = e.codesHistoryState;
                return (0,
                s.BX)("div", {
                    "data-testid": "code-modal",
                    className: "space-y-2",
                    children: [(0,
                    s.BX)("div", {
                        className: "space-y-2 rounded-bl-xl md:space-y-0 md:bg-navy-600 md:p-8",
                        children: [(0,
                        s.BX)("div", {
                            className: "flex items-center md:h-48",
                            children: [(0,
                            s.tZ)("div", {
                                className: "relative z-10 ml-12 hidden aspect-square h-full sm:block",
                                children: (0,
                                s.tZ)("img", {
                                    src: r,
                                    className: (0,
                                    P.cn)("absolute h-full object-contain", a)
                                })
                            }), (0,
                            s.tZ)("div", {
                                className: "grow sm:-ml-20 sm:-mr-16",
                                children: (0,
                                s.BX)("div", {
                                    className: "col-span-1 flex h-fit gap-4 px-2 py-8 sm:pl-28 sm:pr-8",
                                    style: {
                                        background: n || "linear-gradient(90deg, rgba(255, 203, 119, 0.1) 0%, rgba(17, 17, 20, 0) 156.79%)"
                                    },
                                    children: [o, (0,
                                    s.BX)("div", {
                                        className: "flex-1 space-y-2 text-left text-white",
                                        children: [(0,
                                        s.BX)("div", {
                                            className: "flex",
                                            children: [(0,
                                            s.tZ)("p", {
                                                className: "font-semibold",
                                                children: null == t ? void 0 : t.title
                                            }), (null == t ? void 0 : t.tooltip) && (0,
                                            s.tZ)(be, {
                                                linkKey: d.toLowerCase(),
                                                content: t.tooltip,
                                                className: "ml-1 inline-block"
                                            })]
                                        }), (0,
                                        s.tZ)("p", {
                                            className: "font-sm text-sm",
                                            children: null == t ? void 0 : t.description
                                        })]
                                    })]
                                })
                            })]
                        }), (0,
                        s.tZ)("div", {
                            className: "relative z-10 rounded-xl bg-navy-750 md:p-5",
                            children: (0,
                            s.tZ)(er, {
                                placeholder: u,
                                value: l,
                                type: d,
                                loading: "loading" === h,
                                success: "success" === h,
                                successMessage: m,
                                failure: "failure" === h,
                                failureMessage: y,
                                onChange: i,
                                onSubmit: c
                            })
                        }), p && (0,
                        s.tZ)("div", {
                            className: "mx-auto mt-8 w-fit",
                            children: p
                        })]
                    }), (0,
                    s.tZ)(or, {
                        codes: f,
                        state: g
                    })]
                })
            }
              , ar = (0,
            P.fA)(window.__url.base)
              , ir = {
                getHistoryEndpoint: ar("/apiData/Bonus/promocode_history"),
                getSubmitEndpoint: ar("/apiData/Bonus/promocode_activation_code")
            }
              , sr = {
                getHistoryEndpoint: ar("/apiData/Bonus/gold_history"),
                getSubmitEndpoint: ar("/apiData/Bonus/gold_activation_code")
            }
              , lr = n(693)
              , cr = n(65)
              , ur = {
                code: "",
                history: [],
                response: {
                    status: !0,
                    promoCode: null,
                    bonus: null,
                    history: []
                }
            }
              , dr = (0,
            Fe.C)({
                id: "codeMachine",
                tsTypes: {},
                schema: {
                    context: {},
                    events: {},
                    services: {}
                },
                context: ur,
                on: {
                    RESTART: {
                        actions: ["resetContext", "resetInput", "resetCaptcha"],
                        target: ".codeForm"
                    }
                },
                states: {
                    codesHistory: {
                        initial: "loading",
                        states: {
                            loading: {
                                invoke: {
                                    src: "loadCodeHistory",
                                    onDone: {
                                        actions: ["assignInitialHistory"],
                                        target: "historyLoaded"
                                    },
                                    onError: "error"
                                }
                            },
                            historyLoaded: {
                                type: "final"
                            },
                            error: {
                                on: {
                                    TRY_AGAIN: "loading"
                                }
                            }
                        }
                    },
                    codeForm: {
                        initial: "typing",
                        states: {
                            loading: {
                                invoke: {
                                    src: "submitCode",
                                    onDone: [{
                                        actions: ["assignFreshHistory", "assignResponse"],
                                        target: "success"
                                    }],
                                    onError: {
                                        actions: ["assignResponse", "resetCaptcha"],
                                        target: "typingWithError"
                                    }
                                }
                            },
                            success: {
                                entry: ["updateBalance", "updateBonus"],
                                type: "final"
                            },
                            typing: {
                                on: {
                                    GET_BONUS: {
                                        actions: "assignCode",
                                        target: "loading"
                                    },
                                    SHOW_CAPTCHA_ERROR: {
                                        target: "typingWithError",
                                        actions: ["assignResponse"]
                                    }
                                }
                            },
                            typingWithError: {
                                on: {
                                    SHOW_CAPTCHA_ERROR: {
                                        actions: ["assignResponse"],
                                        target: "typingWithError"
                                    },
                                    GET_BONUS: {
                                        actions: "assignCode",
                                        target: "loading"
                                    }
                                }
                            }
                        }
                    }
                },
                type: "parallel"
            }, {
                actions: {
                    assignCode: (0,
                    _e.assign)({
                        code: function(e, t) {
                            return t.code
                        }
                    }),
                    resetContext: (0,
                    _e.assign)({
                        code: "",
                        response: ur.response
                    }),
                    assignResponse: (0,
                    _e.assign)({
                        response: function(e, t) {
                            return t.data
                        }
                    }),
                    assignInitialHistory: (0,
                    _e.assign)({
                        history: function(e, t) {
                            return t.data || []
                        }
                    }),
                    assignFreshHistory: (0,
                    _e.assign)({
                        history: function(e, t) {
                            var n;
                            return (null === (n = t.data) || void 0 === n ? void 0 : n.history) || e.history
                        }
                    }),
                    updateBalance: function() {
                        window.__layout.updateCoinBalance(),
                        window.__layout.updateBalanceAndSkinsValue()
                    },
                    updateBonus: function(e) {
                        var t = e.response;
                        if (null != t && t.depositBonus) {
                            var n = 100 * t.depositBonus;
                            window.__layout.updateBonus(n)
                        }
                    }
                }
            })
              , pr = function(e) {
                var t, n, o, a = e.initialCode, l = e.api, c = (0,
                y.useState)(null != a ? a : ""), u = (0,
                b.Z)(c, 2), d = u[0], p = u[1], f = (0,
                y.useRef)(null), h = (0,
                y.useState)(null), m = (0,
                b.Z)(h, 2), g = m[0], w = m[1], v = (0,
                Q.e)(dr, {
                    actions: {
                        resetInput: function() {
                            return p("")
                        },
                        resetCaptcha: function() {
                            var e;
                            null == f || null === (e = f.current) || void 0 === e || e.reset(),
                            w(null)
                        }
                    },
                    services: {
                        submitCode: (n = (0,
                        r.Z)(i().mark((function e(t) {
                            var n, o;
                            return i().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.code,
                                        e.next = 3,
                                        (0,
                                        un.L)(l.submit, {
                                            body: {
                                                promoCode: n
                                            }
                                        });
                                    case 3:
                                        if ((o = e.sent).status) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(o));
                                    case 6:
                                        return e.abrupt("return", o);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        ))),
                        function(e) {
                            return n.apply(this, arguments)
                        }
                        ),
                        loadCodeHistory: function() {
                            return (0,
                            un.L)(l.history)
                        }
                    }
                }), k = (0,
                b.Z)(v, 2), z = k[0], x = k[1], C = z.matches, S = z.context, E = null === (t = window.__promoCode) || void 0 === t || !t.useRecaptcha || g, N = "" !== d && E, O = (o = S.response,
                "object" === (0,
                lr.Z)(o) && "depositBonus"in o && (0,
                P.up)(S.response.depositBonus.toString())), T = function(e, t) {
                    var n, o = (0,
                    j.$G)().t, r = Rn().handleCloseModal;
                    return /^.{4}-.{4}-.{4}-.{4}$/.test(t) ? (0,
                    s.tZ)(j.cC, {
                        i18nKey: "codeModal.error.gifCard",
                        components: {
                            a: (0,
                            s.tZ)("a", {
                                onClick: r,
                                href: "#payment/giftcards",
                                className: "cursor-pointer underline transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                            })
                        }
                    }) : null !== (n = {
                        captcha: o("codeModal.error.verifyReCaptcha"),
                        depositRequired: o("codeModal.error.depositRequired"),
                        notLoggedIn: o("codeModal.error.notLoggedIn"),
                        validation: o("codeModal.error.validation"),
                        wrongCode: o("codeModal.error.validation"),
                        yourCode: o("codeModal.error.yourCode"),
                        expiredCode: o("codeModal.error.expiredCode"),
                        usedCode: o("codeModal.error.usedCode"),
                        spamError: o("codeModal.error.spamError"),
                        verifyReCaptcha: o("codeModal.error.verifyReCaptcha")
                    }[e]) && void 0 !== n ? n : o("codeModal.error.default")
                }(function(e) {
                    return "object" === (0,
                    lr.Z)(e) && "errorCode"in e
                }(S.response) && S.response.errorCode, d), Z = window.__promoCode.useRecaptcha ? (0,
                s.tZ)(cr.Z, {
                    ref: f,
                    sitekey: window.__recaptchaApiKey,
                    onChange: w
                }) : null, I = C("codeForm.loading") ? "loading" : C("codeForm.success") ? "success" : C("codeForm.typingWithError") ? "failure" : "active", L = C("codesHistory.loading") ? "loading" : C("codesHistory.error") ? "error" : "success";
                return {
                    code: d,
                    reCaptchaNode: Z,
                    couponState: I,
                    changeCode: p,
                    submit: function() {
                        return N ? x("GET_BONUS", {
                            code: d
                        }) : E ? void 0 : x("SHOW_CAPTCHA_ERROR", {
                            data: {
                                errorCode: "verifyReCaptcha",
                                status: !1
                            }
                        })
                    },
                    successMessage: O,
                    failureMessage: T,
                    codesHistoryState: L,
                    historyCodes: Array.isArray(S.history) ? S.history : []
                }
            }
              , fr = function(e) {
                var t = e.className;
                return (0,
                s.tZ)("span", {
                    "data-testid": "coupon_modal_exclamation_icon",
                    className: (0,
                    P.cn)("flex h-8 w-8 flex-shrink items-center justify-center rounded-full bg-lightgreen-800", t),
                    children: (0,
                    s.tZ)(D.SI, {})
                })
            }
              , hr = function() {
                var e = (0,
                j.$G)("common").t
                  , t = Rn().initialGoldenCode
                  , n = {
                    title: e("goldenCodeModal.title"),
                    tooltip: e("goldenCodeModal.infoCode"),
                    description: (0,
                    s.tZ)(j.cC, {
                        i18nKey: "common:goldenCodeModal.description",
                        components: {
                            bonus: (0,
                            s.tZ)("span", {
                                className: "text-gold-400"
                            })
                        }
                    }),
                    error: {
                        verifyReCaptcha: e("codeModal.error.verifyReCaptcha")
                    }
                }
                  , o = pr({
                    initialCode: t,
                    api: {
                        submit: sr.getSubmitEndpoint(),
                        history: sr.getHistoryEndpoint()
                    }
                })
                  , r = o.code
                  , a = o.couponState
                  , i = o.reCaptchaNode
                  , l = o.changeCode
                  , c = o.submit
                  , u = o.successMessage
                  , d = o.failureMessage
                  , p = o.historyCodes
                  , f = o.codesHistoryState;
                return (0,
                s.tZ)(rr, {
                    successMessage: u,
                    failureMessage: d,
                    icon: (0,
                    s.tZ)(fr, {
                        className: "bg-[#231C11] text-[#FFCB77]"
                    }),
                    imageUrl: (0,
                    P.$o)("goldencode-modal/grandpa_gold.webp"),
                    imageClassName: "scale-125 -mt-6",
                    code: r,
                    handleCodeChange: function(e) {
                        return l(e.target.value)
                    },
                    submit: c,
                    textData: n,
                    placeholder: e("goldenCodeModal.enterGoldenCode"),
                    type: "goldenCode",
                    reCaptcha: i,
                    state: a,
                    codesHistoryState: f,
                    historyCodes: p
                })
            }
              , mr = ["className", "children"];
            function yr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function gr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? yr(Object(n), !0).forEach((function(t) {
                        (0,
                        R.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var wr = function(e) {
                var t = e.className
                  , n = e.children
                  , o = (0,
                B.Z)(e, mr);
                return (0,
                s.tZ)("button", gr(gr({
                    "data-testid": "nav_button",
                    className: (0,
                    P.cn)("flex h-full flex-1 items-center justify-center gap-x-3 bg-[#23232D] text-sm uppercase text-white transition-colors duration-150 hover:bg-navy-500", t)
                }, o), {}, {
                    children: n
                }))
            }
              , vr = function(e) {
                var t = e.activeTab
                  , n = e.onClickTab
                  , o = e.onClickClose
                  , r = (0,
                j.$G)("common").t;
                return (0,
                s.BX)("div", {
                    "data-testid": "use_code_modal_nav",
                    className: "flex h-14 gap-x-0.5 overflow-hidden rounded-t-xl",
                    children: [(0,
                    s.BX)(wr, {
                        className: "PROMO" === t && "bg-lightgreen-750 text-lightgreen hover:bg-lightgreen-750",
                        onClick: function() {
                            return n("PROMO")
                        },
                        children: [(0,
                        s.tZ)(D.SW, {
                            className: "h-5 w-5"
                        }), (0,
                        s.tZ)("span", {
                            className: "hidden sm:inline",
                            children: r("codeModal.usePromoCode")
                        })]
                    }), (0,
                    s.BX)(wr, {
                        className: "GOLDEN" === t && "bg-gold-1050 text-gold-400 hover:bg-gold-1050",
                        onClick: function() {
                            return n("GOLDEN")
                        },
                        children: [(0,
                        s.tZ)("img", {
                            src: (0,
                            P.$o)("gold-coin.svg"),
                            className: (0,
                            P.cn)("h-5 w-5", "GOLDEN" !== t && "brightness-[10]")
                        }), (0,
                        s.tZ)("span", {
                            className: "hidden sm:inline",
                            children: r("codeModal.useGoldenCode")
                        })]
                    }), (0,
                    s.tZ)("button", {
                        type: "button",
                        className: "ml-auto grid w-14 place-content-center bg-navy-600 transition-colors duration-200 hover:bg-navy-550 hover:text-white",
                        onClick: o,
                        children: (0,
                        s.tZ)(D.Tw, {
                            className: "h-5 w-5"
                        })
                    })]
                })
            }
              , br = function() {
                var e = (0,
                j.$G)("common").t
                  , t = Rn().initialPromoCode
                  , n = {
                    title: e("promoCodeModal.title"),
                    tooltip: e("promoCodeModal.infoCode"),
                    description: (0,
                    s.tZ)(j.cC, {
                        i18nKey: "common:promoCodeModal.description",
                        values: {
                            bonusAmount: "+10%"
                        },
                        components: {
                            bonus: (0,
                            s.tZ)("span", {
                                className: "text-lightgreen"
                            })
                        }
                    }),
                    error: {
                        verifyReCaptcha: e("codeModal.error.verifyReCaptcha")
                    }
                }
                  , o = pr({
                    initialCode: t,
                    api: {
                        submit: ir.getSubmitEndpoint(),
                        history: ir.getHistoryEndpoint()
                    }
                })
                  , r = o.code
                  , a = o.couponState
                  , i = o.reCaptchaNode
                  , l = o.changeCode
                  , c = o.submit
                  , u = o.codesHistoryState
                  , d = o.successMessage
                  , p = o.failureMessage
                  , f = o.historyCodes;
                return (0,
                s.tZ)(rr, {
                    textData: n,
                    gradient: "linear-gradient(90deg, rgba(119, 255, 157, 0.1) 0%, rgba(17, 17, 20, 0) 156.79%)",
                    icon: (0,
                    s.tZ)(fr, {
                        className: "bg-lightgreen-800 text-lightgreen"
                    }),
                    imageClassName: "scale-125 -mt-4",
                    successMessage: d,
                    failureMessage: p,
                    imageUrl: (0,
                    P.$o)("promocode-modal/grandpa_lucky.webp"),
                    code: r,
                    handleCodeChange: function(e) {
                        return l(e.target.value)
                    },
                    submit: c,
                    placeholder: e("promoCodeModal.enterPromoCode"),
                    type: "promoCode",
                    reCaptcha: i,
                    state: a,
                    codesHistoryState: u,
                    historyCodes: f
                })
            }
              , kr = {
                PROMO: function() {
                    return (0,
                    s.tZ)(k.E.div, {
                        layout: !0,
                        layoutId: "modal_content",
                        initial: {
                            x: -10,
                            opacity: 0
                        },
                        animate: {
                            x: 0,
                            opacity: 1
                        },
                        exit: {
                            x: -10,
                            opacity: 0
                        },
                        transition: {
                            duration: .4
                        },
                        children: (0,
                        s.tZ)(br, {})
                    }, "PROMO")
                },
                GOLDEN: function() {
                    return (0,
                    s.tZ)(k.E.div, {
                        layout: !0,
                        layoutId: "modal_content",
                        initial: {
                            x: 10,
                            opacity: 0
                        },
                        animate: {
                            x: 0,
                            opacity: 1
                        },
                        exit: {
                            x: 10,
                            opacity: 0
                        },
                        transition: {
                            duration: .4
                        },
                        children: (0,
                        s.tZ)(hr, {})
                    }, "GOLDEN")
                }
            }
              , zr = function() {
                var e = Rn()
                  , t = e.open
                  , n = e.handleCloseModal
                  , o = (0,
                y.useState)(null != t ? t : "PROMO")
                  , r = (0,
                b.Z)(o, 2)
                  , a = r[0]
                  , i = r[1];
                (0,
                y.useEffect)((function() {
                    t && i(t)
                }
                ), [t]);
                var l = kr[a];
                return (0,
                s.tZ)(z.M, {
                    children: t && (0,
                    s.BX)(Jo, {
                        open: Boolean(t),
                        onClose: n,
                        className: "relative z-50",
                        "data-testid": "use_code_modal",
                        children: [(0,
                        s.tZ)(k.E.div, {
                            style: {
                                background: "rgba(0, 0, 0, 0.85)"
                            },
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
                                duration: .3,
                                ease: "easeOut"
                            },
                            className: "fixed inset-0 !bg-navy-800 backdrop-blur-[3px] lg:!bg-[rgb(8,10,13)] lg:!bg-opacity-90",
                            "aria-hidden": "true"
                        }), (0,
                        s.tZ)(k.E.div, {
                            initial: {
                                opacity: 0,
                                scale: .9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: .9
                            },
                            transition: {
                                duration: .3,
                                ease: "easeOut"
                            },
                            className: "fixed inset-0 h-full w-full sm:mx-auto sm:my-auto sm:max-h-[650px] sm:max-w-3xl",
                            children: (0,
                            s.BX)(Jo.Panel, {
                                className: "flex h-fit max-h-full w-full flex-col space-y-2 rounded-2xl bg-navy-750 p-3 sm:px-4 sm:py-5 md:space-y-0.5",
                                children: [(0,
                                s.tZ)("div", {
                                    className: "shrink-0",
                                    children: (0,
                                    s.tZ)(vr, {
                                        activeTab: a,
                                        onClickClose: n,
                                        onClickTab: i
                                    })
                                }), (0,
                                s.tZ)("div", {
                                    className: "shrink-1 custom-scrollbar modal-scrollbar relative h-full grow overflow-x-clip overflow-y-scroll transition-opacity duration-200",
                                    children: (0,
                                    s.tZ)("div", {
                                        className: "mr-0.5",
                                        children: (0,
                                        s.tZ)(z.M, {
                                            exitBeforeEnter: !0,
                                            children: (0,
                                            s.tZ)(l, {})
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
              , xr = function() {
                var e = (0,
                y.useRef)(null)
                  , t = document.querySelector("#header-placeholder");
                return (0,
                y.useEffect)((function() {
                    return e.current.appendChild(t.cloneNode(!0)),
                    null == t || t.remove(),
                    function() {
                        null == t || t.remove()
                    }
                }
                ), []),
                (0,
                s.tZ)("div", {
                    ref: e
                })
            }
              , jr = n(39)
              , Cr = ["className", "regexPattern"]
              , Sr = ["className", "delay", "value", "onChange", "validatePattern"]
              , Er = ["className", "wrapperClassName", "allowZero", "onButtonClick"]
              , Nr = ["className", "placeholder", "onChange", "value"];
            function Or(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function Tr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Or(Object(n), !0).forEach((function(t) {
                        (0,
                        R.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Or(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var Zr = (0,
            y.forwardRef)((function(e, t) {
                var n = e.className
                  , o = void 0 === n ? "" : n
                  , r = e.regexPattern
                  , a = (0,
                B.Z)(e, Cr);
                return (0,
                s.tZ)("input", Tr({
                    ref: t,
                    type: "text",
                    className: (0,
                    P.cn)("input", o),
                    onKeyDown: r ? function(e) {
                        return !r.test(e.key) && e.preventDefault()
                    }
                    : void 0
                }, a))
            }
            ));
            Zr.displayName = "Input";
            var Ir = (0,
            y.forwardRef)((function(e, t) {
                var n = e.className
                  , o = void 0 === n ? "" : n
                  , r = e.delay
                  , a = void 0 === r ? 300 : r
                  , i = e.value
                  , l = e.onChange
                  , c = e.validatePattern
                  , u = (0,
                B.Z)(e, Sr)
                  , d = (0,
                y.useState)(i)
                  , p = (0,
                b.Z)(d, 2)
                  , f = p[0]
                  , h = p[1]
                  , m = function(e, t) {
                    var n = (0,
                    y.useState)(e)
                      , o = (0,
                    b.Z)(n, 2)
                      , r = o[0]
                      , a = o[1];
                    return (0,
                    y.useEffect)((function() {
                        var n = setTimeout((function() {
                            a(e)
                        }
                        ), t);
                        return function() {
                            return clearTimeout(n)
                        }
                    }
                    ), [e, t]),
                    r
                }(f, a);
                return (0,
                y.useEffect)((function() {
                    void 0 !== m && l(m)
                }
                ), [m]),
                (0,
                y.useEffect)((function() {
                    i !== f && h(i)
                }
                ), [i]),
                (0,
                s.tZ)("input", Tr({
                    ref: t,
                    type: "text",
                    value: f,
                    onChange: function(e) {
                        c ? c.test(e.currentTarget.value) && h(e.currentTarget.value) : h(e.currentTarget.value)
                    },
                    className: (0,
                    P.cn)("input", o)
                }, u))
            }
            ));
            Ir.displayName = "DebouncedInput",
            (0,
            y.forwardRef)((function(e, t) {
                var n = e.className
                  , o = void 0 === n ? "" : n
                  , r = e.wrapperClassName
                  , a = void 0 === r ? "" : r
                  , i = e.allowZero
                  , l = void 0 !== i && i
                  , c = e.onButtonClick
                  , u = (0,
                B.Z)(e, Er)
                  , d = (0,
                y.useState)(u.value)
                  , p = (0,
                b.Z)(d, 2)
                  , f = p[0]
                  , h = p[1];
                return (0,
                y.useEffect)((function() {
                    u.value !== f && h(u.value)
                }
                ), [u.value]),
                (0,
                s.BX)("div", {
                    className: (0,
                    P.cn)("flex", a),
                    children: [(0,
                    s.tZ)("input", Tr(Tr({
                        ref: t,
                        type: "number",
                        className: (0,
                        P.cn)("input", o)
                    }, u), {}, {
                        value: f,
                        onChange: function(e) {
                            u.onChange(e),
                            h(e.target.value || "")
                        }
                    })), (0,
                    s.BX)("div", {
                        className: "-ml-8 flex flex-col self-end",
                        children: [(0,
                        s.tZ)("button", {
                            className: "flex w-8 items-center justify-center rounded-t-lg border-l border-r border-t border-navy-400 bg-navy-600 text-sm text-white transition-colors duration-200 hover:border-navy-300 hover:bg-navy-550",
                            css: {
                                height: "1.375rem"
                            },
                            onClick: function() {
                                Number(u.max) <= f || (f || l ? (c(+f + 1),
                                h(+f + 1)) : (c(Number(u.min)),
                                h(Number(u.min))))
                            },
                            children: "+"
                        }), (0,
                        s.tZ)("button", {
                            className: "flex w-8 items-center justify-center rounded-b-lg border border-navy-400 bg-navy-600 text-sm text-white transition-colors duration-200 hover:border-navy-300 hover:bg-navy-550",
                            css: {
                                height: "1.375rem"
                            },
                            onClick: function() {
                                Number(u.min) >= f || (c(+f - 1),
                                h(+f - 1))
                            },
                            children: "-"
                        })]
                    })]
                })
            }
            )).displayName = "NumberInput";
            var Pr = /^[A-Za-z0-9%\-\s]{0,48}$/;
            (0,
            y.forwardRef)((function(e, t) {
                var n = e.className
                  , o = e.placeholder
                  , r = e.onChange
                  , a = e.value
                  , i = (0,
                B.Z)(e, Nr);
                return (0,
                s.tZ)(Ir, Tr({
                    ref: t,
                    className: n,
                    delay: 400,
                    placeholder: o,
                    onChange: r,
                    value: a,
                    validatePattern: Pr
                }, i))
            }
            )).displayName = "SearchInput";
            var Lr, Ar = function(e) {
                var t = e.className
                  , n = void 0 === t ? "" : t;
                return (0,
                s.tZ)("div", {
                    className: (0,
                    P.cn)("h-4 w-4 transform transition duration-200", n),
                    children: (0,
                    s.BX)("svg", {
                        className: "h-full w-full animate-spin",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [(0,
                        s.tZ)("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                        }), (0,
                        s.tZ)("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        })]
                    })
                })
            }, Dr = function(e) {
                var t = e.className
                  , n = (0,
                j.$G)("header").t
                  , o = (0,
                y.useState)("")
                  , r = (0,
                b.Z)(o, 2)
                  , a = r[0]
                  , i = r[1]
                  , l = (0,
                y.useState)([])
                  , c = (0,
                b.Z)(l, 2)
                  , u = c[0]
                  , d = c[1]
                  , p = (0,
                y.useState)([])
                  , f = (0,
                b.Z)(p, 2)
                  , h = f[0]
                  , m = f[1]
                  , g = (0,
                y.useState)(!1)
                  , w = (0,
                b.Z)(g, 2)
                  , v = w[0]
                  , C = w[1]
                  , S = (0,
                y.useState)(!1)
                  , E = (0,
                b.Z)(S, 2)
                  , O = E[0]
                  , T = E[1]
                  , Z = N(P.BC.js.xl)
                  , I = (0,
                y.useRef)();
                !function(e, t) {
                    var n = function(n) {
                        e.current && !e.current.contains(n.target) && t()
                    };
                    (0,
                    y.useEffect)((function() {
                        return document.addEventListener("click", n),
                        function() {
                            document.removeEventListener("click", n)
                        }
                    }
                    ))
                }(I, (function() {
                    v && C(!1)
                }
                ));
                var L = function(e) {
                    i(e.target.value),
                    A(e.target.value)
                }
                  , A = (0,
                y.useCallback)((0,
                x.Z)((function(e) {
                    if ("" !== e) {
                        T(!0);
                        var t = new FormData;
                        t.append("s", e),
                        fetch(jr.bl.search(), {
                            method: "POST",
                            body: t
                        }).then((function(e) {
                            return e.json()
                        }
                        )).then((function(e) {
                            (null == e ? void 0 : e.results.length) > 0 ? d(e.results) : (d([]),
                            m(e.popular)),
                            C(!0),
                            T(!1)
                        }
                        )).catch((function(e) {
                            var t;
                            window.__layout.toast({
                                type: "error",
                                title: null === (t = window) || void 0 === t ? void 0 : t.lang_title[20],
                                message: e
                            }),
                            T(!1)
                        }
                        ))
                    }
                }
                ), 400), []);
                (0,
                y.useEffect)((function() {
                    return A(a)
                }
                ), [a]);
                var R = Z ? !O && v : v
                  , B = "" !== a && !O;
                return (0,
                s.BX)("div", {
                    ref: I,
                    className: (0,
                    P.cn)("ml-auto mr-0 md:ml-5 xl:relative xl:ml-9 xl:w-64 xl:min-w-[150px]", t),
                    children: [(0,
                    s.BX)("label", {
                        className: "hidden xl:flex",
                        children: [(0,
                        s.tZ)(Zr, {
                            className: "-mr-11 h-12 w-full rounded-lg border-navy-550 bg-navy-550 pl-5 pr-11 text-xs font-semibold uppercase placeholder-navy-200 placeholder:font-normal focus:border-gold-400",
                            placeholder: n("search"),
                            onChange: L,
                            value: a,
                            onFocus: function() {
                                "" !== a && C(!0)
                            }
                        }), (0,
                        s.tZ)("div", {
                            className: "my-auto flex h-9 w-9 items-center justify-center p-2",
                            children: O ? (0,
                            s.tZ)(Ar, {
                                className: "block h-5 w-5 text-navy-200"
                            }) : (0,
                            s.BX)("svg", {
                                className: "block h-5 w-5 text-navy-200",
                                children: [" ", (0,
                                s.tZ)("use", {
                                    xlinkHref: (0,
                                    P.iU)("search")
                                })]
                            })
                        })]
                    }), (0,
                    s.tZ)(pt, {
                        onClick: function() {
                            return C(!0)
                        },
                        className: "aspect-square h-9 w-9 rounded bg-navy-800 p-1 xl:hidden",
                        children: (0,
                        s.tZ)("svg", {
                            className: "block h-4 w-4 text-navy-100",
                            children: (0,
                            s.tZ)("use", {
                                xlinkHref: (0,
                                P.iU)("search")
                            })
                        })
                    }), (0,
                    s.tZ)(z.M, {
                        children: R && (0,
                        s.BX)(k.E.div, {
                            initial: {
                                opacity: 0,
                                scale: .97
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: .97
                            },
                            transition: {
                                duration: .25,
                                ease: "easeOut"
                            },
                            className: "custom-scrollbar fixed left-0 top-0 z-50 w-full origin-top overflow-y-auto rounded-b-lg bg-navy-550 xl:absolute xl:top-[4.625rem] xl:max-h-[350px] xl:bg-navy-700",
                            children: [(0,
                            s.BX)("div", {
                                className: "bg-navy-700 px-3 py-4 xl:hidden",
                                children: [(0,
                                s.tZ)(pt, {
                                    onClick: function() {
                                        d([]),
                                        C(!1),
                                        T(!1)
                                    },
                                    className: "mb-8 ml-auto aspect-square h-9 w-9 rounded bg-navy-400 p-1",
                                    children: (0,
                                    s.tZ)(D.Tw, {
                                        className: "block h-6 w-6 text-white"
                                    })
                                }), (0,
                                s.tZ)(Zr, {
                                    className: "-mr-11 h-12 w-full rounded-lg border-navy-550 bg-navy-550 pl-5 pr-11 text-[10px] text-xs font-semibold uppercase placeholder-navy-200 focus:border-gold-400",
                                    placeholder: n("search"),
                                    onChange: L,
                                    value: a,
                                    onFocus: function() {
                                        "" !== a && C(!0)
                                    }
                                })]
                            }), B && (0,
                            s.tZ)("p", {
                                className: "p-4 text-[10px] text-navy-200 lg:border-b lg:border-navy-400",
                                children: 0 === u.length ? n("noResultsFound") : "".concat(n("foundResults"), " (").concat(u.length, ")")
                            }), u.length > 0 && (0,
                            s.tZ)("ul", {
                                children: u.map((function(e) {
                                    return (0,
                                    s.tZ)("li", {
                                        children: (0,
                                        s.BX)(X, {
                                            href: e.Url,
                                            className: "flex px-1 py-2.5 transition-colors duration-200 hover:bg-navy-500",
                                            children: [(0,
                                            s.tZ)("img", {
                                                src: {
                                                    Game: "".concat(new URL(window.__url.base).origin, "/").concat(e.Image),
                                                    Case: "".concat(new URL(window.__url.base).origin, "/").concat(e.Mini_image),
                                                    Skins: e.Image,
                                                    SkinProduct: e.Image
                                                }[e.Type],
                                                className: "mr-2 h-14 w-20 flex-shrink-0 object-contain",
                                                alt: e.Type
                                            }), (0,
                                            s.BX)("div", {
                                                className: "flex w-full flex-col justify-center",
                                                children: [(0,
                                                s.tZ)("p", {
                                                    className: "flex h-7 items-center text-xs text-white",
                                                    children: e.Name
                                                }), "Case" !== e.Type && (0,
                                                s.BX)("p", {
                                                    className: "flex h-7 items-center text-[8.5px] uppercase",
                                                    children: [(0,
                                                    s.tZ)("span", {
                                                        className: "whitespace-nowrap text-gold-400",
                                                        children: "SkinProduct" === e.Type ? n("header:product") : n("header:inTheCase")
                                                    }), ("Game" === e.Type || "Skins" === e.Type) && (0,
                                                    s.tZ)("span", {
                                                        className: "ml-1 text-navy-200",
                                                        children: e.Case_name
                                                    })]
                                                })]
                                            })]
                                        })
                                    }, e.Url)
                                }
                                ))
                            }), 0 === u.length ? (0,
                            s.BX)("div", {
                                children: [h.length > 0 && (0,
                                s.tZ)("p", {
                                    className: "mb-4 ml-4 mt-4 text-[10px] text-navy-200",
                                    children: n("mostPopularCases")
                                }), (0,
                                s.tZ)("ul", {
                                    children: h.map((function(e) {
                                        return (0,
                                        s.tZ)("li", {
                                            children: (0,
                                            s.BX)(X, {
                                                href: e.Url,
                                                className: "flex py-2.5 pl-6 pr-4 transition-colors duration-200 hover:bg-navy-500",
                                                children: [(0,
                                                s.tZ)("img", {
                                                    src: e.Mini_image.includes("https") ? e.Mini_image : "/".concat(e.Mini_image),
                                                    className: "mr-2 h-14 w-20 flex-shrink-0 object-contain",
                                                    alt: "case"
                                                }), (0,
                                                s.tZ)("div", {
                                                    className: "flex w-full flex-col justify-center",
                                                    children: (0,
                                                    s.tZ)("p", {
                                                        className: "flex h-7 items-center text-xs text-white",
                                                        children: e.Name
                                                    })
                                                })]
                                            })
                                        }, e.Url)
                                    }
                                    ))
                                })]
                            }) : null]
                        })
                    })]
                })
            }, Rr = function() {
                return (0,
                s.tZ)("div", {
                    className: "w-full bg-gradient-to-r from-gold-1050 to-[#665230] text-white",
                    children: (0,
                    s.tZ)("div", {
                        className: "container flex justify-center py-2",
                        children: (0,
                        s.tZ)("p", {
                            className: "mr-4 text-xs",
                            children: (0,
                            s.tZ)(j.cC, {
                                i18nKey: "common:steamIsDownInfo",
                                components: {
                                    strong: (0,
                                    s.tZ)("strong", {
                                        className: "text-bold"
                                    })
                                }
                            })
                        })
                    })
                })
            };
            let Br = null != (Lr = y.startTransition) ? Lr : function(e) {
                e()
            }
            ;
            var Mr = (e=>(e[e.Open = 0] = "Open",
            e[e.Closed = 1] = "Closed",
            e))(Mr || {})
              , Fr = (e=>(e[e.ToggleDisclosure = 0] = "ToggleDisclosure",
            e[e.CloseDisclosure = 1] = "CloseDisclosure",
            e[e.SetButtonId = 2] = "SetButtonId",
            e[e.SetPanelId = 3] = "SetPanelId",
            e[e.LinkPanel = 4] = "LinkPanel",
            e[e.UnlinkPanel = 5] = "UnlinkPanel",
            e))(Fr || {});
            let _r = {
                0: e=>({
                    ...e,
                    disclosureState: (0,
                    yt.E)(e.disclosureState, {
                        0: 1,
                        1: 0
                    })
                }),
                1: e=>1 === e.disclosureState ? e : {
                    ...e,
                    disclosureState: 1
                },
                4: e=>!0 === e.linkedPanel ? e : {
                    ...e,
                    linkedPanel: !0
                },
                5: e=>!1 === e.linkedPanel ? e : {
                    ...e,
                    linkedPanel: !1
                },
                2: (e,t)=>e.buttonId === t.buttonId ? e : {
                    ...e,
                    buttonId: t.buttonId
                },
                3: (e,t)=>e.panelId === t.panelId ? e : {
                    ...e,
                    panelId: t.panelId
                }
            }
              , Ur = (0,
            y.createContext)(null);
            function Hr(e) {
                let t = (0,
                y.useContext)(Ur);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, Hr),
                    t
                }
                return t
            }
            Ur.displayName = "DisclosureContext";
            let Gr = (0,
            y.createContext)(null);
            function $r(e) {
                let t = (0,
                y.useContext)(Gr);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, $r),
                    t
                }
                return t
            }
            Gr.displayName = "DisclosureAPIContext";
            let Yr = (0,
            y.createContext)(null);
            function Vr(e, t) {
                return (0,
                yt.E)(t.type, _r, e, t)
            }
            Yr.displayName = "DisclosurePanelContext";
            let Xr = y.Fragment
              , Wr = gt.AN.RenderStrategy | gt.AN.Static
              , qr = (0,
            gt.yV)((function(e, t) {
                let {defaultOpen: n=!1, ...o} = e
                  , r = (0,
                y.useRef)(null)
                  , a = (0,
                wt.T)(t, (0,
                wt.h)((e=>{
                    r.current = e
                }
                ), void 0 === e.as || e.as === y.Fragment))
                  , i = (0,
                y.useRef)(null)
                  , s = (0,
                y.useRef)(null)
                  , l = (0,
                y.useReducer)(Vr, {
                    disclosureState: n ? 0 : 1,
                    linkedPanel: !1,
                    buttonRef: s,
                    panelRef: i,
                    buttonId: null,
                    panelId: null
                })
                  , [{disclosureState: c, buttonId: u},d] = l
                  , p = (0,
                Zt.z)((e=>{
                    d({
                        type: 1
                    });
                    let t = (0,
                    St.r)(r);
                    if (!t || !u)
                        return;
                    let n = e ? e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : t.getElementById(u) : t.getElementById(u);
                    null == n || n.focus()
                }
                ))
                  , f = (0,
                y.useMemo)((()=>({
                    close: p
                })), [p])
                  , h = (0,
                y.useMemo)((()=>({
                    open: 0 === c,
                    close: p
                })), [c, p])
                  , m = {
                    ref: a
                };
                return y.createElement(Ur.Provider, {
                    value: l
                }, y.createElement(Gr.Provider, {
                    value: f
                }, y.createElement(xt.up, {
                    value: (0,
                    yt.E)(c, {
                        0: xt.ZM.Open,
                        1: xt.ZM.Closed
                    })
                }, (0,
                gt.sY)({
                    ourProps: m,
                    theirProps: o,
                    slot: h,
                    defaultTag: Xr,
                    name: "Disclosure"
                }))))
            }
            ))
              , Kr = (0,
            gt.yV)((function(e, t) {
                let n = (0,
                vt.M)()
                  , {id: o=`headlessui-disclosure-button-${n}`, ...r} = e
                  , [a,i] = Hr("Disclosure.Button")
                  , s = (0,
                y.useContext)(Yr)
                  , l = null !== s && s === a.panelId
                  , c = (0,
                y.useRef)(null)
                  , u = (0,
                wt.T)(c, t, l ? null : a.buttonRef);
                (0,
                y.useEffect)((()=>{
                    if (!l)
                        return i({
                            type: 2,
                            buttonId: o
                        }),
                        ()=>{
                            i({
                                type: 2,
                                buttonId: null
                            })
                        }
                }
                ), [o, i, l]);
                let d = (0,
                Zt.z)((e=>{
                    var t;
                    if (l) {
                        if (1 === a.disclosureState)
                            return;
                        switch (e.key) {
                        case bt.R.Space:
                        case bt.R.Enter:
                            e.preventDefault(),
                            e.stopPropagation(),
                            i({
                                type: 0
                            }),
                            null == (t = a.buttonRef.current) || t.focus()
                        }
                    } else
                        switch (e.key) {
                        case bt.R.Space:
                        case bt.R.Enter:
                            e.preventDefault(),
                            e.stopPropagation(),
                            i({
                                type: 0
                            })
                        }
                }
                ))
                  , p = (0,
                Zt.z)((e=>{
                    switch (e.key) {
                    case bt.R.Space:
                        e.preventDefault()
                    }
                }
                ))
                  , f = (0,
                Zt.z)((t=>{
                    var n;
                    (0,
                    kt.P)(t.currentTarget) || e.disabled || (l ? (i({
                        type: 0
                    }),
                    null == (n = a.buttonRef.current) || n.focus()) : i({
                        type: 0
                    }))
                }
                ))
                  , h = (0,
                y.useMemo)((()=>({
                    open: 0 === a.disclosureState
                })), [a])
                  , m = (0,
                jt.f)(e, c)
                  , g = l ? {
                    ref: u,
                    type: m,
                    onKeyDown: d,
                    onClick: f
                } : {
                    ref: u,
                    id: o,
                    type: m,
                    "aria-expanded": e.disabled ? void 0 : 0 === a.disclosureState,
                    "aria-controls": a.linkedPanel ? a.panelId : void 0,
                    onKeyDown: d,
                    onKeyUp: p,
                    onClick: f
                };
                return (0,
                gt.sY)({
                    ourProps: g,
                    theirProps: r,
                    slot: h,
                    defaultTag: "button",
                    name: "Disclosure.Button"
                })
            }
            ))
              , Jr = (0,
            gt.yV)((function(e, t) {
                let n = (0,
                vt.M)()
                  , {id: o=`headlessui-disclosure-panel-${n}`, ...r} = e
                  , [a,i] = Hr("Disclosure.Panel")
                  , {close: s} = $r("Disclosure.Panel")
                  , l = (0,
                wt.T)(t, a.panelRef, (e=>{
                    Br((()=>i({
                        type: e ? 4 : 5
                    })))
                }
                ));
                (0,
                y.useEffect)((()=>(i({
                    type: 3,
                    panelId: o
                }),
                ()=>{
                    i({
                        type: 3,
                        panelId: null
                    })
                }
                )), [o, i]);
                let c = (0,
                xt.oJ)()
                  , u = null !== c ? (c & xt.ZM.Open) === xt.ZM.Open : 0 === a.disclosureState
                  , d = (0,
                y.useMemo)((()=>({
                    open: 0 === a.disclosureState,
                    close: s
                })), [a, s])
                  , p = {
                    ref: l,
                    id: o
                };
                return y.createElement(Yr.Provider, {
                    value: a.panelId
                }, (0,
                gt.sY)({
                    ourProps: p,
                    theirProps: r,
                    slot: d,
                    defaultTag: "div",
                    features: Wr,
                    visible: u,
                    name: "Disclosure.Panel"
                }))
            }
            ))
              , Qr = Object.assign(qr, {
                Button: Kr,
                Panel: Jr
            });
            var ea = n(258)
              , ta = (0,
            Fe.C)({
                id: "GiveawaysAnimationMachine",
                tsTypes: {},
                schema: {
                    context: {},
                    events: {}
                },
                context: {
                    giveawaysTypes: [{
                        text: "Champion",
                        color: "text-giveaway-champion",
                        icon: "champion-giveaway"
                    }, {
                        text: "Challenger",
                        color: "text-giveaway-challenger",
                        icon: "challenger-giveaway"
                    }, {
                        text: "Legend",
                        color: "text-giveaway-legend",
                        icon: "legend-giveaway"
                    }, {
                        text: "Contender",
                        color: "text-giveaway-contender",
                        icon: "contender-giveaway"
                    }, {
                        text: "Amateur",
                        color: "text-giveaway-amateur",
                        icon: "amateur-giveaway"
                    }, {
                        text: "Keydrop",
                        color: "text-gold-400",
                        icon: "present-filled"
                    }],
                    activeIndex: 0,
                    initialGiveawaysOpen: !1
                },
                initial: "determineInitialState",
                states: {
                    determineInitialState: {
                        always: [{
                            cond: "isGiveawaysOpen",
                            actions: "assignLastActiveIndex",
                            target: "showingActiveGiveaways"
                        }, {
                            target: "animating"
                        }]
                    },
                    animating: {
                        after: {
                            2e3: {
                                actions: "assignNextActiveIndex",
                                target: "animating"
                            }
                        },
                        on: {
                            TOGGLE_ANIMATION: {
                                actions: "assignLastActiveIndex",
                                target: "showingActiveGiveaways"
                            }
                        }
                    },
                    showingActiveGiveaways: {
                        on: {
                            TOGGLE_ANIMATION: {
                                actions: "assignFirstActiveIndex",
                                target: "animating"
                            }
                        }
                    }
                }
            }, {
                actions: {
                    assignNextActiveIndex: (0,
                    Se.f0)((function(e) {
                        var t = (e.activeIndex + 1) % 5;
                        e.activeIndex = t
                    }
                    )),
                    assignFirstActiveIndex: (0,
                    Se.f0)((function(e) {
                        e.activeIndex = 0
                    }
                    )),
                    assignLastActiveIndex: (0,
                    Se.f0)((function(e) {
                        e.activeIndex = 5
                    }
                    ))
                },
                guards: {
                    isGiveawaysOpen: function(e) {
                        return e.initialGiveawaysOpen
                    }
                }
            })
              , na = n(640);
            ht.p8.registerPlugin(na.A);
            var oa = function(e) {
                var t = e.text
                  , n = e.chars
                  , o = void 0 === n ? "uppercase" : n
                  , r = (0,
                y.useRef)();
                return (0,
                y.useEffect)((function() {
                    r.current.textContent ? ht.p8.to(r.current, {
                        scrambleText: {
                            text: t,
                            chars: o
                        }
                    }) : r.current.textContent = t
                }
                ), [t]),
                (0,
                s.tZ)("span", {
                    ref: r
                })
            }
              , ra = "GIVEAWAYS_BAR_OPEN"
              , aa = (0,
            y.lazy)((function() {
                return n.e(686).then(n.bind(n, 315))
            }
            ))
              , ia = function(e) {
                var t = e.label
                  , n = e.icon
                  , o = e.url
                  , r = e.className;
                return (0,
                s.BX)(X, {
                    href: o,
                    className: (0,
                    P.cn)("hidden items-center whitespace-nowrap px-2 py-5 text-2xs font-semibold uppercase transition-colors duration-200 hover:text-white lg:px-3 lg:text-[11px]", r),
                    children: [(0,
                    s.tZ)("svg", {
                        className: "mr-1.5 h-5 w-5 lg:mr-2",
                        children: n
                    }), t]
                })
            }
              , sa = function(e) {
                var t = e.isEventActive
                  , n = (0,
                y.useState)((function() {
                    var e = (0,
                    P.ej)(ra);
                    return !e || "true" == e
                }
                ))
                  , o = (0,
                b.Z)(n, 2)
                  , r = o[0]
                  , a = o[1]
                  , i = (0,
                j.$G)("header").t
                  , l = (0,
                Q.e)(ta, {
                    context: {
                        initialGiveawaysOpen: r
                    }
                })
                  , c = (0,
                b.Z)(l, 2)
                  , u = c[0]
                  , d = c[1]
                  , p = u.context
                  , f = p.giveawaysTypes
                  , h = p.activeIndex;
                return (0,
                s.BX)(s.HY, {
                    children: [(0,
                    s.tZ)("div", {
                        className: "hidden bg-navy-800 py-3 md:block",
                        children: (0,
                        s.tZ)("div", {
                            className: "container",
                            children: (0,
                            s.BX)("nav", {
                                "aria-label": "Primary",
                                className: "flex h-16 rounded-xl bg-navy-700/60",
                                children: [(0,
                                s.tZ)(ca, {}), (0,
                                s.BX)("button", {
                                    onClick: function() {
                                        a(!r),
                                        d("TOGGLE_ANIMATION"),
                                        document.cookie = "".concat(ra, "=").concat(!r, "; Path=/")
                                    },
                                    className: "group mx-2 ml-auto hidden cursor-pointer items-center whitespace-nowrap px-2 py-5 text-2xs font-semibold uppercase text-white transition-colors duration-200  md:flex lg:mr-3 lg:px-3",
                                    children: [(0,
                                    s.tZ)("svg", {
                                        className: (0,
                                        P.cn)("mr-2 h-5 w-5 transition duration-300", f[h].color),
                                        children: (0,
                                        s.tZ)("use", {
                                            xlinkHref: (0,
                                            P.iU)(f[h].icon)
                                        })
                                    }), (0,
                                    s.BX)("div", {
                                        className: "mr-2 flex flex-col items-start",
                                        children: [(0,
                                        s.tZ)("span", {
                                            className: "text-2xs lg:text-[11px]",
                                            children: i("giveaways")
                                        }), (0,
                                        s.tZ)("span", {
                                            className: (0,
                                            P.cn)("hidden leading-none transition duration-300 lg:block", f[h].color),
                                            children: (0,
                                            s.tZ)(oa, {
                                                text: f[h].text
                                            })
                                        })]
                                    }), (0,
                                    s.tZ)("div", {
                                        className: "h-auto w-auto rounded-md bg-navy-400 p-2 transition group-hover:bg-navy-300",
                                        children: (0,
                                        s.tZ)("svg", {
                                            className: "hidden h-2.5 w-2.5 text-white transition duration-300 md:block",
                                            css: {
                                                transform: r ? "rotateX(180deg)" : ""
                                            },
                                            children: (0,
                                            s.tZ)("use", {
                                                xlinkHref: (0,
                                                P.iU)("arrow-down")
                                            })
                                        })
                                    })]
                                }), t ? (0,
                                s.tZ)(la, {}) : null, (0,
                                s.BX)("div", {
                                    className: "flex items-center rounded-xl bg-[#23232D] px-2 lg:px-3",
                                    children: [(0,
                                    s.tZ)(ia, {
                                        icon: (0,
                                        s.tZ)("use", {
                                            xlinkHref: (0,
                                            P.iU)("case-battle-swords")
                                        }),
                                        label: i("caseBattle"),
                                        url: "/case-battle",
                                        className: "text-lightgreen-200 md:flex"
                                    }), (0,
                                    s.tZ)(ia, {
                                        icon: (0,
                                        s.tZ)("use", {
                                            xlinkHref: (0,
                                            P.iU)("contracts-note")
                                        }),
                                        label: i("contracts"),
                                        url: "/panel/profil/contracts",
                                        className: "text-teal-200 md:flex"
                                    }), (0,
                                    s.tZ)(ia, {
                                        icon: (0,
                                        s.tZ)("use", {
                                            xlinkHref: (0,
                                            P.iU)("upgrader-new")
                                        }),
                                        label: i("upgrader"),
                                        url: "/skins/upgrader",
                                        className: "text-[#6680FF] md:flex"
                                    }), (0,
                                    s.tZ)(ia, {
                                        icon: (0,
                                        s.tZ)("use", {
                                            xlinkHref: (0,
                                            P.iU)("new-skin-changer")
                                        }),
                                        label: i("skinChanger"),
                                        url: "/skin-changer",
                                        className: "text-[#CE82E3] md:flex"
                                    })]
                                })]
                            })
                        })
                    }), (0,
                    s.tZ)("div", {
                        className: "w-full bg-navy-800",
                        children: (0,
                        s.tZ)(z.M, {
                            initial: !1,
                            children: r ? (0,
                            s.tZ)(k.E.div, {
                                className: "relative mx-auto max-w-screen-xxl overflow-hidden md:px-5",
                                variants: {
                                    closed: {
                                        opacity: 0,
                                        height: "0rem"
                                    },
                                    open: {
                                        opacity: 1,
                                        height: "9rem"
                                    }
                                },
                                initial: "closed",
                                animate: "open",
                                exit: "closed",
                                transition: {
                                    duration: .5
                                },
                                children: (0,
                                s.tZ)(y.Suspense, {
                                    fallback: (0,
                                    s.tZ)(ea.V, {}),
                                    children: (0,
                                    s.tZ)(aa, {})
                                })
                            }, "giveawaysBar") : null
                        })
                    })]
                })
            }
              , la = function() {
                var e = (0,
                j.$G)("header").t;
                return (0,
                s.tZ)("div", {
                    className: "relative left-2 -ml-2 flex items-center rounded-xl bg-gradient-to-r from-[#41331E] to-transparent px-2 lg:left-3 lg:-ml-3 lg:px-3",
                    children: (0,
                    s.tZ)(ia, {
                        icon: (0,
                        s.tZ)("use", {
                            xlinkHref: (0,
                            P.iU)("planets-of-skins-event")
                        }),
                        label: e("navItemEventName"),
                        url: "/planets-of-skins-event",
                        className: "text-gold-400 md:flex lg:pl-3 lg:pr-6"
                    })
                })
            }
              , ca = function() {
                var e = Rn().handleOpenModal
                  , t = (0,
                j.$G)("header").t;
                return (0,
                s.tZ)(Qr, {
                    as: "div",
                    className: "relative",
                    children: function(n) {
                        var o = n.open
                          , r = n.close;
                        return (0,
                        s.BX)(s.HY, {
                            children: [(0,
                            s.tZ)("div", {
                                className: "flex h-full items-center justify-start rounded-l-xl bg-gradient-to-r from-gold-300/20 to-transparent p-1",
                                children: (0,
                                s.BX)(Qr.Button, {
                                    className: "button group relative h-full overflow-hidden p-0 outline-none ring-0 focus:outline-none focus:ring-0",
                                    children: [(0,
                                    s.tZ)("div", {
                                        className: "circle absolute -left-2 hidden h-19 w-19 items-center justify-center rounded-full bg-gold-400/10 lg:flex",
                                        css: {
                                            WebkitMaskImage: "radial-gradient(transparent 30%, black 31%)"
                                        }
                                    }), (0,
                                    s.tZ)("svg", {
                                        className: (0,
                                        P.cn)("duration-250 ml-5 mr-4 hidden h-5 w-5 text-gold-300 transition ease-out lg:block", o && "text-white"),
                                        children: (0,
                                        s.tZ)("use", {
                                            xlinkHref: (0,
                                            P.iU)("hand-with-cash")
                                        })
                                    }), (0,
                                    s.tZ)("span", {
                                        className: (0,
                                        P.cn)("duration-250 ml-4 mr-2 text-2xs uppercase text-gold-300 transition ease-out lg:ml-0 lg:text-[11px]", o && "text-white"),
                                        children: t("getFree")
                                    }), (0,
                                    s.tZ)("div", {
                                        className: "duration-250 h-auto w-auto rounded-md bg-gold-900 p-2 transition ease-out group-hover:bg-gold-850",
                                        children: (0,
                                        s.tZ)("svg", {
                                            className: "duration-250 hidden h-2.5 w-2.5 text-gold-400 transition ease-out md:block",
                                            css: {
                                                transform: o ? "rotateX(180deg)" : ""
                                            },
                                            children: (0,
                                            s.tZ)("use", {
                                                xlinkHref: (0,
                                                P.iU)("arrow-down")
                                            })
                                        })
                                    })]
                                })
                            }), (0,
                            s.tZ)(ee.u, {
                                enter: "transition duration-250 ease-out",
                                enterFrom: "transform opacity-0 scale-[.98]",
                                enterTo: "transform opacity-100",
                                leave: "transition duration-250 ease-out",
                                leaveFrom: "transform opacity-100",
                                leaveTo: "transform opacity-0 scale-[.98]",
                                className: "relative z-50 mt-3 origin-top md:origin-top-left",
                                children: (0,
                                s.BX)(Qr.Panel, {
                                    className: "absolute flex rounded-b-2xl border-t border-t-navy-500 bg-navy-700 outline-none [box-shadow:_13px_13px_30px_rgb(0,0,0,0.9)]",
                                    children: [(0,
                                    s.BX)("div", {
                                        className: "flex gap-2 p-2 lg:gap-4 lg:p-4",
                                        children: [(0,
                                        s.BX)(X, {
                                            href: "/panel/profil/free-gold",
                                            className: "group relative flex h-full cursor-pointer items-center overflow-hidden rounded-bl-lg border border-gold-850 bg-gradient-to-r from-gold-850 to-gold-1000 bg-[length:100%__100%] py-4 pl-4 pr-24 transition-all duration-200 ease-out hover:bg-[length:200%_200%] lg:py-5 lg:pl-5",
                                            children: [(0,
                                            s.tZ)("svg", {
                                                className: "mr-2 h-5 w-5 text-white",
                                                children: (0,
                                                s.tZ)("use", {
                                                    xlinkHref: (0,
                                                    P.iU)("gold")
                                                })
                                            }), (0,
                                            s.tZ)("span", {
                                                className: "whitespace-nowrap text-2xs font-bold uppercase text-white lg:text-[11px]",
                                                children: t("freeGold")
                                            }), (0,
                                            s.tZ)("img", {
                                                src: (0,
                                                P.$o)("grandpa-gold.png"),
                                                alt: "",
                                                className: "absolute right-0 h-14 lg:h-16"
                                            }), (0,
                                            s.tZ)("svg", {
                                                className: "absolute -left-5 top-0.5 h-20 w-20 text-gold/10  transition-transform duration-200 ease-out group-hover:scale-150 group-hover:duration-[400ms] group-hover:ease-[cubic-bezier(0.03,0.69,0.15,0.86)]",
                                                children: (0,
                                                s.tZ)("use", {
                                                    xlinkHref: (0,
                                                    P.iU)("gold")
                                                })
                                            })]
                                        }), (0,
                                        s.BX)(X, {
                                            href: "/daily-case",
                                            className: "group relative flex cursor-pointer items-center overflow-hidden rounded-br-lg border border-[#4C288C] bg-gradient-to-r from-[#4C288C] to-[#321B5E] bg-[length:100%_100%] py-4 pl-4 pr-24\ntransition-all duration-200 ease-out hover:bg-[length:200%_200%] lg:py-5 lg:pl-5",
                                            children: [(0,
                                            s.tZ)("svg", {
                                                className: "mr-2 h-5 w-5 text-white",
                                                children: (0,
                                                s.tZ)("use", {
                                                    xlinkHref: (0,
                                                    P.iU)("box")
                                                })
                                            }), (0,
                                            s.tZ)("span", {
                                                className: "whitespace-nowrap text-2xs font-bold uppercase text-white lg:text-[11px]",
                                                children: t("dailyCase")
                                            }), (0,
                                            s.tZ)("img", {
                                                src: (0,
                                                P.$o)("grandpa-free.png"),
                                                alt: "",
                                                className: "absolute right-0 h-14 lg:h-16"
                                            }), (0,
                                            s.tZ)("svg", {
                                                className: "absolute -left-5 top-0.5 h-20 w-20 rotate-[15deg] text-[#C2A6FF]/10 transition-transform duration-200 ease-out group-hover:scale-150 group-hover:duration-[400ms] group-hover:ease-[cubic-bezier(0.03,0.69,0.15,0.86)]",
                                                children: (0,
                                                s.tZ)("use", {
                                                    xlinkHref: (0,
                                                    P.iU)("box")
                                                })
                                            })]
                                        })]
                                    }), (0,
                                    s.tZ)("div", {
                                        className: "relative flex gap-2 rounded-b-2xl bg-navy-600 p-2 lg:gap-4 lg:p-4",
                                        children: (0,
                                        s.tZ)("button", {
                                            onClick: function() {
                                                e(),
                                                r()
                                            },
                                            className: "group relative w-full cursor-pointer overflow-hidden rounded-b-lg border  border-[#5FCC7E] bg-lightgreen-750",
                                            children: (0,
                                            s.BX)("div", {
                                                className: "flex items-center justify-center bg-gradient-to-l from-[#5FCC7E]/10 to-[#20462B]/0 bg-[length:100%_100%] px-8 py-4 text-[#92FFB1] transition-all duration-200 ease-out hover:bg-[length:200%_200%] lg:px-10 lg:py-5",
                                                children: [(0,
                                                s.tZ)("svg", {
                                                    className: "mr-2 h-5 w-5",
                                                    children: (0,
                                                    s.tZ)("use", {
                                                        xlinkHref: (0,
                                                        P.iU)("keyboard")
                                                    })
                                                }), (0,
                                                s.tZ)("span", {
                                                    className: "whitespace-nowrap text-2xs font-bold uppercase lg:text-[11px]",
                                                    children: t("useCode")
                                                }), (0,
                                                s.tZ)("svg", {
                                                    className: "absolute -left-2 top-0.5 h-18 w-18 rotate-[15deg] text-green/10 transition-transform duration-200 ease-out group-hover:scale-150 group-hover:duration-[400ms] group-hover:ease-[cubic-bezier(0.03,0.69,0.15,0.86)]",
                                                    children: (0,
                                                    s.tZ)("use", {
                                                        xlinkHref: (0,
                                                        P.iU)("keyboard")
                                                    })
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })]
                        })
                    }
                })
            }
              , ua = function() {
                var e = (0,
                S.b)()
                  , t = e.loadingStatus
                  , n = e.isLoggedIn
                  , o = e.user
                  , r = e.language
                  , a = e.currency
                  , i = e.isEventActive
                  , l = e.bonus;
                return (0,
                s.tZ)(y.Suspense, {
                    fallback: (0,
                    s.tZ)(xr, {}),
                    children: (0,
                    s.BX)(ze, {
                        children: [window.__layout.featureFlags.steamDownBanner && (0,
                        s.tZ)(Rr, {}), (0,
                        s.tZ)(Ce, {}), (0,
                        s.tZ)("header", {
                            className: "bg-navy-800",
                            children: (0,
                            s.BX)(Dn, {
                                children: [(0,
                                s.tZ)(zr, {}), (0,
                                s.BX)("div", {
                                    className: "flex h-[4.125rem] items-center bg-navy-700 md:mb-3 md:h-[5.625rem]",
                                    children: [(0,
                                    s.tZ)(X, {
                                        href: (0,
                                        P.HQ)("base"),
                                        className: "mb-1 ml-3 w-26 flex-shrink-0 xs:w-32 sm:w-40 md:ml-5",
                                        children: (0,
                                        s.tZ)("img", {
                                            src: (0,
                                            P.$o)("kd-logo.svg"),
                                            alt: "KeyDrop",
                                            className: "block"
                                        })
                                    }), (0,
                                    s.tZ)(Dr, {
                                        className: "order-2 hidden md:order-1 md:block"
                                    }), "success" === t && (0,
                                    s.tZ)(Te, {
                                        className: "order-1 ml-5 md:order-2 md:mr-3"
                                    }), (0,
                                    s.tZ)(Un, {
                                        bonus: l,
                                        user: o,
                                        loadingFinished: "success" === t,
                                        loggedIn: n,
                                        className: "order-5 ml-auto",
                                        language: r,
                                        currency: a
                                    })]
                                }), (0,
                                s.tZ)(it, {}), (0,
                                s.tZ)(sa, {
                                    isEventActive: i
                                })]
                            })
                        })]
                    })
                })
            };
            function da(e) {
                return ha(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }
            function pa(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }
            function fa(e) {
                var t;
                return null == (t = (ha(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }
            function ha(e) {
                return e instanceof Node || e instanceof pa(e).Node
            }
            function ma(e) {
                return e instanceof Element || e instanceof pa(e).Element
            }
            function ya(e) {
                return e instanceof HTMLElement || e instanceof pa(e).HTMLElement
            }
            function ga(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof pa(e).ShadowRoot)
            }
            function wa(e) {
                const {overflow: t, overflowX: n, overflowY: o, display: r} = xa(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r)
            }
            function va(e) {
                return ["table", "td", "th"].includes(da(e))
            }
            function ba(e) {
                const t = ka()
                  , n = xa(e);
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((e=>(n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e=>(n.contain || "").includes(e)))
            }
            function ka() {
                return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
            }
            function za(e) {
                return ["html", "body", "#document"].includes(da(e))
            }
            function xa(e) {
                return pa(e).getComputedStyle(e)
            }
            function ja(e) {
                return ma(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }
            function Ca(e) {
                if ("html" === da(e))
                    return e;
                const t = e.assignedSlot || e.parentNode || ga(e) && e.host || fa(e);
                return ga(t) ? t.host : t
            }
            function Sa(e) {
                const t = Ca(e);
                return za(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ya(t) && wa(t) ? t : Sa(t)
            }
            function Ea(e, t, n) {
                var o;
                void 0 === t && (t = []),
                void 0 === n && (n = !0);
                const r = Sa(e)
                  , a = r === (null == (o = e.ownerDocument) ? void 0 : o.body)
                  , i = pa(r);
                return a ? t.concat(i, i.visualViewport || [], wa(r) ? r : [], i.frameElement && n ? Ea(i.frameElement) : []) : t.concat(r, Ea(r, [], n))
            }
            function Na(e, t) {
                if (!e || !t)
                    return !1;
                const n = t.getRootNode && t.getRootNode();
                if (e.contains(t))
                    return !0;
                if (n && ga(n)) {
                    let n = t;
                    for (; n; ) {
                        if (e === n)
                            return !0;
                        n = n.parentNode || n.host
                    }
                }
                return !1
            }
            const Oa = Math.min
              , Ta = Math.max
              , Za = Math.round
              , Ia = Math.floor
              , Pa = e=>({
                x: e,
                y: e
            })
              , La = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            }
              , Aa = {
                start: "end",
                end: "start"
            };
            function Da(e, t, n) {
                return Ta(e, Oa(t, n))
            }
            function Ra(e, t) {
                return "function" == typeof e ? e(t) : e
            }
            function Ba(e) {
                return e.split("-")[0]
            }
            function Ma(e) {
                return e.split("-")[1]
            }
            function Fa(e) {
                return "x" === e ? "y" : "x"
            }
            function _a(e) {
                return "y" === e ? "height" : "width"
            }
            function Ua(e) {
                return ["top", "bottom"].includes(Ba(e)) ? "y" : "x"
            }
            function Ha(e) {
                return Fa(Ua(e))
            }
            function Ga(e) {
                return e.replace(/start|end/g, (e=>Aa[e]))
            }
            function $a(e) {
                return e.replace(/left|right|bottom|top/g, (e=>La[e]))
            }
            function Ya(e) {
                return {
                    ...e,
                    top: e.y,
                    left: e.x,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                }
            }
            function Va(e, t, n) {
                let {reference: o, floating: r} = e;
                const a = Ua(t)
                  , i = Ha(t)
                  , s = _a(i)
                  , l = Ba(t)
                  , c = "y" === a
                  , u = o.x + o.width / 2 - r.width / 2
                  , d = o.y + o.height / 2 - r.height / 2
                  , p = o[s] / 2 - r[s] / 2;
                let f;
                switch (l) {
                case "top":
                    f = {
                        x: u,
                        y: o.y - r.height
                    };
                    break;
                case "bottom":
                    f = {
                        x: u,
                        y: o.y + o.height
                    };
                    break;
                case "right":
                    f = {
                        x: o.x + o.width,
                        y: d
                    };
                    break;
                case "left":
                    f = {
                        x: o.x - r.width,
                        y: d
                    };
                    break;
                default:
                    f = {
                        x: o.x,
                        y: o.y
                    }
                }
                switch (Ma(t)) {
                case "start":
                    f[i] -= p * (n && c ? -1 : 1);
                    break;
                case "end":
                    f[i] += p * (n && c ? -1 : 1)
                }
                return f
            }
            async function Xa(e, t) {
                var n;
                void 0 === t && (t = {});
                const {x: o, y: r, platform: a, rects: i, elements: s, strategy: l} = e
                  , {boundary: c="clippingAncestors", rootBoundary: u="viewport", elementContext: d="floating", altBoundary: p=!1, padding: f=0} = Ra(t, e)
                  , h = function(e) {
                    return "number" != typeof e ? function(e) {
                        return {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            ...e
                        }
                    }(e) : {
                        top: e,
                        right: e,
                        bottom: e,
                        left: e
                    }
                }(f)
                  , m = s[p ? "floating" === d ? "reference" : "floating" : d]
                  , y = Ya(await a.getClippingRect({
                    element: null == (n = await (null == a.isElement ? void 0 : a.isElement(m))) || n ? m : m.contextElement || await (null == a.getDocumentElement ? void 0 : a.getDocumentElement(s.floating)),
                    boundary: c,
                    rootBoundary: u,
                    strategy: l
                }))
                  , g = "floating" === d ? {
                    ...i.floating,
                    x: o,
                    y: r
                } : i.reference
                  , w = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(s.floating))
                  , v = await (null == a.isElement ? void 0 : a.isElement(w)) && await (null == a.getScale ? void 0 : a.getScale(w)) || {
                    x: 1,
                    y: 1
                }
                  , b = Ya(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: g,
                    offsetParent: w,
                    strategy: l
                }) : g);
                return {
                    top: (y.top - b.top + h.top) / v.y,
                    bottom: (b.bottom - y.bottom + h.bottom) / v.y,
                    left: (y.left - b.left + h.left) / v.x,
                    right: (b.right - y.right + h.right) / v.x
                }
            }
            const Wa = function(e) {
                return void 0 === e && (e = {}),
                {
                    name: "flip",
                    options: e,
                    async fn(t) {
                        var n, o;
                        const {placement: r, middlewareData: a, rects: i, initialPlacement: s, platform: l, elements: c} = t
                          , {mainAxis: u=!0, crossAxis: d=!0, fallbackPlacements: p, fallbackStrategy: f="bestFit", fallbackAxisSideDirection: h="none", flipAlignment: m=!0, ...y} = Ra(e, t);
                        if (null != (n = a.arrow) && n.alignmentOffset)
                            return {};
                        const g = Ba(r)
                          , w = Ba(s) === s
                          , v = await (null == l.isRTL ? void 0 : l.isRTL(c.floating))
                          , b = p || (w || !m ? [$a(s)] : function(e) {
                            const t = $a(e);
                            return [Ga(e), t, Ga(t)]
                        }(s));
                        p || "none" === h || b.push(...function(e, t, n, o) {
                            const r = Ma(e);
                            let a = function(e, t, n) {
                                const o = ["left", "right"]
                                  , r = ["right", "left"]
                                  , a = ["top", "bottom"]
                                  , i = ["bottom", "top"];
                                switch (e) {
                                case "top":
                                case "bottom":
                                    return n ? t ? r : o : t ? o : r;
                                case "left":
                                case "right":
                                    return t ? a : i;
                                default:
                                    return []
                                }
                            }(Ba(e), "start" === n, o);
                            return r && (a = a.map((e=>e + "-" + r)),
                            t && (a = a.concat(a.map(Ga)))),
                            a
                        }(s, m, h, v));
                        const k = [s, ...b]
                          , z = await Xa(t, y)
                          , x = [];
                        let j = (null == (o = a.flip) ? void 0 : o.overflows) || [];
                        if (u && x.push(z[g]),
                        d) {
                            const e = function(e, t, n) {
                                void 0 === n && (n = !1);
                                const o = Ma(e)
                                  , r = Ha(e)
                                  , a = _a(r);
                                let i = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                                return t.reference[a] > t.floating[a] && (i = $a(i)),
                                [i, $a(i)]
                            }(r, i, v);
                            x.push(z[e[0]], z[e[1]])
                        }
                        if (j = [...j, {
                            placement: r,
                            overflows: x
                        }],
                        !x.every((e=>e <= 0))) {
                            var C, S;
                            const e = ((null == (C = a.flip) ? void 0 : C.index) || 0) + 1
                              , t = k[e];
                            if (t)
                                return {
                                    data: {
                                        index: e,
                                        overflows: j
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                            let n = null == (S = j.filter((e=>e.overflows[0] <= 0)).sort(((e,t)=>e.overflows[1] - t.overflows[1]))[0]) ? void 0 : S.placement;
                            if (!n)
                                switch (f) {
                                case "bestFit":
                                    {
                                        var E;
                                        const e = null == (E = j.map((e=>[e.placement, e.overflows.filter((e=>e > 0)).reduce(((e,t)=>e + t), 0)])).sort(((e,t)=>e[1] - t[1]))[0]) ? void 0 : E[0];
                                        e && (n = e);
                                        break
                                    }
                                case "initialPlacement":
                                    n = s
                                }
                            if (r !== n)
                                return {
                                    reset: {
                                        placement: n
                                    }
                                }
                        }
                        return {}
                    }
                }
            }
              , qa = function(e) {
                return void 0 === e && (e = 0),
                {
                    name: "offset",
                    options: e,
                    async fn(t) {
                        const {x: n, y: o} = t
                          , r = await async function(e, t) {
                            const {placement: n, platform: o, elements: r} = e
                              , a = await (null == o.isRTL ? void 0 : o.isRTL(r.floating))
                              , i = Ba(n)
                              , s = Ma(n)
                              , l = "y" === Ua(n)
                              , c = ["left", "top"].includes(i) ? -1 : 1
                              , u = a && l ? -1 : 1
                              , d = Ra(t, e);
                            let {mainAxis: p, crossAxis: f, alignmentAxis: h} = "number" == typeof d ? {
                                mainAxis: d,
                                crossAxis: 0,
                                alignmentAxis: null
                            } : {
                                mainAxis: 0,
                                crossAxis: 0,
                                alignmentAxis: null,
                                ...d
                            };
                            return s && "number" == typeof h && (f = "end" === s ? -1 * h : h),
                            l ? {
                                x: f * u,
                                y: p * c
                            } : {
                                x: p * c,
                                y: f * u
                            }
                        }(t, e);
                        return {
                            x: n + r.x,
                            y: o + r.y,
                            data: r
                        }
                    }
                }
            };
            function Ka(e) {
                const t = xa(e);
                let n = parseFloat(t.width) || 0
                  , o = parseFloat(t.height) || 0;
                const r = ya(e)
                  , a = r ? e.offsetWidth : n
                  , i = r ? e.offsetHeight : o
                  , s = Za(n) !== a || Za(o) !== i;
                return s && (n = a,
                o = i),
                {
                    width: n,
                    height: o,
                    $: s
                }
            }
            function Ja(e) {
                return ma(e) ? e : e.contextElement
            }
            function Qa(e) {
                const t = Ja(e);
                if (!ya(t))
                    return Pa(1);
                const n = t.getBoundingClientRect()
                  , {width: o, height: r, $: a} = Ka(t);
                let i = (a ? Za(n.width) : n.width) / o
                  , s = (a ? Za(n.height) : n.height) / r;
                return i && Number.isFinite(i) || (i = 1),
                s && Number.isFinite(s) || (s = 1),
                {
                    x: i,
                    y: s
                }
            }
            const ei = Pa(0);
            function ti(e) {
                const t = pa(e);
                return ka() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : ei
            }
            function ni(e, t, n, o) {
                void 0 === t && (t = !1),
                void 0 === n && (n = !1);
                const r = e.getBoundingClientRect()
                  , a = Ja(e);
                let i = Pa(1);
                t && (o ? ma(o) && (i = Qa(o)) : i = Qa(e));
                const s = function(e, t, n) {
                    return void 0 === t && (t = !1),
                    !(!n || t && n !== pa(e)) && t
                }(a, n, o) ? ti(a) : Pa(0);
                let l = (r.left + s.x) / i.x
                  , c = (r.top + s.y) / i.y
                  , u = r.width / i.x
                  , d = r.height / i.y;
                if (a) {
                    const e = pa(a)
                      , t = o && ma(o) ? pa(o) : o;
                    let n = e.frameElement;
                    for (; n && o && t !== e; ) {
                        const e = Qa(n)
                          , t = n.getBoundingClientRect()
                          , o = xa(n)
                          , r = t.left + (n.clientLeft + parseFloat(o.paddingLeft)) * e.x
                          , a = t.top + (n.clientTop + parseFloat(o.paddingTop)) * e.y;
                        l *= e.x,
                        c *= e.y,
                        u *= e.x,
                        d *= e.y,
                        l += r,
                        c += a,
                        n = pa(n).frameElement
                    }
                }
                return Ya({
                    width: u,
                    height: d,
                    x: l,
                    y: c
                })
            }
            function oi(e) {
                return ni(fa(e)).left + ja(e).scrollLeft
            }
            function ri(e, t, n) {
                let o;
                if ("viewport" === t)
                    o = function(e, t) {
                        const n = pa(e)
                          , o = fa(e)
                          , r = n.visualViewport;
                        let a = o.clientWidth
                          , i = o.clientHeight
                          , s = 0
                          , l = 0;
                        if (r) {
                            a = r.width,
                            i = r.height;
                            const e = ka();
                            (!e || e && "fixed" === t) && (s = r.offsetLeft,
                            l = r.offsetTop)
                        }
                        return {
                            width: a,
                            height: i,
                            x: s,
                            y: l
                        }
                    }(e, n);
                else if ("document" === t)
                    o = function(e) {
                        const t = fa(e)
                          , n = ja(e)
                          , o = e.ownerDocument.body
                          , r = Ta(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth)
                          , a = Ta(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
                        let i = -n.scrollLeft + oi(e);
                        const s = -n.scrollTop;
                        return "rtl" === xa(o).direction && (i += Ta(t.clientWidth, o.clientWidth) - r),
                        {
                            width: r,
                            height: a,
                            x: i,
                            y: s
                        }
                    }(fa(e));
                else if (ma(t))
                    o = function(e, t) {
                        const n = ni(e, !0, "fixed" === t)
                          , o = n.top + e.clientTop
                          , r = n.left + e.clientLeft
                          , a = ya(e) ? Qa(e) : Pa(1);
                        return {
                            width: e.clientWidth * a.x,
                            height: e.clientHeight * a.y,
                            x: r * a.x,
                            y: o * a.y
                        }
                    }(t, n);
                else {
                    const n = ti(e);
                    o = {
                        ...t,
                        x: t.x - n.x,
                        y: t.y - n.y
                    }
                }
                return Ya(o)
            }
            function ai(e, t) {
                const n = Ca(e);
                return !(n === t || !ma(n) || za(n)) && ("fixed" === xa(n).position || ai(n, t))
            }
            function ii(e, t, n) {
                const o = ya(t)
                  , r = fa(t)
                  , a = "fixed" === n
                  , i = ni(e, !0, a, t);
                let s = {
                    scrollLeft: 0,
                    scrollTop: 0
                };
                const l = Pa(0);
                if (o || !o && !a)
                    if (("body" !== da(t) || wa(r)) && (s = ja(t)),
                    o) {
                        const e = ni(t, !0, a, t);
                        l.x = e.x + t.clientLeft,
                        l.y = e.y + t.clientTop
                    } else
                        r && (l.x = oi(r));
                return {
                    x: i.left + s.scrollLeft - l.x,
                    y: i.top + s.scrollTop - l.y,
                    width: i.width,
                    height: i.height
                }
            }
            function si(e, t) {
                return ya(e) && "fixed" !== xa(e).position ? t ? t(e) : e.offsetParent : null
            }
            function li(e, t) {
                const n = pa(e);
                if (!ya(e))
                    return n;
                let o = si(e, t);
                for (; o && va(o) && "static" === xa(o).position; )
                    o = si(o, t);
                return o && ("html" === da(o) || "body" === da(o) && "static" === xa(o).position && !ba(o)) ? n : o || function(e) {
                    let t = Ca(e);
                    for (; ya(t) && !za(t); ) {
                        if (ba(t))
                            return t;
                        t = Ca(t)
                    }
                    return null
                }(e) || n
            }
            const ci = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                    let {rect: t, offsetParent: n, strategy: o} = e;
                    const r = ya(n)
                      , a = fa(n);
                    if (n === a)
                        return t;
                    let i = {
                        scrollLeft: 0,
                        scrollTop: 0
                    }
                      , s = Pa(1);
                    const l = Pa(0);
                    if ((r || !r && "fixed" !== o) && (("body" !== da(n) || wa(a)) && (i = ja(n)),
                    ya(n))) {
                        const e = ni(n);
                        s = Qa(n),
                        l.x = e.x + n.clientLeft,
                        l.y = e.y + n.clientTop
                    }
                    return {
                        width: t.width * s.x,
                        height: t.height * s.y,
                        x: t.x * s.x - i.scrollLeft * s.x + l.x,
                        y: t.y * s.y - i.scrollTop * s.y + l.y
                    }
                },
                getDocumentElement: fa,
                getClippingRect: function(e) {
                    let {element: t, boundary: n, rootBoundary: o, strategy: r} = e;
                    const a = [..."clippingAncestors" === n ? function(e, t) {
                        const n = t.get(e);
                        if (n)
                            return n;
                        let o = Ea(e, [], !1).filter((e=>ma(e) && "body" !== da(e)))
                          , r = null;
                        const a = "fixed" === xa(e).position;
                        let i = a ? Ca(e) : e;
                        for (; ma(i) && !za(i); ) {
                            const t = xa(i)
                              , n = ba(i);
                            n || "fixed" !== t.position || (r = null),
                            (a ? !n && !r : !n && "static" === t.position && r && ["absolute", "fixed"].includes(r.position) || wa(i) && !n && ai(e, i)) ? o = o.filter((e=>e !== i)) : r = t,
                            i = Ca(i)
                        }
                        return t.set(e, o),
                        o
                    }(t, this._c) : [].concat(n), o]
                      , i = a[0]
                      , s = a.reduce(((e,n)=>{
                        const o = ri(t, n, r);
                        return e.top = Ta(o.top, e.top),
                        e.right = Oa(o.right, e.right),
                        e.bottom = Oa(o.bottom, e.bottom),
                        e.left = Ta(o.left, e.left),
                        e
                    }
                    ), ri(t, i, r));
                    return {
                        width: s.right - s.left,
                        height: s.bottom - s.top,
                        x: s.left,
                        y: s.top
                    }
                },
                getOffsetParent: li,
                getElementRects: async function(e) {
                    let {reference: t, floating: n, strategy: o} = e;
                    const r = this.getOffsetParent || li
                      , a = this.getDimensions;
                    return {
                        reference: ii(t, await r(n), o),
                        floating: {
                            x: 0,
                            y: 0,
                            ...await a(n)
                        }
                    }
                },
                getClientRects: function(e) {
                    return Array.from(e.getClientRects())
                },
                getDimensions: function(e) {
                    return Ka(e)
                },
                getScale: Qa,
                isElement: ma,
                isRTL: function(e) {
                    return "rtl" === xa(e).direction
                }
            };
            function ui(e, t, n, o) {
                void 0 === o && (o = {});
                const {ancestorScroll: r=!0, ancestorResize: a=!0, elementResize: i="function" == typeof ResizeObserver, layoutShift: s="function" == typeof IntersectionObserver, animationFrame: l=!1} = o
                  , c = Ja(e)
                  , u = r || a ? [...c ? Ea(c) : [], ...Ea(t)] : [];
                u.forEach((e=>{
                    r && e.addEventListener("scroll", n, {
                        passive: !0
                    }),
                    a && e.addEventListener("resize", n)
                }
                ));
                const d = c && s ? function(e, t) {
                    let n, o = null;
                    const r = fa(e);
                    function a() {
                        clearTimeout(n),
                        o && o.disconnect(),
                        o = null
                    }
                    return function i(s, l) {
                        void 0 === s && (s = !1),
                        void 0 === l && (l = 1),
                        a();
                        const {left: c, top: u, width: d, height: p} = e.getBoundingClientRect();
                        if (s || t(),
                        !d || !p)
                            return;
                        const f = {
                            rootMargin: -Ia(u) + "px " + -Ia(r.clientWidth - (c + d)) + "px " + -Ia(r.clientHeight - (u + p)) + "px " + -Ia(c) + "px",
                            threshold: Ta(0, Oa(1, l)) || 1
                        };
                        let h = !0;
                        function m(e) {
                            const t = e[0].intersectionRatio;
                            if (t !== l) {
                                if (!h)
                                    return i();
                                t ? i(!1, t) : n = setTimeout((()=>{
                                    i(!1, 1e-7)
                                }
                                ), 100)
                            }
                            h = !1
                        }
                        try {
                            o = new IntersectionObserver(m,{
                                ...f,
                                root: r.ownerDocument
                            })
                        } catch (e) {
                            o = new IntersectionObserver(m,f)
                        }
                        o.observe(e)
                    }(!0),
                    a
                }(c, n) : null;
                let p, f = -1, h = null;
                i && (h = new ResizeObserver((e=>{
                    let[o] = e;
                    o && o.target === c && h && (h.unobserve(t),
                    cancelAnimationFrame(f),
                    f = requestAnimationFrame((()=>{
                        h && h.observe(t)
                    }
                    ))),
                    n()
                }
                )),
                c && !l && h.observe(c),
                h.observe(t));
                let m = l ? ni(e) : null;
                return l && function t() {
                    const o = ni(e);
                    !m || o.x === m.x && o.y === m.y && o.width === m.width && o.height === m.height || n(),
                    m = o,
                    p = requestAnimationFrame(t)
                }(),
                n(),
                ()=>{
                    u.forEach((e=>{
                        r && e.removeEventListener("scroll", n),
                        a && e.removeEventListener("resize", n)
                    }
                    )),
                    d && d(),
                    h && h.disconnect(),
                    h = null,
                    l && cancelAnimationFrame(p)
                }
            }
            var di = "undefined" != typeof document ? y.useLayoutEffect : y.useEffect;
            function pi(e, t) {
                if (e === t)
                    return !0;
                if (typeof e != typeof t)
                    return !1;
                if ("function" == typeof e && e.toString() === t.toString())
                    return !0;
                let n, o, r;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if (n = e.length,
                        n != t.length)
                            return !1;
                        for (o = n; 0 != o--; )
                            if (!pi(e[o], t[o]))
                                return !1;
                        return !0
                    }
                    if (r = Object.keys(e),
                    n = r.length,
                    n !== Object.keys(t).length)
                        return !1;
                    for (o = n; 0 != o--; )
                        if (!{}.hasOwnProperty.call(t, r[o]))
                            return !1;
                    for (o = n; 0 != o--; ) {
                        const n = r[o];
                        if (!("_owner" === n && e.$$typeof || pi(e[n], t[n])))
                            return !1
                    }
                    return !0
                }
                return e != e && t != t
            }
            function fi(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }
            function hi(e, t) {
                const n = fi(e);
                return Math.round(t * n) / n
            }
            function mi(e) {
                const t = y.useRef(e);
                return di((()=>{
                    t.current = e
                }
                )),
                t
            }
            var yi = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"].join(",")
              , gi = "undefined" == typeof Element
              , wi = gi ? function() {}
            : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
              , vi = !gi && Element.prototype.getRootNode ? function(e) {
                var t;
                return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
            }
            : function(e) {
                return null == e ? void 0 : e.ownerDocument
            }
              , bi = function e(t, n) {
                var o;
                void 0 === n && (n = !0);
                var r = null == t || null === (o = t.getAttribute) || void 0 === o ? void 0 : o.call(t, "inert");
                return "" === r || "true" === r || n && t && e(t.parentNode)
            }
              , ki = function e(t, n, o) {
                for (var r = [], a = Array.from(t); a.length; ) {
                    var i = a.shift();
                    if (!bi(i, !1))
                        if ("SLOT" === i.tagName) {
                            var s = i.assignedElements()
                              , l = e(s.length ? s : i.children, !0, o);
                            o.flatten ? r.push.apply(r, l) : r.push({
                                scopeParent: i,
                                candidates: l
                            })
                        } else {
                            wi.call(i, yi) && o.filter(i) && (n || !t.includes(i)) && r.push(i);
                            var c = i.shadowRoot || "function" == typeof o.getShadowRoot && o.getShadowRoot(i)
                              , u = !bi(c, !1) && (!o.shadowRootFilter || o.shadowRootFilter(i));
                            if (c && u) {
                                var d = e(!0 === c ? i.children : c.children, !0, o);
                                o.flatten ? r.push.apply(r, d) : r.push({
                                    scopeParent: i,
                                    candidates: d
                                })
                            } else
                                a.unshift.apply(a, i.children)
                        }
                }
                return r
            }
              , zi = function(e) {
                return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
            }
              , xi = function(e) {
                if (!e)
                    throw new Error("No node provided");
                return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || function(e) {
                    var t, n = null == e || null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
                    return "" === n || "true" === n
                }(e)) && !zi(e) ? 0 : e.tabIndex
            }
              , ji = function(e, t) {
                return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
            }
              , Ci = function(e) {
                return "INPUT" === e.tagName
            }
              , Si = function(e) {
                var t = e.getBoundingClientRect()
                  , n = t.width
                  , o = t.height;
                return 0 === n && 0 === o
            }
              , Ei = function(e, t) {
                return !(t.disabled || bi(t) || function(e) {
                    return Ci(e) && "hidden" === e.type
                }(t) || function(e, t) {
                    var n = t.displayCheck
                      , o = t.getShadowRoot;
                    if ("hidden" === getComputedStyle(e).visibility)
                        return !0;
                    var r = wi.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                    if (wi.call(r, "details:not([open]) *"))
                        return !0;
                    if (n && "full" !== n && "legacy-full" !== n) {
                        if ("non-zero-area" === n)
                            return Si(e)
                    } else {
                        if ("function" == typeof o) {
                            for (var a = e; e; ) {
                                var i = e.parentElement
                                  , s = vi(e);
                                if (i && !i.shadowRoot && !0 === o(i))
                                    return Si(e);
                                e = e.assignedSlot ? e.assignedSlot : i || s === e.ownerDocument ? i : s.host
                            }
                            e = a
                        }
                        if (function(e) {
                            var t, n, o, r, a = e && vi(e), i = null === (t = a) || void 0 === t ? void 0 : t.host, s = !1;
                            if (a && a !== e)
                                for (s = !!(null !== (n = i) && void 0 !== n && null !== (o = n.ownerDocument) && void 0 !== o && o.contains(i) || null != e && null !== (r = e.ownerDocument) && void 0 !== r && r.contains(e)); !s && i; ) {
                                    var l, c, u;
                                    s = !(null === (c = i = null === (l = a = vi(i)) || void 0 === l ? void 0 : l.host) || void 0 === c || null === (u = c.ownerDocument) || void 0 === u || !u.contains(i))
                                }
                            return s
                        }(e))
                            return !e.getClientRects().length;
                        if ("legacy-full" !== n)
                            return !0
                    }
                    return !1
                }(t, e) || function(e) {
                    return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some((function(e) {
                        return "SUMMARY" === e.tagName
                    }
                    ))
                }(t) || function(e) {
                    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                        for (var t = e.parentElement; t; ) {
                            if ("FIELDSET" === t.tagName && t.disabled) {
                                for (var n = 0; n < t.children.length; n++) {
                                    var o = t.children.item(n);
                                    if ("LEGEND" === o.tagName)
                                        return !!wi.call(t, "fieldset[disabled] *") || !o.contains(e)
                                }
                                return !0
                            }
                            t = t.parentElement
                        }
                    return !1
                }(t))
            }
              , Ni = function(e, t) {
                return !(function(e) {
                    return function(e) {
                        return Ci(e) && "radio" === e.type
                    }(e) && !function(e) {
                        if (!e.name)
                            return !0;
                        var t, n = e.form || vi(e), o = function(e) {
                            return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
                        };
                        if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape)
                            t = o(window.CSS.escape(e.name));
                        else
                            try {
                                t = o(e.name)
                            } catch (e) {
                                return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message),
                                !1
                            }
                        var r = function(e, t) {
                            for (var n = 0; n < e.length; n++)
                                if (e[n].checked && e[n].form === t)
                                    return e[n]
                        }(t, e.form);
                        return !r || r === e
                    }(e)
                }(t) || xi(t) < 0 || !Ei(e, t))
            }
              , Oi = function(e) {
                var t = parseInt(e.getAttribute("tabindex"), 10);
                return !!(isNaN(t) || t >= 0)
            }
              , Ti = function e(t) {
                var n = []
                  , o = [];
                return t.forEach((function(t, r) {
                    var a = !!t.scopeParent
                      , i = a ? t.scopeParent : t
                      , s = function(e, t) {
                        var n = xi(e);
                        return n < 0 && t && !zi(e) ? 0 : n
                    }(i, a)
                      , l = a ? e(t.candidates) : i;
                    0 === s ? a ? n.push.apply(n, l) : n.push(i) : o.push({
                        documentOrder: r,
                        tabIndex: s,
                        item: t,
                        isScope: a,
                        content: l
                    })
                }
                )),
                o.sort(ji).reduce((function(e, t) {
                    return t.isScope ? e.push.apply(e, t.content) : e.push(t.content),
                    e
                }
                ), []).concat(n)
            }
              , Zi = function(e, t) {
                var n;
                return n = (t = t || {}).getShadowRoot ? ki([e], t.includeContainer, {
                    filter: Ni.bind(null, t),
                    flatten: !1,
                    getShadowRoot: t.getShadowRoot,
                    shadowRootFilter: Oi
                }) : function(e, t, n) {
                    if (bi(e))
                        return [];
                    var o = Array.prototype.slice.apply(e.querySelectorAll(yi));
                    return t && wi.call(e, yi) && o.unshift(e),
                    o.filter(n)
                }(e, t.includeContainer, Ni.bind(null, t)),
                Ti(n)
            };
            var Ii = "undefined" != typeof document ? y.useLayoutEffect : y.useEffect;
            function Pi() {
                return (Pi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n)
                            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }
                ).apply(this, arguments)
            }
            let Li = !1
              , Ai = 0;
            const Di = ()=>"floating-ui-" + Ai++
              , Ri = g["useId".toString()] || function() {
                const [e,t] = y.useState((()=>Li ? Di() : void 0));
                return Ii((()=>{
                    null == e && t(Di())
                }
                ), []),
                y.useEffect((()=>{
                    Li || (Li = !0)
                }
                ), []),
                e
            }
            ;
            const Bi = y.createContext(null);
            function Mi(e) {
                return "data-floating-ui-" + e
            }
            function Fi(e) {
                const t = (0,
                y.useRef)(e);
                return Ii((()=>{
                    t.current = e
                }
                )),
                t
            }
            const _i = ()=>({
                getShadowRoot: !0,
                displayCheck: "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
            });
            function Ui(e, t) {
                const n = Zi(e, _i());
                "prev" === t && n.reverse();
                const o = n.indexOf(function(e) {
                    let t = e.activeElement;
                    for (; null != (null == (n = t) || null == (o = n.shadowRoot) ? void 0 : o.activeElement); ) {
                        var n, o;
                        t = t.shadowRoot.activeElement
                    }
                    return t
                }((null == (r = e) ? void 0 : r.ownerDocument) || document));
                var r;
                return n.slice(o + 1)[0]
            }
            function Hi(e, t) {
                const n = t || e.currentTarget
                  , o = e.relatedTarget;
                return !o || !Na(n, o)
            }
            function Gi(e) {
                Zi(e, _i()).forEach((e=>{
                    e.dataset.tabindex = e.getAttribute("tabindex") || "",
                    e.setAttribute("tabindex", "-1")
                }
                ))
            }
            function $i(e) {
                e.querySelectorAll("[data-tabindex]").forEach((e=>{
                    const t = e.dataset.tabindex;
                    delete e.dataset.tabindex,
                    t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex")
                }
                ))
            }
            const Yi = {
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "fixed",
                whiteSpace: "nowrap",
                width: "1px",
                top: 0,
                left: 0
            };
            function Vi(e) {
                "Tab" === e.key && (e.target,
                clearTimeout(void 0))
            }
            const Xi = y.forwardRef((function(e, t) {
                const [n,o] = y.useState();
                Ii((()=>(/apple/i.test(navigator.vendor) && o("button"),
                document.addEventListener("keydown", Vi),
                ()=>{
                    document.removeEventListener("keydown", Vi)
                }
                )), []);
                const r = {
                    ref: t,
                    tabIndex: 0,
                    role: n,
                    "aria-hidden": !n || void 0,
                    [Mi("focus-guard")]: "",
                    style: Yi
                };
                return y.createElement("span", Pi({}, e, r))
            }
            ))
              , Wi = y.createContext(null);
            function qi(e) {
                let {children: t, id: n, root: o=null, preserveTabOrder: r=!0} = e;
                const a = function(e) {
                    let {id: t, root: n} = void 0 === e ? {} : e;
                    const [o,r] = y.useState(null)
                      , a = Ri()
                      , i = Ki()
                      , s = y.useMemo((()=>({
                        id: t,
                        root: n,
                        portalContext: i,
                        uniqueId: a
                    })), [t, n, i, a])
                      , l = y.useRef();
                    return Ii((()=>()=>{
                        null == o || o.remove()
                    }
                    ), [o, s]),
                    Ii((()=>{
                        if (l.current === s)
                            return;
                        l.current = s;
                        const {id: e, root: t, portalContext: n, uniqueId: o} = s
                          , a = e ? document.getElementById(e) : null
                          , i = Mi("portal");
                        if (a) {
                            const e = document.createElement("div");
                            e.id = o,
                            e.setAttribute(i, ""),
                            a.appendChild(e),
                            r(e)
                        } else {
                            let a = t || (null == n ? void 0 : n.portalNode);
                            a && !ma(a) && (a = a.current),
                            a = a || document.body;
                            let s = null;
                            e && (s = document.createElement("div"),
                            s.id = e,
                            a.appendChild(s));
                            const l = document.createElement("div");
                            l.id = o,
                            l.setAttribute(i, ""),
                            a = s || a,
                            a.appendChild(l),
                            r(l)
                        }
                    }
                    ), [s]),
                    o
                }({
                    id: n,
                    root: o
                })
                  , [i,s] = y.useState(null)
                  , l = y.useRef(null)
                  , c = y.useRef(null)
                  , u = y.useRef(null)
                  , d = y.useRef(null)
                  , p = !!i && !i.modal && i.open && r && !(!o && !a);
                return y.useEffect((()=>{
                    if (a && r && (null == i || !i.modal))
                        return a.addEventListener("focusin", e, !0),
                        a.addEventListener("focusout", e, !0),
                        ()=>{
                            a.removeEventListener("focusin", e, !0),
                            a.removeEventListener("focusout", e, !0)
                        }
                        ;
                    function e(e) {
                        a && Hi(e) && ("focusin" === e.type ? $i : Gi)(a)
                    }
                }
                ), [a, r, null == i ? void 0 : i.modal]),
                y.createElement(Wi.Provider, {
                    value: y.useMemo((()=>({
                        preserveTabOrder: r,
                        beforeOutsideRef: l,
                        afterOutsideRef: c,
                        beforeInsideRef: u,
                        afterInsideRef: d,
                        portalNode: a,
                        setFocusManagerState: s
                    })), [r, a])
                }, p && a && y.createElement(Xi, {
                    "data-type": "outside",
                    ref: l,
                    onFocus: e=>{
                        if (Hi(e, a)) {
                            var t;
                            null == (t = u.current) || t.focus()
                        } else {
                            const e = Ui(document.body, "prev") || (null == i ? void 0 : i.refs.domReference.current);
                            null == e || e.focus()
                        }
                    }
                }), p && a && y.createElement("span", {
                    "aria-owns": a.id,
                    style: Yi
                }), a && (0,
                w.createPortal)(t, a), p && a && y.createElement(Xi, {
                    "data-type": "outside",
                    ref: c,
                    onFocus: e=>{
                        if (Hi(e, a)) {
                            var t;
                            null == (t = d.current) || t.focus()
                        } else {
                            const t = Ui(document.body, "next") || (null == i ? void 0 : i.refs.domReference.current);
                            null == t || t.focus(),
                            (null == i ? void 0 : i.closeOnFocusOut) && (null == i || i.onOpenChange(!1, e.nativeEvent))
                        }
                    }
                }))
            }
            const Ki = ()=>y.useContext(Wi)
              , Ji = g["useInsertionEffect".toString()] || (e=>e());
            function Qi(e) {
                const t = y.useRef((()=>{}
                ));
                return Ji((()=>{
                    t.current = e
                }
                )),
                y.useCallback((function() {
                    for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                        n[o] = arguments[o];
                    return null == t.current ? void 0 : t.current(...n)
                }
                ), [])
            }
            function es(e) {
                return null != e && null != e.clientX
            }
            function ts(e) {
                var t;
                void 0 === e && (e = {});
                const {open: n=!1, onOpenChange: o, nodeId: r} = e
                  , [a,i] = y.useState(null)
                  , s = (null == (t = e.elements) ? void 0 : t.reference) || a
                  , l = function(e) {
                    void 0 === e && (e = {});
                    const {placement: t="bottom", strategy: n="absolute", middleware: o=[], platform: r, elements: {reference: a, floating: i}={}, transform: s=!0, whileElementsMounted: l, open: c} = e
                      , [u,d] = y.useState({
                        x: 0,
                        y: 0,
                        strategy: n,
                        placement: t,
                        middlewareData: {},
                        isPositioned: !1
                    })
                      , [p,f] = y.useState(o);
                    pi(p, o) || f(o);
                    const [h,m] = y.useState(null)
                      , [g,v] = y.useState(null)
                      , b = y.useCallback((e=>{
                        e != j.current && (j.current = e,
                        m(e))
                    }
                    ), [m])
                      , k = y.useCallback((e=>{
                        e !== C.current && (C.current = e,
                        v(e))
                    }
                    ), [v])
                      , z = a || h
                      , x = i || g
                      , j = y.useRef(null)
                      , C = y.useRef(null)
                      , S = y.useRef(u)
                      , E = mi(l)
                      , N = mi(r)
                      , O = y.useCallback((()=>{
                        if (!j.current || !C.current)
                            return;
                        const e = {
                            placement: t,
                            strategy: n,
                            middleware: p
                        };
                        N.current && (e.platform = N.current),
                        ((e,t,n)=>{
                            const o = new Map
                              , r = {
                                platform: ci,
                                ...n
                            }
                              , a = {
                                ...r.platform,
                                _c: o
                            };
                            return (async(e,t,n)=>{
                                const {placement: o="bottom", strategy: r="absolute", middleware: a=[], platform: i} = n
                                  , s = a.filter(Boolean)
                                  , l = await (null == i.isRTL ? void 0 : i.isRTL(t));
                                let c = await i.getElementRects({
                                    reference: e,
                                    floating: t,
                                    strategy: r
                                })
                                  , {x: u, y: d} = Va(c, o, l)
                                  , p = o
                                  , f = {}
                                  , h = 0;
                                for (let n = 0; n < s.length; n++) {
                                    const {name: a, fn: m} = s[n]
                                      , {x: y, y: g, data: w, reset: v} = await m({
                                        x: u,
                                        y: d,
                                        initialPlacement: o,
                                        placement: p,
                                        strategy: r,
                                        middlewareData: f,
                                        rects: c,
                                        platform: i,
                                        elements: {
                                            reference: e,
                                            floating: t
                                        }
                                    });
                                    u = null != y ? y : u,
                                    d = null != g ? g : d,
                                    f = {
                                        ...f,
                                        [a]: {
                                            ...f[a],
                                            ...w
                                        }
                                    },
                                    v && h <= 50 && (h++,
                                    "object" == typeof v && (v.placement && (p = v.placement),
                                    v.rects && (c = !0 === v.rects ? await i.getElementRects({
                                        reference: e,
                                        floating: t,
                                        strategy: r
                                    }) : v.rects),
                                    ({x: u, y: d} = Va(c, p, l))),
                                    n = -1)
                                }
                                return {
                                    x: u,
                                    y: d,
                                    placement: p,
                                    strategy: r,
                                    middlewareData: f
                                }
                            }
                            )(e, t, {
                                ...r,
                                platform: a
                            })
                        }
                        )(j.current, C.current, e).then((e=>{
                            const t = {
                                ...e,
                                isPositioned: !0
                            };
                            T.current && !pi(S.current, t) && (S.current = t,
                            w.flushSync((()=>{
                                d(t)
                            }
                            )))
                        }
                        ))
                    }
                    ), [p, t, n, N]);
                    di((()=>{
                        !1 === c && S.current.isPositioned && (S.current.isPositioned = !1,
                        d((e=>({
                            ...e,
                            isPositioned: !1
                        }))))
                    }
                    ), [c]);
                    const T = y.useRef(!1);
                    di((()=>(T.current = !0,
                    ()=>{
                        T.current = !1
                    }
                    )), []),
                    di((()=>{
                        if (z && (j.current = z),
                        x && (C.current = x),
                        z && x) {
                            if (E.current)
                                return E.current(z, x, O);
                            O()
                        }
                    }
                    ), [z, x, O, E]);
                    const Z = y.useMemo((()=>({
                        reference: j,
                        floating: C,
                        setReference: b,
                        setFloating: k
                    })), [b, k])
                      , I = y.useMemo((()=>({
                        reference: z,
                        floating: x
                    })), [z, x])
                      , P = y.useMemo((()=>{
                        const e = {
                            position: n,
                            left: 0,
                            top: 0
                        };
                        if (!I.floating)
                            return e;
                        const t = hi(I.floating, u.x)
                          , o = hi(I.floating, u.y);
                        return s ? {
                            ...e,
                            transform: "translate(" + t + "px, " + o + "px)",
                            ...fi(I.floating) >= 1.5 && {
                                willChange: "transform"
                            }
                        } : {
                            position: n,
                            left: t,
                            top: o
                        }
                    }
                    ), [n, s, I.floating, u.x, u.y]);
                    return y.useMemo((()=>({
                        ...u,
                        update: O,
                        refs: Z,
                        elements: I,
                        floatingStyles: P
                    })), [u, O, Z, I, P])
                }(e)
                  , c = y.useContext(Bi)
                  , u = Qi(((e,t)=>{
                    e && (p.current.openEvent = t),
                    null == o || o(e, t)
                }
                ))
                  , d = y.useRef(null)
                  , p = y.useRef({})
                  , f = y.useState((()=>function() {
                    const e = new Map;
                    return {
                        emit(t, n) {
                            var o;
                            null == (o = e.get(t)) || o.forEach((e=>e(n)))
                        },
                        on(t, n) {
                            e.set(t, [...e.get(t) || [], n])
                        },
                        off(t, n) {
                            var o;
                            e.set(t, (null == (o = e.get(t)) ? void 0 : o.filter((e=>e !== n))) || [])
                        }
                    }
                }()))[0]
                  , h = Ri()
                  , m = y.useCallback((e=>{
                    const t = ma(e) ? {
                        getBoundingClientRect: ()=>e.getBoundingClientRect(),
                        contextElement: e
                    } : e;
                    l.refs.setReference(t)
                }
                ), [l.refs])
                  , g = y.useCallback((e=>{
                    (ma(e) || null === e) && (d.current = e,
                    i(e)),
                    (ma(l.refs.reference.current) || null === l.refs.reference.current || null !== e && !ma(e)) && l.refs.setReference(e)
                }
                ), [l.refs])
                  , v = y.useMemo((()=>({
                    ...l.refs,
                    setReference: g,
                    setPositionReference: m,
                    domReference: d
                })), [l.refs, g, m])
                  , b = y.useMemo((()=>({
                    ...l.elements,
                    domReference: s
                })), [l.elements, s])
                  , k = y.useMemo((()=>({
                    ...l,
                    refs: v,
                    elements: b,
                    dataRef: p,
                    nodeId: r,
                    floatingId: h,
                    events: f,
                    open: n,
                    onOpenChange: u
                })), [l, r, h, f, n, u, v, b]);
                return Ii((()=>{
                    const e = null == c ? void 0 : c.nodesRef.current.find((e=>e.id === r));
                    e && (e.context = k)
                }
                )),
                y.useMemo((()=>({
                    ...l,
                    context: k,
                    refs: v,
                    elements: b
                })), [l, v, b, k])
            }
            function ns(e, t, n) {
                const o = new Map;
                return {
                    ..."floating" === n && {
                        tabIndex: -1
                    },
                    ...e,
                    ...t.map((e=>e ? e[n] : null)).concat(e).reduce(((e,t)=>t ? (Object.entries(t).forEach((t=>{
                        let[n,r] = t;
                        var a;
                        0 === n.indexOf("on") ? (o.has(n) || o.set(n, []),
                        "function" == typeof r && (null == (a = o.get(n)) || a.push(r),
                        e[n] = function() {
                            for (var e, t = arguments.length, r = new Array(t), a = 0; a < t; a++)
                                r[a] = arguments[a];
                            return null == (e = o.get(n)) ? void 0 : e.map((e=>e(...r))).find((e=>void 0 !== e))
                        }
                        )) : e[n] = r
                    }
                    )),
                    e) : e), {})
                }
            }
            const os = e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ((e,t)=>(t ? "-" : "") + e.toLowerCase()));
            function rs(e, t) {
                return "function" == typeof e ? e(t) : e
            }
            function as(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function is(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? as(Object(n), !0).forEach((function(t) {
                        (0,
                        R.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : as(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var ss = {
                position: "fixed",
                left: 0,
                bottom: 0
            }
              , ls = function() {
                var e, t = (0,
                y.useState)(!1), n = (0,
                b.Z)(t, 2), o = n[0], r = n[1], a = (0,
                y.useState)(null), i = (0,
                b.Z)(a, 2), l = i[0], c = i[1], u = N(P.BC.js.md), d = N(P.BC.js.finePointer), p = ts({
                    open: o,
                    onOpenChange: r,
                    whileElementsMounted: ui,
                    strategy: "fixed",
                    transform: !1,
                    middleware: [qa(25), Wa(), (e = {
                        padding: 8
                    },
                    void 0 === e && (e = {}),
                    {
                        name: "shift",
                        options: e,
                        async fn(t) {
                            const {x: n, y: o, placement: r} = t
                              , {mainAxis: a=!0, crossAxis: i=!1, limiter: s={
                                fn: e=>{
                                    let {x: t, y: n} = e;
                                    return {
                                        x: t,
                                        y: n
                                    }
                                }
                            }, ...l} = Ra(e, t)
                              , c = {
                                x: n,
                                y: o
                            }
                              , u = await Xa(t, l)
                              , d = Ua(Ba(r))
                              , p = Fa(d);
                            let f = c[p]
                              , h = c[d];
                            if (a) {
                                const e = "y" === p ? "bottom" : "right";
                                f = Da(f + u["y" === p ? "top" : "left"], f, f - u[e])
                            }
                            if (i) {
                                const e = "y" === d ? "bottom" : "right";
                                h = Da(h + u["y" === d ? "top" : "left"], h, h - u[e])
                            }
                            const m = s.fn({
                                ...t,
                                [p]: f,
                                [d]: h
                            });
                            return {
                                ...m,
                                data: {
                                    x: m.x - n,
                                    y: m.y - o
                                }
                            }
                        }
                    })],
                    placement: "right-start"
                }), f = p.refs, h = p.floatingStyles, m = p.context, g = function(e) {
                    void 0 === e && (e = []);
                    const t = e
                      , n = y.useCallback((t=>ns(t, e, "reference")), t)
                      , o = y.useCallback((t=>ns(t, e, "floating")), t)
                      , r = y.useCallback((t=>ns(t, e, "item")), e.map((e=>null == e ? void 0 : e.item)));
                    return y.useMemo((()=>({
                        getReferenceProps: n,
                        getFloatingProps: o,
                        getItemProps: r
                    })), [n, o, r])
                }([function(e, t) {
                    void 0 === t && (t = {});
                    const {open: n, refs: o, dataRef: r, elements: {floating: a}} = e
                      , {enabled: i=!0, axis: s="both", x: l=null, y: c=null} = t
                      , u = y.useRef(!1)
                      , d = y.useRef(null)
                      , [p,f] = y.useState()
                      , [h,m] = y.useState([])
                      , g = Qi(((e,t)=>{
                        u.current || r.current.openEvent && !es(r.current.openEvent) || o.setPositionReference(function(e, t) {
                            let n = null
                              , o = null
                              , r = !1;
                            return {
                                contextElement: e.current || void 0,
                                getBoundingClientRect() {
                                    var a, i;
                                    const s = (null == (a = e.current) ? void 0 : a.getBoundingClientRect()) || {
                                        width: 0,
                                        height: 0,
                                        x: 0,
                                        y: 0
                                    }
                                      , l = "x" === t.axis || "both" === t.axis
                                      , c = "y" === t.axis || "both" === t.axis
                                      , u = ["mouseenter", "mousemove"].includes((null == (i = t.dataRef.current.openEvent) ? void 0 : i.type) || "") && "touch" !== t.pointerType;
                                    let d = s.width
                                      , p = s.height
                                      , f = s.x
                                      , h = s.y;
                                    return null == n && t.x && l && (n = s.x - t.x),
                                    null == o && t.y && c && (o = s.y - t.y),
                                    f -= n || 0,
                                    h -= o || 0,
                                    d = 0,
                                    p = 0,
                                    !r || u ? (d = "y" === t.axis ? s.width : 0,
                                    p = "x" === t.axis ? s.height : 0,
                                    f = l && null != t.x ? t.x : f,
                                    h = c && null != t.y ? t.y : h) : r && !u && (p = "x" === t.axis ? s.height : p,
                                    d = "y" === t.axis ? s.width : d),
                                    r = !0,
                                    {
                                        width: d,
                                        height: p,
                                        x: f,
                                        y: h,
                                        top: h,
                                        right: f + d,
                                        bottom: h + p,
                                        left: f
                                    }
                                }
                            }
                        }(o.domReference, {
                            x: e,
                            y: t,
                            axis: s,
                            dataRef: r,
                            pointerType: p
                        }))
                    }
                    ))
                      , w = Qi((e=>{
                        null == l && null == c && (n ? d.current || m([]) : g(e.clientX, e.clientY))
                    }
                    ))
                      , v = function(e, t) {
                        const n = ["mouse", "pen"];
                        return n.push("", void 0),
                        n.includes(e)
                    }(p) ? a : n
                      , b = y.useCallback((()=>{
                        if (!v || !i || null != l || null != c)
                            return;
                        const e = pa(o.floating.current);
                        function t(n) {
                            const r = function(e) {
                                return "composedPath"in e ? e.composedPath()[0] : e.target
                            }(n);
                            Na(o.floating.current, r) ? (e.removeEventListener("mousemove", t),
                            d.current = null) : g(n.clientX, n.clientY)
                        }
                        if (!r.current.openEvent || es(r.current.openEvent)) {
                            e.addEventListener("mousemove", t);
                            const n = ()=>{
                                e.removeEventListener("mousemove", t),
                                d.current = null
                            }
                            ;
                            return d.current = n,
                            n
                        }
                        o.setPositionReference(o.domReference.current)
                    }
                    ), [r, i, v, o, g, l, c]);
                    return y.useEffect((()=>b()), [b, h]),
                    y.useEffect((()=>{
                        i && !a && (u.current = !1)
                    }
                    ), [i, a]),
                    y.useEffect((()=>{
                        !i && n && (u.current = !0)
                    }
                    ), [i, n]),
                    Ii((()=>{
                        !i || null == l && null == c || (u.current = !1,
                        g(l, c))
                    }
                    ), [i, l, c, g]),
                    y.useMemo((()=>{
                        if (!i)
                            return {};
                        function e(e) {
                            let {pointerType: t} = e;
                            f(t)
                        }
                        return {
                            reference: {
                                onPointerDown: e,
                                onPointerEnter: e,
                                onMouseMove: w,
                                onMouseEnter: w
                            }
                        }
                    }
                    ), [i, w])
                }(m)]).getFloatingProps, w = function(e, t) {
                    void 0 === t && (t = {});
                    const {initial: n={
                        opacity: 0
                    }, open: o, close: r, common: a, duration: i=250} = t
                      , s = e.placement
                      , l = s.split("-")[0]
                      , c = y.useMemo((()=>({
                        side: l,
                        placement: s
                    })), [l, s])
                      , u = "number" == typeof i
                      , d = (u ? i : i.open) || 0
                      , p = (u ? i : i.close) || 0
                      , [f,h] = y.useState((()=>({
                        ...rs(a, c),
                        ...rs(n, c)
                    })))
                      , {isMounted: m, status: g} = function(e, t) {
                        void 0 === t && (t = {});
                        const {open: n, elements: {floating: o}} = e
                          , {duration: r=250} = t
                          , a = ("number" == typeof r ? r : r.close) || 0
                          , [i,s] = y.useState(!1)
                          , [l,c] = y.useState("unmounted")
                          , u = function(e, t) {
                            const [n,o] = y.useState(e);
                            return e && !n && o(!0),
                            y.useEffect((()=>{
                                if (!e) {
                                    const e = setTimeout((()=>o(!1)), t);
                                    return ()=>clearTimeout(e)
                                }
                            }
                            ), [e, t]),
                            n
                        }(n, a);
                        return Ii((()=>{
                            i && !u && c("unmounted")
                        }
                        ), [i, u]),
                        Ii((()=>{
                            if (o) {
                                if (n) {
                                    c("initial");
                                    const e = requestAnimationFrame((()=>{
                                        c("open")
                                    }
                                    ));
                                    return ()=>{
                                        cancelAnimationFrame(e)
                                    }
                                }
                                s(!0),
                                c("close")
                            }
                        }
                        ), [n, o]),
                        {
                            isMounted: u,
                            status: l
                        }
                    }(e, {
                        duration: i
                    })
                      , w = Fi(n)
                      , v = Fi(o)
                      , b = Fi(r)
                      , k = Fi(a);
                    return Ii((()=>{
                        const e = rs(w.current, c)
                          , t = rs(b.current, c)
                          , n = rs(k.current, c)
                          , o = rs(v.current, c) || Object.keys(e).reduce(((e,t)=>(e[t] = "",
                        e)), {});
                        if ("initial" === g && h((t=>({
                            transitionProperty: t.transitionProperty,
                            ...n,
                            ...e
                        }))),
                        "open" === g && h({
                            transitionProperty: Object.keys(o).map(os).join(","),
                            transitionDuration: d + "ms",
                            ...n,
                            ...o
                        }),
                        "close" === g) {
                            const o = t || e;
                            h({
                                transitionProperty: Object.keys(o).map(os).join(","),
                                transitionDuration: p + "ms",
                                ...n,
                                ...o
                            })
                        }
                    }
                    ), [p, b, w, v, k, d, g, c]),
                    {
                        isMounted: m,
                        styles: f
                    }
                }(m, {
                    duration: 200,
                    initial: {
                        opacity: 0,
                        transform: "scale(0.75)"
                    },
                    close: {
                        opacity: 0,
                        transform: "scale(0.75)"
                    }
                }), v = w.isMounted, k = w.styles, z = function(e, t) {
                    var n = e.type
                      , o = e.title
                      , a = e.message
                      , i = e.duration
                      , s = void 0 === i ? 6e3 : i;
                    c({
                        type: n,
                        title: o,
                        message: a,
                        duration: s
                    }),
                    r(!0),
                    t && setTimeout((function() {
                        t()
                    }
                    ), s + 200)
                };
                (0,
                y.useEffect)((function() {
                    if (window.__layout.toast = z,
                    u && d) {
                        var e = function(e) {
                            var t = e.clientX
                              , n = e.clientY;
                            setTimeout((function() {
                                f.setReference({
                                    getBoundingClientRect: function() {
                                        return {
                                            width: 0,
                                            height: 0,
                                            x: t,
                                            y: n,
                                            left: t,
                                            right: t,
                                            top: n,
                                            bottom: n
                                        }
                                    }
                                })
                            }
                            ))
                        };
                        return window.addEventListener("mousemove", e),
                        function() {
                            window.removeEventListener("mousemove", e)
                        }
                    }
                }
                ), [f]),
                (0,
                y.useEffect)((function() {
                    if (o) {
                        var e = setTimeout((function() {
                            r(!1)
                        }
                        ), l.duration);
                        return function() {
                            return clearTimeout(e)
                        }
                    }
                }
                ), [o]);
                var x = {
                    error: "toast-error",
                    info: "toast-info",
                    success: "toast-success",
                    warning: "toast-warning"
                }[null == l ? void 0 : l.type];
                return (0,
                s.tZ)(s.HY, {
                    children: v && (0,
                    s.tZ)(qi, {
                        children: (0,
                        s.BX)("div", is(is({
                            ref: f.setFloating,
                            style: is(is({}, u && d ? h : ss), k)
                        }, g()), {}, {
                            className: (0,
                            P.cn)("z-[9999] flex w-screen origin-bottom overflow-hidden rounded border-y-2 border-l-2 border-r-4 bg-gradient-to-r py-6 pl-4 pr-14 md:w-auto md:max-w-lg md:origin-top-left", {
                                error: "border-y-red-500/20 border-l-red-500/20 border-r-red-500 from-[#46212A] via-[#261B21] to-[#18181D]",
                                info: "border-y-blue/20 border-l-blue/20 border-r-blue from-[#1D244A] via-[#1C1C2A] to-[#18181D]",
                                success: "border-y-lightgreen-200/20 border-l-lightgreen-200/20 border-r-lightgreen-200 from-[#16402D] via-[#1A2422] to-[#18181D]",
                                warning: "border-y-gold-400/20 border-l-gold-400/20 border-r-gold-400 from-[#463C2F] via-[#282323] to-[#18181D]"
                            }[l.type]),
                            children: [(0,
                            s.tZ)("svg", {
                                className: (0,
                                P.cn)("absolute -bottom-8 right-10 h-24 w-24 rotate-[30deg] opacity-10", {
                                    error: "text-red-500",
                                    info: "text-blue",
                                    success: "text-lightgreen-200",
                                    warning: "text-gold-400"
                                }[l.type]),
                                children: (0,
                                s.tZ)("use", {
                                    xlinkHref: (0,
                                    P.iU)(x)
                                })
                            }), (0,
                            s.tZ)("svg", {
                                className: (0,
                                P.cn)("mr-2 h-11 w-11 flex-shrink-0", {
                                    error: "text-red-500",
                                    info: "text-blue",
                                    success: "text-lightgreen-200",
                                    warning: "text-gold-400"
                                }[l.type]),
                                children: (0,
                                s.tZ)("use", {
                                    xlinkHref: (0,
                                    P.iU)(x)
                                })
                            }), (0,
                            s.BX)("div", {
                                className: "flex flex-col",
                                children: [(0,
                                s.tZ)("span", {
                                    "data-testid": $.LABEL_MESSAGE_TOAST_TITLE,
                                    className: (0,
                                    P.cn)("text-xl font-bold leading-tight", {
                                        error: "text-red-500",
                                        info: "text-blue",
                                        success: "text-lightgreen-200",
                                        warning: "text-gold-400"
                                    }[l.type]),
                                    children: l.title
                                }), (0,
                                s.tZ)("p", {
                                    "data-testid": $.LABEL_MESSAGE_TOAST_DESCRIPTION,
                                    className: "text-sm leading-6 text-navy-100",
                                    children: l.message
                                })]
                            })]
                        }))
                    })
                })
            }
              , cs = n(293)
              , us = n(694)
              , ds = JSON.parse('{"games":"Games","csgoSkins":"CS:GO Skins","goldArea":"GOLD AREA","weaponType":"Weapon type","all":"All","findCase":"Find your case","search":"Search","priceRange":"Price range","balanceToOpen":"Balance to open","reset":"Reset","timeLimited":"Time limited","timeFinished":"Time has run out","end":"Finish","days":"days","new":"NEW","somethingWentWrong":"Something went wrong","unexpectedError":"An unexpected error has occurred.","searchResults":"Search results","gold":"GOLD","noSearchResults":"No search results","noResultsDescription":"No result","tryAgain":"Play again","resetFilters":"Reset Filters","notEnoughMoney":"Not enough funds","topUp":"Top up your account","topUpLabel":"ADD FUNDS","seeAllInfluCases":"SEE ALL YOUTUBER CASES","legacyQuestionMark":"In Legacy, you will find various cases that appeared in past events of our site. Cases are available for a limited time. What are you waiting for? Open them!","topBattlesList.title":"Best battles","topBattlesList.seeAllBattles":"See all fights","topBattlesList.createBattle":"Create battle","topBattlesList.joinBattle":"Join battle","topBattlesList.cost":"Cost","topBattlesList.reward":"PRIZE","topBattlesList.or":"Or"}')
              , ps = n.t(ds, 2)
              , fs = JSON.parse('{"1":"1","codzienna-skrzynia":"Daily Case","skrzynie":"Cases","konkursy":"Giveaways","doładuj":"Deposit","moje-konto":"My account","doładuj-konto":"ADD FUNDS","kontrakty":"Contracts","kod-promocyjny":"Promo Code","program-partnerski":"Affiliate system","pomoc":"Support","otwartych-skrzyń":"Opened cases","użytkowników":"Users","online":"Online","sprzedaję":"I\'m selling","spróbuj-ponownie":"Play again","sortuj-po":"Sort by:","cena-rosnąco":"Price: Low to high","cena-malejąco":"Price: High to low","dni":"days","godzin":"hours","cena":"Price","złote-kody":"GOLDEN CODE","wszystkie":"All","aktywne":"Active","zakończone":"Finished","codzienna-skrzynka":"Daily Case","kliknij-tutaj":"Click Here","twój-nick-jest-poprawny":"Your nickname is correct.","twój-avatar-jest-poprawny":"Your avatar is correct.","otwórz-skrzynię":"Open the case","otrzymasz":"You will receive","użyj-kodu":"Use code","sprzedane":"SOLD","czy-na-pewno-chcesz-odebrać-klucz":"Are you sure you want to collect the key?","nie-możesz-odebrać-tej-gry":"You cannot redeem this game.","skiny":"SKINS","wybierz-pakiet":"Choose a bundle","wymień":"Exchange","wartość":"Value","status":"Status","data":"Date","poziom":"Level","zmień":"Change","wypłać":"Withdraw","kod-promocyjny-został-zapisany":"The Promo Code has been saved.","historia-konta":"Account history","załącznik":"Attachment","kliknij":"Click","wyślij":"Send","brak-danych-skontaktuj-się-z-administracją":"No data available. Please contact our Support.","darmowe-złoto":"Free gold","złoty-kod":"Golden Code","twój-kod-promocyjny":"Your Promo Code","wypłać-zgromadzone-środki":"Withdraw the collected funds","level":"LEVEL","zarabiaj-prawdziwe-pieniądze-na-key-drop":"Earn real money on Key-Drop!","im-więcej-osób-usłyszy-od-ciebie-o-key-drop-tym-więcej-możesz-zarobić":"The more people hear about Key-Drop from you, the more money you earn.","jak-mogę-zarobić-za-pomocą-programu-partnerskiego-key-drop":"How can I earn money with the Key-Drop partnership program?","promuj-swój-kod-promocyjny-oraz-link-partnerski-aby-otrzymywać-bonus-za-każdego-użytkownika-którego-przyprowadzisz-do-nas":"Promote your Promo Code and partnership link to receive a bonus for every user you bring to Key-Drop!","wysłałem-link-polecający-kod-promocyjny-znajomym-jednak-nie-otrzymałem-żadnych-pieniędzy":"I sent a referral link / Promo Code to my friends, but I didn\'t receive any money.","widocznie-twoi-znajomi-skorzystali-już-wcześniej-z-innego-kodu":"Apparently your friends have already used another code before.","wypłata":"Withdrawal","wprowadź-kwotę-jaką-chcesz-wypłacić":"Enter the amount you wish to withdraw","wprowadź-kwotę-do-wypłaty":"Enter the amount for withdrawal","wyszukaj":"Search","games":"Games","gold-area":"Gold Area","portfel":"WALLET","doładuj-portfel":"Add funds","kontraktów":"Contracts","min-temu":"minutes ago","sek-temu":"seconds ago","wgraj-poprawny-plik":"Upload the correct file","dołącz-teraz":"Join now","dołączyłeś-już-do-tego-konkursu":"You\'ve already joined this giveaway!","wybierz-minium-5-gier":"Choose at least 5 games","coś-poszło-nie-tak":"Something went wrong","wprowadzony-kod-jest-błędny":"The code you entered is invalid","plik-został-załadowany-poprawnie":"File has been successfully uploaded","brak-środków-na-koncie-doładuj-konto":"No funds, add funds to the account.","błąd":"Error","sukces":"Success","wróć-do-strony-głównej":"Return to home page","historia":"History","zaloguj-za-pomoca-steam":"LOG IN WITH STEAM","giveaways":"Giveaways","twoje-przedmioty":"Your items","tak":"YES","nie":"NO","twoja-wygrana":"Your win","uruchom-klient-steam-i-zaloguj-się":"Run the Steam client and log in","w-górnym-menu-kliknij-gry":"In the upper menu choose Games","z-rozwijanej-listy-wybierz-aktywuj-produkt-na-steam":"Select \\"Activate product on Steam...\\" from the drop-down list","postępuj-zgodnie-z-instrukcją":"Follow the instructions","lub-przejdź-do-strony-aktywacji-produktu-i-wklej-swój-klucz":"Or go to <a href=\\"https://store.steampowered.com/account/registerkey\\" class=\\"text-gold-600 underline hover:text-gold-500 transition-fast\\"> product activation page</a> and paste your key","zobacz-więcej":"See more","odbierz":"collect","wróć":"Go back","zawartość-skrzyni":"Case contents","sprzedaj":"sell","konto-zostało-doładowane-pomyślnie":"Funds has been added successfully!","łącznie-do-zdobycia":"IN TOTAL TO GET","potwierdzenie-wykonania-zadania":"CONFIRMATION OF TASK COMPLETION","zrób-to-dobrze":"Do it right!","wybierz-zrzut-ekranu-lub-upuść-go-tutaj":"Select the screenshot or drop it here","realizuj":"Redeem","wyloguj-się":"Log out","produkt":"Product","dołączyłeś-do-konkursu":"You\'ve joined the giveaway!","nie-masz-wystarczającej-ilości-środków-na-koncie-doładuj-je":"You do not have enough money in your account! Add funds.","dla-zalogowanych":"For logged-in","nie-jesteś-zalogowany":"You\'re not logged in","musisz-być-zalogowany-aby-zobaczyć-tę-stronę":"You have to be logged in to see this page","zaloguj-się":"Log in","spróbuj-ponownie-za-10s":"Try again in 10 seconds","zadanie-zostało-przesłane-do-weryfikacji":"The task was sent for verification","poczekaj-10-sekund":"Wait 10 seconds","spróbuj-za-kilka-sekund":"Try again in a few seconds","już-wysłałeś-to-zadanie":"You have already sent this task!","wypłata-została-zrealizowana-jednak-wymaga-zaakceptowania":"The payment has been made, but it must be accepted","jak-aktywować-klucz-steam":"How to activate a steam key?","uruchom-klient-origin-i-zaloguj-się":"Run the Origin client and log in.","w-skrzynce":"In the cases","zadania-key-drop":"KEY-DROP tasks","polub-nas-na-facebooku":"Like us on Facebook","otwórz-skrzynie":"Open the case","udostępnij-nasz-post-na-facebooku":"Share our post on Facebook","obserwuj-nas-na-instagramie":"Follow us on Instagram","dołącz-do-naszej-grupy-steam":"Join our Steam group","dodaj-pozytywną-recenzję-na-facebooku":"Add a positive review on Facebook","zapraszaj-znajomych-za-pomocą-kodu-promocyjnego":"Invite friends with Promo Code","zdobądź-5-osób-z-polecenia":"Get 5 people on referral","wylosowano":"Has been drawn","zrób-to-teraz":"Do it now","pomoc-techniczna":"Support","wprowadź-inną-kwotę-większą-niż-10":"Enter another amount that is higher than 10","inne":"Others","problem-z-płatnościami":"Payments issue","użyj-kodu-promocyjnego":"USE PROMO CODE","użyj-złotego-kodu":"USE THE GOLDEN CODE","propozycja-współpracy":"Cooperation offer","pamiętaj-aby-ustawić-widoczność-profilu-na-publiczny-w-innym-wypadku-nie-będziemy-mogli-prawidłowo-zweryfikować-zadania":"Remember to set your profile to \\"Public\\" because if you don\'t we won\'t be able to properly verify the task!","zdobądź-10-osób-z-polecenia":"Get 10 people on referral","zdobądź-20-osób-z-polecenia":"Get 20 people on referral","zdobądź-40-osób-z-polecenia":"Get 40 people on referral","problem-z-aktywacją-klucza":"Key activation problem","zdobądź-100-osób-z-polecenia":"Get 100 referrals","zdobądź-200-osób-z-polecenia":"Get 200 referrals","zdobądź-500-osób-z-polecenia":"Get 500 referrals","zdobądź-1000-osób-z-polecenia":"Get 1000 referrals","wprowadź-swój-klucz-a-następnie-kliknij-kontynuuj":"Enter your key, and click \\"Continue\\"","ustawienia":"Settings","wypłaty":"Withdrawals","skin-został-sprzedany":"Skin has been sold","trade-url-został-zapisany":"Trade url has been saved","oferta-została-przekazana-do-wysyłki":"Offer has been transferred for shipment","ten-skin-został-już-wypłacony":"This skin has been already withdrawn","ten-skin-został-już-sprzedany":"This skin has been already sold","wprowadź-poprawny-trade-url":"Enter a correct Trade URL","wprowadź-trade-url":"Enter Trade URL","wypłata-jest-zablokowana":"Withdrawal is blocked","skiny-csgo":"CS:GO Skins","spróbuj-ponownie-za-10-sekund":"Try again later","spróbuj-ponownie-za-5s":"Try again in 5s","aby-odblokować-wypłaty-skinów-doładuj-konto-na-kwotę-minimum-4-pln":"To trade skins, add minimum 1 USD to your account balance","poczekaj-3-sekundy":"Wait 3 seconds","wprowadź-trade-url-aby-to-zrobić-przejdź-do-zakładki-ustawienia":"Enter your Trade URL. To do that, go to the SETTINGS tab","jak-aktywować-klucz-uplay":"How to activate an Ubisoft Connect key?","uruchom-klient-uplay-i-zaloguj-się":"Run an Ubisoft Connect client and sign in.","w-górnym-rogu-okna-kliknij-w-ikonkę-klucza":"In the upper corner of the window click the key icon","zaakceptuj-klikając-aktywuj":"Accept by clicking \\"Activate\\"","wybierz-poprawny-przedmiot":"Choose a correct item","spróbuj-ponownie-za-kilka-minut":"Try again in a few minutes","poczekaj-na-realizację-poprzednich-ofert":"Wait till the previous offers are done","wypłata-niemożliwa-skontaktuj-się-z-administracją":"Withdrawal unavailable. Please contact our Support.","skrzynka-otwarta":"Case opened.","wybierz-język":"CHOOSE LANGUAGE","taki-kod-promocyjny-posiada-już-inny-użytkownik":"Another user already has this Promo Code.","znaki-niedozwolone-w-kodzie-promocyjnym":"Forbidden symbols in the Promo Code","sprzedaj-wszystko":"Sell all","przynajmniej-jeden-z-wybranych-skinów-został-już-sprzedany":"At least one of the selected skins has already been sold.","zaloguj-się-by-otworzyć":"Sign in to open","wybierz-zrzut-ekranu":"Select a screenshot","rozmiar-pliku-nie-powinien-przekraczać-1mb":"File size shouldn\'t exceed 1mb","odebrany":"Received","konkurs":"Competition","za-moment-zostaniesz-przekierowany-do-płatności":"You will be redirected to payment in a moment","gdzie-znajdę-swój-trade-url":"WHERE CAN I FIND MY TRADE URL ?","zapisz":"SAVE","oczekiwanie":"WAITING","oferta-została-przekazana-do-realizacji":"Offer has been forwarded for realization","oferta-wysłana":"OFFER SENT","ten-przedmiot-chwilowo-nie-może-zostać-wypłacony-spróbuj-ponownie-lub-go-sprzedaj":"This item is temporarily unavailable for withdrawal, try again or sell it.","odrzucono":"DENIED","oferta-została-odrzucona-lub-anulowana-możesz-ponowić-wypłatę":"The offer has been denied or canceled. You can redo the withdrawal","kod-został-aktywowany":"The code has been activated","sprzedaj-za":"SELL for","podany-trade-url-nie-należy-do-twojego-konta":"Trade url you entered isn\'t connected to your account","oferta-jest-w-trakcie-realizacji":"The offer is being implemented","w-ciągu-kilkunastu-minut-otrzymasz-ofertę-z-przedmiotem":"You will get offer on the item in several minutes","przepraszamy-nie-posiadamy-tego-przedmiotu-w-tym-momencie":"SORRY! WE DO NOT HAVE THIS ITEM AT THIS MOMENT","spróbuję-ponownie-za-jakiś-czas":"I will try again later","możesz-spróbować-wypłacić-ten-przedmiot-za-jakiś-czas-lub-wymienić-go-na-inny-w-podobnej-cenie":"You can try to withdraw this item for some time, or exchange it for another at a similar price.","automatyczna-wypłata-chwilowo-jest-niedostępna":"Automatic withdrawal is temporarily unavailable.","wybierz-poprawną-ilość-loserów":"Choose a valid number of reels","upgrade":"Upgrade","minimalna-kwota-powinna-być-większa-lub-równa-0":"The minimum amount should be greater than or equal to 0","brak-danych":"No data","dodaj-do-listy-życzeń":"Add to wish list","jak-zdobywać":"HOW TO GAIN","złoto":"GOLD","graj-w-gry":"Play games","wykonuj-zadania":"Perform tasks","zapraszaj-znajomych":"Invite friends","brak-jakości":"No quality","wartość-nagrody":"Reward value","zakup":"Add funds","nie-posiadasz-takiej-kwoty":"You don\'t have that amount","poczekaj-na-realizację-oferty":"Wait for the offer to be processed.","spróbuj-ponownie-później":"Please try again later.","mnożnik-ulepszenia-powinien-być-większy-niż-13":"The improvement multiplier should be greater than 1.3","bonus":"Bonus","minimalna-kwota-doładowania-to":"The minimum top-up amount is","ten-skin-został-użyty-w-upgraderze":"This skin was used in an upgrade.","błąd-przesyłanych-danych":"Transmission error","otwórz-darmową-skrzynię":"OPEN A FREE CASE!","wpisz-swój-trade-url":"TYPE YOUR TRADE URL...","zaobserwuj-nas-na-twitterze":"Follow us on Twitter","follow-keydropcom-kliknij-w-przycisk-a-następnie-zaobserwuj-nas-na-twitterze":"<a href=\\"https://twitter.com/keydropcom?ref_src=twsrc%5Etfw\\" class=\\"twitter-follow-button\\" data-show-count=\\"false\\">Follow @keydropcom</a><script async src=\\"https://platform.twitter.com/widgets.js\\" charset=\\"utf-8\\"><\/script> Click this button and then follow us on Twitter!","ten-skin-zdobędziesz-tutaj":"You can get that skin here:","podobne":"Similar","zobacz":"View","strona-główna":"Home","csgo-item-list":"CSGO ITEM LIST","zaproś-5-osób-by-wykonać-to-zadanie":"Invite 5 people to do this task","zaproś-20-osób-by-wykonać-to-zadanie":"Invite 20 people to do this task","zaproś-10-osób-by-wykonać-to-zadanie":"Invite 10 people to do this task","zaproś-40-osób-by-wykonać-to-zadanie":"Invite 40 people to do this task","twój-lvl-steam-jest-odpowiedni":"Your LVL steam is right.","twój-nick-jest-niepoprawny-dodaj-do-nicku-key-dropcom-i-przeloguj-się":"Your nickname is invalid, add to the key-drop.com nickname and log out.","twój-avatar-jest-niepoprawny-zmień-go-na-avatar-key-dropcom-pamiętaj-że-po-zmianie-należy-się-wylogować-i-zalogować-ponownie":"Your avatar is wrong. Change it to a Key-Drop.com avatar. Remember to log out and log in again after the change.","wprowadź-kod":"ENTER THE CODE","zaproś-200-osób-by-wykonać-to-zadanie":"Invite 200 people to do the task","lub-upuść-go-tutaj":"or drop it here.","zaproś-100-osób-by-wykonać-to-zadanie":"Invite 100 people to do the task","key-drop":"KEY-DROP","wprowadź-odpowiednią-kwotę":"Enter the appropriate amount","zaproś-500-osób-by-wykonać-to-zadanie":"Invite 500 people to do this task","oceń-nas-na-5-i-napisz-co-najbardziej-podoba-ci-się-w-naszym-serwisie":"Rate us 5★ and write what you like most about our site!","napisz-w-trzech-zdaniach-co-najbardziej-podoba-ci-się-w-naszym-serwisie-wszystkie-zadania-będą-weryfikowane-ręcznie-nie-kopiuj-czyjejś-opinii":"Write in three sentences what you like most about our service.\\r\\n<br/> *All tasks will be verified manually, do not copy someone\'s opinion!","kod-powinien-się-składać-z-minimum-3-znaków":"The code should be at least 3 characters long","musisz-posiadać-publiczny-profil-steam-by-skorzystać-z-tej-opcji":"You must have a public steam profile to use this feature.","dodaj-adres-e-mail":"Add an email address","podaj-swój-adres-e-mail-i-zweryfikuj-konto":"Enter your e-mail address and verify your account!","profil-użytkownika":"USER PROFILE","statystyki-użytkownika":"USER STATISTICS","ulepszeń-skinów":"SKINS UPGRADE","darmowych-skrzyń":"FREE CASES","best-drop":"Best Drops","best-upgrade":"Best Upgrade","przedmioty":"Items","all-drops":"All Drops","all-upgrades":"All Upgrades","użytkownik-nie-otworzył-jeszcze-żadnej-skrzyni":"The user has not opened any case yet.","ten-użytkownik-nie-otworzył-jeszcze-żadnych-skrzyń":"This user has not opened any case yet.","nie-bądź-jak-on-i-otwórz-za-niego":"Don\'t be like him and open for him.","ten-skin-jest-w-trakcie-wypłaty":"This skin is being withdrawal","za-moment-zostaniesz-przekierowany-do-płatnści":"You will be redirected to payment in a moment","wszystkie-przedmioty-zostały-sprzedane":"All skins have been sold.","nie-posiadasz-przedmiotów-na-sprzedaż":"You have no skins for sale.","nie-otworzyłeś-jeszcze-żadnej-skrzyni":"You haven\'t opened any cases yet","sprzedaj-wszystko-za":"Sell all for","ulepsz-wszystko":"Upgrade all","wszystkie-przedmioty":"All skins","aktywne-przedmioty":"Active skins","twoja-oferta-jest-w-trakcie-realizacji":"Your offer is in progress","oferta-została-wysłana":"The offer has been sent","zweryfikuj":"Verify","e-mail-z-kodem-aktywacyjnym-został-wysłany-na-twoją-poczte":"An e-mail with the activation code has been sent to your mail","niepoprawny-kod":"Invalid code","twój-e-mail-został-zweryfikowany-poprawnie":"Your e-mail has been validated correctly!","już-masz-ustawiony-ten-adres-e-mail":"You already have this e-mail address set","adres-e-mail-s-już-jest-używany-w-bazie-danych":"The email address %s is already in use in the database.","nieprawidłowy-adres-e-mail":"Incorrect e-mail address","poczekaj-minutę-aby-móc-ponownie-wysłać-wiadomość":"Wait one minute to be able to resend the message.","czy-na-pewnochcesz-sprzedać-wszystko":"Are you sure you want to sell everything?","activation-guide":"Activation Guide","sell-for":"Sell for","collect":"Collect","exchange":"Exchange","new":"New","for-exchange":"For exchange","sold":"Sold","received":"Received","exchanged":"Exchanged","error":"Error","has-been-drawn":"Has been drawn","has-been-upgraded":"Has been upgraded","podany-kod-nie-istnieje-w-systemie":"This code does not exist in the system","kod-referencyjny-został-aktywowany":"Reference code has been activated","złoty-kod-został-aktywowany":"The Golden Code has been activated","promocode":"PROMO CODE!","użyj-kodu-aby-otrzymać-bonus":"Have a Code? Use it to get a bonus!","możesz-otrzymać-darmowe-punkty-bonus-lub-złote-monety":"You can get Free Balance, Bonuses or Coins.","otrzymałeś-goldbonus":"You got the {goldBonus}","otrzymałeś-bonus-bonus-oraz-bonus-do-doładowania-depositbonus":"You have received a bonus {bonus} and a recharge bonus +{depositBonus}","kod-bonusowy-został-aktywowany-depositbonus":"The bonus code has been activated +{depositBonus}","użyj-teraz":"USE NOW!","oferta-wygasa-za":"THE OFFER EXPIRES IN","historia-kodów":"HISTORY OF CODES","typ-promocji":"PROMOTION TYPE","kod-promocji":"PROMO CODE","kwota-bonusu":"BONUS AMOUNT","data-użycia":"DATE OF USE","kod-został-zrealizowany":"The code has been redeemed","adres-e-mail":"E-MAIL ADRESS","ukryj-mój-profil":"HIDE MY PROFILE","wysyłka-e-mail-nie-powiodła-się":"Email sending has failed","ustaw-obserwowanie-wyświetlaj-najpierw-na-facebooku":"Set \'Following -> See first\' on Facebook!","zmień-obserwowanie-na-wyświetlaj-najpierw-na-naszym-facebookuzrób-zdjęcie-na-którym-widoczne-będzie-wykonane-zadanie":"Change \'Following to See first\' on our Facebook!\\r\\nTake a photo of the completed task!\\r\\n\\r\\n<img src=\\"https://i.imgur.com/mnhJh76.png\\"/>","wprowadź-poprawny-steamid":"Please enter a valid steamid","profil-steam":"Steam profile","exterior":"Exterior:","profil-key-drop":"KEY-DROP PROFILE","najnowsze":"Latest","nie-masz-aktywnych-itemów":"You don\'t have active items","otwieraj-skrzynie":"Open the cases","minimalna-kwota-wypłaty-to-4-pln":"The minimum withdrawal amount is 1 USD","minimalna-kwota-wypłaty-to":"The minimum withdrawal amount is","kod-promocyjny-powinien-zawierać-maksymalnie-16-znaków":"The Promo Code should contain a maximum of 16 characters.","otwórz-przynajmniej-4-skrzynki-ze-skinami-by-odblokować-możliwość-gry":"Open at least 4 skin cases to unlock the game.","oferta-wymiany-została-odrzucona":"The exchange offer has been rejected","oferta-wymiany-została-zaakceptowana":"The exchange offer has been accepted","oferta-wymiany-została-anulowana":"The exchange offer has been canceled","poprzednie-zlecenia-wpłaty-nie-zostało-jeszcze-zakończone":"The previous deposit requests have not yet been completed","łączna-kwota-wpłaty-jest-inna-niż-suma-cen-skinów":"The total deposit amount is different than the sum of the skin prices","coś-nie-tak":"Something\'s wrong","dołącz-do-naszej-grupy-facebook":"Join our Facebook group","dołącz-do-naszej-grupy-już-teraz":"Join our group now!","brak-wolnego-bota-do-wymiany-skinów":"No free bot to exchange skins","nie-akceptujemy-jednego-lub-wiecej-z-wybranych-skinów":"We do not accept one or more of the selected skins","kwota-wpłacanych-skinów-jest-za-niska":"The amount of skins deposited is too low","ulepsz-x2":"X2 Upgrade","dodaj-post-na-naszej-grupie-facebook":"ADD A POST ON OUR FACEBOOK GROUP","dodaj-post-w-którym-chwalisz-się-skinami-zdobytymi-na-key-drop-post-powinien-zawierać-link-do-twojego-profilu-key-drop-nazwę-najlepszej-skrzyni-na-key-drop-opis-twojego-najlepszego-ulepszenia-w-upgrader":"Add a post where you brag about the skins you\'ve earned on Key-Drop\\r\\n    <br> The post should contain: <br> - Link to your Key-Drop profile <br> - Name of the best box on Key-Drop <br> - Description of your best Upgrader upgrade","pochwal-się-swoimi-skinami-wygranymi-na-key-drop":"Show off your Key-Drop skins","nie-posiadasz-środków-do-otwarcia-tej-zdrapki":"You don\'t have the funds to open this scratch card!","nie-posiadasz-tylu-środków":"You don\'t have that many funds!","błąd-utworzenia-zlecenia-wpłaty-skinów":"Error creating a skin deposit order","pochwal-się-dropem-na-swoim-profilu-facebook":"Show off the drop on your Facebook profile","pochwal-sięswoim-dropem-na-instagramie":"Show off your Instagram drop","pochwal-się-dropem-na-swoim-profilu-twitter":"Show off the drop on your Twitter profile","pochwal-się-swoim-dropem-na-instagramie":"Show off your Instagram drop","dodaj-post-lub-instastory-na-którym-chwalisz-się-swoimi-skinami-csgo-zdobytymi-na-key-dropoznacz-nasz-profil-keydropcom-oraz-dodaj-keydrop":"Add a post or instastories where you brag about your CS:GO skins earned on Key-Drop.\\r\\nMark our profile @keydropcom and add hashtag #keydrop","dodaj-post-lub-instastory-na-którym-chwalisz-się-swoimi-skinami-csgo-zdobytymi-na-key-dropoznacz-nasz-profil-keydropcom-oraz-dodaj-hashtag-keydrop":"Add a post or instastories where you brag about your CS:GO skins earned on Key-Drop.\\r\\nMark our profile @keydropcom and add the hashtag #keydrop","dodaj-post-na-którym-chwalisz-się-swoimi-skinami-csgo-zdobytymi-na-key-dropoznacz-nasz-profil-keydropcom-oraz-dodaj-hasztag-keydroppamiętaj-aby-post-był-opublikowany-publicznie":"Add a post where you show off your CS: GO skins you\'ve earned on Key-Drop.\\r\\nMark our profile @keydropcom_official and add the hashtag #keydrop\\r\\n\\r\\n* Remember to publish the post \\"Public\\".","spróbuj-ponownie-później-30minut-aktualnie-serwery-steam-są-przeciążone":"Please try again later. Currently STEAM servers are overloaded","aby-odblokować-wypłaty-doładuj-konto-na-kwotę-minimum-4-pln":"To unblock withdrawals, top up your account with a minimum amount of $ 1.","zdrap-przynajmniej-jedną-zdrapkę-z-niższego-poziomu":"Scratch at least one scratch from the lower level.","coś-poszło-nie-tak-spróbuj-ponownie-później":"Something went wrong, please try again later","błąd-ładowania-danych":"Data loading error","zaobserwuj-nas-na-tiktok":"Follow us on TikTok","follow-keydropofficial-on-tiktok":"Follow @keydropofficial on TikTok","zasubskrybuj-nasz-kanał-na-youtube":"Subscribe to our YouTube channel!","zaobserwuj-nasz-kanał-na-youtube":"Subscribe to our YouTube channel!","nieznany-błąd":"Unknown error","wystąpił-problem-z-wczytaniem-ekwipunku-spróbuj-ponownie":"There was a problem loading your inventory. Try again.","przejdźdo-weryfikacji":"Go to verification","weryfikacja-kyc":"KYC verification","minimalna-kwota-do-wpłaty-to-5":"The minimum amount to be deposited is $5","provably-fair":"Provably Fair","wyłącz-dźwięk":"Disable the sound","włącz-dźwięk":"Enable sound","wyłącz-tryb-natychmiastowego-wyświetlania-wyniku":"Disable instant result display mode","login-to-open-for":"Login to open","goBack":"Go back","open-for":"Open for","open-again":"Open again","sell":"Sell","selling":"Selling...","you-can-withdraw-these-items-in-your-profilepanelprofilpmy_winner":"You can withdraw these items in [My Account](/panel/profil?p=my_winner)","najlepsze-dropy":"The best drops","uaktualniono":"Updated","dane-zostały-zapisane":"The data has been saved","check-roll":"Check roll","zbyt-często-zmieniasz-ten-parametr-spróbuj-ponownie-za-godzinę":"You change this parameter too often, try again in an hour","włącz-tryb-natychmiastowego-wyświetlania-wyniku":"Enable instant result display mode","upgrade-all":"Upgrade all","add-funds-to-open":"Add funds to open","checking-balance":"Checking balance...","otwórz-przynajmniej-jedną-skrzynkę-by-zmienić-ten-parametr":"Open at least one case to view this parameter","zrobione":"Done","unieważnij-mój-klucz-steam-web-api":"Revoke my Steam Web API key","dołącz-do-naszego-serwera-discord":"Join our Discord server","zainstaluj-one-night-casino-na-swój-telefon":"Install One Night Casino on your phone","zdobądź-10-lvl":"Reach Level 10","zdobądź-50lvl":"Reach Level 50","taki-użytkownik-nie-istnieje":"There is no such user","wprowadzony-uid-lub-twój-level-jest-niepoprawny":"The entered UID or your level is incorrect","zgarnij-w-one-night-casino":"Play One Night Casino","ostatnie-najlepsze-wygrane":"Last top drop","spróbuj-ponownie-za-3-sekundy":"Try again in 3 seconds","skin-changer":"Skin Changer","przedmiot-został-sprzedany":"The item has been sold","tego-skina-nie-można-sprzedać":"This skin cannot be sold","wymień-skiny":"Skin Changer","na-twoje-konto-zostały-nałożone-ograniczenia-ta-zakładka-jest-dla-ciebie-niedostępna-do-dnia":"You’re temporarily restricted from performing certain actions on this tab. Your account will be limited until day:","wybierz-swoje-przedmioty":"Choose your items","has-been-changed":"Has been changed","klucz-zostanie-dostarczony-w-ciągu-kilku-minut":"The key will be reached within minutes","prosto-z-fabryki":"Factory New","lekkie-zużycie":"Minimal Wear","po-testach-bojowych":"Field-Tested","mocne-zużycie":"Well-Worn","po-ciężkich-walkach":"Battle-Scarred","follow-us":"Follow us","add-funds":"ADD FUNDS","try-again":"PLAY AGAIN","your-items":"YOUR ITEMS","free-gold":"FREE GOLD","affiliate-system":"AFFILIATE SYSTEM","support":"SUPPORT","money":"Money","loading":"LOADING...","opened-cases":"OPENED CASES","dodaj-i-zweryfikuj-swój-adres-e-mail-aby-otrzymać-nagrode":"Add and verify your email address to receive your prize!","oceń-nas-na-5-i-napisz-w-3-zdaniach-co-najbardziej-podoba-ci-się-w-naszym-serwisie":"Rate us 5★ and write in 3 sentences what you like most about our website.","zaobserwuj-nas-na-twitterze-i-bądź-na-bierzącofollow-keydropcom":"Follow us on Twitter and stay up to date!\\r\\n<a href=\\"https://twitter.com/keydropcom?ref_src=twsrc%5Etfw\\" class=\\"twitter-follow-button\\" data-show-count=\\"false\\">Follow @keydropcom</a><script async src=\\"https://platform.twitter.com/widgets.js\\" charset=\\"utf-8\\"><\/script>","polub-nasz-facebook-fanpage-i-zawsze-bądź-na-bieżąco":"Like our Facebook fanpage and always stay up to date","udostępnij-nasz-post-na-facebooku-udostępnij-nasz-post-na-swoim-profilu-pamiętaj-że-post-musi-być-udostępniony-publicznie-link-do-fanpage-klik":"Share our post on Facebook. <small> Share our post on your profile. <br> Remember that the post must be shared Publicly <br> Link to Fanpage: <a href=\\"https://www.facebook.com/KeyDropPL\\" target=\\"_blank\\">CLICK</a> </small>","dołącz-do-naszej-grupy-steam-pamiętaj-aby-ustawić-widoczność-profilu-na-publiczny-w-innym-wypadku-nie-będziemy-mogli-prawidłowo-zweryfikować-zadania":"Join our steam group! Remember to set your profile visibility to \\"Public\\" otherwise we will not be able to verify the task correctly!","dodaj-pozytywną-recenzję-na-facebooku-dodaj-pozytywną-recenzję-na-naszym-fanpage-przejdź-do-dodawania-klik-nie-kopiuj-recenzji-innych-napisz-coś-od-siebie-pamiętaj-opinia-musi-być-publiczna-abyśmy-mogli-ją-zaakceptować":"Add a positive review on Facebook <small> Add a positive review on our fanpage! <br> Go to add <a target=\\"_blank\\" href=\\"https://www.facebook.com/KeyDropPL/reviews/\\">(KLIK)</a> <br> Do not copy others reviews, write something from yourself! Remember review must be Public so we can accept it. </small>.","zapraszaj-znajomych-za-pomocą-kodu-promocyjnego-zapraszaj-znajomych-za-pomocą-własnego-kodu-promocyjnego-możesz-go-utworzyć-w-zakładce-program-partnerski-klik-zdjęcie-potwierdzające-powinno-być-wykonane-w-zakładce-program-partnerski":"Invite your friends using your promo code. <small> Invite your friends using your own promo code! <br> You can create it in the Affiliate Program tab <a href=\\"https://key-drop.com/panel/profil/program_partnerski\\">(CLICK)</a>. <br> A confirmation photo should be taken in the Affiliate Program tab.  </small>.","oznacz-nas-w-swoim-poście-lub-instastory-na-którym-pokazujesz-swoje-skiny-zdobyte-na-key-dropcom":"Tag us in your post or instastories where you show your skins won on Key-Drop.com","upgrader":"UPGRADER","event":"EVENT","udostępnij-publicznie-post-dodany-przez-key-drop":"Share publicly a post added by Key-Drop","możesz-zaznaczyć-maksymalnie-count":"You can select up to {{count}}","element":"element","elementy":"elements","elementów":"elements","oznacz-nas-w-swoim-publicznym-poście-na-którym-pokazujesz-swoje-skiny-zdobyte-na-key-dropcom":"Tag us in your public post showing your skins won on Key-Drop.com","płatność-w":"PAYMENT IN","zapisano":"SAVE","zapisywanie":"SAVEING...","edytuj":"EDIT","przejdź-do-strony-głównej":"Back To Main Page","twój-balans":"YOUR BALANCE ON KEY-DROP","zdobądź-darmowe-złoto":"GET FREE COINS","aby-znaleźć-swój-steam-trade-url":"TO FIND YOUR STEAM TRADE URL","podaj-swój-trade-url":"TYPE YOUR TRADE URL...","metody-płatności":"METHODS OF PAYMENT","przejdź-do-sekcji":"Go to section...","wprowadź-kwotę-doładowania":"Enter the amount to add","niestety-coś-poszło-nie-tak-spróbuj-ponownie-później":"Something went wrong, please try again later.","doładuj-ponownie":"Add funds again","płatność-w-trakcie-realizacji":"Payment in progress","kod":"code","wyślij-sms-o-treści-contents-na-numer-number-cost-cost-aby-doładować-konto-na-kwotę-value":"Send an SMS with **{contents}** to **{number}** (cost **{cost}**), to top up **{value}**","za-wykonanie-tego-zadania-otrzymasz":"Complete this task to receive","początek":"Begin","w-potwierdzeniu":"In confirmation","odrzucone":"Rejected","gotowe":"Done","wykonaj-poprzednie-zadanie-aby-odblokować-następne":"Complete the previous task to unlock the next one","dobrze":"Great!","weryfikujemy-twoje-zadanie-wróć-tu-za-jakiś-czas":"We are verifying your assignment, come back here in some time","nie-udało-się-ukończyć-zadania":"The task could not be completed","koniec":"Ends","dodaj-swój-adres-e-mail":"ENTER YOUR EMAIL ADDRESS","dodaj-swój-adres-e-mail-i-przejrdź-na-e-maila-w-celu-jego-zweryfikowania":"Enter your e-mail address and then go to the e-mail to verify it","zweryfikuj-adres-e-mail":"VERIFY EMAIL ADDRESS","podaj-kod-weryfikacyjny-z-e-maila":"Provide the verification code from your email","wpisz-otrzymany-kod":"Enter the code you received","twoje-zadanie-jest-w-trakcie-weryfikacji-wróć-tutaj-za-jakiś-czas":"We are verifying your assignment, come back here in some time","zrzut-ekranu-powinien-przedstawiać-pełny-ekran-oraz-być-wyraźny-wszelkie-próby-oszustwa-będą-skutkowały-odrzuceniem-nagrody-oraz-blokadą-wykonania-zadania-bez-możliwości-odwołania":"The screenshot should show the entire screen, and the completed task must be clearly visible. Any attempted cheating will be punished with the rejection of prizes and a ban with no possibility of appeal.","enter-your-nickname":"Enter your nickname","wpisz-kod-uid-konta":"ENTER YOUR ACCOUNT UID","uzyksaj-poziom":"GET LVL","zainstaluj-one-night-casino-na-swoim-telefonie":"Install One Night Casino on your phone","kliknij-rozpocznij-aby-zakończyć-zadanie":"Click „Get Started” to complete the task","wprowadź-kod-uid-swojego-konta":"Enter the UID of your account","upewnij-się-że-wykonałeś-to-zadanie-i-kliknij-przycisk-zrealizuj":"Make sure you have completed this task and click the Redeem button","krzycz-tam-gdzie-chcesz":"Give us a shoutout!","sprawdź-swoje-osiągnięcia":"Admire your achievements","w-swoich-statystykach-możesz-śledzić-wyniki-swoich-poleconych":"Check out your stats to see the results of your referrals.","zbierz-pieniądze":"Get the money","twój-link-polecający":"Your affiliate URL","podaj-swój-kod-promocyjny":"TYPE YOUR PROMO CODE...","za-każdego-zaproszonego-użytkownika-płacimy-ci-050-oczywiście-jest-jeden-haczyk-liczą-się-tylko-osoby-które-doładują-swoje-konto-minimum-5-promocja-ta-liczy-się-do-pierwszych-100-osób-dla-których-przyznany-jest-ten-bonus-a-następnie-przechodzi-do-normalnego-rankingu-tak-jak-jest-teraz":"For each invited user we pay you $0.50, of course there is one catch, only people who top up their account with a minimum of $5 count. This promotion counts towards the first 100 people for whom this bonus is given, and then it goes into the normal ranking as it is now.","twoi-polecający":"Your referrals","gracze":"Players","do-następnego-poziomu":"To next level","pieniądze":"Money","twój-procent":"Your percentage","z-wpłat-polecających":"From referral deposits","wpłaty-polecających":"Referrals deposited","twoje-zebrane-środki":"Your earnings","poziom-programu-partnerskiego":"Affiliate level","noResults":"No result","szukaj":"Search","problem-z-realizacją-klucza":"Key activation problem","ustawienia-konta-steam":"STEAM SETTINGS","tutaj-możesz-zmienić-swój-adres-e-mail":"HERE YOU CAN CHANGE YOUR EMAIL ADDRESS","wpisz-swój-adres-e-mail":"TYPE YOUR EMAIL...","wybierz-walutę":"Choose currency","wybierz-swoją-walutę-na-key-dropcom":"Choose your currency on key-drop.com","tutaj-możesz-ustawić-swoje-konto-na-niepubliczne":"Here you can make your account unpublic","profil-ukryty":"Profile hidden","profil-widoczny":"Profile visible","depozyt":"DEPOSIT","ładowanie":"LOADING...","ilość":"Amount","rodzaj":"Type","brak-wpłat":"No deposit","brak-wypłat":"No withdrawals","opis":"Description","brak-historii-konta":"No account history","wprowadź-kod-weryfikacyjny-z-twojego-e-maila":"Provide the verification code from your email","weryfikacja-adresu-e-mail-powiodła-się":"Email correctly verified","weryfikacja-adresu-e-mail-nie-powiodła-się":"Email verification failed","najlepsza-wygrana":"BEST DROP","ulubiona-skrzynia":"FAVOURITE CASE","wygrane-przedmioty":"USER DROPS","otwarte-skrzynie":"OPENED CASES","ulepszone-skliny":"SKINS UPGRADES","codzienne-darmowe-skrzynie":"FREE DAILY CASES","nie-zapisałeś":"You did not save","nieprawidłowy-adres-url":"Invalid URL","zapisywanie-adresu-url":"Saving URL...","usuwanie-adresu-url":"Removing URL...","adres-url-usunięty":"URL Removed","zaloguj-się-aby-kontynuować":"Log in to continue","nie-znaleziono-skinów":"Skins not found","cena-skina-jest-zbyt-niska":"Skin price is too low","skin-nie-jest-akceptowany":"Skin is not accepted","skin-nie-jest-możliwy-do-wymiany":"Skin is not tradeable","ładowanie-twoich-skinów":"Loading your skins...","pobieramy-twój-ekwipunek":"Downloading your inventory","musisz-podać-swój-adres-trade-url":"You must provide Trade URL","zaznacz-wszystkie":"Select All","odznacz-wszystkie":"Deselect All","dodaj-środki-do-swojego-konta":"Add funds to your account","znajdź-skina":"Find skin","rzadkość":"Rarity","pokaż-wybrane":"Show Selected","wybrane":"Selected","za":"for","przedmiot":"item","przedmiotów":"items","tworzenie-oferty":"Creating offer...","proszę-czekać-na-ofertę-ze-swojego-konta-steam":"Please wait for offer from our steam account","powrót":"Go back","potwierdź-transakcje-sprawdzając-informacje":"Confirm the trade by checking the data","potwierdź-w-kliencie":"Confirm in the client","potwierdź-w-przeglądarce":"Confirm in the browser","poziom-konta-steam":"Bot steam level:","data-rejestracji":"Register date:","bot-wymiany":"Trade bot","numer-zamówienia":"Transaction ID","zweryfikuj-profil-bota":"Verify bot profile","możesz-zweryfikować-naszego-bota-aby-sprawdzić-czy-jest-to-legalna-transakcja":"Paste link to the Steam profile of the account from which you received the exchange offer to verify that your deposit offer is not fake.","wyczyść-swój-web-steam-api":"Clear your Web Steam API","sprawdź-mój-web-steam-api":"Check my Web Steam API","steam-udostępnia-internetowy-interfejs-api-oparty-na-http-który-może-być-wykorzystany-do-uzyskania-dostępu-do-wielu-funkcji-steamworks-interfejs-api-zawiera-metody-publiczne-do-których-można-uzyskać-dostęp-z-dowolnej-aplikacji-zdolnej-do-wysłania-żądania-http-takiej-jak-klient-gry-lub-serwer":"Having active Steam API key may put your account at scam risk. To secure your account for the duration of the deposit, we recommend you to delete your Steam API key. If your API key is added and you are sure you did not activated it, you have probably fallen victim to a website that impersonating our service. In this case, we recommend you to deactivate your API key and changing your Steam account password.","oczekiwanie-na-potwierdzenie":"Awaiting confirmation...","masz-5-minut-na-potwierdzenie-transakcji-na-steam-po-tym-czasie-wymiana-na-steamie-zostanie-anulowana":"You have 5 minutes to confirm the transaction on Steam. After this time, the trade offer will be canceled on Steam.","twoja-transakcja-została-zakończona-powodzeniem":"Your transaction was successful.","dokonaj-innej-transakcji":"Make another transaction","błąd-transakcji":"Transaction error","jeśli-więcej-osób-usłyszy-od-ciebie-o-key-dropcom-tym-lepiej":"The more people hear about Key-Drop.com from you, the better!","zaproś-wszystkich-znajomych-do-polubienia-key-drop-zaproś-wszystkich-znajomych-do-polubienia-naszego-fanpage-link-do-niego-znajdziesz-tutaj-key-dropcom-zrób-zdjęcie-na-którym-widoczne-będzie-wykonane-zadaniezobacz-jak-to-zrobić1-klik2-klik":"Invite all your friends to like Key-Drop. <small> Invite all your friends to like our fanpage, you can find the link here <a target=\\"_blank\\" href=\\"https://www.facebook.com/keydropcom/\\" style=\\"color:white;\\">Key-Drop.com</a><br> Take a picture of you completing the task! <br>\\r\\nSee how to do it:<br>\\r\\n1. <a target=\\"_blank\\" href=\\"https://i.imgur.com/DwO75sO.png\\" style=\\"color:white;\\">CLICK</a><br>\\r\\n2. <a target=\\"_blank\\" href=\\"https://i.imgur.com/FxugEgq.png\\" style=\\"color:white;\\">KLIK</a><br> </small>","zaproś-wszystkich-znajomych-do-polubienia-key-drop":"Invite all your friends to like Key-Drop.","za-każde-doładowanie-wykonane-z-twoim-kodem-promocyjnym-do-twojego-programu-partnerskiego-zostaną-dodane-środki-które-będziesz-mógł-wykorzystać-w-naszym-serwisie-w-celu-zdobycia-najlepszych-skinów":"Earn money on every top-up made with your promo code!","add-image":"ADD IMAGE","zaproś-wszystkich-znajomych-do-polubienia-key-dropcom-zaproś-wszystkich-znajomych-do-polubienia-naszego-fanpage-link-do-niego-znajdziesz-tutaj-key-dropcom-zrób-zdjęcie-na-którym-widoczne-będzie-wykonane-zadaniezobacz-jak-to-zrobić1-klik2-klik":"Invite all your friends to like Key-Drop.com. <small> Invite all your friends to like our fanpage, <br> link to it you can find here <a target=\\"_blank\\" href=\\"https://www.facebook.com/keydropcom/\\" style=\\"color:white;\\">Key-Drop.com</a><br> Take a picture of you completing the task!<br>\\r\\nSee how to do it:<br>\\r\\n1. <a target=\\"_blank\\" href=\\"https://i.imgur.com/DwO75sO.png\\" style=\\"color:white;\\">CLICK</a><br>\\r\\n2. <a target=\\"_blank\\" href=\\"https://i.imgur.com/FxugEgq.png\\" style=\\"color:white;\\">CLICK</a><br> </small>","zaproś-wszystkich-znajomych-do-polubienia-key-dropcom":"Invite all your friends to like Key-Drop.com","wygrane-w-case-battle":"HAS BEEN IN CASE BATTLE","błąd-połączenia":"Connection error","aktywne-bitwy":"Active battles","zakończone-bitwy":"Finished Battles","moje-bitwy":"My battles","stwórz-bitwę":"Create battle","bitwa-rozpoczęta":"The battle has begun","key-drop-battles":"Key-drop battles","wszystkie-bitwy":"Total battles","utwórz-taką-samą-bitwę":"Create the same battle","utwórz-bitwę-key-drop":"Create Battle","rundy-bitwy":"BATTLE ROUNDS","z":"OF","skopiowana":"Copied","suma-rund":"Total rounds","dodaj-skrzynie":"Add case","liczba-graczy":"Number of players","cashback-jest-zwiększony-w-bitwach-dla-3-i-4-graczy":"Cashback is increased for 3 and 4 player battles!","prywatność":"Privacy","wybierz-ustawienia-prywatności-bitwy":"Select game privacy settings","publiczna":"Public","prywatna":"Private","cashback":"Cashback","dla":"for","całkowity-koszt":"Total cost","całkowity-koszt-za-skrzynie":"Total price of cases","uwórz-bitwę-key-drop":"Create Battle","dodawanie-skrzyń":"Select cases","nazwa":"Name","brak-skrzyń":"No cases","potwierdź":"Confirm","rundy":"Rounds","sortowanie":"Sorting","szukaj-skrzyni":"Search case","przedział-cenowy":"Price range","możliwe-do-dołączenia":"Balance to join","reset":"Reset","rudny":"Rounds","załaduj-więcej":"Load more","brak-bitw":"No battles","zobacz-bitwę":"Watch the battle","dołącz-do-bitwy":"Join the battle","dołączył-użytkownik":"User has joined","bitwa-została-anulowana":"The battle has been canceled","użytkownik-opuścił-bitwę":"User has left the battle","bitwa-została-rozpoczęta":"BATTLE CASE - STARTED","jesteś-gotowy":"Are you ready","do-gry":"to play","dołącz":"Join","oczekiwanie-na-graczy":"Waiting for players","gotowy-do-bitwy":"Ready to battle","wygrany":"Winner","przegrany":"Loser","całkowita-wygrana":"Total win","client-seed":"Client seed","runda":"Round","weryfikuj":"Verify","roll-id":"Roll ID","zbyt-mało-środków":"Not enough money","doładuj-swoje-konto":"Top up your account","powrót-do-bitwy":"Back to battle","opuść-bitwę":"Leave battle","anuluj-bitwę":"Cancel battle","server-seed":"Server seed","rozpoczeło-się-o":"Started at","obecnie-nie-ma-możliwości-zdobycia-event-coinów-podczas-jakiejkolwiek-bitwy":"Currently, it is not possible to earn event coins during any battle","przejdź-do-wyniku":"Go to the result","zorganizowałeś-już-3-bitwy":"You have already organized 3 battles","brak-środków-doładuj-konto":"No funds, top up your account","miejsce-jest-już-zajęte":"This place is already taken","nowa-bitwa-została-stworzona":"New battle has been created","będzie-użyty-dla-twoich-skrzynek":"It will be used for your cases","przez-moment-nie-możesz-opuścić-bitwy":"You cannot leave the battle for a moment","battles":"BATTLES","case-battle":"CASE BATTLE","i-zaloguj-się":"and log in.","wprowadź-kod-składający-się-z-25-znaków-i-następnie-wybierz-opcje-dalej":"Enter a code of 25 characters and then select \\"Next\\"","wprowadź-nowy-client-seed":"Enter new client seed","client-seed-jest-błędny":"Client seed is invalid","client-seed-dotyczy-wszystkich-gier":"Client Seed applies to all games","id-rundy":"Round ID","zobacz-wszystkie-walki":"SEE ALL BATTLES","koszt-dołączenia":"TOTAL COST","rozegranych-bitew":"Battles","dlaczego-nie-mogę-wycofać-środków-z-programu-partnerskiego":"Why am I unable to withdraw funds from the affiliate program?","aby-wycofać-środki-z-programu-partnerskiego-twoi-polecający-muszą-wpłacić-łącznie-400-pln-oraz-musisz-posiadać-10-aktywnych-polecających-którzy-w-przeciągu-miesiąca-zdeponowali-środki-w-wysokości-40-pln":"To withdraw funds from the affiliate system, your all referrals must deposit a total of 100 USD and you must have 5 active referrals who have deposited funds of at least 10 USD in a given month.","gry":"Games","csgo-skins":"CS:GO SKINS","typ-broni":"Weapon type","domyślne":"Default","zakres-cenowy":"Price range","wybierz-i-wykonaj-kontrakt-ze-skinów":"Select the skins that you don\'t like","które-nie-przypadły-ci-do-gustu-lub-takie-które-już-posiadasz-w-swoim-ekwipunku":"or that you already have in your Steam inventory and make a contract.","wybierz-od-3-do-10-skinów":"Select the skins","i-sprawdź-wartość-potencjalnej-nagrody":"and check the estimated value of the reward.","utwórz-kontrakt-klikając-w-create-contract":"Create a contract by clicking \\"CREATE CONTRACT\\"","i-zdobądź-lepszy-skin-w-łatwy-sposób":"and get a better skin so easy.","transfer":"transfer","uwaga-płatności-kryptowalutą-należy-dokonywać-za-pomocą-sieci-ethereum-korzystanie-z-innych-sieci-do-płatności-kryptowalutami-spowoduje-utratę-środków":"Attention! Cryptocurrency payments must be made using the Ethereum network. Using other networks for cryptocurrency payments will result in loss of funds.","brak-dostępu":"Access Denied","ta-strona-jest-niedostępna-w-twoim-kraju":"THIS PAGE IS NOT AVAIABLE IN YOUR COUNTRY","ta-strona-wykorzystuje-pliki-cookies":"This website uses cookies","nasza-strona-internetowa-używa-plików-cookies-tzw-ciasteczka-w-celach-statystycznych-reklamowych-oraz-funkcjonalnych-dzięki-nim-możemy-indywidualnie-dostosować-stronę-do-twoich-potrzeb-każdy-może-zaakceptować-pliki-cookies-albo-ma-możliwość-wyłączenia-ich-w-przeglądarce-dzięki-czemu-nie-będą-zbierane-żadne-informacje":"Our website uses cookies for statistical, advertising and functional purposes. Thanks to them we can individually adjust the site to your needs. Everyone can accept cookies or has the possibility to disable them in the browser, so that no information is collected.","wstecz":"Back","utwórz-nową-ofertę":"CREATE NEW ORDER","sortuj-od-najwyższej-ceny":"Sort by highest price","sortuj-od-najniższej-ceny":"Sort by lowest price","które-chcesz-wymienić":"that you want to trade","wartość-twoich-skinów-do-wymiany":"Value of your trade skins","brakuje":"MISSING","zbyt-dużo":"TOO MUCH\'","twoje-skiny":"Your items","stan-zużycia":"Exterior","contracts":"CONTRACTS","zrealizuj":"Redeem","zrealizuj-ponownie":"Redeem it again","wybierz-przedmioty":"Choose items","które-chcesz-otrzymać":"you want to receive","zaktualizuj-swoje-ustawienia":"Update your settings","język":"Language","waluta":"Currency","anuluj":"Cancel","ustaw-preferowany-język-i-walutę":"Set preferred language and currency.","wejdź-w-profil-konta-kliknij-na-awatar-w-lewym-górnym-rogu-ekranu":"Go to your profile, there is a UID code above the avatar, which should be entered in the field below","wybierz-moonid":"Choose \\"MoonID\\"","po-przeniesieniu-do-przeglądarki-wybierz-log-in":"After transferring to the browser, select \\"Log in\\"","wybierz-more":"Choose \\"More\\"","wybierz-promo-codes-lub-partner-codes":"Choose \\"Partner Codes\\"","odbierz-kody-z-poczty-w-grze":"Receive codes from in-game mailbox.","przejdź-do-swojego-profilu-nad-avatarem-znajduje-się-kod-uid-który-należy-wpisać-w-polu-poniżej":"Go to your profile, there is a UID code above the avatar, which should be entered in the field below","wybierz-edycje-profilu-grafika-zeszytu-w-prawym-dolnym-rogu-profilu":"Choose edit profile (notebook graphics in the lower left corner)","wpisz-kod-keydrop-i-wybierz-submit":"Enter the code „KEYDROP” and click \\"submit\\"","kod-promocyjny-powinien-zawierać-minimalnie-5-znaków":"The Promo Code should contain a minimum of 5 characters.","subskrybuj-nasz-newsletter-by-być-na-bieząco-z-najlepszymi-okazjami":"SUBSCRIBE TO OUR NEWSLETTER TO STAY UP TO DATE WITH THE BEST OFFERS","subskrybuj":"SUBSCRIBE","rezygnuję-z-subskrypcji":"UNSUBSCRIBE","ten-kod-został-już-wykorzystany-na-twoim-koncie":"This code has already been used on your account.","newsletter":"Newsletter","złota-strefa":"GOLD AREA","znajdź-skrzynię":"Find your case","możliwe-do-otwarcia":"Balance to open","oferta-limitowana":"Time limited","time-finished":"Time finished","nowa":"NEW","wystąpił-nieoczekiwany-błąd":"An unexpected error has occurred.","wyniki-wyszukiwania":"Search results","brak-wyników-wyszukiwania":"No search results","resetuj-filtry":"Reset Filters","brak-środków":"Not enough money","kraj":"Country","wybierz-kwotę":"Select an amount","wyślij-sms":"Send SMS","wybierz-giftcard":"Choose Giftcard","zrealizuj-kod":"Redeem the code","wprowadź-kod-giftcard":"Enter the Gift Card code","wprowadź-kod-sms":"Enter the SMS code","wybierz-swojego-operatora":"Choose your operator","operator":"Operator","twój-skin-został-wysłany-wejdź-na-konto-steam-i-zaakceputuj-ofertę":"The exchange offer was sent. Go to your Steam account and accept the offer.","kod-promocyjny-historia":"Promo code - history","złoty-kod-historia":"Golden Code - history","wpisałeś-zły-kod":"You entered the wrong code","zamknij-historię":"Close history","twój-aktualny-kod":"YOUR CURRENT CODE","wprowadź-kod-promocyjny":"Enter your Promo Code","zastosuj":"Apply","co-to-jest-kod-promocyjny":"Mi az a promóciós kód?","otrzymałeś":"You received","monety":"Coins","wprowadź-złoty-kod":"Enter the Golden Code","czym-jest-złoty-kod":"What is the Golden Code?","nie-użyto-jeszcze-kodów":"Codes not yet used","kraj-i-waluta":"COUNTRY AND CURRENCY","wybierz-metodę":"CHOOSE METHOD","nie-zapomnij-o":"DON\'T FORGET ABOUT","uzupełnij-kwotę":"Enter the amount","płatność-w-toku":"Payment is pending","dodaj-środki-ponownie":"Add funds again","dodaj-środki":"Add funds","wpisz-kod":"Enter code","zapłać":"PAY","twoja-kwota":"TOP-UP AMOUNT","wyślij-sms-o-treści-contents-na-number-koszt-cost-aby-doładować-value":"Send an SMS with ** {contents} ** to ** {number} ** (cost ** {cost} **) to top up ** {value} **","płać-przedmiotami-z-counter-strike-global-offensive-cs-go-i-dota-2":"Pay by skins from Counter Strike: Global Offensive (CS: GO) and Dota 2","twoja-transakcja-przebiegła-pozytywnie":"Your transaction has been completed","szczegóły-transakcji-poniżej":"Transaction details","id-transakcji":"TRANSACTION ID","data-transakcji":"TRANSACTION DATE","suma-transakcji":"TRANSACTION AMOUNT","dodaj-więcej-środków":"Add more funds","czekamy-na-twoją-płatność":"Waiting for your payment","pobieranie-danych-płatności":"Downloading payment details","transakcja-może-potrwać-do-5-minut":"Transaction can take up to ** 5 minutes **.","czekam-na-dane":"Waiting for data","w-przypadku-problemów-prosimy-o-kontakt-z-administracją-serwisu":"In case of problems, please contact the site administration.","wprowadź-kod-promocyjny-i-aktywuj-5-bonusu":"Enter your Promo Code and activate the 10% bonus.","wprowadź-złoty-kod-i-odbierz-darmowe-monety":"Enter the Golden Code and receive free Gold.","wróć-do-poprzedniej-wersji-doładowań":"Go back to the ** previous ** version","dołącz-do-naszego-kanału-na-telegramie":"Join our channel on Telegram.","zaobserwuj-nas-na-tiktoku-i-bądź-na-bieżąco":"Follow us on TikTok and keep up to date!","kod-wygasł":"The code has expired","kod-został-już-użyty":"The code has been used","zbyt-szybko-stosujesz-nowy-kod-poczekaj-10-sekund":"You enter new code too fast, u must wait 10 seconds","wróć-do-nowej-wersji-doładowań":"Go back to the ** new ** version","niepoprawny-numer":"Incorrect number","odkryj-server-seed":"Show Server Seed","edycja-client-seed":"Edit Client Seed","historia-client-seed":"Client Seed History","historia-server-seed":"Server Seed History","konfiguracja":"Configuration","twój-seed":"Your SEED","weryfikacja-algorytmu":"Algorithm verification","weryfikacja":"Verify","provably-fair-to-algorytm-który-umożliwia-weryfikację-każdego-wyniku-losowania-i-jest-to-forma-upewnienia-się-że-wszystkie-szanse-na-wygraną-na-naszej-stronie-są-jednakowo-losowe-jesteśmy-zwolennikami-przejrzystości-i-absolutnej-uczciwości-każdy-użytkownik-ma-takie-samo-prawdopodobieństwo-wygranej-na-skina-możemy-cię-zapewnić-że-nie-ma-sposobu-na-oszukanie-systemu-provably-fair-więc-możesz-mieć-pewność-co-do-uczciwości-każdego-wyniku-losowania":"Provably Fair is an algorithm that enables you to verify each roll result and make sure that all chances on our website are equally random. We stand for transparency and absolutely honesty. Every user has an equal probability of winning. We can assure you that there is no way to cheat the system, so you can have confidence in every click.","masz-możliwość-sprawdzenia":"You are able to check","historię-szans-i-cen-skrzyń":"The history of chances and cases prices","historię-client-seed-oraz-server-seed":"The history of client and server seeds","uczciwość-twoich-wygranych":"The fairness of your winnings","system-provably-fair-zapewnia-że-wszystkie-szanse-w-losowaniu-są-jednakowo-losowe-i-sprawiedliwe-dzięki-zastosowaniu-specjalnego-algorytmu-losowania-mechanizm-provably-fair-zależy-od-trzech-zmiennych-server-seed-client-seed-i-nonce-wynik-jest-obliczany-na-podstawie-danych-użytkownika-i-serwera-bezpośrednio-przed-rozpoczęciem-każdego-losowania-więc-gracz-może-sprawdzić-uczciwość-losowania-natychmiast-po-otwarciu-skrzyni":"The Provably Fair Algorithm ensures that all the chances are equally random and fair by using a special drawing algorithm. Provably Fair mechanism depends on three variables: Server seed, Client seed and Nonce. The result is calculated using the client and server data directly before the beginning of each game, so the player can see it immediately after opening the case.","otrzymasz-zaszyfrowany-hash-sever-seed-zanim-otworzysz-skrzynię-lub-ulepszysz-swoje-przedmioty-w-ten-sposób-jest-to-100-gwarancja-w-losowaniu-początkowe-i-końcowe-wartości-hash-będą-identyczne-co-będzie-dowodem-na-to-że-strona-internetowa-nie-ma-wpływu-na-końcowe-wyniki-losowania-aby-sprawdzić-działanie-provably-fair-potrzebujesz-poniższych-danych-możesz-skopiować-json-dane-gry-lub-skorzystać-z-tabeli-danych-następnie-należy-wkleić-dane-w-wyznaczone-pola-które-znajdują-się-pod-tym-adresem":"You will get an encrypted hash of the server\'s seed before you open the case or upgrade your items. That way, 100% fairness can be guaranteed. The initial and final hash values will be identical, which will prove that our website does not interfere in final results. To check the Provably Fair functionality, you need the data below. You can copy the JSON file (game data) or use the data table. After that, you need to paste it into the validator found if you","następnie-kliknij-przycisk-check-i-upewnij-się-że-twoja-wygrana-była-w-pełni-sprawiedliwa":"Once that\'s done, click the \\"Check\\" button and make sure that your winning was fair.","więcej-informacji-na-temat-systemu-provably-fair-można-znaleźć-pod-następującym-adresem":"More information about the Provably Fair system can be founded on the following","najstarsze":"Oldest","najtańsze":"Price: Low to high","najdroższe":"Price: High to low","pokaż-przedmioty":"Show items","algorytm-provably-fair":"ALGORITHM PROVABLY FAIR","slot-jest-już-zajęty":"Slot already taken","zobacz-jak-zdobywać-punkty":"See how to get Credits?","event-kończy-się":"Event ends in","zasady-gry":"GAME RULES","poziom-level":"Level {level}","koszt-otwarcia":"CARD COST","odblokuj-poziom":"UNLOCK LEVEL","ulepsz-skina":"Upgrade skin","jak-zdobywać-punkty":"How to get Credits?","wystąpił-problem-817-spróbuj-ponownie-później":"Error 817, please try again later.","twoje-miejsce-w-rankingu":"YOUR LEADERBOARD SPOT","coś-poszło-nie-tak-spróbuj-ponownie":"Something has gone wrong, please try again","przewiń-do-mojego-miejsca":"Scroll to my place","profil-na-key-drop":"Key-Drop Profile","nagroda-za-pierwsze-miejsce":"FIRST PLACE PRIZE","nagroda-za-drugie-miejsce":"SECOND PLACE PRIZE","nagroda-za-trzecie-miejsce":"THIRD PLACE PRIZE","miejsce":"PLACE","gracz":"USER","nagroda":"PRIZE","zobacz-nagrodę":"See the prize","skrzynie-eventowe":"EVENT CASES","otwieraj-skrzynie-eventowe":"open event cases","dołącz-do-bitwy-za-darmo":"Join to the battle for free","powrót-na-stronę-główną":"Back to main page","powrót-do-konkursów":"Back to giveaways","organizator":"Organizer","link-do-konkursu":"Link to giveaway","do-wygrania":"LOOT TO WIN","uczestnicy":"Giveaway Participants","warunki-dołączenia-do-konkursu":"Entry requirements","użyj-specjalnego-kodu-i-doładuj-swoje-konto":"USE THE SPECIAL CODE AND REFILL YOUR BALANCE","wybrano-maksymalną-ilość-przedmiotów-maxgiveawayitems":"Maximum {maxGiveawayItems} items selected","coś-poszło-nie-tak-z-tworzeniem-konkursu":"Something went wrong with the giveaway creation.","wybrano-maksymalną-ilość-skrzyń-maxgiveawaycases":"Maximum {maxGiveawayCases} cases selected","konkurs-anulowany":"Giveaway canceled","błędny-limit-uczestników":"Wrong user limit","konkurs-nie-istnieje":"Giveaway doesn\'t exist","wybierz-minimum-jedną-nagrodę-do-rozlosowania":"Select a minimum of one prize to be drawn","proszę-wybrać-właściwą-datę":"Please select the correct date","minimalna-kwota-doładowania-to-9-pln":"Minimum refill amount is 2 USD","nie-masz-przedmitów-w-swoim-ekwipunku":"You don\'t have prizes in your inventory","proszę-poczekać-10-sekund-przed-następnym-dołączeniem":"Please wait 10 seconds before the next call","aktywne-konkursy":"Active Giveaways","moje-konkursy":"My giveaways","stwórz-nowy-konkurs":"Create a giveaway","moje":"My","stwórz":"Create","wartość-moich-konkursów":"TOTAL GIVEAWAY VALUE","ilość-konkursów":"TOTAL NUMBER OF GIVEAWAYS","ilość-skinów":"NUMBER OF SKINS","zaznaczone-skiny":"SELECTED SKINS","wartość-skinów":"SKINS VALUE","wybrane-skrzynie":"SELECTED CASES","wartość-skrzyń":"CASES PRICE","krok":"Step","wybierz-nagrodę":"CHOOSE PRIZE","ustal-wymagania":"SET REQUIREMENTS","przejdź-do-następnego-kroku":"GO TO NEXT STEP","ustawienia-konkursu":"GIVEAWAY SETTINGS","limit-uczestników":"USER LIMIT","domyślnie-bez-ograniczeń":"UNLIMITED BY DEFAULT","nieograniczona":"UNLIMITED","data-rozpoczęcia":"DATE OF STARTING THE DRAW","ustaw-kwotę":"SET AMOUNT","kwota-jest-zbyt-wysoka-max-maxrefillamount":"Amount is too high (max {maxRefillAMount})","liczba-skrzyń":"NUMBER OF CASES","łączna-cena-srkzyń":"TOTAL CASES PRICE","zaznaczone":"SELECTED","stwórz-konkurs":"Create a giveaway","tu-będzie-twój-link-do-konkursu":"Your Giveaway link","dodaj-nagrody-do-konkursu":"Add giveaway prizes","maksymalnie":"MAX","domyślnie":"Default","sortuj":"Sort","nagrody":"Prizes","konkurs-zakończony":"Giveaway finished","nagroda-nie-została-rozlosowana-z-powodu-niewystarczającej-liczby-uczestników":"Giveaway not drawn due to insufficient number of participants","konkurs-anulowany-przez-organizatora":"Giveaway was canceled by the organizer","kończy-się":"ENDED ON","zwycięzna":"WINNER","zobacz-konkurs":"Watch giveaway","brak-przedmiotów":"No items","aktywne-konkursy-stworzone-przez-ciebie":"My created active Giveaways","konkursy-stworzone-przez-ciebie":"My created Giveaways","konkursy-do-których-dołączyłeś":"Joined Giveaways","zakończone-konkursy":"Finished Giveaways","nie-brałeś-udziału-w-żadnym-konkursie":"You did not take part in any Giveaway","dołącz-do-konkursu":"Join the giveaway","ładuj-więcej":"Load more","wszystkie-zakończone-konkursy":"All Finished Giveaways","champion":"CHAMPION","challenger":"CHALLENGER","legend":"LEGEND","contender":"CONTENDER","amateur":"AMATEUR","wybierz-konkurs-z-wymarzonymi-nagrodami":"**Pick** a Giveaway with your dream skin","spełnij-wszystkie-wymagania-konkursu":"**Complete** all the requirements","odbierz-nowe-skiny-za-darmo":"**Grab** new skins for free!","losowanie-się-rozpoczeło":"The draw is in progress","nowy":"NEW","wystąpił-błąd-nie-można-znależć-konkursu":"There was an error, giveaway cant be found","skopiowane-do-schowka":"Copied to clipboard!","konkurs-rozpoczęty":"Giveaway started!","konkurs-rozpoczyna-się":"Giveaway ends in:","łączna-pula-nagród":"Total Giveaway Value","już-dołączyłeś-do-tego-konkursu":"You have already joined this giveaway","konkurs-jest-pełny":"Giveaway is full","spełnij-wszystkie-wymagania-aby-móc-wziąć-udział-w-tym-konkursie":"Fulfill all requirements to be able to join this giveaway","zwycięzcy-konkursu":"Giveaway Winners","pierwszy":"first","drugi":"second","trzeci":"third","zwycięzca":"Winner","twoje-miejsce-w-konkursie":"YOUR PLACE IN GIVEAWAY","pokaż":"SHOW MY PLACE","doładuj-konto-z-kodem-promocyjnym":"ADD FUNDS WITH PROMOCODE","aby-dołączyć-do-konkursu-doładuj-konto":"To be the part of Giveaway add funds","anuluj-konkurs":"Cancel Giveaway","anulowanie":"Cancelling...","gratulacje":"Congratulations!","stworzyłeś-swój-własny-konkurs-na-key-drop":"You have created your own Key-Drop Giveaway","udostępnij-na-facebooku":"Share on facebook","dołącz-do-mojego-konkursu":"Check out my giveaway","doładuj-konto-aby-zdobyć-bilet-na-darmową-bitwę":"Top up your account to get a ticket for a free battle","bilety-do-darmowych-bitw":"free battle tickets","dołącz-do-bitwy-za-ticketcost":"Join the battle for {ticketCost}","bilet":"ticket","bilety":"tickets","biletów":"tickets","dołączyłeś":"Joined","event-kończy-się-za":"Ranking","przejdź-do-podstrony":"Go to subpage...","bitwa":"Battle","poziomy":"Levels","wymiana":"Exchange","nagrody-są-losowe-i-wszystko-zależy-od-twojego-szczęścia":"The rewards are random and everything depends on your luck.","wkrótce":"Coming Soon","aby-skorzystać-ze-złotego-kodu-doładuj-konto-na-kwotę-minimum-45-pln-w-ostatnich-30-dniach":"To use the golden code, refill your account with a minimum of 1 USD in the last 30 days.","ta-opcja-jest-niedostępna-skontaktuj-się-z-administracją":"This option is not available. Please contact the support.","już-dołączyłeś":"You already joined","opuściłeś-bitwę":"You already left","błąd-systemu":"System error","wymagane-jest-doładowanie-konta":"Account top-up required","wymagane-jest-użycie-kodu-promocyjnego":"Using a Promo Code is required","wymagane-jest-otworzenie-skrzyni":"Open case required","wymagana-jest-łączna-kwota-doładowań":"Top-up amount required","jeśli-liczba-uczestników-zostanie-osiągnięta-konkurs-rozpocznie-się-automatycznie-przed-wyznaczonym-czasem":"If user limit will be reached before the timer the giveaway will start right away","przekroczyłeś-limit-wartości-nagród":"The prize value limit has been exceeded","brak-uprawnień":"No permission","jesteś-twórcą-konkursu":"You are the creator of the giveaway","już-jest-maks-skrzyń":"There\'s already a max of cases","wybrano-maksymalnie-maxgiveawayitems-przedmiotów-lub-zbyt-wysoka-wartość-nagród":"A maximum of {maxGiveawayItems} items have been selected or the prize value is too high","aby-wziąć-udział-w-tym-konkursie-musisz-doładować-konto-za-minimum-amount-w-przeciągu-ostatnich-24-godzin":"To join this giveaway you must add funds to your account for a minimum of **{amount}** within the last 24 hours.","aby-wziąć-udział-w-tym-konkursie-musisz-doładować-konto-za-minimum-amount-w-przeciągu-ostatnich-7-dni":"To join this giveaway you must add funds to your account for a minimum of **{amount}** within the last 14 days.","pozostała-kwota-to":"Remaining amount is","zwycięzcą-zostaje":"The winner is","punkty":"pins","gold":"gold","wybierz-kraj":"CHOOSE A COUNTRY","w-tej-chwili-nie-masz-przedmiotów":"You don’t have any skins at this moment…","ale":"but","możesz-otworzyć-kilka-skrzynek":"you can open some cases!","nie-posiadasz-skinów-w-ekwipunku":"You don\'t have any skins in your inventory","możesz-otwierać-skrzynki-by-je-zdobyć":"you can open cases to get them!","jak-korzystać-z-kart-podarunkowych":"How to use Giftcards","wybierz-sklep-w-którym-chcesz-kupić-kartę-podarunkową":"**Choose** the store from which you want buy Giftcard","wybierz-wartość-karty-podarunkowej":"**Select** the giftcard value","wpisz-kod-otrzymany-e-mailem":"**Enter** the code you received via email","minimum-200-graczy":"MINIMUM 200 PLAYERS","czas-trwania":"DURATION","godziny":"HOURS","potrzebna-weryfikacja":"Verification required","sprzedawanie":"Selling...","sprzedano-pomyślnie":"Sold successfully!","nie-posiadasz-już-tego-przedmiotu":"Now you no longer have this item","twoje-miejsce":"Your place","nie-możesz-skorzystać-ze-swojego-kodu-promocyjnego":"You cannot use your Promo Code.","client-seed-to-jeden-z-czynników-wpływających-na-wynik-losowania-w-algorytmie-provably-fair":"Client Seed is one of the determinants of the draw in the Provably Fair algorithm.","bilety-pozwalają-na-dołączenie-do-darmowych-bitew-przyznawane-są-za-doładowanie-konta":"Tickets allow you to join Free Battles. You can get them for topping up your account.","punkty-eventowe-to-dodatkowa-waluta-dostępna-podczas-wydarzeń-specjalnych-która-może-być-wykorzystana-w-trybach-eventowych":"Event coins are additional currency available during events that can be used in event modes.","aby-móc-dołączyć-do-konkursu-należy-spełnić-odpowiedni-warunek":"In order to join the giveaway, you need to meet the certain requirements.","steam-trade-url-to-link-wymiany-służący-do-handlu-przedmiotami-w-serwisie-steam-podany-trade-url-nie-może-należeć-do-innego-użytkownika":"Steam Trade URL is an exchange link for trading items on Steam.  Provided Trade URL cannot belong to any other user.","złote-monety-to-dodatkowa-waluta-w-naszym-serwisie-pozwala-otwierać-skrzynie-w-sekcji-gold-area":"Gold coins are additional currency in our service. It allows you to open cases in the Gold Area section.","weryfikacja-wykonania-zadania-może-potwać-do-24-godzin-a-w-niektórych-przypadkach-nieco-dłużej":"Verification of the task can take up to 24 hours, and in some cases a little longer.","kwoty-w-naszym-serwisie-przechowywane-są-zawsze-w-usd-kwoty-w-innych-walutach-posiadają-różnice-z-racji-przybliżenia-po-przewalutowaniu":"On our website, funds are always stored in USD, amounts in other currencies vary due to currency conversion.","kod-promocyjny-pozwala-na-zdobycie-bonusu-procentowego-do-doładowania-oraz-czasami-na-zdobycie-gratisowych-środków":"The Promo Code allows you to earn a percentage bonus on top-ups and sometimes get free credits.","co-to-kod-promocyjny":"What is a Promo Code?","czytaj-więcej":"Learn more.","wpisz-kod-promocyjny-n-i-aktywuj-5-bonusu":"Enter promo code \\\\n and **Activate 10% bonus**.","jeżeli-bitwa-zakończy-się-remisem-zwycięzca-wybierany-jest-w-drodze-losowania":"If a Case Battle ends in a draw, the winner is picked randomly.","otwórz-za-darmo":"Open for free","graj-z-botem":"Play against this bot","graj-z-wybranym-botem":"Play against a bot of your choosing","wybierz-bota-z-którym-chcesz-walczyć":"Choose the bot you want to play","rozegrane-bitwy":"TOTAL BATTLES","wygrane-bitwy":"TOTAL WINS","przegrane-bitwy":"TOTAL LOSES","największa-wygrana":"MAX WIN","graczy":"Players","akcje":"ACTIONS","masz-za-mało-punktów-eventowych":"You do not have enough pins","otwieraj-skrzynki-aby-zdobyć-punkty-eventowe":"Open cases to get pins","za-mało-pieniędzy-doładuj-konto":"Not enough money, top up your account","wydarzenie-kończy-się-za":"EVENT ENDS IN","event-ranking":"Event Ranking","koszt-gry":"Card cost","zagraj-ponownie":"PLAY AGAIN","w-legacy-znajdziesz-skrzynie-które-pojawiły-się-w-minionych-wydarzeniach-naszego-serwisu-skrzynie-są-dostępne-przez-ograniczony-czas-nie-zwlekaj-otwórz":"Legacy cases are throwbacks from past events. They\'re only available for a limited time, so don\'t wait, open them!","win-ratio":"WIN RATIO","bitwy-bota":"BOT BATTLES","brak-bitew":"NO BATTLES","watch-battle":"WATCH BATTLE","to-jest-oficjalny-bot-key-drop":"THIS IS OFFICIAL KEY-DROP BOT","win-ratio-to-procent-wygranych-bitw-w-stosunku-do-całkowitej-liczby-rozegranych-bitw-przez-bota-w-ciągu-ostatnich-24-godzin":"Win Ratio is the percentage of wins over the total number of games played by the bot in the last 24 hours","statystyki-bota-pochodzą-z":"BOT STATS ARE TAKEN FROM","ostatnich-24h":"LAST 24H","bot-jest-gotowy-do-bitwy":"The bot is ready to battle","aby-skrócić-czas-oczekiwania-na-pozostałych-graczy-możesz-skorzystać-z-naszych-botów-gry-z-botami-są-również-oparte-na-provably-fair-aby-zagwarantować-uczciwy-wynik":"To shorten the waiting time for other players, you can use our BOTs. BOT games are also based on Provably Fair to guarantee a fair outcome.","aby-wziąć-udział-w-tym-konkursie-musisz-doładować-konto-za-minimum-amount-w-przeciągu-ostatnich-30-dni":"To join this giveaway you must add funds to your account for a minimum of **{amount}** within the last 30 days.","zakończone-champions":"Ended Champions","zakończone-challengers":"Ended Challengers","zakończone-legends":"Ended Legends","zakończone-contenders":"Ended Contenders","zakończone-amateurs":"Ended Amateurs","nasze-boty-są-objęte-algorytmem-provably-fair-aby-zapewnić-100-wiarygodność-i-sprawiedliwość-stoczonych-bitew":"Our Bots are covered by the Provably Fair algorithm to guarantee 100% reliability and fairness of the battles fought.","poprzedni-bot":"Previous bot","następny-bot":"Next bot","zagraj-z-tym-botem":"Play against this bot","zobacz-nasze-boty":"View our bots","stworzony-we-współpracy-z":"Created in cooperation with:","doładuj-konto-z-kodem-youtuber":"Add funds with **{youtuber}** promocode:","odbierz-percent-bonusu":"Get {percent}% Bonus","doładuj-konto-z-kodem":"add funds with promocode","niestety-logowanie-nie-powiodlo-sie-spróbuj-ponownie":"Unfortunately logging in was unsuccessful, please try again!","jeśli-nie-znalazłeś-bitwy-która-ci-odpowiada-stwórz-swoją-własną-bitwę-klikając-na-stwórz-bitwę-key-drop":"**If you haven’t found a Battle that you like,** create your own Battle by clicking on “CREATE BATTLE”.","jeśli-brakuje-ci-graczy-do-bitwy-skorzystaj-z-naszych-botów-boty-nie-różnią-się-niczym-od-innych-użytkowników-i-możesz-to-zweryfikować-za-pomocą-systemu-provably-fair":"**If you lack players for a Case Battle,** use our bots. Bots are no different from other users and you can verify this by using the Provably Fair.","weź-udział-w-specjalnych-darmowych-bitwach-oznaczonych-jako-free-przy-użyciu-biletów":"**Take part in special FREE Battles** by using Tickets.","zaznacz-swoje-skiny-z-ekwipunku-key-drop-które-chcesz-wymienić":"**Select skins from your Key-Drop** inventory to upgrade them.","wybierz-do-15-skinów-jakie-ci-odpowiadają-i-dokonaj-wymiany-wybierając-skiny-nawet-o-wyższej-wartości":"**Choose up to 50 skins** that you want to swap, and make the exchange by selecting higher-value skins.","oferta-ze-skinami-natychmiast-pojawi-się-na-twoim-koncie-steam":"**The trade offer** will appear immediately on your Steam account.","nie-możesz-dołączyć-do-swojego-giveawaya":"You cannot join your giveaway.","napisz-w-trzech-zdaniach-co-najbardziej-podoba-w-skincantor-wszystkie-zadania-będą-weryfikowane-ręcznie-nie-kopiuj-czyjejś-opinii":"<br/> *All tasks will be verified manually, do not copy someone else\'s opinion!","oceń-nas-na-5-i-napisz-co-najbardziej-podoba-ci-się-w-skincantor-2":"Rate us 5★ and write what you like best on Skincantor! #2","ep":"EP","free":"Free","już-odebrałeś-nagrodę-z-tego-poziomu":"You\'ve already claimed the award from this level","plik-jest-za-duży-maksymalna-wielkość-to-2048kb":"The file is too large, the maximum size is 2048Kb","add-amount-to-open":"Add {amount} to open","wygrany-w":"Won in","daily-case":"Daily Case","see-more-daily-cases":"See more Daily Cases","click-the-chosen-avatar-to-download-it":"Click the chosen avatar to download it.","set-the-downloaded-image-as-your-steam-avatar":"Set the downloaded image as your Steam Avatar.","check-avatar":"Check Avatar","your-avatar-is-valid":"Your avatar is valid","checking-avatar":"Checking avatar...","check-again":"Check again","time-remaining-to-open":"Time remaining to open:","open-free-daily-case":"Open free daily case","open-daily-case":"Open daily case","complete-conditions-to-open":"COMPLETE CONDITIONS TO OPEN","time-remaning-to-open":"time remaning to open","deposit-the-amount-requiredvalue-for-today":"Deposit **{requiredValue}** today","open-cases-for-requiredvalue":"Open cases for **{requiredValue}**","win-case-battle-for-min-value-of-requiredvalue":"Win a Case Battle with a minimum win value **{requiredValue}**","create-case-battle-for-min-value-of-requiredvalue":"Fight a Case Battle for min value of **{requiredValue}**","use-upgrader-for-min-value-of-requiredvalue":"Use the Upgrader for at least **{requiredValue}** worth","upgrade-skins-for-min-value-of-requiredvalue":"Upgrade skins for min value of **{requiredValue}**","create-contracts-from-min-value-of-requiredvalue":"Create Contracts from min value of **{requiredValue}**","complete-the-conditionsto-open-for-free":"Complete the objectives\\nto **open for free**","open-for-free":"Open for free","top-drops":"Top Drops","chance":"Chance","price":"Price","range":"Range","odds":"Odds","level-0":"Level 0","twój-avatar-jest-niepoprawny":"Your avatar is incorrect","w-tej-chwili-nie-możesz-otworzyć-tej-skrzynki":"At the moment you cannot open this case","przedmioty-do-zdobycia":"Items for trade","wyrażam-zgodę-na-otrzymywanie-wiadomości-mailowych-od-key-dropcom":"I hereby agree to receive by electronic means information and promotion newsletters from key-drop.com","steam-nie-działa":"Steam not working","w-tej-chwili-steam-boryka-się-z-poważnymi-problemami-z-opóźnieniami-tworzenie-lub-potwierdzanie-transakcji-może-nie-być-możliwe-uprzejmie-prosimy-o-przełożenie-na-później-wszelkich-wypłat-dziękujemy-za-cierpliwość-i-zrozumienie":"The Steam servers are currently experiencing problems. Currently it may not be possible to create and confirm Steam trades. Please delay your deposits and withdrawals until Steam is working normally again. Thank you for your patience and understanding.","oceń-nas-i-napisz-co-najbardziej-podoba-ci-się-w-naszym-serwisie":"Rate us and write what you like the most about our website!","skin-title-nie-jest-już-dostępny-do-wymiany":"Skin {title} no longer available for exchange","zaloguj-się-by-korzystać-ze-skin-changera":"Log in to use Skin Changer","awaiting-confirmation":"Awaiting confirmation","id-transaction":"ID Transaction","you-have":"You have","minutes":"minutes","to-confirm-the-transaction-on-steam":"to confirm the transaction on Steam","after-this-time-the-trade-offer-will-be-canceled-on-steam":"After this time, the trade offer will be canceled on Steam","transaction-successful":"Transaction successful","the-exchange-offer-has-been-completed":"The exchange offer has been completed","transaction-error":"Transaction error","the-exchange-offer-has-been-canceled":"The exchange offer has been canceled","transaction-cancelled":"Transaction canceled","the-exchange-offer-has-been-cancelled":"The exchange offer has been canceled","event-pass":"Event Pass","pass":"Pass","premium":"Premium","case-opening":"CASE OPENING","drawing-order":"DRAWING ORDER","sell-all":"SELL ALL","acceleration":"ACCELERATION","mute-sound":"MUTE SOUND","ustawiono-min-kwotę-price":"A min. amount is set: {price}","ukryj-zasady":"Hide rules","pokaż-zasady":"Show rules","ukryj-skróty-klawiszowe":"Hide keyboard shortcuts","pokaż-skróty-klawiszowe":"Show keyboard shortcuts","domyślny":"Default","cena-rosnąca":"Ascending price","dostępne-wkrótce":"Coming soon...","twoja-skrzynka":"Your case","wypłać-pieniądze":"Withdraw money","ustaw-swoje-social-media-w-skrzynce":"Set up your social media in case","twój-prywatny-vip-konsultant":"Your personal VIP consultant:","dostępne-środki":"Available funds:","zobacz-wszystkie-skrzynki-youtuberów":"SEE ALL YOUTUBER CASES","min":"min","sec":"sec","wznów":"resume","zatrzymaj":"pause","bitwy-live":"live battles","wycisz-dźwięk":"Mute","przywołaj-wszystkie-boty":"Summon all bots","szansa":"Chance","zakres":"Range","najlepszy-drop":"Best Drop","najlepsze-ulepszenie":"Best Upgrade","dropy-użytkownika":"User Drops","wszystkie-dropy":"All Drops","wszystkie-ulepszenia":"All Upgrades","oferta-odrzucona":"OFFER REJECTED","wykryliśmy-że-twoja-oferta-została-odrzucona-jeśli-tego-nie-zrobiłeś-twoje-konto-jest-zagrożone":"We have detected that your offer has been declined. If you have not done so, your account is at risk","postępuj-zgodnie-z-poniższymi-instrukcjami":"Follow the instructions below.","przejdź-do-witryny":"Go to the site","wycofaj-autoryzację-wszystkich-innych-urządzeń":"Withdraw authorization of all other devices","live-chat-jest-chwilowo-niedostępny":"Live chat is temporarily unavailable.","czy-chcesz-skorzystać-z-supportu":"Do you want to use support?","select-skins-from-your-key-drop-inventory-to-upgrade-them":"**Select skins** from your Key-Drop inventory to upgrade them.","then-select-a-multiplier-or-search-for-the-specific-skins-you-want-to-upgrade-them-to":"**Then select a multiplier** or search for specific skins you want to upgrade to.","also-you-can-use-the-balance-to-increase-your-chance-of-a-successful-upgrade":"**Also, you can use the balance** to increase your chance of a successful upgrade.","log-in-to-continue":"Log in to continue","log-in":"Log in","data-loading-error":"Data loading error","you-dont-have-any-skins":"You don\'t have any skins","open-cases":"Open cases","no-data-for-selected-criteria":"No data for selected criteria","unknown-error-try-again":"Unknown error. Try again","unknown-error":"Unknown error","invalid-selection":"Invalid selection","upgrade-below-1-is-not-possible":"Upgrade below 1% is not possible","you-can-select-max-15-skins":"You can select max 15 skins","return":"Return","back-to-home-page":"Back to home page","history":"History","upgrades-history":"Upgrades history","volume-off":"Volume off","volume-on":"Volume on","instant-result-display-mode-off":"Instant result display mode off","instant-result-display-mode-on":"Instant result display mode on","change-multiplier":"Change multiplier","roll":"Roll","triangle-mode":"Triangle Display","circle-mode":"Circle Display","items":"items","choose-your-item":"Choose your item","item-that-you-want-to-upgrade":"Item, that you want to upgrade","that-you-want-to-upgrade":"that you want to upgrade","choose-item":"Choose item","item-that-you-want-to-receive":"Item, that you want to receive.","that-you-want-to-receive":"that you want to receive.","upgrade-chance":"Upgrade chance","balance":"Balance","use-balance":"Use balance","win":"WIN!","lost":"LOST","selected":"Selected","find-skin":"Find skin","rarity":"Rarity","jak-korzystać-z-upgradera-skinów":"HOW TO USE SKIN UPGRADER","wybierz-skin":"Select skin","wybierz-skina-którego-chcesz-ulepszyć-ze-swojego-ekwipunku-key-drop-dodatkowo-możesz-zwiększyć-swoje-szanse-dodając-środki-z-balansu":"Choose the skins you want to upgrade from your Key-Drop inventory. In addition, you can increase your chances by adding funds.","wybierz-skin-który-chcesz-wygrać-z-oferowanej-listy-po-prawej-stronie-możesz-zmienić-wynik-korzystając-z-przycisków-zwińrozwiń":"Select the skin you want to win from the offered list on the right. You can change the result using the Collapse/Expand buttons.","kliknij-przycisk-upgrade":"Click the UPGRADE button","w-przypadku-jeśli-wygrasz-twój-aktualizowany-przedmiot-pojawi-się-w-twoim-ekwipunku-jeśli-przegrasz-stracisz-swój-skinbalans":"In case you win, your updated item will appear in your inventory. If you lose, you will lose your skin/balance.","zakres-szans":"RANGE OF CHANCES","historia-szans":"HISTORY OF CHANCES","nowe":"NEW","dołącz-do-eventu":"JOIN EVENT","yes":"yes","no":"no","nie-posiadasz-wystarczającej-ilości-paliwa":"You don\'t have enough Credits","zobacz-jak-zdobywać-paliwo":"How to earn points?","nie-możesz-zdobyć-darmowego-paliwa":"You can\'t get free EP","wydarzenie-nie-jest-aktywne":"The event has ended","samochód-nie-został-wybrany":"The car hasn\'t been selected","zebrałeś-już-dzisiaj-darmowe-paliwo":"You\'ve already collected free EP today","nie-można-było-zapisać-części":"It was impossible to save the part","nie-znaleźiono-części":"No parts found","części-samochodowe-są-niepoprawne":"Car parts are not right","samochód-został-sprzedany":"The car was sold","nie-możesz-wybrać-dwóch-części-z-tej-samej-kategorii":"You can\'t select two parts from the same category","nie-możesz-odebrać-nagrody":"You can\'t claim the prize","nie-możesz-kupić-samochodu":"You can\'t buy a car","kupiłeś-już-ten-model":"You have already bought this model","model-nie-istnieje":"The model doesn\'t exist","za-mało-pieniędzy":"Not enough money","transakcja-nie-powiodła-się":"The transaction has failed","poczekaj-2-sekundy":"Wait 2 seconds","jak-zdobyć-ep":"How to get Credits?","workshop":"Workshop","paliwo":"Credits","poziom-eventu":"Event Level","łącznie-zebranych":"Total collected","charger":"Charger","supra":"Supra","charger-team":"Charger Team","supra-team":"Supra Team","jak-zdobyć-punkty-eventowe":"How to get event points","otwieraj-skrzynie-eventowe-to-właśnie-w-nich-oprócz-skinów-możesz-trafić-bonusowe-paliwo":"Open event cases where you can get extra Credits in addition to skins!","zasil-swoje-konto-dowolną-metodą-płatności-i-otrzymaj-bonusowe-paliwo":"Top up your account with the specified payment methods and receive bonus Credits!","otwórz-naklejke-z-poziomem-1-aby-uzyskać-dostęp-na-wyższy-poziom":"Open a **level 1** card to access the **next level**.","naklejek":"cards","potrzebujesz-coins-paliwa-aby-móc-otworzyć-skina-sprawdź-jak-to-zrobić":"You need {coins} Credits to be able to open the skins! Check out how to do it.","wystąpił-nieoczekiwany-problem-podczas-odkrywania-naklejek":"The unexpected problem occurred when uncovering cards.","zbieraj":"Collect","zbieraj-naklejki-z-każdego-poziomu-im-wyższy-poziom-naklejki-tym-większa-szansa-na-uzyskanie-lepszej-skórki":"COLLECT CARDS FROM EACH LEVEL. THE HIGHER THE LEVEL OF THE CARD, THE GREATER THE CHANCE OF GETTING A BETTER SKIN.","aby-odblokować-kolejny-poziom-naklejek-zbierz-co-najmniej-jedną-naklejkę-z-poprzedniego-poziomu":"TO UNLOCK THE NEXT LEVEL OF CARDS, COLLECT AT LEAST ONE CARD FROM THE PREVIOUS LEVEL.","nowe-naklejki":"NEW CARDS","nowe-naklejki-są-automatycznie-generowane-po-ponownym-uruchomieniu-strony":"NEW CARDS ARE AUTOMATICALLY GENERATED WHEN THE SITE IS RESTARTED.","im-więcej-paliwa-zużyjesz-tym-lepszą-skórkę-otrzymasz":"The more Credits you use, the better skin you get.","twoja-nagroda":"Your reward","minimalny-koszt":"The minimum cost","wymień-paliwo-na-skiny":"Exchange Credits for skins","im-więcej-paliwa-wymienisz-tym-większa-szansa-na-lepszy-skin":"The more Credits you exchange, the greater the chance of getting a better skin.","wpisz-ilość-paliwa-do-wymiany":"Enter the amount of Credits to be exchanged","wykorzystaj-paliwa":"Use the Credits","wpisz-wybraną-przez-siebie-ilość-paliwa-w-celu-wymiany-na-skina":"Enter the preferred amount of Credits to be exchanged for skins.","im-więcej-paliwa-wykorzystasz-tym-większa-szansa-na-lepszy-skin":"The more Credits you use, the greater the chance of getting a better skin.","doładuj-swoje-konto-lub-otwórz-skrzynie-eventowe-dzięki-zdobytemu-paliwu-odblokujesz-więcej-poziomów-i-wspaniałe-nagrody":"Top up your account or open event cases! Earn Credits to will unlock more levels and great rewards.","twój-poziom":"Your Level","następny-poziom":"Next Level","kup":"Buy","zebrane":"Collected","brak-nagrody":"No reward","szczegóły-dotyczące-poziomowania":"Details of leveling","gratulacje-udało-ci-się":"Congrats, you made it!","zaloguj-się-aby-móc-odbierać-nagrody":"Log in to be able to receive rewards","aktywowany":"Activated","czy-na-pewno-chcesz-kupić-premium-pass":"Are you sure you want to buy a premium pass?","zbieraj-paliwo-wspinaj-się-w-rankingu-i-zdobywaj-najlepsze-skórki":"Collect Credits, move up in the Leaderboard and get the best skins.","ilość-zebranego-paliwa":"THE AMOUNT OF CREDITS COLLECTED","czy-znajdujesz-się-w-rankingu-zbierz-jak-największą-ilość-paliwa-aby-znaleźć-się-na-podium-i-otrzymać-najlepsze-skiny":"**Are you in the ranking? ** Collect as much Credits as possible to be on the top of the ranking and receive the best skins.","wybierz-samochód-i-dostosuj-go-aby-wyglądał-niesamowicie-zbieraj-codziennie-paliwo-oraz-jednorazowo-końcową-nagrodę-za-ukończony-projekt":"Select a car and customize it to look amazing. Collect daily EP and a one-time final reward for a completed project.","wybierz-samochód-nad-którym-chciałbyś-pracować-nie-możesz-tego-zmienić-więc-wybieraj-ostrożnie":"Select the car you would like to work on. You CANNOT change it later, so choose carefully.","odblokuj-części-samochodowe-otwierając-skrzynie-eventowe-i-dostosuj-swój-samochód-tak-jak-chcesz":"Unlock car parts by opening event cases and customize your car the way you want.","odbieraj-dzienną-ilość-paliwa-a-na-koniec-ostateczną-nagrodę-po-odebraniu-ostatecznej-nagrody-nie-możesz-już-personalizować-samochodu":"Collect a daily amount of EP, and the final reward in the end(once you collect the final reward, you can no longer personalize the car).","wybierz-swój-wymarzony-samochód":"Pick your dream car","zaloguj-się-żeby-wybrać-samochód":"Log in to select a car","kup-car-za-amount-ep":"buy {car} for {amount} EP","po-ulepszeniach-twój-samochód-będzie":"After the upgrades, your car will","zarabiać-dla-ciebie-więcej-ep-każdego-dnia":"earn more EP for you every day","każdego-dnia":"EVERY DAY","zbierz-amount-ep":"Collect {amount} EP","zebrałeś-dzisiaj-darmowe-ep":"You have already collected free EP today","chcę-odebrać-moją-nagrodę":"I would like to claim my prize","pokaż-otrzymaną-nagrodę":"Show the prize you received","czy-jesteś-pewien-że-chcesz-odebrać-nagrodę":"Are you sure about claiming your prize?","nie-będziesz-miał-możliwości-ulepszyć-bardziej-swojego-samochodu":"You won\'t be able to upgrade your car more.","wartość-samochodu":"Car value","kiedy-ulepszasz-swój-samochód-każda-zmiana-powoduje-zdobywanie-punktów-eventowych-jeśli-jesteś-gotowy-możesz-przestać-ulepszać-swój-samochód-i-odebrać-nagrodę":"Once you upgrade your car, each change earns you event points. You can stop upgrading your car and collect your reward if you are ready. Please bare in mind that value does not represent real money. Value of the final reward will be based on calculated multiplier.","potrzebujesz-coins-punktów-eventowych":"You need {coins} Event Points!","dodge":"dodge","neon":"neon","paint":"paint","pattern":"pattern","windows":"windows","splitters":"splitters","spoilers":"spoilers","wheels":"wheels","special":"special","orange":"orange","purple":"purple","pink":"pink","white":"white","yellow":"yellow","green":"green","blue":"blue","red":"red","old":"old","grey":"grey","black":"black","abstract":"abstract","racing":"racing","geometric":"geometric","fire":"fire","simple":"simple","furious":"furious","light":"light","medium":"medium","dark":"dark","cheetah":"cheetah","carbon":"carbon","basic":"basic","power":"power","wind":"wind","wing":"wing","ducktail":"ducktail","avenger":"avenger","flame":"flame","sport-gold":"sport-gold","sport":"sport","cross":"cross","inferno":"inferno","fortune":"fortune","gravity":"gravity","deception":"deception","blower":"blower","sidepipes":"sidepipes","addons":"addons","czy-na-pewno-chcesz-kupić-ten-samochód":"Are you sure you want to buy this car?","none":"none","mie-możesz-jeszcze-odebrać-nagrody":"You can\'t claim the prize yet","d":"d","g":"h","m":"m","s":"s","zostało-do-aktywacji":"is left to activate","voucher-to-symboliczny-skin-który-może-być-używany-i-wymieniany-w-trybach-takich-jak-contracts-upgrader-czy-skin-changer-nie-można-przesłać-go-na-swoje-konto-steam":"Voucher is a symbolic skin that can be used and exchanged in modes such as Contracts, Upgrader and Skin Changer. It cannot be withdrawn to your Steam account.","wybierz-samochód-aby-odebrać-darmowe-paliwo":"Choose a car to receive free EP","spróbuj-ponownie-jutro":"Try again tomorrow","nie-możesz-odebrać-darmowego-paliwa-bo-twoje-auto-ma-za-małą-wartość":"You can\'t collect free EP because your car has too little value.","usprawnij-swoje-auto-żeby-zwiększyć-jego-wartość":"Upgrade your car to increase its value.","wybrane-części-nie-są-dostępne":"Selected parts not available","nie-możesz-użyć-wybranych-części":"You can\'t use selected parts","po-sprzedazy-samochodu-nie-możesz-już-zmieniac-w-nim-części":"Once you sell your car, you can no longer change parts in it.","tylko-jedna-część-z-danej-kategorii-może-być-użyta":"Only one part from a category can be used.","po-sprzedaży-samochodu-nie-możesz-już-zmieniac-w-nim-części":"Once you sell your car, you can not change parts in it.","nie-możesz-jeszcze-odebrać-nagrody":"You can not yet claim your prize.","sprzedaż-samochodu-będzie-możliwa-date":"Selling the car will be possible %date%.","po-kupnie-samochodu-nie-możesz-kupić-ponownie":"Once you buy a car, you can not buy again.","wybierz-inny-model":"Choose another model.","doładuj-konto-abu-kupić-samochód":"Top up your account to buy a car.","suma-wartości-bitw-nie-moze-przekraczać-limit_value":"The sum of the value of the battles must not be higher than {limit_value}.","edytuj-client-seed":"Edit client seed","nie-przegap-szansy-na-dodatki-do-swojego-samochodu":"Do not miss the chance to get addons for your car","kup-chargera-za-amount-ep":"buy charger for {amount} EP","kup-supre-za-amount-ep":"buy supra for {amount} EP","adres-portfela":"Wallet address","identity":"Identity","e-mail-do-wypłaty-środków":"E-mail for payout of funds","opłata-za-wypłatę":"Payout fee","wprowadź-swoje-dane":"Enter your data","wybierz-network":"Choose network","coś-poszło-nie-tak-skontakuj-się-ze-swoim-konsultantem-po-więcej-informacji":"Something has gone wrong, contact your consultant for more information.","płatność-przebiegła-pozytywnie-wkrótce-otrzymasz-swoje-środki":"The payment went through successfully, you will receive your funds soon.","w-tej-skrzyni-eventowej-możesz-zdobyć":"In this event case you can get:","congratulations":"Congratulations","your-reward-from-workshop":"Your reward from Workshop","wsparcie-dla-ukrainy":"Support for Ukraine","wszystkie-zebrane-środki-zostaną-przeznaczone-na-zakup-sprzętu-do-akcji-ratowniczych-w-regionie":"All funds will be used to purchase equipment for rescue operations in the region.","donate-ukraine":"Donate Ukraine","twój-partnerski-url":"Your affiliate url","odbierz-swój-html-banner":"Claim your HTML banner","twój-konsultant":"Your consultant","zagraj-bitwę-dla-minimum-3-graczy-i-koszcie-dołączenia-requiredvalue":"Fight a battle for a minimum of 3 players and cost to join **{requiredValue}**.","wygraj-bitwę-dla-minimum-3-graczy-i-wygranej-wartej-minimum-requiredvalue":"Win a battle for a minimum of 3 players and a win value of at least **{requiredValue}**.","zagraj-bitwę-dla-minimum-4-graczy-i-koszcie-dołączenia-requiredvalue":"Fight a battle for a minimum of 4 players and cost to join **{requiredValue}**.","wygraj-bitwę-dla-minimum-4-graczy-i-wygranej-wartej-minimum-requiredvalue":"Win a 4+ Player Battle with a win value of at least **{requiredValue}**.","sprzedaj-skiny-o-łącznej-wartości-requiredvalue":"Sell skins with a total value of **{requiredValue}**.","wygraj-skin-warty-3-krotność-ceny-skrzyni-minimalna-cena-skrzyni-to-requiredvalue":"Win a skin worth 3 times the price of the case (minimum price of the case is **{requiredValue}**).","podejmij-próbę-ulepszenia-skinów-o-minimalnej-łącznej-wartości-requiredvalue-używając-mnożnika-x2-lub-wyższego":"Try to upgrade skins with a minimum total value of **{requiredValue}**, using a multiplier of x2 or higher","dołącz-do-klasycznej-bitwy":"Join Classic Battle","dołącz-do-bitwy-underdog":"Join Underdog Battle","classic":"Classic","underdog":"Underdog","tryb-underdog":"Underdog mode","tryb-classic":"Classic mode","case-battles":"Case Battles","underdog-case-battles":"Underdog Case Battles","tryb-case-battle-w-którym-wygrywa-gracz-z-najmniejszą-łączną-wartością-wylosowanych-przedmiotów":"Case Battle mode, in which the Player with the lowest total value of drawn items wins.","select-mode-for-your-case-battle":"Select mode for your Case Battle","spełnij-warunki-aby-otworzyć-za-darmo-rozpocznij-otwieranie-codziennej-darmowej-skrzyni-od-poziomu-1":"Complete the conditions to **Open Free Cases.**\\nStart opening your Daily Cases with Level 1.\\nCase progress resets daily.","zapisane":"Saved","zaloguj-się-aby-otworzyć-za":"Log in to open","sprawdzanie-salda":"Checking balance...","otwórz-za":"Open for","otwórz-ponownie":"Open Again","sprawdź-zakres-szans":"CHECK ODDS RANGE","program-systemu-partnerskiego":"Partnership program","wykonaj-udane-ulepszenie-skinów-o-minimalnej-łącznej-wartości-requiredvalue-używając-mnożnika-x2-lub-wyższego":"Upgrade skins worth a total of **{requiredValue}**, with a x2 or higher multiplier","complete-the-conditions-to-open-for-free":"Complete the objectives to open for free","saldo-portfela":"Wallet balance","przejdź-do-profilu":"Go to profile","najpopularniejsze-skrzynki":"Most popular cases","nie-znaleziono-wyników":"No results found","znalezione-wyniki":"Results found","case":"Case","contract":"Contract","free-case-battle":"Free Case Battle","term-of-service":"Terms of Service","privacy-policy":"Privacy Policy","my-account":"My Account","get-free":"Get Free","użyj-promocode":"Use Promo Code","are-you-sure":"Are you sure?","are-you-sure-you-want-to":"Are you sure you want to","sell-all-selected-items":"sell all selected items?","choose-skins":"Choose skins","sell-selected-for":"Sell selected for","confirm":"Confirm","cancel":"Cancel","could-not-sell-the-skins":"Could not sell the skins","obsługa-klienta":"Customer service","darmowa-skrzynka":"FREE CASE","otrzymaj-za-darmo":"RECEIVE FOR FREE","livedrop":"livedrop","all-drop":"All Drops","use-golden-code":"Use Golden Code!","use-the-code-to":"Use the code to","get-the-bonus":"Get the Bonus!","what-is-golden-code":"What is Golden Code?","enter-the-golden-code-and":"Enter the Golden Code and","activate-the-5-bonus":"Activate the 5% Bonus.","enter-the-golden-code":"Enter the Golden Code","use-promo-code":"Use Promo Code!","what-is-promo-code":"What is a Promo Code?","enter-the-promo-code-and":"Enter the Promo Code and","enter-the-promo-code":"Enter the Promo Code","history-of-codes":"History of codes","promotion-code":"Promo Code","bonus-amount":"Bonus Amount","date-of-use":"Date of Use","activated":"Activated","apply":"Apply","users":"Users","upgrades":"Upgrades","and-100-more":"and 100+ more","customer-service":"Customer Service","copyright-2021-key-drop-all-rights-reserved":"Copyright © 2021 Key-Drop. All Rights Reserved.","with-us-you-can-easily-get-steam-origin-and-uplay-games-keys-are-sent-immediately-100-satisfaction-guaranteed":"With us, you can easily get Steam, Origin and Uplay games. Keys are sent immediately. 100% satisfaction guaranteed.","finalta-play-technologies-llp-71-75-shelton-street-covent-garden-london-united-kingdom-wc2h-9jq":"Finalta Play Technologies LLP (71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ)","zaloguj-za-pomocą-steam":"LOG IN WITH STEAM","pobierz-i-dodaj-do-przeglądarki-drodly-extension":"Download and add Drodly Extension to your browser","pobierz-rozszerzenie-drodly-do-swojej-przeglądarki":"Download the Drodly extension to your browser","pauza":"Pause","kod-złoty":"Golden Code","vikings":"Vikings Event","changer":"Changer","viking-cards":"Viking Cards","jesteś-twórcą":"Are you a content creator?","classic-case-battles":"Classic Case Battles","case-battle-mode":"Case Battle Mode","counter-strike-2-week":"Counter Strike 2 Week","balloon":"Balloon","counter-strike-2-free-cases":"COUNTER STRIKE 2 - FREE CASES","open-free-cases":"Open Free Cases","refill-your-account-and-get-10-cases-with-awesome-skins-for-free":"Top-up your account and get 12 cases with awesome skins for free","back":"Back","refill-amount-to-unlock-next-level":"Top-up {amount} to unlock next level.","each-case-can-be-opened-once":"Each case can be opened once","conquest":"Conquest","najlepsze-walki":"Best battles","lub":"Or","dodaj-środki-aby-otworzyć":"Add funds to open","twój-system-partnerski-jest-zablokowany":"Your affiliate system is blocked.","jest-to-wynikiem-nadużywania-jego-mechaniki":"This is a result of overusing its mechanics.","nie-jesteś-zbanowany-możesz-nadal-korzystać-ze-wszystkich-innych-funkcji-key-drop":"You are not banned. You can still use all other Key-Drop features.","odkrywaj-nowe-niesamowite-mapy-i-ciekawe-zadania":"Discover amazing new maps and interesting tasks.","welcome-to-the-key-drop":"Welcome to the Key-Drop","zdobywaj-kolejne-pola-z-misjami":"Get more fields with missions","play-conquest":"PLAY CONQUEST","how-to-play":"how to play","conquest-game":"Conquest Game","complete-missions":"Complete missions","get-rewarded":"Get rewarded","how-to-play-conquest":"How to play Conquest","zdobywaj-kolejne-pola-na-mapie":"Gain more fields on the map","by-przejść-na-kolejne-pola-mapy-odkrywaj-je-wykonując-misje-widoczne-w-oknie-szczegółów-misji":"To move on to other fields of the map, explore them by completing missions, visible in the mission details window","po-ich-zrealizowaniu-wszystkie-sąsiadujące-pola-zostaną-odblokowane-a-ty-zbliżysz-się-do-celu":"Once they are completed, all adjacent fields will be unlocked, bringing you closer to your goal!","wybierz-własną-drogę-do-finałowego-pola-gry":"Pick your own way towards the final game field","sam-zdecyduj-jaką-ścieżką-dotrzesz-do-ostatniego-pola-na-mapie-im-więcej-pól-odkryjesz-tym-więcej-punktów-zdobędziesz":"Decide for yourself what path you\'ll follow to reach the final field on the map! The more fields you discover, the more points you will score!","znajdź-checkpointy-i-wykonaj-specjalną-misję-końcową":"Find checkpoints and complete a special final mission","punkty-pomiędzy-polami-na-mapie-to-checkpointy-na-których-otrzymujesz-informacje-niezbędne-do-ukończenia-finałowej-misji":"The points between fields on the map act as checkpoints, providing you with the necessary information to accomplish the final mission.","przejście-przez-nie-jest-konieczne-do-zakończenia-conquestu-użyj-zdobytego-w-trakcie-gry-kodu-wprowadź-go-podczas-misji-na-ostatnim-polu-i-zalicz-conquest":"Passing through them is necessary to complete the conquest. Use the code obtained during the game! Enter it during the mission on the last field and pass the conquest","wszystko-jasne":"All clear","swoją-pierwszą-misję-w-conquest":"your first mission in Conquest","read-faq":"read faq","are-you-content-creator":"Are you a creator?","contact-our-support-manager-to-discuss-partnership-opportunities":"Contact our Support Manager to discuss partnership opportunities!","wybierz-poziom-trudności-wypełniaj-misje-i-zdobywaj-nagrody":"Choose the difficulty level, complete missions, and earn rewards.","wypełniaj-misje-i-zdobywaj-nagrody":"complete missions and win rewards","wybierz-poziom-trudności":"Select a difficulty level","contact":"Contact","our":"our","support-manager":"Support Manager","to-discuss-partnership-opportunities":"to discuss partnership opportunities!","skontaktuj-się-z":"Get in touch with","naszym":"our","konsultantem":"consultant","żeby-dowiedzieć-się-o-możliwościach-programu-partnerskiego":"to learn about the possibilities of the affiliate program!","żeby-dowiedzieć-się-więcej-o-programie-partnerskim":"to learn more about the affiliate program!","skontaktuj-się":"Get in touch","z-naszym":"with our","nie-można-anulować-ponieważ-użytkownicy-dołączyli-już-do-konkursu":"Impossible to cancel because users have already joined the giveaway","aprodi-ltd-stavrou-74-1st-floor-office-102-strovolos-2035-nicosia-cyprus":"APRODI LTD (Stavrou, 74, 1st floor, Office 102, Strovolos, 2035, Nicosia, Cyprus)","activate-the-bonus":"Activate the Bonus.","you-do-not-have-any-skins":"You do not have any skins","zapłać-skinami-by-otrzymać-punky-eventowe-złote-monety-oraz-10-bonusowego-doładowania":"Pay with skins to receive event points, gold coins, and +10% deposit bonus","get-free-gold":"GET FREE GOLD","get-free-daily-case":"GET FREE DAILY CASE","zdobądź-darmową-codzienną-skrzynię":"Get a free Daily Case","zdobądź-codzienną-skrzynię":"Collect the Daily Case","niepoprawna-warto-zamwienia":"Invalid order value","nieznany-bd":"Unknown error","please-wait-count-minutes":"please wait {count} minutes..","warto-twojej-oferty-poza-zakresem":"The value of your offer is out of range:","czas-się-skończył":"Time has run out","najlepsze-bitwy":"Best battles","cośposzło-nie-tak-skontakuj-sięze-swoim-konsultantem-po-więcej-informacji":"Something has gone wrong, contact your consultant for more information.","sprawdź-roll":"Check roll","zdobyty-z-upgradera":"Obtained from the Upgrader","zdobyty-ze-skrzyni":"Retrieved from the case","zdobyty-z-case-battle":"Obtained from Case Battle","zdobyty-z-konkursu-key-drop":"Obtained from KEY-DROP contest","zdobyty-z-konkursu-użytkownika":"Obtained from a user competition","przewodnik-aktywacji":"Activation guide","na-wymianę":"For exchange","otrzymany":"Obtained","ulepszony":"Upgraded","został-ulepszony":"It has been upgraded","został-wymieniony":"It has been exchanged","wygrano-w-kontrakcie":"Won in the Contract","wygrano":"Won","wygrano-w":"Won in","wygrany-w-hit-a-hole":"Won in Hit a Hole","ulepsz-wszystkie":"Upgrade all","możesz-wypłacić-te-przedmioty-w-swoim-profilupanelprofilpmy_winner":"You can withdraw these items in your [profile](/panel/profil?p=my_winner)","if-you-change-the-difficulty-level-your-current-progress-will-we-reset":"if you change the difficulty level your current progress will be reset","need-for-skins":"Need for Skins","trunk":"Trunk","car-stickers":"Viking Cards","wybierz-bagażnik-samochodu-z-którego-chcesz-skorzystać":"Select the car boot you wish to use","wpisz-ile-paliwa-chcesz-wydać":"Enter how many Event Points you want to spend","odbierz-nagrodę-z-bagażnika":"Claim your prize from the boot","verify-that-you-are-not-robot":"Verify that you are not robot","an-error-has-occurred":"An error has occurred.","before-you-start-choose-mission-difficulty-level":"Before you start, choose mission difficulty level","choose-mission-difficulty-level":"Choose mission difficulty level","hover-to-see-details":"Hover to see details","choose":"Choose","example-missions":"Example missions","sell-items":"Sell items","sell-selected-skins":"Sell selected skins","codes-could-not-load":"Codes could not load","no-codes":"No codes","conq":"Conq","your-reward-from-treasure":"Your reward from treasure","session-expired-please-refresh-the-page":"Session expired, please refresh the page","we-could-not-check-if-you-are-not-robot":"We could not check if you are not a robot","top-up-your-account":"Top up your account","you-have-to-be-logged-in":"You have to be logged in","the-code-did-not-pass-validation":"The code did not pass validation","the-code-is-wrong":"The code is wrong","you-cannot-use-the-code":"You cannot use the code","the-code-already-expired":"The code already expired","the-code-has-been-already-used":"The code has been already used","code-was-not-approved":"The code was not approved","the-code-is-not-correct":"The code is not correct","wait-10-seconds":"Wait 10 seconds","niepoprawny-kod-captchy":"Incorrect captcha code","dodałduj-swoje-konto":"Top up your account","musisz-byc-zalogowany":"You must be logged in","kod-nie-jest-poprawny":"The code is not correct","kod-stracił-już-ważność":"The code has already expired","kod-został-już-uzyty":"The code has been already used","cos-poszło-nie-tak":"Something has gone wrong","potwierdź-że-nie-jesteś-robotem":"Confirm that you are not a robot","codeModal.activated":"Activated","codeModal.apply":"Apply","codeModal.promotionCode":"PROMO CODE","codeModal.bonusAmount":"BONUS AMOUNT","codeModal.dateOfUse":"DATE OF USE","codeModal.codeHistory":"Code history","codeModal.usePromoCode":"use Promo Code!","codeModal.useGoldenCode":"use Golden Code!","codeModal.error.depositRequired":"A Deposit is required","codeModal.error.notLoggedIn":"You are not logged in","codeModal.error.validation":"There was a validation problem","codeModal.error.yourCode":"There was a problem with your code","codeModal.error.expiredCode":"This code has already expired","codeModal.error.usedCode":"This code was already used","codeModal.error.spamError":"Spam error","codeModal.error.default":"An error occurred","codeModal.error.verifyReCaptcha":"Confirm that you are not a robot","codeModal.error.gifCard":"Are you trying to use giftcard code? <a>If yes please use it HERE instead</a>","promoCodeModal.title":"What is a Promo Code?","promoCodeModal.description":"Enter the Promo Code and <bonus>Activate a {{bonusAmount}} Bonus</bonus>","promoCodeModal.enterPromoCode":"Enter the Promo Code","goldenCodeModal.title":"What is a Golden Code?","promoCodeModal.infoCode":"The Promo Code allows you to earn a percentage bonus on top-ups and sometimes get free credits.","goldenCodeModal.descriptionBonus":"Activate Bonus","goldenCodeModal.infoCode":"Golden Codes allow you to quickly add Free Gold to your account. To learn how to find Golden Codes, follow us on social media.","goldenCodeModal.description":"Remember! Golden Codes have <bonus>a limited number of uses.</bonus>","goldenCodeModal.enterGoldenCode":"Enter the Golden Code","walletBalance":"Wallet Balance","skinsBalance":"Skins Balance","error.balance.title":"Could not fetch balance","error.balance.message":"Check your internet connection and refresh the page","error.eventBalance.title":"Could not fetch event balance","error.eventBalance.message":"Check your internet connection and refresh the page","edit":"Edit","save":"Save","saving":"saving...","saved":"Saved!","event.closure.title":"The event is now over","event.closure.description":"Be sure to use your Event Points before the event ends","event.closure.lost":"otherwise they will expire.","event.title":"planets of skins","vikings-event":"Vikings Event","muteSound":"Mute Sound","unmuteSound":"Unmute Sound","addToFavorite":"Add to favorites","removeFromFavorite":"Remove from favorites","tooManyFavoriteCases":"You have too many favorite cases <br/> Remove some to be able to add new ones","fastModeOn":"Fast Mode On","fastModeOff":"Fast Mode Off","customerService":"Customer Service","myAccount":"My Account","keyDrop":"Key-Drop","footer.andMore":"and 100+ more","openedCases":"Opened Cases","caseBattles":"Case Battles","followUs":"Follow us","navigation.provablyFair":"Provably Fair","navigation.termOfService":"Terms of Service","navigation.privacyPolicy":"Privacy Policy","navigation.support":"Support","navigation.myAccount":"My Account","navigation.affiliateSystem":"Affiliate System","navigation.dailyCase":"Daily Case","navigation.caseBattle":"Case Battle","navigation.skinChanger":"Skin Changer","navigation.upgrader":"Upgrader","navigation.contracts":"Contracts","navigation.freeGold":"Free Gold","steamIsDownInfo":"At the moment, <strong>Steam is facing significant latency problems.</strong> The creation or confirmation of trades might not be possible. We politely request that you delay any withdrawals. We appreciate your patience and understanding.","promoCode.validation.max16chars":"The Promo Code should be a maximum of 16 characters","promoCode.saved":"The Promo Code has been saved","promoCode.validation.moreThan2chars":"The Code should be longer than 2 characters","promoCode.removed":"The Promo Code has been removed","promoCode.exists":"Another user has already activated this Promo Code","promoCode.validation.invalidChars":"Characters not allowed in Promo Code","promoCode.validation.tooLong":"The Promo Code is too long","promoCode.validation.moreThan5chars":"The Promo Code should contain at least 5 characters","promoCode.unknownError":"Unknown error"}')
              , hs = n.t(fs, 2)
              , ms = JSON.parse('{"error.defaultTitle":"Error","error.failedLoadingSkins.title":"Data loading error","error.failedLoadingSkins.action":"Play again","error.noSkinsFound":"Skins not found","error.blockReason.skinPriceTooLow":"Skin price is too low","error.blockReason.skinNotAccepted":"Skin is not accepted","error.blockReason.skinNotTradable":"Skin is not tradeable","error.title":"Unable to retrieve your skins","error.readInventoryError":"Could not read inventory","error.itemsError":"Could not read items","error.noItems":"Your inventory is set to private or is empty","error.noItems.tip":"In case your inventory is private, please change it to public in order to perform transactions with SkinCantor","error.userAccountNotConnectedToSteam":"Your account isn\'t connected to Steam","error.userNotLoggedIn":"You are not logged in","error.dataLoadError":"Data could not be loaded","error.serversOverloaded":"Servers overloaded","error.action.goBack":"go back","error.action.tryAgain":"try again","error.action.setInventory":"set inventory","screens.footer.tradeDetails":"Trade Details","screens.footer.toReceive":"You will get","screens.footer.bonus":"+ a {{bonus}}% refill bonus","screens.loading.title":"Loading your skins...","screens.loading.message":"Downloading your inventory","screens.completingTradeUrl":"You must provide a Trade URL","screens.selecting.selectAll":"Select all","screens.selecting.deselectAll":"Deselect all","screens.selecting.addFunds":"Add funds to your account","screens.selecting.togglePrice":"Price","screens.selecting.search":"Find skin","screens.selecting.rarity":"Rarity","screens.selecting.showSelected":"Show selected","screens.selecting.hideUntradable":"Hide Untradeable","screens.selecting.requiredValue":"required value {{value}}","screens.summary.selected":"Selected","screens.summary.for":"For","screens.summary.item":"Item","screens.summary.items":"Items","screens.summary.youWillReceive":"You will receive","screens.summary.yourSkinHasBeenSent":"The trade offer was sent. Head to your Steam Account and accept it.","screens.summary.bonusInfo":"Pay with skins to receive Event Points, Gold Coins and a +10% Deposit Bonus","screens.makingOffer.title":"Creating offer...","screens.makingOffer.message":"Please wait for the offer from our Steam account","screens.error.goBack":"Go back","screens.error.tryAgain":"Play again","screens.proposed.button.await":"Awaiting confirmation...","screens.proposed.available":"Available Items","screens.proposed.selected":"Selected Items","screens.proposed.counter.title":"Waiting for confirmation...","screens.proposed.counter.message":"You have <span>{{minutes}} minutes</span> to confirm the transaction on Steam.<br/> After this time, the trade offer will be canceled on Steam.","screens.proposed.title":"Confirm the trade by checking the following information","screens.proposed.botSteamLevel":"Bot Steam Level:","screens.proposed.registerDate":"Register date:","screens.proposed.tradeBot":"Trade bot","screens.proposed.orderId":"Transaction ID","screens.proposed.verifyBotProfile.placeholder":"Type in Steam profile to verify","screens.proposed.acceptOffer.button":"Accept offer on Steam","screens.proposed.verifyBotProfile.title":"Verify bot profile","screens.proposed.verifyBotProfile.message":"Paste a link to the Steam profile of the account from which you received an exchange offer to verify that your deposit offer is not fake.","screens.proposed.clearApi.title":"Clear your Steam Web API","screens.proposed.clearApi.message":"Having an active steam api key may put your account at scam risk. To secure your account during your deposit, we recommend you to delete your steam api key. If your api key is added, and you are sure you did not activate it, you have probably fallen victim to a website that impersonating our service. In this case, we recommend you to deactivate your api key and change your steam account password.","screens.proposed.clearApi.btn":"Check my Steam Web API","screens.proposed.showItems":"Show items","screens.proposed.showSecuritySettings":"Show security settings","screens.counter.title":"Awaiting confirmation...","screens.success.title":"Your transaction was successful.","screens.success.message":"The exchange offer has been completed.","screens.success.restart":"Make another transaction","screens.failure.title":"Transaction error","screens.failure.restart":"Make another transaction","screens.steamDown.title":"Maintenance break","screens.steamDown.message":"You cannot currently create or confirm Steam trades. Please delay your deposits and withdrawals. Thank you for your patience and understanding.","screens.rejected.goToWebsite":"Go to the site","screens.rejected.title":"Offer rejected","screens.rejected.request":"Follow the instructions below.","screens.rejected.description":"We have detected that your offer has been <span>declined</span>. If you were not the one to decline, your account is at risk","screens.rejected.deauthorizeDevices":"Withdraw authorization of all other devices","screens.rejected.click":"Click","screens.rejected.revokeSteamAPI":"Revoke my Steam Web API Key","screens.rejected.done":"Done","modal.title":"Offer rejected","modal.description":"We have detected that your offer has been declined. If you have not done so, your account is at risk","modal.request":"Follow the instructions below.","modal.goToWebsite":"Go to the site","modal.click":"Click","modal.revokeSteamAPI":"Revoke my Steam Web API Key","modal.deauthorizeDevices":"Withdraw authorization of all other devices","modal.done":"Done"}')
              , ys = n.t(ms, 2)
              , gs = JSON.parse('{"getFree":"Get free","dailyCase":"Daily Case","freeGold":"Free Gold","useCode":"Use Code","provablyFair":"Provably Fair","termsOfService":"Terms of Service","support":"Support","giveaways":"Giveaways","caseBattle":"Case Battle","contracts":"Contracts","upgrader":"Upgrader","skinChanger":"Skin Changer","usePromoCode":"Use Promo Code","useGoldenCode":"Use Golden Code","search":"Search","noResultsFound":"No results","foundResults":"Results found","deposit":"Deposit","goToYourProfile":"Go to your Profile","walletBalance":"Wallet Balance","skinsValue":"Skin Value","inTheCase":"In the case","product":"Product","myAccount":"My Account","affiliateSystem":"Affiliate System","games":"Games","customerService":"Customer Service","loginViaSteam":"Login with Steam","currency":"Currency","language":"Language","country":"Country","help":"Help","currencySelectModal.title":"Update your settings","currencySelectModal.excerpt":"Choose your preferred language and currency.","currencySelectModal.currencyTooltip":"We always store funds in USD, amounts in other currencies may vary due to conversion rates.","quickSell.emptyInventory":"Empty inventory","quickSell.sellSelectedFor":"Sell selected for","quickSell.buttonChooseSkins":"Choose skins","bestDrop":"Best Drops","allDrop":"All Drops","promocode":"Promo Code","goldencode":"Golden Code","vikingsEvent":"Vikings Event","logout":"Log out","addFunds":"Add funds","googleTranslateIsDisabled":"Google Translate is disabled on our website. You can select a different language on our Settings page.","chooseYourLanguage":"Choose your language","mostPopularCases":"Most Popular Cases","navItemEventName":"planets of skins"}')
              , ws = n.t(gs, 2);
            const vs = {
                type: "logger",
                log(e) {
                    this.output("log", e)
                },
                warn(e) {
                    this.output("warn", e)
                },
                error(e) {
                    this.output("error", e)
                },
                output(e, t) {
                    console && console[e] && console[e].apply(console, t)
                }
            };
            class bs {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.init(e, t)
                }
                init(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = t.prefix || "i18next:",
                    this.logger = e || vs,
                    this.options = t,
                    this.debug = t.debug
                }
                log() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "log", "", !0)
                }
                warn() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "warn", "", !0)
                }
                error() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "error", "")
                }
                deprecate() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                }
                forward(e, t, n, o) {
                    return o && !this.debug ? null : ("string" == typeof e[0] && (e[0] = `${n}${this.prefix} ${e[0]}`),
                    this.logger[t](e))
                }
                create(e) {
                    return new bs(this.logger,{
                        prefix: `${this.prefix}:${e}:`,
                        ...this.options
                    })
                }
                clone(e) {
                    return (e = e || this.options).prefix = e.prefix || this.prefix,
                    new bs(this.logger,e)
                }
            }
            var ks = new bs;
            class zs {
                constructor() {
                    this.observers = {}
                }
                on(e, t) {
                    return e.split(" ").forEach((e=>{
                        this.observers[e] = this.observers[e] || [],
                        this.observers[e].push(t)
                    }
                    )),
                    this
                }
                off(e, t) {
                    this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((e=>e !== t)) : delete this.observers[e])
                }
                emit(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                        n[o - 1] = arguments[o];
                    this.observers[e] && [].concat(this.observers[e]).forEach((e=>{
                        e(...n)
                    }
                    )),
                    this.observers["*"] && [].concat(this.observers["*"]).forEach((t=>{
                        t.apply(t, [e, ...n])
                    }
                    ))
                }
            }
            function xs() {
                let e, t;
                const n = new Promise(((n,o)=>{
                    e = n,
                    t = o
                }
                ));
                return n.resolve = e,
                n.reject = t,
                n
            }
            function js(e) {
                return null == e ? "" : "" + e
            }
            function Cs(e, t, n) {
                function o(e) {
                    return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
                }
                function r() {
                    return !e || "string" == typeof e
                }
                const a = "string" != typeof t ? [].concat(t) : t.split(".");
                for (; a.length > 1; ) {
                    if (r())
                        return {};
                    const t = o(a.shift());
                    !e[t] && n && (e[t] = new n),
                    e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}
                }
                return r() ? {} : {
                    obj: e,
                    k: o(a.shift())
                }
            }
            function Ss(e, t, n) {
                const {obj: o, k: r} = Cs(e, t, Object);
                o[r] = n
            }
            function Es(e, t) {
                const {obj: n, k: o} = Cs(e, t);
                if (n)
                    return n[o]
            }
            function Ns(e, t, n) {
                const o = Es(e, n);
                return void 0 !== o ? o : Es(t, n)
            }
            function Os(e, t, n) {
                for (const o in t)
                    "__proto__" !== o && "constructor" !== o && (o in e ? "string" == typeof e[o] || e[o]instanceof String || "string" == typeof t[o] || t[o]instanceof String ? n && (e[o] = t[o]) : Os(e[o], t[o], n) : e[o] = t[o]);
                return e
            }
            function Ts(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
            var Zs = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };
            function Is(e) {
                return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (e=>Zs[e])) : e
            }
            const Ps = [" ", ",", "?", "!", ";"];
            function Ls(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                if (!e)
                    return;
                if (e[t])
                    return e[t];
                const o = t.split(n);
                let r = e;
                for (let e = 0; e < o.length; ++e) {
                    if (!r)
                        return;
                    if ("string" == typeof r[o[e]] && e + 1 < o.length)
                        return;
                    if (void 0 === r[o[e]]) {
                        let a = 2
                          , i = o.slice(e, e + a).join(n)
                          , s = r[i];
                        for (; void 0 === s && o.length > e + a; )
                            a++,
                            i = o.slice(e, e + a).join(n),
                            s = r[i];
                        if (void 0 === s)
                            return;
                        if (null === s)
                            return null;
                        if (t.endsWith(i)) {
                            if ("string" == typeof s)
                                return s;
                            if (i && "string" == typeof s[i])
                                return s[i]
                        }
                        const l = o.slice(e + a).join(n);
                        return l ? Ls(s, l, n) : void 0
                    }
                    r = r[o[e]]
                }
                return r
            }
            function As(e) {
                return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e
            }
            class Ds extends zs {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        ns: ["translation"],
                        defaultNS: "translation"
                    };
                    super(),
                    this.data = e || {},
                    this.options = t,
                    void 0 === this.options.keySeparator && (this.options.keySeparator = "."),
                    void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
                }
                addNamespaces(e) {
                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                }
                removeNamespaces(e) {
                    const t = this.options.ns.indexOf(e);
                    t > -1 && this.options.ns.splice(t, 1)
                }
                getResource(e, t, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    const r = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator
                      , a = void 0 !== o.ignoreJSONStructure ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
                    let i = [e, t];
                    n && "string" != typeof n && (i = i.concat(n)),
                    n && "string" == typeof n && (i = i.concat(r ? n.split(r) : n)),
                    e.indexOf(".") > -1 && (i = e.split("."));
                    const s = Es(this.data, i);
                    return s || !a || "string" != typeof n ? s : Ls(this.data && this.data[e] && this.data[e][t], n, r)
                }
                addResource(e, t, n, o) {
                    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                        silent: !1
                    };
                    const a = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator;
                    let i = [e, t];
                    n && (i = i.concat(a ? n.split(a) : n)),
                    e.indexOf(".") > -1 && (i = e.split("."),
                    o = t,
                    t = i[1]),
                    this.addNamespaces(t),
                    Ss(this.data, i, o),
                    r.silent || this.emit("added", e, t, n, o)
                }
                addResources(e, t, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        silent: !1
                    };
                    for (const o in n)
                        "string" != typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(e, t, o, n[o], {
                            silent: !0
                        });
                    o.silent || this.emit("added", e, t, n)
                }
                addResourceBundle(e, t, n, o, r) {
                    let a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                        silent: !1
                    }
                      , i = [e, t];
                    e.indexOf(".") > -1 && (i = e.split("."),
                    o = n,
                    n = t,
                    t = i[1]),
                    this.addNamespaces(t);
                    let s = Es(this.data, i) || {};
                    o ? Os(s, n, r) : s = {
                        ...s,
                        ...n
                    },
                    Ss(this.data, i, s),
                    a.silent || this.emit("added", e, t, n)
                }
                removeResourceBundle(e, t) {
                    this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit("removed", e, t)
                }
                hasResourceBundle(e, t) {
                    return void 0 !== this.getResource(e, t)
                }
                getResourceBundle(e, t) {
                    return t || (t = this.options.defaultNS),
                    "v1" === this.options.compatibilityAPI ? {
                        ...this.getResource(e, t)
                    } : this.getResource(e, t)
                }
                getDataByLanguage(e) {
                    return this.data[e]
                }
                hasLanguageSomeTranslations(e) {
                    const t = this.getDataByLanguage(e);
                    return !!(t && Object.keys(t) || []).find((e=>t[e] && Object.keys(t[e]).length > 0))
                }
                toJSON() {
                    return this.data
                }
            }
            var Rs = {
                processors: {},
                addPostProcessor(e) {
                    this.processors[e.name] = e
                },
                handle(e, t, n, o, r) {
                    return e.forEach((e=>{
                        this.processors[e] && (t = this.processors[e].process(t, n, o, r))
                    }
                    )),
                    t
                }
            };
            const Bs = {};
            class Ms extends zs {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(),
                    function(e, t, n) {
                        ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"].forEach((e=>{
                            t[e] && (n[e] = t[e])
                        }
                        ))
                    }(0, e, this),
                    this.options = t,
                    void 0 === this.options.keySeparator && (this.options.keySeparator = "."),
                    this.logger = ks.create("translator")
                }
                changeLanguage(e) {
                    e && (this.language = e)
                }
                exists(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    };
                    if (null == e)
                        return !1;
                    const n = this.resolve(e, t);
                    return n && void 0 !== n.res
                }
                extractFromKey(e, t) {
                    let n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    const o = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator;
                    let r = t.ns || this.options.defaultNS || [];
                    const a = n && e.indexOf(n) > -1
                      , i = !(this.options.userDefinedKeySeparator || t.keySeparator || this.options.userDefinedNsSeparator || t.nsSeparator || function(e, t, n) {
                        t = t || "",
                        n = n || "";
                        const o = Ps.filter((e=>t.indexOf(e) < 0 && n.indexOf(e) < 0));
                        if (0 === o.length)
                            return !0;
                        const r = new RegExp(`(${o.map((e=>"?" === e ? "\\?" : e)).join("|")})`);
                        let a = !r.test(e);
                        if (!a) {
                            const t = e.indexOf(n);
                            t > 0 && !r.test(e.substring(0, t)) && (a = !0)
                        }
                        return a
                    }(e, n, o));
                    if (a && !i) {
                        const t = e.match(this.interpolator.nestingRegexp);
                        if (t && t.length > 0)
                            return {
                                key: e,
                                namespaces: r
                            };
                        const a = e.split(n);
                        (n !== o || n === o && this.options.ns.indexOf(a[0]) > -1) && (r = a.shift()),
                        e = a.join(o)
                    }
                    return "string" == typeof r && (r = [r]),
                    {
                        key: e,
                        namespaces: r
                    }
                }
                translate(e, t, n) {
                    if ("object" != typeof t && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)),
                    "object" == typeof t && (t = {
                        ...t
                    }),
                    t || (t = {}),
                    null == e)
                        return "";
                    Array.isArray(e) || (e = [String(e)]);
                    const o = void 0 !== t.returnDetails ? t.returnDetails : this.options.returnDetails
                      , r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                      , {key: a, namespaces: i} = this.extractFromKey(e[e.length - 1], t)
                      , s = i[i.length - 1]
                      , l = t.lng || this.language
                      , c = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (l && "cimode" === l.toLowerCase()) {
                        if (c) {
                            const e = t.nsSeparator || this.options.nsSeparator;
                            return o ? {
                                res: `${s}${e}${a}`,
                                usedKey: a,
                                exactUsedKey: a,
                                usedLng: l,
                                usedNS: s
                            } : `${s}${e}${a}`
                        }
                        return o ? {
                            res: a,
                            usedKey: a,
                            exactUsedKey: a,
                            usedLng: l,
                            usedNS: s
                        } : a
                    }
                    const u = this.resolve(e, t);
                    let d = u && u.res;
                    const p = u && u.usedKey || a
                      , f = u && u.exactUsedKey || a
                      , h = Object.prototype.toString.apply(d)
                      , m = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays
                      , y = !this.i18nFormat || this.i18nFormat.handleAsObject;
                    if (y && d && "string" != typeof d && "boolean" != typeof d && "number" != typeof d && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(h) < 0 && ("string" != typeof m || "[object Array]" !== h)) {
                        if (!t.returnObjects && !this.options.returnObjects) {
                            this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                            const e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, d, {
                                ...t,
                                ns: i
                            }) : `key '${a} (${this.language})' returned an object instead of string.`;
                            return o ? (u.res = e,
                            u) : e
                        }
                        if (r) {
                            const e = "[object Array]" === h
                              , n = e ? [] : {}
                              , o = e ? f : p;
                            for (const e in d)
                                if (Object.prototype.hasOwnProperty.call(d, e)) {
                                    const a = `${o}${r}${e}`;
                                    n[e] = this.translate(a, {
                                        ...t,
                                        joinArrays: !1,
                                        ns: i
                                    }),
                                    n[e] === a && (n[e] = d[e])
                                }
                            d = n
                        }
                    } else if (y && "string" == typeof m && "[object Array]" === h)
                        d = d.join(m),
                        d && (d = this.extendTranslation(d, e, t, n));
                    else {
                        let o = !1
                          , i = !1;
                        const c = void 0 !== t.count && "string" != typeof t.count
                          , p = Ms.hasDefaultValue(t)
                          , f = c ? this.pluralResolver.getSuffix(l, t.count, t) : ""
                          , h = t.ordinal && c ? this.pluralResolver.getSuffix(l, t.count, {
                            ordinal: !1
                        }) : ""
                          , m = t[`defaultValue ${f}`] || t[`defaultValue ${h}`] || t.defaultValue;
                        !this.isValidLookup(d) && p && (o = !0,
                        d = m),
                        this.isValidLookup(d) || (i = !0,
                        d = a);
                        const y = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && i ? void 0 : d
                          , g = p && m !== d && this.options.updateMissing;
                        if (i || o || g) {
                            if (this.logger.log(g ? "updateKey" : "missingKey", l, s, a, g ? m : d),
                            r) {
                                const e = this.resolve(a, {
                                    ...t,
                                    keySeparator: !1
                                });
                                e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            let e = [];
                            const n = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && n && n[0])
                                for (let t = 0; t < n.length; t++)
                                    e.push(n[t]);
                            else
                                "all" === this.options.saveMissingTo ? e = this.languageUtils.toResolveHierarchy(t.lng || this.language) : e.push(t.lng || this.language);
                            const o = (e,n,o)=>{
                                const r = p && o !== d ? o : y;
                                this.options.missingKeyHandler ? this.options.missingKeyHandler(e, s, n, r, g, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(e, s, n, r, g, t),
                                this.emit("missingKey", e, s, n, d)
                            }
                            ;
                            this.options.saveMissing && (this.options.saveMissingPlurals && c ? e.forEach((e=>{
                                this.pluralResolver.getSuffixes(e, t).forEach((n=>{
                                    o([e], a + n, t[`defaultValue ${n}`] || m)
                                }
                                ))
                            }
                            )) : o(e, a, m))
                        }
                        d = this.extendTranslation(d, e, t, u, n),
                        i && d === a && this.options.appendNamespaceToMissingKey && (d = `${s}:${a}`),
                        (i || o) && this.options.parseMissingKeyHandler && (d = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${s}:${a}` : a, o ? d : void 0) : this.options.parseMissingKeyHandler(d))
                    }
                    return o ? (u.res = d,
                    u) : d
                }
                extendTranslation(e, t, n, o, r) {
                    var a = this;
                    if (this.i18nFormat && this.i18nFormat.parse)
                        e = this.i18nFormat.parse(e, {
                            ...this.options.interpolation.defaultVariables,
                            ...n
                        }, o.usedLng, o.usedNS, o.usedKey, {
                            resolved: o
                        });
                    else if (!n.skipInterpolation) {
                        n.interpolation && this.interpolator.init({
                            ...n,
                            interpolation: {
                                ...this.options.interpolation,
                                ...n.interpolation
                            }
                        });
                        const i = "string" == typeof e && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                        let s;
                        if (i) {
                            const t = e.match(this.interpolator.nestingRegexp);
                            s = t && t.length
                        }
                        let l = n.replace && "string" != typeof n.replace ? n.replace : n;
                        if (this.options.interpolation.defaultVariables && (l = {
                            ...this.options.interpolation.defaultVariables,
                            ...l
                        }),
                        e = this.interpolator.interpolate(e, l, n.lng || this.language, n),
                        i) {
                            const t = e.match(this.interpolator.nestingRegexp);
                            s < (t && t.length) && (n.nest = !1)
                        }
                        !n.lng && "v1" !== this.options.compatibilityAPI && o && o.res && (n.lng = o.usedLng),
                        !1 !== n.nest && (e = this.interpolator.nest(e, (function() {
                            for (var e = arguments.length, o = new Array(e), i = 0; i < e; i++)
                                o[i] = arguments[i];
                            return r && r[0] === o[0] && !n.context ? (a.logger.warn(`It seems you are nesting recursively key: ${o[0]} in key: ${t[0]}`),
                            null) : a.translate(...o, t)
                        }
                        ), n)),
                        n.interpolation && this.interpolator.reset()
                    }
                    const i = n.postProcess || this.options.postProcess
                      , s = "string" == typeof i ? [i] : i;
                    return null != e && s && s.length && !1 !== n.applyPostProcessor && (e = Rs.handle(s, e, t, this.options && this.options.postProcessPassResolved ? {
                        i18nResolved: o,
                        ...n
                    } : n, this)),
                    e
                }
                resolve(e) {
                    let t, n, o, r, a, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" == typeof e && (e = [e]),
                    e.forEach((e=>{
                        if (this.isValidLookup(t))
                            return;
                        const s = this.extractFromKey(e, i)
                          , l = s.key;
                        n = l;
                        let c = s.namespaces;
                        this.options.fallbackNS && (c = c.concat(this.options.fallbackNS));
                        const u = void 0 !== i.count && "string" != typeof i.count
                          , d = u && !i.ordinal && 0 === i.count && this.pluralResolver.shouldUseIntlApi()
                          , p = void 0 !== i.context && ("string" == typeof i.context || "number" == typeof i.context) && "" !== i.context
                          , f = i.lngs ? i.lngs : this.languageUtils.toResolveHierarchy(i.lng || this.language, i.fallbackLng);
                        c.forEach((e=>{
                            this.isValidLookup(t) || (a = e,
                            !Bs[`${f[0]}-${e}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Bs[`${f[0]}-${e}`] = !0,
                            this.logger.warn(`key "${n}" for languages "${f.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                            f.forEach((n=>{
                                if (this.isValidLookup(t))
                                    return;
                                r = n;
                                const a = [l];
                                if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                                    this.i18nFormat.addLookupKeys(a, l, n, e, i);
                                else {
                                    let e;
                                    u && (e = this.pluralResolver.getSuffix(n, i.count, i));
                                    const t = `${this.options.pluralSeparator}zero`
                                      , o = `${this.options.pluralSeparator}ordinal ${this.options.pluralSeparator}`;
                                    if (u && (a.push(l + e),
                                    i.ordinal && 0 === e.indexOf(o) && a.push(l + e.replace(o, this.options.pluralSeparator)),
                                    d && a.push(l + t)),
                                    p) {
                                        const n = `${l}${this.options.contextSeparator}${i.context}`;
                                        a.push(n),
                                        u && (a.push(n + e),
                                        i.ordinal && 0 === e.indexOf(o) && a.push(n + e.replace(o, this.options.pluralSeparator)),
                                        d && a.push(n + t))
                                    }
                                }
                                let s;
                                for (; s = a.pop(); )
                                    this.isValidLookup(t) || (o = s,
                                    t = this.getResource(n, e, s, i))
                            }
                            )))
                        }
                        ))
                    }
                    )),
                    {
                        res: t,
                        usedKey: n,
                        exactUsedKey: o,
                        usedLng: r,
                        usedNS: a
                    }
                }
                isValidLookup(e) {
                    return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
                }
                getResource(e, t, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, o) : this.resourceStore.getResource(e, t, n, o)
                }
                static hasDefaultValue(e) {
                    const t = "defaultValue";
                    for (const n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n])
                            return !0;
                    return !1
                }
            }
            function Fs(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
            class _s {
                constructor(e) {
                    this.options = e,
                    this.supportedLngs = this.options.supportedLngs || !1,
                    this.logger = ks.create("languageUtils")
                }
                getScriptPartFromCode(e) {
                    if (!(e = As(e)) || e.indexOf("-") < 0)
                        return null;
                    const t = e.split("-");
                    return 2 === t.length ? null : (t.pop(),
                    "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                }
                getLanguagePartFromCode(e) {
                    if (!(e = As(e)) || e.indexOf("-") < 0)
                        return e;
                    const t = e.split("-");
                    return this.formatLanguageCode(t[0])
                }
                formatLanguageCode(e) {
                    if ("string" == typeof e && e.indexOf("-") > -1) {
                        const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
                        let n = e.split("-");
                        return this.options.lowerCaseLng ? n = n.map((e=>e.toLowerCase())) : 2 === n.length ? (n[0] = n[0].toLowerCase(),
                        n[1] = n[1].toUpperCase(),
                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Fs(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(),
                        2 === n[1].length && (n[1] = n[1].toUpperCase()),
                        "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Fs(n[1].toLowerCase())),
                        t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Fs(n[2].toLowerCase()))),
                        n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }
                isSupportedCode(e) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                }
                getBestMatchFromCodes(e) {
                    if (!e)
                        return null;
                    let t;
                    return e.forEach((e=>{
                        if (t)
                            return;
                        const n = this.formatLanguageCode(e);
                        this.options.supportedLngs && !this.isSupportedCode(n) || (t = n)
                    }
                    )),
                    !t && this.options.supportedLngs && e.forEach((e=>{
                        if (t)
                            return;
                        const n = this.getLanguagePartFromCode(e);
                        if (this.isSupportedCode(n))
                            return t = n;
                        t = this.options.supportedLngs.find((e=>e === n ? e : e.indexOf("-") < 0 && n.indexOf("-") < 0 ? void 0 : 0 === e.indexOf(n) ? e : void 0))
                    }
                    )),
                    t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                    t
                }
                getFallbackCodes(e, t) {
                    if (!e)
                        return [];
                    if ("function" == typeof e && (e = e(t)),
                    "string" == typeof e && (e = [e]),
                    "[object Array]" === Object.prototype.toString.apply(e))
                        return e;
                    if (!t)
                        return e.default || [];
                    let n = e[t];
                    return n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                }
                toResolveHierarchy(e, t) {
                    const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e)
                      , o = []
                      , r = e=>{
                        e && (this.isSupportedCode(e) ? o.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))
                    }
                    ;
                    return "string" == typeof e && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && r(this.formatLanguageCode(e)),
                    "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && r(this.getScriptPartFromCode(e)),
                    "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(e))) : "string" == typeof e && r(this.formatLanguageCode(e)),
                    n.forEach((e=>{
                        o.indexOf(e) < 0 && r(this.formatLanguageCode(e))
                    }
                    )),
                    o
                }
            }
            let Us = [{
                lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
                nr: [1, 2],
                fc: 1
            }, {
                lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                nr: [1, 2],
                fc: 2
            }, {
                lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                nr: [1],
                fc: 3
            }, {
                lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                nr: [1, 2, 5],
                fc: 4
            }, {
                lngs: ["ar"],
                nr: [0, 1, 2, 3, 11, 100],
                fc: 5
            }, {
                lngs: ["cs", "sk"],
                nr: [1, 2, 5],
                fc: 6
            }, {
                lngs: ["csb", "pl"],
                nr: [1, 2, 5],
                fc: 7
            }, {
                lngs: ["cy"],
                nr: [1, 2, 3, 8],
                fc: 8
            }, {
                lngs: ["fr"],
                nr: [1, 2],
                fc: 9
            }, {
                lngs: ["ga"],
                nr: [1, 2, 3, 7, 11],
                fc: 10
            }, {
                lngs: ["gd"],
                nr: [1, 2, 3, 20],
                fc: 11
            }, {
                lngs: ["is"],
                nr: [1, 2],
                fc: 12
            }, {
                lngs: ["jv"],
                nr: [0, 1],
                fc: 13
            }, {
                lngs: ["kw"],
                nr: [1, 2, 3, 4],
                fc: 14
            }, {
                lngs: ["lt"],
                nr: [1, 2, 10],
                fc: 15
            }, {
                lngs: ["lv"],
                nr: [1, 2, 0],
                fc: 16
            }, {
                lngs: ["mk"],
                nr: [1, 2],
                fc: 17
            }, {
                lngs: ["mnk"],
                nr: [0, 1, 2],
                fc: 18
            }, {
                lngs: ["mt"],
                nr: [1, 2, 11, 20],
                fc: 19
            }, {
                lngs: ["or"],
                nr: [2, 1],
                fc: 2
            }, {
                lngs: ["ro"],
                nr: [1, 2, 20],
                fc: 20
            }, {
                lngs: ["sl"],
                nr: [5, 1, 2, 3],
                fc: 21
            }, {
                lngs: ["he", "iw"],
                nr: [1, 2, 20, 21],
                fc: 22
            }]
              , Hs = {
                1: function(e) {
                    return Number(e > 1)
                },
                2: function(e) {
                    return Number(1 != e)
                },
                3: function(e) {
                    return 0
                },
                4: function(e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                },
                5: function(e) {
                    return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
                },
                6: function(e) {
                    return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
                },
                7: function(e) {
                    return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                },
                8: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
                },
                9: function(e) {
                    return Number(e >= 2)
                },
                10: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
                },
                11: function(e) {
                    return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
                },
                12: function(e) {
                    return Number(e % 10 != 1 || e % 100 == 11)
                },
                13: function(e) {
                    return Number(0 !== e)
                },
                14: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
                },
                15: function(e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                },
                16: function(e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
                },
                17: function(e) {
                    return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
                },
                18: function(e) {
                    return Number(0 == e ? 0 : 1 == e ? 1 : 2)
                },
                19: function(e) {
                    return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
                },
                20: function(e) {
                    return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
                },
                21: function(e) {
                    return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
                },
                22: function(e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                }
            };
            const Gs = ["v1", "v2", "v3"]
              , $s = ["v4"]
              , Ys = {
                zero: 0,
                one: 1,
                two: 2,
                few: 3,
                many: 4,
                other: 5
            };
            class Vs {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.languageUtils = e,
                    this.options = t,
                    this.logger = ks.create("pluralResolver"),
                    this.options.compatibilityJSON && !$s.includes(this.options.compatibilityJSON) || "undefined" != typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3",
                    this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
                    this.rules = function() {
                        const e = {};
                        return Us.forEach((t=>{
                            t.lngs.forEach((n=>{
                                e[n] = {
                                    numbers: t.nr,
                                    plurals: Hs[t.fc]
                                }
                            }
                            ))
                        }
                        )),
                        e
                    }()
                }
                addRule(e, t) {
                    this.rules[e] = t
                }
                getRule(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.shouldUseIntlApi())
                        try {
                            return new Intl.PluralRules(As(e),{
                                type: t.ordinal ? "ordinal" : "cardinal"
                            })
                        } catch {
                            return
                        }
                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }
                needsPlural(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = this.getRule(e, t);
                    return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
                }
                getPluralFormsOfKey(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.getSuffixes(e, n).map((e=>`${t}${e}`))
                }
                getSuffixes(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = this.getRule(e, t);
                    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort(((e,t)=>Ys[e] - Ys[t])).map((e=>`${this.options.prepend}${t.ordinal ? `ordinal ${this.options.prepend}` : ""}${e}`)) : n.numbers.map((n=>this.getSuffix(e, n, t))) : []
                }
                getSuffix(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    const o = this.getRule(e, n);
                    return o ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal ? `ordinal ${this.options.prepend}` : ""}${o.select(t)}` : this.getSuffixRetroCompatible(o, t) : (this.logger.warn(`no plural rule found for: ${e}`),
                    "")
                }
                getSuffixRetroCompatible(e, t) {
                    const n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
                    let o = e.numbers[n];
                    this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = ""));
                    const r = ()=>this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString();
                    return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" == typeof o ? `_plural_ ${o.toString()}` : r() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? r() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString()
                }
                shouldUseIntlApi() {
                    return !Gs.includes(this.options.compatibilityJSON)
                }
            }
            function Xs(e, t, n) {
                let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "."
                  , r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
                  , a = Ns(e, t, n);
                return !a && r && "string" == typeof n && (a = Ls(e, n, o),
                void 0 === a && (a = Ls(t, n, o))),
                a
            }
            class Ws {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger = ks.create("interpolator"),
                    this.options = e,
                    this.format = e.interpolation && e.interpolation.format || (e=>e),
                    this.init(e)
                }
                init() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.interpolation || (e.interpolation = {
                        escapeValue: !0
                    });
                    const t = e.interpolation;
                    this.escape = void 0 !== t.escape ? t.escape : Is,
                    this.escapeValue = void 0 === t.escapeValue || t.escapeValue,
                    this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape,
                    this.prefix = t.prefix ? Ts(t.prefix) : t.prefixEscaped || "{{",
                    this.suffix = t.suffix ? Ts(t.suffix) : t.suffixEscaped || "}}",
                    this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",",
                    this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-",
                    this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "",
                    this.nestingPrefix = t.nestingPrefix ? Ts(t.nestingPrefix) : t.nestingPrefixEscaped || Ts("$t("),
                    this.nestingSuffix = t.nestingSuffix ? Ts(t.nestingSuffix) : t.nestingSuffixEscaped || Ts(")"),
                    this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",",
                    this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3,
                    this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat,
                    this.resetRegExp()
                }
                reset() {
                    this.options && this.init(this.options)
                }
                resetRegExp() {
                    const e = `${this.prefix}(.+?)${this.suffix}`;
                    this.regexp = new RegExp(e,"g");
                    const t = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
                    this.regexpUnescape = new RegExp(t,"g");
                    const n = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
                    this.nestingRegexp = new RegExp(n,"g")
                }
                interpolate(e, t, n, o) {
                    let r, a, i;
                    const s = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
                    function l(e) {
                        return e.replace(/\$/g, "$$$$")
                    }
                    const c = e=>{
                        if (e.indexOf(this.formatSeparator) < 0) {
                            const r = Xs(t, s, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                            return this.alwaysFormat ? this.format(r, void 0, n, {
                                ...o,
                                ...t,
                                interpolationkey: e
                            }) : r
                        }
                        const r = e.split(this.formatSeparator)
                          , a = r.shift().trim()
                          , i = r.join(this.formatSeparator).trim();
                        return this.format(Xs(t, s, a, this.options.keySeparator, this.options.ignoreJSONStructure), i, n, {
                            ...o,
                            ...t,
                            interpolationkey: a
                        })
                    }
                    ;
                    this.resetRegExp();
                    const u = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler
                      , d = o && o.interpolation && void 0 !== o.interpolation.skipOnVariables ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                    return [{
                        regex: this.regexpUnescape,
                        safeValue: e=>l(e)
                    }, {
                        regex: this.regexp,
                        safeValue: e=>this.escapeValue ? l(this.escape(e)) : l(e)
                    }].forEach((t=>{
                        for (i = 0; r = t.regex.exec(e); ) {
                            const n = r[1].trim();
                            if (a = c(n),
                            void 0 === a)
                                if ("function" == typeof u) {
                                    const t = u(e, r, o);
                                    a = "string" == typeof t ? t : ""
                                } else if (o && Object.prototype.hasOwnProperty.call(o, n))
                                    a = "";
                                else {
                                    if (d) {
                                        a = r[0];
                                        continue
                                    }
                                    this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),
                                    a = ""
                                }
                            else
                                "string" == typeof a || this.useRawValueToEscape || (a = js(a));
                            const s = t.safeValue(a);
                            if (e = e.replace(r[0], s),
                            d ? (t.regex.lastIndex += a.length,
                            t.regex.lastIndex -= r[0].length) : t.regex.lastIndex = 0,
                            i++,
                            i >= this.maxReplaces)
                                break
                        }
                    }
                    )),
                    e
                }
                nest(e, t) {
                    let n, o, r, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    function i(e, t) {
                        const n = this.nestingOptionsSeparator;
                        if (e.indexOf(n) < 0)
                            return e;
                        const o = e.split(new RegExp(`${n}[ ]*{`));
                        let a = `{${o[1]}`;
                        e = o[0],
                        a = this.interpolate(a, r);
                        const i = a.match(/'/g)
                          , s = a.match(/"/g);
                        (i && i.length % 2 == 0 && !s || s.length % 2 != 0) && (a = a.replace(/'/g, '"'));
                        try {
                            r = JSON.parse(a),
                            t && (r = {
                                ...t,
                                ...r
                            })
                        } catch (t) {
                            return this.logger.warn(`failed parsing options string in nesting for key ${e}`, t),
                            `${e}${n}${a}`
                        }
                        return delete r.defaultValue,
                        e
                    }
                    for (; n = this.nestingRegexp.exec(e); ) {
                        let s = [];
                        r = {
                            ...a
                        },
                        r = r.replace && "string" != typeof r.replace ? r.replace : r,
                        r.applyPostProcessor = !1,
                        delete r.defaultValue;
                        let l = !1;
                        if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                            const e = n[1].split(this.formatSeparator).map((e=>e.trim()));
                            n[1] = e.shift(),
                            s = e,
                            l = !0
                        }
                        if (o = t(i.call(this, n[1].trim(), r), r),
                        o && n[0] === e && "string" != typeof o)
                            return o;
                        "string" != typeof o && (o = js(o)),
                        o || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),
                        o = ""),
                        l && (o = s.reduce(((e,t)=>this.format(e, t, a.lng, {
                            ...a,
                            interpolationkey: n[1].trim()
                        })), o.trim())),
                        e = e.replace(n[0], o),
                        this.regexp.lastIndex = 0
                    }
                    return e
                }
            }
            function qs(e) {
                const t = {};
                return function(n, o, r) {
                    const a = o + JSON.stringify(r);
                    let i = t[a];
                    return i || (i = e(As(o), r),
                    t[a] = i),
                    i(n)
                }
            }
            class Ks {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger = ks.create("formatter"),
                    this.options = e,
                    this.formats = {
                        number: qs(((e,t)=>{
                            const n = new Intl.NumberFormat(e,{
                                ...t
                            });
                            return e=>n.format(e)
                        }
                        )),
                        currency: qs(((e,t)=>{
                            const n = new Intl.NumberFormat(e,{
                                ...t,
                                style: "currency"
                            });
                            return e=>n.format(e)
                        }
                        )),
                        datetime: qs(((e,t)=>{
                            const n = new Intl.DateTimeFormat(e,{
                                ...t
                            });
                            return e=>n.format(e)
                        }
                        )),
                        relativetime: qs(((e,t)=>{
                            const n = new Intl.RelativeTimeFormat(e,{
                                ...t
                            });
                            return e=>n.format(e, t.range || "day")
                        }
                        )),
                        list: qs(((e,t)=>{
                            const n = new Intl.ListFormat(e,{
                                ...t
                            });
                            return e=>n.format(e)
                        }
                        ))
                    },
                    this.init(e)
                }
                init(e) {
                    const t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    }).interpolation;
                    this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ","
                }
                add(e, t) {
                    this.formats[e.toLowerCase().trim()] = t
                }
                addCached(e, t) {
                    this.formats[e.toLowerCase().trim()] = qs(t)
                }
                format(e, t, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return t.split(this.formatSeparator).reduce(((e,t)=>{
                        const {formatName: r, formatOptions: a} = function(e) {
                            let t = e.toLowerCase().trim();
                            const n = {};
                            if (e.indexOf("(") > -1) {
                                const o = e.split("(");
                                t = o[0].toLowerCase().trim();
                                const r = o[1].substring(0, o[1].length - 1);
                                "currency" === t && r.indexOf(":") < 0 ? n.currency || (n.currency = r.trim()) : "relativetime" === t && r.indexOf(":") < 0 ? n.range || (n.range = r.trim()) : r.split(";").forEach((e=>{
                                    if (!e)
                                        return;
                                    const [t,...o] = e.split(":")
                                      , r = o.join(":").trim().replace(/^'+|'+$/g, "");
                                    n[t.trim()] || (n[t.trim()] = r),
                                    "false" === r && (n[t.trim()] = !1),
                                    "true" === r && (n[t.trim()] = !0),
                                    isNaN(r) || (n[t.trim()] = parseInt(r, 10))
                                }
                                ))
                            }
                            return {
                                formatName: t,
                                formatOptions: n
                            }
                        }(t);
                        if (this.formats[r]) {
                            let t = e;
                            try {
                                const i = o && o.formatParams && o.formatParams[o.interpolationkey] || {}
                                  , s = i.locale || i.lng || o.locale || o.lng || n;
                                t = this.formats[r](e, s, {
                                    ...a,
                                    ...o,
                                    ...i
                                })
                            } catch (e) {
                                this.logger.warn(e)
                            }
                            return t
                        }
                        return this.logger.warn(`there was no format function for ${r}`),
                        e
                    }
                    ), e)
                }
            }
            class Js extends zs {
                constructor(e, t, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    super(),
                    this.backend = e,
                    this.store = t,
                    this.services = n,
                    this.languageUtils = n.languageUtils,
                    this.options = o,
                    this.logger = ks.create("backendConnector"),
                    this.waitingReads = [],
                    this.maxParallelReads = o.maxParallelReads || 10,
                    this.readingCalls = 0,
                    this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5,
                    this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350,
                    this.state = {},
                    this.queue = [],
                    this.backend && this.backend.init && this.backend.init(n, o.backend, o)
                }
                queueLoad(e, t, n, o) {
                    const r = {}
                      , a = {}
                      , i = {}
                      , s = {};
                    return e.forEach((e=>{
                        let o = !0;
                        t.forEach((t=>{
                            const i = `${e}|${t}`;
                            !n.reload && this.store.hasResourceBundle(e, t) ? this.state[i] = 2 : this.state[i] < 0 || (1 === this.state[i] ? void 0 === a[i] && (a[i] = !0) : (this.state[i] = 1,
                            o = !1,
                            void 0 === a[i] && (a[i] = !0),
                            void 0 === r[i] && (r[i] = !0),
                            void 0 === s[t] && (s[t] = !0)))
                        }
                        )),
                        o || (i[e] = !0)
                    }
                    )),
                    (Object.keys(r).length || Object.keys(a).length) && this.queue.push({
                        pending: a,
                        pendingCount: Object.keys(a).length,
                        loaded: {},
                        errors: [],
                        callback: o
                    }),
                    {
                        toLoad: Object.keys(r),
                        pending: Object.keys(a),
                        toLoadLanguages: Object.keys(i),
                        toLoadNamespaces: Object.keys(s)
                    }
                }
                loaded(e, t, n) {
                    const o = e.split("|")
                      , r = o[0]
                      , a = o[1];
                    t && this.emit("failedLoading", r, a, t),
                    n && this.store.addResourceBundle(r, a, n),
                    this.state[e] = t ? -1 : 2;
                    const i = {};
                    this.queue.forEach((n=>{
                        !function(e, t, n, o) {
                            const {obj: r, k: a} = Cs(e, t, Object);
                            r[a] = r[a] || [],
                            r[a].push(n)
                        }(n.loaded, [r], a),
                        function(e, t) {
                            void 0 !== e.pending[t] && (delete e.pending[t],
                            e.pendingCount--)
                        }(n, e),
                        t && n.errors.push(t),
                        0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach((e=>{
                            i[e] || (i[e] = {});
                            const t = n.loaded[e];
                            t.length && t.forEach((t=>{
                                void 0 === i[e][t] && (i[e][t] = !0)
                            }
                            ))
                        }
                        )),
                        n.done = !0,
                        n.errors.length ? n.callback(n.errors) : n.callback())
                    }
                    )),
                    this.emit("loaded", i),
                    this.queue = this.queue.filter((e=>!e.done))
                }
                read(e, t, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout
                      , a = arguments.length > 5 ? arguments[5] : void 0;
                    if (!e.length)
                        return a(null, {});
                    if (this.readingCalls >= this.maxParallelReads)
                        return void this.waitingReads.push({
                            lng: e,
                            ns: t,
                            fcName: n,
                            tried: o,
                            wait: r,
                            callback: a
                        });
                    this.readingCalls++;
                    const i = (i,s)=>{
                        if (this.readingCalls--,
                        this.waitingReads.length > 0) {
                            const e = this.waitingReads.shift();
                            this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback)
                        }
                        i && s && o < this.maxRetries ? setTimeout((()=>{
                            this.read.call(this, e, t, n, o + 1, 2 * r, a)
                        }
                        ), r) : a(i, s)
                    }
                      , s = this.backend[n].bind(this.backend);
                    if (2 !== s.length)
                        return s(e, t, i);
                    try {
                        const n = s(e, t);
                        n && "function" == typeof n.then ? n.then((e=>i(null, e))).catch(i) : i(null, n)
                    } catch (e) {
                        i(e)
                    }
                }
                prepareLoading(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , o = arguments.length > 3 ? arguments[3] : void 0;
                    if (!this.backend)
                        return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                        o && o();
                    "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)),
                    "string" == typeof t && (t = [t]);
                    const r = this.queueLoad(e, t, n, o);
                    if (!r.toLoad.length)
                        return r.pending.length || o(),
                        null;
                    r.toLoad.forEach((e=>{
                        this.loadOne(e)
                    }
                    ))
                }
                load(e, t, n) {
                    this.prepareLoading(e, t, {}, n)
                }
                reload(e, t, n) {
                    this.prepareLoading(e, t, {
                        reload: !0
                    }, n)
                }
                loadOne(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    const n = e.split("|")
                      , o = n[0]
                      , r = n[1];
                    this.read(o, r, "read", void 0, void 0, ((n,a)=>{
                        n && this.logger.warn(`${t}loading namespace ${r} for language ${o} failed`, n),
                        !n && a && this.logger.log(`${t}loaded namespace ${r} for language ${o}`, a),
                        this.loaded(e, n, a)
                    }
                    ))
                }
                saveMissing(e, t, n, o, r) {
                    let a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
                      , i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : ()=>{}
                    ;
                    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t))
                        this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                    else if (null != n && "" !== n) {
                        if (this.backend && this.backend.create) {
                            const s = {
                                ...a,
                                isUpdate: r
                            }
                              , l = this.backend.create.bind(this.backend);
                            if (l.length < 6)
                                try {
                                    let r;
                                    r = 5 === l.length ? l(e, t, n, o, s) : l(e, t, n, o),
                                    r && "function" == typeof r.then ? r.then((e=>i(null, e))).catch(i) : i(null, r)
                                } catch (e) {
                                    i(e)
                                }
                            else
                                l(e, t, n, o, i, s)
                        }
                        e && e[0] && this.store.addResource(e[0], t, n, o)
                    }
                }
            }
            function Qs() {
                return {
                    debug: !1,
                    initImmediate: !0,
                    ns: ["translation"],
                    defaultNS: ["translation"],
                    fallbackLng: ["dev"],
                    fallbackNS: !1,
                    supportedLngs: !1,
                    nonExplicitSupportedLngs: !1,
                    load: "all",
                    preload: !1,
                    simplifyPluralSuffix: !0,
                    keySeparator: ".",
                    nsSeparator: ":",
                    pluralSeparator: "_",
                    contextSeparator: "_",
                    partialBundledLanguages: !1,
                    saveMissing: !1,
                    updateMissing: !1,
                    saveMissingTo: "fallback",
                    saveMissingPlurals: !0,
                    missingKeyHandler: !1,
                    missingInterpolationHandler: !1,
                    postProcess: !1,
                    postProcessPassResolved: !1,
                    returnNull: !1,
                    returnEmptyString: !0,
                    returnObjects: !1,
                    joinArrays: !1,
                    returnedObjectHandler: !1,
                    parseMissingKeyHandler: !1,
                    appendNamespaceToMissingKey: !1,
                    appendNamespaceToCIMode: !1,
                    overloadTranslationOptionHandler: function(e) {
                        let t = {};
                        if ("object" == typeof e[1] && (t = e[1]),
                        "string" == typeof e[1] && (t.defaultValue = e[1]),
                        "string" == typeof e[2] && (t.tDescription = e[2]),
                        "object" == typeof e[2] || "object" == typeof e[3]) {
                            const n = e[3] || e[2];
                            Object.keys(n).forEach((e=>{
                                t[e] = n[e]
                            }
                            ))
                        }
                        return t
                    },
                    interpolation: {
                        escapeValue: !0,
                        format: (e,t,n,o)=>e,
                        prefix: "{{",
                        suffix: "}}",
                        formatSeparator: ",",
                        unescapePrefix: "-",
                        nestingPrefix: "$t(",
                        nestingSuffix: ")",
                        nestingOptionsSeparator: ",",
                        maxReplaces: 1e3,
                        skipOnVariables: !0
                    }
                }
            }
            function el(e) {
                return "string" == typeof e.ns && (e.ns = [e.ns]),
                "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
                "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
                e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
                e
            }
            function tl() {}
            class nl extends zs {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    var n;
                    if (super(),
                    this.options = el(e),
                    this.services = {},
                    this.logger = ks,
                    this.modules = {
                        external: []
                    },
                    n = this,
                    Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((e=>{
                        "function" == typeof n[e] && (n[e] = n[e].bind(n))
                    }
                    )),
                    t && !this.isInitialized && !e.isClone) {
                        if (!this.options.initImmediate)
                            return this.init(e, t),
                            this;
                        setTimeout((()=>{
                            this.init(e, t)
                        }
                        ), 0)
                    }
                }
                init() {
                    var e = this;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = arguments.length > 1 ? arguments[1] : void 0;
                    "function" == typeof t && (n = t,
                    t = {}),
                    !t.defaultNS && !1 !== t.defaultNS && t.ns && ("string" == typeof t.ns ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
                    const o = Qs();
                    function r(e) {
                        return e ? "function" == typeof e ? new e : e : null
                    }
                    if (this.options = {
                        ...o,
                        ...this.options,
                        ...el(t)
                    },
                    "v1" !== this.options.compatibilityAPI && (this.options.interpolation = {
                        ...o.interpolation,
                        ...this.options.interpolation
                    }),
                    void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator),
                    void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator),
                    !this.options.isClone) {
                        let t;
                        this.modules.logger ? ks.init(r(this.modules.logger), this.options) : ks.init(null, this.options),
                        this.modules.formatter ? t = this.modules.formatter : "undefined" != typeof Intl && (t = Ks);
                        const n = new _s(this.options);
                        this.store = new Ds(this.options.resources,this.options);
                        const a = this.services;
                        a.logger = ks,
                        a.resourceStore = this.store,
                        a.languageUtils = n,
                        a.pluralResolver = new Vs(n,{
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }),
                        !t || this.options.interpolation.format && this.options.interpolation.format !== o.interpolation.format || (a.formatter = r(t),
                        a.formatter.init(a, this.options),
                        this.options.interpolation.format = a.formatter.format.bind(a.formatter)),
                        a.interpolator = new Ws(this.options),
                        a.utils = {
                            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                        },
                        a.backendConnector = new Js(r(this.modules.backend),a.resourceStore,a,this.options),
                        a.backendConnector.on("*", (function(t) {
                            for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                                o[r - 1] = arguments[r];
                            e.emit(t, ...o)
                        }
                        )),
                        this.modules.languageDetector && (a.languageDetector = r(this.modules.languageDetector),
                        a.languageDetector.init && a.languageDetector.init(a, this.options.detection, this.options)),
                        this.modules.i18nFormat && (a.i18nFormat = r(this.modules.i18nFormat),
                        a.i18nFormat.init && a.i18nFormat.init(this)),
                        this.translator = new Ms(this.services,this.options),
                        this.translator.on("*", (function(t) {
                            for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                                o[r - 1] = arguments[r];
                            e.emit(t, ...o)
                        }
                        )),
                        this.modules.external.forEach((e=>{
                            e.init && e.init(this)
                        }
                        ))
                    }
                    if (this.format = this.options.interpolation.format,
                    n || (n = tl),
                    this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                        const e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0])
                    }
                    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"),
                    ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((t=>{
                        this[t] = function() {
                            return e.store[t](...arguments)
                        }
                    }
                    )),
                    ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((t=>{
                        this[t] = function() {
                            return e.store[t](...arguments),
                            e
                        }
                    }
                    ));
                    const a = xs()
                      , i = ()=>{
                        const e = (e,t)=>{
                            this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                            this.isInitialized = !0,
                            this.options.isClone || this.logger.log("initialized", this.options),
                            this.emit("initialized", this.options),
                            a.resolve(t),
                            n(e, t)
                        }
                        ;
                        if (this.languages && "v1" !== this.options.compatibilityAPI && !this.isInitialized)
                            return e(null, this.t.bind(this));
                        this.changeLanguage(this.options.lng, e)
                    }
                    ;
                    return this.options.resources || !this.options.initImmediate ? i() : setTimeout(i, 0),
                    a
                }
                loadResources(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tl;
                    const n = "string" == typeof e ? e : this.language;
                    if ("function" == typeof e && (t = e),
                    !this.options.resources || this.options.partialBundledLanguages) {
                        if (n && "cimode" === n.toLowerCase())
                            return t();
                        const e = []
                          , o = t=>{
                            t && this.services.languageUtils.toResolveHierarchy(t).forEach((t=>{
                                e.indexOf(t) < 0 && e.push(t)
                            }
                            ))
                        }
                        ;
                        n ? o(n) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e=>o(e))),
                        this.options.preload && this.options.preload.forEach((e=>o(e))),
                        this.services.backendConnector.load(e, this.options.ns, (e=>{
                            e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language),
                            t(e)
                        }
                        ))
                    } else
                        t(null)
                }
                reloadResources(e, t, n) {
                    const o = xs();
                    return e || (e = this.languages),
                    t || (t = this.options.ns),
                    n || (n = tl),
                    this.services.backendConnector.reload(e, t, (e=>{
                        o.resolve(),
                        n(e)
                    }
                    )),
                    o
                }
                use(e) {
                    if (!e)
                        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                    if (!e.type)
                        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                    return "backend" === e.type && (this.modules.backend = e),
                    ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e),
                    "languageDetector" === e.type && (this.modules.languageDetector = e),
                    "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                    "postProcessor" === e.type && Rs.addPostProcessor(e),
                    "formatter" === e.type && (this.modules.formatter = e),
                    "3rdParty" === e.type && this.modules.external.push(e),
                    this
                }
                setResolvedLanguage(e) {
                    if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
                        for (let e = 0; e < this.languages.length; e++) {
                            const t = this.languages[e];
                            if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
                                this.resolvedLanguage = t;
                                break
                            }
                        }
                }
                changeLanguage(e, t) {
                    var n = this;
                    this.isLanguageChangingTo = e;
                    const o = xs();
                    this.emit("languageChanging", e);
                    const r = e=>{
                        this.language = e,
                        this.languages = this.services.languageUtils.toResolveHierarchy(e),
                        this.resolvedLanguage = void 0,
                        this.setResolvedLanguage(e)
                    }
                      , a = (e,a)=>{
                        a ? (r(a),
                        this.translator.changeLanguage(a),
                        this.isLanguageChangingTo = void 0,
                        this.emit("languageChanged", a),
                        this.logger.log("languageChanged", a)) : this.isLanguageChangingTo = void 0,
                        o.resolve((function() {
                            return n.t(...arguments)
                        }
                        )),
                        t && t(e, (function() {
                            return n.t(...arguments)
                        }
                        ))
                    }
                      , i = t=>{
                        e || t || !this.services.languageDetector || (t = []);
                        const n = "string" == typeof t ? t : this.services.languageUtils.getBestMatchFromCodes(t);
                        n && (this.language || r(n),
                        this.translator.language || this.translator.changeLanguage(n),
                        this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(n)),
                        this.loadResources(n, (e=>{
                            a(e, n)
                        }
                        ))
                    }
                    ;
                    return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(i) : this.services.languageDetector.detect(i) : i(e) : i(this.services.languageDetector.detect()),
                    o
                }
                getFixedT(e, t, n) {
                    var o = this;
                    const r = function(e, t) {
                        let a;
                        if ("object" != typeof t) {
                            for (var i = arguments.length, s = new Array(i > 2 ? i - 2 : 0), l = 2; l < i; l++)
                                s[l - 2] = arguments[l];
                            a = o.options.overloadTranslationOptionHandler([e, t].concat(s))
                        } else
                            a = {
                                ...t
                            };
                        a.lng = a.lng || r.lng,
                        a.lngs = a.lngs || r.lngs,
                        a.ns = a.ns || r.ns,
                        a.keyPrefix = a.keyPrefix || n || r.keyPrefix;
                        const c = o.options.keySeparator || ".";
                        let u;
                        return u = a.keyPrefix && Array.isArray(e) ? e.map((e=>`${a.keyPrefix}${c}${e}`)) : a.keyPrefix ? `${a.keyPrefix}${c}${e}` : e,
                        o.t(u, a)
                    };
                    return "string" == typeof e ? r.lng = e : r.lngs = e,
                    r.ns = t,
                    r.keyPrefix = n,
                    r
                }
                t() {
                    return this.translator && this.translator.translate(...arguments)
                }
                exists() {
                    return this.translator && this.translator.exists(...arguments)
                }
                setDefaultNamespace(e) {
                    this.options.defaultNS = e
                }
                hasLoadedNamespace(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isInitialized)
                        return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
                        !1;
                    if (!this.languages || !this.languages.length)
                        return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
                        !1;
                    const n = t.lng || this.resolvedLanguage || this.languages[0]
                      , o = !!this.options && this.options.fallbackLng
                      , r = this.languages[this.languages.length - 1];
                    if ("cimode" === n.toLowerCase())
                        return !0;
                    const a = (e,t)=>{
                        const n = this.services.backendConnector.state[`${e}|${t}`];
                        return -1 === n || 2 === n
                    }
                    ;
                    if (t.precheck) {
                        const e = t.precheck(this, a);
                        if (void 0 !== e)
                            return e
                    }
                    return !(!this.hasResourceBundle(n, e) && this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages) && (!a(n, e) || o && !a(r, e)))
                }
                loadNamespaces(e, t) {
                    const n = xs();
                    return this.options.ns ? ("string" == typeof e && (e = [e]),
                    e.forEach((e=>{
                        this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                    }
                    )),
                    this.loadResources((e=>{
                        n.resolve(),
                        t && t(e)
                    }
                    )),
                    n) : (t && t(),
                    Promise.resolve())
                }
                loadLanguages(e, t) {
                    const n = xs();
                    "string" == typeof e && (e = [e]);
                    const o = this.options.preload || []
                      , r = e.filter((e=>o.indexOf(e) < 0));
                    return r.length ? (this.options.preload = o.concat(r),
                    this.loadResources((e=>{
                        n.resolve(),
                        t && t(e)
                    }
                    )),
                    n) : (t && t(),
                    Promise.resolve())
                }
                dir(e) {
                    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
                    !e)
                        return "rtl";
                    const t = this.services && this.services.languageUtils || new _s(Qs());
                    return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(t.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
                }
                static createInstance() {
                    return new nl(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},arguments.length > 1 ? arguments[1] : void 0)
                }
                cloneInstance() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tl;
                    const n = e.forkResourceStore;
                    n && delete e.forkResourceStore;
                    const o = {
                        ...this.options,
                        ...e,
                        isClone: !0
                    }
                      , r = new nl(o);
                    return void 0 === e.debug && void 0 === e.prefix || (r.logger = r.logger.clone(e)),
                    ["store", "services", "language"].forEach((e=>{
                        r[e] = this[e]
                    }
                    )),
                    r.services = {
                        ...this.services
                    },
                    r.services.utils = {
                        hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
                    },
                    n && (r.store = new Ds(this.store.data,o),
                    r.services.resourceStore = r.store),
                    r.translator = new Ms(r.services,o),
                    r.translator.on("*", (function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                            n[o - 1] = arguments[o];
                        r.emit(e, ...n)
                    }
                    )),
                    r.init(o, t),
                    r.translator.options = o,
                    r.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
                    },
                    r
                }
                toJSON() {
                    return {
                        options: this.options,
                        store: this.store,
                        language: this.language,
                        languages: this.languages,
                        resolvedLanguage: this.resolvedLanguage
                    }
                }
            }
            const ol = nl.createInstance();
            ol.createInstance = nl.createInstance,
            ol.createInstance,
            ol.dir,
            ol.init,
            ol.loadResources,
            ol.reloadResources,
            ol.use,
            ol.changeLanguage,
            ol.getFixedT,
            ol.t,
            ol.exists,
            ol.setDefaultNamespace,
            ol.hasLoadedNamespace,
            ol.loadNamespaces,
            ol.loadLanguages;
            var rl = n(593)
              , al = n(734)
              , il = []
              , sl = il.forEach
              , ll = il.slice;
            function cl(e) {
                return sl.call(ll.call(arguments, 1), (function(t) {
                    if (t)
                        for (var n in t)
                            void 0 === e[n] && (e[n] = t[n])
                }
                )),
                e
            }
            function ul(e) {
                return e ? "function" == typeof e ? new e : e : null
            }
            function dl(e, t, n, o) {
                var r = e.read.bind(e);
                if (2 !== r.length)
                    r(t, n, o);
                else
                    try {
                        var a = r(t, n);
                        a && "function" == typeof a.then ? a.then((function(e) {
                            return o(null, e)
                        }
                        )).catch(o) : o(null, a)
                    } catch (e) {
                        o(e)
                    }
            }
            var pl = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    (0,
                    rl.Z)(this, e),
                    this.backends = [],
                    this.type = "backend",
                    this.allOptions = o,
                    this.init(t, n)
                }
                return (0,
                al.Z)(e, [{
                    key: "init",
                    value: function(e) {
                        var t = this
                          , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        this.services = e,
                        this.options = cl(n, this.options || {}, {
                            handleEmptyResourcesAsFailed: !0,
                            cacheHitMode: "none"
                        }),
                        this.allOptions = o,
                        this.options.backends && this.options.backends.forEach((function(n, r) {
                            t.backends[r] = t.backends[r] || ul(n),
                            t.backends[r].init(e, t.options.backendOptions && t.options.backendOptions[r] || {}, o)
                        }
                        )),
                        this.services && this.options.reloadInterval && setInterval((function() {
                            return t.reload()
                        }
                        ), this.options.reloadInterval)
                    }
                }, {
                    key: "read",
                    value: function(e, t, n) {
                        var o = this
                          , r = this.backends.length
                          , a = function n(r, a) {
                            if (!(r < 0)) {
                                var i = o.backends[r];
                                i.save ? (i.save(e, t, a),
                                n(r - 1, a)) : n(r - 1, a)
                            }
                        };
                        !function i(s) {
                            if (s >= r)
                                return n(new Error("non of the backend loaded data",!0));
                            var l = s === r - 1
                              , c = o.options.handleEmptyResourcesAsFailed && !l ? 0 : -1
                              , u = o.backends[s];
                            u.read ? dl(u, e, t, (function(r, l) {
                                if (!r && l && Object.keys(l).length > c) {
                                    if (n(null, l, s),
                                    a(s - 1, l),
                                    u.save && o.options.cacheHitMode && ["refresh", "refreshAndUpdateStore"].indexOf(o.options.cacheHitMode) > -1) {
                                        var d = o.backends[s + 1];
                                        d && d.read && dl(d, e, t, (function(n, r) {
                                            n || r && (Object.keys(r).length <= c || (a(s, r),
                                            "refreshAndUpdateStore" === o.options.cacheHitMode && o.services && o.services.resourceStore && o.services.resourceStore.addResourceBundle(e, t, r)))
                                        }
                                        ))
                                    }
                                } else
                                    i(s + 1)
                            }
                            )) : i(s + 1)
                        }(0)
                    }
                }, {
                    key: "create",
                    value: function(e, t, n, o) {
                        var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {}
                          , a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                        this.backends.forEach((function(i) {
                            if (i.create) {
                                var s = i.create.bind(i);
                                if (s.length < 6)
                                    try {
                                        var l;
                                        (l = 5 === s.length ? s(e, t, n, o, a) : s(e, t, n, o)) && "function" == typeof l.then ? l.then((function(e) {
                                            return r(null, e)
                                        }
                                        )).catch(r) : r(null, l)
                                    } catch (e) {
                                        r(e)
                                    }
                                else
                                    s(e, t, n, o, r, a)
                            }
                        }
                        ))
                    }
                }, {
                    key: "reload",
                    value: function() {
                        var e = this
                          , t = this.services
                          , n = t.backendConnector
                          , o = t.languageUtils
                          , r = t.logger
                          , a = n.language;
                        if (!a || "cimode" !== a.toLowerCase()) {
                            var i = []
                              , s = function(e) {
                                o.toResolveHierarchy(e).forEach((function(e) {
                                    i.indexOf(e) < 0 && i.push(e)
                                }
                                ))
                            };
                            s(a),
                            this.allOptions.preload && this.allOptions.preload.forEach((function(e) {
                                return s(e)
                            }
                            )),
                            i.forEach((function(t) {
                                e.allOptions.ns.forEach((function(e) {
                                    n.read(t, e, "read", null, null, (function(o, a) {
                                        o && r.warn("loading namespace ".concat(e, " for language ").concat(t, " failed"), o),
                                        !o && a && r.log("loaded namespace ".concat(e, " for language ").concat(t), a),
                                        n.loaded("".concat(t, "|").concat(e), o, a)
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                    }
                }]),
                e
            }();
            function fl(e) {
                return (fl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            pl.type = "backend";
            var hl = []
              , ml = hl.forEach
              , yl = hl.slice;
            function gl(e) {
                return ml.call(yl.call(arguments, 1), (function(t) {
                    if (t)
                        for (var n in t)
                            void 0 === e[n] && (e[n] = t[n])
                }
                )),
                e
            }
            function wl() {
                return "function" == typeof XMLHttpRequest || "object" === ("undefined" == typeof XMLHttpRequest ? "undefined" : fl(XMLHttpRequest))
            }
            var vl, bl, kl, zl = n(5), xl = n.t(zl, 2);
            function jl(e) {
                return (jl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            "function" == typeof fetch && (vl = "undefined" != typeof global && global.fetch ? global.fetch : "undefined" != typeof window && window.fetch ? window.fetch : fetch),
            wl() && ("undefined" != typeof global && global.XMLHttpRequest ? bl = global.XMLHttpRequest : "undefined" != typeof window && window.XMLHttpRequest && (bl = window.XMLHttpRequest)),
            "function" == typeof ActiveXObject && ("undefined" != typeof global && global.ActiveXObject ? kl = global.ActiveXObject : "undefined" != typeof window && window.ActiveXObject && (kl = window.ActiveXObject)),
            vl || !xl || bl || kl || (vl = zl || xl),
            "function" != typeof vl && (vl = void 0);
            var Cl = function(e, t) {
                if (t && "object" === jl(t)) {
                    var n = "";
                    for (var o in t)
                        n += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(t[o]);
                    if (!n)
                        return e;
                    e = e + (-1 !== e.indexOf("?") ? "&" : "?") + n.slice(1)
                }
                return e
            }
              , Sl = function(e, t, n) {
                vl(e, t).then((function(e) {
                    if (!e.ok)
                        return n(e.statusText || "Error", {
                            status: e.status
                        });
                    e.text().then((function(t) {
                        n(null, {
                            status: e.status,
                            data: t
                        })
                    }
                    )).catch(n)
                }
                )).catch(n)
            }
              , El = !1
              , Nl = function(e, t, n, o) {
                return "function" == typeof n && (o = n,
                n = void 0),
                o = o || function() {}
                ,
                vl && 0 !== t.indexOf("file:") ? function(e, t, n, o) {
                    e.queryStringParams && (t = Cl(t, e.queryStringParams));
                    var r = gl({}, "function" == typeof e.customHeaders ? e.customHeaders() : e.customHeaders);
                    n && (r["Content-Type"] = "application/json");
                    var a = "function" == typeof e.requestOptions ? e.requestOptions(n) : e.requestOptions
                      , i = gl({
                        method: n ? "POST" : "GET",
                        body: n ? e.stringify(n) : void 0,
                        headers: r
                    }, El ? {} : a);
                    try {
                        Sl(t, i, o)
                    } catch (e) {
                        if (!a || 0 === Object.keys(a).length || !e.message || e.message.indexOf("not implemented") < 0)
                            return o(e);
                        try {
                            Object.keys(a).forEach((function(e) {
                                delete i[e]
                            }
                            )),
                            Sl(t, i, o),
                            El = !0
                        } catch (e) {
                            o(e)
                        }
                    }
                }(e, t, n, o) : wl() || "function" == typeof ActiveXObject ? function(e, t, n, o) {
                    n && "object" === jl(n) && (n = Cl("", n).slice(1)),
                    e.queryStringParams && (t = Cl(t, e.queryStringParams));
                    try {
                        var r;
                        (r = bl ? new bl : new kl("MSXML2.XMLHTTP.3.0")).open(n ? "POST" : "GET", t, 1),
                        e.crossDomain || r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                        r.withCredentials = !!e.withCredentials,
                        n && r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                        r.overrideMimeType && r.overrideMimeType("application/json");
                        var a = e.customHeaders;
                        if (a = "function" == typeof a ? a() : a)
                            for (var i in a)
                                r.setRequestHeader(i, a[i]);
                        r.onreadystatechange = function() {
                            r.readyState > 3 && o(r.status >= 400 ? r.statusText : null, {
                                status: r.status,
                                data: r.responseText
                            })
                        }
                        ,
                        r.send(n)
                    } catch (e) {
                        console && console.log(e)
                    }
                }(e, t, n, o) : void o(new Error("No fetch and no xhr implementation found!"))
            };
            function Ol(e) {
                return (Ol = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function Tl(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function Zl(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, Il(o.key), o)
                }
            }
            function Il(e) {
                var t = function(e, t) {
                    if ("object" !== Ol(e) || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t);
                        if ("object" !== Ol(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e, "string");
                return "symbol" === Ol(t) ? t : String(t)
            }
            var Pl = function() {
                return {
                    loadPath: "/locales/{{lng}}/{{ns}}.json",
                    addPath: "/locales/add/{{lng}}/{{ns}}",
                    allowMultiLoading: !1,
                    parse: function(e) {
                        return JSON.parse(e)
                    },
                    stringify: JSON.stringify,
                    parsePayload: function(e, t, n) {
                        return function(e, t, n) {
                            return (t = Il(t))in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n,
                            e
                        }({}, t, n || "")
                    },
                    parseLoadPayload: function(e, t) {},
                    request: Nl,
                    reloadInterval: "undefined" == typeof window && 36e5,
                    customHeaders: {},
                    queryStringParams: {},
                    crossDomain: !1,
                    withCredentials: !1,
                    overrideMimeType: !1,
                    requestOptions: {
                        mode: "cors",
                        credentials: "same-origin",
                        cache: "default"
                    }
                }
            }
              , Ll = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Tl(this, e),
                    this.services = t,
                    this.options = n,
                    this.allOptions = o,
                    this.type = "backend",
                    this.init(t, n, o)
                }
                var t, n;
                return t = e,
                (n = [{
                    key: "init",
                    value: function(e) {
                        var t = this
                          , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        this.services = e,
                        this.options = gl(n, this.options || {}, Pl()),
                        this.allOptions = o,
                        this.services && this.options.reloadInterval && setInterval((function() {
                            return t.reload()
                        }
                        ), this.options.reloadInterval)
                    }
                }, {
                    key: "readMulti",
                    value: function(e, t, n) {
                        this._readAny(e, e, t, t, n)
                    }
                }, {
                    key: "read",
                    value: function(e, t, n) {
                        this._readAny([e], e, [t], t, n)
                    }
                }, {
                    key: "_readAny",
                    value: function(e, t, n, o, r) {
                        var a, i = this, s = this.options.loadPath;
                        "function" == typeof this.options.loadPath && (s = this.options.loadPath(e, n)),
                        (s = function(e) {
                            return !!e && "function" == typeof e.then
                        }(a = s) ? a : Promise.resolve(a)).then((function(a) {
                            if (!a)
                                return r(null, {});
                            var s = i.services.interpolator.interpolate(a, {
                                lng: e.join("+"),
                                ns: n.join("+")
                            });
                            i.loadUrl(s, r, t, o)
                        }
                        ))
                    }
                }, {
                    key: "loadUrl",
                    value: function(e, t, n, o) {
                        var r = this
                          , a = "string" == typeof n ? [n] : n
                          , i = "string" == typeof o ? [o] : o
                          , s = this.options.parseLoadPayload(a, i);
                        this.options.request(this.options, e, s, (function(a, i) {
                            if (i && (i.status >= 500 && i.status < 600 || !i.status))
                                return t("failed loading " + e + "; status code: " + i.status, !0);
                            if (i && i.status >= 400 && i.status < 500)
                                return t("failed loading " + e + "; status code: " + i.status, !1);
                            if (!i && a && a.message && a.message.indexOf("Failed to fetch") > -1)
                                return t("failed loading " + e + ": " + a.message, !0);
                            if (a)
                                return t(a, !1);
                            var s, l;
                            try {
                                s = "string" == typeof i.data ? r.options.parse(i.data, n, o) : i.data
                            } catch (t) {
                                l = "failed parsing " + e + " to json"
                            }
                            if (l)
                                return t(l, !1);
                            t(null, s)
                        }
                        ))
                    }
                }, {
                    key: "create",
                    value: function(e, t, n, o, r) {
                        var a = this;
                        if (this.options.addPath) {
                            "string" == typeof e && (e = [e]);
                            var i = this.options.parsePayload(t, n, o)
                              , s = 0
                              , l = []
                              , c = [];
                            e.forEach((function(n) {
                                var o = a.options.addPath;
                                "function" == typeof a.options.addPath && (o = a.options.addPath(n, t));
                                var u = a.services.interpolator.interpolate(o, {
                                    lng: n,
                                    ns: t
                                });
                                a.options.request(a.options, u, i, (function(t, n) {
                                    s += 1,
                                    l.push(t),
                                    c.push(n),
                                    s === e.length && "function" == typeof r && r(l, c)
                                }
                                ))
                            }
                            ))
                        }
                    }
                }, {
                    key: "reload",
                    value: function() {
                        var e = this
                          , t = this.services
                          , n = t.backendConnector
                          , o = t.languageUtils
                          , r = t.logger
                          , a = n.language;
                        if (!a || "cimode" !== a.toLowerCase()) {
                            var i = []
                              , s = function(e) {
                                o.toResolveHierarchy(e).forEach((function(e) {
                                    i.indexOf(e) < 0 && i.push(e)
                                }
                                ))
                            };
                            s(a),
                            this.allOptions.preload && this.allOptions.preload.forEach((function(e) {
                                return s(e)
                            }
                            )),
                            i.forEach((function(t) {
                                e.allOptions.ns.forEach((function(e) {
                                    n.read(t, e, "read", null, null, (function(o, a) {
                                        o && r.warn("loading namespace ".concat(e, " for language ").concat(t, " failed"), o),
                                        !o && a && r.log("loaded namespace ".concat(e, " for language ").concat(t), a),
                                        n.loaded("".concat(t, "|").concat(e), o, a)
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                    }
                }]) && Zl(t.prototype, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e
            }();
            Ll.type = "backend";
            var Al, Dl, Rl = Ll, Bl = null !== (Al = window.location.pathname.slice(1, 3)) && void 0 !== Al ? Al : "", Ml = {
                en: {
                    common: hs,
                    header: ws,
                    caseList: ps,
                    exchanger: ys
                }
            };
            ol.use(pl).use(j.Db).init({
                lng: Bl,
                fallbackLng: "en",
                debug: !1,
                ns: ["common"],
                defaultNS: "common",
                keySeparator: !1,
                interpolation: {
                    escapeValue: !1
                },
                react: {
                    useSuspense: !0
                },
                backend: {
                    backends: [(Dl = Ml,
                    {
                        type: "backend",
                        init: function(e, t, n) {},
                        read: function(e, t, n) {
                            if ("function" != typeof Dl)
                                n(null, Dl && Dl[e] && Dl[e][t]);
                            else {
                                if (Dl.length < 3) {
                                    try {
                                        var o = Dl(e, t);
                                        o && "function" == typeof o.then ? o.then((function(e) {
                                            return n(null, e && e.default || e)
                                        }
                                        )).catch(n) : n(null, o)
                                    } catch (e) {
                                        n(e)
                                    }
                                    return
                                }
                                Dl(e, t, n)
                            }
                        }
                    }), Rl],
                    backendOptions: [null, {
                        loadPath: "/lang/{{ns}}/{{lng}}.json"
                    }]
                }
            });
            var Fl, _l, Ul = !1, Hl = document.querySelector("#layout-root"), Gl = document.querySelector("#header-root"), $l = document.querySelector("#footer-root"), Yl = function() {
                var e = (0,
                r.Z)(i().mark((function e() {
                    return i().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", window.__layout.initialData);
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }(), Vl = new v.QueryClient;
            Fl = (0,
            s.tZ)((function() {
                var e, t, n, o;
                return (0,
                y.useEffect)((function() {
                    window.__layout.initialData.crispOpen && (m.configure("41b55e43-af4f-4213-b7f5-44ba91542ff9", {
                        safeMode: !0
                    }),
                    window.__layout.initialData.user && (m.user.setAvatar(window.__layout.initialData.user.avatar),
                    m.user.setNickname(window.__layout.initialData.user.username),
                    m.session.setData({
                        userKey: window.__layout.initialData.user.userKey
                    }),
                    m.chat.onChatOpened((function() {
                        m.session.setData({
                            userKey: window.__layout.initialData.user.userKey
                        })
                    }
                    ))))
                }
                ), []),
                (0,
                s.tZ)(v.QueryClientProvider, {
                    client: Vl,
                    children: (0,
                    s.tZ)(y.Suspense, {
                        fallback: (0,
                        s.tZ)(s.HY, {}),
                        children: (0,
                        s.tZ)(S.n, {
                            getInitialData: Yl,
                            children: (0,
                            s.tZ)(Z, {
                                userId: null === (e = window.__layout) || void 0 === e || null === (t = e.initialData) || void 0 === t || null === (n = t.user) || void 0 === n ? void 0 : n.id,
                                statsSocketUrl: null === (o = window.__layout) || void 0 === o ? void 0 : o.statsSocketUrl,
                                children: (0,
                                s.BX)(V, {
                                    children: [(0,
                                    s.tZ)(ls, {}), (0,
                                    w.createPortal)((0,
                                    s.tZ)(ua, {}), Gl), (0,
                                    w.createPortal)((0,
                                    s.tZ)(K, {}), $l)]
                                })
                            })
                        })
                    })
                })
            }
            ), {}),
            _l = Hl,
            Ul || (cs.S({
                enabled: !0,
                dsn: "https://a0c78196611945919afa7819e907c7e7@o4505164817563648.ingest.sentry.io/4505306217185280",
                ignoreErrors: ["ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications"],
                tracesSampleRate: 1
            }),
            window.__userInitialData.steamId ? us.av({
                id: window.__userInitialData.steamId,
                username: window.__userInitialData.username
            }) : us.av(null),
            Ul = !0),
            (0,
            w.render)(Fl, _l, undefined)
        },
        8: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return f
                }
            });
            var o = n(652)
              , r = n(657)
              , a = n(656)
              , i = n(3)
              , s = n.n(i)
              , l = n(19)
              , c = n.n(l)
              , u = ["body", "auth", "currency"];
            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        (0,
                        o.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var f = function() {
                var e = (0,
                a.Z)(s().mark((function e(t) {
                    var n, o, i, l, c, d, f, h = arguments;
                    return s().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = h.length > 1 && void 0 !== h[1] ? h[1] : {},
                                o = n.body,
                                i = n.auth,
                                l = n.currency,
                                c = (0,
                                r.Z)(n, u),
                                d = o ? {
                                    "x-requested-with": "XMLHttpRequest",
                                    "content-type": "application/json"
                                } : {},
                                i && (d.Authorization = "Bearer ".concat(i)),
                                l && (d["x-currency"] = l),
                                f = p(p({
                                    method: o ? "POST" : "GET",
                                    body: o && "string" != typeof o ? JSON.stringify(o) : void 0
                                }, c), {}, {
                                    headers: p(p({}, d), c.headers)
                                }),
                                e.prev = 5,
                                e.abrupt("return", fetch(t, f).then(function() {
                                    var e = (0,
                                    a.Z)(s().mark((function e(t) {
                                        var n;
                                        return s().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    t.json();
                                                case 2:
                                                    if (n = e.sent,
                                                    !t.ok) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    return e.abrupt("return", n);
                                                case 7:
                                                    return e.abrupt("return", Promise.reject(n));
                                                case 8:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }()));
                            case 9:
                                return e.prev = 9,
                                e.t0 = e.catch(5),
                                e.abrupt("return", Promise.reject(e.t0.message));
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[5, 9]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            c()({
                limit: 1,
                interval: 3e3
            })(f)
        },
        4: function(e, t, n) {
            "use strict";
            n.d(t, {
                AM: function() {
                    return j
                },
                Cb: function() {
                    return w
                },
                DT: function() {
                    return E
                },
                Jf: function() {
                    return m
                },
                PJ: function() {
                    return S
                },
                Qq: function() {
                    return b
                },
                SI: function() {
                    return C
                },
                SW: function() {
                    return O
                },
                Tw: function() {
                    return h
                },
                Ud: function() {
                    return v
                },
                Ye: function() {
                    return d
                },
                e0: function() {
                    return p
                },
                f3: function() {
                    return y
                },
                fO: function() {
                    return f
                },
                gJ: function() {
                    return g
                },
                hg: function() {
                    return x
                },
                i7: function() {
                    return N
                },
                kB: function() {
                    return z
                },
                ro: function() {
                    return k
                }
            });
            var o = n(652)
              , r = n(657)
              , a = n(318)
              , i = n(1)
              , s = ["className"];
            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        (0,
                        o.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var u = function(e) {
                var t = e.className
                  , n = void 0 === t ? "" : t
                  , o = (0,
                r.Z)(e, s);
                return (0,
                a.tZ)("svg", c({
                    className: (0,
                    i.cn)("icon", n)
                }, o))
            }
              , d = function(e) {
                return (0,
                a.tZ)(u, c(c({
                    viewBox: "0 0 17.631 13.136",
                    fill: "none"
                }, e), {}, {
                    children: (0,
                    a.tZ)("path", {
                        d: "M3639.648,516.9l5.555,5.555,9.954-9.954",
                        transform: "translate(-3638.588 -511.443)",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "3"
                    })
                }))
            }
              , p = function(e) {
                return (0,
                a.tZ)(u, c(c({
                    viewBox: "0 0 10 6",
                    fill: "none"
                }, e), {}, {
                    children: (0,
                    a.tZ)("path", {
                        d: "M1 1L5 5L9 1",
                        stroke: "currentColor"
                    })
                }))
            }
              , f = function(e) {
                return (0,
                a.BX)(u, c(c({
                    viewBox: "0 0 10 9",
                    fill: "none"
                }, e), {}, {
                    children: [(0,
                    a.tZ)("path", {
                        d: "M5 0L5 8",
                        stroke: "currentColor"
                    }), (0,
                    a.tZ)("path", {
                        d: "M1 4L5 8",
                        stroke: "currentColor"
                    }), (0,
                    a.tZ)("path", {
                        d: "M9 4L5 8",
                        stroke: "currentColor"
                    })]
                }))
            }
              , h = function(e) {
                return (0,
                a.tZ)(u, c(c({
                    viewBox: "0 0 24 24"
                }, e), {}, {
                    children: (0,
                    a.tZ)("path", {
                        fill: "currentColor",
                        d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                    })
                }))
            }
              , m = function(e) {
                return (0,
                a.tZ)(u, c(c({
                    viewBox: "0 0 18 17",
                    fill: "currentColor"
                }, e), {}, {
                    children: (0,
                    a.tZ)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6.69082 8.84536L0 0.333313H5.29961L9.4298 5.59434L13.8423 0.357001H16.761L10.841 7.39196L17.8605 16.3333H12.5767L8.10452 10.6438L3.33005 16.3175H0.395493L6.69082 8.84536ZM13.3468 14.7562L3.24954 1.91044H4.52886L14.6134 14.7562H13.3468Z"
                    })
                }))
            }
              , y = function(e) {
                return (0,
                a.tZ)(u, c(c({
                    viewBox: "0 0 22 19",
                    fill: "currentColor"
                }, e), {}, {
                    children: (0,
                    a.tZ)("path", {
                        d: "M20.825 3.5h-7a6 6 0 0 0 0 12h7v2a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2Zm-7 2h8v8h-8a4 4 0 1 1 0-8Zm0 3v2h3v-2h-3Z"
                    })
                }))
            }
              , g = function(e) {
                return (0,
                a.BX)(u, c(c({
                    viewBox: "0 0 24 25"
                }, e), {}, {
                    children: [(0,
                    a.tZ)("circle", {
                        cx: "12.04",
                        cy: "12.478",
                        r: "11.693",
                        fill: "currentColor"
                    }), (0,
                    a.tZ)("path", {
                        fill: "#231c11",
                        d: "M6.97 16.28h10.14v1.014H6.97V16.28Zm0-7.098 2.535 1.521 2.535-3.042 2.535 3.042 2.535-1.52v6.083H6.97V9.182Z"
                    })]
                }))
            }
              , w = function(e) {
                return (0,
                a.BX)(u, c(c({
                    viewBox: "0 0 24 24"
                }, e), {}, {
                    children: [(0,
                    a.tZ)("path", {
                        fill: "currentColor",
                        d: "M12.192 23.704c-6.456 0-11.69-5.233-11.69-11.69 0-6.456 5.234-11.69 11.69-11.69 6.456 0 11.69 5.234 11.69 11.69 0 6.457-5.234 11.69-11.69 11.69Zm0-16.65-4.96 4.96 4.96 4.96 4.96-4.96-4.96-4.96Z"
                    }), (0,
                    a.tZ)("circle", {
                        cx: "12.192",
                        cy: "11.949",
                        r: "6.541",
                        fill: "currentColor"
                    }), (0,
                    a.tZ)("path", {
                        fill: "#18080a",
                        d: "M9.127 8.38h6.13a.43.43 0 0 1 .349.177l1.644 2.26a.215.215 0 0 1-.016.273l-4.884 5.29a.214.214 0 0 1-.316 0L7.15 11.09a.215.215 0 0 1-.015-.272l1.644-2.26a.43.43 0 0 1 .348-.178Z"
                    })]
                }))
            }
              , v = function(e) {
                return (0,
                a.tZ)(u, c(c({
                    viewBox: "0 0 24 25"
                }, e), {}, {
                    children: (0,
                    a.tZ)("path", {
                        fill: "currentColor",
                        d: "M11.694 24.159c-6.456 0-11.69-5.234-11.69-11.69 0-6.457 5.234-11.69 11.69-11.69 6.457 0 11.69 5.233 11.69 11.69 0 6.456-5.233 11.69-11.69 11.69Zm0-16.65-4.96 4.96 4.96 4.96 4.96-4.96-4.96-4.96Z"
                    })
                }))
            }
              , b = function(e) {
                return (0,
                a.BX)(u, c(c({
                    viewBox: "0 0 25 25"
                }, e), {}, {
                    children: [(0,
                    a.tZ)("circle", {
                        cx: "12.547",
                        cy: "12.478",
                        r: "11.693",
                        fill: "currentColor"
                    }), (0,
                    a.tZ)("path", {
                        fill: "#0d0818",
                        d: "M12.547 7.661a5.072 5.072 0 0 1 5.07 5.07 5.072 5.072 0 0 1-5.07 5.07 5.072 5.072 0 0 1-5.07-5.07 5.072 5.072 0 0 1 5.07-5.07Zm0 7.098a2.025 2.025 0 0 0 2.028-2.028 2.025 2.025 0 0 0-2.028-2.028 2.025 2.025 0 0 0-2.028 2.028c0 1.122.906 2.028 2.028 2.028Zm0-2.535c.278 0 .507.228.507.507a.508.508 0 0 1-.507.507.508.508 0 0 1-.507-.507c0-.279.228-.507.507-.507Z"
                    })]
                }))
            }
              , k = function(e) {
                return (0,
                a.BX)(u, c(c({
                    viewBox: "0 0 24 25"
                }, e), {}, {
                    children: [(0,
                    a.tZ)("circle", {
                        cx: "12.049",
                        cy: "12.478",
                        r: "11.693",
                        fill: "currentColor"
                    }), (0,
                    a.tZ)("path", {
                        fill: "#08180e",
                        d: "m15.322 8.644-4.004 4.005.73.732 4.006-4.005a5.175 5.175 0 0 1-4.005 8.446 5.175 5.175 0 0 1-5.173-5.173 5.175 5.175 0 0 1 8.446-4.005Z"
                    })]
                }))
            }
              , z = function(e) {
                return (0,
                a.BX)(u, c(c({
                    viewBox: "0 0 24 24"
                }, e), {}, {
                    children: [(0,
                    a.tZ)("path", {
                        d: "M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z",
                        fill: "currentColor"
                    }), (0,
                    a.tZ)("circle", {
                        cx: "8",
                        cy: "8",
                        r: "1.5",
                        fill: "currentColor"
                    }), (0,
                    a.tZ)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "1.5",
                        fill: "currentColor"
                    }), (0,
                    a.tZ)("circle", {
                        cx: "16",
                        cy: "16",
                        r: "1.5",
                        fill: "currentColor"
                    }), (0,
                    a.tZ)("circle", {
                        cx: "8",
                        cy: "16",
                        r: "1.5",
                        fill: "currentColor"
                    }), (0,
                    a.tZ)("circle", {
                        cx: "16",
                        cy: "8",
                        r: "1.5",
                        fill: "currentColor"
                    })]
                }))
            }
              , x = function(e) {
                return (0,
                a.tZ)(u, c(c({
                    viewBox: "0 0 13 11",
                    fill: "none"
                }, e), {}, {
                    children: (0,
                    a.tZ)("path", {
                        fill: "currentColor",
                        d: "M10.28 10.083H2.371v-.917c0-.607.26-1.19.724-1.62a2.574 2.574 0 0 1 1.748-.671h2.966c.655 0 1.284.241 1.747.67a2.21 2.21 0 0 1 .724 1.621v.917ZM6.326 5.958a3.17 3.17 0 0 1-1.135-.21 2.991 2.991 0 0 1-.963-.595 2.746 2.746 0 0 1-.642-.893 2.577 2.577 0 0 1 0-2.104c.149-.334.367-.637.642-.893.276-.255.603-.457.963-.596A3.17 3.17 0 0 1 6.326.458c.786 0 1.54.29 2.097.805.556.516.869 1.216.869 1.945 0 .73-.313 1.429-.87 1.945a3.088 3.088 0 0 1-2.096.805Z"
                    })
                }))
            }
              , j = function(e) {
                return (0,
                a.tZ)(u, c(c({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), {}, {
                    children: (0,
                    a.tZ)("path", {
                        fill: "currentColor",
                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm-1-7v2h2v-2h-2Zm2-1.645A3.502 3.502 0 0 0 12 6.5a3.501 3.501 0 0 0-3.433 2.813l1.962.393A1.5 1.5 0 1 1 12 11.5a1 1 0 0 0-1 1V14h2v-.645Z"
                    })
                }))
            }
              , C = function(e) {
                return (0,
                a.tZ)(u, c(c({
                    viewBox: "0 0 4 13",
                    fill: "none"
                }, e), {}, {
                    children: (0,
                    a.tZ)("path", {
                        d: "M0.872478 8.32093H2.87848L3.15048 0.109931H0.583478L0.872478 8.32093ZM3.37148 10.9049C3.37148 10.1229 2.75948 9.51093 1.92648 9.51093C1.05948 9.51093 0.447478 10.1229 0.447478 10.9049C0.447478 11.6869 1.05948 12.2989 1.92648 12.2989C2.75948 12.2989 3.37148 11.6869 3.37148 10.9049Z",
                        fill: "currentColor"
                    })
                }))
            }
              , S = function(e) {
                return (0,
                a.tZ)(u, c(c({
                    viewBox: "0 0 21 13",
                    fill: "currentColor"
                }, e), {}, {
                    children: (0,
                    a.tZ)("path", {
                        d: "M2.6218 0.520295C2.56941 0.609796 2.48909 0.765863 2.36649 1.40523C2.28697 1.82029 2.18724 2.3738 2.25585 2.76761C2.31596 3.11386 2.42313 3.26825 2.47074 3.32978C2.49866 3.36586 2.56568 3.44697 2.87179 3.66625C2.95636 3.72694 3.01966 3.76834 3.06939 3.80022C3.18747 3.87462 3.23189 3.89112 3.31354 3.95965C3.40449 4.03572 3.49571 4.15039 3.57204 4.27737C3.64491 4.3982 3.70475 4.53049 3.73985 4.65216C3.82017 4.93129 3.80741 5.1914 3.76858 5.39334C2.79467 7.32208 1.82049 9.25054 0.845782 11.1793C0.815996 11.3642 0.768391 11.8226 1.03168 12.1571C1.21492 12.3892 1.46545 12.4564 1.70959 12.5154C2.83084 12.7861 3.66193 12.8574 3.66193 12.8574C4.98424 12.9998 5.35311 13.0683 5.96027 12.9036C5.9624 12.903 5.96453 12.9025 5.96639 12.9022C6.24777 12.8244 6.47914 12.6141 6.59669 12.3344C7.26795 10.7416 7.94027 9.14986 8.61153 7.55702C8.79743 7.30278 8.96019 7.2667 9.03493 7.25999C9.08679 7.25551 9.20886 7.29048 9.45327 7.34949C10.0187 7.48542 10.3665 7.62862 10.5769 7.70022C11.2381 7.92453 11.3306 7.70638 13.351 7.70022C13.4806 7.69966 13.6638 7.70022 13.8622 7.59394C14.3351 7.34166 14.4856 6.70844 14.513 6.53503C14.539 6.36722 14.5103 6.34568 14.5438 5.55724C14.5595 5.19392 14.5725 5.03058 14.6678 4.83983C14.7973 4.58196 15.0036 4.45358 15.0784 4.40799C15.1872 4.3417 15.2949 4.30115 15.3935 4.27765H19.9681C20.199 4.27765 20.386 4.08103 20.386 3.83826V2.31003H20.8218V0.641121H20.386V-0.000208591H13.1194L12.83 0.348285H10.2825L10.2266 0.2806L10.1469 0.184387L9.99314 -0.000488281H3.51725C3.15662 -0.000488281 2.81727 0.19054 2.62632 0.512464C2.62472 0.514981 2.62339 0.517498 2.6218 0.520295ZM13.8199 6.12333C13.8058 6.31156 13.7539 6.59405 13.5524 6.79542C13.3282 7.01946 13.0433 7.01946 12.4545 7.00967C10.7987 6.98086 10.6564 6.93723 10.5019 6.86898C10.1748 6.72494 9.58385 6.46399 9.51364 5.92782C9.44343 5.3883 9.94979 4.94863 10.0139 4.89465C10.0384 4.95814 10.0628 5.02107 10.0873 5.08428C10.0939 5.0991 10.1064 5.12539 10.1221 5.15756C10.608 6.14766 11.1567 6.30681 11.1567 6.30681C11.337 6.36218 11.5899 6.38064 11.6503 6.27017C11.6918 6.19437 11.645 6.05229 11.6386 6.03383C11.6107 5.95188 11.567 5.8993 11.5553 5.88531C11.4245 5.72505 11.2083 5.31279 11.1567 4.93157C11.142 4.82501 11.1341 4.67062 11.1692 4.47791C11.1905 4.47008 11.2123 4.46225 11.2338 4.45442C11.879 4.44687 12.5245 4.43847 13.1689 4.4298C13.5313 4.4298 13.826 4.73942 13.826 5.12092C13.826 5.65289 13.851 6.04669 13.8199 6.12305V6.12333Z"
                    })
                }))
            }
              , E = function(e) {
                return (0,
                a.tZ)(u, c(c({
                    viewBox: "0 0 31 31",
                    fill: "currentColor"
                }, e), {}, {
                    children: (0,
                    a.tZ)("path", {
                        d: "M5.5 15.25h3.75c.66304 0 1.2989.2634 1.7678.7322.4688.4689.7322 1.1048.7322 1.7678V24c0 .663-.2634 1.2989-.7322 1.7678-.4689.4688-1.10476.7322-1.7678.7322H5.5c-.66304 0-1.29893-.2634-1.76777-.7322C3.26339 25.2989 3 24.663 3 24v-8.75c0-6.90375 5.59625-12.5 12.5-12.5 6.9037 0 12.5 5.59625 12.5 12.5V24c0 .663-.2634 1.2989-.7322 1.7678-.4689.4688-1.1048.7322-1.7678.7322h-3.75c-.663 0-1.2989-.2634-1.7678-.7322-.4688-.4689-.7322-1.1048-.7322-1.7678v-6.25c0-.663.2634-1.2989.7322-1.7678.4689-.4688 1.1048-.7322 1.7678-.7322h3.75c0-2.6522-1.0536-5.1957-2.9289-7.07107C20.6957 6.30357 18.1522 5.25 15.5 5.25c-2.6522 0-5.1957 1.05357-7.07107 2.92893C6.55357 10.0543 5.5 12.5978 5.5 15.25Z"
                    })
                }))
            }
              , N = function(e) {
                return (0,
                a.tZ)(u, c(c({
                    viewBox: "0 0 32 32",
                    fill: "currentColor"
                }, e), {}, {
                    children: (0,
                    a.tZ)("path", {
                        d: "M28 6.66675H4V4.00008h24v2.66667ZM14.6667 20.0001H5.33333L16 9.33341 26.6667 20.0001h-9.3334v10.6666h-2.6666V20.0001Z"
                    })
                }))
            }
              , O = function(e) {
                return (0,
                a.tZ)(u, c(c({
                    viewBox: "0 0 18 18",
                    fill: "currentColor"
                }, e), {}, {
                    children: (0,
                    a.tZ)("path", {
                        d: "M14.5 18C13.5717 18 12.6815 17.6313 12.0251 16.9749C11.3687 16.3185 11 15.4283 11 14.5C11 13.5717 11.3687 12.6815 12.0251 12.0251C12.6815 11.3687 13.5717 11 14.5 11C15.4283 11 16.3185 11.3687 16.9749 12.0251C17.6313 12.6815 18 13.5717 18 14.5C18 15.4283 17.6313 16.3185 16.9749 16.9749C16.3185 17.6313 15.4283 18 14.5 18ZM3.5 7C3.04037 7 2.58525 6.90947 2.16061 6.73358C1.73597 6.55769 1.35013 6.29988 1.02513 5.97487C0.700121 5.64987 0.442313 5.26403 0.266422 4.83939C0.0905301 4.41475 0 3.95963 0 3.5C0 3.04037 0.0905301 2.58525 0.266422 2.16061C0.442313 1.73597 0.700121 1.35013 1.02513 1.02513C1.35013 0.700121 1.73597 0.442313 2.16061 0.266422C2.58525 0.0905301 3.04037 -9.6859e-09 3.5 0C4.42826 1.95616e-08 5.3185 0.368749 5.97487 1.02513C6.63125 1.6815 7 2.57174 7 3.5C7 4.42826 6.63125 5.3185 5.97487 5.97487C5.3185 6.63125 4.42826 7 3.5 7ZM16.071 0.515L17.485 1.929L1.93 17.485L0.516 16.071L16.07 0.515H16.071Z"
                    })
                }))
            }
        },
        18: function(e, t, n) {
            "use strict";
            var o = n(652)
              , r = n(657)
              , a = n(688)
              , i = n(317)
              , s = n(318)
              , l = n(0)
              , c = n(25)
              , u = n(1)
              , d = n(639)
              , p = ["variant", "src"];
            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        (0,
                        o.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var m = function(e) {
                var t = e.src
                  , n = e.modifiers
                  , o = new URL(t)
                  , r = Object.entries(n).map((function(e) {
                    var t = (0,
                    i.Z)(e, 2)
                      , n = t[0]
                      , o = t[1];
                    return "".concat(n, "=").concat(o)
                }
                )).join(",")
                  , a = o.pathname.replace(/^\//, "");
                return o.pathname = "/cdn-cgi/image/".concat(r, "/").concat(a),
                o.toString()
            }
              , y = (0,
            l.forwardRef)((function(e, t) {
                var n = e.variant
                  , o = e.src
                  , i = (0,
                r.Z)(e, p);
                if (!o || function(e) {
                    if (!e)
                        return !1;
                    var t = e.startsWith("http") || e.startsWith("//")
                      , n = [c.n3].concat((0,
                    a.Z)(c.qn), (0,
                    a.Z)(c.iM)).some((function(t) {
                        return e.includes(t)
                    }
                    ));
                    return !(!t || n)
                }(o))
                    return (0,
                    s.tZ)("img", h({
                        ref: t,
                        src: o
                    }, i));
                var l = (0,
                u.Ig)(o);
                if (window.__layout.featureFlags.cloudflareOptimization) {
                    var f = h(h({}, d.o), d.n[n])
                      , y = "\n      ".concat(m({
                        src: l,
                        modifiers: h(h({}, f), {}, {
                            dpr: "1"
                        })
                    }), " 1x,\n      ").concat(m({
                        src: l,
                        modifiers: h(h({}, f), {}, {
                            dpr: "2"
                        })
                    }), " 2x\n    ");
                    return (0,
                    s.tZ)("img", h({
                        ref: t,
                        srcSet: y
                    }, i))
                }
                return (0,
                s.tZ)("img", h({
                    ref: t,
                    src: l
                }, i))
            }
            ));
            y.displayName = "Image",
            t.Z = y
        },
        639: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return r
                },
                o: function() {
                    return o
                }
            });
            var o = {
                format: "auto"
            }
              , r = {
                SKIN_THUMBNAIL_SMALL: {
                    width: "80",
                    brightness: "1.35",
                    contrast: "1.1"
                },
                SKIN_THUMBNAIL_MEDIUM: {
                    width: "180",
                    brightness: "1.35",
                    contrast: "1.1"
                },
                SKIN_THUMBNAIL_LARGE: {
                    width: "450",
                    brightness: "1.35",
                    contrast: "1.1"
                },
                CASE_THUMBNAIL_SMALL: {
                    width: "85"
                },
                CASE_THUMBNAIL_MEDIUM: {
                    width: "270"
                }
            }
        },
        25: function(e, t, n) {
            "use strict";
            n.d(t, {
                Kg: function() {
                    return i
                },
                eB: function() {
                    return s
                },
                iM: function() {
                    return r
                },
                n3: function() {
                    return o
                },
                qn: function() {
                    return a
                }
            });
            var o = "key-drop.com"
              , r = ["localhost", "keydrop.local"]
              , a = ["kd-staging.com"]
              , i = r.some((function(e) {
                return document.location.hostname.includes(e)
            }
            ))
              , s = a.some((function(e) {
                return document.location.hostname.includes(e)
            }
            ));
            document.location.hostname
        },
        31: function(e, t, n) {
            "use strict";
            var o = n(319)
              , r = n(42);
            t.Z = function() {
                var e = (0,
                r.b)().translations;
                return function(t) {
                    return (0,
                    o.Z)(e, t)
                }
            }
        },
        29: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return r
                }
            });
            var o = new Map
              , r = function() {
                return {
                    publish: function(e, t) {
                        window.dispatchEvent(new CustomEvent(e,{
                            detail: {
                                payload: t
                            }
                        }))
                    },
                    subscribe: function(e, t) {
                        var n = "".concat(e, "__").concat(Date.now(), "__").concat(Math.floor(1e3 * Math.random()))
                          , r = function(e) {
                            return function(t) {
                                var n;
                                return e(null == t || null === (n = t.detail) || void 0 === n ? void 0 : n.payload)
                            }
                        }(t);
                        return o.set(n, {
                            event: e,
                            callback: r
                        }),
                        window.addEventListener(e, r),
                        n
                    },
                    unsubscribe: function(e) {
                        if (o.has(e)) {
                            var t = o.get(e)
                              , n = t.event
                              , r = t.callback;
                            window.removeEventListener(n, r),
                            o.delete(e)
                        }
                    }
                }
            }
        },
        1: function(e, t, n) {
            "use strict";
            n.d(t, {
                $L: function() {
                    return Z
                },
                $o: function() {
                    return j
                },
                BC: function() {
                    return y
                },
                BG: function() {
                    return T
                },
                HQ: function() {
                    return b
                },
                Ig: function() {
                    return x
                },
                L4: function() {
                    return h
                },
                L6: function() {
                    return w
                },
                N2: function() {
                    return v
                },
                V2: function() {
                    return g
                },
                cn: function() {
                    return C
                },
                ej: function() {
                    return O
                },
                f0: function() {
                    return S
                },
                fA: function() {
                    return E
                },
                iU: function() {
                    return k
                },
                lI: function() {
                    return z
                },
                uf: function() {
                    return I
                },
                up: function() {
                    return L
                },
                vk: function() {
                    return m
                },
                w4: function() {
                    return N
                },
                xG: function() {
                    return P
                }
            });
            var o = n(652)
              , r = n(317)
              , a = n(650)
              , i = n(319)
              , s = n(727)
              , l = n(326)
              , c = n(649)
              , u = n(9)
              , d = (n(8),
            n(25));
            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, o)
                }
                return n
            }
            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        (0,
                        o.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            var h = function(e) {
                var t = e.split(".")
                  , n = (0,
                r.Z)(t, 2)[1];
                return JSON.parse(atob(n))
            }
              , m = function(e) {
                return (e < 10 ? "0" : "") + e
            }
              , y = Object.entries(u.F).reduce((function(e, t) {
                var n = (0,
                r.Z)(t, 2)
                  , o = n[0]
                  , a = n[1];
                return e[o] = "@media (min-width: ".concat(a, ")"),
                e.js[o] = "(min-width: ".concat(a, ")"),
                e.max[o] = "@media (max-width: ".concat(a, ")"),
                e.raw[o] = a,
                e
            }
            ), {
                js: {},
                max: {},
                raw: {}
            });
            y.supportsHover = "@media (hover: hover)",
            y.js.supportsHover = "(hover: hover)",
            y.finePointer = "@media (pointer: fine)",
            y.js.finePointer = "(pointer: fine)",
            y.coarsePointer = "@media (pointer: coarse)",
            y.js.coarsePointer = "(pointer: coarse)";
            var g = function(e, t) {
                return function(n) {
                    return new Intl.NumberFormat(null != e ? e : document.documentElement.lang,t).format(n)
                }
            }
              , w = function(e, t, n) {
                return function(o) {
                    var r;
                    return new Intl.NumberFormat(null != t ? t : document.documentElement.lang,f({
                        style: "currency",
                        currency: null != e ? e : null === (r = window.__userInitialData) || void 0 === r ? void 0 : r.currency
                    }, n)).format(o).replace("zł", "PLN")
                }
            }
              , v = function(e, t) {
                var n;
                return ((null === (n = new Intl.NumberFormat(null != t ? t : document.documentElement.lang,{
                    style: "currency",
                    currency: e
                }).formatToParts().find((function(e) {
                    return "currency" === e.type
                }
                ))) || void 0 === n ? void 0 : n.value) || e).replace("zł", "PLN")
            }
              , b = function(e) {
                if (!window.__url)
                    throw new Error("You have to set window.__url");
                var t = (0,
                i.Z)(window.__url, [e])[0];
                if (!t)
                    throw new Error("There is no ".concat(e, " endpoint in window.__url"));
                return t
            }
              , k = function(e) {
                return "".concat(b("icons"), "#").concat(e)
            }
              , z = function(e) {
                return "".concat(b("navIcons"), "#").concat(e)
            }
              , x = function(e) {
                if (!e)
                    return e;
                var t = e.includes("csgo_icons") ? "cdn." : e.includes("//image.") ? "image." : ""
                  , n = window.location.host.replace("www.", "")
                  , o = d.Kg || d.eB ? d.n3 : n
                  , r = "".concat(t).concat(o)
                  , a = new URL(e,"https://".concat(r));
                return a.host = r,
                a.toString()
            }
              , j = function(e) {
                return "".concat(b("images"), "/").concat(e, "?v").concat(window.__imgAssetCacheVersion)
            }
              , C = l.m
              , S = function(e, t, n) {
                return (0,
                c.assign)((function(t, o) {
                    return (0,
                    a.produce)(t, (function(t) {
                        return e(t, o, n)
                    }
                    ))
                }
                ))
            }
              , E = function(e) {
                return function(t, n) {
                    return function(n, o) {
                        var a = new URL(e).pathname
                          , i = new URL((0,
                        s.Gn)("".concat(a, "/").concat(t.replace(/^\//, "")), n),e);
                        return o && Object.entries(o).forEach((function(e) {
                            var t = (0,
                            r.Z)(e, 2)
                              , n = t[0]
                              , o = t[1];
                            Array.isArray(o) ? o.forEach((function(e) {
                                return i.searchParams.append(n, String(e))
                            }
                            )) : i.searchParams.append(n, String(o))
                        }
                        )),
                        i.toString()
                    }
                }
            }
              , N = function(e) {
                var t, n, o = e.split("|"), a = (0,
                r.Z)(o, 2), i = a[0], s = a[1];
                i = (null === (t = i) || void 0 === t ? void 0 : t.trim()) || "",
                s = (null === (n = s) || void 0 === n ? void 0 : n.trim()) || "";
                var l = /\(([^\(\)]+)\)$/.exec(e);
                return {
                    top: i,
                    bottom: s,
                    condition: Array.isArray(l) ? l[1] : ""
                }
            };
            function O(e) {
                var t = document.cookie.match(RegExp("(?:^|;\\s*)" + e.replace(/([.*+?\^$(){}|\[\]\/\\])/g, "\\$1") + "=([^;]*)"));
                return t ? t[1] : null
            }
            var T = function(e) {
                return null == e ? void 0 : e.includes("StatTrak™")
            }
              , Z = function(e) {
                return null == e ? void 0 : e.replace("StatTrak™ ", "")
            }
              , I = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement.lang
                  , n = arguments.length > 2 ? arguments[2] : void 0;
                return new Intl.NumberFormat(t,n).format(e)
            }
              , P = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement.lang
                  , n = arguments.length > 2 ? arguments[2] : void 0
                  , o = arguments.length > 3 ? arguments[3] : void 0;
                return new Intl.NumberFormat(t,f({
                    style: "currency",
                    currency: n
                }, o)).format(e).replace("zł", "PLN")
            }
              , L = function(e) {
                return "+".concat(100 * Number(e), "% Bonus")
            }
        },
        9: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return o
                },
                O: function() {
                    return a
                }
            });
            var o = {
                "2xs": "350px",
                xs: "438px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                xxl: "1500px"
            }
              , r = {
                DEFAULT: "#737373",
                50: "#fafafa",
                100: "#f5f5f5",
                200: "#e5e5e5",
                300: "#d4d4d4",
                400: "#a3a3a3",
                500: "#737373",
                600: "#525252",
                700: "#404040",
                800: "#262626",
                900: "#171717",
                950: "#0a0a0a"
            }
              , a = {
                white: {
                    DEFAULT: "#ffffff"
                },
                black: {
                    DEFAULT: "#000000"
                },
                grey: r,
                gray: r,
                pastelGreen: {
                    DEFAULT: "#50E36D"
                },
                violet: {
                    DEFAULT: "#a41aff"
                },
                yellow: {
                    DEFAULT: "#FFDA44",
                    200: "#fef08a"
                },
                navy: {
                    100: "#b4b8cd",
                    200: "#989ebb",
                    250: "#8789A3",
                    300: "#6A6D81",
                    400: "#424254",
                    500: "#31303e",
                    550: "#282531",
                    600: "#1f1e27",
                    650: "#1F2023",
                    700: "#19181e",
                    750: "#17171C",
                    800: "#111114",
                    900: "#080a0d"
                },
                lightgreen: {
                    DEFAULT: "#77FF9D",
                    100: "#A8FFA6",
                    200: "#77FF9D",
                    700: "#1E3E25",
                    750: "#18331F",
                    800: "#112319"
                },
                green: {
                    DEFAULT: "#7fd919",
                    200: "#A0DC64",
                    400: "#4ade80",
                    500: "#7fd919",
                    700: "#15803d",
                    800: "#323C27",
                    900: "#1F2419"
                },
                teal: {
                    DEFAULT: "#10e3b4",
                    200: "#37ffdd",
                    500: "#10e3b4",
                    800: "#23312F",
                    900: "#091715"
                },
                lightblue: {
                    DEFAULT: "#5e98d9"
                },
                blue: {
                    DEFAULT: "#4482ff",
                    100: "#b8edff",
                    400: "#41ADFF",
                    500: "#3b82f6",
                    550: "#4B69FF",
                    600: "#2563eb"
                },
                pink: {
                    DEFAULT: "#DF5DEE",
                    200: "#DEACEC",
                    300: "#CE82E3",
                    400: "#C164DC",
                    500: "#9A50B0",
                    700: "#4D2858",
                    800: "#27142C"
                },
                orange: {
                    DEFAULT: "#F29047",
                    500: "#FF9C09"
                },
                red: {
                    DEFAULT: "#ff445d",
                    400: "#f87171",
                    500: "#ff445d",
                    550: "#FE4760",
                    600: "#e2374f",
                    900: "#7f1d1d"
                },
                gold: {
                    DEFAULT: "#dcae64",
                    300: "#FFD592",
                    400: "#FFCB77",
                    500: "#dcae64",
                    600: "#d7a34f",
                    800: "#b98839",
                    850: "#5e482f",
                    900: "#3e321e",
                    1e3: "#3c2f19",
                    1050: "#332918",
                    1100: "#1D1508"
                },
                event: {
                    points: "#FFCB77",
                    DEFAULT: "#FFCB77",
                    100: "#A23434",
                    200: "#E84A4A",
                    300: "#FFD692",
                    400: "#FFCB77",
                    500: "#3355FF",
                    600: "#0022CC",
                    700: "#30663F",
                    800: "#332918",
                    900: "#1E180E"
                },
                giveaway: {
                    champion: "#FFCB77",
                    challenger: "#FE4760",
                    legend: "#37ffdd",
                    contender: "#7E43EA",
                    amateur: "#77FF9D"
                }
            }
        },
        5: function(e, t, n) {
            var o;
            if ("function" == typeof fetch && (o = void 0 !== n.g && n.g.fetch ? n.g.fetch : "undefined" != typeof window && window.fetch ? window.fetch : fetch),
            "undefined" == typeof window || void 0 === window.document) {
                var r = o || n(15);
                r.default && (r = r.default),
                t.default = r,
                e.exports = t.default
            }
        },
        62: function(e, t, n) {
            "use strict";
            n(0),
            n(11)
        },
        53: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return i
                }
            });
            var o = n(0)
              , r = n(48)
              , a = n(11);
            function i(e) {
                let {children: t, count: n, parent: i, i18nKey: s, context: l, tOptions: c={}, values: u, defaults: d, components: p, ns: f, i18n: h, t: m, shouldUnescape: y, ...g} = e;
                const {i18n: w, defaultNS: v} = (0,
                o.useContext)(a.OO) || {}
                  , b = h || w || (0,
                a.nI)()
                  , k = m || b && b.t.bind(b);
                return (0,
                r.c)({
                    children: t,
                    count: n,
                    parent: i,
                    i18nKey: s,
                    context: l,
                    tOptions: c,
                    values: u,
                    defaults: d,
                    components: p,
                    ns: f || k && k.ns || v || b && b.options && b.options.defaultNS,
                    i18n: b,
                    t: m,
                    shouldUnescape: y,
                    ...g
                })
            }
        },
        48: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return p
                }
            });
            var o = n(0)
              , r = n(22)
              , a = n(14)
              , i = n(13)
              , s = n(36);
            function l(e, t) {
                if (!e)
                    return !1;
                const n = e.props ? e.props.children : e.children;
                return t ? n.length > 0 : !!n
            }
            function c(e) {
                return e ? e.props ? e.props.children : e.children : []
            }
            function u(e) {
                return Array.isArray(e) ? e : [e]
            }
            function d(e, t) {
                if (!e)
                    return "";
                let n = "";
                const r = u(e)
                  , i = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
                return r.forEach(((e,r)=>{
                    if ("string" == typeof e)
                        n += `${e}`;
                    else if ((0,
                    o.isValidElement)(e)) {
                        const o = Object.keys(e.props).length
                          , a = i.indexOf(e.type) > -1
                          , s = e.props.children;
                        if (!s && a && 0 === o)
                            n += `<${e.type}/>`;
                        else if (s || a && 0 === o)
                            if (e.props.i18nIsDynamicList)
                                n += `<${r}></${r}>`;
                            else if (a && 1 === o && "string" == typeof s)
                                n += `<${e.type}>${s}</${e.type}>`;
                            else {
                                const e = d(s, t);
                                n += `<${r}>${e}</${r}>`
                            }
                        else
                            n += `<${r}></${r}>`
                    } else if (null === e)
                        (0,
                        a.ZK)("Trans: the passed in value is invalid - seems you passed in a null child.");
                    else if ("object" == typeof e) {
                        const {format: t, ...o} = e
                          , r = Object.keys(o);
                        if (1 === r.length) {
                            const e = t ? `${r[0]}, ${t}` : r[0];
                            n += `{{${e}}}`
                        } else
                            (0,
                            a.ZK)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", e)
                    } else
                        (0,
                        a.ZK)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", e)
                }
                )),
                n
            }
            function p(e) {
                let {children: t, count: n, parent: p, i18nKey: f, context: h, tOptions: m={}, values: y, defaults: g, components: w, ns: v, i18n: b, t: k, shouldUnescape: z, ...x} = e;
                const j = b || (0,
                s.n)();
                if (!j)
                    return (0,
                    a.O4)("You will need to pass in an i18next instance by using i18nextReactModule"),
                    t;
                const C = k || j.t.bind(j) || (e=>e);
                h && (m.context = h);
                const S = {
                    ...(0,
                    i.J)(),
                    ...j.options && j.options.react
                };
                let E = v || C.ns || j.options && j.options.defaultNS;
                E = "string" == typeof E ? [E] : E || ["translation"];
                const N = g || d(t, S) || S.transEmptyNodeValue || f
                  , {hashTransKey: O} = S
                  , T = f || (O ? O(N) : N)
                  , Z = y ? m.interpolation : {
                    interpolation: {
                        ...m.interpolation,
                        prefix: "#$?",
                        suffix: "?$#"
                    }
                }
                  , I = {
                    ...m,
                    count: n,
                    ...y,
                    ...Z,
                    defaultValue: N,
                    ns: E
                }
                  , P = function(e, t, n, a, i, s) {
                    if ("" === t)
                        return [];
                    const d = a.transKeepBasicHtmlNodesFor || []
                      , p = t && new RegExp(d.join("|")).test(t);
                    if (!e && !p)
                        return [t];
                    const f = {};
                    !function e(t) {
                        u(t).forEach((t=>{
                            "string" != typeof t && (l(t) ? e(c(t)) : "object" != typeof t || (0,
                            o.isValidElement)(t) || Object.assign(f, t))
                        }
                        ))
                    }(e);
                    const h = r.Z.parse(`<0>${t}</0>`)
                      , m = {
                        ...f,
                        ...i
                    };
                    function y(e, t, n) {
                        const r = c(e)
                          , a = w(r, t.children, n);
                        return function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e) && e.every((e=>(0,
                            o.isValidElement)(e)))
                        }(r) && 0 === a.length ? r : a
                    }
                    function g(e, t, n, r, a) {
                        e.dummy && (e.children = t),
                        n.push((0,
                        o.cloneElement)(e, {
                            ...e.props,
                            key: r
                        }, a ? void 0 : t))
                    }
                    function w(t, r, i) {
                        const c = u(t);
                        return u(r).reduce(((t,r,u)=>{
                            const f = r.children && r.children[0] && r.children[0].content && n.services.interpolator.interpolate(r.children[0].content, m, n.language);
                            if ("tag" === r.type) {
                                let s = c[parseInt(r.name, 10)];
                                !s && 1 === i.length && i[0][r.name] && (s = i[0][r.name]),
                                s || (s = {});
                                const h = 0 !== Object.keys(r.attrs).length ? function(e, t) {
                                    const n = {
                                        ...t
                                    };
                                    return n.props = Object.assign(e.props, t.props),
                                    n
                                }({
                                    props: r.attrs
                                }, s) : s
                                  , v = (0,
                                o.isValidElement)(h)
                                  , b = v && l(r, !0) && !r.voidElement
                                  , k = p && "object" == typeof h && h.dummy && !v
                                  , z = "object" == typeof e && null !== e && Object.hasOwnProperty.call(e, r.name);
                                if ("string" == typeof h) {
                                    const e = n.services.interpolator.interpolate(h, m, n.language);
                                    t.push(e)
                                } else if (l(h) || b)
                                    g(h, y(h, r, i), t, u);
                                else if (k) {
                                    const e = w(c, r.children, i);
                                    t.push((0,
                                    o.cloneElement)(h, {
                                        ...h.props,
                                        key: u
                                    }, e))
                                } else if (Number.isNaN(parseFloat(r.name)))
                                    if (z)
                                        g(h, y(h, r, i), t, u, r.voidElement);
                                    else if (a.transSupportBasicHtmlNodes && d.indexOf(r.name) > -1)
                                        if (r.voidElement)
                                            t.push((0,
                                            o.createElement)(r.name, {
                                                key: `${r.name}-${u}`
                                            }));
                                        else {
                                            const e = w(c, r.children, i);
                                            t.push((0,
                                            o.createElement)(r.name, {
                                                key: `${r.name}-${u}`
                                            }, e))
                                        }
                                    else if (r.voidElement)
                                        t.push(`<${r.name} />`);
                                    else {
                                        const e = w(c, r.children, i);
                                        t.push(`<${r.name}>${e}</${r.name}>`)
                                    }
                                else if ("object" != typeof h || v)
                                    1 === r.children.length && f ? t.push((0,
                                    o.cloneElement)(h, {
                                        ...h.props,
                                        key: u
                                    }, f)) : t.push((0,
                                    o.cloneElement)(h, {
                                        ...h.props,
                                        key: u
                                    }));
                                else {
                                    const e = r.children[0] ? f : null;
                                    e && t.push(e)
                                }
                            } else if ("text" === r.type) {
                                const e = a.transWrapTextNodes
                                  , i = s ? a.unescape(n.services.interpolator.interpolate(r.content, m, n.language)) : n.services.interpolator.interpolate(r.content, m, n.language);
                                e ? t.push((0,
                                o.createElement)(e, {
                                    key: `${r.name}-${u}`
                                }, i)) : t.push(i)
                            }
                            return t
                        }
                        ), [])
                    }
                    return c(w([{
                        dummy: !0,
                        children: e || []
                    }], h, u(e || []))[0])
                }(w || t, T ? C(T, I) : N, j, S, I, z)
                  , L = void 0 !== p ? p : S.defaultTransParent;
                return L ? (0,
                o.createElement)(L, x, P) : P
            }
        },
        61: function(e, t, n) {
            "use strict";
            n(16)
        },
        11: function(e, t, n) {
            "use strict";
            n.d(t, {
                JP: function() {
                    return r.J
                },
                OO: function() {
                    return i
                },
                nI: function() {
                    return a.n
                },
                zv: function() {
                    return s
                }
            });
            var o = n(0)
              , r = n(13)
              , a = n(36);
            n(47);
            const i = (0,
            o.createContext)();
            class s {
                constructor() {
                    this.usedNamespaces = {}
                }
                addUsedNamespaces(e) {
                    e.forEach((e=>{
                        this.usedNamespaces[e] || (this.usedNamespaces[e] = !0)
                    }
                    ))
                }
                getUsedNamespaces() {
                    return Object.keys(this.usedNamespaces)
                }
            }
        },
        13: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return a
                },
                j: function() {
                    return r
                }
            });
            let o = {
                bindI18n: "languageChanged",
                bindI18nStore: "",
                transEmptyNodeValue: "",
                transSupportBasicHtmlNodes: !0,
                transWrapTextNodes: "",
                transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
                useSuspense: !0,
                unescape: n(59).A
            };
            function r() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                o = {
                    ...o,
                    ...e
                }
            }
            function a() {
                return o
            }
        },
        36: function(e, t, n) {
            "use strict";
            let o;
            function r(e) {
                o = e
            }
            function a() {
                return o
            }
            n.d(t, {
                I: function() {
                    return r
                },
                n: function() {
                    return a
                }
            })
        },
        2: function(e, t, n) {
            "use strict";
            n.d(t, {
                $G: function() {
                    return r.$
                },
                Db: function() {
                    return a.D
                },
                cC: function() {
                    return o.c
                }
            });
            var o = n(53)
              , r = (n(48),
            n(16))
              , a = (n(60),
            n(61),
            n(62),
            n(63),
            n(49),
            n(47));
            n(13),
            n(11)
        },
        47: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return a
                }
            });
            var o = n(13)
              , r = n(36);
            const a = {
                type: "3rdParty",
                init(e) {
                    (0,
                    o.j)(e.options.react),
                    (0,
                    r.I)(e)
                }
            }
        },
        59: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return i
                }
            });
            const o = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
              , r = {
                "&amp;": "&",
                "&#38;": "&",
                "&lt;": "<",
                "&#60;": "<",
                "&gt;": ">",
                "&#62;": ">",
                "&apos;": "'",
                "&#39;": "'",
                "&quot;": '"',
                "&#34;": '"',
                "&nbsp;": " ",
                "&#160;": " ",
                "&copy;": "©",
                "&#169;": "©",
                "&reg;": "®",
                "&#174;": "®",
                "&hellip;": "…",
                "&#8230;": "…",
                "&#x2F;": "/",
                "&#47;": "/"
            }
              , a = e=>r[e]
              , i = e=>e.replace(o, a)
        },
        49: function(e, t, n) {
            "use strict";
            n(0),
            n(11)
        },
        16: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return s
                }
            });
            var o = n(0)
              , r = n(11)
              , a = n(14);
            const i = (e,t)=>{
                const n = (0,
                o.useRef)();
                return (0,
                o.useEffect)((()=>{
                    n.current = t ? n.current : e
                }
                ), [e, t]),
                n.current
            }
            ;
            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const {i18n: n} = t
                  , {i18n: s, defaultNS: l} = (0,
                o.useContext)(r.OO) || {}
                  , c = n || s || (0,
                r.nI)();
                if (c && !c.reportNamespaces && (c.reportNamespaces = new r.zv),
                !c) {
                    (0,
                    a.O4)("You will need to pass in an i18next instance by using initReactI18next");
                    const e = (e,t)=>"string" == typeof t ? t : t && "object" == typeof t && "string" == typeof t.defaultValue ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e
                      , t = [e, {}, !1];
                    return t.t = e,
                    t.i18n = {},
                    t.ready = !1,
                    t
                }
                c.options.react && void 0 !== c.options.react.wait && (0,
                a.O4)("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                const u = {
                    ...(0,
                    r.JP)(),
                    ...c.options.react,
                    ...t
                }
                  , {useSuspense: d, keyPrefix: p} = u;
                let f = e || l || c.options && c.options.defaultNS;
                f = "string" == typeof f ? [f] : f || ["translation"],
                c.reportNamespaces.addUsedNamespaces && c.reportNamespaces.addUsedNamespaces(f);
                const h = (c.isInitialized || c.initializedStoreOnce) && f.every((e=>(0,
                a.F0)(e, c, u)));
                function m() {
                    return c.getFixedT(t.lng || null, "fallback" === u.nsMode ? f : f[0], p)
                }
                const [y,g] = (0,
                o.useState)(m);
                let w = f.join();
                t.lng && (w = `${t.lng}${w}`);
                const v = i(w)
                  , b = (0,
                o.useRef)(!0);
                (0,
                o.useEffect)((()=>{
                    const {bindI18n: e, bindI18nStore: n} = u;
                    function o() {
                        b.current && g(m)
                    }
                    return b.current = !0,
                    h || d || (t.lng ? (0,
                    a.Nl)(c, t.lng, f, (()=>{
                        b.current && g(m)
                    }
                    )) : (0,
                    a.DC)(c, f, (()=>{
                        b.current && g(m)
                    }
                    ))),
                    h && v && v !== w && b.current && g(m),
                    e && c && c.on(e, o),
                    n && c && c.store.on(n, o),
                    ()=>{
                        b.current = !1,
                        e && c && e.split(" ").forEach((e=>c.off(e, o))),
                        n && c && n.split(" ").forEach((e=>c.store.off(e, o)))
                    }
                }
                ), [c, w]);
                const k = (0,
                o.useRef)(!0);
                (0,
                o.useEffect)((()=>{
                    b.current && !k.current && g(m),
                    k.current = !1
                }
                ), [c, p]);
                const z = [y, c, h];
                if (z.t = y,
                z.i18n = c,
                z.ready = h,
                h)
                    return z;
                if (!h && !d)
                    return z;
                throw new Promise((e=>{
                    t.lng ? (0,
                    a.Nl)(c, t.lng, f, (()=>e())) : (0,
                    a.DC)(c, f, (()=>e()))
                }
                ))
            }
        },
        14: function(e, t, n) {
            "use strict";
            function o() {
                if (console && console.warn) {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    "string" == typeof t[0] && (t[0] = `react-i18next:: ${t[0]}`),
                    console.warn(...t)
                }
            }
            n.d(t, {
                DC: function() {
                    return s
                },
                F0: function() {
                    return u
                },
                Nl: function() {
                    return l
                },
                O4: function() {
                    return a
                },
                ZK: function() {
                    return o
                }
            });
            const r = {};
            function a() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                "string" == typeof t[0] && r[t[0]] || ("string" == typeof t[0] && (r[t[0]] = new Date),
                o(...t))
            }
            const i = (e,t)=>()=>{
                if (e.isInitialized)
                    t();
                else {
                    const n = ()=>{
                        setTimeout((()=>{
                            e.off("initialized", n)
                        }
                        ), 0),
                        t()
                    }
                    ;
                    e.on("initialized", n)
                }
            }
            ;
            function s(e, t, n) {
                e.loadNamespaces(t, i(e, n))
            }
            function l(e, t, n, o) {
                "string" == typeof n && (n = [n]),
                n.forEach((t=>{
                    e.options.ns.indexOf(t) < 0 && e.options.ns.push(t)
                }
                )),
                e.loadLanguages(t, i(e, o))
            }
            function c(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const o = t.languages[0]
                  , r = !!t.options && t.options.fallbackLng
                  , a = t.languages[t.languages.length - 1];
                if ("cimode" === o.toLowerCase())
                    return !0;
                const i = (e,n)=>{
                    const o = t.services.backendConnector.state[`${e}|${n}`];
                    return -1 === o || 2 === o
                }
                ;
                return !(n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !i(t.isLanguageChangingTo, e) || !t.hasResourceBundle(o, e) && t.services.backendConnector.backend && (!t.options.resources || t.options.partialBundledLanguages) && (!i(o, e) || r && !i(a, e)))
            }
            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!t.languages || !t.languages.length)
                    return a("i18n.languages were undefined or empty", t.languages),
                    !0;
                const o = void 0 !== t.options.ignoreJSONStructure;
                return o ? t.hasLoadedNamespace(e, {
                    lng: n.lng,
                    precheck: (t,o)=>{
                        if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !o(t.isLanguageChangingTo, e))
                            return !1
                    }
                }) : c(e, t, n)
            }
        },
        63: function(e, t, n) {
            "use strict";
            n(0),
            n(49),
            n(11),
            n(14)
        },
        60: function(e, t, n) {
            "use strict";
            n(0),
            n(16),
            n(14)
        }
    }, a = {};
    function i(e) {
        var t = a[e];
        if (void 0 !== t)
            return t.exports;
        var n = a[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return r[e].call(n.exports, n, n.exports, i),
        n.loaded = !0,
        n.exports
    }
    i.m = r,
    e = [],
    i.O = function(t, n, o, r) {
        if (!n) {
            var a = 1 / 0;
            for (u = 0; u < e.length; u++) {
                n = e[u][0],
                o = e[u][1],
                r = e[u][2];
                for (var s = !0, l = 0; l < n.length; l++)
                    (!1 & r || a >= r) && Object.keys(i.O).every((function(e) {
                        return i.O[e](n[l])
                    }
                    )) ? n.splice(l--, 1) : (s = !1,
                    r < a && (a = r));
                if (s) {
                    e.splice(u--, 1);
                    var c = o();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        r = r || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > r; u--)
            e[u] = e[u - 1];
        e[u] = [n, o, r]
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, {
            a: t
        }),
        t
    }
    ,
    n = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    }
    : function(e) {
        return e.__proto__
    }
    ,
    i.t = function(e, o) {
        if (1 & o && (e = this(e)),
        8 & o)
            return e;
        if ("object" == typeof e && e) {
            if (4 & o && e.__esModule)
                return e;
            if (16 & o && "function" == typeof e.then)
                return e
        }
        var r = Object.create(null);
        i.r(r);
        var a = {};
        t = t || [null, n({}), n([]), n(n)];
        for (var s = 2 & o && e; "object" == typeof s && !~t.indexOf(s); s = n(s))
            Object.getOwnPropertyNames(s).forEach((function(t) {
                a[t] = function() {
                    return e[t]
                }
            }
            ));
        return a.default = function() {
            return e
        }
        ,
        i.d(r, a),
        r
    }
    ,
    i.d = function(e, t) {
        for (var n in t)
            i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    i.f = {},
    i.e = function(e) {
        return Promise.all(Object.keys(i.f).reduce((function(t, n) {
            return i.f[n](e, t),
            t
        }
        ), []))
    }
    ,
    i.u = function(e) {
        return "GiveawaysBar.626ab400bd19e2ea5085.chunk.js"
    }
    ,
    i.miniCssF = function(e) {}
    ,
    i.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    i.hmd = function(e) {
        return (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }),
        e
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o = {},
    i.l = function(e, t, n, r) {
        if (o[e])
            o[e].push(t);
        else {
            var a, s;
            if (void 0 !== n)
                for (var l = document.getElementsByTagName("script"), c = 0; c < l.length; c++) {
                    var u = l[c];
                    if (u.getAttribute("src") == e) {
                        a = u;
                        break
                    }
                }
            a || (s = !0,
            (a = document.createElement("script")).charset = "utf-8",
            a.timeout = 120,
            i.nc && a.setAttribute("nonce", i.nc),
            a.src = e),
            o[e] = [t];
            var d = function(t, n) {
                a.onerror = a.onload = null,
                clearTimeout(p);
                var r = o[e];
                if (delete o[e],
                a.parentNode && a.parentNode.removeChild(a),
                r && r.forEach((function(e) {
                    return e(n)
                }
                )),
                t)
                    return t(n)
            }
              , p = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: a
            }), 12e4);
            a.onerror = d.bind(null, a.onerror),
            a.onload = d.bind(null, a.onload),
            s && document.head.appendChild(a)
        }
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.j = 225,
    i.p = "/web/KD/jsm/",
    function() {
        var e = {
            225: 0
        };
        i.f.j = function(t, n) {
            var o = i.o(e, t) ? e[t] : void 0;
            if (0 !== o)
                if (o)
                    n.push(o[2]);
                else {
                    var r = new Promise((function(n, r) {
                        o = e[t] = [n, r]
                    }
                    ));
                    n.push(o[2] = r);
                    var a = i.p + i.u(t)
                      , s = new Error;
                    i.l(a, (function(n) {
                        if (i.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0),
                        o)) {
                            var r = n && ("load" === n.type ? "missing" : n.type)
                              , a = n && n.target && n.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + r + ": " + a + ")",
                            s.name = "ChunkLoadError",
                            s.type = r,
                            s.request = a,
                            o[1](s)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        i.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, n) {
            var o, r, a = n[0], s = n[1], l = n[2], c = 0;
            if (a.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (o in s)
                    i.o(s, o) && (i.m[o] = s[o]);
                if (l)
                    var u = l(i)
            }
            for (t && t(n); c < a.length; c++)
                r = a[c],
                i.o(e, r) && e[r] && e[r][0](),
                e[r] = 0;
            return i.O(u)
        }
          , n = self.webpackChunk = self.webpackChunk || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }(),
    i.nc = void 0;
    var s = i.O(void 0, [736], (function() {
        return i(301)
    }
    ));
    s = i.O(s)
}();