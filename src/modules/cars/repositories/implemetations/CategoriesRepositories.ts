import { Category } from '../../model/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories:Category[] = [];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }
  //verifica se já existe instancia criada 
  public static getInstance():CategoriesRepository {
    if(!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create({description, name} : ICreateCategoryDTO):void{
  //precisa chamar o construtor
  const category = new Category(); //com um new eu consigo chamar o construtor
  
  Object.assign(category, {
    name,
    description,
    created_at: new Date()
  });

  this.categories.push(category);
  }
  list():Category[] { 
  return this.categories;
  }

  findByName(name:string):Category {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}

export { CategoriesRepository } 