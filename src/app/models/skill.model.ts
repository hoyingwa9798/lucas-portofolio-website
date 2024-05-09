export class Skill{
    id: number;
    category: string;
    skillName: string;

    constructor(id: number, category: string, skillName: string){
        this.id = id;
        this.category = category;
        this.skillName = skillName;
    }
}