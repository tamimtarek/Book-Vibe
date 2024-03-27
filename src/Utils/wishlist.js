const getStoredWishBooks = () => {
    const storedBook = localStorage.getItem('wishlist');
    if(storedBook){
        return JSON.parse(storedBook)
    }
    return [];
}

const saveWishBooks = id => {
    const storedBooks = getStoredWishBooks(id);
    const exist = storedBooks.find(bookId => bookId === id);
    if(!exist){
        storedBooks.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedBooks));
    }
}

export {getStoredWishBooks, saveWishBooks}