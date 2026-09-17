import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase-server';
export async function GET(){const s=await createSupabaseServerClient(); const {data,error}=await s.from('incidents').select('id,reference,category,status,title,occurred_at,created_at').order('created_at',{ascending:false}); if(error)return NextResponse.json({error:error.message},{status:400}); return NextResponse.json({data});}
