import { Array1DTracer, LogTracer } from 'algorithm-visualizer';

const A = [1, 3, 3, 2, 1, 1, 1];
const N = A.length;

const tracer = new Array1DTracer('List of element').set(A);
const logger = new LogTracer('Console').delay();

function isMajorityElement(element) {
  let count = 0;
  logger.print(`Verify majority element ${element}`);
  for (let i = N - 1; i >= 0; i--) {
    tracer.patch(i, A[i]).delay();
    if (A[i] === element) {
      count++;
    } else {
      tracer.depatch(i);
    }
  }
  logger.print(`Count of our assumed majority element ${count}`);
  if (count > Math.floor(N / 2)) {
    logger.print('Our assumption was correct!');
    return true;
  }
  logger.print('Our assumption was incorrect!');
  return false;
}

function findProbableElement() {
  let index = 0;
  let count = 1;
  tracer.select(index).delay();
  logger.print(`Beginning with assumed majority element : ${A[index]} count : ${count}`);
  logger.print('--------------------------------------------------------');
  for (let i = 1; i < N; i++) {
    tracer.patch(i, A[i]).delay();
    if (A[index] === A[i]) {
      count++;
      logger.print(`Same as assumed majority element! Count : ${count}`);
    } else {
      count--;
      logger.print(`Not same as assumed majority element! Count : ${count}`);
    }

    if (count === 0) {
      logger.print('Wrong assumption in majority element');
      tracer.deselect(index);
      tracer.depatch(i);
      index = i;
      count = 1;
      tracer.select(i).delay();
      logger.print(`New assumed majority element!${A[i]} Count : ${count}`);
      logger.print('--------------------------------------------------------');
    } else {
      tracer.depatch(i);
    }
  }
  logger.print(`Finally assumed majority element ${A[index]}`);
  logger.print('--------------------------------------------------------');
  return A[index];
}

function findMajorityElement() {
  const element = findProbableElement();
  if (isMajorityElement(element) === true) {
    logger.print(`Majority element is ${element}`);
  } else {
    logger.print('No majority element');
  }
}

findMajorityElement();
