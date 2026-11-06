// Site copy for Revora. A proposed startup concept: fictional team, illustrative pricing.
const site = {
  "name": "Revora",
  "tagline": "Find revenue gaps. Make every collection count.",
  "categories": [
    "AI",
    "GovTech",
    "Revenue Intelligence"
  ],
  "about": "Revora helps revenue teams connect assessments, payments, and settlements in one workspace. Its AI highlights discrepancies and gives officers the evidence needed to resolve them.",
  "logoSvg": "<rect width=\"32\" height=\"32\" rx=\"9\" fill=\"#0b2a2a\"/><path d=\"M9 23V9h7.5a4.5 4.5 0 0 1 0 9H13\" fill=\"none\" stroke=\"#f2c14e\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m16 18 6 5\" stroke=\"#5fd3b5\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>",
  "words": {
    "records": "discrepancies",
    "decider": "authorised revenue officers",
    "sources": "assessments, receipts and bank settlements",
    "model": "Entity matching links inconsistent taxpayer records; anomaly models score reconciliation gaps and explain the contributing evidence."
  },
  "hero": {
    "eyebrow": "Revenue intelligence for public collection",
    "before": "See where assessed revenue becomes ",
    "em": "missing revenue",
    "after": ".",
    "points": [
      "Assessments, receipts and settlements in one view",
      "Every discrepancy linked to its evidence",
      "Officers decide; every decision is audited"
    ],
    "floatTitle": "₦4.2m gap traced",
    "floatText": "Receipt issued, no matching settlement"
  },
  "problem": {
    "title": "Revenue records live in too many places to reconcile by hand.",
    "text": "Assessments sit in one system, payments arrive through banks, PoS agents and collection firms, and settlements land days later in another file. When the numbers do not agree, officers piece the story together from spreadsheets and phone calls.",
    "fragments": [
      "The same taxpayer appears under three spellings and two IDs",
      "A receipt is issued but the bank settlement never arrives",
      "An agent remits less than the receipts they issued",
      "A business is assessed twice by two revenue lines"
    ]
  },
  "solution": {
    "title": "One reconciliation workspace, with the evidence attached.",
    "text": "Revora matches assessments to receipts to settlements, resolves the same taxpayer across systems and flags what does not add up. Each flag shows why it was raised and how confident the model is.",
    "capabilities": [
      {
        "title": "Entity matching",
        "text": "Links taxpayer records with inconsistent names, phone numbers and IDs, and shows the fields that matched.",
        "demoLabel": "Records linked",
        "demoValue": "3 → 1 taxpayer"
      },
      {
        "title": "Three-way reconciliation",
        "text": "Lines up what was assessed, what was receipted and what actually settled into the account.",
        "demoLabel": "Unsettled receipts",
        "demoValue": "₦4.2m · 17 days"
      },
      {
        "title": "Anomaly detection",
        "text": "Spots unusual remittance patterns by agent, channel or location, ranked for review.",
        "demoLabel": "Agent shortfall",
        "demoValue": "−18% vs receipts"
      }
    ]
  },
  "stepsTitle": "From scattered files to resolved discrepancies.",
  "steps": [
    [
      "Connect",
      "Load assessment registers, receipt exports and bank settlement statements, or connect by API."
    ],
    [
      "Match",
      "Revora resolves taxpayers across systems and reconciles each assessment to its payments."
    ],
    [
      "Flag",
      "Discrepancies are scored, explained and ranked by value and confidence."
    ],
    [
      "Resolve",
      "Officers investigate, record the outcome and a reason, and the audit trail builds itself."
    ]
  ],
  "audiencesTitle": "Built for the teams responsible for public revenue.",
  "audiences": [
    {
      "title": "State internal revenue services",
      "text": "Reconcile PAYE, direct assessment and levies across channels and banks.",
      "outcome": "Fewer unexplained gaps"
    },
    {
      "title": "Local government revenue departments",
      "text": "Track rates, permits and levies collected by agents and offices.",
      "outcome": "Agent remittances checked"
    },
    {
      "title": "State market management authorities",
      "text": "Match stall assessments and ticket sales to what reaches the account.",
      "outcome": "Market collections traced"
    },
    {
      "title": "Revenue collection firms",
      "text": "Show clients clean, evidenced reconciliations of everything collected.",
      "outcome": "Reports clients trust"
    }
  ],
  "publicSector": {
    "title": "Investigate collection gaps with evidence, not suspicion.",
    "text": "Revora helps revenue agencies find where money goes missing between assessment and account, and documents how each gap was investigated and resolved.",
    "points": [
      "Traceable evidence for every flagged discrepancy",
      "Human review before any enforcement step",
      "Exportable audit logs for internal audit and oversight bodies",
      "Taxpayer data kept within agreed hosting arrangements"
    ]
  },
  "ai": {
    "title": "The model finds the gap. An officer decides what it means.",
    "intro": "A discrepancy can be a data-entry error, a delayed settlement or something more serious. Revora is built so the model never makes that call.",
    "does": [
      "Links records that likely belong to the same taxpayer",
      "Reconciles assessments, receipts and settlements",
      "Ranks discrepancies by value, age and confidence",
      "Shows the evidence and data gaps behind each flag"
    ],
    "never": [
      "Accuses a taxpayer, agent or officer of wrongdoing",
      "Triggers enforcement, penalties or account freezes",
      "Changes assessment or payment records",
      "Hides how a score was produced"
    ]
  },
  "pricing": {
    "model": "Annual licence based on revenue volume, with additional reconciliation and analytics modules.",
    "tiers": [
      {
        "name": "Local",
        "summary": "For a local government or market authority.",
        "price": "₦18m",
        "unit": "/ year",
        "features": [
          "Up to ₦5bn annual collections",
          "Three-way reconciliation",
          "Entity matching",
          "10 officer seats"
        ],
        "cta": "Request a pilot"
      },
      {
        "name": "State",
        "summary": "For a state revenue service.",
        "price": "₦65m",
        "unit": "/ year",
        "features": [
          "Up to ₦150bn annual collections",
          "Everything in Local",
          "Agent and channel analytics",
          "Unlimited officer seats",
          "Audit exports for oversight bodies"
        ],
        "cta": "Request a pilot",
        "featured": true
      },
      {
        "name": "Enterprise",
        "summary": "For multi-agency programmes and collection firms.",
        "price": "Custom",
        "unit": "",
        "features": [
          "Any collection volume",
          "Bank and PoS API integrations",
          "Dedicated hosting options",
          "Analytics modules"
        ],
        "cta": "Talk to us"
      }
    ]
  },
  "team": [
    {
      "name": "Folasade Akinrinde",
      "role": "Founder/CEO",
      "initials": "FA",
      "bio": "Public finance operations specialist with experience in revenue reconciliation.",
      "focus": [
        "Public finance",
        "Reconciliation",
        "Agency partnerships"
      ]
    },
    {
      "name": "Chukwudi Nwafor",
      "role": "Co-founder",
      "initials": "CN",
      "bio": "Enterprise product manager focused on payment integrations.",
      "focus": [
        "Product",
        "Payment integrations",
        "Banks & PoS"
      ]
    },
    {
      "name": "Bashir Danjuma",
      "role": "CTO",
      "initials": "BD",
      "bio": "ML engineer specialising in entity resolution and financial anomaly detection.",
      "focus": [
        "Entity resolution",
        "Anomaly detection",
        "Platform"
      ]
    }
  ],
  "faq": [
    [
      "Which systems can Revora read from?",
      "Assessment registers, receipt and e-payment exports, PoS agent reports and bank settlement statements, as files or through APIs. A pilot usually starts with exported files."
    ],
    [
      "Does a flag mean someone did something wrong?",
      "No. Most discrepancies have ordinary explanations: late settlements, typing errors or duplicate records. A flag is a reason to look, with the evidence attached."
    ],
    [
      "How long does a pilot take?",
      "A typical pilot reconciles six to twelve months of historical data for one revenue line over eight to ten weeks."
    ],
    [
      "Is Revora a live product?",
      "Not yet. Revora is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype runs on fictional data in your browser."
    ],
    [
      "Does the AI make decisions?",
      "No. Revora flags, ranks and explains. Authorised revenue officers review the evidence and record every decision with a reason."
    ],
    [
      "How would our data be protected?",
      "In production, data would be encrypted, isolated per customer, access-controlled by role and never used to train models for other customers. Data-sharing terms are agreed before any pilot."
    ]
  ],
  "purpose": {
    "eyebrow": "Why Revora exists",
    "manifesto": "Every naira assessed is a promise to a school, a road or a clinic. When it goes missing between the receipt and the account, nobody can say where. We think every collection should be traceable from assessment to settlement.",
    "purpose": "Make every public collection traceable, so revenue teams can find and close gaps with evidence.",
    "why": "Public revenue funds the services people rely on. Low collection is often blamed on taxpayers, but much is lost in reconciliation: records that do not match, settlements that never arrive and remittances nobody checked.",
    "stakesTitle": "Revenue that is assessed but never counted.",
    "stats": [
      {
        "value": 9.4,
        "dec": 1,
        "suffix": "%",
        "label": "Nigeria’s tax revenue as a share of GDP in 2023, among the lowest in the world.",
        "source": "IMF, reported by TheCable",
        "url": "https://thecable.ng/imf-at-9-4-in-2023-nigerias-tax-revenue-to-gdp-ratio-among-lowest-in-the-world"
      },
      {
        "value": 16,
        "dec": 1,
        "suffix": "%",
        "label": "Average tax-to-GDP ratio across 36 African countries in 2022.",
        "source": "OECD Revenue Statistics in Africa 2024",
        "url": "https://www.oecd.org/en/publications/revenue-statistics-in-africa-2024_78e9af3a-en/full-report/executive-summary_75dc5f62.html"
      },
      {
        "value": 34,
        "dec": 1,
        "suffix": "%",
        "label": "Average tax-to-GDP ratio across OECD countries, for comparison.",
        "source": "OECD Revenue Statistics in Africa 2024",
        "url": "https://www.oecd.org/en/publications/revenue-statistics-in-africa-2024_78e9af3a-en/full-report/executive-summary_75dc5f62.html"
      }
    ],
    "changeTitle": "From reconciling by spreadsheet to resolving with evidence.",
    "before": [
      "Exports from five systems pasted into one spreadsheet",
      "Taxpayers duplicated under different names",
      "Agent shortfalls found months later, if at all",
      "Investigations that live in someone’s inbox"
    ],
    "after": [
      "Assessments, receipts and settlements matched automatically",
      "One record per taxpayer, with the matching shown",
      "Shortfalls flagged within days, ranked by value",
      "Every investigation and outcome on the record"
    ],
    "principlesTitle": "What we believe about revenue technology.",
    "principles": [
      [
        "Evidence before action",
        "No flag should lead anywhere without the records behind it on screen."
      ],
      [
        "Errors are not accusations",
        "Most gaps are mistakes. Our language and design treat them that way."
      ],
      [
        "Officers stay accountable",
        "The person who decides is named, and records why."
      ],
      [
        "Traceable by default",
        "Every match, score and decision can be followed back to its source."
      ],
      [
        "Fit the systems agencies have",
        "Start from exported files; integrate when it is worth it."
      ],
      [
        "Public money, public trust",
        "Taxpayer data is handled under strict, agreed controls."
      ]
    ],
    "letterTitle": "Why we are building Revora.",
    "letter": [
      "Folasade spent years reconciling collections by hand: matching receipts to bank statements line by line, chasing agents for remittances, and explaining gaps nobody could fully trace. The money was often there somewhere. The evidence was not.",
      "Chukwudi saw the same problem from the payments side, where every channel produced its own report and none agreed. Bashir had built models that could link messy records and spot unusual patterns, and knew how easily such models are over-trusted.",
      "Revora is our answer: a workspace that does the matching, shows its working, and leaves every judgement with the officer responsible. If it helps one agency close one gap with confidence, it has earned its place."
    ],
    "visionTitle": "Where Revora is going.",
    "visionIntro": "A staged path from a single revenue line to a full picture of collections.",
    "vision": [
      {
        "stage": "Now",
        "title": "Concept and prototype",
        "text": "An interactive prototype on fictional data, and conversations with revenue teams."
      },
      {
        "stage": "Next",
        "title": "First pilots",
        "text": "Reconciling historical data for one revenue line with two or three early partners."
      },
      {
        "stage": "Then",
        "title": "Live reconciliation",
        "text": "Daily matching across banks, PoS agents and collection firms."
      },
      {
        "stage": "Later",
        "title": "Collections intelligence",
        "text": "Forecasts and channel analytics that help agencies plan, not just reconcile."
      }
    ],
    "statsNote": "Figures are published estimates from the sources linked; they describe the wider problem, not results from this product."
  },
  "app": {
    "title": "Reconciliation review",
    "subtitle": "Discrepancies between assessments, receipts and bank settlements, ranked for officer review.",
    "itemNoun": "discrepancy",
    "itemNounPlural": "discrepancies",
    "groupLabel": "revenue line",
    "queueTitle": "Discrepancy queue",
    "humanNote": "Flags are leads for review, not findings. Officers decide.",
    "decisions": {
      "confirm": "Confirm gap",
      "dismiss": "Explained — close",
      "escalate": "Escalate to audit"
    },
    "roles": [
      {
        "id": "lead",
        "label": "Head of Reconciliation",
        "can": [
          "view",
          "note",
          "assign",
          "decide",
          "escalate",
          "export"
        ]
      },
      {
        "id": "reviewer",
        "label": "Revenue Officer",
        "can": [
          "view",
          "note",
          "assign",
          "decide"
        ]
      },
      {
        "id": "analyst",
        "label": "Data Analyst",
        "can": [
          "view",
          "note",
          "escalate"
        ]
      },
      {
        "id": "auditor",
        "label": "Internal Auditor",
        "can": [
          "view",
          "export"
        ]
      }
    ],
    "examples": [
      "Which discrepancies need review first?",
      "Summarise the review status",
      "Show Market levies",
      "Explain REV-104"
    ],
    "refuse": "\\b(penal|sanction|prosecut|arrest|freez|fraud|guilt|blacklist|suspend|sack)",
    "refuseText": "Revora can show the evidence for a discrepancy, but deciding penalties, enforcement or whether anyone acted dishonestly belongs to authorised officers and due process.",
    "refuseExamples": [
      "Should we penalise this taxpayer?",
      "Is agent AG-22 a fraudster?",
      "Freeze the account for REV-101"
    ]
  },
  "slug": "revora",
  "url": "https://www.revora.com",
  "email": "hello@revora.com",
  "stepsNote": "Revora recommends and ranks. Every outcome is recorded by a named person, with a reason, in an audit log.",
  "safeguards": [
    [
      "People decide",
      "Every discrepancy is confirmed, dismissed or escalated by authorised revenue officers, never by the model."
    ],
    [
      "Evidence first",
      "Each flag links to the assessments, receipts and bank settlements behind it, so a reviewer can check the reasoning before acting."
    ],
    [
      "Confidence shown",
      "Scores come with a confidence level and the data gaps that lower it, so weak signals are not mistaken for facts."
    ],
    [
      "Role-based access",
      "Permissions are set per role: who can view, comment, assign, decide, escalate or export."
    ],
    [
      "Complete audit trail",
      "Assignments, notes and decisions are time-stamped with the person and reason, and can be exported."
    ],
    [
      "Your data stays yours",
      "Customer data is isolated per tenant, encrypted at rest and in transit, and never used to train models for other customers."
    ]
  ],
  "architectureIntro": "How Revora would run in production: ingestion of assessments, receipts and bank settlements, models that score and explain, and a review workspace with a full audit trail.",
  "architecture": [
    [
      "Ingest",
      "Amazon S3 · AWS Transfer Family · API Gateway",
      "Secure upload and API connections for assessments, receipts and bank settlements."
    ],
    [
      "Prepare",
      "AWS Glue · AWS Step Functions",
      "Validation, cleaning and matching of records, with data-quality checks logged."
    ],
    [
      "Model",
      "Amazon SageMaker",
      "Entity matching links inconsistent taxpayer records; anomaly models score reconciliation gaps and explain the contributing evidence."
    ],
    [
      "Store",
      "Amazon Aurora PostgreSQL",
      "Records, scores, evidence links and decisions in a tenant-isolated database."
    ],
    [
      "Review",
      "AWS Amplify · Amazon CloudFront · Amazon Cognito",
      "The web workspace, with single sign-on and role-based permissions."
    ],
    [
      "Govern",
      "AWS CloudTrail · AWS KMS · Amazon CloudWatch",
      "Encryption keys per tenant, access logging and monitoring of model behaviour."
    ]
  ],
  "early": {
    "title": "Pilot Revora with your own team.",
    "text": "We are looking for a small number of early partners to shape Revora. A pilot starts with a sample of your historical data and a fixed review period, so you can judge the results before committing.",
    "steps": [
      "Tell us about your team and the records you work with.",
      "A founder replies personally to arrange a short call.",
      "We agree a pilot scope, data-sharing terms and how success will be measured."
    ]
  }
};
export default site;
