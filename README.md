# DYNAMO — MES Operational Management Platform

This repository is the first executable foundation of DYNAMO for Medical Emergency Solutions.

## Included
- Next.js + TypeScript application shell
- MES-branded navigation structure
- Responsive operations dashboard
- Login entry point
- Health endpoint at `/api/health`
- Supabase server-client and middleware foundation
- PostgreSQL schema for staff, rota, assignments, incidents and audit logs
- Initial role-based Row Level Security policies

## Setup
1. Copy `.env.example` to `.env.local`.
2. Create a Supabase project.
3. Add the public Supabase URL and anon key.
4. Run `database/migrations/001_initial_schema.sql` in Supabase.
5. Run `npm install` then `npm run dev`.

## Important
The dashboard currently contains non-production placeholder metrics. No invented staff identities are included. EEAST shift templates, pay rates, KPI targets and clinical requirements should be loaded as configurable records and verified before production use.

Do not put the Supabase service-role key into browser/client code.
Before live patient, safeguarding, payroll, controlled-drug or staff data is introduced, complete access-control review, data-protection review, backup/recovery testing, penetration/security testing, audit-log validation and operational sign-off.
