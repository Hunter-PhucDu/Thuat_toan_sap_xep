const bubbleSort = (array) => {
  let isSorted = false;
  let end = array.length;
  const animations = [];
  while (!isSorted) {
    isSorted = true;
    end -= 1;
    for (let j = 0; j < end; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSorted = false;
      }
      animations.push([array[j], array[j + 1]]);
    }
  }
  return { array, animations };
};

function bubbleSortAnimations(animations, speed, setisDisabled) {
  const arrayBars = document.getElementsByClassName("array-bar");
  let animationIndex = 0;

  function animate() {
    if (animationIndex < animations.length) {
      const [barOneIdx, barTwoIdx] = animations[animationIndex];
      const color = animationIndex % 3 === 0 ? "red" : "turquoise";

      arrayBars[barOneIdx].style.backgroundColor = color;
      arrayBars[barTwoIdx].style.backgroundColor = color;

      const [barOneHeight, barTwoHeight] = animations[animationIndex + 2];
      arrayBars[barOneIdx].style.height = `${barOneHeight * 4}px`;
      arrayBars[barTwoIdx].style.height = `${barTwoHeight * 4}px`;

      animationIndex += 3;

      requestAnimationFrame(animate);
    } else {
      setTimeout(() => {
        setisDisabled(false);
      }, 500);
    }
  }

  animate();
}

export { bubbleSort, bubbleSortAnimations };