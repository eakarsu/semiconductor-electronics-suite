export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['lots', 'Lots Records', 'Lots priority queue', 'Open', 'Lots exception list', 'Manufacturing Lead', '$0'],
  ['wafers', 'Wafers Records', 'Wafers priority queue', 'Review', 'Wafers exception list', 'Manufacturing Lead', '$0'],
  ['recipes', 'Recipes Records', 'Recipes priority queue', 'Action needed', 'Recipes exception list', 'Manufacturing Lead', '$0'],
  ['equipment', 'Equipment Records', 'Equipment priority queue', 'Open', 'Equipment exception list', 'Manufacturing Lead', '$0'],
  ['yield', 'Yield Records', 'Yield priority queue', 'Review', 'Yield exception list', 'Operations Lead', '$0'],
  ['defects', 'Defects Records', 'Defects priority queue', 'Action needed', 'Defects exception list', 'Operations Lead', '$0'],
  ['maintenance', 'Maintenance Records', 'Maintenance priority queue', 'Open', 'Maintenance exception list', 'Operations Lead', '$0'],
  ['suppliers', 'Suppliers Records', 'Suppliers priority queue', 'Review', 'Suppliers exception list', 'Operations Lead', '$0'],
  ['quality', 'Quality Records', 'Quality priority queue', 'Action needed', 'Quality exception list', 'Governance Lead', '$0'],
  ['change-control', 'Change Control Records', 'Change Control priority queue', 'Open', 'Change Control exception list', 'Governance Lead', '$0'],
  ['capacity', 'Capacity Records', 'Capacity priority queue', 'Review', 'Capacity exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
