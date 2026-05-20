create table if not exists public.students (
  email text primary key,
  created_at timestamptz not null default now()
);

insert into public.students (email)
values ('mikeramirezz@hotmail.com')
on conflict (email) do nothing;
