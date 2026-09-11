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
                if(sectionClash(p,section)){
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
    return earliest;
}
