# Semiconductor Electronics Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AISemiconductorProcessOptimizer`
- `AIYieldAnalysis`
- `AIElectronicsQualityInspector`
- `AIFabMaintenancePlanner`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/semiconductor-electronics-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4680`

Seeded users:
- `admin@semiconductor-electronics.local / admin123`
- `manager@semiconductor-electronics.local / manager123`
- `analyst@semiconductor-electronics.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/semiconductor-electronics-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4680 npm run smoke
```
