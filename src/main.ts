// typescript variable declaration
const getFullName = (name: string, lastName: string): string => {
  return name + ' ' + lastName
}

console.log(getFullName('Tritera', 'Erlangga'))
// -end-

// typescript interface
interface UserInterface {
  // it's good habit to specify the name for clarity
  name: string
  age?: number // ? used for to make variable not mandatory
  getMessage(): string // argument var type not mandatory in interface
}

const user: UserInterface = {
  name: 'Troy',
  age: 26,
  getMessage() {
    return 'Hello' + name
  },
}

const user2: UserInterface = {
  name: 'Jack',
  getMessage() {
    return 'Hello' + name
  },
}
// -end-

// union and aliases
type ID = string // type aliases
type PopularTag = string
type MaybePopularTag = PopularTag | null

interface MovieInterface {
  id: ID
  name: string
}

const popularTag: PopularTag[] = ['dragon', 'coffee']

let pageName: string | number = '1' // union
let movie: MovieInterface | null = null
let dragon: MaybePopularTag = 'dragon'
// -end-

// typescript DOM
const someElement = document.querySelector('.foo')

someElement.addEventListener('blur', (e) => {
  const target = e.target as HTMLInputElement
  console.log(target.value)
})
// -end-
