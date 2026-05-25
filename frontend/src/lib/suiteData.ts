export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AISemiconductorProcessOptimizer', ownership: 'Lots source capabilities and workflows', coverage: ['Lots', 'Wafers', 'Recipes'] },
  { name: 'AIYieldAnalysis', ownership: 'Wafers source capabilities and workflows', coverage: ['Equipment', 'Yield', 'Defects'] },
  { name: 'AIElectronicsQualityInspector', ownership: 'Recipes source capabilities and workflows', coverage: ['Maintenance', 'Suppliers', 'Quality'] },
  { name: 'AIFabMaintenancePlanner', ownership: 'Equipment source capabilities and workflows', coverage: ['Change Control', 'Capacity', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Lots', value: '84', note: 'Active' },
  { label: 'Wafers', value: '61', note: 'Open' },
  { label: 'Recipes', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Lots operating view', 'Wafers operating view', 'Recipes operating view', 'Equipment operating view', 'Yield operating view', 'Defects operating view', 'Maintenance operating view', 'Suppliers operating view'];
export const workflowHighlights = ['Lots workflow with records, approvals, audit, and reporting', 'Wafers workflow with records, approvals, audit, and reporting', 'Recipes workflow with records, approvals, audit, and reporting', 'Equipment workflow with records, approvals, audit, and reporting', 'Yield workflow with records, approvals, audit, and reporting'];
