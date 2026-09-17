# DYNAMO Build 3

Build 3 adds interactive front-end foundations for the core operational modules:

- Rota: filter shifts, add a shift, assign an open shift.
- Staff: searchable staff directory and compliance status.
- Incidents: incident submission workflow foundation.
- Policies: policy list and acknowledgement interaction.
- EEAST: operational KPI workspace with clear demonstration-data labelling.
- Reports: management-report workspace.

These screens are intentionally not connected to live MES data yet. The next implementation should connect them to Supabase server actions/API routes, validate every input with Zod, write audit events, and enforce permissions server-side.
