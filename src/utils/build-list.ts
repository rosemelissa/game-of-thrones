import { Person } from "../personTypes";

export function buildStackList(topPerson: Person): string[] {
  const peopleStack: Person[] = [];
  peopleStack.push(topPerson);
  const outputNames: string[] = [];
  while (peopleStack.length > 0) {
    const currentPerson: Person = peopleStack.pop()!;
    outputNames.push(currentPerson.name);
    peopleStack.push(...currentPerson.children);
  }
  return outputNames;
}

export function buildQueueList(topPerson: Person): string[] {
  const peopleStack: Person[] = [];
  peopleStack.push(topPerson);
  const outputNames: string[] = [];
  while (peopleStack.length > 0) {
    const currentPerson: Person = peopleStack.shift()!;
    outputNames.push(currentPerson.name);
    peopleStack.push(...currentPerson.children);
  }
  return outputNames;
}
