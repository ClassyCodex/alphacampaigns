const offers = [
    // --- UPI LOOT ---
    { id: 39, title: "Stan UPI", reward: 10, category: "upi", instructions: ["Enter UPI ID", "Install & Wait 2-3 mins", "Buy ₹1 Trial for Instant ₹10"], link: "https://offers.gscampaign.in/c/stan/GS-7o8lhwLWxD", trackLink: "https://offers.gscampaign.in/utrack/stan", type: "open" },
    { id: 43, title: "Money Social", reward: 10, category: "upi", instructions: ["Enter UPI & WhatsApp", "Link account by OTP", "Get ₹10 instant"], link: "https://visioncamp.in/camp/c/?o=160&ref=lf31ssop1", trackLink: "https://visioncamp.in/tracker", video: "moneysocial.mp4", type: "open" },
    { id: 24, title: "Catcash UPI", reward: 10, category: "upi", instructions: ["Code: B0W1ZW68G", "Join WhatsApp for Lifafa"], link: "https://referral.thecatcash.com/B0W1ZW68G", type: "open" },
    { id: 18, title: "Wincash UPI", reward: 10, category: "upi", instructions: ["Batch Code: M60130", "Verify OTP", "Lucky Cashback"], link: "https://www.wincashbackdaily.com/", type: "open" },
    { id: 20, title: "Vtion UPI", reward: 50, category: "upi", instructions: ["Install and give permissions", "Keep app on phone", "Earn ₹50 Weekly"], link: "https://play.google.com/store/apps/details?id=com.vtion.digital", type: "open" },
    { id: 21, title: "India Polls", reward: 50, category: "upi", instructions: ["Sign up bonus ₹50", "Refer ₹25 per friend", "UPI Withdrawal"], link: "https://panel.indiapolls.com/#/referrals/view/83add062-519e-4dd2-b0b8-527a918e63d6", type: "open" },
    { id: 1, title: "Rupyio UPI", reward: 50, category: "upi", instructions: ["Install & Register", "Complete 2 Tasks"], link: "https://rupiyo.app/referral?userId=68b97796-819e-4fe5-9cde-bc59bd5e9625", type: "open" },
    { id: 17, title: "App20 UPI", reward: 100, category: "upi", instructions: ["Install APK", "Rate & Review app", "Get ₹100+ Reward"], link: "https://offer.app20.in/apk", type: "open" },
    { id: 42, title: "Mobile Expression", reward: 100, category: "upi", instructions: ["Give permissions", "Install Certificate", "Active for 4 days"], link: "https://offers.fokatcash.com/camp.php?ref=EKK75&camp=Mob", certLink: "https://www.mobilexpression.com/certificate-download", video: "mobileexpression.MP4", type: "open" },
    { id: 41, title: "Nielsen Mobile", reward: 70, category: "upi", instructions: ["Android Mobile Panel", "Sync daily for 3 days"], link: "https://offers.fokatcash.com/camp.php?ref=EKK75&camp=Nsmb", trackLink: "https://fokatcash.com/TrackNs", video: "nielsen_streampanel.mp4", type: "open" },
    { id: 40, title: "Nielsen Smart TV", reward: 200, category: "upi", instructions: ["Download on Smart TV", "Give permissions", "Sync daily for 3 days"], link: "https://offers.nkoffers.in/camp.php?ref=OCSGXU&camp=nstv", trackLink: "https://offers.nkoffers.in/track.php?camp=nstv", type: "open" },

    // --- BANK LOOT ---
    { id: 3, title: "Zubydo Bank", reward: 50, category: "bank", instructions: ["Sign up bonus ₹50", "Min Withdraw ₹5"], link: "https://zubydo.com/R51851", type: "open" },
    { id: 44, title: "Airtel Bank", reward: 100, category: "bank upi", instructions: ["Open Zero Balance account", "Deposit any amt & transfer ₹1"], link: "https://cashlootcamps.com/o?c=dInNcX&r=3IksSp", trackLink: "https://tracker.cashlootcamps.com/", video: "airtelcamp.mp4", type: "open" },
    { id: 2, title: "EasyEarn Bank", reward: 100, category: "bank", instructions: ["Register via link", "Min Withdraw ₹100"], link: "https://tinyurl.com/Skearnx", type: "open" },
    { id: 4, title: "Praxo Bank", reward: 100, category: "bank", instructions: ["Install & Register", "Get ₹100 reward"], link: "https://4s0fm.app.link/e5kiW1mc81b", type: "open" },
    { id: 28, title: "Super Money App", reward: 150, category: "bank upi", instructions: ["Link Bank Account", "Send ₹1 to friend"], link: "https://link.super.money/rWUQl5BHyVb", type: "open" },
    { id: 29, title: "BHIM App", reward: 200, category: "bank upi", instructions: ["Code: w9ARDc", "Link Bank via Aadhaar"], link: "https://bhimnpci.page.link/app", type: "open" },
    { id: 5, title: "Win 03 Bank", reward: 200, category: "bank", instructions: ["Bind WhatsApp ID", "Earn ₹200 Daily"], link: "https://win03.club/login?mode=register&i=n4lNZBrr", type: "open" },
    { id: 6, title: "Wacash Bank Loot", reward: 200, category: "bank", instructions: ["Bind WhatsApp ID", "Earn ₹200 Daily"], link: "https://wacashgig.com#/?i=OH7UZ0KD", type: "open" },
    { id: 8, title: "Rummy Leader", reward: 41, category: "bank upi", instructions: ["Signup Bonus ₹41", "Verified Payment"], link: "https://rummyleaders.com", type: "open" },
    { id: 9, title: "Rummy OL", reward: 41, category: "bank upi", instructions: ["Signup Bonus ₹41", "Instant Withdraw"], link: "https://rummyol.com/?", type: "open" },
    { id: 10, title: "Rummy GoodP", reward: 41, category: "bank upi", instructions: ["Signup Bonus ₹41"], link: "https://rummygoodp.com/?", type: "open" },
    { id: 11, title: "Rummy Mars", reward: 41, category: "bank upi", instructions: ["Signup Bonus ₹41"], link: "https://rummymarsz.com/?", type: "open" },
    { id: 12, title: "Rummy Noble", reward: 41, category: "bank upi", instructions: ["Signup Bonus ₹41"], link: "https://rummynobled.com/?", type: "open" },
    { id: 13, title: "Rummy Leader C", reward: 41, category: "bank upi", instructions: ["Signup Bonus ₹41"], link: "https://rummyleaderc.com/?", type: "open" },
    { id: 14, title: "Rummy East", reward: 41, category: "bank upi", instructions: ["Signup Bonus ₹41"], link: "http://rummyeast.com/?", type: "open" },
    { id: 15, title: "Rummy Wealth", reward: 41, category: "bank upi", instructions: ["Signup Bonus ₹41"], link: "https://rummywealthc.com/?", type: "open" },
    { id: 16, title: "Rummy Golds", reward: 41, category: "bank upi", instructions: ["Signup Bonus ₹41"], link: "https://rummygolds.com/", type: "open" },

    // --- CRYPTO LOOT ---
    { id: 7, title: "Gmail Farmer", reward: 14, category: "crypto", instructions: ["Telegram Bot", "Earn ₹14 per Gmail"], link: "https://t.me/GmailFarmerBot?start=6575825147", type: "open" },
    { id: 19, title: "Rprewards Crypto", reward: 84, category: "crypto bank", instructions: ["Complete 3 tasks", "Get $1 Crypto"], link: "https://rprewards.b4a.io/?uid=DbJfSKe355", type: "open" },

    // --- SPECIAL & PREMIUM ---
    { id: 34, title: "Myntra ₹100 Off (Min 499)", price: 37, reward: 100, category: "special", instructions: ["Premium Verified", "New Accounts"], type: "buy", isPremium: true },
    { id: 35, title: "Myntra FWD ₹100 Off (Min 399)", price: 37, reward: 100, category: "special", instructions: ["Premium FWD Coupon", "New Accounts"], type: "buy", isPremium: true },
    { id: 36, title: "YouTube Premium", price: 27, reward: 129, category: "special", instructions: ["Ad-free + Music", "Private Delivery"], type: "buy", isPremium: true },
    { id: 37, title: "Myntra ₹150 Off (Min 649)", price: 47, reward: 150, category: "special", instructions: ["High Value Coupon"], type: "buy", isPremium: true },
    { id: 38, title: "Myntra ₹100 Off (Min 199)", price: 37, reward: 100, category: "special", instructions: ["Best for Small Orders"], type: "buy", isPremium: true },
    { id: 30, title: "Watcho Reward", reward: 299, category: "special", instructions: ["Use code: W4MM03202375"], link: "W4MM03202375", type: "copy" },
    { id: 31, title: "JioMart SAVE100", reward: 100, category: "special", instructions: ["Min ₹199", "Code: SAVE100"], link: "SAVE100", type: "copy" },
    { id: 32, title: "JioMart WOW100", reward: 100, category: "special", instructions: ["Min ₹199", "Code: WOW100"], link: "WOW100", type: "copy" },
    { id: 33, title: "JioMart OLD50", reward: 50, category: "special", instructions: ["Min ₹199", "Code: R2A5V1E4H0T"], link: "R2A5V1E4H0T", type: "copy" },
    { id: 22, title: "Bigbasket Coupon", reward: 100, category: "special", instructions: ["Code: BBFREEDEAL"], link: "BBFREEDEAL", type: "copy" },
    { id: 23, title: "Paytm Reward", reward: 150, category: "special", instructions: ["Code: shikaxfusion"], link: "https://p.paytm.me/xCTH/2srt72hx?utmt=041400", type: "open" },
    { id: 25, title: "FamApp Cashback", reward: 20, category: "special", instructions: ["Sign up & 1st payment"], link: "https://get.fampay.in/RAMJTTXS2", type: "open" },
    { id: 26, title: "Google Pay Loot", reward: 250, category: "special", instructions: ["Pay ₹100 to merchant"], link: "https://gpay.app.goo.gl/invite-8z2ts3x", type: "open" },
    { id: 27, title: "INDmoney Reward", reward: 150, category: "special", instructions: ["Recharge ₹250 within 30 days"], link: "https://indmoney.onelink.me/RmHC/iad74gvz", type: "open" }
];