// Button Click Function + Triangle Result Show :
function triangleAreaClick() {
  // Triangle Width
  const triangleField = document.getElementById("triangle-width");
  const textValue = triangleField.value;
  const convert = parseFloat(textValue);
  // console.log(convert);

  // Triangle Height
  const triangleHeight = document.getElementById("triangle-height");
  const heightValue = triangleHeight.value;
  const heightConvert = parseFloat(heightValue);
  // console.log(heightConvert);

  // Calculation :
  const triangleAreaTotal = 0.5 * convert * heightConvert;

  // Validation
  //Value Negative Validation
  if (convert < 0 || heightConvert < 0) {
    alert("Provide a Positive Number");
    document.getElementById('triangle-width').value = '';
    document.getElementById('triangle-height').value = '';
    return;
  }

  //Area result show
  const result = document.getElementById("triangle-result");
  result.innerText = triangleAreaTotal.toFixed(2);
  addCalculation("Triangle", triangleAreaTotal);
}

// Rectangle Result Show with Reduce Function:
// Rectangle Button Click Function:
function rectangleAreaClick() {
  // get input field taken
  const rectangleWidth = getInputValue("rectangle-width");
  const rectangleLength = getInputValue("rectangle-length");
  // console.log(rectangleWidth);

  // Validation
  //Value Negative Validation
  if (rectangleWidth < 0 || rectangleLength < 0) {
    alert("Provide a Positive Number");
    document.getElementById('rectangle-width').value = '';
    document.getElementById('rectangle-length').value = '';
    return;
  }

  // result Show
  const rectangleResult = rectangleWidth * rectangleLength;
  setElementInnerText("rectangle-result", rectangleResult);
  addCalculation("Rectangle", rectangleResult);
}

// Parallelogram Button click And Function :
function parallelogramAreaClick() {
  // get input field taken
  const parallelogramBase = getInputValue("parallelogram-input");
  const parallelogramHeight = getInputValue("parallelogram-height");
  // console.log(parallelogramBase,parallelogramHeight);

  // Validation
  if (parallelogramBase < 0 || parallelogramHeight < 0) {
    alert("Provide a Positive Number");
    document.getElementById('parallelogram-input').value = '';
    document.getElementById('parallelogram-height').value = '';
    return; 
  }

  // Result :
  const parallelogramResult = parallelogramBase * parallelogramHeight;
  setElementInnerText("parallelogram-result", parallelogramResult);

  // Add Calculation :
  addCalculation("parallelogram", parallelogramResult);
}

// Ellipse Button Click And Function :
function ellipseAreaClick() {
  // get input field taken
  const ellipseLarge = getInputValue("ellipse-large-input");
  const ellipseShort = getInputValue("ellipse-short-input");
  // console.log(ellipseLarge,ellipseShort);

  // Validation
  if (ellipseLarge < 0 || ellipseShort < 0) {
    alert("Provide a Positive Number");
    document.getElementById('ellipse-large-input').value = '';
    document.getElementById('ellipse-short-input').value = '';
    return ;
  }

  // Result :
  const ellipseResult = 3.14 * ellipseLarge * ellipseShort;
  setElementInnerText("ellipse-result", ellipseResult);

  // Add Calculation List :
 addCalculation('ellipse',ellipseResult);
 
}

//  Reduce Function One Function Multiple Area Function Call :
function getInputValue(inputId) {
  // get input field taken
  const inputField = document.getElementById(inputId);
  const inputText = inputField.value;
  const textConvert = parseFloat(inputText);
  return textConvert;
}

// Different  Area Result with Function + use reduce function :
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area.toFixed(2);
}

// Added Calculation List
function addCalculation(areaType, area) {
    console.log(areaType + " " + area);
    const calculationEntry = document.getElementById("calculation-entry");
    const count = calculationEntry.childElementCount;
   
    // create element
    const p = document.createElement("p");
    p.classList.add("my-4");
    p.innerHTML = `
      ${count + 1}. ${areaType} ${area}
      cm <sup>2</sup> 
      <button class="btn btn-sm bg-sky">Convert</button>`;
    calculationEntry.appendChild(p);
}

