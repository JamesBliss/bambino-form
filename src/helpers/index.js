
export const generateScopedFieldName = ({ scopePath, name }) => {
  let fieldName;

  if (scopePath) {
    if (typeof name === 'number') {
      fieldName = `${ scopePath }[${ name }]`;
    } else {
      fieldName = `${ scopePath }.${ name }`;
    }
  } else {
    fieldName = `${ name }`;
  }

  return fieldName;
};