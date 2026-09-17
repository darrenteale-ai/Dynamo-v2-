# DYNAMO Build 4 — Connected Data Layer

Adds the first live Supabase data-access endpoints and completes policy/version/acknowledgement schema.

Apply `database/migrations/002_workflows.sql` after the previous DYNAMO migrations. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`.

Do not expose a Supabase service-role key to browser code. Before live MES data is imported, complete security testing, RLS review, data-protection review, retention configuration, backups and recovery testing.
