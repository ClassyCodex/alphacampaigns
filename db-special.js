/* --- Alpha Master Database: Special Hub & Coupons --- */
/* Categorized for Sub-Nav Filtering: Shopping | Recharge | Subscriptions */

const db_special = [
    // --- SHOPPING COUPONS (Myntra, JioMart, etc.) ---
    { 
        id: 901, 
        title: "Myntra ₹150 Off", 
        reward: 150, 
        category: "special", 
        sub: "shopping",
        instructions: [
            "1. Valid on Minimum order of ₹649.",
            "2. Premium Verified High Value Coupon.",
            "3. Applicable on select fashion brands.",
            "4. Single use per new account."
        ], 
        type: "buy",
        isPremium: true,
        price: 47
    },
    { 
        id: 902, 
        title: "Myntra ₹100 Off (FWD)", 
        reward: 100, 
        category: "special", 
        sub: "shopping",
        instructions: [
            "1. Valid on Minimum order of ₹399.",
            "2. Exclusive Myntra FWD collection only.",
            "3. Best for Gen-Z style shopping.",
            "4. Copy and paste code at checkout."
        ], 
        type: "buy",
        isPremium: true,
        price: 37
    },
    { 
        id: 903, 
        title: "Myntra ₹100 Off (Mini)", 
        reward: 100, 
        category: "special", 
        sub: "shopping",
        instructions: [
            "1. Valid on Minimum order of ₹199.",
            "2. Best for small accessory orders.",
            "3. Verified working on New Accounts.",
            "4. Limited time flash coupon."
        ], 
        type: "buy",
        isPremium: true,
        price: 37
    },
    { 
        id: 904, 
        title: "Myntra ₹100 Off (Standard)", 
        reward: 100, 
        category: "special", 
        sub: "shopping",
        instructions: [
            "1. Valid on Minimum order of ₹499.",
            "2. Premium Verified Coupon.",
            "3. Applicable on most catalog items.",
            "4. Instant discount on checkout."
        ], 
        type: "buy",
        isPremium: true,
        price: 37
    },
    { 
        id: 905, 
        title: "JioMart SAVE100", 
        reward: 100, 
        category: "special", 
        sub: "shopping",
        instructions: [
            "1. Min order value required: ₹199.",
            "2. Use Promo Code: SAVE100.",
            "3. Applicable on Grocery & Electronics.",
            "4. Instant wallet cashback after delivery."
        ], 
        link: "SAVE100",
        type: "copy" 
    },
    { 
        id: 906, 
        title: "JioMart WOW100", 
        reward: 100, 
        category: "special", 
        sub: "shopping",
        instructions: [
            "1. Min order value required: ₹199.",
            "2. Use Promo Code: WOW100.",
            "3. Valid for first-time users only.",
            "4. Copy code and apply on JioMart App."
        ], 
        link: "WOW100",
        type: "copy" 
    },
    { 
        id: 907, 
        title: "Bigbasket Coupon", 
        reward: 100, 
        category: "special", 
        sub: "shopping",
        instructions: [
            "1. Use Code: BBFREEDEAL.",
            "2. Get Free products on your first order.",
            "3. Valid on minimum cart value of ₹500.",
            "4. Home delivery verified."
        ], 
        link: "BBFREEDEAL",
        type: "copy" 
    },

    // --- RECHARGE & CASHBACK ---
    { 
        id: 920, 
        title: "Vi Free Recharge", 
        reward: 26, 
        category: "special", 
        sub: "recharge",
        instructions: [
            "1. Collect the offer on Amazon Rewards page.",
            "2. Do a Minimum ₹26 VI Recharge.",
            "3. Payment must be made via Amazon Pay UPI.",
            "4. Get ₹26 Flat Cashback instantly."
        ], 
        link: "https://www.amazon.in/h/rewards/dp/amzn1.rewards.rewardAd.R5E243SJJ56QU", 
        type: "open" 
    },
    { 
        id: 921, 
        title: "Google Pay Loot", 
        reward: 250, 
        category: "special", 
        sub: "recharge",
        instructions: [
            "1. Pay ₹100 or more to any Merchant.",
            "2. Must be your first merchant transaction.",
            "3. Scratch card up to ₹250 guaranteed.",
            "4. Verified reward credited to bank."
        ], 
        link: "https://gpay.app.goo.gl/invite-8z2ts3x", 
        type: "open" 
    },

    // --- SUBSCRIPTIONS ---
    { 
        id: 930, 
        title: "YouTube Premium", 
        reward: 129, 
        category: "special", 
        sub: "subscriptions",
        instructions: [
            "1. Ad-free streaming + YouTube Music.",
            "2. Background play enabled.",
            "3. Private Account delivery via WhatsApp.",
            "4. Full 1 Month access verified."
        ], 
        type: "buy",
        isPremium: true,
        price: 27
    },
    { 
        id: 931, 
        title: "Watcho Reward", 
        reward: 299, 
        category: "special", 
        sub: "subscriptions",
        instructions: [
            "1. Use Code: W4MM03202375.",
            "2. Unlock premium OTT content for free.",
            "3. Valid on Watcho Premium Plan.",
            "4. Copy and paste in the redeem section."
        ], 
        link: "W4MM03202375",
        type: "copy" 
    }
];