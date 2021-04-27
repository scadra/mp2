import { ApiCreation } from 'Models/api/api-creation';
import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import { getModule } from "vuex-module-decorators";
import CamundaStore from "Store/camunda";
import { StepResponse } from 'Models/step/step-response';
import { CamundaRequest } from 'Models/api/camunda-request';
import apiMock from './camunda.api.mock';

const Vue = createLocalVue();
Vue.use(Vuex);

/**
 * Factory function returns a new store instance
 */
const factory = () => {
  const store = new Vuex.Store({
    modules: {
      CamundaStore,
    },
  });
  return getModule(CamundaStore, store);
};

const step = {
    complete: false,
    error: "Error",
    msgDetail: "Go to next",
    nextStep: "next-step",
    processInstanceId: "pro-365-tup",
    variables: {}
} as StepResponse;

const request = {
  variables: {
    productName: 'test',
    organization: 'test',
    swagger: null,
    documentation: null,
    overview: null,
    host: 'String',
    authorizationModel: 'String',
    authorizationTokenUrl: 'String',
    authorizationUrl: 'String'
  } as ApiCreation
} as CamundaRequest;

let service: CamundaStore = null

beforeEach(() => {
  service = factory();
});

/**
 * The test case init
 */
describe("CamundaStore: init store", () => {
  it("has to get a store instance", async (done: any) => {
    expect(service).toBeInstanceOf(Object);
    done();
  });
});

/**
 * States tests
 */
describe("CamundaStore: State", () => {
    it("step should be init with null value", async (done: Function) => {
      expect(service.step).toEqual(null);
      done();
    });
    it("errorMsg should be init with null value", async (done: Function) => {
        expect(service.errorMsg).toEqual(null);
        done();
    });
    it("path should be init with api/bpm", async (done: Function) => {
        expect(service.path).toEqual("api/bpm");
        done();
    });
});

/**
 * Getters tests
 */
describe("CamundaStore: Getters", () => {
  it("returnNextStep should return step", async (done: Function) => {
    service.setStep(step);
    expect(service.returnNextStep).toEqual(step);
    done();
  });
  it("returnErrorMsg should return errorMsg", async (done: Function) => {
    service.setErrorMsg("error");
    expect(service.returnErrorMsg).toEqual("error");
    done();
  });
});


/**
 * Mutations tests
 */
describe("CamundaStore: Mutations", () => {
  it("setStep should set step", async (done: Function) => {
    service.setStep(step);
    expect(service.step).toEqual(step);
    done();
  });
  it("setErrorMsg should set errorMsg", async (done: Function) => {
    service.setErrorMsg("error");
    expect(service.errorMsg).toEqual("error");
    done();
  });
});

/**
 * Actions tests
 */
describe("CamundaStore: Actions", () => {
  it("next method without error", async (done: Function) => {
    service.next(request);
    expect(service.step).toEqual(step);
    done();
  });
  it("next method with error", async (done: Function) => {
    service.setStep(step);
    expect(service.step).toEqual(step);
    done();
  });
});

