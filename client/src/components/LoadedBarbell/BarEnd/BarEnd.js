import React from "react";
import Collars from "../Collars/Collars";
import WeightDiscs from "../WeightDiscs/WeightDiscs";
import Auxiliary from "../../../HOC/Auxiliary";
import BarTip from "../BarTip/BarTip";

const BarEnd = (props) => {

  const transformedLargeDiscs = Object.keys(props.largeDiscs).map(discKey => {
    return [...Array(props.largeDiscs[discKey])].map((_, i) => {
      return <WeightDiscs key={discKey + i} type={discKey} />
    })
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);
    

  const transformedChangeDiscs = Object.keys(props.changeDiscs).map(discKey => {
    return [...Array(props.changeDiscs[discKey])].map((_, i) => {
      return <WeightDiscs key = {discKey + i} type = {discKey} />
    })
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  let barEndLength = 'shortEnd';
  
  if (transformedLargeDiscs.length < 1) {
    if (transformedChangeDiscs.length < 1) {
      barEndLength = 'empty';
    } else {
      barEndLength = 'longEnd';
    }
  } else if (transformedLargeDiscs.length < 2) {
    barEndLength = 'mediumEnd';
  } else {
    barEndLength = 'shortEnd';
  }

  if (barEndLength === 'empty') {
    return (
        <BarTip type={barEndLength} />
    );
  } else if (props.type === "right") {
    return (
      <Auxiliary>
        {transformedLargeDiscs}
        <Collars side='right' />
        {transformedChangeDiscs}
        <BarTip type={barEndLength} />
      </Auxiliary>
    );
  } else {
    return (
      <Auxiliary>
        <BarTip type={barEndLength} />
        {transformedChangeDiscs.reverse()}
        <Collars />
        {transformedLargeDiscs.reverse()}
      </Auxiliary>
    );
  }
};

export default BarEnd;
