//1. Вам потрібно створити тип DeepReadonly який буде робити доступними
//тільки для читання навіть властивості вкладених обʼєктів.
type DeepReadonly<T> = {
  +readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
}

//2. Вам потрібно створити тип DeepRequireReadonly який буде робити доступними
//тільки для читання навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.
type DeepRequireReadonly<T> = {
  +readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K]
}

//3. Вам потрібно створити тип UpperCaseKeys, який буде приводити всі ключі до верхнього регістру.
type UpperCaseKeys<T> = {
  [K in keyof T & string as Uppercase<K>]: T[K]
}

//4. Створіть тип ObjectToPropertyDescriptor,
//який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.
type Descriptor = {
  value?: any
  writable?: boolean
  configurable?: boolean
  enumerable?: boolean
  get?: () => any
  set?: (value: any) => void
}

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: Descriptor
}