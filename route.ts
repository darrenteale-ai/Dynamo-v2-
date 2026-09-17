import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase-server';
export async function GET(){const s=await createSupabaseServerClient(); const {data,error}=await s.from('staff').select('id,employee_number,first_name,last_name,role_title,user_role,active,hcpc_number,nmc_number,dbs_expiry,driving_licence_expiry').order('last_name'); if(error)return NextResponse.json({error:error.message},{status:400}); return NextResponse.json({data});}
