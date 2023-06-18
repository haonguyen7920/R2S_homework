const inventory = [
  { type: "machine", value: 5000 },

  { type: "machine", value: 650 },

  { type: "duck", value: 10 },

  { type: "furniture", value: 1200 },

  { type: "machine", value: 77 },
];

function sortInventory() {
  inventory.sort((a, b) => a.value - b.value);
}

sortInventory();

console.log(inventory);
