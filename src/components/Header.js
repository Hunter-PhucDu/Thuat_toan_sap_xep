import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { arrayGenerated, arraySizeChange } from '../reducers/arraySlice';
import { bubbleSortAnimations, bubbleSort } from '../sorting_algorithms/BubbleSort';
import { Box, Button, Slider, Typography } from '@mui/material';

const Header = () => {
  const [isDisabled, setisDisabled] = useState(false);
  const [speed, setSpeed] = useState(50);
  const dispatch = useDispatch();
  const array = useSelector(state => state.array.entities);
  const arraySize = useSelector(state => state.array.size);
  const copyArray = [...array];

  const randomInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const handleNewArray = () => {
    const uniqueValues = new Set();
    while (uniqueValues.size < arraySize) {
      uniqueValues.add(randomInterval(0, 100));
    }
    const newArray = Array.from(uniqueValues);
    dispatch(arrayGenerated(newArray));
  };

  const handleBubbleSort = () => {
    setisDisabled(true);
    const { animations } = bubbleSort(copyArray);
    bubbleSortAnimations(animations, speed, setisDisabled);
  };

  const handleSizeSlider = (event, newValue) => {
    dispatch(arraySizeChange(newValue));
  };

  const handleSpeedSlider = (event, newValue) => {
    setSpeed(newValue);
  };

  return (
    <Box sx={{ width: "100%", margin: "auto" }} id="mainDiv">
      <Box sx={{ width: "100%", margin: "auto", display: "flex" }}>
        <Box sx={{ width: "30%", margin: "auto" }}>
          <Typography color="white">Speed</Typography>
          <Slider value={speed} valueLabelDisplay="auto" disabled={isDisabled} onChange={handleSpeedSlider} />
        </Box>
        <Box sx={{ width: "30%", margin: "auto" }}>
          <Typography color="white">Array Size</Typography>
          <Slider value={arraySize} valueLabelDisplay="auto" disabled={isDisabled} onChange={handleSizeSlider} />
        </Box>
      </Box>
      <Button variant="outlined" sx={{ margin: "30px auto" }} onClick={handleNewArray} disabled={isDisabled}>Generate New Array</Button>
      <Box sx={{ width: "80%", margin: "40px auto", display: "flex", justifyContent: "space-between" }}>
        <Button size="small" variant="outlined" onClick={handleBubbleSort} disabled={isDisabled}>Bubble Sort</Button>
      </Box>
    </Box>
  );
};

export default React.memo(Header);