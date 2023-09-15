import {
  addBookLocalStorage,
  getBooksLocalStorage,
  deleteBookLocalStorage,
  updateBookLocalStorage
} from './LocalStorageCRUD';
import '@types/jest';


const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: mockLocalStorage
  });
});

afterEach(() => {
  jest.clearAllMocks();
});


describe('CRUD API for localStorage', () => {
  it('should add a book to localStorage', async () => {
    const book = { id: '1', title: 'Sample Book', author: 'Sample Author', completed: false, pagesRead: 0, createdAt: new Date(), updatedAt: new Date() };

    await addBookLocalStorage(book);

    expect(localStorage.setItem).toHaveBeenCalledWith(book.id, JSON.stringify(book));
  });

  it('should retrieve books from localStorage', async () => {
    mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify([{ id: '1', title: 'Sample Book' }]));

    const books = await getBooksLocalStorage();

    expect(books).toEqual([{ id: '1', title: 'Sample Book' }]);
    expect(localStorage.getItem).toHaveBeenCalledWith('books');
  });

  it('should delete a book from localStorage', async () => {
    await deleteBookLocalStorage('1');

    expect(localStorage.removeItem).toHaveBeenCalledWith('1');
  });

  it('should update a book in localStorage', async () => {
    const updatedBook = { id: '1', title: 'Sample Book', author: 'Sample Author', completed: false, pagesRead: 0, createdAt: new Date(), updatedAt: new Date() };

    await updateBookLocalStorage('1', updatedBook);

    expect(localStorage.setItem).toHaveBeenCalledWith('1', JSON.stringify(updatedBook));
  });
});