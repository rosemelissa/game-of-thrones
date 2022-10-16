import { Person } from "../personTypes";

/*
pseudocode:
function isDescendant(descendantName: string, ancestorName: string, topOfTree:Person): boolean
    create peopleStack = []
    push topPerson to peopleStack array
    while peopleStack has people on it
        const currentPerson = peopleStack.shift
        if currentPerson.name is ancestorName:
            create descendantsStack = []
            push ancestor to descendantsStack
            while descendantsStack has people on it
                const currentDescendant = descendantsStack.shift
                if currentDescendant.name === descendantName
                    return true
                else
                    push currentDescendant.children to descndantsStack
        else
            push currentPerson.children to peopleStack
    return false;

*/

export function isDescendant(
  descendantName: string,
  ancestorName: string,
  topOfTree: Person
): boolean {
  const peopleStack: Person[] = [];
  peopleStack.push(topOfTree);
  while (peopleStack.length > 0) {
    const currentPerson: Person = peopleStack.shift()!;
    if (currentPerson.name === ancestorName) {
      const descendantsStack: Person[] = [];
      descendantsStack.push(...currentPerson.children);
      while (descendantsStack.length > 0) {
        const currentDescendant: Person = descendantsStack.shift()!;
        if (currentDescendant.name === descendantName) {
          return true;
        } else {
          descendantsStack.push(...currentDescendant.children);
        }
      }
    } else {
      peopleStack.push(...currentPerson.children);
    }
  }
  return false;
}
