import { Technologies } from "./technologies";

export class Projects{
    
    constructor(
        public id: number,
        public tittle: string,
        public description: string,
        public imgPortada: string,
        public category: string,
        public urlProyect: string,
        public technologies: Technologies[]
      ) {}

}