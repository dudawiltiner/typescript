// As funções vão ajudar em colocar os números no formato certo de string

function convertStringWithRightFormatNumber(element: string): string{
  return (parseInt(element)).toString();
}

function ajustDigit(valueToAjust: string) {
  return convertStringWithRightFormatNumber(valueToAjust).length === 2 ? convertStringWithRightFormatNumber(valueToAjust) : (`0${convertStringWithRightFormatNumber(valueToAjust)}`);
}

function convertSubtraiString(element: string){
  return (parseInt(element)-1).toString();
}

export {ajustDigit, convertSubtraiString}