import fs from "fs";
import { parse }from "csv-parse"; //como chama o parse com a nova att 
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory{
  name:string;
  description:string;
}

class ImportCategoryUseCase{
  constructor(private categoriesRepository: ICategoriesRepository){}

  loadCategory(file:Express.Multer.File):Promise<IImportCategory[]> {
    return new Promise((resolve,reject)=>{
        const stream = fs.createReadStream(file.path) //leitura do arquivo em partes
        const categories: IImportCategory[] = [];

      const parseFile = parse(); 
      stream.pipe(parseFile);

      parseFile.on("data", async (line) => { 
        
        const [name, description] = line;
        categories.push({
        name, 
        description
        });
      })
      .on("end", () => {
        fs.promises.unlink(file.path);
        resolve(categories);
      })
      .on("error", (err) => {
        reject(err);
      })
    });
  }

  async execute(file: Express.Multer.File):Promise<void> {
   const categories = await this.loadCategory(file);
   
    categories.map(category => { 
      const { name, description } = category;

      const existCategory = this.categoriesRepository.findByName(name);

      if(!existCategory) {
        this.categoriesRepository.create({
        name, 
        description
        });
      }
    });
  }
}

export { ImportCategoryUseCase }