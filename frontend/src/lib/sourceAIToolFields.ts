export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "ai-semiconductor-fab-yield-optimizer-gap-no-reciperecommendation-ai-1h35eh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Reciperecommendation AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoReciperecommendationAi.jsx"
    }
  ],
  "ai-semiconductor-fab-yield-optimizer-gap-no-rootcauseanalysis-ai-only-manual-records-1t22hb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Rootcauseanalysis AI Only Manual Records source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoRootcauseanalysisAiOnlyManualRecords.jsx"
    }
  ],
  "ai-semiconductor-fab-yield-optimizer-ai-yield-prediction-7gtbcs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Yield Prediction source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-yield-prediction.js"
    }
  ],
  "ai-semiconductor-fab-yield-optimizer-gap-no-reciperecommendation-ai-nogyr3-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-reciperecommendation-ai.js"
    }
  ],
  "ai-semiconductor-fab-yield-optimizer-gap-no-rootcauseanalysis-ai-only-manual-records-1s77da-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-rootcauseanalysis-ai-only-manual-records.js"
    }
  ],
  "ai-semiconductor-fab-yield-optimizer-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Reciperecommendation AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoReciperecommendationAi.jsx"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-reciperecommendation-ai.js"
    }
  ],
  "ai-semiconductor-fab-yield-optimizer-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Reciperecommendation AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoReciperecommendationAi.jsx"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-reciperecommendation-ai.js"
    }
  ]
};
