export class Kata {
  static validatePin(pin: string): boolean {
    const correctLength = pin.length === 4 || pin.length === 6;
    const onlyDigits = [...pin].every((char) => char >= "0" && char <= "9");
    return correctLength && onlyDigits;
  }
}
