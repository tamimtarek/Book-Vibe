const getStoredBooks = () => {
    const storedBook = localStorage.getItem('Books');
    if(storedBook){
        return JSON.parse(storedBook)
    }
    return [];
}

const saveBooks = id => {
    const storedBooks = getStoredBooks(id);
    const exist = storedBooks.find(bookId => bookId === id);
    if(!exist){
        storedBooks.push(id);
        localStorage.setItem('Books', JSON.stringify(storedBooks));
    }
}

export {getStoredBooks, saveBooks}