export const screenFormat = ({ title, content }) => {

 const bold = "\x1b[1m";
 const reset = "\x1b[0m";

 return `
--------------------------------------------
${bold}${title}${reset}

${content}

--------------------------------------------
`;
};