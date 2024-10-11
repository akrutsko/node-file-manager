function extractCommandAndArguments(input) {
  const regex = /([^\s'"]+)|'([^']*)'|"([^"]*)"/g;
  const elements = [];
  let match;

  while ((match = regex.exec(input)) !== null) {
    console.log({ input });
    console.log({ match });
    console.log({ lastIndex: regex.lastIndex });
    console.log({ match0: match[0] });
    console.log({ match1: match[1], match2: match[2], match3: match[3] });
    elements.push(match[1] || match[2] || match[3]);
  }

  return elements;
}

// Example usage
const commands = [
  // 'c',
  // 'c ',
  // 'c c c c c ',
  // 'cmd d:\\1.txt',
  // 'cmd "d:\\1 1.txt"',
  // "cmd 'd:\\1 1.txt'",
  'cmd "d:\\1 1.txt" \'d:\\1 1.txt\'',
];

commands.forEach((command) => {
  console.log(extractCommandAndArguments(command));
});

// To correctly extract the command and its arguments into separate elements in an array, including cases where arguments are enclosed in single or double quotes
