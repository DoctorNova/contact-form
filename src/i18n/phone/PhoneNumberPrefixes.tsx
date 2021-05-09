import rawPrefixes from "./PhoneNumberCountryPrefixes.json";

interface RawPhonePrefix {
  name: string;
  code: string;
  dial_code: string;
}

const mergePrefixes = (accumulator: string[], prefix: RawPhonePrefix) =>
  accumulator.indexOf(prefix.dial_code) > -1
    ? accumulator
    : accumulator.concat(prefix.dial_code);

const prefixes = rawPrefixes.reduce(mergePrefixes, []).sort((a, b) => {
  const codeA = parseInt(a.replace(/[+\s]/g, ""));
  const codeB = parseInt(b.replace(/[+\s]/g, ""));
  return codeA - codeB;
});

export { prefixes }