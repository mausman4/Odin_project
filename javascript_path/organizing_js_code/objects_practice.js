//consttuctor for book objects
function Book(title, author, pages, read_or_not){
    this.title = title
    this.author = author
    this.pages = pages
    this.read_or_not = read_or_not
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read_or_not}`;
    }
}

const hobbit = new Book('The hobbit', 'JR Tolken', 295, 'not read yet');
console.log(hobbit.info());

