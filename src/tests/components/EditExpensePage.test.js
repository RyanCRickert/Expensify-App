import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, history, wrapper, removeExpense;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[0]}
    />
  );
});

test("should render a snapshot", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should handle editExpense", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("shoudl handle removeExpense", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
  wrapper.find("button").prop("onClick")(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(removeExpense).toHaveBeenLastCalledWith({
    id: expenses[0].id
  })
  expect(toJSON(wrapper)).toMatchSnapshot();
});