create table public.policies (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  version text not null,
  status text not null default 'DRAFT',
  review_date date,
  owner_staff_id uuid references public.staff(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.policy_acknowledgements (
  id uuid primary key default gen_random_uuid(),
  policy_id uuid not null references public.policies(id) on delete cascade,
  staff_id uuid not null references public.staff(id) on delete cascade,
  acknowledged_at timestamptz not null default now(),
  unique(policy_id, staff_id)
);

create table public.vehicles (
  id uuid primary key default gen_random_uuid(),
  registration text unique not null,
  call_sign text,
  status text not null default 'AVAILABLE',
  fuel_level numeric(5,2),
  current_mileage integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.vehicle_defects (
  id uuid primary key default gen_random_uuid(),
  vehicle_id uuid not null references public.vehicles(id) on delete cascade,
  description text not null,
  severity text not null default 'LOW',
  status text not null default 'OPEN',
  reported_by uuid references public.staff(id),
  reported_at timestamptz not null default now(),
  closed_at timestamptz
);

create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  staff_id uuid references public.staff(id) on delete cascade,
  title text not null,
  message text not null,
  severity text not null default 'INFO',
  read_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.policies enable row level security;
alter table public.policy_acknowledgements enable row level security;
alter table public.vehicles enable row level security;
alter table public.vehicle_defects enable row level security;
alter table public.notifications enable row level security;

create policy "authenticated users can read published policies" on public.policies for select to authenticated using (status = 'PUBLISHED' or public.current_staff_role() in ('DIRECTOR','REGISTERED_MANAGER','CLINICAL_LEAD','SAFEGUARDING_LEAD'));
create policy "governance users manage policies" on public.policies for all to authenticated using (public.current_staff_role() in ('DIRECTOR','REGISTERED_MANAGER','CLINICAL_LEAD','SAFEGUARDING_LEAD')) with check (public.current_staff_role() in ('DIRECTOR','REGISTERED_MANAGER','CLINICAL_LEAD','SAFEGUARDING_LEAD'));
create policy "staff read own acknowledgements" on public.policy_acknowledgements for select to authenticated using (staff_id in (select id from public.staff where auth_user_id=auth.uid()) or public.current_staff_role() in ('DIRECTOR','REGISTERED_MANAGER'));
create policy "staff create own acknowledgements" on public.policy_acknowledgements for insert to authenticated with check (staff_id in (select id from public.staff where auth_user_id=auth.uid()));
create policy "authorized users read vehicles" on public.vehicles for select to authenticated using (true);
create policy "operations manage vehicles" on public.vehicles for all to authenticated using (public.current_staff_role() in ('DIRECTOR','REGISTERED_MANAGER','OPERATIONS_MANAGER')) with check (public.current_staff_role() in ('DIRECTOR','REGISTERED_MANAGER','OPERATIONS_MANAGER'));
create policy "authorized users read defects" on public.vehicle_defects for select to authenticated using (true);
create policy "operations manage defects" on public.vehicle_defects for all to authenticated using (public.current_staff_role() in ('DIRECTOR','REGISTERED_MANAGER','OPERATIONS_MANAGER')) with check (public.current_staff_role() in ('DIRECTOR','REGISTERED_MANAGER','OPERATIONS_MANAGER'));
create policy "staff read own notifications" on public.notifications for select to authenticated using (staff_id in (select id from public.staff where auth_user_id=auth.uid()));
