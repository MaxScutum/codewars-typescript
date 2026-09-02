export function dominoReaction(sequence: string): string {
  const dominos = sequence.split("");

  for (let i = 0; i < dominos.length; i++) {
    if (dominos[i] !== "|") {
      break;
    }

    dominos[i] = "/";
  }

  return dominos.join("");
}
