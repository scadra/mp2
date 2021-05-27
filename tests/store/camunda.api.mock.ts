import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { StepResponse } from 'Models/step/step-response';
const $instance = axios.create();
const mock = new MockAdapter($instance);

const path: string = `${process.env.GRIDSOME_CAMUNDA_URL}/api/bpm/${
    process.env.GRIDSOME_CAMUNDA_PROCESS_ID
  }`;

const response = {
    complete: false,
    error: "Error",
    msgDetail: "Go to next",
    nextStep: "next-step",
    processInstanceId: "pro-365-tup",
    variables: {}
} as StepResponse;

/**
 * go to next
 */
mock.onPost(`${path}/next`).reply((config) => {
  return [200, response]
})


export default $instance;