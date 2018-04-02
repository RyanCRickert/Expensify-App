import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("should setup edit expense action object", () => {
    const action = editExpense("123abc", {note: "New note value"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
            note: "New note value"
        }
    });
});

test("should setup add expense action object with data", () => {
    const expenseData = {
        description: "Some description",
        note: "Some note",
        amount: 5000,
        createdAt: 0
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test("should setup add expense action object without data", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            amount: 0,
            createdAt: 0,
            description: "",
            note: ""
        }
    });
});