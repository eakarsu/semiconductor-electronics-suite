import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Semiconductor Fab Yield Optimizer Source Feature",
    "href": "/features/source-ai-semiconductor-fab-yield-optimizer",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AISemiconductorFabYieldOptimizer: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "11 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Semiconductor Fab Yield Optimizer Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-semiconductor-fab-yield-optimizer": {
    "title": "AI Semiconductor Fab Yield Optimizer Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AISemiconductorFabYieldOptimizer, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AISemiconductorFabYieldOptimizer: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "11 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "11",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Semiconductor Fab Yield Optimizer Source Feature": {
    "sourceOwners": [
      "AISemiconductorFabYieldOptimizer"
    ],
    "operatingQueues": [
      "Cf Equipment Predictive Maintenance",
      "Gap No Reciperecommendation AI",
      "Gap No Rootcauseanalysis AI Only Manual Records",
      "Maintenance Schedules Page"
    ],
    "outputs": [
      "AI Semiconductor Fab Yield Optimizer merged workflow register",
      "AI Semiconductor Fab Yield Optimizer API and route coverage map",
      "AI Semiconductor Fab Yield Optimizer AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-semiconductor-fab-yield-optimizer": {
    "workItems": [
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-work-1",
        "item": "Cf Equipment Predictive Maintenance",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/CfEquipmentPredictiveMaintenance.jsx"
      },
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-work-2",
        "item": "Gap No Reciperecommendation AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapNoReciperecommendationAi.jsx"
      },
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-work-3",
        "item": "Gap No Rootcauseanalysis AI Only Manual Records",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapNoRootcauseanalysisAiOnlyManualRecords.jsx"
      },
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-work-4",
        "item": "Maintenance Schedules Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/MaintenanceSchedulesPage.js"
      },
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-work-5",
        "item": "AI Result Display",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/components/AIResultDisplay.js"
      },
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-work-6",
        "item": "Detail Modal",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/components/DetailModal.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-log-1",
        "message": "Deep-merge feature generated from AISemiconductorFabYieldOptimizer",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-semiconductor-fab-yield-optimizer": {
    "title": "AI Semiconductor Fab Yield Optimizer Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-entity-1",
        "name": "Cf Equipment Predictive Maintenance",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-entity-2",
        "name": "Gap No Reciperecommendation AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-entity-3",
        "name": "Gap No Rootcauseanalysis AI Only Manual Records",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-entity-4",
        "name": "Maintenance Schedules Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-semiconductor-fab-yield-optimizer-entity-5",
        "name": "AI Result Display",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "AISemiconductorFabYieldOptimizer": "/features/source-ai-semiconductor-fab-yield-optimizer"
};
