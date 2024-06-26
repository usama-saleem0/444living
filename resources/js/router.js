import Vue from "vue";

import Router from "vue-router";
import store from "./vuex";
import AdminLayout from "./views/admin/layout/index";

Vue.use(Router);

let router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./views/home/index.vue")
        },


        {
            path: "/ifram",
            name: "home",
            component: () => import("./views/admin/iframe.vue")
        },


        {
            path: "/hello",
            name: "home",
            component: () => import("./views/home/menu.vue")
        },

        {
            path: "/slider",
            name: "home",
            component: () => import("./views/home/slider.vue")
        },

        {
            path: "/loader",
            name: "home",
            component: () => import("./views/loader/loader.vue")
        },
        {
            path: "/login/:user_id?",
            name: "login",
            component: () => import("./views/login/index.vue")
        },
        {
            path: "/register",
            name: "register",
            component: () => import("./views/register/index.vue")
        },

        {
            path: "/investor",
            name: "register",
            component: () => import("./views/admin/investorprofile.vue")
        },


        {
            path: "/black",
            name: "register",
            component: () => import("./views/admin/black.vue")
        },




        // {
        //     path: "/profile",
        //     name: "register",
        //     component: () => import("./views/admin/investorprofile.vue")
        // },

        // {
        //     path: "/investordashoard",
        //     name: "register",
        //     component: () => import("./views/admin/investordashoboard.vue")
        // },



        // {
        //     path: "/pastpost",
        //     name: "register",
        //     component: () => import("./views/admin/pastpost.vue")
        // },





        // {
        //     path: "/toprealtors",
        //     name: "register",
        //     component: () => import("./views/admin/toprealtors.vue")
        // },



        {
            path: "/homepages",
            name: "register",
            component: () => import("./views/admin/homepage.vue")
        },

        {
            path: "/pouphu",
            name: "register",
            component: () => import("./views/admin/components/popup.vue")
        },




        {
            path: "/setup/:id",
            name: "register",
            component: () => import("./views/register/imgars.vue")
        },

        {
            path: "/loader",
            name: "register",
            component: () => import("./views/admin/loader.vue")
        },
        {
            path: "/verify/user/:id",
            name: "verify",
            props: true,
            component: () => import("./views/verify/index.vue")
        },
        {
            path: "/forgot-password",
            name: "forgot",
            component: () => import("./views/forgot/index.vue")
        },


        {
            path: "/reset",
            name: "forgot",
            component: () => import("./views/forgot/reset.vue")
        },
        {
            path: "/forget",
            name: "forgot",
            component: () => import("./views/forgot/forget.vue")
        },



        {
            path: "/email",
            name: "forgot",
            component: () => import("./views/forgot/email.vue")
        },
        {
            path: "/reset/:token",
            name: "reset",
            component: () => import("./views/forgot/reset.vue")
        },
        /**
         * Admin routes
         */
        {
            path: "/admin",
            name: "admin",
            component: () => import("./views/admin/admindashoboard.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },



        {
            path: "/admin_buyers",
            name: "admin",
            component: () => import("./views/admin/admindashoboardbuyers.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },


        {
            path: "/admin_investor",
            name: "admin",
            component: () => import("./views/admin/admindashoboardinvestor.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },


        {
            path: "/homepages",
            name: "register",
            component: () => import("./views/admin/homepage.vue"),
            meta: {
                requiresAuth: true,


            }
        },


        {
            path: "/comment",
            name: "forgot",
            component: () => import("./views/admin/comment.vue"),
            meta: {
                requiresAuth: true,


            }
        },

        {
            path: "/add",
            name: "forgot",
            component: () => import("./views/admin/add.vue"),
            meta: {
                requiresAuth: true,


            }
        },


        {
            path: "/profilescreen",
            name: "admin",
            component: () => import("./views/admin/profilescreen.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout

            }
        },



        {
            path: "/payments",
            name: "admin",
            component: () => import("./views/admin/paypal.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },

        {
            path: "/profile/:id",
            name: "register",
            component: () => import("./views/admin/realtorprofile.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout

            }
        },


        {
            path: "/realtorprofile/:id",
            name: "register",
            component: () => import("./views/admin/realtorprofile.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout

            }
        },


        {
            path: "/toprealtors",
            name: "register",
            component: () => import("./views/admin/toprealtors.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout

            }
        },


        {
            path: "/mypost",
            name: "register",
            component: () => import("./views/admin/mypost.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout

            }
        },


        {
            path: "/topinvestors",
            name: "register",
            component: () => import("./views/admin/topinvestors.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout

            }
        },

        {
            path: "/pastpost",
            name: "register",
            component: () => import("./views/admin/pastpost.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout

            }
        },


        {
            path: "/realtordashoard",
            name: "register",
            component: () => import("./views/admin/realtordashoboard.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout

            }
        },

        {
            path: "/investordashoard",
            name: "register",
            component: () => import("./views/admin/investordashoboard.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout

            }
        },


        {
            path: "/chats",
            name: "chats",
            component: () => import("./views/admin/chats.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout

            }
        },

        {
            path: "/admin/components/buttons",
            name: "buttons",
            component: () => import("./views/admin/buttons.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/components/cards",
            name: "cards",
            component: () => import("./views/admin/cards.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/colors",
            name: "colors",
            component: () => import("./views/admin/colors.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/borders",
            name: "borders",
            component: () => import("./views/admin/borders.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/animations",
            name: "animations",
            component: () => import("./views/admin/animations.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/other",
            name: "other",
            component: () => import("./views/admin/other.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/pages/page-not-found",
            name: "page-not-found",
            component: () => import("./views/admin/page-not-found.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/pages/blank",
            name: "blank",
            component: () => import("./views/admin/blank.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/charts",
            name: "charts",
            component: () => import("./views/admin/charts.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/tables",
            name: "tables",
            component: () => import("./views/admin/tables.vue"),
            // meta: {
            //     requiresAuth: true,
            //     layout: AdminLayout
            // }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.user) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

export default router;
