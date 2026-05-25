export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AISemiconductorFabYieldOptimizer"
    ],
    "examples": [
      "backend/routes/ai-yield-prediction",
      "backend/routes/aiHelper",
      "backend/routes/gap-no-reciperecommendation-ai",
      "backend/routes/gap-no-rootcauseanalysis-ai-only-manual-records",
      "backend/routes/maintenanceSchedules",
      "frontend/src/components/AIResultDisplay"
    ],
    "count": 1
  }
];
