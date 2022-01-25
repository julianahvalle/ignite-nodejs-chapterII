import { v4 as uuidV4 } from 'uuid'

class Category { 
  id?: string;
  name: string;
  description: string;
  created_at: Date;

//se não tiver um id, this.id vai receber um id 
// responsabiliade de criar id veio para o category 
  constructor(){
    if(!this.id){
      this.id = uuidV4()
    }
  }
}

export { Category }