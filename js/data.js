// ============================================================
// DITZ Store — Product Data
// Harga = Rate per 1000 + 25% markup
// © DITZNET TECHNOLOGY
// ============================================================

const WHATSAPP_NUMBER = "6281464435341";

function markup(rate) {
  return Math.ceil(rate * 1.25);
}

const CATEGORIES = [
  { id: "instagram", label: "Instagram", icon: "fab fa-instagram", color: "#E1306C" },
  { id: "tiktok",    label: "TikTok",    icon: "fab fa-tiktok",    color: "#ffffff" },
  { id: "youtube",   label: "YouTube",   icon: "fab fa-youtube",   color: "#FF0000" },
];

const SERVICES = [
  // ─────────────────────────────────────────────
  // INSTAGRAM FOLLOWERS
  // ─────────────────────────────────────────────
  {
    id: 9550, platform: "instagram", type: "Followers",
    name: "IG Followers Real | Refill 90D | 150K/Day",
    tags: ["Real","Refill 90D","Start 0-1 Hour"],
    ratePerK: markup(11467), minOrder: 10, maxOrder: 5000000,
    speed: "150K/Day", refill: "90 Hari", quality: "Real"
  },
  {
    id: 9551, platform: "instagram", type: "Followers",
    name: "IG Followers Real | Max 10M | Refill 90D | 200K/Day",
    tags: ["Real","Refill 90D","Start 0-1 Hour"],
    ratePerK: markup(11893), minOrder: 1, maxOrder: 10000000,
    speed: "200K/Day", refill: "90 Hari", quality: "Real"
  },
  {
    id: 9552, platform: "instagram", type: "Followers",
    name: "IG Followers Real | Refill 365D | 200K/Day",
    tags: ["Real","Refill 365D","Start 0-1 Hour"],
    ratePerK: markup(12832), minOrder: 1, maxOrder: 10000000,
    speed: "200K/Day", refill: "365 Hari", quality: "Real"
  },
  {
    id: 9530, platform: "instagram", type: "Followers",
    name: "IG Followers Mixed | Refill 30D | 20K/Day",
    tags: ["Mixed","Refill 30D","Start 0-1 Hour"],
    ratePerK: markup(13423), minOrder: 100, maxOrder: 5000000,
    speed: "20K/Day", refill: "30 Hari", quality: "Mixed"
  },
  {
    id: 9553, platform: "instagram", type: "Followers",
    name: "IG Followers Real | Refill 30D | 100K/Day",
    tags: ["Real","Refill 30D","Start 0-1 Hour"],
    ratePerK: markup(14710), minOrder: 10, maxOrder: 5000000,
    speed: "100K/Day", refill: "30 Hari", quality: "Real"
  },
  {
    id: 9586, platform: "instagram", type: "Followers",
    name: "IG Followers Real | Refill 60D | 20K/Day",
    tags: ["Real","Refill 60D","Start 0-1 Hour"],
    ratePerK: markup(15826), minOrder: 1, maxOrder: 10000000,
    speed: "20K/Day", refill: "60 Hari", quality: "Real"
  },
  {
    id: 9532, platform: "instagram", type: "Followers",
    name: "IG Followers Mixed | Max 1M | Refill 30D | 50K/Day",
    tags: ["Mixed","Refill 30D","Start 0-1 Hour"],
    ratePerK: markup(16598), minOrder: 10, maxOrder: 1000000,
    speed: "50K/Day", refill: "30 Hari", quality: "Mixed"
  },
  {
    id: 9528, platform: "instagram", type: "Followers",
    name: "IG Followers Mixed | Max 110K | Refill 15D | 100K/Day",
    tags: ["Mixed","Refill 15D","Start 0-1 Hour"],
    ratePerK: markup(17030), minOrder: 20, maxOrder: 110000,
    speed: "100K/Day", refill: "15 Hari", quality: "Mixed"
  },
  // Indonesia
  {
    id: 9520, platform: "instagram", type: "Followers",
    name: "IG Followers Indonesia | Max 200K | Refill 7 Hari",
    tags: ["Indonesia","Refill 7D","Real"],
    ratePerK: markup(68436), minOrder: 100, maxOrder: 200000,
    speed: "Variatif", refill: "7 Hari", quality: "Indonesia"
  },

  // ─────────────────────────────────────────────
  // INSTAGRAM LIKES
  // ─────────────────────────────────────────────
  {
    id: 9632, platform: "instagram", type: "Likes",
    name: "IG Likes Real | Refill 365D | 100K/Day",
    tags: ["Real","Refill 365D","Instant"],
    ratePerK: markup(3754), minOrder: 50, maxOrder: 1000000,
    speed: "100K/Day", refill: "365 Hari", quality: "Real"
  },
  {
    id: 9634, platform: "instagram", type: "Likes",
    name: "IG Likes Real | No Refill | 100K/Day",
    tags: ["Real","No Refill","Instant"],
    ratePerK: markup(3910), minOrder: 10, maxOrder: 1000000,
    speed: "100K/Day", refill: "Tidak Ada", quality: "Real"
  },
  {
    id: 9633, platform: "instagram", type: "Likes",
    name: "IG Likes Real | Max 10M | Refill 60D | 200K/Day",
    tags: ["Real","Refill 60D","Instant"],
    ratePerK: markup(3924), minOrder: 100, maxOrder: 10000000,
    speed: "200K/Day", refill: "60 Hari", quality: "Real"
  },
  {
    id: 9635, platform: "instagram", type: "Likes",
    name: "IG Likes Real | Max 10M | Refill 90D | 200K/Day",
    tags: ["Real","Refill 90D","Instant"],
    ratePerK: markup(4065), minOrder: 100, maxOrder: 10000000,
    speed: "200K/Day", refill: "90 Hari", quality: "Real"
  },
  {
    id: 9636, platform: "instagram", type: "Likes",
    name: "IG Likes Mixed | Max 500K | Refill 30D | 100K/Day",
    tags: ["Mixed","Refill 30D","Instant"],
    ratePerK: markup(4129), minOrder: 10, maxOrder: 500000,
    speed: "100K/Day", refill: "30 Hari", quality: "Mixed"
  },
  {
    id: 9641, platform: "instagram", type: "Likes",
    name: "IG Likes Mixed | Max 1M | Refill 90D | 150K/Day",
    tags: ["Mixed","Refill 90D","Instant"],
    ratePerK: markup(4129), minOrder: 10, maxOrder: 1000000,
    speed: "150K/Day", refill: "90 Hari", quality: "Mixed"
  },
  {
    id: 9637, platform: "instagram", type: "Likes",
    name: "IG Likes Mixed | Max 200K | Refill 30D | 100K/Day",
    tags: ["Mixed","Refill 30D","Instant"],
    ratePerK: markup(4504), minOrder: 50, maxOrder: 200000,
    speed: "100K/Day", refill: "30 Hari", quality: "Mixed"
  },
  {
    id: 9638, platform: "instagram", type: "Likes",
    name: "IG Likes Mixed | Max 200K | No Refill | 50K/Day",
    tags: ["Mixed","No Refill","Instant"],
    ratePerK: markup(4504), minOrder: 50, maxOrder: 200000,
    speed: "50K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  // Indonesia
  {
    id: 9521, platform: "instagram", type: "Likes",
    name: "IG Likes Real AF | Indonesia | Max 1K | No Refill",
    tags: ["Indonesia","No Refill","Instant"],
    ratePerK: markup(32488), minOrder: 100, maxOrder: 1000,
    speed: "1K/Day", refill: "Tidak Ada", quality: "Indonesia"
  },

  // ─────────────────────────────────────────────
  // INSTAGRAM VIEWS
  // ─────────────────────────────────────────────
  {
    id: 10421, platform: "instagram", type: "Views",
    name: "IG Views Video/Reel/IGTV | Max 200M | No Refill | 100K/Day",
    tags: ["No Refill","Instant"],
    ratePerK: markup(26), minOrder: 100, maxOrder: 217545811,
    speed: "100K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 10422, platform: "instagram", type: "Views",
    name: "IG Views Video/Reel/IGTV | Max 5M | No Refill | 5M/Day",
    tags: ["No Refill","Instant"],
    ratePerK: markup(29), minOrder: 100, maxOrder: 100000000,
    speed: "5M/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 10423, platform: "instagram", type: "Views",
    name: "IG Views Video/Reel/IGTV | Max 10M | No Refill | 100K/Day",
    tags: ["No Refill","Instant"],
    ratePerK: markup(32), minOrder: 50, maxOrder: 10000000,
    speed: "100K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 8450, platform: "instagram", type: "Views",
    name: "IG Views Video/Reel/IGTV | Max 2B | 10M/Day",
    tags: ["Instant"],
    ratePerK: markup(33), minOrder: 100, maxOrder: 2147483647,
    speed: "10M/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 8451, platform: "instagram", type: "Views",
    name: "IG Views Video/Reel/IGTV | Max 2B | 300K/Day",
    tags: ["Instant"],
    ratePerK: markup(42), minOrder: 10, maxOrder: 2147483647,
    speed: "300K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 8454, platform: "instagram", type: "Views",
    name: "IG Views Video/Reel/IGTV | Max 2B | 100K/Day",
    tags: ["Instant"],
    ratePerK: markup(42), minOrder: 100, maxOrder: 2147483647,
    speed: "100K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 8457, platform: "instagram", type: "Views",
    name: "IG Views Video/Reel/IGTV | Max 100M | 100K/Day",
    tags: ["Instant"],
    ratePerK: markup(42), minOrder: 50, maxOrder: 10000000,
    speed: "100K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 8453, platform: "instagram", type: "Views",
    name: "IG Views Video/Reel/IGTV | Max 1M | 100K/Day",
    tags: ["Instant"],
    ratePerK: markup(51), minOrder: 100, maxOrder: 9999999,
    speed: "100K/Day", refill: "Tidak Ada", quality: "Mixed"
  },

  // ─────────────────────────────────────────────
  // INSTAGRAM REEL
  // ─────────────────────────────────────────────
  {
    id: 10424, platform: "instagram", type: "Reel",
    name: "IG Reel Views No Drop | Max 100M | No Refill | 500K/Day",
    tags: ["No Drop","No Refill","Instant"],
    ratePerK: markup(131), minOrder: 100, maxOrder: 2147483647,
    speed: "500K/Day", refill: "Tidak Ada", quality: "No Drop"
  },
  {
    id: 10425, platform: "instagram", type: "Reel",
    name: "IG Reel Views No Drop | Max 10M | No Refill | 5M/Day",
    tags: ["No Drop","No Refill","Instant"],
    ratePerK: markup(167), minOrder: 100, maxOrder: 100000000,
    speed: "5M/Day", refill: "Tidak Ada", quality: "No Drop"
  },
  {
    id: 10426, platform: "instagram", type: "Reel",
    name: "IG Reel Views No Drop | Max 5M | No Refill | 500K/Day",
    tags: ["No Drop","No Refill","Instant"],
    ratePerK: markup(167), minOrder: 100, maxOrder: 100000000,
    speed: "500K/Day", refill: "Tidak Ada", quality: "No Drop"
  },
  {
    id: 8472, platform: "instagram", type: "Reel",
    name: "IG Reel Views | Max 10M | 2M/Day",
    tags: ["Instant"],
    ratePerK: markup(266), minOrder: 100, maxOrder: 100000000,
    speed: "2M/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 10427, platform: "instagram", type: "Reel",
    name: "IG Reel Likes Real | Max 20K | No Refill | 10K/Day",
    tags: ["Real","No Refill","Instant"],
    ratePerK: markup(746), minOrder: 10, maxOrder: 20000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Real"
  },
  {
    id: 8474, platform: "instagram", type: "Reel",
    name: "IG Reel Views | Max 100M | 5M/Day | Always Working",
    tags: ["Always Working"],
    ratePerK: markup(1857), minOrder: 100, maxOrder: 100000000,
    speed: "5M/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 8473, platform: "instagram", type: "Reel",
    name: "IG Reel Saves | Max 15K | 5K/Day",
    tags: ["Instant"],
    ratePerK: markup(3665), minOrder: 100, maxOrder: 15000,
    speed: "5K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 8475, platform: "instagram", type: "Reel",
    name: "IG Reel Impressions + Reach + Profile Visits | Max 100M | 100K/Day",
    tags: ["Instant"],
    ratePerK: markup(5832), minOrder: 100, maxOrder: 100000000,
    speed: "100K/Day", refill: "Tidak Ada", quality: "Mixed"
  },

  // ─────────────────────────────────────────────
  // INSTAGRAM COMMENTS
  // ─────────────────────────────────────────────
  {
    id: 8499, platform: "instagram", type: "Comments",
    name: "IG Comments Likes | Max 20K | No Refill | 20K/Day",
    tags: ["No Refill","Instant"],
    ratePerK: markup(66263), minOrder: 10, maxOrder: 20000,
    speed: "20K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 8495, platform: "instagram", type: "Comments",
    name: "IG Comments Random | Max 500K | Refill 30D | 20K/Day",
    tags: ["Random","Refill 30D","Instant"],
    ratePerK: markup(97008), minOrder: 10, maxOrder: 500000,
    speed: "20K/Day", refill: "30 Hari", quality: "Random"
  },
  {
    id: 8487, platform: "instagram", type: "Comments",
    name: "IG Comments Custom | Max 10K | No Refill | 10K/Day",
    tags: ["Custom","No Refill","Instant"],
    ratePerK: markup(98358), minOrder: 10, maxOrder: 10000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Custom"
  },
  {
    id: 8488, platform: "instagram", type: "Comments",
    name: "IG Comments Custom | Max 5K | No Refill | 5K/Day",
    tags: ["Custom","No Refill","Instant"],
    ratePerK: markup(98358), minOrder: 10, maxOrder: 5000,
    speed: "5K/Day", refill: "Tidak Ada", quality: "Custom"
  },
  {
    id: 8489, platform: "instagram", type: "Comments",
    name: "IG Comments Custom | Max 5K | No Refill | 1K/Day",
    tags: ["Custom","No Refill","Instant"],
    ratePerK: markup(98358), minOrder: 10, maxOrder: 5000,
    speed: "1K/Day", refill: "Tidak Ada", quality: "Custom"
  },
  {
    id: 8493, platform: "instagram", type: "Comments",
    name: "IG Comments Random | Max 20K | No Refill | 10K/Day",
    tags: ["Random","No Refill","Instant"],
    ratePerK: markup(98358), minOrder: 10, maxOrder: 20000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Random"
  },
  {
    id: 8498, platform: "instagram", type: "Comments",
    name: "IG Comments Emoji | Max 200K | Refill 30D | 10K/Day",
    tags: ["Emoji","Refill 30D","Instant"],
    ratePerK: markup(98358), minOrder: 10, maxOrder: 200000,
    speed: "10K/Day", refill: "30 Hari", quality: "Emoji"
  },
  {
    id: 8497, platform: "instagram", type: "Comments",
    name: "IG Comments Emoji | Max 500K | Refill 30D | 20K/Day",
    tags: ["Emoji","Refill 30D","Instant"],
    ratePerK: markup(113175), minOrder: 10, maxOrder: 500000,
    speed: "20K/Day", refill: "30 Hari", quality: "Emoji"
  },

  // ─────────────────────────────────────────────
  // INSTAGRAM SHARES
  // ─────────────────────────────────────────────
  {
    id: 10204, platform: "instagram", type: "Shares",
    name: "IG Shares Engagement | Max 1M | No Refill | 100K/Day",
    tags: ["Engagement","No Refill","Instant"],
    ratePerK: markup(231), minOrder: 100, maxOrder: 1000000,
    speed: "100K/Day", refill: "Tidak Ada", quality: "Engagement"
  },
  {
    id: 8544, platform: "instagram", type: "Shares",
    name: "IG Shares Engagement | Max 100M | 200K/Day",
    tags: ["Engagement","Instant"],
    ratePerK: markup(266), minOrder: 100, maxOrder: 100000000,
    speed: "200K/Day", refill: "Tidak Ada", quality: "Engagement"
  },
  {
    id: 8545, platform: "instagram", type: "Shares",
    name: "IG Shares Engagement | Max 1M | 100K/Day",
    tags: ["Engagement","Instant"],
    ratePerK: markup(333), minOrder: 10, maxOrder: 1000000,
    speed: "100K/Day", refill: "Tidak Ada", quality: "Engagement"
  },
  {
    id: 8547, platform: "instagram", type: "Shares",
    name: "IG Shares Engagement | Max 10M | 200K/Day",
    tags: ["Engagement","Instant"],
    ratePerK: markup(397), minOrder: 10, maxOrder: 10000000,
    speed: "200K/Day", refill: "Tidak Ada", quality: "Engagement"
  },
  {
    id: 8548, platform: "instagram", type: "Shares",
    name: "IG Shares Engagement | Max 10M | 500K/Day",
    tags: ["Engagement","Instant"],
    ratePerK: markup(908), minOrder: 100, maxOrder: 10000000,
    speed: "500K/Day", refill: "Tidak Ada", quality: "Engagement"
  },
  {
    id: 8546, platform: "instagram", type: "Shares",
    name: "IG Shares Engagement | Max 500K | 20K/Day",
    tags: ["Engagement","Instant"],
    ratePerK: markup(1162), minOrder: 100, maxOrder: 500000,
    speed: "20K/Day", refill: "Tidak Ada", quality: "Engagement"
  },
  {
    id: 8549, platform: "instagram", type: "Shares",
    name: "IG Shares Engagement | Max 10M | 1M/Day",
    tags: ["Engagement","Instant"],
    ratePerK: markup(2457), minOrder: 10, maxOrder: 10000000,
    speed: "1M/Day", refill: "Tidak Ada", quality: "Engagement"
  },
  {
    id: 8550, platform: "instagram", type: "Shares",
    name: "IG Shares Engagement | Max 1M | 20K/Day",
    tags: ["Engagement","Instant"],
    ratePerK: markup(4708), minOrder: 10, maxOrder: 1000000,
    speed: "20K/Day", refill: "Tidak Ada", quality: "Engagement"
  },

  // ─────────────────────────────────────────────
  // INSTAGRAM MENTIONS
  // ─────────────────────────────────────────────
  {
    id: 8480, platform: "instagram", type: "Mentions",
    name: "IG Mentions Reel | User Followers | Max 1M | 100K/Day",
    tags: ["Reel","User Followers"],
    ratePerK: markup(55740), minOrder: 100, maxOrder: 500000,
    speed: "100K/Day", refill: "Tidak Ada", quality: "User Followers"
  },
  {
    id: 8479, platform: "instagram", type: "Mentions",
    name: "IG Mentions Reel | Custom List | Max 1M | 100K/Day",
    tags: ["Reel","Custom List"],
    ratePerK: markup(56327), minOrder: 100, maxOrder: 500000,
    speed: "100K/Day", refill: "Tidak Ada", quality: "Custom List"
  },
  {
    id: 8481, platform: "instagram", type: "Mentions",
    name: "IG Mentions Custom List | Max 100K | 10K/Day",
    tags: ["Custom List"],
    ratePerK: markup(56327), minOrder: 100, maxOrder: 1000000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Custom List"
  },
  {
    id: 10433, platform: "instagram", type: "Mentions",
    name: "IG Mentions User Followers | Max 1M | No Refill | 10K/Day",
    tags: ["User Followers","No Refill"],
    ratePerK: markup(56327), minOrder: 100, maxOrder: 1000000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "User Followers"
  },
  {
    id: 8477, platform: "instagram", type: "Mentions",
    name: "IG Mentions Custom List | Max 1M | 100K/Day",
    tags: ["Custom List"],
    ratePerK: markup(83153), minOrder: 1000, maxOrder: 100000,
    speed: "100K/Day", refill: "Tidak Ada", quality: "Custom List"
  },
  {
    id: 8478, platform: "instagram", type: "Mentions",
    name: "IG Mentions User Followers | Max 1M | 100K/Day",
    tags: ["User Followers"],
    ratePerK: markup(86478), minOrder: 1000, maxOrder: 100000,
    speed: "100K/Day", refill: "Tidak Ada", quality: "User Followers"
  },
  {
    id: 10429, platform: "instagram", type: "Mentions",
    name: "IG Mentions Post Likers | Max 100K | No Refill | 5K/Day",
    tags: ["Post Likers","No Refill"],
    ratePerK: markup(86478), minOrder: 1000, maxOrder: 100000,
    speed: "5K/Day", refill: "Tidak Ada", quality: "Post Likers"
  },
  {
    id: 10430, platform: "instagram", type: "Mentions",
    name: "IG Mentions User Following | Max 7K | No Refill | 5K/Day",
    tags: ["User Following","No Refill"],
    ratePerK: markup(86478), minOrder: 1000, maxOrder: 7000,
    speed: "5K/Day", refill: "Tidak Ada", quality: "User Following"
  },

  // ─────────────────────────────────────────────
  // INSTAGRAM REPOST
  // ─────────────────────────────────────────────
  {
    id: 10195, platform: "instagram", type: "Repost",
    name: "IG Repost Real | Max 10K | No Refill | 10K/Day",
    tags: ["Real","No Refill","Instant"],
    ratePerK: markup(13254), minOrder: 1, maxOrder: 10000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Real"
  },
  {
    id: 10196, platform: "instagram", type: "Repost",
    name: "IG Repost Real + Reach | Max 10K | No Refill | 3K/Day",
    tags: ["Real","No Refill","Instant"],
    ratePerK: markup(14910), minOrder: 10, maxOrder: 10000,
    speed: "3K/Day", refill: "Tidak Ada", quality: "Real + Reach"
  },
  {
    id: 10197, platform: "instagram", type: "Repost",
    name: "IG Repost Real | Max 10K | No Refill | 10K/Day [v2]",
    tags: ["Real","No Refill","Instant"],
    ratePerK: markup(16567), minOrder: 10, maxOrder: 10000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Real"
  },
  {
    id: 10198, platform: "instagram", type: "Repost",
    name: "IG Repost Real | Max 100K | No Refill | 50K/Day",
    tags: ["Real","No Refill","Instant"],
    ratePerK: markup(193266), minOrder: 50, maxOrder: 100000,
    speed: "50K/Day", refill: "Tidak Ada", quality: "Real"
  },
  {
    id: 10199, platform: "instagram", type: "Repost",
    name: "IG Repost Real | Max 100K | No Refill | 50K/Day [v2]",
    tags: ["Real","No Refill","Instant"],
    ratePerK: markup(261736), minOrder: 10, maxOrder: 100000,
    speed: "50K/Day", refill: "Tidak Ada", quality: "Real"
  },

  // ─────────────────────────────────────────────
  // TIKTOK FOLLOWERS
  // ─────────────────────────────────────────────
  {
    id: 10223, platform: "tiktok", type: "Followers",
    name: "TikTok Followers Real | Max 10M | No Refill | 10K/Day",
    tags: ["Real","No Refill"],
    ratePerK: markup(30096), minOrder: 10, maxOrder: 10000000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Real"
  },
  {
    id: 10254, platform: "tiktok", type: "Followers",
    name: "TikTok Followers Real | Max 10M | No Refill | 50K/Day",
    tags: ["Real","No Refill"],
    ratePerK: markup(31686), minOrder: 10, maxOrder: 10000000,
    speed: "50K/Day", refill: "Tidak Ada", quality: "Real"
  },
  {
    id: 10229, platform: "tiktok", type: "Followers",
    name: "TikTok Followers Real | Max 10M | Refill 30D | 10K/Day",
    tags: ["Real","Refill 30D"],
    ratePerK: markup(32740), minOrder: 10, maxOrder: 10000000,
    speed: "10K/Day", refill: "30 Hari", quality: "Real"
  },
  {
    id: 10274, platform: "tiktok", type: "Followers",
    name: "TikTok Followers Brazil | Max 50K | No Refill | 10K/Day",
    tags: ["Brazil","No Refill"],
    ratePerK: markup(33409), minOrder: 10, maxOrder: 50000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Brazil"
  },
  {
    id: 10235, platform: "tiktok", type: "Followers",
    name: "TikTok Followers Real | Max 10M | Refill 30D | 15K/Day",
    tags: ["Real","Refill 30D"],
    ratePerK: markup(33818), minOrder: 10, maxOrder: 10000000,
    speed: "15K/Day", refill: "30 Hari", quality: "Real"
  },
  {
    id: 10222, platform: "tiktok", type: "Followers",
    name: "TikTok Followers Mixed | Max 10M | No Refill | 10K/Day",
    tags: ["Mixed","No Refill"],
    ratePerK: markup(34047), minOrder: 10, maxOrder: 10000000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 10238, platform: "tiktok", type: "Followers",
    name: "TikTok Followers Mixed | Max 5M | No Refill | 20K/Day",
    tags: ["Mixed","No Refill"],
    ratePerK: markup(34565), minOrder: 10, maxOrder: 5000000,
    speed: "20K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 10242, platform: "tiktok", type: "Followers",
    name: "TikTok Followers Real | Max 5M | No Refill | 100K/Day",
    tags: ["Real","No Refill"],
    ratePerK: markup(36947), minOrder: 10, maxOrder: 5000000,
    speed: "100K/Day", refill: "Tidak Ada", quality: "Real"
  },

  // ─────────────────────────────────────────────
  // TIKTOK LIKES
  // ─────────────────────────────────────────────
  {
    id: 10291, platform: "tiktok", type: "Likes",
    name: "TikTok Likes Real | Max 1M | Refill 30D | 100K/Day",
    tags: ["Real","Refill 30D","Instant"],
    ratePerK: markup(305), minOrder: 10, maxOrder: 1000000,
    speed: "100K/Day", refill: "30 Hari", quality: "Real"
  },
  {
    id: 10298, platform: "tiktok", type: "Likes",
    name: "TikTok Likes Real | Max 1M | Refill 30D | 100K/Day [v2]",
    tags: ["Real","Refill 30D","Instant"],
    ratePerK: markup(332), minOrder: 10, maxOrder: 1000000,
    speed: "100K/Day", refill: "30 Hari", quality: "Real"
  },
  {
    id: 10302, platform: "tiktok", type: "Likes",
    name: "TikTok Likes Real | Max 1M | Refill 90D | 100K/Day",
    tags: ["Real","Refill 90D","Instant"],
    ratePerK: markup(347), minOrder: 10, maxOrder: 1000000,
    speed: "100K/Day", refill: "90 Hari", quality: "Real"
  },
  {
    id: 10297, platform: "tiktok", type: "Likes",
    name: "TikTok Likes Real | Max 1M | Refill 365D | 100K/Day",
    tags: ["Real","Refill 365D","Instant"],
    ratePerK: markup(360), minOrder: 10, maxOrder: 1000000,
    speed: "100K/Day", refill: "365 Hari", quality: "Real"
  },
  {
    id: 10294, platform: "tiktok", type: "Likes",
    name: "TikTok Likes Mixed | Max 1M | No Refill | 100K/Day",
    tags: ["Mixed","No Refill","Instant"],
    ratePerK: markup(373), minOrder: 10, maxOrder: 1000000,
    speed: "100K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 10303, platform: "tiktok", type: "Likes",
    name: "TikTok Likes Mixed | Max 5M | No Refill | 200K/Day",
    tags: ["Mixed","No Refill","Instant"],
    ratePerK: markup(415), minOrder: 10, maxOrder: 5000000,
    speed: "200K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 10293, platform: "tiktok", type: "Likes",
    name: "TikTok Likes Mixed | Max 5M | No Refill | 50K/Day",
    tags: ["Mixed","No Refill","Instant"],
    ratePerK: markup(498), minOrder: 10, maxOrder: 5000000,
    speed: "50K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 10292, platform: "tiktok", type: "Likes",
    name: "TikTok Likes Mixed | Max 5M | Refill 30D | 50K/Day",
    tags: ["Mixed","Refill 30D","Instant"],
    ratePerK: markup(531), minOrder: 10, maxOrder: 5000000,
    speed: "50K/Day", refill: "30 Hari", quality: "Mixed"
  },

  // ─────────────────────────────────────────────
  // TIKTOK VIEWS
  // ─────────────────────────────────────────────
  {
    id: 8794, platform: "tiktok", type: "Views",
    name: "TikTok Views Best Quality | Max 2B | No Refill | 5M/Day",
    tags: ["Best Quality","No Refill","Instant"],
    ratePerK: markup(134), minOrder: 100, maxOrder: 2147483647,
    speed: "5M/Day", refill: "Tidak Ada", quality: "Best Quality"
  },
  {
    id: 8797, platform: "tiktok", type: "Views",
    name: "TikTok Views Best Quality | Max 100M | No Refill | 10M/Day",
    tags: ["Best Quality","No Refill","Instant"],
    ratePerK: markup(134), minOrder: 100, maxOrder: 2147483647,
    speed: "10M/Day", refill: "Tidak Ada", quality: "Best Quality"
  },
  {
    id: 8798, platform: "tiktok", type: "Views",
    name: "TikTok Views Best Quality | Max 30M | No Refill | 10M/Day",
    tags: ["Best Quality","No Refill","Instant"],
    ratePerK: markup(134), minOrder: 100, maxOrder: 2147483647,
    speed: "10M/Day", refill: "Tidak Ada", quality: "Best Quality"
  },
  {
    id: 10319, platform: "tiktok", type: "Views",
    name: "TikTok Views Best Quality | Max 2B | No Refill | 1M/Day",
    tags: ["Best Quality","No Refill","Instant"],
    ratePerK: markup(194), minOrder: 100, maxOrder: 2147483647,
    speed: "1M/Day", refill: "Tidak Ada", quality: "Best Quality"
  },
  {
    id: 10320, platform: "tiktok", type: "Views",
    name: "TikTok Views Best Quality | Max 2B | No Refill | 1M/Day [v2]",
    tags: ["Best Quality","No Refill","Instant"],
    ratePerK: markup(194), minOrder: 50, maxOrder: 2147483647,
    speed: "1M/Day", refill: "Tidak Ada", quality: "Best Quality"
  },
  {
    id: 8795, platform: "tiktok", type: "Views",
    name: "TikTok Views Best Quality | Max 2B | Refill 30D | 500M/Day",
    tags: ["Best Quality","Refill 30D","Instant"],
    ratePerK: markup(195), minOrder: 100, maxOrder: 2147483647,
    speed: "500M/Day", refill: "30 Hari", quality: "Best Quality"
  },
  {
    id: 10332, platform: "tiktok", type: "Views",
    name: "TikTok Views Best Quality | Max 2B | Refill 30D | 1M/Day",
    tags: ["Best Quality","Refill 30D","Instant"],
    ratePerK: markup(195), minOrder: 50, maxOrder: 2147483647,
    speed: "1M/Day", refill: "30 Hari", quality: "Best Quality"
  },
  {
    id: 8778, platform: "tiktok", type: "Views",
    name: "TikTok Views Best Quality | Max 10M | No Refill | 1M/Day",
    tags: ["Best Quality","No Refill","Instant"],
    ratePerK: markup(199), minOrder: 100, maxOrder: 10000000,
    speed: "1M/Day", refill: "Tidak Ada", quality: "Best Quality"
  },

  // ─────────────────────────────────────────────
  // TIKTOK COMMENTS
  // ─────────────────────────────────────────────
  {
    id: 10339, platform: "tiktok", type: "Comments",
    name: "TikTok Comment Likes High Quality | Max 1M | No Refill | 100K/Day",
    tags: ["High Quality","No Refill","Instant"],
    ratePerK: markup(1932), minOrder: 10, maxOrder: 1000000,
    speed: "100K/Day", refill: "Tidak Ada", quality: "High Quality"
  },
  {
    id: 10340, platform: "tiktok", type: "Comments",
    name: "TikTok Comment Likes High Quality | Max 1M | Refill 30D | 100K/Day",
    tags: ["High Quality","Refill 30D","Instant"],
    ratePerK: markup(2209), minOrder: 10, maxOrder: 1000000,
    speed: "100K/Day", refill: "30 Hari", quality: "High Quality"
  },
  {
    id: 8817, platform: "tiktok", type: "Comments",
    name: "TikTok Comments Likes | Max 10K | No Refill | 10K/Day",
    tags: ["Likes","No Refill","Instant"],
    ratePerK: markup(3725), minOrder: 10, maxOrder: 10000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Likes"
  },
  {
    id: 8816, platform: "tiktok", type: "Comments",
    name: "TikTok Comments Likes | Max 1M | No Refill | 10K/Day",
    tags: ["Likes","No Refill","Instant"],
    ratePerK: markup(4840), minOrder: 50, maxOrder: 100000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Likes"
  },
  {
    id: 8815, platform: "tiktok", type: "Comments",
    name: "TikTok Comments Likes | Max 1M | Refill 30D | 50K/Day",
    tags: ["Likes","Refill 30D","Instant"],
    ratePerK: markup(4966), minOrder: 50, maxOrder: 1000000,
    speed: "50K/Day", refill: "30 Hari", quality: "Likes"
  },
  {
    id: 8818, platform: "tiktok", type: "Comments",
    name: "TikTok Comments Emoji | Max 10K | No Refill | 10K/Day",
    tags: ["Emoji","No Refill","Instant"],
    ratePerK: markup(17929), minOrder: 10, maxOrder: 10000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Emoji"
  },
  {
    id: 8820, platform: "tiktok", type: "Comments",
    name: "TikTok Comments Random | Max 100K | No Refill | 10K/Day",
    tags: ["Random","No Refill","Instant"],
    ratePerK: markup(17929), minOrder: 1, maxOrder: 100000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Random"
  },
  {
    id: 8814, platform: "tiktok", type: "Comments",
    name: "TikTok Comments Custom | Max 5K | No Refill | 1K/Day",
    tags: ["Custom","No Refill","Instant"],
    ratePerK: markup(19308), minOrder: 1, maxOrder: 5000,
    speed: "1K/Day", refill: "Tidak Ada", quality: "Custom"
  },

  // ─────────────────────────────────────────────
  // TIKTOK STORY
  // ─────────────────────────────────────────────
  {
    id: 8811, platform: "tiktok", type: "Story",
    name: "TikTok Story Likes | Max 5K | No Refill | 5K/Day",
    tags: ["No Refill","Instant"],
    ratePerK: markup(2950), minOrder: 50, maxOrder: 10000,
    speed: "5K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 8812, platform: "tiktok", type: "Story",
    name: "TikTok Story Likes | Max 5K | No Refill | 5K/Day [v2]",
    tags: ["No Refill","Instant"],
    ratePerK: markup(3311), minOrder: 50, maxOrder: 10000,
    speed: "5K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 10335, platform: "tiktok", type: "Story",
    name: "TikTok Story Likes Brazil | Max 10M | No Refill | 20K/Day",
    tags: ["Brazil","No Refill","Instant"],
    ratePerK: markup(4151), minOrder: 10, maxOrder: 10000000,
    speed: "20K/Day", refill: "Tidak Ada", quality: "Brazil"
  },
  {
    id: 10336, platform: "tiktok", type: "Story",
    name: "TikTok Story Likes Brazil | Max 10M | No Refill | 10K/Day",
    tags: ["Brazil","No Refill","Instant"],
    ratePerK: markup(4273), minOrder: 10, maxOrder: 10000000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Brazil"
  },
  {
    id: 8813, platform: "tiktok", type: "Story",
    name: "TikTok Story Views | Max 10K | No Refill | 10K/Day",
    tags: ["No Refill","Instant"],
    ratePerK: markup(4246), minOrder: 10, maxOrder: 100000000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 10337, platform: "tiktok", type: "Story",
    name: "TikTok Story Views + Likes Best Quality | Max 10M | No Refill | 10K/Day",
    tags: ["Best Quality","No Refill","Instant"],
    ratePerK: markup(6918), minOrder: 10, maxOrder: 10000000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Best Quality"
  },
  {
    id: 10338, platform: "tiktok", type: "Story",
    name: "TikTok Story Views + Likes No Drop | Max 10M | No Refill | 1K/Day",
    tags: ["No Drop","No Refill","Instant"],
    ratePerK: markup(8276), minOrder: 10, maxOrder: 10000000,
    speed: "1K/Day", refill: "Tidak Ada", quality: "No Drop"
  },

  // ─────────────────────────────────────────────
  // TIKTOK SAVES
  // ─────────────────────────────────────────────
  {
    id: 8825, platform: "tiktok", type: "Saves",
    name: "TikTok Saves Engagement | Max 2B | No Refill | 100K/Day",
    tags: ["Engagement","No Refill","Instant"],
    ratePerK: markup(139), minOrder: 10, maxOrder: 500000,
    speed: "100K/Day", refill: "Tidak Ada", quality: "Engagement"
  },
  {
    id: 8826, platform: "tiktok", type: "Saves",
    name: "TikTok Saves Engagement | Max 2B | Refill 365D | 100K/Day",
    tags: ["Engagement","Refill 365D","Instant"],
    ratePerK: markup(167), minOrder: 10, maxOrder: 500000,
    speed: "100K/Day", refill: "365 Hari", quality: "Engagement"
  },
  {
    id: 8827, platform: "tiktok", type: "Saves",
    name: "TikTok Saves Engagement | Max 10M | No Refill | 100K/Day",
    tags: ["Engagement","No Refill","Instant"],
    ratePerK: markup(250), minOrder: 10, maxOrder: 10000000,
    speed: "100K/Day", refill: "Tidak Ada", quality: "Engagement"
  },
  {
    id: 8828, platform: "tiktok", type: "Saves",
    name: "TikTok Saves Engagement | Max 20K | Refill 30D | 20K/Day",
    tags: ["Engagement","Refill 30D","Instant"],
    ratePerK: markup(277), minOrder: 100, maxOrder: 20000,
    speed: "20K/Day", refill: "30 Hari", quality: "Engagement"
  },
  {
    id: 8829, platform: "tiktok", type: "Saves",
    name: "TikTok Saves Engagement | Max 10M | Refill 30D | 100K/Day",
    tags: ["Engagement","Refill 30D","Instant"],
    ratePerK: markup(332), minOrder: 10, maxOrder: 500000,
    speed: "100K/Day", refill: "30 Hari", quality: "Engagement"
  },
  {
    id: 8833, platform: "tiktok", type: "Saves",
    name: "TikTok Saves Engagement | Max 10K | Refill 30D | 10K/Day",
    tags: ["Engagement","Refill 30D","Instant"],
    ratePerK: markup(332), minOrder: 10, maxOrder: 100000,
    speed: "10K/Day", refill: "30 Hari", quality: "Engagement"
  },
  {
    id: 8834, platform: "tiktok", type: "Saves",
    name: "TikTok Saves Engagement | Max 10K | Refill 30D | 5K/Day",
    tags: ["Engagement","Refill 30D","Instant"],
    ratePerK: markup(332), minOrder: 10, maxOrder: 1000000,
    speed: "5K/Day", refill: "30 Hari", quality: "Engagement"
  },
  {
    id: 8830, platform: "tiktok", type: "Saves",
    name: "TikTok Saves Engagement | Max 100K | Refill 30D | 20K/Day",
    tags: ["Engagement","Refill 30D","Instant"],
    ratePerK: markup(2620), minOrder: 10, maxOrder: 100000,
    speed: "20K/Day", refill: "30 Hari", quality: "Engagement"
  },

  // ─────────────────────────────────────────────
  // YOUTUBE SUBSCRIBERS
  // ─────────────────────────────────────────────
  {
    id: 9000, platform: "youtube", type: "Subscribers",
    name: "YT Subscribers Bot | Max 15K | No Refill | 10K/Day",
    tags: ["Bot","No Refill","Instant"],
    ratePerK: markup(3275), minOrder: 10, maxOrder: 500000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Bot"
  },
  {
    id: 9723, platform: "youtube", type: "Subscribers",
    name: "YT Subscribers Bot | Max 10K | No Refill | 10K/Day",
    tags: ["Bot","No Refill"],
    ratePerK: markup(3859), minOrder: 50, maxOrder: 10000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Bot"
  },
  {
    id: 9732, platform: "youtube", type: "Subscribers",
    name: "YT Subscribers Best Quality | Max 1M | No Refill | 200/Day",
    tags: ["Best Quality","No Refill"],
    ratePerK: markup(104687), minOrder: 100, maxOrder: 1000000,
    speed: "200/Day", refill: "Tidak Ada", quality: "Best Quality"
  },
  {
    id: 9733, platform: "youtube", type: "Subscribers",
    name: "YT Subscribers High Quality | Max 100K | Refill 7D | 2K/Day",
    tags: ["High Quality","Refill 7D"],
    ratePerK: markup(110173), minOrder: 10, maxOrder: 100000,
    speed: "2K/Day", refill: "7 Hari", quality: "High Quality"
  },
  {
    id: 9737, platform: "youtube", type: "Subscribers",
    name: "YT Subscribers USA | Max 50K | Refill 30D | 10K/Day",
    tags: ["USA","Refill 30D"],
    ratePerK: markup(165260), minOrder: 50, maxOrder: 50000,
    speed: "10K/Day", refill: "30 Hari", quality: "USA"
  },
  {
    id: 9724, platform: "youtube", type: "Subscribers",
    name: "YT Subscribers High Quality | Max 50K | Refill 30D | 5K/Day",
    tags: ["High Quality","Refill 30D"],
    ratePerK: markup(330515), minOrder: 5, maxOrder: 50000,
    speed: "5K/Day", refill: "30 Hari", quality: "High Quality"
  },
  {
    id: 9727, platform: "youtube", type: "Subscribers",
    name: "YT Subscribers High Quality | Max 100K | Refill 30D | 5K/Day",
    tags: ["High Quality","Refill 30D"],
    ratePerK: markup(330515), minOrder: 30, maxOrder: 100000,
    speed: "5K/Day", refill: "30 Hari", quality: "High Quality"
  },
  {
    id: 9735, platform: "youtube", type: "Subscribers",
    name: "YT Subscribers High Quality | Max 100K | Refill 90D | 5K/Day",
    tags: ["High Quality","Refill 90D"],
    ratePerK: markup(358058), minOrder: 30, maxOrder: 100000,
    speed: "5K/Day", refill: "90 Hari", quality: "High Quality"
  },

  // ─────────────────────────────────────────────
  // YOUTUBE LIKES
  // ─────────────────────────────────────────────
  {
    id: 9039, platform: "youtube", type: "Likes",
    name: "YT Likes Mixed | Max 15K | No Refill | 30K/Day",
    tags: ["Mixed","No Refill","Instant"],
    ratePerK: markup(972), minOrder: 10, maxOrder: 50000,
    speed: "30K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 9041, platform: "youtube", type: "Likes",
    name: "YT Likes Mixed | Max 25K | Refill 30D | 10K/Day",
    tags: ["Mixed","Refill 30D","Instant"],
    ratePerK: markup(1022), minOrder: 10, maxOrder: 30000,
    speed: "10K/Day", refill: "30 Hari", quality: "Mixed"
  },
  {
    id: 9034, platform: "youtube", type: "Likes",
    name: "YT Likes Mixed | Max 15K | No Refill | 10K/Day",
    tags: ["Mixed","No Refill","Instant"],
    ratePerK: markup(1104), minOrder: 10, maxOrder: 10000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 9739, platform: "youtube", type: "Likes",
    name: "YT Likes Mixed | Max 1M | No Refill | 500K/Day",
    tags: ["Mixed","No Refill","Instant"],
    ratePerK: markup(1379), minOrder: 10, maxOrder: 1000000,
    speed: "500K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 9038, platform: "youtube", type: "Likes",
    name: "YT Likes Mixed | Max 15K | No Refill | 10K/Day [v2]",
    tags: ["Mixed","No Refill","Instant"],
    ratePerK: markup(1655), minOrder: 10, maxOrder: 500000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 9740, platform: "youtube", type: "Likes",
    name: "YT Likes Mixed | Max 50K | No Refill | 50K/Day",
    tags: ["Mixed","No Refill","Instant"],
    ratePerK: markup(2480), minOrder: 10, maxOrder: 50000,
    speed: "50K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 9741, platform: "youtube", type: "Likes",
    name: "YT Likes Mixed | Max 20K | No Refill | 20K/Day",
    tags: ["Mixed","No Refill","Instant"],
    ratePerK: markup(2480), minOrder: 10, maxOrder: 20000,
    speed: "20K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 9742, platform: "youtube", type: "Likes",
    name: "YT Likes Real | Max 30K | No Refill | 2K/Day",
    tags: ["Real","No Refill"],
    ratePerK: markup(2480), minOrder: 10, maxOrder: 30000,
    speed: "2K/Day", refill: "Tidak Ada", quality: "Real"
  },

  // ─────────────────────────────────────────────
  // YOUTUBE VIEWS
  // ─────────────────────────────────────────────
  {
    id: 9006, platform: "youtube", type: "Views",
    name: "YT Views External | Max 10M | No Refill | 50K/Day",
    tags: ["External","No Refill","Slow"],
    ratePerK: markup(10315), minOrder: 1000, maxOrder: 10000000,
    speed: "50K/Day", refill: "Tidak Ada", quality: "External"
  },
  {
    id: 9007, platform: "youtube", type: "Views",
    name: "YT Views Mixed | Max 1M | Refill 365D | 1K/Day",
    tags: ["Mixed","Refill 365D","Slow"],
    ratePerK: markup(13884), minOrder: 100, maxOrder: 1000000,
    speed: "1K/Day", refill: "365 Hari", quality: "Mixed"
  },
  {
    id: 9008, platform: "youtube", type: "Views",
    name: "YT Views Mixed | Max 1M | Refill 365D | 5K/Day",
    tags: ["Mixed","Refill 365D","Slow"],
    ratePerK: markup(15205), minOrder: 100, maxOrder: 1000000,
    speed: "5K/Day", refill: "365 Hari", quality: "Mixed"
  },
  {
    id: 9009, platform: "youtube", type: "Views",
    name: "YT Views Mixed | Max 10M | Refill Lifetime | 1K/Day",
    tags: ["Mixed","Refill Lifetime","Slow"],
    ratePerK: markup(21154), minOrder: 100, maxOrder: 10000000,
    speed: "1K/Day", refill: "Seumur Hidup", quality: "Mixed"
  },
  {
    id: 9017, platform: "youtube", type: "Views",
    name: "YT Views Mixed | Max 10M | Refill Lifetime | 500K/Day",
    tags: ["Mixed","Refill Lifetime","Instant"],
    ratePerK: markup(21485), minOrder: 2000, maxOrder: 1000000,
    speed: "500K/Day", refill: "Seumur Hidup", quality: "Mixed"
  },
  {
    id: 9023, platform: "youtube", type: "Views",
    name: "YT Views Mixed | Max 1M | Refill Lifetime | 10K/Day",
    tags: ["Mixed","Refill Lifetime","Slow"],
    ratePerK: markup(22969), minOrder: 100, maxOrder: 20000000,
    speed: "10K/Day", refill: "Seumur Hidup", quality: "Mixed"
  },
  {
    id: 9010, platform: "youtube", type: "Views",
    name: "YT Views Mixed | Max 1M | Refill 365D | 200K/Day",
    tags: ["Mixed","Refill 365D","Instant"],
    ratePerK: markup(23138), minOrder: 2000, maxOrder: 1000000,
    speed: "200K/Day", refill: "365 Hari", quality: "Mixed"
  },
  {
    id: 9020, platform: "youtube", type: "Views",
    name: "YT Views Mixed | Max 10M | Refill Lifetime | 200K/Day",
    tags: ["Mixed","Refill Lifetime","Instant"],
    ratePerK: markup(23468), minOrder: 5000, maxOrder: 10000000,
    speed: "200K/Day", refill: "Seumur Hidup", quality: "Mixed"
  },

  // ─────────────────────────────────────────────
  // YOUTUBE COMMENTS
  // ─────────────────────────────────────────────
  {
    id: 9073, platform: "youtube", type: "Comments",
    name: "YT Comments Custom | Max 2K | Refill 30D | 2K/Day",
    tags: ["Custom","Refill 30D","Best Speed"],
    ratePerK: markup(65865), minOrder: 5, maxOrder: 20000,
    speed: "2K/Day", refill: "30 Hari", quality: "Custom"
  },
  {
    id: 9071, platform: "youtube", type: "Comments",
    name: "YT Comments Custom | Max 20K | Refill 30D | 2K/Day",
    tags: ["Custom","Refill 30D","Best Speed"],
    ratePerK: markup(68858), minOrder: 5, maxOrder: 20000,
    speed: "2K/Day", refill: "30 Hari", quality: "Custom"
  },
  {
    id: 9078, platform: "youtube", type: "Comments",
    name: "YT Comments Random | Max 11K | Refill 30D | 11K/Day",
    tags: ["Random","Refill 30D","Best Speed"],
    ratePerK: markup(115683), minOrder: 20, maxOrder: 11000,
    speed: "11K/Day", refill: "30 Hari", quality: "Random"
  },
  {
    id: 9075, platform: "youtube", type: "Comments",
    name: "YT Comments Custom | Max 5K | Refill 30D | 500/Day",
    tags: ["Custom","Refill 30D","Best Speed"],
    ratePerK: markup(115706), minOrder: 5, maxOrder: 10000,
    speed: "500/Day", refill: "30 Hari", quality: "Custom"
  },
  {
    id: 9074, platform: "youtube", type: "Comments",
    name: "YT Comments Custom | Max 200K | Refill 30D | 20K/Day",
    tags: ["Custom","Refill 30D","Best Speed"],
    ratePerK: markup(138324), minOrder: 5, maxOrder: 1000000,
    speed: "20K/Day", refill: "30 Hari", quality: "Custom"
  },
  {
    id: 9072, platform: "youtube", type: "Comments",
    name: "YT Comments Custom | Max 10K | Refill 30D | 10K/Day",
    tags: ["Custom","Refill 30D","Best Speed"],
    ratePerK: markup(165260), minOrder: 1, maxOrder: 10000,
    speed: "10K/Day", refill: "30 Hari", quality: "Custom"
  },
  {
    id: 9076, platform: "youtube", type: "Comments",
    name: "YT Comments Custom | Max 100K | Refill 30D | 5K/Day",
    tags: ["Custom","Refill 30D","Best Speed"],
    ratePerK: markup(170330), minOrder: 10, maxOrder: 100000,
    speed: "5K/Day", refill: "30 Hari", quality: "Custom"
  },
  {
    id: 9077, platform: "youtube", type: "Comments",
    name: "YT Comments Custom | Max 200K | Refill 30D | 20K/Day USA HQ",
    tags: ["Custom","Refill 30D","USA HQ"],
    ratePerK: markup(170330), minOrder: 10, maxOrder: 100000,
    speed: "20K/Day", refill: "30 Hari", quality: "USA HQ"
  },

  // ─────────────────────────────────────────────
  // YOUTUBE SHARES
  // ─────────────────────────────────────────────
  {
    id: 9743, platform: "youtube", type: "Shares",
    name: "YT Shares Mixed | Max 100K | No Refill | 10K/Day",
    tags: ["Mixed","No Refill","Instant"],
    ratePerK: markup(5510), minOrder: 100, maxOrder: 100000,
    speed: "10K/Day", refill: "Tidak Ada", quality: "Mixed"
  },
  {
    id: 9049, platform: "youtube", type: "Shares",
    name: "YT Shares Facebook | Max 500M | Refill Lifetime | 100K/Day",
    tags: ["Facebook","Refill Lifetime","Instant"],
    ratePerK: markup(6612), minOrder: 100, maxOrder: 100000,
    speed: "100K/Day", refill: "Seumur Hidup", quality: "Facebook"
  },
  {
    id: 9050, platform: "youtube", type: "Shares",
    name: "YT Shares Twitter | Max 500M | Refill Lifetime | 100K/Day",
    tags: ["Twitter","Refill Lifetime","Instant"],
    ratePerK: markup(6612), minOrder: 100, maxOrder: 100000,
    speed: "100K/Day", refill: "Seumur Hidup", quality: "Twitter"
  },
  {
    id: 9051, platform: "youtube", type: "Shares",
    name: "YT Shares Reddit | Max 500M | Refill Lifetime | 100K/Day",
    tags: ["Reddit","Refill Lifetime","Instant"],
    ratePerK: markup(6612), minOrder: 100, maxOrder: 100000,
    speed: "100K/Day", refill: "Seumur Hidup", quality: "Reddit"
  },
  {
    id: 9054, platform: "youtube", type: "Shares",
    name: "YT Shares Mixed | Max 5M | Refill Lifetime | 50K/Day",
    tags: ["Mixed","Refill Lifetime","Instant"],
    ratePerK: markup(6612), minOrder: 100, maxOrder: 100000,
    speed: "50K/Day", refill: "Seumur Hidup", quality: "Mixed"
  },
  {
    id: 9055, platform: "youtube", type: "Shares",
    name: "YT Shares Facebook | Max 100K | Refill Lifetime | 10K/Day",
    tags: ["Facebook","Refill Lifetime","Instant"],
    ratePerK: markup(10241), minOrder: 50, maxOrder: 500000000,
    speed: "10K/Day", refill: "Seumur Hidup", quality: "Facebook"
  },
  {
    id: 9056, platform: "youtube", type: "Shares",
    name: "YT Shares Twitter | Max 100K | Refill Lifetime | 10K/Day",
    tags: ["Twitter","Refill Lifetime","Instant"],
    ratePerK: markup(10241), minOrder: 50, maxOrder: 500000000,
    speed: "10K/Day", refill: "Seumur Hidup", quality: "Twitter"
  },
  {
    id: 9057, platform: "youtube", type: "Shares",
    name: "YT Shares Reddit | Max 100K | Refill Lifetime | 10K/Day",
    tags: ["Reddit","Refill Lifetime","Instant"],
    ratePerK: markup(10241), minOrder: 50, maxOrder: 500000000,
    speed: "10K/Day", refill: "Seumur Hidup", quality: "Reddit"
  },
];

// Group services by platform > type
function getTypes(platform) {
  return [...new Set(SERVICES.filter(s => s.platform === platform).map(s => s.type))];
}

function getServices(platform, type) {
  return SERVICES.filter(s => s.platform === platform && s.type === type);
}

// Price calculator
function calcPrice(ratePerK, qty) {
  return Math.ceil((ratePerK / 1000) * qty);
}

// WA message builder
function buildWAMessage(service, qty) {
  const total = calcPrice(service.ratePerK, qty);
  const msg = `Halo DITZ Store, saya ingin memesan:\n\n` +
    `*Layanan:* ${service.name}\n` +
    `*ID Layanan:* ${service.id}\n` +
    `*Jumlah:* ${qty.toLocaleString('id-ID')}\n` +
    `*Total Harga:* Rp ${total.toLocaleString('id-ID')}\n\n` +
    `Mohon info lebih lanjut. Terima kasih!`;
  // Sanitize: remove spaces/dashes, handle leading 0 → 62
  let num = WHATSAPP_NUMBER.replace(/[\s\-]/g, '');
  if (num.startsWith('0')) num = '62' + num.slice(1);
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}