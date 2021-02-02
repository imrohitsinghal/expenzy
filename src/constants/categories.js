const incomeColors = [
  "#123123",
  "#154731",
  "#165f40",
  "#16784f",
  "#14915f",
  "#10ac6e",
  "#0bc77e",
  "#04e38d",
  "#00ff9d",
];
const expenseColors = [
  "#b50d12",
  "#bf2f1f",
  "#c9452c",
  "#d3583a",
  "#dc6a48",
  "#e57c58",
  "#ee8d68",
  "#f79d79",
  "#ffae8a",
  "#cc474b",
  "#f55b5f",
];

export const incomeCategories = [
  { type: "Salary", amount: 0, color: incomeColors[6] },
  { type: "Investments", amount: 0, color: incomeColors[2] },
  { type: "Deposits", amount: 0, color: incomeColors[3] },
  { type: "Lottery", amount: 0, color: incomeColors[4] },
  { type: "Gifts", amount: 0, color: incomeColors[5] },
  { type: "Reimbursements", amount: 0, color: incomeColors[1] },
  { type: "Other", amount: 0, color: incomeColors[0] },
];

export const expenseCategories = [
  { type: "Grocery", amount: 0, color: expenseColors[0] },
  { type: "Food", amount: 0, color: expenseColors[1] },
  { type: "Shopping", amount: 0, color: expenseColors[2] },
  { type: "Travel", amount: 0, color: expenseColors[3] },
  { type: "Credit Card", amount: 0, color: expenseColors[4] },
  { type: "House", amount: 0, color: expenseColors[5] },
  { type: "Entertainment", amount: 0, color: expenseColors[6] },
  { type: "Phone", amount: 0, color: expenseColors[7] },
  { type: "Utilities", amount: 0, color: expenseColors[8] },
  { type: "Mortgage", amount: 0, color: expenseColors[9] },
  { type: "Others", amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
};
