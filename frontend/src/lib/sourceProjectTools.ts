export const sourceProjectTools = [
  {
    "id": "ai-semiconductor-fab-yield-optimizer-source-workflow",
    "title": "AI Semiconductor Fab Yield Optimizer Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AISemiconductorFabYieldOptimizer.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AISemiconductorFabYieldOptimizer to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Semiconductor Fab Yield Optimizer source context",
    "outputLabel": "AI Semiconductor Fab Yield Optimizer source analysis",
    "signals": [
      "frontend/src/pages/CfEquipmentPredictiveMaintenance",
      "frontend/src/pages/GapNoReciperecommendationAi",
      "frontend/src/pages/GapNoRootcauseanalysisAiOnlyManualRecords",
      "frontend/src/pages/MaintenanceSchedulesPage",
      "frontend/src/components/AIResultDisplay",
      "frontend/src/components/DetailModal",
      "backend/routes/ai-yield-prediction",
      "backend/routes/aiHelper"
    ]
  },
  {
    "id": "ai-semiconductor-fab-yield-optimizer-ai-tools",
    "title": "AI Semiconductor Fab Yield Optimizer AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AISemiconductorFabYieldOptimizer.",
    "defaultPrompt": "Review AISemiconductorFabYieldOptimizer AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Semiconductor Fab Yield Optimizer AI prompt or tool context",
    "outputLabel": "AI Semiconductor Fab Yield Optimizer AI tool response",
    "signals": [
      "frontend/src/pages/CfEquipmentPredictiveMaintenance.jsx",
      "frontend/src/pages/GapNoReciperecommendationAi.jsx",
      "frontend/src/pages/GapNoRootcauseanalysisAiOnlyManualRecords.jsx",
      "frontend/src/pages/MaintenanceSchedulesPage.js",
      "frontend/src/components/AIResultDisplay.js",
      "frontend/src/components/DetailModal.js",
      "backend/routes/ai-yield-prediction.js",
      "backend/routes/aiHelper.js"
    ]
  },
  {
    "id": "ai-semiconductor-fab-yield-optimizer-gap-no-reciperecommendation-ai-1h35eh-exact-ai",
    "title": "AI Semiconductor Fab Yield Optimizer: Gap No Reciperecommendation AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoReciperecommendationAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Reciperecommendation AI\" from AISemiconductorFabYieldOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Reciperecommendation AI donor inputs",
    "outputLabel": "Gap No Reciperecommendation AI AI response",
    "signals": [
      "frontend/src/pages/GapNoReciperecommendationAi.jsx"
    ]
  },
  {
    "id": "ai-semiconductor-fab-yield-optimizer-gap-no-rootcauseanalysis-ai-only-manual-records-1t22hb-exact-ai",
    "title": "AI Semiconductor Fab Yield Optimizer: Gap No Rootcauseanalysis AI Only Manual Records",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoRootcauseanalysisAiOnlyManualRecords.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Rootcauseanalysis AI Only Manual Records\" from AISemiconductorFabYieldOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Rootcauseanalysis AI Only Manual Records donor inputs",
    "outputLabel": "Gap No Rootcauseanalysis AI Only Manual Records AI response",
    "signals": [
      "frontend/src/pages/GapNoRootcauseanalysisAiOnlyManualRecords.jsx"
    ]
  },
  {
    "id": "ai-semiconductor-fab-yield-optimizer-ai-yield-prediction-7gtbcs-exact-ai",
    "title": "AI Semiconductor Fab Yield Optimizer: AI Yield Prediction",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai-yield-prediction.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Yield Prediction\" from AISemiconductorFabYieldOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Yield Prediction donor inputs",
    "outputLabel": "AI Yield Prediction AI response",
    "signals": [
      "backend/routes/ai-yield-prediction.js"
    ]
  },
  {
    "id": "ai-semiconductor-fab-yield-optimizer-gap-no-reciperecommendation-ai-nogyr3-exact-ai",
    "title": "AI Semiconductor Fab Yield Optimizer: Gap No Reciperecommendation AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-no-reciperecommendation-ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Reciperecommendation AI\" from AISemiconductorFabYieldOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Reciperecommendation AI donor inputs",
    "outputLabel": "Gap No Reciperecommendation AI AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-semiconductor-fab-yield-optimizer-gap-no-rootcauseanalysis-ai-only-manual-records-1s77da-exact-ai",
    "title": "AI Semiconductor Fab Yield Optimizer: Gap No Rootcauseanalysis AI Only Manual Records",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-no-rootcauseanalysis-ai-only-manual-records.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Rootcauseanalysis AI Only Manual Records\" from AISemiconductorFabYieldOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Rootcauseanalysis AI Only Manual Records donor inputs",
    "outputLabel": "Gap No Rootcauseanalysis AI Only Manual Records AI response",
    "signals": [
      "Input"
    ]
  }
];
