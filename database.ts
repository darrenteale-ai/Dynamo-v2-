export type UserRole="DIRECTOR"|"REGISTERED_MANAGER"|"OPERATIONS_MANAGER"|"CLINICAL_LEAD"|"SAFEGUARDING_LEAD"|"STAFF";
export type ShiftStatus="PLANNED"|"LIVE"|"COMPLETED"|"CANCELLED";
export type IncidentStatus="OPEN"|"UNDER_INVESTIGATION"|"ACTION_REQUIRED"|"CLOSED";
export interface StaffMember{id:string;employee_number:string;first_name:string;last_name:string;role:string;active:boolean}
export interface Shift{id:string;call_sign:string;area:string;start_at:string;end_at:string;status:ShiftStatus}
