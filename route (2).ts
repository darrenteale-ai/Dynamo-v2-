import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase-server';
export async function GET(){const s=await createSupabaseServerClient(); const {data,error}=await s.from('shifts').select('id,call_sign,area,start_at,end_at,status').order('start_at'); if(error)return NextResponse.json({error:error.message},{status:400}); return NextResponse.json({data});}
