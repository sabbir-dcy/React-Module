/* const fruits = [
  {name : 'apple'},
  {name : 'papaya'}
]

const election = ['john','jane','john','jane','doe','john']
const election2 = {
  john : 3,
  name : 2,
  doe : 1
} */

let db = {};

const addToDb = (item) => {
  const stored = localStorage.getItem("cheka");

  if (stored) {
    db = JSON.parse(stored);
  }
  if (db[item]) {
    // item in db
    db[item] += 1;
  } else db[item] = 1;
  localStorage.setItem("cheka", JSON.stringify(db));
};

const removeItem = (item) => {
  const store = localStorage.getItem('cheka')

  if (store) {
    const storedObj = JSON.parse(store)
    delete storedObj[item]
    localStorage.setItem('cheka', JSON.stringify(storedObj))
  }
}