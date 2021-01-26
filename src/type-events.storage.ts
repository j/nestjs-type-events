import { Newable } from 'type-events/lib/interfaces';

export const storage = new Set<Newable>();

export function getSubscribers(): Newable[] {
  return [...storage.values()];
}

export function addSubscribers(subscribers: Newable[]): void {
  subscribers.forEach((s) => storage.add(s));
}
