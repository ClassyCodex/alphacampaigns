/* --- Alpha Master Database: SMM Services Hub --- */
/* Prices include automatic profit markup for Admin */

const db_smm = [
    // --- INSTAGRAM SERVICES ---
    { 
        id: 201, 
        title: "IG Followers (365 Days Refill)", 
        price: 75, 
        category: "smm", 
        sub: "instagram",
        instructions: [
            "Quality: A+ Grade Real Looking",
            "Speed: 600K - 700K per Day",
            "Refill: 365 Days Auto-Refill",
            "Link: Full Profile URL (Public Only)"
        ], 
        type: "buy" 
    },
    { 
        id: 202, 
        title: "IG Followers (Lifetime Refill)", 
        price: 95, 
        category: "smm", 
        sub: "instagram",
        instructions: [
            "Quality: Premium HQ Accounts",
            "Speed: 100K - 200K per Day",
            "Refill: Lifetime Guaranteed",
            "Link: Full Profile URL"
        ], 
        type: "buy" 
    },
    { 
        id: 203, 
        title: "IG Likes (Non-Drop / Stable)", 
        price: 10, 
        category: "smm", 
        sub: "instagram",
        instructions: [
            "Start Time: 10 - 20 Minutes",
            "Quality: Old & Verified Accounts",
            "Refill: Stable Non-Drop",
            "Link: Specific Post or Reel Link"
        ], 
        type: "buy" 
    },
    { 
        id: 204, 
        title: "IG Reel Views (Super Instant)", 
        price: 2, 
        category: "smm", 
        sub: "instagram",
        instructions: [
            "Start Time: Always Instant",
            "Speed: 1 Million per Day",
            "Quality: Real Viral Reach",
            "Link: Instagram Reel Link"
        ], 
        type: "buy" 
    },
    { 
        id: 205, 
        title: "IG Story Views (High Speed)", 
        price: 25, 
        category: "smm", 
        sub: "instagram",
        instructions: [
            "Start Time: 0 - 10 Minutes",
            "Quality: Mixed HQ Accounts",
            "Input: Put ONLY Username (Without @)",
            "Note: Story must be active/public"
        ], 
        type: "buy" 
    },
    { 
        id: 206, 
        title: "IG Random Comments (Positive)", 
        price: 45, 
        category: "smm", 
        sub: "instagram",
        instructions: [
            "Start Time: 0 - 20 Minutes",
            "Quality: Accounts with Profile Pictures",
            "Refill: Lifetime Non-Drop",
            "Link: Post or Reel URL"
        ], 
        type: "buy" 
    },

    // --- YOUTUBE SERVICES ---
    { 
        id: 210, 
        title: "YT Subscribers (Permanent)", 
        price: 2350, 
        category: "smm", 
        sub: "youtube",
        instructions: [
            "Start Time: Within 0 - 2 Hours",
            "Speed: 300 - 400 per Day",
            "Quality: High-End Non-Drop",
            "Link: YouTube Channel URL"
        ], 
        type: "buy" 
    },
    { 
        id: 211, 
        title: "YT Views (Non-Drop / Lifetime)", 
        price: 195, 
        category: "smm", 
        sub: "youtube",
        instructions: [
            "Start Time: Normally 0 - 1 Hour",
            "Speed: 4K - 10K per Day",
            "Quality: High Retention Suggested",
            "Link: YouTube Video Link"
        ], 
        type: "buy" 
    },
    { 
        id: 212, 
        title: "YT Likes (Fast & Stable)", 
        price: 65, 
        category: "smm", 
        sub: "youtube",
        instructions: [
            "Start Time: Instant - 15 Mins",
            "Quality: High Quality Real Users",
            "Refill: 30 - 60 Days Guarantee",
            "Link: Video or Short Link"
        ], 
        type: "buy" 
    },
    { 
        id: 213, 
        title: "YT Livestream Views (30 Mins)", 
        price: 120, 
        category: "smm", 
        sub: "youtube",
        instructions: [
            "Stay Time: 30 Minutes Constant",
            "Start: Instant on Live Stream",
            "Quality: 100% Concurrent Viewers",
            "Link: Active Livestream URL"
        ], 
        type: "buy" 
    },

    // --- TELEGRAM SERVICES ---
    { 
        id: 220, 
        title: "TG Members (Zero Drop)", 
        price: 75, 
        category: "smm", 
        sub: "telegram",
        instructions: [
            "Start Time: Super Instant",
            "Speed: Bullet High Speed",
            "Quality: Non-Drop Global Members",
            "Link: Public Group or Channel link"
        ], 
        type: "buy" 
    },
    { 
        id: 221, 
        title: "TG Post Views (Last 5 Posts)", 
        price: 10, 
        category: "smm", 
        sub: "telegram",
        instructions: [
            "Start Time: One Click Done",
            "Quality: Real Active Post Reach",
            "Refill: Lifetime Stability",
            "Link: Channel Link only"
        ], 
        type: "buy" 
    },
    { 
        id: 222, 
        title: "TG Reactions (Positive Mix)", 
        price: 35, 
        category: "smm", 
        sub: "telegram",
        instructions: [
            "Reactions: 👍 🤩 🎉 🔥 ❤️",
            "Start: Instant Superfast",
            "Quality: Verified Working Reactions",
            "Link: Specific Post Link"
        ], 
        type: "buy" 
    },

    // --- FACEBOOK SERVICES ---
    { 
        id: 230, 
        title: "FB Followers (Page or Profile)", 
        price: 45, 
        category: "smm", 
        sub: "facebook",
        instructions: [
            "Start Time: 0 - 3 Hours",
            "Speed: 100K - 120K per Day",
            "Quality: A Grade Non-Drop",
            "Link: Profile or Page URL"
        ], 
        type: "buy" 
    },
    { 
        id: 231, 
        title: "FB Video / Reel Views", 
        price: 10, 
        category: "smm", 
        sub: "facebook",
        instructions: [
            "Start Time: Always Instant",
            "Quality: HQ Real User Retention",
            "Refill: Possible if drop occurs",
            "Link: Video or Reel Link"
        ], 
        type: "buy" 
    },
    { 
        id: 232, 
        title: "FB Post Likes (Instant)", 
        price: 25, 
        category: "smm", 
        sub: "facebook",
        instructions: [
            "Start Time: Instant Complete",
            "Quality: Global Real Accounts",
            "Refill: 30 Days Guarantee",
            "Link: Public Post URL"
        ], 
        type: "buy" 
    },

    // --- TWITTER & TIKTOK ---
    { 
        id: 240, 
        title: "Twitter Tweet Views", 
        price: 5, 
        category: "smm", 
        sub: "twitter",
        instructions: [
            "Impressions: 100M Reach Capacity",
            "Speed: Instant Viral Start",
            "Quality: 100% Non-Drop Reach",
            "Link: Tweet URL"
        ], 
        type: "buy" 
    },
    { 
        id: 241, 
        title: "TikTok Followers (Non-Drop)", 
        price: 280, 
        category: "smm", 
        sub: "tiktok",
        instructions: [
            "Start Time: Instant",
            "Speed: 100K per Day",
            "Quality: High Quality Real Users",
            "Link: Profile URL"
        ], 
        type: "buy" 
    }
];