create table if not exists public.policies (
 id uuid primary key default gen_random_uuid(), title text not null, category text not null,
 current_version text not null, review_date date, mandatory boolean not null default false,
 status text not null default 'ACTIVE', owner_staff_id uuid references public.staff(id),
 created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.policy_versions (
 id uuid primary key default gen_random_uuid(), policy_id uuid not null references public.policies(id) on delete cascade,
 version text not null, document_path text, effective_date date, superseded_at timestamptz,
 created_at timestamptz not null default now(), unique(policy_id, version)
);
create table if not exists public.policy_acknowledgements (
 id uuid primary key default gen_random_uuid(), policy_id uuid not null references public.policies(id) on delete cascade,
 staff_id uuid not null references public.staff(id) on delete cascade, policy_version text not null,
 acknowledged_at timestamptz not null default now(), unique(policy_id, staff_id, policy_version)
);
create table if not exists public.shift_change_log (
 id bigint generated always as identity primary key, shift_id uuid not null references public.shifts(id) on delete cascade,
 actor_staff_id uuid references public.staff(id), action text not null, details jsonb not null default '{}'::jsonb,
 created_at timestamptz not null default now()
);
alter table public.policies enable row level security;
alter table public.policy_versions enable row level security;
alter table public.policy_acknowledgements enable row level security;
alter table public.shift_change_log enable row level security;
create policy "authenticated staff can read active policies" on public.policies for select to authenticated using (true);
create policy "governance can manage policies" on public.policies for all to authenticated using (public.current_staff_role() in ('DIRECTOR','REGISTERED_MANAGER','CLINICAL_LEAD','SAFEGUARDING_LEAD')) with check (public.current_staff_role() in ('DIRECTOR','REGISTERED_MANAGER','CLINICAL_LEAD','SAFEGUARDING_LEAD'));
create policy "authenticated staff can read policy versions" on public.policy_versions for select to authenticated using (true);
create policy "governance can manage policy versions" on public.policy_versions for all to authenticated using (public.current_staff_role() in ('DIRECTOR','REGISTERED_MANAGER','CLINICAL_LEAD','SAFEGUARDING_LEAD')) with check (public.current_staff_role() in ('DIRECTOR','REGISTERED_MANAGER','CLINICAL_LEAD','SAFEGUARDING_LEAD'));
create policy "staff can read own acknowledgements" on public.policy_acknowledgements for select to authenticated using (staff_id in (select id from public.staff where auth_user_id=auth.uid()) or public.current_staff_role() in ('DIRECTOR','REGISTERED_MANAGER','OPERATIONS_MANAGER','CLINICAL_LEAD','SAFEGUARDING_LEAD'));
create policy "staff can acknowledge own policies" on public.policy_acknowledgements for insert to authenticated with check (staff_id in (select id from public.staff where auth_user_id=auth.uid()));
create policy "management can read shift change logs" on public.shift_change_log for select to authenticated using (public.current_staff_role() in ('DIRECTOR','REGISTERED_MANAGER','OPERATIONS_MANAGER'));
create index if not exists policies_review_date_idx on public.policies(review_date);
create index if not exists policy_ack_staff_idx on public.policy_acknowledgements(staff_id);
