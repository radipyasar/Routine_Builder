import { Course, Section, Slot } from "./data";

export function toMinutes(time : string){
    const parts = time.split(":");
    const hours = Number(parts[0]);
    const minutes = Number(parts[1]);

    return hours*60 + minutes;
}

export function slotsOverlap(a:Slot,b:Slot):boolean{
    if(a.day!==b.day){
        return false;
    }

    const aStart = toMinutes(a.start);
    const aEnd = toMinutes(a.end);

    const bStart = toMinutes(b.start);
    const bEnd = toMinutes(b.end);   

    return aStart<bEnd && bStart<aEnd;
}

export function sectionClash(s1:Section,s2:Section):boolean{
    for(const a of s1.slots){
        for(const b of s2.slots){
            if(slotsOverlap(a,b)){
                return true;
            }
        }
    }
    return false;
}

export const PAIRED_COURSES = ["CSE332", "EEE111", "CSE438"];

function splitId(id:string){
    const dash = id.lastIndexOf("-");
    return { code : id.slice(0,dash), number : id.slice(dash+1) };
}

function baseCode(code:string):string{
    return code.endsWith("L") ? code.slice(0,-1) : code;
}

export function pairMismatch(s1:Section,s2:Section):boolean{
    const a = splitId(s1.id);
    const b = splitId(s2.id);

    if(a.code === b.code){
        return false;
    }

    const base = baseCode(a.code);
    if(base !== baseCode(b.code)){
        return false;
    }
    if(!PAIRED_COURSES.includes(base)){
        return false;
    }

    return a.number !== b.number;
}

export function findRoutines(selected:Course[]):Section[][]{
    const results:Section[][] = [];
    const picked:Section[] = [];

    function tryNext(index:number):void{
        if(index===selected.length){
            results.push([...picked]);
            return;
        }

        const course = selected[index];
        if(!course){
            return;
        }

        for(const section of course.sections){
            let clashes = false;
            for(const p of picked){
                if(sectionClash(p,section) || pairMismatch(p,section)){
                    clashes = true;
                    break;
                }
            }
            if(clashes){
                    continue;
            }
            picked.push(section);
            tryNext(index+1);
            picked.pop();
            
        }
    }
    tryNext(0);
    return results;
}

export function daysUsed(routine:Section[]):number{
    const days = new Set<string>();
    for(const section of routine){
        for(const slot of section.slots){
            days.add(slot.day);
        }
    }
    return days.size;
}

export function dayRank(days:number):number{
    if(days>=4){
        return days-4;
    }
    return 10 + (4-days);
}

export function scoreRoutine(routine:Section[]):number{
    let earliest = 24*60;
    for(const section of routine){
        for(const slot of section.slots){
            const start = toMinutes(slot.start);
            if(start<earliest){
                earliest=start;
            }
        }
    }

    const rank = dayRank(daysUsed(routine));

    return (100 - rank) * 10000 + earliest;
}