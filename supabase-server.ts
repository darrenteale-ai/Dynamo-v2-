import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getPublicEnv } from "./env";
export async function createSupabaseServerClient(){const store=await cookies();const env=getPublicEnv();return createServerClient(env.NEXT_PUBLIC_SUPABASE_URL,env.NEXT_PUBLIC_SUPABASE_ANON_KEY,{cookies:{getAll(){return store.getAll()},setAll(items){try{items.forEach(({name,value,options})=>store.set(name,value,options))}catch{}}}})}
