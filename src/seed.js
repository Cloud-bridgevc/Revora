// Fictional sample data for the Revora prototype. Any resemblance to real records is coincidental.
export const seed = {
  "team": [
    {
      "name": "Adaeze Okonkwo",
      "role": "Head of Reconciliation"
    },
    {
      "name": "Yakubu Mohammed",
      "role": "Revenue Officer"
    },
    {
      "name": "Funmi Adeyemi",
      "role": "Revenue Officer"
    },
    {
      "name": "Tobi Eze",
      "role": "Data Analyst"
    },
    {
      "name": "Hadiza Bello",
      "role": "Internal Auditor"
    }
  ],
  "items": [
    {
      "id": "REV-101",
      "title": "Receipts without settlement — Agent AG-22",
      "subtitle": "Market tickets receipted but not settled to the collection account",
      "group": "Market levies",
      "metrics": [
        [
          "Receipted",
          "₦4,215,000"
        ],
        [
          "Settled",
          "₦0"
        ],
        [
          "Days outstanding",
          "17"
        ],
        [
          "Receipts",
          "842"
        ]
      ],
      "flags": [
        {
          "label": "Unsettled receipts",
          "severity": "high",
          "confidence": 0.91,
          "explanation": "842 receipts issued by AG-22 between 2–14 March have no matching bank settlement. The agent’s previous settlements arrived within 3 days.",
          "evidence": [
            [
              "Receipts issued",
              "842 · ₦4.215m",
              "PoS export 14-Mar"
            ],
            [
              "Matching settlements",
              "None found",
              "Bank statement Mar"
            ],
            [
              "Typical settlement lag",
              "2.6 days",
              "AG-22 history (6 months)"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "REV-102",
      "title": "Possible duplicate assessment — Lekki Bakeries Ltd",
      "subtitle": "Same business assessed under PAYE and direct assessment",
      "group": "Direct assessment",
      "metrics": [
        [
          "Assessed (DA)",
          "₦1,840,000"
        ],
        [
          "Assessed (PAYE)",
          "₦1,840,000"
        ],
        [
          "Match score",
          "0.94"
        ],
        [
          "Tax year",
          "2025"
        ]
      ],
      "flags": [
        {
          "label": "Duplicate assessment",
          "severity": "medium",
          "confidence": 0.84,
          "explanation": "Two assessments for identical amounts share an address, phone number and director name. Names differ: “Lekki Bakeries Ltd” and “Leki Bakery Limited”.",
          "evidence": [
            [
              "Address",
              "Exact match",
              "Assessment register"
            ],
            [
              "Phone",
              "Exact match",
              "Taxpayer registry"
            ],
            [
              "Name similarity",
              "0.88",
              "Entity matcher"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "REV-103",
      "title": "Short remittance — Collection firm C-07",
      "subtitle": "Remitted amount below receipts issued for February",
      "group": "Land use charge",
      "metrics": [
        [
          "Receipts issued",
          "₦38.6m"
        ],
        [
          "Remitted",
          "₦31.7m"
        ],
        [
          "Shortfall",
          "₦6.9m (18%)"
        ],
        [
          "Commission due",
          "₦2.3m"
        ]
      ],
      "flags": [
        {
          "label": "Remittance shortfall",
          "severity": "high",
          "confidence": 0.78,
          "explanation": "After the agreed 6% commission, remittance is ₦4.6m lower than expected. Two earlier months showed smaller shortfalls later corrected.",
          "evidence": [
            [
              "Receipts",
              "₦38.6m",
              "C-07 receipt file Feb"
            ],
            [
              "Remittance",
              "₦31.7m",
              "Bank statement Feb"
            ],
            [
              "Contract commission",
              "6%",
              "Collection agreement"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "REV-104",
      "title": "Settlement without assessment — Unknown payer",
      "subtitle": "Bank credit with a reference that matches no assessment",
      "group": "PAYE",
      "metrics": [
        [
          "Amount",
          "₦612,400"
        ],
        [
          "Bank reference",
          "PAYE/0325/88A"
        ],
        [
          "Candidates",
          "2 taxpayers"
        ],
        [
          "Date",
          "21 Mar 2026"
        ]
      ],
      "flags": [
        {
          "label": "Unmatched settlement",
          "severity": "low",
          "confidence": 0.67,
          "explanation": "Payment reference resembles two employer IDs. The amount matches one employer’s typical monthly PAYE within 2%.",
          "evidence": [
            [
              "Reference pattern",
              "PAYE/0325/88A",
              "Bank statement"
            ],
            [
              "Closest employer",
              "EMP-0388 · 98% amount match",
              "PAYE history"
            ],
            [
              "Second candidate",
              "EMP-0883",
              "Taxpayer registry"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "REV-105",
      "title": "Taxpayer split across three records",
      "subtitle": "Olumide Stores appears under three IDs with partial payments",
      "group": "Direct assessment",
      "metrics": [
        [
          "Records",
          "3"
        ],
        [
          "Total assessed",
          "₦920,000"
        ],
        [
          "Total paid",
          "₦920,000"
        ],
        [
          "Shown as owing",
          "₦610,000"
        ]
      ],
      "flags": [
        {
          "label": "Fragmented taxpayer",
          "severity": "medium",
          "confidence": 0.88,
          "explanation": "Payments were recorded against two IDs while the assessment sits on a third, so the taxpayer appears to owe money they have paid.",
          "evidence": [
            [
              "Shared phone",
              "3 of 3 records",
              "Taxpayer registry"
            ],
            [
              "Shared address",
              "2 of 3 records",
              "Assessment register"
            ],
            [
              "Payments",
              "₦920k across 2 IDs",
              "Receipt export"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "REV-106",
      "title": "Unusual cash pattern — Motor licensing office 4",
      "subtitle": "Round-number receipts concentrated at end of day",
      "group": "Motor licensing",
      "metrics": [
        [
          "Receipts reviewed",
          "1,204"
        ],
        [
          "Round-number share",
          "41%"
        ],
        [
          "Office average",
          "12%"
        ],
        [
          "Period",
          "Mar 2026"
        ]
      ],
      "flags": [
        {
          "label": "Unusual pattern",
          "severity": "medium",
          "confidence": 0.61,
          "explanation": "A high share of round-number receipts after 4pm is unusual for this office. This may reflect a fee change or batch entry; it needs context before conclusions.",
          "evidence": [
            [
              "After-4pm round receipts",
              "41%",
              "Receipt export"
            ],
            [
              "Other offices",
              "9–14%",
              "Receipt export"
            ],
            [
              "Fee schedule change",
              "None recorded",
              "Fee register"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "REV-107",
      "title": "Late settlement — Bank partner B",
      "subtitle": "Settlements arriving 9 days after collection on average",
      "group": "PAYE",
      "metrics": [
        [
          "Average lag",
          "9.1 days"
        ],
        [
          "Agreed lag",
          "T+2"
        ],
        [
          "Value delayed",
          "₦122m"
        ],
        [
          "Transactions",
          "3,410"
        ]
      ],
      "flags": [
        {
          "label": "Settlement delay",
          "severity": "low",
          "confidence": 0.83,
          "explanation": "Settlements from Bank partner B consistently exceed the T+2 agreement. Funds arrive in full, so this is a timing issue rather than a loss.",
          "evidence": [
            [
              "Average lag",
              "9.1 days",
              "Settlement file Mar"
            ],
            [
              "Agreement",
              "T+2",
              "Banking MoU"
            ],
            [
              "Shortfall",
              "None",
              "Three-way match"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "REV-108",
      "title": "Assessment reduced after receipt",
      "subtitle": "Assessment amended downward after payment was receipted",
      "group": "Land use charge",
      "metrics": [
        [
          "Original",
          "₦2,400,000"
        ],
        [
          "Amended",
          "₦1,200,000"
        ],
        [
          "Paid",
          "₦2,400,000"
        ],
        [
          "Amended by",
          "User 1142"
        ]
      ],
      "flags": [
        {
          "label": "Amendment after payment",
          "severity": "high",
          "confidence": 0.72,
          "explanation": "The assessment was halved two days after full payment was receipted, leaving ₦1.2m unallocated. An approved objection may explain it; none is linked.",
          "evidence": [
            [
              "Amendment log",
              "Changed 12-Mar",
              "Assessment audit log"
            ],
            [
              "Receipt",
              "₦2.4m on 10-Mar",
              "Receipt export"
            ],
            [
              "Objection record",
              "Not found",
              "Objections register"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "REV-109",
      "title": "Reconciled — Shop rates, Ward 6",
      "subtitle": "All assessments matched to settled payments",
      "group": "Market levies",
      "metrics": [
        [
          "Assessments",
          "318"
        ],
        [
          "Matched",
          "318"
        ],
        [
          "Variance",
          "₦0"
        ],
        [
          "Period",
          "Q1 2026"
        ]
      ],
      "flags": [],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    }
  ]
};
