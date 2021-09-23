export class Post {

    public constructor(
        public _id?: string, 
        public traveler_id?: string,        
        public postContent?: string,        
        public image_id?: string[],  
        public likes?: string[],         
        public currentPosition?:{
            longitude: number,
            latitude: number
            }                                        
        ){}   
}