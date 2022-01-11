// typescript variable declaration
const getFullName = (name: string, lastName: string): string => {
  return name + ' ' + lastName
}

console.log(getFullName('Tritera', 'Erlangga'))
// -end-

// ======================================================================

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

// ======================================================================

// union and aliases
type ID = string // type aliases
type PopularTag = string
type MaybePopularTag = PopularTag | null // union

interface MovieInterface {
  id: ID
  name: string
}

const popularTag: PopularTag[] = ['dragon', 'coffee']

let pageName: string | number = '1' // union
let movie: MovieInterface | null = null
let dragon: MaybePopularTag = 'dragon'
// -end-

// ======================================================================

// typescript DOM
const someElement = document.querySelector('.foo')

someElement.addEventListener('blur', (e) => {
  const target = e.target as HTMLInputElement
  console.log(target.value)
})
// -end-

// ======================================================================

// typescript class

interface UserClassInterface {
  getFullName(): string
}

class UserClass implements UserClassInterface {
  firstName: string
  lastName: string
  readonly unchangableName: string // readonly for makes constant variable
  static readonly maxAge = 50 // make static to only accesible from the class itself

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  changeUnchangableName(): void {
    // this.unchangableName = "foo" // error because it's a constant
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName
  }
}

class Admin extends UserClass {
  // inheritance
  editor: string

  setEditor(editor: string): void {
    this.editor = editor
  }

  getEditor(): string {
    return this.editor
  }
}

const userClass = new UserClass('John', 'Doe')
console.log(userClass.getFullName())

const admin = new Admin('Jane', 'Doe')
admin.setEditor(admin.getFullName()) // can access parent class function
console.log(admin.getEditor())

// -end-

// ======================================================================

// generic interface and function
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16)
  return {
    ...obj,
    id,
  }
}

interface UserGenericInterface<T, V> {
  name: string
  data: T
  meta: V
}

const userGeneric: UserGenericInterface<{ meta: string }, string> = {
  name: 'Jack',
  data: {
    meta: 'foo',
  },
  meta: 'bar',
}

const userGeneric2: UserGenericInterface<string[], string> = {
  name: 'John',
  data: ['foo', 'bar', 'baz'],
  meta: 'baz',
}

const result = addId<UserGenericInterface<object, string>>(userGeneric)
console.log('result', result)

// -end-

// ======================================================================

// enum in typescript

const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
}

console.log(statuses.inProgress)

enum StatusEnum {
  NotStarted = 'notStarted',
  InProgress = 'inProgress',
  Done = 'done',
}

interface Task {
  id: string
  status: StatusEnum
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted
notStartedStatus = StatusEnum.Done

console.log(StatusEnum.InProgress)

// -end-
