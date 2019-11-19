/* This model is just a basic version to display categories but it can be extended */

export class Category{
    categoryId: number;
    categoryName: string;

    constructor(categoryId, categoryName){
        this.categoryId = categoryId;
        this.categoryName = categoryName;
    }
}