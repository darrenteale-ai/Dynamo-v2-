import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase-server';
export async function GET(){const s=await createSupabaseServerClient(); const {data,error}=await s.from('policies').select('id,title,category,current_version,review_date,mandatory,status').order('title'); if(error)return NextResponse.json({error:error.message},{status:400}); return NextResponse.json({data});}
