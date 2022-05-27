import { Task } from 'src/Generic/models/Task'
import { identity } from 'lodash'

export type EnsureException = Task | Error

export type Throwback = () => Promise<Error>

export const defaultCollectionFindThrowback = () => { throw new Error('Can\'t find object in collection') }

export const err = (message: string) => () => { throw new Error(message) }

export function ensure<Obj, Res>(object: Obj | null | undefined, throwback: Throwback = defaultCollectionFindThrowback) {
  if (object === null || object === undefined) {
    throw throwback()
  } else {
    return object
  }
}

export function ensureStatic<Obj>(object: Obj | null | undefined, exception: EnsureException = new Error('Can\'t find object in collection')) {
  if (object === null || object === undefined) throw exception
  return object
}

export function checkAll<Obj, Res>(objects: Array<Obj | null | undefined>) {
  if (!objects.every(identity)) {
    throw new Error(`Some objects are falsy: \n\n${JSON.stringify(objects)}`)
  }
  return objects
}

export type Filter<Obj> = (object: Obj) => boolean

export function ensureFind<Obj>(collection: Obj[], filter: Filter<Obj>, exception?: EnsureException) {
  const object = collection.find(filter)
  if (object === null || object === undefined) {
    if (exception) {
      throw exception
    } else {
      throw new Error('Can\'t find an object in a collection using filter: ' + filter.toString())
    }
  }
  return object
}

export const tb = (err: Error) => async () => err
